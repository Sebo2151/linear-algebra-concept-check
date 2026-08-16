// Where "Report a problem" sends its reports.
//
// Until formUrl is filled in, the app falls back to copying a formatted report to
// the student's clipboard along with fallbackInstructions. Nothing breaks either
// way, so the app can ship before the form exists.
//
// To wire up a Google Form:
//
//   1. Create a form with four questions, all of type "Short answer":
//      question id, the student's answer, the problem category, the details.
//      Use Short answer even for the category. Prefill only populates a
//      multiple-choice question when the value matches an option string exactly,
//      and this app sends slugs such as "wrong-answer".
//   2. Three-dot menu -> "Get pre-filled link", type a placeholder into each
//      field, then "Get link" and copy it.
//   3. The copied link looks like
//        https://docs.google.com/forms/d/e/FORM_ID/viewform?usp=pp_url&entry.111=...
//      Paste everything up to and including ?usp=pp_url into formUrl, and each
//      entry.NNN name into the matching field below.
//   4. Decide, deliberately, whether responses are restricted to signed-in users.
//      Restricting deters spam and lets you follow up on a vague report, at the
//      cost of a sign-in step mid-session and of attaching an identity to every
//      report. This form IS restricted, and the report dialog says so in plain
//      words. If you ever lift the restriction, soften that wording to match, and
//      if you tighten it further, say so there first. The dialog's promise about
//      what leaves the browser has to keep describing what actually happens.
//
// Microsoft Forms works the same way: Collect responses -> "Get pre-filled URL".
// Its parameter names are opaque keys such as r8a1c... rather than entry.NNN.
//
// Any query string already in formUrl is preserved, so keeping ?usp=pp_url is
// fine. Leave a field name empty to omit it from the prefill.
//
// Only these four values are ever transmitted, and only when the student presses
// Send. Practice history stays in the browser and is never included.

window.REPORT_CONFIG = {
  formUrl: "https://docs.google.com/forms/d/e/1FAIpQLSeOsSUvzic5LgCNOxzXHlTIr4CjUFdr0nMK1GnHTb8EltBFIA/viewform?usp=pp_url",

  // Only what the app already knows gets prefilled. The student picks CATEGORY
  // (entry.1953111872) and writes DETAIL (entry.277726627) on the form itself,
  // so nothing is typed twice and only one button in the flow says Submit.
  // Adding either id back here would prefill it again.
  fields: {
    questionId: "entry.928385002",    // QID    — which question is being reported
    answered: "entry.702034733"       // ANSWER — what the student answered
  },

  fallbackInstructions:
    "Copy the text below and email it to your instructor."
};
