
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
    lastAnswer: null,
    lastCorrect: null,
    lastWhyCorrect: null,
    whyOrder: [],
    // Counts questions actually answered, not questions displayed. Ending a
    // session on an unanswered question must not put it in the denominator.
    answered: 0
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

  const PRESETS = window.COURSE_PRESETS || [];
  // Sampling logic lives in sampling.js so tests can drive the same code the app
  // runs. Do not inline a copy of any of it here.
  const SAMPLING = window.SAMPLING;

  function eligibleQuestions() {
    const { section, mix } = state.settings;
    const allowed = SAMPLING.sectionsFor(section, PRESETS);
    return BANK.filter(q => {
      if (allowed && !allowed.includes(q.section)) return false;
      if (mix === "core" && q.variant !== "core") return false;
      return true;
    });
  }

  function weightedPick(items) {
    const session = {
      mix: state.settings.mix,
      seenTrue: state._seenTrue || 0,
      seenFalse: state._seenFalse || 0
    };
    const weights = items.map(q => SAMPLING.weightFor(q, progress, session));
    return SAMPLING.pick(items, weights);
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

  // Stored beside the true/false counts rather than replacing them, and read with
  // `|| 0` so history written before these fields existed still loads.
  function recordWhy(q, wasCorrect) {
    const c = progress.concepts[q.concept] || { seen: 0, missed: 0 };
    c.whySeen = (c.whySeen || 0) + 1;
    if (!wasCorrect) c.whyMissed = (c.whyMissed || 0) + 1;
    progress.concepts[q.concept] = c;
    saveProgress();
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
    state.lastCorrect = correct;
    state.lastWhyCorrect = null;
    state.answered += 1;

    // Mark the choice but withhold whether it was right. Telling a student the
    // truth value here would hand them most of the reasoning question that
    // follows, and "right answer, wrong reason" is exactly what the second stage
    // is meant to expose.
    document.querySelectorAll(".answer-button").forEach(btn => {
      btn.disabled = true;
      if ((btn.dataset.answer === "true") === chosenBool) btn.classList.add("selected");
    });

    if (correct) state.tfCorrect += 1;
    recordConcept(q, correct);
    recordQuestion(q, correct);

    if (q.why) {
      state.awaitingWhy = true;
      renderWhy(q);
    } else {
      revealVerdict(q);
      revealExplanation(q);
    }
  }

  // Called once both commitments are in, so the two results appear together.
  function revealVerdict(q) {
    const tf = state.lastCorrect;
    const why = state.lastWhyCorrect;

    document.querySelectorAll(".answer-button.selected").forEach(btn => {
      btn.classList.add(tf ? "correct" : "incorrect");
    });

    let text, tone;
    if (tf && why === false) {
      text = "Right answer, but not the reason we were after.";
      tone = "mixed";
    } else if (tf && why === true) {
      text = "Correct, and for the right reason.";
      tone = "good";
    } else if (tf) {
      text = "Correct.";
      tone = "good";
    } else {
      const truth = q.answer ? "true" : "false";
      text = why === true
        ? `Not quite — the statement is ${truth}. Your reasoning was on the right track.`
        : `Not quite — the statement is ${truth}.`;
      tone = "bad";
    }

    const verdict = el("verdictBox");
    verdict.textContent = text;
    verdict.className = `verdict ${tone}`;
  }

  function renderWhy(q) {
    el("whyPrompt").innerHTML = q.why.prompt;
    const container = el("whyChoices");
    container.innerHTML = "";

    // Shuffle on every view. The stored lists put the correct choice first almost
    // everywhere, which would otherwise be learnable in a couple of sessions, and
    // reshuffling per view also stops a student memorising the position of a
    // question they have seen before.
    const order = SAMPLING.shuffledOrder(q.why.choices.length);
    state.whyOrder = order;

    order.forEach((original, position) => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "why-choice";
      btn.innerHTML = `<span class="why-key">${position + 1}</span>${q.why.choices[original]}`;
      btn.addEventListener("click", () => handleWhy(original));
      container.appendChild(btn);
    });
    el("whyArea").classList.remove("hidden");
    typeset(el("whyArea"));
  }

  function handleWhy(original) {
    if (!state.awaitingWhy) return;
    state.awaitingWhy = false;
    const q = state.current;
    const correct = original === q.why.correct;
    state.lastWhyCorrect = correct;
    state.whyAnswered += 1;
    if (correct) state.whyCorrect += 1;
    recordWhy(q, correct);

    // Buttons are in shuffled order, so map each position back before marking it.
    [...el("whyChoices").children].forEach((btn, position) => {
      btn.disabled = true;
      const source = state.whyOrder[position];
      if (source === q.why.correct) btn.classList.add("correct");
      else if (source === original) btn.classList.add("incorrect");
    });

    revealVerdict(q);
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

    // Denominator is questions answered, not questions shown. Ending a session on
    // a question the student never answered used to count it as a miss.
    const answered = state.answered;
    const tfPct = answered ? Math.round((state.tfCorrect / answered) * 100) : 0;
    const whyPct = state.whyAnswered ? Math.round((state.whyCorrect / state.whyAnswered) * 100) : null;

    el("scoreSummary").innerHTML = `
      <div class="score-box"><strong>${state.tfCorrect}/${answered}</strong><span>True/false judgments (${tfPct}%)</span></div>
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

  // Student-facing concept names live in concept-labels.js, shared with the
  // instructor viewer so the two cannot drift apart.
  const CONCEPT_LABELS = window.CONCEPT_LABELS || {};

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
    state.answered = 0;
    state.lastCorrect = null;
    state.lastWhyCorrect = null;
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

  // ------------------------------------------------------- material menu setup
  // Presets first, then one entry per section actually present in the bank, so a
  // new section needs no edit here.
  function buildSectionMenu() {
    const select = el("sectionSelect");
    for (const p of PRESETS) {
      select.insertAdjacentHTML("beforeend", `<option value="${p.id}">${p.label}</option>`);
    }
    const sections = [...new Set(BANK.map(q => q.section))].sort();
    for (const s of sections) {
      select.insertAdjacentHTML("beforeend", `<option value="${s}">Section ${s} only</option>`);
    }
    select.selectedIndex = 0;
  }

  // ------------------------------------------------------------------ keyboard
  // Practice is rapid, and reaching for the mouse for every judgement is friction.
  function handleKey(e) {
    if (e.metaKey || e.ctrlKey || e.altKey) return;
    // A real keypress targets an element, but not every event does; `document`
    // itself has no closest(), so guard before asking.
    const target = e.target instanceof Element ? e.target : null;
    if (target && target.closest("input, textarea, select, dialog")) return;
    if (document.querySelector("dialog[open]")) return;
    if (el("quizView").classList.contains("hidden")) return;

    const key = e.key.toLowerCase();
    const next = el("nextButton");

    if (state.awaitingWhy) {
      const n = Number(e.key);
      const buttons = [...el("whyChoices").children];
      if (n >= 1 && n <= buttons.length) {
        e.preventDefault();
        buttons[n - 1].click();
      }
      return;
    }
    if (!next.classList.contains("hidden") && (e.key === "Enter" || e.key === " ")) {
      e.preventDefault();
      next.click();
      return;
    }
    const tf = document.querySelector(".answer-button:not([disabled])");
    if (!tf) return;
    if (key === "t") { e.preventDefault(); handleTF("true"); }
    else if (key === "f") { e.preventDefault(); handleTF("false"); }
  }

  // ----------------------------------------------------------------- rendering
  // MathJax comes from a CDN. If it never arrives, every statement stays as raw
  // TeX and the app is unusable, so say so rather than leaving backslashes on the
  // screen for a student to puzzle over.
  function checkMathLoaded() {
    if (window.MathJax?.typesetPromise) return;
    el("mathWarning").classList.remove("hidden");
  }

  document.querySelectorAll(".answer-button").forEach(btn => {
    btn.addEventListener("click", () => handleTF(btn.dataset.answer));
  });
  document.addEventListener("keydown", handleKey);

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

  buildSectionMenu();
  updateWeaknessNote();
  setTimeout(checkMathLoaded, 6000);
})();
