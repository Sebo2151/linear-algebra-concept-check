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

### Words that quietly create two truth values

Standard 1 is the one most often broken by accident, and usually by a single word
rather than by the mathematics.

**“means”** slides between *is defined as* and *implies*, and the two readings can
disagree. “Linear independence of \(v_1,\dots,v_p\) means that no two of the vectors
are equal” is false as a definition and true as an implication, so the item had no
single answer. It was rewritten as “If no two of the vectors are equal, then the
list is linearly independent,” which is unambiguously false. Prefer **“if … then”**
for one direction and **“exactly when”** or **“if and only if”** for both. Use
“means” only where both readings agree, as in 1.4-spansrm-05.

Watch the same way for:

- **“can”** and **“must”** — “can be inconsistent” asks about existence of an
  example, “must be inconsistent” asks about every case. Decide which you want.
- **“any”** — “any three vectors span \(\mathbb{R}^3\)” reads as *every* to most
  students and as *some* to a few. Write “every” or “some”.
- **“only”** — placement changes the claim: “only pivot columns give free
  variables” is not “pivot columns give only free variables”.
- **bare plurals** — “vectors in a dependent list are combinations of the others”
  hides whether that is *some* or *all*. Quantify explicitly.

When a statement turns on a quantifier or on one direction of an implication, that
is often the point of the item. Make it the point in the wording too, rather than
leaving the reader to guess which reading was intended.

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
groups mixed, or remove the badge. The tolerance tightens as a group grows, since
a lopsided 5-item group means little and a lopsided 40-item group means a lot.

There is a standing authoring bias behind this. Easy items tend to be "state the
definition correctly," which reads as true; harder items tend to be "spot the
subtle error," which reads as false. Left alone this pushes difficulty 1 toward
true and difficulty 2 toward false in every section. It is worth deliberately
writing easy false items and harder true ones.

Known residue: §1.1 and §1.2 still sit at 65% and 59% true among their
difficulty-1 items. Fixing that means rewriting reviewed questions, so it is
left as an instructor decision rather than done silently. Every section written
since is close to even, which has pulled the global difficulty-1 figure down
from 66% to 57%.

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

### §1.3
- column vectors as \(n\times1\) matrices;
- equality, addition, scalar multiplication;
- the zero vector, and the scalar/vector distinction;
- geometric picture in the plane and space, parallelogram rule;
- algebraic properties of \(\mathbb{R}^n\), and the \(-v\) / \(v-w\) notation;
- linear combinations and weights;
- the vector equation and its equivalence with an augmented-matrix system;
- span;
- span of one nonzero vector as a line, of two non-parallel vectors as a plane.

### §1.4
- the product \(Ax\) as a linear combination of the columns of \(A\);
- matrix equations;
- the equivalence of \(Ax=b\), the vector equation, and the augmented-matrix system;
- solvability of \(Ax=b\) as membership of \(b\) in the span of the columns;
- what it means for a set of vectors to span \(\mathbb{R}^m\);
- the four equivalent conditions, including a pivot position in every row;
- the row-vector rule;
- distributivity of \(Ax\) over addition and scalar multiplication.

### §1.5
- homogeneous systems, and why they are always consistent;
- trivial and nontrivial solutions;
- a nontrivial solution exists exactly when there is a free variable;
- the solution set of \(Ax=0\) as a span, including the \(\operatorname{Span}\{0\}\) case;
- parametric vector form;
- the \(p+v_h\) description of the solutions of a consistent \(Ax=b\);
- the consistency hypothesis that description requires;
- translation as the geometric picture, and why a solution set with \(b\ne0\) is not a span.

### §1.7
- the definitions of linear independence and dependence;
- linear dependence relations, and the force of "not all zero";
- independence of the columns of \(A\) versus \(Ax=0\) having only the trivial solution;
- one-vector and two-vector cases;
- dependence as some vector being a linear combination of the others, including the indexed form;
- more than \(n\) vectors in \(\mathbb{R}^n\) are dependent;
- a list containing the zero vector is dependent.

### §1.6 is deliberately absent

Section numbering skips from 1.5 to 1.7 because the course does not cover §1.6.
Nothing is broken. Do not "fix" it by renumbering, and remember that a label such
as "Sections 1.1–1.7" would misdescribe the bank.

### Scalars are real

The course does not treat complex vector spaces. Keep every statement, example,
and explanation over the real numbers. An earlier item about complex coefficients
was removed for this reason. Where a claim genuinely depends on the field — a
system having exactly two solutions, or a free variable forcing infinitely many —
say "real" rather than leaving the scalars unspecified.

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
4. Improve second-stage “Why?” coverage. Partly done: every difficulty-3 item written so far has one, and coverage is now 41/215.
5. Add a developer-only question browser / filter page for reviewing the bank.
6. Add lightweight within-session resurfacing of missed concepts.
7. ~~Only after the pedagogy feels right, expand to §§1.3+.~~ §§1.3–1.5 and §1.7 added.

Difficulty is bottom-heavy (97 / 99 / 19 across levels 1–3), though far less so
than it was. This is deliberate for §1.1, which is genuinely easy material, and
has been accepted. Revisit it if later sections inherit the same shape without
the same excuse.

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
