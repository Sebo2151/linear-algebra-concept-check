// Tests for the question sampler.
//
// These exist because of a bug that shipped and was invisible: a single NaN
// weight made `pick` fall through its loop and return the last question in the
// bank on every call. 300 consecutive sessions opened with the same question and
// nothing looked wrong — the questions were real, the page rendered, no error
// appeared. Only the distribution gave it away.
//
// Two rules follow, and they shape everything below.
//
//   1. Test the real code. An earlier hand-check reimplemented the weight
//      formula, found it uniform, and cleared the sampler — while the shipped
//      sampler was broken. A test that copies the logic tests the copy.
//   2. Assert on distributions, not on single calls. Every individual return
//      value was legitimate; only the aggregate was wrong.

import fs from "node:fs";
import vm from "node:vm";

const sandbox = { window: {} };
vm.createContext(sandbox);
for (const file of ["sampling.js", "questions.js", "course-presets.js"]) {
  vm.runInContext(fs.readFileSync(new URL(`../${file}`, import.meta.url), "utf8"), sandbox);
}
const SAMPLING = sandbox.window.SAMPLING;
const BANK = sandbox.window.QUESTION_BANK;
const PRESETS = sandbox.window.COURSE_PRESETS;

let failures = 0;
function check(name, ok, detail) {
  if (ok) return;
  failures++;
  console.error(`FAIL: ${name}${detail ? `\n      ${detail}` : ""}`);
}

// Deterministic generator, so a failure is reproducible rather than a one-off.
function seeded(seed) {
  let s = seed >>> 0;
  return () => {
    s = (s * 1664525 + 1013904223) >>> 0;
    return s / 4294967296;
  };
}

const blank = { questions: {}, concepts: {} };
const session = { mix: "standard", seenTrue: 0, seenFalse: 0 };

// ---------------------------------------------------------------------------
// conceptWeakness must return a finite number for every progress shape that has
// ever been written to localStorage. This is where the NaN came from: whyMissed
// is only written on a wrong answer, so it is absent for a concept whose reasons
// have all been right.
// ---------------------------------------------------------------------------
const RECORD_SHAPES = [
  ["absent", undefined],
  ["empty object", {}],
  ["never seen", { seen: 0, missed: 0 }],
  ["seen, none missed", { seen: 4, missed: 0 }],
  ["seen, some missed", { seen: 4, missed: 2 }],
  ["missed field absent", { seen: 3 }],
  ["why answered, none missed", { seen: 4, missed: 1, whySeen: 2 }],           // the bug
  ["why answered, some missed", { seen: 4, missed: 1, whySeen: 2, whyMissed: 1 }],
  ["why missed but whySeen absent", { seen: 4, missed: 1, whyMissed: 1 }],
  ["all fields zero", { seen: 0, missed: 0, whySeen: 0, whyMissed: 0 }],
  // localStorage is written by whatever version of the app ran last, and is
  // editable by anyone with devtools. Corrupt records must degrade, not poison.
  ["non-numeric seen", { seen: "four", missed: 1 }],
  ["non-numeric missed", { seen: 4, missed: "two" }],
  ["null fields", { seen: null, missed: null }],
  ["negative counts", { seen: -3, missed: -1 }],
  ["missed exceeds seen", { seen: 2, missed: 99 }],
  ["non-numeric whySeen", { seen: 4, missed: 1, whySeen: "two", whyMissed: 1 }],
  ["NaN injected directly", { seen: NaN, missed: NaN, whySeen: NaN, whyMissed: NaN }]
];
for (const [label, record] of RECORD_SHAPES) {
  const w = SAMPLING.conceptWeakness(record);
  check(`conceptWeakness is finite for: ${label}`, Number.isFinite(w), `got ${w}`);
  check(`conceptWeakness is in range for: ${label}`, w >= 0 && w <= 1, `got ${w}`);
}

