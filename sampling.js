// The question sampler, split out from app.js so that it can be exercised
// directly by tests.
//
// This lives on its own because its failures are silent. Every function here
// returns something plausible when it is wrong: a weight that is quietly NaN, a
// picker that quietly always returns the same item, a shuffle that quietly is
// not one. Nothing throws and nothing looks broken on screen, so the only way to
// know is to run it many times and look at the distribution. Tests that
// reimplement these formulas cannot do that — they would test the copy — which
// is why app.js calls exactly what tests/sampling.test.mjs calls.

window.SAMPLING = {
  // Default weight for a concept the student has never met. Low enough not to
  // swamp known-weak concepts, high enough that new material still appears.
  UNSEEN_CONCEPT_WEAKNESS: 0.35,

  // `record` is the stored per-concept object, or undefined for a concept with
  // no history. Must return a finite number for every shape that has ever been
  // written to localStorage, including partial ones.
  conceptWeakness(record) {
    if (!record) return this.UNSEEN_CONCEPT_WEAKNESS;

    // Everything here comes out of localStorage, which an older version of the
    // app or a curious student may have written. Coerce and range-check rather
    // than trusting the shape: a rate of NaN propagates into a question weight,
    // and a single bad weight is enough to break the picker for the whole bank.
    const rate = (missed, seen) => {
      const s = Number(seen);
      if (!Number.isFinite(s) || s <= 0) return null;
      const m = Number(missed);
      const r = (Number.isFinite(m) ? m : 0) / s;
      return Math.min(1, Math.max(0, r));
    };

    const tfRate = rate(record.missed, record.seen);
    if (tfRate === null) return this.UNSEEN_CONCEPT_WEAKNESS;

    // whyMissed is only written on a wrong answer, so it is absent for a concept
    // whose reasons have all been right. Reading it as 0 rather than undefined
    // is the whole point: `undefined / n` is NaN.
    const whyRate = rate(record.whyMissed, record.whySeen);
    if (whyRate === null) return tfRate;

    return Math.max(tfRate, (tfRate + whyRate) / 2);
  },

  // Weight of one question given stored progress and the state of this session.
  weightFor(q, progress, session) {
    const qStats = (progress.questions && progress.questions[q.id]) || { seen: 0, missed: 0 };
    const conceptRecord = progress.concepts && progress.concepts[q.concept];

    let weight = 1;
    weight += this.conceptWeakness(conceptRecord) * 2.4;
    if (!qStats.seen) weight += 1.1;
    if (qStats.missed) weight += Math.min(2, qStats.missed * 0.45);

    if (session.mix === "standard" && q.variant === "hypothesis") weight *= 0.45;
    if (session.mix === "challenge" && q.variant === "hypothesis") weight *= 1.7;

    // Keep the session from drifting too heavily toward one truth value.
    const seenTrue = session.seenTrue || 0;
    const seenFalse = session.seenFalse || 0;
    if (q.answer && seenTrue > seenFalse + 1) weight *= 0.45;
    if (!q.answer && seenFalse > seenTrue + 1) weight *= 0.45;

    // Last line of defence. A non-finite weight is catastrophic in `pick`: every
    // comparison against the running remainder is false, the loop falls through,
    // and the same item is returned on every call.
    if (!Number.isFinite(weight) || weight <= 0) weight = 1;
    return weight;
  },

  // Roulette selection over parallel arrays. `random` is injectable so tests can
  // drive it deterministically.
  pick(items, weights, random = Math.random) {
    if (!items.length) return undefined;
    let total = 0;
    for (const w of weights) total += Number.isFinite(w) && w > 0 ? w : 0;
    if (total <= 0) return items[Math.floor(random() * items.length)];

    let r = random() * total;
    for (let i = 0; i < items.length; i++) {
      const w = Number.isFinite(weights[i]) && weights[i] > 0 ? weights[i] : 0;
      r -= w;
      if (r <= 0) return items[i];
    }
    return items[items.length - 1];
  },

  // A permutation of 0..count-1, used to shuffle "Why?" choices at display time.
  shuffledOrder(count, random = Math.random) {
    const order = [];
    for (let i = 0; i < count; i++) order.push(i);
    for (let i = order.length - 1; i > 0; i--) {
      const j = Math.floor(random() * (i + 1));
      const tmp = order[i];
      order[i] = order[j];
      order[j] = tmp;
    }
    return order;
  },

  // Resolve a Material menu choice to a list of sections, or null for all.
  sectionsFor(choice, presets) {
    const preset = (presets || []).find(p => p.id === choice);
    if (preset) return preset.sections;
    return [choice];
  }
};
