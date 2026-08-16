# Linear Algebra Concept Check

A lightweight, static practice app for introductory linear algebra. It is intended for low-stakes, no-credit conceptual practice alongside a course using Lay-style organization.

## What the app currently does

- True/false questions with immediate feedback.
- Some questions add a second-stage **Why?** prompt before revealing the explanation.
- Explanations and counterexamples are treated as part of the practice.
- Filters for all sections together or any single section.
- Mostly-core / core-only / more-hypothesis-check question mixes.
- Lightweight weakness-aware sampling using browser-local history.
- Approximate balancing of true and false statements within a session.
- No accounts, gradebook, analytics server, or backend.
- Responsive layout for desktop and mobile.
- Math rendering through MathJax.

The bank contains independently written questions covering the main definitions and ideas from §§1.1–1.5 and §1.7.

## Run locally

Because this is a static site, the simplest options are:

1. Open `index.html` directly in a browser; or
2. Serve the folder locally, for example:

```bash
python -m http.server 8000
```

Then visit `http://localhost:8000`.

MathJax is loaded from a CDN, so rendered mathematics requires an internet connection unless MathJax is later bundled locally.

## Publish with GitHub Pages

This repository needs no build step. Push it to GitHub and configure Pages to publish from the repository root (or from `main` / root, depending on the GitHub UI).

## Files

- `index.html` — application shell.
- `viewer.html` — instructor question browser (see below).
- `report-config.js` — where question reports are sent; empty until configured.
- `tools/` — reserved-homework cross-check and assignment builder.
- `styles.css` — layout and visual design.
- `app.js` — quiz state, local progress, adaptive sampling.
- `questions.js` — the question bank; intentionally separated from app logic.
- `AI_HANDOFF.md` — pedagogical vision, design constraints, content standards, and roadmap.
- `tests/validate-questions.mjs` — lightweight validation for question-bank edits.
- `package.json` — exposes `npm test` for the validator.

## Collecting reports about questions

Once the explanation is on screen, each question offers **Report a problem**. The
dialog confirms which question is being flagged and opens the Google form with the
question id and the student's answer already prefilled. The student picks a
category and describes the problem on the form itself, then presses Submit.

Splitting it this way is deliberate: prefill can fill a Google form but cannot
submit it, so a second press is unavoidable. Collecting the description in the app
as well would have meant typing once and pressing Submit twice, which read as a
mistake. Now nothing is entered twice and exactly one button in the flow says
Submit. Practice history is never transmitted.

The configured form restricts responses to signed-in users, so a report is also
tied to the student's school account. The dialog says so before they continue. If
you change that setting in Google Forms, change the dialog's wording to match — it
is a promise about what leaves the browser, so it has to stay true.

The question id and answer are written to `localStorage` before the hand-off, so an
abandoned or blocked form still leaves a trace that the question drew a complaint.

Reporting is off by default in the sense that no destination is configured yet.
Open `report-config.js` and paste in a form URL plus the prefill parameter names;
instructions for finding those in Microsoft Forms and Google Forms are in the file.
Until you do, pressing send copies a formatted report to the clipboard for the
student to email instead, so nothing is broken in the meantime.

## Instructor question browser

`viewer.html` lists the whole bank with filters for section, concept, topic, truth
value, difficulty, variant, presence of a “Why?” prompt, and presence of a
counterexample, plus a free-text search and a bank-health panel that mirrors the
warnings `npm test` produces.

It is **unlisted, not private**. Nothing links to it from the student app, but it
reads the same `questions.js` the app already downloads to every visitor's browser,
so it exposes nothing new. Treat the whole bank as public: a student who opens the
app's source can read every question, answer, and explanation. Anything that must
stay unseen cannot live in this repository at all — see the homework bank below.

## Reserved homework questions

Questions you intend to assign must not be readable by students, and **nothing in
this repository can meet that bar** — the site serves every file it contains, and a
public repository is readable even before publication. So the reserved bank lives
in `instructor/`, which is gitignored in full:

- `instructor/homework-bank.js` — the reserved questions. Never committed, never
  deployed, never loaded by the app or the viewer.
- `instructor/out/` — generated assignments and keys.

Each reserved item is true/false **plus a required written justification**, so that
recognizing the truth value is not enough to earn the credit.

```bash
npm run check:homework
```

Cross-checks the reserved bank against the public one: it fails on id collisions
and near-verbatim statements, and warns when a reserved question shares wording, or
shares a concept/answer/misconception, with a public one. Treat the warnings as a
review queue rather than a verdict — lexical overlap cannot tell "the same question
reworded" apart from "the same topic making a different point," and both occur.
`npm test` runs this too, and skips it silently when `instructor/` is absent.

```bash
npm run build:assignment -- --title "Homework 5" --sections 1.5,1.7 --count 6 --seed wfu
```

Writes `instructor/out/homework-5.html` and `instructor/out/homework-5-key.html`.
Open either in a browser and print to PDF. Pass `--ids hw-1.3-02,hw-1.7-04` to pick
questions explicitly, and `--seed` to make a random selection reproducible so a
rebuild does not reshuffle an assignment you have already handed out. The key is a
separate file so that distributing one cannot distribute the other.

## Validate the question bank

If Node is installed:

```bash
npm test
```

The validator checks required fields, IDs, answer types, `why` answer keys, section labels, and duplicate statements. It also reports on content health: stray control characters (the signature of a TeX macro that lost a backslash), truth-value balance overall and within each section, variant, and difficulty, and concepts that are carried by a single question or whose questions all share one answer.

## Copyright / authorship policy

The content should remain independently worded. A textbook may determine **which concepts appear when**, but contributors should not copy textbook prose, theorem statements, examples, or exercises into the public bank. Mathematical facts, definitions, and theorem content should be expressed in our own words.

See `AI_HANDOFF.md` for more detail.