// ---------------------------------------------------------------------------
// weightFor must likewise never produce a non-finite or non-positive weight,
// whatever the stored history looks like.
// ---------------------------------------------------------------------------
{
  const poisoned = { questions: {}, concepts: {} };
  for (const q of BANK) poisoned.concepts[q.concept] = { seen: 3, missed: 1, whySeen: 2 };
  let bad = 0;
  for (const q of BANK) {
    const w = SAMPLING.weightFor(q, poisoned, session);
    if (!Number.isFinite(w) || w <= 0) bad++;
  }
  check("weightFor is finite and positive under the whyMissed-absent history", bad === 0, `${bad} bad weights`);

  let badBlank = 0;
  for (const q of BANK) {
    const w = SAMPLING.weightFor(q, blank, session);
    if (!Number.isFinite(w) || w <= 0) badBlank++;
  }
  check("weightFor is finite and positive with no history", badBlank === 0, `${badBlank} bad weights`);

  // Corrupt *question* stats, which conceptWeakness never touches. This is the
  // path that only weightFor's own clamp defends, so without that clamp these
  // weights come out NaN.
  const corruptShapes = [
    { seen: 1, missed: "many" },
    { seen: "1", missed: {} },
    { seen: 1, missed: NaN },
    { seen: 1, missed: Infinity }
  ];
  for (const shape of corruptShapes) {
    const p = { questions: {}, concepts: {} };
    for (const q of BANK) p.questions[q.id] = shape;
    const bad = BANK.filter(q => {
      const w = SAMPLING.weightFor(q, p, session);
      return !Number.isFinite(w) || w <= 0;
    });
    check(`weightFor survives corrupt question stats ${JSON.stringify(shape)}`,
      bad.length === 0, `${bad.length} bad weights`);
  }
}

// ---------------------------------------------------------------------------
// The regression proper: draw many questions and confirm no section runs away
// with the session. Before the fix this produced one section 100% of the time.
// ---------------------------------------------------------------------------
function sectionShare(progress, draws, seed) {
  const rand = seeded(seed);
  const weights = BANK.map(q => SAMPLING.weightFor(q, progress, session));
  const tally = {};
  for (let i = 0; i < draws; i++) {
    const q = SAMPLING.pick(BANK, weights, rand);
    tally[q.section] = (tally[q.section] || 0) + 1;
  }
  return tally;
}

const bankShare = {};
for (const q of BANK) bankShare[q.section] = (bankShare[q.section] || 0) + 1;

for (const [label, progress] of [
  ["no history", blank],
  ["whyMissed absent everywhere", (() => {
    const p = { questions: {}, concepts: {} };
    for (const q of BANK) p.concepts[q.concept] = { seen: 3, missed: 1, whySeen: 2 };
    return p;
  })()]
]) {
  const draws = 20000;
  const tally = sectionShare(progress, draws, 12345);
  let worst = null;
  for (const section of Object.keys(bankShare)) {
    const expected = bankShare[section] / BANK.length;
    const observed = (tally[section] || 0) / draws;
    // Weighting legitimately moves these around, so the bar is deliberately
    // loose. It still fails hard on the actual bug, which drove one section to
    // 1.00 and every other to 0.
    const ratio = observed / expected;
    if (!worst || Math.abs(Math.log(ratio)) > Math.abs(Math.log(worst.ratio))) {
      worst = { section, ratio, observed, expected };
    }
  }
  check(
    `no section dominates or vanishes (${label})`,
    worst && worst.ratio > 0.4 && worst.ratio < 2.5,
    worst && `§${worst.section}: ${(worst.observed * 100).toFixed(1)}% observed vs ${(worst.expected * 100).toFixed(1)}% of the bank`
  );
}

