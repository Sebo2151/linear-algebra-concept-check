
import fs from "node:fs";
import vm from "node:vm";

const source = fs.readFileSync(new URL("../questions.js", import.meta.url), "utf8");
const sandbox = { window: {} };
vm.createContext(sandbox);
vm.runInContext(source, sandbox);

const bank = sandbox.window.QUESTION_BANK;
const errors = [];
const warnings = [];

if (!Array.isArray(bank) || bank.length === 0) {
  errors.push("Question bank is missing or empty.");
} else {
  const ids = new Set();
  const statements = new Set();
  const validSections = new Set(["1.1", "1.2"]);
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
}

console.log(`Validated ${bank?.length || 0} questions.`);
for (const warning of warnings) console.warn(`WARNING: ${warning}`);
if (errors.length) {
  for (const error of errors) console.error(`ERROR: ${error}`);
  process.exit(1);
}
console.log("Question bank validation passed.");
