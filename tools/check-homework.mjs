// Cross-checks the reserved homework bank against the public app bank.
//
// The threat this guards against: a student brute-forces the practice app until
// they recognize tonight's homework problem, then copies the answer. Identical
// wording is the obvious failure, but near-identical wording is just as usable,
// so this compares normalized content words rather than exact strings.
//
// The homework bank lives in instructor/, which is gitignored. When it is absent
// this script reports that and exits 0, so `npm test` stays green on a fresh
// clone that has no instructor material.

import fs from "node:fs";
import vm from "node:vm";

const root = new URL("..", import.meta.url);
const appPath = new URL("questions.js", root);
const hwPath = new URL("instructor/homework-bank.js", root);

function loadBank(url, globalName) {
  const sandbox = { window: {} };
  vm.createContext(sandbox);
  vm.runInContext(fs.readFileSync(url, "utf8"), sandbox);
  return sandbox.window[globalName];
}

if (!fs.existsSync(hwPath)) {
  console.log("No instructor/homework-bank.js present; skipping homework cross-check.");
  process.exit(0);
}

const app = loadBank(appPath, "QUESTION_BANK");
const hw = loadBank(hwPath, "HOMEWORK_BANK");

const errors = [];
const warnings = [];

// ---------------------------------------------------------------- normalizing
const STOP = new Set(`a an the is are was were be been being of in on for to from
with without by as at into and or not no if then than that this these those it its
its it's has have had can could may might must should would will shall do does did
every each any all some only when where which who whom whose what how why there
here we you they i he she`.split(/\s+/));

// Reduce a statement to the tokens a student would actually recognize.
//
// The mathematics has to survive this, not just the English. An earlier version
// discarded TeX wholesale and scored "a 4x6 matrix ... span R^4" against
// "a 4x3 matrix ... span R^4" at 1.00, because both collapsed to
// {matrix, columns, span}. Dimensions, indices, and macro names are exactly what
// distinguishes two questions built on the same sentence frame, so keep them:
// strip the delimiters and braces but retain macro names and single characters.
function tokens(text) {
  return String(text)
    .replace(/\\[()[\]]/g, " ")          // the \( \) \[ \] delimiters only
    .replace(/\\([a-zA-Z]+)/g, " $1 ")   // keep macro names: \times -> times
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, " ")
    .split(/\s+/)
    .filter(w => w && !STOP.has(w));
}

function jaccard(a, b) {
  const A = new Set(a), B = new Set(b);
  if (!A.size || !B.size) return 0;
  let shared = 0;
  for (const w of A) if (B.has(w)) shared++;
  return shared / (A.size + B.size - shared);
}

// ------------------------------------------------------------------ id/schema
const appIds = new Set(app.map(q => q.id));
const seen = new Set();

for (const [i, q] of hw.entries()) {
  const label = q.id || `index ${i}`;
  for (const f of ["id", "section", "topic", "concept", "statement", "answer", "justification", "expected"]) {
    if (q[f] === undefined || q[f] === "") errors.push(`${label}: missing ${f}`);
  }
  if (typeof q.answer !== "boolean") errors.push(`${label}: answer must be boolean`);
  if (appIds.has(q.id)) errors.push(`${label}: id collides with a question in the public bank`);
  if (seen.has(q.id)) errors.push(`${label}: duplicate id within the homework bank`);
  seen.add(q.id);
  if ([...String(q.statement)].some(c => c.codePointAt(0) < 32)) {
    errors.push(`${label}.statement: control character, likely a TeX macro missing a backslash`);
  }
}

// --------------------------------------------------------------- distinctness
const appTokens = app.map(q => ({ q, t: tokens(q.statement) }));
const report = [];

for (const h of hw) {
  const ht = tokens(h.statement);
  let best = { score: 0, q: null };
  for (const a of appTokens) {
    const s = jaccard(ht, a.t);
    if (s > best.score) best = { score: s, q: a.q };
  }
  report.push({ h, best });

  // Lexical overlap cannot tell "the same question reworded" apart from "the same
  // topic making a different point" — two items can share a sentence frame and
  // still teach opposite lessons. So only near-verbatim overlap fails the build;
  // the middle band is surfaced for a human to judge, and the full ranked report
  // prints either way.
  if (best.score >= 0.85) {
    errors.push(`${h.id}: nearly verbatim against public question ${best.q.id} (overlap ${best.score.toFixed(2)})`);
  } else if (best.score >= 0.55) {
    warnings.push(`${h.id}: shares wording with public question ${best.q.id} (overlap ${best.score.toFixed(2)}) — check that it makes a different point`);
  }

  // Same concept, same answer, and the same misconception being probed means a
  // student who has drilled that app item has effectively seen this one, even if
  // the sentences differ.
  const twin = app.find(a =>
    a.concept === h.concept && a.answer === h.answer &&
    h.misconception && a.misconception === h.misconception);
  if (twin) {
    warnings.push(`${h.id}: same concept, answer, and misconception as public question ${twin.id}`);
  }
}

// -------------------------------------------------------------------- summary
const t = hw.filter(q => q.answer).length;
console.log(`Homework bank: ${hw.length} reserved questions (${t} true, ${hw.length - t} false).`);

const bySection = new Map();
for (const q of hw) bySection.set(q.section, (bySection.get(q.section) || 0) + 1);
console.log("  by section: " + [...bySection].sort().map(([s, n]) => `§${s}=${n}`).join(", "));

const closest = report.slice().sort((a, b) => b.best.score - a.best.score).slice(0, 6);
console.log("  closest matches against the public bank (review these by eye):");
for (const r of closest) {
  console.log(`    ${r.best.score.toFixed(2)}  ${r.h.id} ~ ${r.best.q ? r.best.q.id : "(none)"}`);
}

for (const w of warnings) console.warn(`WARNING: ${w}`);
if (errors.length) {
  for (const e of errors) console.error(`ERROR: ${e}`);
  process.exit(1);
}
console.log("Homework bank is distinct from the public bank.");
