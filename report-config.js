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
//   4. In the form's response settings, do NOT restrict responses to signed-in
//      users, or students meet a sign-in wall mid-session and give up.
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
  formUrl: "",

  fields: {
    questionId: "",   // which question is being reported
    answered: "",     // what the student answered, so you can reproduce their path
    reason: "",       // the category they picked
    detail: ""        // their free-text description
  },

  fallbackInstructions:
    "Copy the text below and email it to your instructor."
};
