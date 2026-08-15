// Where "Report a problem" sends its reports.
//
// Until formUrl is filled in, the app falls back to copying a formatted report to
// the student's clipboard along with fallbackInstructions. Nothing breaks either
// way, so the app can ship before the form exists.
//
// To wire up a form:
//
//   Microsoft Forms — open the form, Collect responses, "Get pre-filled URL",
//   fill each field with a placeholder and copy the resulting link. The query
//   string looks like ?r8a1c...=placeholder. Each of those opaque keys is the
//   parameter name for one field.
//
//   Google Forms — Send, link icon, or the "Get pre-filled link" item in the
//   overflow menu. Parameter names look like entry.123456789.
//
// Paste the base URL (no query string) into formUrl, then paste each field's
// parameter name into the matching entry below. Leave a name empty to omit that
// field from the prefill.
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
