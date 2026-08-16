// Groupings offered in the Material menu, above the individual sections.
//
// These exist so a student can pick what they are actually studying for without
// knowing section numbers. Keep them in course order; the first entry is the
// default selection.
//
// `sections: null` means every section in the bank. Anything else pins the list,
// which is the point: "Everything so far" is meant to grow as the bank grows,
// while "Exam 1" must keep meaning the same set of sections after later material
// is added. When you add sections, add them to the exam presets deliberately
// rather than letting a preset drift.
//
// The individual "Section X only" entries are generated from the bank itself and
// need no maintenance here.

window.COURSE_PRESETS = [
  {
    id: "all",
    label: "Everything so far",
    sections: null
  },
  {
    id: "exam1",
    label: "Exam 1 review",
    sections: ["1.1", "1.2", "1.3", "1.4", "1.5", "1.7", "1.8", "1.9"]
  }
];
