# Linear Algebra Concept Check

A lightweight, static practice app for introductory linear algebra. It is intended for low-stakes, no-credit conceptual practice alongside a course using Lay-style organization.

## What the app currently does

- True/false questions with immediate feedback.
- Some questions add a second-stage **Why?** prompt before revealing the explanation.
- Explanations and counterexamples are treated as part of the practice.
- Filters for §1.1, §1.2, or both.
- Mostly-core / core-only / more-hypothesis-check question mixes.
- Lightweight weakness-aware sampling using browser-local history.
- Approximate balancing of true and false statements within a session.
- No accounts, gradebook, analytics server, or backend.
- Responsive layout for desktop and mobile.
- Math rendering through MathJax.

The initial bank contains independently written questions covering the main definitions and ideas from §§1.1–1.2.

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
- `styles.css` — layout and visual design.
- `app.js` — quiz state, local progress, adaptive sampling.
- `questions.js` — the question bank; intentionally separated from app logic.
- `AI_HANDOFF.md` — pedagogical vision, design constraints, content standards, and roadmap.
- `tests/validate-questions.mjs` — lightweight validation for question-bank edits.
- `package.json` — exposes `npm test` for the validator.

## Validate the question bank

If Node is installed:

```bash
npm test
```

The validator checks required fields, IDs, answer types, `why` answer keys, section labels, duplicate statements, and truth-value balance.

## Copyright / authorship policy

The content should remain independently worded. A textbook may determine **which concepts appear when**, but contributors should not copy textbook prose, theorem statements, examples, or exercises into the public bank. Mathematical facts, definitions, and theorem content should be expressed in our own words.

See `AI_HANDOFF.md` for more detail.
