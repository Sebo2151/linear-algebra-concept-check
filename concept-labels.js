// Student-facing names for the internal concept tags.
//
// Concept slugs are our own vocabulary, and title-casing them leaks that fact:
// "Unique Rref", "Spans Rm", "Matrix Vs System". Anything that does not survive
// title-casing as ordinary English gets a written-out label here; the rest fall
// through to the title-cased slug.
//
// Plain text only — the results view is not typeset, so no TeX here.
//
// Shared by the student app and by viewer.html, which flags any concept still
// missing a label so new tags do not quietly reach the results screen as slugs.

window.CONCEPT_LABELS = {
  "consistency-test": "Testing for consistency",
  "contraction-dilation": "Contractions and dilations",
  "dependence-characterization": "When a list is dependent",
  "determined-by-basis-images": "Where the standard basis vectors go",
  "function-vocabulary": "Domain, codomain, and range",
  "geometric-transformations": "Reflections, shears, and projections",
  "homogeneous-span": "Solution set of Ax = 0",
  "independence-columns": "Independence of the columns",
  "infinite-solutions": "Infinitely many solutions",
  "linear-transformation-properties": "Basic properties of linear maps",
  "linearity-criterion": "The test for linearity",
  "matrix-equation-equivalence": "Ax = b, vectors, and systems",
  "matrix-transformation": "Transformations of the form x to Ax",
  "matrix-transformations-are-linear": "Why matrix transformations are linear",
  "matrix-vector-linearity": "Algebra of Ax",
  "matrix-vector-product": "The product Ax",
  "matrix-vs-system": "Matrix versus system language",
  "nontrivial-solution": "Nontrivial solutions",
  "one-to-one": "One-to-one transformations",
  "one-to-one-columns-independent": "One-to-one and independent columns",
  "one-to-one-trivial-kernel": "One-to-one and the equation T(x) = 0",
  "one-vector-independence": "Independence of a single vector",
  "onto": "Onto transformations",
  "onto-columns-span": "Onto and spanning columns",
  "parametric-form": "Parametric descriptions",
  "pivot-in-every-row": "A pivot in every row",
  "preserves-combinations": "Linearity and linear combinations",
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
  "standard-matrix": "The standard matrix of a transformation",
  "too-many-vectors": "Having more vectors than dimensions",
  "trivial-solution": "The trivial solution",
  "two-vector-independence": "Independence of two vectors",
  "unique-rref": "Uniqueness of reduced echelon form",
  "unique-solution": "Having exactly one solution",
  "zero-vector-dependence": "Lists containing the zero vector"
};
