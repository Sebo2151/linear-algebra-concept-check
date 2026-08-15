# AI HANDOFF: Linear Algebra Concept Check

This document is for future work with desktop AI coding tools (Codex, Claude Code, etc.). Read this before making substantive changes.

## 1. Pedagogical vision

The app addresses a recurring issue in introductory linear algebra: students often arrive expecting mathematics to be primarily a sequence of computational algorithms. They may practice row reduction successfully while paying much less attention to definitions, hypotheses, equivalences, and theorem conclusions.

True/false questions are useful because they demand conceptual discrimination without reducing the task to verbatim theorem recitation. The goal is to train habits such as:

- What does this definition actually require?
- Which direction of an implication is justified?
- Is a hypothesis missing?
- Is this statement confusing two nearby concepts?
- Can I produce a counterexample when the statement is false?
- Does the terminology even apply to the object being discussed?

This is **low-stakes, no-credit practice**, analogous to a graphical-limits trainer. It should feel safe to use repeatedly before homework, quizzes, and exams.

The app is not primarily a memorization system and should not become a reimplementation of Anki.

## 2. Core design choice: adaptive remediation, not full spaced repetition

The app stores only lightweight browser-local performance data.

It may:
- remember which concepts the student misses;
- resurface weak concepts somewhat more frequently;
- favor unseen questions;
- repeat a concept later through a different question;
- summarize conceptual weak spots.

It should NOT, absent a future explicit decision, grow features such as:
- forgetting-curve modeling;
- retention targets;
- due dates / overdue cards;
- elaborate interval scheduling;
- leech handling;
- cross-device review synchronization.

If the project begins requiring those features, consider exporting suitable material to Anki instead.

## 3. The unit of practice is richer than a flashcard

A typical interaction is:

1. Read a mathematical statement.
2. Commit to True or False.
3. On selected items, answer a second-stage “Why?” question.
4. Read a concise explanation.
5. For false statements, see a counterexample when that is the clearest diagnosis.

The second-stage “Why?” is especially valuable. Correct T/F recognition can coexist with a wrong reason, and the app should be able to expose that.

Potential future interactions, if pedagogically justified:
- choose which hypothesis fails;
- choose a valid counterexample;
- match a statement to the definition/theorem that controls it;
- compare two almost-identical statements;
- small concrete matrix examples that ask the student to identify a pivot/basic/free variable without doing a full calculation.

Do not add interaction types merely for novelty.

## 4. Question-bank philosophy

The question bank is the central intellectual asset of the project. Code is secondary.

Questions should be generated systematically from conceptual nodes:
- direct use of a definition;
- negation of a definition;
- confusion with a nearby definition;
- theorem consequence;
- converse error;
- missing-hypothesis error;
- quantifier error;
- concrete counterexample;
- terminology/category error.

### Quality standard for every question

Before accepting a question, verify:

1. It has exactly one unambiguous truth value under the conventions of this course.
2. Any required hypotheses are present unless their omission is the point of the item.
3. The explanation is mathematically correct.
4. Any example/counterexample actually works.
5. It tests the intended concept, rather than obscure wording.
6. It is not a “gotcha” whose difficulty is mostly linguistic.
7. Its phrasing is independently authored and does not reproduce textbook prose.
8. It is tagged with the misconception it is designed to probe.
9. Difficulty and `variant` are plausible.
10. TeX renders correctly.

Favor clean sentences. Avoid double negatives and lawyerly wording.

## 5. Core vs. hypothesis-awareness questions

The app deliberately distinguishes:

- `variant: "core"` — tests the mathematical relationship directly.
- `variant: "hypothesis"` — deliberately removes or alters a hypothesis, or probes a technically important edge.

Default practice should be mostly core questions. Hypothesis-awareness items are valuable, but if they dominate, students may learn the unhelpful meta-strategy “everything is false because some technical assumption is missing.”

Current sampling:
- **Mostly core** downweights hypothesis items.
- **Core only** removes them.
- **More hypothesis checks** upweights them.

This can be tuned later, but preserve the pedagogical distinction.

## 6. Truth-value balance

A badly imbalanced bank is gameable. Try to keep the bank reasonably balanced overall and within large topic groups.

The session sampler also downweights whichever truth value is already overrepresented in the current session.

Do not force exact alternation; that would itself become predictable.

### Balance within anything the student can see before answering

The quiz card displays the variant ("Core concept" / "Hypothesis awareness") and the
difficulty before the student commits to True or False. Any truth-value skew inside
one of those visible groups is worse than overall skew, because it converts an
on-screen label into a partial answer key.

This was a real defect in the first version of the bank: every difficulty-3 item was
false, and hypothesis items were 4/5 false. A student could clear the hardest
questions by reading the badge instead of the statement — precisely the meta-strategy
section 5 warns about, reinforced by the interface rather than merely tolerated by it.

`npm test` now warns on skew within each variant and each difficulty. Keep those
groups mixed, or remove the badge.

## 7. Course organization and textbook independence

The course is based on Lay, so the section labels track that course organization. This is useful for choosing material students have already encountered.

However:

> The textbook may determine the curriculum map; the public question text should be ours.

Do not copy textbook exercises, examples, prose definitions, or theorem statements. Mathematical content should be restated independently.

The app should eventually support course presets such as “Homework 1,” “Quiz 1,” or “Exam 1” without requiring the student to know section numbers.

