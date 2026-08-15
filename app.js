
(() => {
  const BANK = window.QUESTION_BANK || [];
  const STORAGE_KEY = "linear-algebra-concept-check-v1";

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
    awaitingWhy: false
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
      if (section !== "both" && q.section !== section) return false;
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
    if (q.answer) state._seenTrue = (state._seenTrue || 0) + 1;
    else state._seenFalse = (state._seenFalse || 0) + 1;
    renderQuestion(q);
  }

  function renderQuestion(q) {
    el("sectionBadge").textContent = `Section ${q.section}`;
    el("topicBadge").textContent = q.topic;
    el("progressText").textContent = `${state.questionNumber} of ${state.targetLength}`;
    el("progressFill").style.width = `${((state.questionNumber - 1) / state.targetLength) * 100}%`;
    el("questionKind").textContent = q.variant === "hypothesis" ? "Hypothesis awareness" : "Core concept";
    el("difficultyText").textContent = `Difficulty ${q.difficulty}/3`;
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

  function friendlyConcept(slug) {
    return slug
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
    note.textContent = `This browser has seen more difficulty with: ${ranked.map(x => friendlyConcept(x.concept)).join(", ")}. Future sessions will gently favor those ideas.`;
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
