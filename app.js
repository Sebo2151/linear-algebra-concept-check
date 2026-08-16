
(() => {
  const BANK = window.QUESTION_BANK || [];
  const STORAGE_KEY = "linear-algebra-concept-check-v1";
  // Kept separate from progress so that resetting practice history does not
  // discard reports the student has not sent yet, and vice versa.
  const REPORTS_KEY = "linear-algebra-concept-check-reports-v1";

  const el = id => document.getElementById(id);
  const state = {
    settings: null,
    targetLength: 0,
    askedIds: new Set(),
    current: null,
    questionNumber: 0,
    tfCorrect: 0,
    whyAnswered: 0,
    whyCorrect: 0,
    sessionConcepts: {},
    awaitingWhy: false,
    lastAnswer: null
  };

  function blankProgress() {
    return { questions: {}, concepts: {} };
  }

  function loadProgress() {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEY)) || blankProgress();
    } catch {
      return blankProgress();
    }
  }

  let progress = loadProgress();

  function saveProgress() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  }

  function typeset(node) {
    if (window.MathJax?.typesetPromise) {
      window.MathJax.typesetPromise(node ? [node] : undefined).catch(() => {});
    }
  }

  function eligibleQuestions() {
    const { section, mix } = state.settings;
    return BANK.filter(q => {
      if (section !== "all" && q.section !== section) return false;
      if (mix === "core" && q.variant !== "core") return false;
      return true;
    });
  }

  function conceptWeakness(concept) {
    const c = progress.concepts[concept];
    if (!c || c.seen === 0) return 0.35;
    return c.missed / c.seen;
  }

  function weightedPick(items) {
    const scored = items.map(q => {
      const qStats = progress.questions[q.id] || { seen: 0, missed: 0 };
      let weight = 1;
      weight += conceptWeakness(q.concept) * 2.4;
      if (!qStats.seen) weight += 1.1;
      if (qStats.missed) weight += Math.min(2, qStats.missed * 0.45);

      if (state.settings.mix === "standard" && q.variant === "hypothesis") weight *= 0.45;
      if (state.settings.mix === "challenge" && q.variant === "hypothesis") weight *= 1.7;

      // Keep the session from drifting too heavily toward one truth value.
      const seenTrue = state._seenTrue || 0;
      const seenFalse = state._seenFalse || 0;
      if (q.answer && seenTrue > seenFalse + 1) weight *= 0.45;
      if (!q.answer && seenFalse > seenTrue + 1) weight *= 0.45;

      return { q, weight };
    });

    const total = scored.reduce((sum, x) => sum + x.weight, 0);
    let r = Math.random() * total;
    for (const item of scored) {
      r -= item.weight;
      if (r <= 0) return item.q;
    }
    return scored.at(-1)?.q;
  }

  function nextQuestion() {
    let pool = eligibleQuestions().filter(q => !state.askedIds.has(q.id));
    if (pool.length === 0) pool = eligibleQuestions();
    const q = weightedPick(pool);
    if (!q) return finishSession();

    state.current = q;
    state.askedIds.add(q.id);
    state.questionNumber += 1;
    state.awaitingWhy = false;
    state.lastAnswer = null;
    if (q.answer) state._seenTrue = (state._seenTrue || 0) + 1;
    else state._seenFalse = (state._seenFalse || 0) + 1;
    renderQuestion(q);
  }

  function renderQuestion(q) {
    el("sectionBadge").textContent = `Section ${q.section}`;
    el("topicBadge").textContent = q.topic;
    el("progressText").textContent = `${state.questionNumber} of ${state.targetLength}`;
    el("progressFill").style.width = `${((state.questionNumber - 1) / state.targetLength) * 100}%`;
    // Difficulty and variant are deliberately not shown. They read as internal
    // jargon to a student, and because easy items skew true and hypothesis items
    // skew false, displaying them let a reader beat questions without reading
    // them. Both fields remain in the data and in the instructor viewer.
    el("statement").innerHTML = q.statement;

    document.querySelectorAll(".answer-button").forEach(btn => {
      btn.disabled = false;
      btn.classList.remove("selected", "correct", "incorrect");
    });

    el("verdictBox").className = "verdict hidden";
    el("whyArea").classList.add("hidden");
    el("whyChoices").innerHTML = "";
    el("explanationArea").classList.add("hidden");
    el("explanationText").innerHTML = "";
    el("counterexampleBox").classList.add("hidden");
    el("counterexampleBox").innerHTML = "";
    el("nextButton").classList.add("hidden");
    el("reportButton").classList.add("hidden");
    typeset(el("statement"));
  }

  function recordConcept(q, wasCorrect) {
    const c = progress.concepts[q.concept] || { seen: 0, missed: 0 };
    c.seen += 1;
    if (!wasCorrect) c.missed += 1;
    progress.concepts[q.concept] = c;

    const s = state.sessionConcepts[q.concept] || { seen: 0, correct: 0 };
    s.seen += 1;
    if (wasCorrect) s.correct += 1;
    state.sessionConcepts[q.concept] = s;
  }

  function recordQuestion(q, wasCorrect) {
    const s = progress.questions[q.id] || { seen: 0, missed: 0 };
    s.seen += 1;
    if (!wasCorrect) s.missed += 1;
    s.lastSeen = Date.now();
    progress.questions[q.id] = s;
    saveProgress();
  }

  function handleTF(chosen) {
    const q = state.current;
    if (!q) return;
    const chosenBool = chosen === "true";
    const correct = chosenBool === q.answer;
    state.lastAnswer = chosenBool;

    document.querySelectorAll(".answer-button").forEach(btn => {
      btn.disabled = true;
      const btnBool = btn.dataset.answer === "true";
      if (btnBool === chosenBool) {
        btn.classList.add("selected", correct ? "correct" : "incorrect");
      }
    });

    if (correct) state.tfCorrect += 1;
    recordConcept(q, correct);
    recordQuestion(q, correct);

    const verdict = el("verdictBox");
    verdict.textContent = correct
      ? "Correct."
      : `Not quite — the statement is ${q.answer ? "true" : "false"}.`;
    verdict.className = `verdict ${correct ? "good" : "bad"}`;

    if (q.why) {
      state.awaitingWhy = true;
      renderWhy(q);
    } else {
      revealExplanation(q);
    }
  }

  function renderWhy(q) {
    el("whyPrompt").innerHTML = q.why.prompt;
    const container = el("whyChoices");
    container.innerHTML = "";
    q.why.choices.forEach((choice, index) => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "why-choice";
      btn.innerHTML = choice;
      btn.addEventListener("click", () => handleWhy(index));
      container.appendChild(btn);
    });
    el("whyArea").classList.remove("hidden");
    typeset(el("whyArea"));
  }

  function handleWhy(index) {
    if (!state.awaitingWhy) return;
    state.awaitingWhy = false;
    const q = state.current;
    const correct = index === q.why.correct;
    state.whyAnswered += 1;
    if (correct) state.whyCorrect += 1;

    [...el("whyChoices").children].forEach((btn, i) => {
      btn.disabled = true;
      if (i === q.why.correct) btn.classList.add("correct");
      else if (i === index) btn.classList.add("incorrect");
    });

    revealExplanation(q);
  }

  function revealExplanation(q) {
    el("explanationText").innerHTML = q.explanation;
    if (q.counterexample) {
      el("counterexampleBox").innerHTML = q.counterexample;
      el("counterexampleBox").classList.remove("hidden");
    }
    el("explanationArea").classList.remove("hidden");
    el("nextButton").classList.remove("hidden");
    // Only offered once the explanation is visible: before that the student has
    // no basis for judging the item, and a report would mostly mean "I got it
    // wrong" rather than "this question is broken".
    el("reportButton").classList.remove("hidden");
    el("progressFill").style.width = `${(state.questionNumber / state.targetLength) * 100}%`;
    typeset(el("explanationArea"));
  }

  function goNext() {
    if (state.questionNumber >= state.targetLength) finishSession();
    else nextQuestion();
  }

  function finishSession() {
    state.current = null;
    el("quizView").classList.add("hidden");
    el("resultsView").classList.remove("hidden");

    const tfPct = state.questionNumber ? Math.round((state.tfCorrect / state.questionNumber) * 100) : 0;
    const whyPct = state.whyAnswered ? Math.round((state.whyCorrect / state.whyAnswered) * 100) : null;

    el("scoreSummary").innerHTML = `
      <div class="score-box"><strong>${state.tfCorrect}/${state.questionNumber}</strong><span>True/false judgments (${tfPct}%)</span></div>
      <div class="score-box"><strong>${state.whyAnswered ? `${state.whyCorrect}/${state.whyAnswered}` : "—"}</strong><span>${state.whyAnswered ? `Why questions (${whyPct}%)` : "No why questions this session"}</span></div>
    `;

    const entries = Object.entries(state.sessionConcepts)
      .sort((a, b) => (a[1].correct / a[1].seen) - (b[1].correct / b[1].seen));

    el("conceptSummary").innerHTML = entries.length
      ? `<h3>By concept</h3>` + entries.map(([concept, s]) => {
          const pct = Math.round((s.correct / s.seen) * 100);
          return `
            <div class="concept-row">
              <div>${friendlyConcept(concept)}</div>
              <div class="concept-bar"><div class="concept-fill" style="width:${pct}%"></div></div>
              <div class="concept-stat">${s.correct}/${s.seen}</div>
            </div>`;
        }).join("")
      : "<p>No completed questions yet.</p>";

    updateWeaknessNote();
  }

  // Concept slugs are internal tags, and title-casing them leaks that fact to the
  // student: "Unique Rref", "Spans Rm", "Matrix Vs System". Anything that does not
  // survive title-casing as ordinary English gets a written-out label here; the
  // rest fall through. Plain text only, since the results view is not typeset.
  const CONCEPT_LABELS = {
    "consistency-test": "Testing for consistency",
    "dependence-characterization": "When a list is dependent",
    "homogeneous-span": "Solution set of Ax = 0",
    "independence-columns": "Independence of the columns",
    "infinite-solutions": "Infinitely many solutions",
    "matrix-equation-equivalence": "Ax = b, vectors, and systems",
    "matrix-vector-linearity": "Algebra of Ax",
    "matrix-vector-product": "The product Ax",
    "matrix-vs-system": "Matrix versus system language",
    "nontrivial-solution": "Nontrivial solutions",
    "one-vector-independence": "Independence of a single vector",
    "parametric-form": "Parametric descriptions",
    "pivot-in-every-row": "A pivot in every row",
    "ref": "Echelon form",
    "ref-suffices": "When echelon form is enough",
    "ref-vs-rref": "Echelon versus reduced echelon form",
    "row-vector-rule": "The row rule for Ax",
    "rref": "Reduced echelon form",
    "solution-count": "How many solutions a system has",
    "solution-set-geometry": "Picturing a solution set",
    "solvability-columns": "When Ax = b has a solution",
    "span-geometry": "Picturing a span",
    "spans-rm": "Spanning the whole space",
    "too-many-vectors": "Having more vectors than dimensions",
    "trivial-solution": "The trivial solution",
    "two-vector-independence": "Independence of two vectors",
    "unique-rref": "Uniqueness of reduced echelon form",
    "unique-solution": "Having exactly one solution",
    "zero-vector-dependence": "Lists containing the zero vector"
  };

  function friendlyConcept(slug) {
    return CONCEPT_LABELS[slug] || slug
      .split("-")
      .map(w => w.charAt(0).toUpperCase() + w.slice(1))
      .join(" ");
  }

  function updateWeaknessNote() {
    const ranked = Object.entries(progress.concepts)
      .filter(([, s]) => s.seen >= 2)
      .map(([concept, s]) => ({ concept, weakness: s.missed / s.seen, seen: s.seen }))
      .filter(x => x.weakness >= 0.34)
      .sort((a, b) => b.weakness - a.weakness)
      .slice(0, 3);

    const note = el("weaknessNote");
    if (!ranked.length) {
      note.classList.add("hidden");
      return;
    }
    note.textContent = `You've been missing more questions about: ${ranked.map(x => friendlyConcept(x.concept)).join(", ")}. Later sessions will show you more of these.`;
    note.classList.remove("hidden");
  }

  function startSession() {
    state.settings = {
      section: el("sectionSelect").value,
      mix: el("mixSelect").value
    };
    state.targetLength = Math.min(Number(el("lengthSelect").value), eligibleQuestions().length);
    state.askedIds = new Set();
    state.current = null;
    state.questionNumber = 0;
    state.tfCorrect = 0;
    state.whyAnswered = 0;
    state.whyCorrect = 0;
    state.sessionConcepts = {};
    state._seenTrue = 0;
    state._seenFalse = 0;

    el("setupView").classList.add("hidden");
    el("resultsView").classList.add("hidden");
    el("quizView").classList.remove("hidden");
    nextQuestion();
  }

  function backToSetup() {
    el("quizView").classList.add("hidden");
    el("resultsView").classList.add("hidden");
    el("setupView").classList.remove("hidden");
    updateWeaknessNote();
  }

  document.querySelectorAll(".answer-button").forEach(btn => {
    btn.addEventListener("click", () => handleTF(btn.dataset.answer));
  });

  // ---------------------------------------------------------------- reporting
  // Reports are written to localStorage first and only then handed off, so a
  // closed tab or a misconfigured form cannot silently lose one.
  function saveReport(entry) {
    let log = [];
    try { log = JSON.parse(localStorage.getItem(REPORTS_KEY)) || []; } catch { log = []; }
    log.push(entry);
    try { localStorage.setItem(REPORTS_KEY, JSON.stringify(log.slice(-50))); } catch {}
  }

  function reportText(entry) {
    return [
      `Question: ${entry.questionId}`,
      `My answer: ${entry.answered}`,
      `When: ${entry.when}`,
      "",
      "What seems wrong:"
    ].join("\n");
  }

  // Only the facts the app already knows are prefilled. The category and the
  // description are typed on the form itself, which keeps the student from
  // entering the same thing twice and leaves exactly one button called Submit in
  // the whole flow.
  function prefilledFormUrl(entry) {
    const cfg = window.REPORT_CONFIG;
    if (!cfg || !cfg.formUrl) return null;
    const url = new URL(cfg.formUrl);
    for (const [key, param] of Object.entries(cfg.fields || {})) {
      if (param && entry[key] != null) url.searchParams.set(param, String(entry[key]));
    }
    return url.toString();
  }

  function openReportDialog() {
    const q = state.current;
    if (!q) return;
    el("reportQid").textContent = q.id;
    el("reportStatement").innerHTML = q.statement;
    el("reportStatus").classList.add("hidden");
    el("reportDialog").showModal();
    typeset(el("reportStatement"));
  }

  async function openReportForm() {
    const q = state.current;
    if (!q) return;
    const entry = {
      questionId: q.id,
      answered: state.lastAnswer == null ? "unanswered" : String(state.lastAnswer),
      when: new Date().toISOString()
    };
    // Recorded before the hand-off, so an abandoned or blocked form still leaves
    // a trace that this question was worth a second look.
    saveReport(entry);

    const status = el("reportStatus");
    status.classList.remove("hidden");
    const url = prefilledFormUrl(entry);
    if (url) {
      window.open(url, "_blank", "noopener");
      status.textContent = "The form should have opened in a new tab. Describe the problem there and press Submit to send it.";
      return;
    }
    const body = `${window.REPORT_CONFIG?.fallbackInstructions || ""}\n\n${reportText(entry)}`;
    try {
      await navigator.clipboard.writeText(body);
      status.textContent = "Details copied to your clipboard. Paste them into an email to your instructor and describe the problem.";
    } catch {
      status.textContent = reportText(entry);
    }
  }

  el("reportButton").addEventListener("click", openReportDialog);
  el("reportOpen").addEventListener("click", openReportForm);

  el("nextButton").addEventListener("click", goNext);
  el("startButton").addEventListener("click", startSession);
  el("practiceAgainButton").addEventListener("click", backToSetup);
  el("endSessionButton").addEventListener("click", finishSession);
  el("aboutButton").addEventListener("click", () => el("aboutDialog").showModal());

  el("resetProgressButton").addEventListener("click", () => {
    if (!confirm("Reset all locally stored practice history for this app?")) return;
    progress = blankProgress();
    localStorage.removeItem(STORAGE_KEY);
    updateWeaknessNote();
  });

  updateWeaknessNote();
})();
