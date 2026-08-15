// Builds a printable assignment and a separate answer key from the reserved
// homework bank.
//
//   npm run build:assignment -- --title "Homework 5" --sections 1.5,1.7 --count 6
//   npm run build:assignment -- --title "Quiz 2" --ids hw-1.3-02,hw-1.7-04
//
// Output lands in instructor/out/, which is gitignored along with the rest of
// instructor/. The key is a separate file on purpose: handing out one file
// should never risk handing out the other.

import fs from "node:fs";

const root = new URL("..", import.meta.url);
const hwPath = new URL("instructor/homework-bank.js", root);
const outDir = new URL("instructor/out/", root);

if (!fs.existsSync(hwPath)) {
  console.error("No instructor/homework-bank.js found. Nothing to build.");
  process.exit(1);
}

// ------------------------------------------------------------------ arguments
const argv = process.argv.slice(2);
const arg = (name, fallback) => {
  const i = argv.indexOf("--" + name);
  return i >= 0 && argv[i + 1] ? argv[i + 1] : fallback;
};

const title = arg("title", "Concept Check Homework");
const sections = arg("sections", "").split(",").map(s => s.trim()).filter(Boolean);
const ids = arg("ids", "").split(",").map(s => s.trim()).filter(Boolean);
const count = Number(arg("count", "0"));
const seed = arg("seed", "");

// ------------------------------------------------------------------ selection
import vm from "node:vm";
const sandbox = { window: {} };
vm.createContext(sandbox);
vm.runInContext(fs.readFileSync(hwPath, "utf8"), sandbox);
const bank = sandbox.window.HOMEWORK_BANK;

let chosen;
if (ids.length) {
  chosen = ids.map(id => {
    const q = bank.find(x => x.id === id);
    if (!q) { console.error(`No homework question with id ${id}`); process.exit(1); }
    return q;
  });
} else {
  let pool = sections.length ? bank.filter(q => sections.includes(q.section)) : bank.slice();
  if (!pool.length) { console.error("No questions match those sections."); process.exit(1); }
  if (count > 0 && count < pool.length) {
    // Deterministic when a seed is supplied, so a rebuild reproduces the same
    // sheet rather than quietly reshuffling a printed assignment.
    let s = [...String(seed)].reduce((a, c) => a + c.charCodeAt(0), 7) || 7;
    const rand = () => (s = (s * 1103515245 + 12345) % 2147483648) / 2147483648;
    pool = pool.map(q => ({ q, k: seed ? rand() : Math.random() }))
               .sort((a, b) => a.k - b.k).map(x => x.q);
    pool = pool.slice(0, count);
  }
  chosen = pool.sort((a, b) => a.id.localeCompare(b.id));
}

// --------------------------------------------------------------------- output
const shell = (heading, body, isKey) => `<!doctype html>
<html lang="en"><head><meta charset="utf-8">
<title>${heading}</title>
<script>window.MathJax={tex:{inlineMath:[['\\\\(','\\\\)']]},svg:{fontCache:'global'}};<\/script>
<script defer src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-svg.js"><\/script>
<style>
  body { font: 12pt/1.55 Georgia, "Times New Roman", serif; max-width: 44em; margin: 2em auto; padding: 0 1.5em; color:#111; }
  h1 { font-size: 1.4em; margin-bottom: .1em; }
  .meta { color:#555; font-size:.85em; margin-bottom:1.6em; }
  ol { padding-left: 1.4em; }
  li { margin-bottom: ${isKey ? "1.4em" : "2.2em"}; page-break-inside: avoid; }
  .stmt { margin-bottom:.5em; }
  .ask { font-style: italic; color:#333; font-size:.92em; }
  .tf { margin:.6em 0 .4em; letter-spacing:.02em; }
  .work { border-bottom:1px solid #bbb; height:1.5em; margin-top:.55em; }
  .ans { font-weight:700; }
  .exp { margin-top:.3em; }
  .tag { color:#666; font-size:.8em; }
  .keybanner { background:#fbe9ec; border:1px solid #e2a9b5; padding:.6em .9em; margin-bottom:1.5em; font-family:sans-serif; font-size:.85em; }
  @media print { body { margin:0; } .noprint { display:none; } }
</style></head><body>
<h1>${heading}</h1>
<div class="meta">${isKey ? "Answer key and grading notes" : "Decide whether each statement is true or false, then justify your answer. A bare true or false earns no credit."}</div>
${isKey ? '<div class="keybanner"><strong>Instructor copy.</strong> Do not distribute. Generated from the reserved homework bank, which is not part of the practice app.</div>' : ""}
<ol>${body}</ol>
</body></html>`;

const assignmentBody = chosen.map(q => `
  <li>
    <div class="stmt">${q.statement}</div>
    <div class="ask">${q.justification}</div>
    <div class="tf">True &nbsp;/&nbsp; False</div>
    ${'<div class="work"></div>'.repeat(4)}
  </li>`).join("");

// The expected answers are written to read as prose and usually open with their
// own "True." / "False.", which would double up under the verdict label.
const stripVerdict = s => String(s).replace(/^\s*(True|False)\.\s*/i, "");

const keyBody = chosen.map(q => `
  <li>
    <div class="stmt">${q.statement}</div>
    <div class="ask">${q.justification}</div>
    <div class="exp"><span class="ans">${q.answer ? "TRUE" : "FALSE"}.</span> ${stripVerdict(q.expected)}</div>
    <div class="tag">${q.id} · §${q.section} · ${q.concept}</div>
  </li>`).join("");

fs.mkdirSync(outDir, { recursive: true });
const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
const aPath = new URL(`${slug}.html`, outDir);
const kPath = new URL(`${slug}-key.html`, outDir);

fs.writeFileSync(aPath, shell(title, assignmentBody, false));
fs.writeFileSync(kPath, shell(`${title} — Key`, keyBody, true));

const t = chosen.filter(q => q.answer).length;
console.log(`${title}: ${chosen.length} questions (${t} true, ${chosen.length - t} false)`);
console.log(`  ${chosen.map(q => q.id).join(", ")}`);
console.log(`  assignment -> ${decodeURIComponent(aPath.pathname).replace(/^\//, "")}`);
console.log(`  key        -> ${decodeURIComponent(kPath.pathname).replace(/^\//, "")}`);
console.log("Open either file in a browser and print to PDF.");