## 8. Important mathematical nuance found during initial development

### Row-equivalent augmented matrices vs. equivalent systems

Safe statement:

> If two augmented matrices are row equivalent, then their corresponding systems have the same solution set.

The converse is false in general.

Reason: all inconsistent systems have the same empty solution set, but their augmented matrices need not be row equivalent.

Example in variables \(x,y\):

- \(x=0,\;0=1\)
- \(y=0,\;0=1\)

Both systems are inconsistent, hence equivalent under the definition “same solution set,” but their augmented matrices have different RREFs.

Do NOT encode a general biconditional here.

### “Need RREF for parametric form”

Pedagogically, RREF is the clean standard form from which students can read a parametric description directly. Mathematically, it is too strong to say RREF is *necessary*: REF plus back-substitution also suffices.

Current bank intentionally teaches:

- REF is enough to decide consistency.
- RREF makes the parametric description directly readable.
- It is false that obtaining a parametric description from REF is mathematically impossible.

This distinction prevents training an inaccurate theorem.

## 9. Current content scope

### §1.1
- linear equations;
- systems, solutions, solution sets, equivalence;
- no / one / infinitely many solutions;
- consistent vs. inconsistent;
- coefficient and augmented matrices;
- \(m\times n\) dimensions;
- matrix vs. system terminology;
- elementary row operations;
- row equivalence;
- solution-set preservation under row operations.

### §1.2
- leading entries;
- REF;
- RREF;
- uniqueness of RREF (not REF);
- pivot positions and pivot columns;
- Gaussian elimination;
- basic and free variables;
- choosing free variables and determining basic variables;
- parametric descriptions;
- existence and uniqueness theorem;
- REF for consistency;
- RREF as the convenient form for explicit solution descriptions.

## 10. Data model

Questions live in `questions.js` as plain data. Keep content separate from UI logic.

Current schema:

```js
{
  id: "1.2-existence-06",
  section: "1.2",
  topic: "Existence and uniqueness",
  concept: "unique-solution",
  statement: "...",
  answer: false,
  difficulty: 2,
  variant: "hypothesis",
  misconception: "...",
  explanation: "...",
  counterexample: "...",       // optional
  why: {                       // optional
    prompt: "...",
    choices: ["...", "..."],
    correct: 0
  }
}
```

Use stable IDs. Once students may have stored local history, changing an ID makes the app treat the question as new.

### TeX inside JavaScript strings

Every backslash in a TeX macro must be doubled, because these are JavaScript string
literals. Writing `\ne` instead of `\\ne` does not raise an error: JavaScript consumes
it as a newline, and MathJax then silently renders `be0` where `b \ne 0` was intended.
Unrecognized escapes such as `\c` are worse — the backslash is simply dropped, leaving
no trace at all. `npm test` catches the control-character half of this; the rest is
caught only by reading the rendered page.

### Concept tags are load-bearing

`concept` drives the adaptive resurfacing, so it is not a free-text label. A concept
carried by a single question can never be revisited through a different item, which is
the whole promise of section 2. Two questions that are the two directions of one
implication should share a concept, or the engine cannot connect them.

## 11. Local adaptivity

`app.js` currently uses:
- concept miss rate;
- per-question exposure/miss counts;
- novelty bonus;
- question-mix weighting;
- rough T/F balancing.

This is intentionally simple and interpretable.

Potential next improvement:
- separate T/F correctness from “Why?” correctness at the concept level;
- distinguish a student who knows the truth value but repeatedly chooses the wrong justification;
- optionally resurface a missed concept after several intervening questions within the same session.

Do not add an opaque ML model.

## 12. Privacy and persistence

Progress is stored in `localStorage` under:

`linear-algebra-concept-check-v1`

No account or backend exists.

If the storage schema changes incompatibly, migrate it or deliberately increment the versioned key.

## 13. Likely next steps

Recommended order:

1. ~~Instructor review of the existing §1.1–1.2 bank.~~ Done; the bank grew from 53 to 74 items in response.
2. ~~Add or revise questions where coverage is thin.~~ Done for singleton concepts; every concept now has at least two questions.
3. Add course presets (“Homework 1: §§1.1–1.2”).
4. Improve second-stage “Why?” coverage. Partly done: every difficulty-3 item now has one, but overall coverage is still only 12/74.
5. Add a developer-only question browser / filter page for reviewing the bank.
6. Add lightweight within-session resurfacing of missed concepts.
7. Only after the pedagogy feels right, expand to §§1.3+.

Difficulty is still bottom-heavy (45 / 24 / 5 across levels 1–3). A session drawn
from this bank is mostly recall. Worth addressing before expanding the scope.

A developer question browser would be especially useful: show every item with filters for section, concept, truth value, difficulty, and variant, plus counts. This would make editorial review much easier.

## 14. Things to avoid

- Turning the app into a graded homework platform.
- Randomly generating mathematical statements at runtime.
- Using an LLM to decide truth values live.
- Excessively tricky omitted-hypothesis questions.
- Copying textbook prose/problems.
- Treating raw accuracy as mastery without looking at concept tags.
- Adding login/backend infrastructure without a clear pedagogical need.
- Reimplementing Anki-style scheduling.
- Over-animating a tool whose central task is careful reading.

## 15. Testing

Run:

```bash
npm test
```

before committing question-bank changes.

The validator is intentionally simple. It should grow as repeated content errors reveal useful invariants to enforce.
