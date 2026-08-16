
import fs from "node:fs";
import vm from "node:vm";

const source = fs.readFileSync(new URL("../questions.js", import.meta.url), "utf8");
const sandbox = { window: {} };
vm.createContext(sandbox);
vm.runInContext(source, sandbox);

const bank = sandbox.window.QUESTION_BANK;
const errors = [];
const warnings = [];

// TeX macros are written inside JavaScript strings, so every backslash must be
// doubled. A single backslash before a letter is either silently dropped by the
// parser or, worse, turned into a control character: "\ne" becomes a newline and
// MathJax then renders "be0" instead of b != 0. Control characters are the
// detectable half of that mistake, so reject them outright.
function scanStrings(value, path, visit) {
  if (typeof value === "string") visit(path, value);
  else if (value && typeof value === "object") {
    for (const [key, child] of Object.entries(value)) scanStrings(child, `${path}.${key}`, visit);
  }
}

// Truth-value skew inside a group the student can *see* before answering is worse
// than overall skew: it turns an on-screen badge into an answer key. Small groups
// swing naturally, so the tolerance tightens as a group grows: a 5-item group has
// to be badly lopsided to mean anything, but a 40-item group at 65% true is a real
// signal that authoring habits are leaking into the answers.
function checkGroupBalance(label, questions) {
  if (questions.length >= 3 && questions.every(q => q.answer === questions[0].answer)) {
    warnings.push(`${label} has ${questions.length} questions and every one of them is ${questions[0].answer}.`);
    return;
  }
  if (questions.length < 5) return;
  const [low, high] = questions.length >= 40 ? [0.4, 0.6] : [0.25, 0.75];
  const trues = questions.filter(q => q.answer).length;
  const ratio = trues / questions.length;
  if (ratio < low || ratio > high) {
    warnings.push(`${label} truth-value balance is ${trues}/${questions.length} true (${Math.round(ratio * 100)}%).`);
  }
}

if (!Array.isArray(bank) || bank.length === 0) {
  errors.push("Question bank is missing or empty.");
} else {
  const ids = new Set();
  const statements = new Set();
  const validSections = new Set(["1.1", "1.2", "1.3", "1.4", "1.5", "1.7", "1.8", "1.9"]);
  let trueCount = 0;

  for (const [i, q] of bank.entries()) {
    const label = q.id || `index ${i}`;
    for (const field of ["id","section","topic","concept","statement","answer","difficulty","variant","misconception","explanation"]) {
      if (q[field] === undefined || q[field] === "") errors.push(`${label}: missing ${field}`);
    }

    if (ids.has(q.id)) errors.push(`${label}: duplicate id`);
    ids.add(q.id);

    if (statements.has(q.statement)) errors.push(`${label}: duplicate statement`);
    statements.add(q.statement);

    if (!validSections.has(q.section)) errors.push(`${label}: invalid section ${q.section}`);
    if (typeof q.answer !== "boolean") errors.push(`${label}: answer must be boolean`);
    if (![1,2,3].includes(q.difficulty)) errors.push(`${label}: difficulty must be 1, 2, or 3`);
    if (!["core","hypothesis"].includes(q.variant)) errors.push(`${label}: invalid variant ${q.variant}`);
    if (q.answer === true) trueCount += 1;

    if (q.why) {
      if (!Array.isArray(q.why.choices) || q.why.choices.length < 2) {
        errors.push(`${label}: why.choices must contain at least two choices`);
      } else if (!Number.isInteger(q.why.correct) || q.why.correct < 0 || q.why.correct >= q.why.choices.length) {
        errors.push(`${label}: why.correct is out of range`);
      }
    }

    scanStrings(q, label, (path, text) => {
      if ([...text].some(ch => ch.codePointAt(0) < 32)) {
        errors.push(`${path}: contains a control character, which usually means a TeX macro lost a backslash`);
      }
    });
  }

  const ratio = trueCount / bank.length;
  if (ratio < 0.4 || ratio > 0.6) {
    warnings.push(`Truth-value balance is ${trueCount}/${bank.length} true (${Math.round(ratio*100)}%). Consider moving closer to 50/50.`);
  }

  for (const section of validSections) {
    const qs = bank.filter(q => q.section === section);
    const t = qs.filter(q => q.answer).length;
    const ratioSection = qs.length ? t / qs.length : 0;
    if (qs.length < 10) warnings.push(`Section ${section} has only ${qs.length} questions.`);
    if (ratioSection < 0.35 || ratioSection > 0.65) {
      warnings.push(`Section ${section} truth-value balance is ${t}/${qs.length} true.`);
    }
  }

  // The quiz card shows the variant and the difficulty before the student
  // commits. If either label correlates with the answer, it becomes a shortcut
  // around reading the statement.
  for (const variant of ["core", "hypothesis"]) {
    checkGroupBalance(`Variant "${variant}"`, bank.filter(q => q.variant === variant));
  }
  for (const difficulty of [1, 2, 3]) {
    checkGroupBalance(`Difficulty ${difficulty}`, bank.filter(q => q.difficulty === difficulty));
  }

  // Concept tags drive the adaptive resurfacing, so a concept carried by a single
  // question cannot be revisited through a different item, and a concept whose
  // questions all share one answer can be cleared without understanding it.
  const byConcept = new Map();
  for (const q of bank) {
    if (!byConcept.has(q.concept)) byConcept.set(q.concept, []);
    byConcept.get(q.concept).push(q);
  }
  for (const [concept, qs] of [...byConcept].sort()) {
    if (qs.length < 2) {
      warnings.push(`Concept "${concept}" has only one question, so it cannot be resurfaced through a different item.`);
    } else if (qs.length >= 3 && qs.every(q => q.answer === qs[0].answer)) {
      warnings.push(`Concept "${concept}" has ${qs.length} questions and every one of them is ${qs[0].answer}.`);
    }
  }
}

console.log(`Validated ${bank?.length || 0} questions.`);
for (const warning of warnings) console.warn(`WARNING: ${warning}`);
if (errors.length) {
  for (const error of errors) console.error(`ERROR: ${error}`);
  process.exit(1);
}
console.log("Question bank validation passed.");