// ---------------------------------------------------------------------------
// pick must honour the weights it is given, and must not collapse when handed a
// bad one. A NaN in the list should not silently redirect every draw.
// ---------------------------------------------------------------------------
{
  const items = ["a", "b", "c", "d"];
  const rand = seeded(99);
  const tally = { a: 0, b: 0, c: 0, d: 0 };
  for (let i = 0; i < 20000; i++) tally[SAMPLING.pick(items, [1, 1, 2, 4], rand)]++;
  const share = k => tally[k] / 20000;
  check("pick follows weights (1:1:2:4)",
    Math.abs(share("a") - 0.125) < 0.02 && Math.abs(share("d") - 0.5) < 0.03,
    JSON.stringify(tally));

  const rand2 = seeded(7);
  const t2 = { a: 0, b: 0, c: 0, d: 0 };
  for (let i = 0; i < 6000; i++) t2[SAMPLING.pick(items, [1, NaN, 1, 1], rand2)]++;
  check("a NaN weight does not redirect every draw to one item",
    Math.max(...Object.values(t2)) < 6000 * 0.6, JSON.stringify(t2));

  const rand3 = seeded(5);
  const t3 = {};
  for (let i = 0; i < 4000; i++) {
    const got = SAMPLING.pick(items, [NaN, NaN, NaN, NaN], rand3);
    t3[got] = (t3[got] || 0) + 1;
  }
  check("all-bad weights fall back to a spread, not a fixed item",
    Object.keys(t3).length === items.length, JSON.stringify(t3));
}

// ---------------------------------------------------------------------------
// Every question must be reachable. A question with weight 0 would never appear
// and nothing on screen would say so.
// ---------------------------------------------------------------------------
{
  for (const mix of ["standard", "core", "challenge"]) {
    const s = { mix, seenTrue: 0, seenFalse: 0 };
    const zero = BANK.filter(q => SAMPLING.weightFor(q, blank, s) <= 0);
    check(`every question has positive weight (mix=${mix})`, zero.length === 0,
      zero.slice(0, 3).map(q => q.id).join(", "));
  }
}

// ---------------------------------------------------------------------------
// shuffledOrder must be a permutation, and must not favour any position — the
// "Why?" answer-position leak in reverse.
// ---------------------------------------------------------------------------
{
  const rand = seeded(2024);
  let notPermutation = 0;
  const positionOfZero = [0, 0, 0, 0];
  const runs = 20000;
  for (let i = 0; i < runs; i++) {
    const order = SAMPLING.shuffledOrder(4, rand);
    const sorted = [...order].sort();
    if (order.length !== 4 || sorted.join() !== "0,1,2,3") notPermutation++;
    positionOfZero[order.indexOf(0)]++;
  }
  check("shuffledOrder always returns a permutation", notPermutation === 0, `${notPermutation} bad`);
  const off = positionOfZero.map(n => Math.abs(n / runs - 0.25));
  check("shuffledOrder does not favour a position", Math.max(...off) < 0.02,
    positionOfZero.join(", "));
  check("shuffledOrder handles a single choice",
    SAMPLING.shuffledOrder(1, rand).join() === "0");
}

// ---------------------------------------------------------------------------
// Material presets must resolve to sections that exist, or the menu silently
// offers an empty practice session.
// ---------------------------------------------------------------------------
{
  const known = new Set(BANK.map(q => q.section));
  for (const p of PRESETS) {
    const sections = SAMPLING.sectionsFor(p.id, PRESETS);
    if (sections === null) {
      check(`preset "${p.id}" covering everything is non-empty`, BANK.length > 0);
      continue;
    }
    const missing = sections.filter(s => !known.has(s));
    check(`preset "${p.id}" names only sections that exist`, missing.length === 0, missing.join(", "));
    const pool = BANK.filter(q => sections.includes(q.section));
    check(`preset "${p.id}" selects a non-empty pool`, pool.length > 0);
  }
  const bare = SAMPLING.sectionsFor("1.3", PRESETS);
  check("a bare section label resolves to itself", bare.length === 1 && bare[0] === "1.3");
}

console.log(`Sampler: ${failures === 0 ? "all checks passed." : `${failures} check(s) failed.`}`);
if (failures) process.exit(1);
