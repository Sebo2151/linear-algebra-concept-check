window.QUESTION_BANK = [
  {
    "id": "1.1-linear-01",
    "section": "1.1",
    "topic": "Linear equations",
    "concept": "linear-equation",
    "statement": "\\(3x_1-\\sqrt{2}x_2+7=0\\) is a linear equation in \\(x_1,x_2\\).",
    "answer": true,
    "difficulty": 1,
    "variant": "core",
    "misconception": "A constant term on the left makes an equation nonlinear.",
    "explanation": "Rewrite it as \\(3x_1-\\sqrt{2}x_2=-7\\). The variables occur only to the first power and are multiplied by constant coefficients.",
    "why": {
      "prompt": "Why is the statement true?",
      "choices": [
        "Because every equation involving two variables is linear.",
        "Because it can be rewritten as \\(a_1x_1+a_2x_2=b\\) with constant coefficients.",
        "Because the number \\(7\\) is positive.",
        "Because a linear equation must have \\(b=0\\)."
      ],
      "correct": 1
    }
  },
  {
    "id": "1.1-linear-02",
    "section": "1.1",
    "topic": "Linear equations",
    "concept": "linear-equation",
    "statement": "\\(x_1x_2+x_3=4\\) is a linear equation in \\(x_1,x_2,x_3\\).",
    "answer": false,
    "difficulty": 1,
    "variant": "core",
    "misconception": "Any equation made from variables and constants is linear.",
    "explanation": "The product \\(x_1x_2\\) prevents the equation from having the form \\(a_1x_1+\\cdots+a_nx_n=b\\).",
    "counterexample": "The obstruction is the product of variables, not the presence of \\(x_3\\)."
  },
  {
    "id": "1.1-linear-03",
    "section": "1.1",
    "topic": "Linear equations",
    "concept": "linear-equation",
    "statement": "\\(x_1^2-5x_2=1\\) is a linear equation in \\(x_1,x_2\\).",
    "answer": false,
    "difficulty": 1,
    "variant": "core",
    "misconception": "Polynomial equations are automatically linear equations.",
    "explanation": "The term \\(x_1^2\\) is nonlinear. In a linear equation each variable appears only to the first power and is multiplied by a scalar coefficient."
  },
  {
    "id": "1.1-linear-04",
    "section": "1.1",
    "topic": "Linear equations",
    "concept": "linear-equation",
    "statement": "\\(0x_1+0x_2=5\\) still has the form of a linear equation, even though it has no solution.",
    "answer": true,
    "difficulty": 2,
    "variant": "hypothesis",
    "misconception": "An equation must have a solution in order to count as linear.",
    "explanation": "The coefficients are allowed to be zero. This equation is simply \\(0=5\\), so it is linear in form but inconsistent as a one-equation system."
  },
  {
    "id": "1.1-system-01",
    "section": "1.1",
    "topic": "Linear systems",
    "concept": "solution",
    "statement": "A solution of a linear system must satisfy every equation in the system simultaneously.",
    "answer": true,
    "difficulty": 1,
    "variant": "core",
    "misconception": "Satisfying any one equation is enough to solve a system.",
    "explanation": "A solution of a system is a choice of values for all variables that makes every equation in the system true."
  },
  {
    "id": "1.1-system-02",
    "section": "1.1",
    "topic": "Linear systems",
    "concept": "solution-set",
    "statement": "The solution set of a system is the collection of all assignments of values to the variables that solve the system.",
    "answer": true,
    "difficulty": 1,
    "variant": "core",
    "misconception": "The solution set is the collection of equations in the system.",
    "explanation": "The equations define the conditions. The solution set consists of the vectors or tuples satisfying all of those conditions."
  },
  {
    "id": "1.1-system-03",
    "section": "1.1",
    "topic": "Linear systems",
    "concept": "equivalent-systems",
    "statement": "Two linear systems can look different and still be equivalent.",
    "answer": true,
    "difficulty": 1,
    "variant": "core",
    "misconception": "Equivalent systems must contain the same equations.",
    "explanation": "Equivalence is about having the same solution set, not about having identical equations."
  },
  {
    "id": "1.1-system-04",
    "section": "1.1",
    "topic": "Linear systems",
    "concept": "equivalent-systems",
    "statement": "If two systems have the same coefficient matrix, then they are equivalent.",
    "answer": false,
    "difficulty": 2,
    "variant": "core",
    "misconception": "The coefficient matrix alone determines the solution set.",
    "explanation": "The right-hand side matters. For example, \\(x=0\\) and \\(x=1\\) have the same coefficient matrix \\([1]\\) but different solution sets.",
    "counterexample": "\\(x=0\\) versus \\(x=1\\)."
  },
  {
    "id": "1.1-system-05",
    "section": "1.1",
    "topic": "Linear systems",
    "concept": "solution-count",
    "statement": "A linear system with real coefficients can have exactly two distinct solutions.",
    "answer": false,
    "difficulty": 2,
    "variant": "core",
    "misconception": "Linear systems can have any finite number of solutions.",
    "explanation": "Suppose two different assignments both solve every equation in the system. For each real number \\(t\\), form a new assignment coordinate by coordinate by taking \\(t\\) times the first solution plus \\((1-t)\\) times the second. Because each equation is linear, every one of those new assignments still satisfies every equation. Varying \\(t\\) gives infinitely many solutions.",
    "why": {
      "prompt": "Which idea best explains why?",
      "choices": [
        "Two distinct solutions can be combined coordinate by coordinate in infinitely many ways that still satisfy every linear equation.",
        "Every consistent system has a pivot in every column.",
        "Every linear system has at least three equations.",
        "A system with two solutions must have two free variables."
      ],
      "correct": 0
    }
  },
  {
    "id": "1.1-system-06",
    "section": "1.1",
    "topic": "Linear systems",
    "concept": "consistency",
    "statement": "A consistent linear system must have exactly one solution.",
    "answer": false,
    "difficulty": 1,
    "variant": "core",
    "misconception": "Consistent means uniquely solvable.",
    "explanation": "Consistent means only that at least one solution exists. A consistent system may have one solution or infinitely many solutions."
  },
  {
    "id": "1.1-system-07",
    "section": "1.1",
    "topic": "Linear systems",
    "concept": "consistency",
    "statement": "An inconsistent system has an empty solution set.",
    "answer": true,
    "difficulty": 1,
    "variant": "core",
    "misconception": "Inconsistent means the equations are merely inconvenient or redundant.",
    "explanation": "By definition, an inconsistent system has no solution, so its solution set is empty."
  },
  {
    "id": "1.1-system-08",
    "section": "1.1",
    "topic": "Linear systems",
    "concept": "solution",
    "statement": "If \\((x_1,x_2)=(1,2)\\) satisfies the first equation of a system but not the second, it is still a solution of the system.",
    "answer": false,
    "difficulty": 1,
    "variant": "core",
    "misconception": "Satisfying some of the equations makes a list of values a partial solution.",
    "explanation": "A solution must satisfy every equation at once. Failing even one equation disqualifies it completely."
  },
  {
    "id": "1.1-system-09",
    "section": "1.1",
    "topic": "Linear systems",
    "concept": "solution-count",
    "statement": "A linear system with real coefficients has no solution, exactly one solution, or infinitely many solutions.",
    "answer": true,
    "difficulty": 1,
    "variant": "core",
    "misconception": "A linear system can have any number of solutions.",
    "explanation": "These three cases are exhaustive. In particular, no such system has exactly two or exactly seventeen solutions."
  },
  {
    "id": "1.1-system-10",
    "section": "1.1",
    "topic": "Linear systems",
    "concept": "solution-set",
    "statement": "The solution set of a system of two equations consists of everything solving the first equation together with everything solving the second.",
    "answer": false,
    "difficulty": 2,
    "variant": "core",
    "misconception": "The solution set is the union of the individual equations' solution sets.",
    "explanation": "A solution has to satisfy both equations, so the solution set is the intersection of the two individual solution sets, not their union.",
    "counterexample": "The system \\(x=0,\\;x=1\\) has an equation solved by \\(x=0\\) and an equation solved by \\(x=1\\), yet nothing satisfies both, so the solution set is empty."
  },
  {
    "id": "1.1-matrix-01",
    "section": "1.1",
    "topic": "Matrices and systems",
    "concept": "coefficient-matrix",
    "statement": "The coefficient matrix of a system includes the constants on the right-hand side of the equations.",
    "answer": false,
    "difficulty": 1,
    "variant": "core",
    "misconception": "Coefficient matrix and augmented matrix are the same object.",
    "explanation": "The coefficient matrix contains only the coefficients of the variables. Appending the right-hand-side column produces the augmented matrix.",
    "why": {
      "prompt": "Which distinction is correct?",
      "choices": [
        "The augmented matrix omits the right-hand side.",
        "The coefficient matrix omits the right-hand side; the augmented matrix includes it.",
        "Both matrices must be square.",
        "The coefficient matrix always has one more column."
      ],
      "correct": 1
    }
  },
  {
    "id": "1.1-matrix-02",
    "section": "1.1",
    "topic": "Matrices and systems",
    "concept": "augmented-matrix",
    "statement": "For a system of \\(m\\) equations in \\(n\\) variables, its coefficient matrix is \\(m\\times n\\), while its augmented matrix has \\(m\\) rows and \\(n+1\\) columns.",
    "answer": true,
    "difficulty": 1,
    "variant": "core",
    "misconception": "Rows count variables and columns count equations.",
    "explanation": "There is one row per equation and one coefficient column per variable. The augmented matrix adds one right-hand-side column."
  },
  {
    "id": "1.1-matrix-03",
    "section": "1.1",
    "topic": "Matrices and systems",
    "concept": "matrix-dimensions",
    "statement": "An \\(m\\times n\\) matrix has \\(m\\) rows and \\(n\\) columns.",
    "answer": true,
    "difficulty": 1,
    "variant": "core",
    "misconception": "The order in matrix dimensions is columns by rows.",
    "explanation": "Matrix dimensions are always listed as rows by columns."
  },
  {
    "id": "1.1-matrix-04",
    "section": "1.1",
    "topic": "Matrices and systems",
    "concept": "matrix-vs-system",
    "statement": "An abstract matrix, with no system attached to it, is itself either consistent or inconsistent.",
    "answer": false,
    "difficulty": 2,
    "variant": "core",
    "misconception": "Terminology for systems automatically applies to matrices.",
    "explanation": "Consistency is a property of a system of equations. A matrix may represent an augmented matrix of a system, but an abstract matrix by itself is not a system.",
    "counterexample": "The same array of numbers can be studied simply as a matrix without assigning any right-hand-side column."
  },
  {
    "id": "1.1-matrix-05",
    "section": "1.1",
    "topic": "Matrices and systems",
    "concept": "augmented-matrix",
    "statement": "When forming an augmented matrix, each row may list its coefficients in whatever variable order is convenient for that equation.",
    "answer": false,
    "difficulty": 2,
    "variant": "core",
    "misconception": "The matrix is only a bookkeeping table, so the order within a row does not matter.",
    "explanation": "Every column must correspond to one fixed variable across all rows. If rows used different orderings, a column would no longer represent a single variable and row operations would lose their meaning."
  },
  {
    "id": "1.1-matrix-06",
    "section": "1.1",
    "topic": "Matrices and systems",
    "concept": "coefficient-matrix",
    "statement": "If a variable is absent from one of the equations, that equation's row still has an entry in that variable's column, namely \\(0\\).",
    "answer": true,
    "difficulty": 1,
    "variant": "core",
    "misconception": "Variables missing from an equation are simply skipped when building the matrix.",
    "explanation": "An absent variable has coefficient \\(0\\). Recording that zero is what keeps each column aligned with a single variable."
  },
  {
    "id": "1.1-matrix-07",
    "section": "1.1",
    "topic": "Matrices and systems",
    "concept": "matrix-dimensions",
    "statement": "A matrix with \\(4\\) rows and \\(7\\) columns is a \\(7\\times4\\) matrix.",
    "answer": false,
    "difficulty": 1,
    "variant": "core",
    "misconception": "Dimensions are listed as columns by rows.",
    "explanation": "Dimensions are always listed rows first, so this matrix is \\(4\\times7\\)."
  },
  {
    "id": "1.1-matrix-08",
    "section": "1.1",
    "topic": "Matrices and systems",
    "concept": "matrix-vs-system",
    "statement": "Elementary row operations can be applied to any matrix, whether or not it came from a system of equations.",
    "answer": true,
    "difficulty": 1,
    "variant": "core",
    "misconception": "Row operations only make sense for augmented matrices.",
    "explanation": "Row operations are defined on rectangular arrays of numbers. Reading the result back as a system is an extra step, available only when the matrix represents one."
  },
  {
    "id": "1.1-rowops-01",
    "section": "1.1",
    "topic": "Elementary row operations",
    "concept": "row-scaling",
    "statement": "Multiplying a row by \\(0\\) is an elementary row operation.",
    "answer": false,
    "difficulty": 1,
    "variant": "core",
    "misconception": "A row may be scaled by any scalar.",
    "explanation": "Row scaling must use a nonzero scalar. Multiplying by zero destroys information and cannot be undone."
  },
  {
    "id": "1.1-rowops-02",
    "section": "1.1",
    "topic": "Elementary row operations",
    "concept": "row-replacement",
    "statement": "Adding a multiple of one row to a different row is an elementary row operation.",
    "answer": true,
    "difficulty": 1,
    "variant": "core",
    "misconception": "Row replacement means replacing a row by an arbitrary new row.",
    "explanation": "This is the row-replacement operation: replace one row by itself plus a scalar multiple of another row."
  },
  {
    "id": "1.1-rowops-03",
    "section": "1.1",
    "topic": "Elementary row operations",
    "concept": "row-interchange",
    "statement": "Interchanging two equations in a system changes its solution set.",
    "answer": false,
    "difficulty": 1,
    "variant": "core",
    "misconception": "Changing the order of equations changes the system's solutions.",
    "explanation": "The order in which the equations are listed does not affect which values satisfy all of them."
  },
  {
    "id": "1.1-rowops-04",
    "section": "1.1",
    "topic": "Elementary row operations",
    "concept": "equivalent-systems",
    "statement": "If the augmented matrices of two systems are row equivalent, then the systems are equivalent.",
    "answer": true,
    "difficulty": 1,
    "variant": "core",
    "misconception": "Row operations can change the solution set.",
    "explanation": "Each elementary row operation replaces a system by one with the same solutions, so a sequence of such operations preserves the solution set.",
    "why": {
      "prompt": "What is the key reason?",
      "choices": [
        "Every elementary row operation is reversible and preserves the solution set.",
        "Every row-equivalent matrix is square.",
        "Row-equivalent matrices have identical entries.",
        "Equivalent systems must have the same equations in the same order."
      ],
      "correct": 0
    }
  },
  {
    "id": "1.1-rowops-05",
    "section": "1.1",
    "topic": "Elementary row operations",
    "concept": "row-equivalence",
    "statement": "Row-equivalent matrices must have the same dimensions.",
    "answer": true,
    "difficulty": 1,
    "variant": "core",
    "misconception": "Row operations may add or remove rows or columns.",
    "explanation": "Elementary row operations change entries or row order, but they do not change the number of rows or columns."
  },
  {
    "id": "1.1-rowops-06",
    "section": "1.1",
    "topic": "Elementary row operations",
    "concept": "row-equivalence",
    "statement": "If \\(A\\) is row equivalent to \\(B\\), then \\(B\\) is row equivalent to \\(A\\).",
    "answer": true,
    "difficulty": 2,
    "variant": "core",
    "misconception": "Row equivalence only goes in the direction in which the operations were performed.",
    "explanation": "Every elementary row operation has an inverse elementary row operation, so the sequence can be reversed."
  },
  {
    "id": "1.1-rowops-07",
    "section": "1.1",
    "topic": "Elementary row operations",
    "concept": "equivalent-systems",
    "statement": "If two systems have the same number of equations in the same variables and are equivalent, then their augmented matrices must be row equivalent.",
    "answer": false,
    "difficulty": 3,
    "variant": "hypothesis",
    "misconception": "The implication between row equivalence and equivalent systems automatically works both ways.",
    "explanation": "Row-equivalent augmented matrices always give equivalent systems, but the converse can fail. In particular, all inconsistent systems have the same empty solution set, while their augmented matrices may still have different structural features that row operations cannot change.",
    "counterexample": "The systems \\(x=0,\\;0=1\\) and \\(y=0,\\;0=1\\) (in variables \\(x,y\\)) are both inconsistent, hence equivalent as systems. In the first augmented matrix the \\(y\\)-column is all zero, while in the second the \\(x\\)-column is all zero. Row operations cannot turn an all-zero column into a nonzero column.",
    "why": {
      "prompt": "Why does the converse fail?",
      "choices": [
        "Every inconsistent system has the empty solution set, so systems with quite different augmented matrices can still be equivalent.",
        "Elementary row operations can change a system's solution set.",
        "Equivalent systems must have different numbers of equations.",
        "The augmented matrices of equivalent systems always have different sizes."
      ],
      "correct": 0
    }
  },
  {
    "id": "1.1-rowops-09",
    "section": "1.1",
    "topic": "Elementary row operations",
    "concept": "row-equivalence",
    "statement": "Any two matrices of the same size are row equivalent.",
    "answer": false,
    "difficulty": 2,
    "variant": "core",
    "misconception": "Row operations are powerful enough to turn any matrix into any other matrix of the same size.",
    "explanation": "Row operations cannot create information from nothing. Starting with an all-zero matrix, every elementary row operation still leaves every row all zero, so it cannot become a matrix with a nonzero entry.",
    "counterexample": "\\(\\begin{bmatrix}0&0\\\\0&0\\end{bmatrix}\\) and \\(\\begin{bmatrix}1&0\\\\0&1\\end{bmatrix}\\) are both \\(2\\times2\\), but no row operation can produce a nonzero entry from an all-zero matrix."
  },
  {
    "id": "1.1-rowops-10",
    "section": "1.1",
    "topic": "Elementary row operations",
    "concept": "row-equivalence",
    "statement": "A matrix is row equivalent only to those matrices obtained from it by a single elementary row operation.",
    "answer": false,
    "difficulty": 2,
    "variant": "core",
    "misconception": "Row equivalence describes one step rather than a sequence of steps.",
    "explanation": "Row equivalence allows any finite sequence of elementary row operations. A matrix is row equivalent to everything reachable in any number of steps, not just one."
  },
  {
    "id": "1.1-rowops-11",
    "section": "1.1",
    "topic": "Elementary row operations",
    "concept": "row-interchange",
    "statement": "Interchanging two rows is an elementary row operation, and performing the same interchange a second time restores the original matrix.",
    "answer": true,
    "difficulty": 1,
    "variant": "core",
    "misconception": "Undoing a row interchange requires some different operation.",
    "explanation": "Interchange is its own inverse. Swapping the same two rows again returns every entry to its original position."
  },
  {
    "id": "1.1-rowops-12",
    "section": "1.1",
    "topic": "Elementary row operations",
    "concept": "row-replacement",
    "statement": "In a matrix with three rows, replacing the first row by the sum of the second and third rows is an elementary row operation.",
    "answer": false,
    "difficulty": 2,
    "variant": "core",
    "misconception": "Any operation that builds a new row out of existing rows counts as row replacement.",
    "explanation": "Row replacement changes \\(R_i\\) into \\(R_i+cR_j\\), keeping the row being modified. Discarding the original first row destroys information and cannot be undone."
  },
  {
    "id": "1.1-rowops-13",
    "section": "1.1",
    "topic": "Elementary row operations",
    "concept": "row-scaling",
    "statement": "Multiplying every entry of a single row by \\(-3\\) is an elementary row operation.",
    "answer": true,
    "difficulty": 1,
    "variant": "core",
    "misconception": "A scaling factor has to be positive.",
    "explanation": "Row scaling permits any nonzero scalar, and \\(-3\\) is nonzero. The operation is undone by multiplying the same row by \\(-1/3\\)."
  },
  {
    "id": "1.2-ref-01",
    "section": "1.2",
    "topic": "Echelon form",
    "concept": "ref",
    "statement": "In row echelon form, every leading entry must equal \\(1\\).",
    "answer": false,
    "difficulty": 1,
    "variant": "core",
    "misconception": "REF and RREF have the same requirements.",
    "explanation": "A leading entry in REF only needs to be nonzero. Requiring each leading entry to be \\(1\\) is part of reduced echelon form."
  },
  {
    "id": "1.2-ref-02",
    "section": "1.2",
    "topic": "Echelon form",
    "concept": "ref",
    "statement": "A matrix can be in row echelon form with a zero row above a nonzero row.",
    "answer": false,
    "difficulty": 1,
    "variant": "core",
    "misconception": "The location of zero rows does not matter in echelon form.",
    "explanation": "In echelon form, every nonzero row must occur above every zero row."
  },
  {
    "id": "1.2-ref-03",
    "section": "1.2",
    "topic": "Echelon form",
    "concept": "ref",
    "statement": "As you move down the nonzero rows of a matrix in echelon form, the leading entries move strictly to the right.",
    "answer": true,
    "difficulty": 1,
    "variant": "core",
    "misconception": "Leading entries may occur in the same column in different nonzero rows.",
    "explanation": "Each leading entry in a lower nonzero row must be to the right of the leading entry in the row above."
  },
  {
    "id": "1.2-ref-04",
    "section": "1.2",
    "topic": "Echelon form",
    "concept": "ref",
    "statement": "In row echelon form, every entry below a leading entry is zero.",
    "answer": true,
    "difficulty": 1,
    "variant": "core",
    "misconception": "Zeros below pivots are required only in RREF.",
    "explanation": "Zeros below each leading entry are already required in echelon form."
  },
  {
    "id": "1.2-ref-05",
    "section": "1.2",
    "topic": "Echelon form",
    "concept": "ref-vs-rref",
    "statement": "In row echelon form, every entry above a leading entry must be zero.",
    "answer": false,
    "difficulty": 1,
    "variant": "core",
    "misconception": "REF already has zeros both above and below pivots.",
    "explanation": "Zeros above pivot locations are required for reduced echelon form, not ordinary echelon form."
  },
  {
    "id": "1.2-ref-06",
    "section": "1.2",
    "topic": "Echelon form",
    "concept": "ref-vs-rref",
    "statement": "Every matrix in reduced row echelon form is also in row echelon form.",
    "answer": true,
    "difficulty": 1,
    "variant": "core",
    "misconception": "The two forms are separate categories rather than one being a strengthening of the other.",
    "explanation": "Reduced echelon form imposes all of the echelon conditions and then adds two more: each leading entry equals \\(1\\), and each leading \\(1\\) is the only nonzero entry in its column."
  },
  {
    "id": "1.2-rref-01",
    "section": "1.2",
    "topic": "Reduced echelon form",
    "concept": "rref",
    "statement": "In reduced row echelon form, a leading entry may be any nonzero scalar; it does not have to equal \\(1\\).",
    "answer": false,
    "difficulty": 1,
    "variant": "core",
    "misconception": "REF and RREF place the same requirements on leading entries.",
    "explanation": "RREF requires each leading entry of a nonzero row to be \\(1\\). Ordinary REF allows other nonzero leading entries."
  },
  {
    "id": "1.2-rref-02",
    "section": "1.2",
    "topic": "Reduced echelon form",
    "concept": "rref",
    "statement": "In reduced row echelon form, a leading \\(1\\) is the only nonzero entry in its column.",
    "answer": true,
    "difficulty": 1,
    "variant": "core",
    "misconception": "Only the entries below a leading 1 need to vanish in RREF.",
    "explanation": "RREF requires zeros both below and above each leading \\(1\\)."
  },
  {
    "id": "1.2-rref-03",
    "section": "1.2",
    "topic": "Reduced echelon form",
    "concept": "unique-rref",
    "statement": "Every matrix is row equivalent to exactly one matrix in row echelon form.",
    "answer": false,
    "difficulty": 2,
    "variant": "core",
    "misconception": "The uniqueness theorem applies to REF rather than RREF.",
    "explanation": "A matrix can have many echelon forms. What is unique is its reduced row echelon form.",
    "counterexample": "For example, \\(I_2\\) is row equivalent to both \\(I_2\\) and \\(\\begin{bmatrix}1&2\\\\0&1\\end{bmatrix}\\), and both are in echelon form."
  },
  {
    "id": "1.2-rref-04",
    "section": "1.2",
    "topic": "Reduced echelon form",
    "concept": "unique-rref",
    "statement": "Every matrix is row equivalent to a unique reduced row echelon form.",
    "answer": true,
    "difficulty": 1,
    "variant": "core",
    "misconception": "Different row-reduction choices can produce different RREFs.",
    "explanation": "Although the sequence of row operations is not unique, the final RREF is unique."
  },
  {
    "id": "1.2-rref-05",
    "section": "1.2",
    "topic": "Reduced echelon form",
    "concept": "row-equivalence",
    "statement": "If two matrices are row equivalent, then they have the same reduced row echelon form.",
    "answer": true,
    "difficulty": 2,
    "variant": "core",
    "misconception": "Row-equivalent matrices can have unrelated canonical forms.",
    "explanation": "Row-equivalent matrices lie in the same row-equivalence class, and each class has one unique RREF."
  },
  {
    "id": "1.2-rref-06",
    "section": "1.2",
    "topic": "Reduced echelon form",
    "concept": "row-equivalence",
    "statement": "If two matrices have the same reduced row echelon form, then they are row equivalent.",
    "answer": true,
    "difficulty": 2,
    "variant": "core",
    "misconception": "Sharing an RREF is weaker than row equivalence.",
    "explanation": "Each matrix is row equivalent to that common RREF, so reversing one sequence and composing the operations shows the two matrices are row equivalent."
  },
  {
    "id": "1.2-rref-07",
    "section": "1.2",
    "topic": "Reduced echelon form",
    "concept": "rref",
    "statement": "A matrix all of whose entries are \\(0\\) is in reduced row echelon form.",
    "answer": true,
    "difficulty": 2,
    "variant": "hypothesis",
    "misconception": "Reduced row echelon form requires at least one leading \\(1\\).",
    "explanation": "Every defining condition concerns nonzero rows and their leading entries. A zero matrix has no nonzero rows, so all of the conditions hold vacuously and the matrix is already in reduced row echelon form."
  },
  {
    "id": "1.2-pivot-01",
    "section": "1.2",
    "topic": "Pivot positions",
    "concept": "pivot-position",
    "statement": "A pivot position of \\(A\\) is determined by where a leading \\(1\\) occurs in the RREF of \\(A\\).",
    "answer": true,
    "difficulty": 1,
    "variant": "core",
    "misconception": "A pivot position is any location containing a nonzero entry in the original matrix.",
    "explanation": "Pivot positions are locations in the original matrix corresponding to leading \\(1\\)s in its unique RREF."
  },
  {
    "id": "1.2-pivot-02",
    "section": "1.2",
    "topic": "Pivot positions",
    "concept": "pivot-column",
    "statement": "Every nonzero column of a matrix is a pivot column.",
    "answer": false,
    "difficulty": 1,
    "variant": "core",
    "misconception": "A nonzero column automatically contains a pivot position.",
    "explanation": "A nonzero column may fail to contain a pivot position. Pivot columns are determined by the locations of leading \\(1\\)s in the RREF. For example, \\(\\begin{bmatrix}1&1\\\\0&0\\end{bmatrix}\\) has a nonzero second column, but the second column is not a pivot column."
  },
  {
    "id": "1.2-pivot-03",
    "section": "1.2",
    "topic": "Pivot positions",
    "concept": "pivot-position",
    "statement": "The pivot positions of a matrix can depend on which legal sequence of row operations you choose.",
    "answer": false,
    "difficulty": 2,
    "variant": "core",
    "misconception": "Because row-reduction paths differ, pivot locations can differ.",
    "explanation": "The RREF is unique, so the locations of its leading \\(1\\)s—and therefore the pivot positions—are fixed."
  },
  {
    "id": "1.2-pivot-04",
    "section": "1.2",
    "topic": "Pivot positions",
    "concept": "pivot-column",
    "statement": "A matrix cannot have more pivot columns than it has rows.",
    "answer": true,
    "difficulty": 2,
    "variant": "core",
    "misconception": "The number of pivot columns is limited only by the number of columns.",
    "explanation": "Leading entries in an echelon form move strictly down and to the right, so each pivot position occupies a row of its own. The number of pivots is therefore at most the number of rows."
  },
  {
    "id": "1.2-gauss-01",
    "section": "1.2",
    "topic": "Gaussian elimination",
    "concept": "gaussian-elimination",
    "statement": "Gaussian elimination uses elementary row operations to produce an echelon form of a matrix.",
    "answer": true,
    "difficulty": 1,
    "variant": "core",
    "misconception": "Gaussian elimination requires going all the way to RREF.",
    "explanation": "The forward phase of Gaussian elimination produces an echelon form. Further reduction can be used when RREF is desired."
  },
  {
    "id": "1.2-gauss-02",
    "section": "1.2",
    "topic": "Gaussian elimination",
    "concept": "gaussian-elimination",
    "statement": "Two people who each row reduce the same matrix correctly must have used the same sequence of elementary row operations.",
    "answer": false,
    "difficulty": 1,
    "variant": "core",
    "misconception": "There is only one correct path through row reduction.",
    "explanation": "Many different sequences of operations reach an echelon form, and many different sequences reach the reduced echelon form. The final reduced echelon form is unique; the route to it is not."
  },
  {
    "id": "1.2-variables-01",
    "section": "1.2",
    "topic": "Basic and free variables",
    "concept": "basic-variable",
    "statement": "In a linear system, a basic variable corresponds to a pivot column of the coefficient matrix.",
    "answer": true,
    "difficulty": 1,
    "variant": "core",
    "misconception": "A pivot in the augmented column represents a basic variable.",
    "explanation": "Variables correspond to columns of the coefficient matrix. A variable is basic when its coefficient column is a pivot column."
  },
  {
    "id": "1.2-variables-02",
    "section": "1.2",
    "topic": "Basic and free variables",
    "concept": "basic-variable",
    "statement": "Every variable whose coefficient column contains at least one nonzero entry is a basic variable.",
    "answer": false,
    "difficulty": 1,
    "variant": "core",
    "misconception": "Any nonzero coefficient column must be a pivot column.",
    "explanation": "A variable is basic only when its coefficient column is a pivot column. A nonpivot column can contain nonzero entries; its variable is free."
  },
  {
    "id": "1.2-variables-03",
    "section": "1.2",
    "topic": "Basic and free variables",
    "concept": "free-variable",
    "statement": "In a consistent system, once values are chosen for all free variables, the values of the basic variables are uniquely determined.",
    "answer": true,
    "difficulty": 2,
    "variant": "core",
    "misconception": "Choosing free variables may still leave basic variables undetermined.",
    "explanation": "After row reduction, each basic variable is expressed in terms of the free variables. Fixing all free-variable values therefore fixes every basic variable.",
    "why": {
      "prompt": "What does 'free' mean here?",
      "choices": [
        "A free variable can be assigned a value, after which the basic variables are determined.",
        "A free variable never appears in any equation.",
        "A free variable must equal zero.",
        "A free variable corresponds to a pivot column."
      ],
      "correct": 0
    }
  },
  {
    "id": "1.2-variables-04",
    "section": "1.2",
    "topic": "Basic and free variables",
    "concept": "basic-variable",
    "statement": "The number of basic variables equals the number of pivot columns in the coefficient matrix.",
    "answer": true,
    "difficulty": 1,
    "variant": "core",
    "misconception": "The augmented column can add a basic variable.",
    "explanation": "There is one variable for each coefficient column, and exactly the variables in pivot columns are basic."
  },
  {
    "id": "1.2-variables-05",
    "section": "1.2",
    "topic": "Basic and free variables",
    "concept": "free-variable",
    "statement": "When writing the solution set of a consistent system, each free variable must be assigned the value \\(0\\).",
    "answer": false,
    "difficulty": 2,
    "variant": "core",
    "misconception": "Setting free variables to zero is part of the procedure rather than one choice among many.",
    "explanation": "A free variable may take any value; that is what makes it free. Setting them all to \\(0\\) produces one particular solution, but describing the whole solution set requires keeping them as parameters."
  },
  {
    "id": "1.2-existence-01",
    "section": "1.2",
    "topic": "Existence and uniqueness",
    "concept": "consistency-test",
    "statement": "A system is inconsistent exactly when the rightmost column of its augmented matrix is a pivot column.",
    "answer": true,
    "difficulty": 2,
    "variant": "core",
    "misconception": "A pivot in the augmented column is harmless.",
    "explanation": "A pivot in the augmented column produces an echelon row of the form \\([0\\ \\cdots\\ 0\\mid b]\\) with \\(b\\ne0\\), which represents an impossible equation \\(0=b\\).",
    "why": {
      "prompt": "Which row signals the problem?",
      "choices": [
        "\\([0\\ \\cdots\\ 0\\mid b]\\) with \\(b\\ne0\\)",
        "\\([0\\ \\cdots\\ 0\\mid 0]\\)",
        "Any row containing a zero",
        "Any row whose first entry is not \\(1\\)"
      ],
      "correct": 0
    }
  },
  {
    "id": "1.2-existence-02",
    "section": "1.2",
    "topic": "Existence and uniqueness",
    "concept": "consistency-test",
    "statement": "An echelon row \\([0\\ 0\\ 0\\mid 5]\\) can be ignored when deciding whether the corresponding system is consistent.",
    "answer": false,
    "difficulty": 1,
    "variant": "core",
    "misconception": "A row with no variable terms never affects the solution set.",
    "explanation": "That row represents \\(0=5\\), which is impossible, so it proves the system is inconsistent."
  },
  {
    "id": "1.2-existence-03",
    "section": "1.2",
    "topic": "Existence and uniqueness",
    "concept": "consistency-test",
    "statement": "An echelon row \\([0\\ 0\\ 0\\mid 0]\\) proves that the corresponding system is inconsistent.",
    "answer": false,
    "difficulty": 1,
    "variant": "core",
    "misconception": "Any zero row indicates inconsistency.",
    "explanation": "That row represents \\(0=0\\), which imposes no additional restriction and causes no inconsistency."
  },
  {
    "id": "1.2-existence-04",
    "section": "1.2",
    "topic": "Existence and uniqueness",
    "concept": "unique-solution",
    "statement": "If a system is consistent and has no free variables, then it has a unique solution.",
    "answer": true,
    "difficulty": 1,
    "variant": "core",
    "misconception": "A consistent system without free variables might still have many solutions.",
    "explanation": "With no free variables, every variable is basic and is uniquely determined."
  },
  {
    "id": "1.2-existence-05",
    "section": "1.2",
    "topic": "Existence and uniqueness",
    "concept": "infinite-solutions",
    "statement": "If a system is consistent and has at least one free variable, then it has infinitely many solutions.",
    "answer": true,
    "difficulty": 1,
    "variant": "core",
    "misconception": "One free variable gives only a few extra solutions.",
    "explanation": "A free variable may be assigned infinitely many different real values, and each choice determines a solution."
  },
  {
    "id": "1.2-existence-06",
    "section": "1.2",
    "topic": "Existence and uniqueness",
    "concept": "unique-solution",
    "statement": "If a system has no free variables, then it must have a unique solution.",
    "answer": false,
    "difficulty": 2,
    "variant": "hypothesis",
    "misconception": "The consistency hypothesis in the existence-and-uniqueness theorem can be omitted.",
    "explanation": "The system could be inconsistent because the augmented column is a pivot column. 'No free variables' controls uniqueness only after existence is known.",
    "counterexample": "\\(x=0\\) together with \\(0=1\\) has no free variable \\(x\\), but it has no solution."
  },
  {
    "id": "1.2-existence-07",
    "section": "1.2",
    "topic": "Existence and uniqueness",
    "concept": "unique-solution",
    "statement": "A pivot in every coefficient column guarantees that a system has a unique solution.",
    "answer": false,
    "difficulty": 3,
    "variant": "hypothesis",
    "misconception": "Pivots in all variable columns guarantee both existence and uniqueness.",
    "explanation": "Pivots in all coefficient columns mean there are no free variables, but the system may still be inconsistent if the augmented column is also a pivot column.",
    "counterexample": "\\(x=0,\\;y=0,\\;0=1\\) has pivots in both coefficient columns and is inconsistent.",
    "why": {
      "prompt": "Which half of existence and uniqueness does the statement leave unsettled?",
      "choices": [
        "Existence: the augmented column may itself be a pivot column, making the system inconsistent.",
        "Uniqueness: free variables may still remain.",
        "Neither; the statement is correct for square systems.",
        "Existence: a system with no free variables cannot be written in parametric form."
      ],
      "correct": 0
    }
  },
  {
    "id": "1.2-existence-08",
    "section": "1.2",
    "topic": "Existence and uniqueness",
    "concept": "consistency-test",
    "statement": "If the rightmost column of an augmented matrix is not a pivot column, then the corresponding system is consistent.",
    "answer": true,
    "difficulty": 1,
    "variant": "core",
    "misconception": "Consistency requires a pivot in every row or every coefficient column.",
    "explanation": "The absence of a pivot in the augmented column means row reduction never produces an impossible equation \\(0=b\\) with \\(b\\ne0\\)."
  },
  {
    "id": "1.2-existence-09",
    "section": "1.2",
    "topic": "Existence and uniqueness",
    "concept": "unique-solution",
    "statement": "If a system is consistent and every column of its coefficient matrix is a pivot column, then the system has exactly one solution.",
    "answer": true,
    "difficulty": 2,
    "variant": "hypothesis",
    "misconception": "Adding the consistency hypothesis is still not enough to guarantee uniqueness.",
    "explanation": "Pivots in every coefficient column mean there are no free variables, which settles uniqueness once existence is known. Consistency supplies precisely that missing piece."
  },
  {
    "id": "1.2-existence-10",
    "section": "1.2",
    "topic": "Existence and uniqueness",
    "concept": "infinite-solutions",
    "statement": "If a consistent system has more variables than equations, then it has infinitely many solutions.",
    "answer": true,
    "difficulty": 3,
    "variant": "hypothesis",
    "misconception": "Having more variables than equations by itself tells you nothing about the number of solutions.",
    "explanation": "Each pivot position occupies a row of its own, so a system of \\(m\\) equations has at most \\(m\\) pivots. With \\(n>m\\) variables, some coefficient column has no pivot and its variable is free. A consistent system with a free variable has infinitely many solutions.",
    "why": {
      "prompt": "Where does the hypothesis of consistency do its work?",
      "choices": [
        "Without it the system could instead have no solutions at all.",
        "Without it there would be no free variables.",
        "Without it the coefficient matrix would not be defined.",
        "Without it the system would have exactly one solution."
      ],
      "correct": 0
    }
  },
  {
    "id": "1.2-parametric-01",
    "section": "1.2",
    "topic": "Parametric solution sets",
    "concept": "parametric-form",
    "statement": "For a consistent system, RREF makes it possible to express each basic variable in terms of the free variables.",
    "answer": true,
    "difficulty": 1,
    "variant": "core",
    "misconception": "Free variables must be solved in terms of basic variables.",
    "explanation": "The usual parametric description treats the free variables as parameters and solves the pivot equations for the basic variables."
  },
  {
    "id": "1.2-parametric-02",
    "section": "1.2",
    "topic": "Parametric solution sets",
    "concept": "ref-suffices",
    "statement": "If your only goal is to decide whether a system is consistent, reaching row echelon form is enough; continuing to RREF is unnecessary.",
    "answer": true,
    "difficulty": 2,
    "variant": "core",
    "misconception": "Every row-reduction problem must continue to RREF.",
    "explanation": "In REF you can already see whether an impossible row \\([0\\ \\cdots\\ 0\\mid b]\\), \\(b\\ne0\\), occurs. RREF is useful for reading an explicit solution description more directly.",
    "why": {
      "prompt": "Why does REF suffice for existence?",
      "choices": [
        "The inconsistency row is already visible in echelon form.",
        "Every echelon matrix is already reduced.",
        "Free variables disappear in echelon form.",
        "RREF can change whether solutions exist."
      ],
      "correct": 0
    }
  },
  {
    "id": "1.2-parametric-03",
    "section": "1.2",
    "topic": "Parametric solution sets",
    "concept": "parametric-form",
    "statement": "It is mathematically impossible to obtain a parametric description of a solution set from REF without first computing RREF.",
    "answer": false,
    "difficulty": 3,
    "variant": "hypothesis",
    "misconception": "RREF is logically necessary rather than a convenient canonical form.",
    "explanation": "RREF makes the parametric form easy to read off, but REF together with back-substitution can also produce a parametric description. In this course, reducing to RREF is often the cleanest standard procedure.",
    "why": {
      "prompt": "What makes the statement too strong?",
      "choices": [
        "Back-substitution turns an echelon form into a parametric description without computing RREF.",
        "Echelon forms never have free variables.",
        "Echelon form and reduced echelon form are the same thing.",
        "Parametric descriptions do not exist for systems with free variables."
      ],
      "correct": 0
    }
  },
  {
    "id": "1.2-parametric-04",
    "section": "1.2",
    "topic": "Parametric solution sets",
    "concept": "ref-suffices",
    "statement": "Echelon form is enough to decide whether a system is consistent, but you cannot tell from echelon form whether a consistent system has a unique solution.",
    "answer": false,
    "difficulty": 2,
    "variant": "core",
    "misconception": "Uniqueness can only be read off from the reduced echelon form.",
    "explanation": "Pivot positions are already visible in any echelon form, so you can see whether every coefficient column has a pivot. That decides whether free variables exist, and therefore whether a consistent system has one solution or infinitely many."
  },
  {
    "id": "1.3-vector-01",
    "section": "1.3",
    "topic": "Vectors",
    "concept": "column-vector",
    "statement": "A vector in \\(\\mathbb{R}^n\\) may be regarded as an \\(n\\times1\\) matrix.",
    "answer": true,
    "difficulty": 1,
    "variant": "core",
    "misconception": "Vectors and matrices are unrelated kinds of object.",
    "explanation": "A column vector is by definition a matrix with a single column. A vector in \\(\\mathbb{R}^n\\) has \\(n\\) entries, so it is \\(n\\times1\\)."
  },
  {
    "id": "1.3-vector-02",
    "section": "1.3",
    "topic": "Vectors",
    "concept": "column-vector",
    "statement": "\\(\\begin{bmatrix}1\\\\2\\end{bmatrix}\\) and \\(\\begin{bmatrix}1&2\\end{bmatrix}\\) are the same object.",
    "answer": false,
    "difficulty": 1,
    "variant": "core",
    "misconception": "The arrangement of entries is only a matter of typography.",
    "explanation": "The first is \\(2\\times1\\) and the second is \\(1\\times2\\). They carry the same numbers but are matrices of different sizes, and only the first is a vector in \\(\\mathbb{R}^2\\)."
  },
  {
    "id": "1.3-vector-03",
    "section": "1.3",
    "topic": "Vectors",
    "concept": "vector-equality",
    "statement": "Two vectors in \\(\\mathbb{R}^n\\) are equal exactly when their corresponding entries agree.",
    "answer": true,
    "difficulty": 1,
    "variant": "core",
    "misconception": "Equality of vectors is about length or direction rather than entries.",
    "explanation": "Equality is checked entry by entry: the vectors are equal when the first entries agree, the second entries agree, and so on."
  },
  {
    "id": "1.3-vector-04",
    "section": "1.3",
    "topic": "Vectors",
    "concept": "vector-equality",
    "statement": "Two vectors are equal whenever they contain the same numbers, even if those numbers are listed in a different order.",
    "answer": false,
    "difficulty": 1,
    "variant": "core",
    "misconception": "A vector is an unordered collection of numbers.",
    "explanation": "The order of the entries is part of the data. Corresponding entries must agree position by position.",
    "counterexample": "\\(\\begin{bmatrix}1\\\\2\\end{bmatrix}\\) and \\(\\begin{bmatrix}2\\\\1\\end{bmatrix}\\) are different vectors, and as points in the plane they are different points."
  },
  {
    "id": "1.3-vector-05",
    "section": "1.3",
    "topic": "Vectors",
    "concept": "vector-addition",
    "statement": "The sum \\(\\begin{bmatrix}1\\\\2\\end{bmatrix}+\\begin{bmatrix}3\\\\4\\\\5\\end{bmatrix}\\) is a vector in \\(\\mathbb{R}^3\\).",
    "answer": false,
    "difficulty": 1,
    "variant": "core",
    "misconception": "Vectors of different sizes can be added by padding the shorter one.",
    "explanation": "Addition is defined only for vectors with the same number of entries. This sum is undefined, so it is not a vector in any \\(\\mathbb{R}^m\\)."
  },
  {
    "id": "1.3-vector-06",
    "section": "1.3",
    "topic": "Vectors",
    "concept": "vector-addition",
    "statement": "Vectors in \\(\\mathbb{R}^n\\) are added entry by entry.",
    "answer": true,
    "difficulty": 1,
    "variant": "core",
    "misconception": "Addition of vectors requires a geometric construction rather than arithmetic.",
    "explanation": "The \\(i\\)th entry of \\(\\mathbf{u}+\\mathbf{v}\\) is the sum of the \\(i\\)th entries of \\(\\mathbf{u}\\) and \\(\\mathbf{v}\\). The parallelogram picture describes this same operation geometrically."
  },
  {
    "id": "1.3-vector-07",
    "section": "1.3",
    "topic": "Vectors",
    "concept": "scalar-multiple",
    "statement": "Multiplying a vector by a scalar multiplies every entry of that vector by the scalar.",
    "answer": true,
    "difficulty": 1,
    "variant": "core",
    "misconception": "A scalar multiplies only the first entry, or only some entries.",
    "explanation": "If \\(c\\) is a scalar, then \\(c\\mathbf{v}\\) is formed by multiplying each entry of \\(\\mathbf{v}\\) by \\(c\\). The result has the same number of entries as \\(\\mathbf{v}\\)."
  },
  {
    "id": "1.3-vector-08",
    "section": "1.3",
    "topic": "Vectors",
    "concept": "scalar-multiple",
    "statement": "If \\(c\\) is a nonzero scalar and \\(\\mathbf{v}\\) is a nonzero vector, then \\(c\\mathbf{v}\\) can still be the zero vector \\(\\mathbf{0}\\).",
    "answer": false,
    "difficulty": 2,
    "variant": "hypothesis",
    "misconception": "A product can vanish without either factor vanishing.",
    "explanation": "Each entry of \\(c\\mathbf{v}\\) is \\(cv_i\\). If \\(cv_i=0\\) and \\(c\\ne0\\), then \\(v_i=0\\). If every entry of \\(c\\mathbf{v}\\) were zero, every entry of \\(\\mathbf{v}\\) would be zero, contradicting \\(\\mathbf{v}\\ne\\mathbf{0}\\)."
  },
  {
    "id": "1.3-vector-09",
    "section": "1.3",
    "topic": "Vectors",
    "concept": "zero-vector",
    "statement": "The zero vector \\(\\mathbf{0}\\) in \\(\\mathbb{R}^n\\) is the vector whose entries are all \\(0\\), and \\(\\mathbf{v}+\\mathbf{0}=\\mathbf{v}\\) holds for every \\(\\mathbf{v}\\) in \\(\\mathbb{R}^n\\).",
    "answer": true,
    "difficulty": 1,
    "variant": "core",
    "misconception": "The zero vector \\(\\mathbf{0}\\) is a special symbol rather than an actual vector with entries.",
    "explanation": "The zero vector \\(\\mathbf{0}\\) is an ordinary vector, and adding it entry by entry changes nothing. That is what makes it the additive identity."
  },
  {
    "id": "1.3-vector-10",
    "section": "1.3",
    "topic": "Vectors",
    "concept": "zero-vector",
    "statement": "The scalar \\(0\\) and the zero vector \\(\\mathbf{0}\\) in \\(\\mathbb{R}^n\\) are the same object.",
    "answer": false,
    "difficulty": 2,
    "variant": "core",
    "misconception": "Anything written as \\(0\\) denotes the same thing.",
    "explanation": "A scalar is a single number; the zero vector \\(\\mathbf{0}\\) is an element of \\(\\mathbb{R}^n\\) with \\(n\\) entries. They are used differently: \\(0\\mathbf{v}\\) multiplies by a scalar, while \\(\\mathbf{v}+\\mathbf{0}\\) adds a vector."
  },
  {
    "id": "1.3-geom-01",
    "section": "1.3",
    "topic": "Geometry of vectors",
    "concept": "vector-geometry",
    "statement": "A vector in \\(\\mathbb{R}^2\\) can be pictured as the point in the plane whose coordinates are its entries.",
    "answer": true,
    "difficulty": 1,
    "variant": "core",
    "misconception": "Vectors and points are unrelated.",
    "explanation": "Identifying a vector with a point, or with an arrow from the origin to that point, is the standard picture for \\(\\mathbb{R}^2\\) and \\(\\mathbb{R}^3\\)."
  },
  {
    "id": "1.3-geom-02",
    "section": "1.3",
    "topic": "Geometry of vectors",
    "concept": "vector-geometry",
    "statement": "If neither of \\(\\mathbf{u}\\) and \\(\\mathbf{v}\\) is a scalar multiple of the other, then \\(\\mathbf{u}+\\mathbf{v}\\) is the fourth vertex of the parallelogram whose other three vertices are \\(\\mathbf{0}\\), \\(\\mathbf{u}\\), and \\(\\mathbf{v}\\).",
    "answer": true,
    "difficulty": 2,
    "variant": "core",
    "misconception": "The parallelogram rule is a separate operation from entrywise addition.",
    "explanation": "This is the parallelogram rule, and it is a picture of the same entrywise sum. The hypothesis rules out the degenerate case and gives the usual nondegenerate parallelogram picture."
  },
  {
    "id": "1.3-geom-03",
    "section": "1.3",
    "topic": "Geometry of vectors",
    "concept": "vector-geometry",
    "statement": "Multiplying a vector by a negative scalar reverses its direction and always makes it shorter.",
    "answer": false,
    "difficulty": 2,
    "variant": "core",
    "misconception": "A negative scalar shrinks a vector because negative numbers are small.",
    "explanation": "The direction reverses, but the length is scaled by the size of the scalar, not its sign. A factor larger than \\(1\\) in size makes the vector longer.",
    "counterexample": "\\(-3\\mathbf{v}\\) points opposite to \\(\\mathbf{v}\\) and is three times as long."
  },
  {
    "id": "1.3-algebra-01",
    "section": "1.3",
    "topic": "Vector algebra",
    "concept": "vector-algebra",
    "statement": "For every vector \\(\\mathbf{v}\\) in \\(\\mathbb{R}^n\\) and all scalars \\(c\\) and \\(d\\), \\((c+d)\\mathbf{v}=c\\mathbf{v}+d\\mathbf{v}\\).",
    "answer": true,
    "difficulty": 2,
    "variant": "core",
    "misconception": "Scalar multiplication distributes only over vector addition, not over addition of scalars.",
    "explanation": "Both distributive laws hold: \\(c(\\mathbf{u}+\\mathbf{v})=c\\mathbf{u}+c\\mathbf{v}\\) and \\((c+d)\\mathbf{v}=c\\mathbf{v}+d\\mathbf{v}\\). Each can be checked one entry at a time."
  },
  {
    "id": "1.3-algebra-02",
    "section": "1.3",
    "topic": "Vector algebra",
    "concept": "vector-algebra",
    "statement": "For all vectors \\(\\mathbf{u},\\mathbf{v}\\) in \\(\\mathbb{R}^n\\) and every scalar \\(c\\), \\(c(\\mathbf{u}+\\mathbf{v})=c\\mathbf{u}+\\mathbf{v}\\).",
    "answer": false,
    "difficulty": 2,
    "variant": "core",
    "misconception": "A scalar in front of a sum attaches to only the first term.",
    "explanation": "Distributing \\(c\\) must reach both terms: \\(c(\\mathbf{u}+\\mathbf{v})=c\\mathbf{u}+c\\mathbf{v}\\).",
    "counterexample": "Take \\(c=2\\), \\(\\mathbf{u}=\\mathbf{v}=\\begin{bmatrix}1\\\\0\\end{bmatrix}\\). Then \\(c(\\mathbf{u}+\\mathbf{v})=\\begin{bmatrix}4\\\\0\\end{bmatrix}\\) but \\(c\\mathbf{u}+\\mathbf{v}=\\begin{bmatrix}3\\\\0\\end{bmatrix}\\)."
  },
  {
    "id": "1.3-algebra-03",
    "section": "1.3",
    "topic": "Vector algebra",
    "concept": "vector-algebra",
    "statement": "The expression \\(\\mathbf{v}-\\mathbf{w}\\) is shorthand for \\(\\mathbf{v}+(-1)\\mathbf{w}\\).",
    "answer": true,
    "difficulty": 1,
    "variant": "core",
    "misconception": "Subtraction of vectors is a separate operation with its own definition.",
    "explanation": "Only addition and scalar multiplication are defined. Subtraction is an abbreviation, and \\(-\\mathbf{w}\\) means \\((-1)\\mathbf{w}\\)."
  },
  {
    "id": "1.3-algebra-04",
    "section": "1.3",
    "topic": "Vector algebra",
    "concept": "vector-algebra",
    "statement": "For vectors \\(\\mathbf{u}\\) and \\(\\mathbf{v}\\) in \\(\\mathbb{R}^n\\), the vectors \\(\\mathbf{u}-\\mathbf{v}\\) and \\(\\mathbf{v}-\\mathbf{u}\\) are equal.",
    "answer": false,
    "difficulty": 1,
    "variant": "core",
    "misconception": "Vector addition is commutative, so vector subtraction must be too.",
    "explanation": "Addition commutes, but subtraction does not. In fact \\(\\mathbf{v}-\\mathbf{u}=-(\\mathbf{u}-\\mathbf{v})\\), and these agree only when \\(\\mathbf{u}=\\mathbf{v}\\).",
    "counterexample": "With \\(\\mathbf{u}=\\begin{bmatrix}1\\\\0\\end{bmatrix}\\) and \\(\\mathbf{v}=\\begin{bmatrix}0\\\\0\\end{bmatrix}\\), \\(\\mathbf{u}-\\mathbf{v}=\\begin{bmatrix}1\\\\0\\end{bmatrix}\\) but \\(\\mathbf{v}-\\mathbf{u}=\\begin{bmatrix}-1\\\\0\\end{bmatrix}\\)."
  },
  {
    "id": "1.3-lincomb-01",
    "section": "1.3",
    "topic": "Linear combinations",
    "concept": "linear-combination",
    "statement": "A linear combination of \\(\\mathbf{v}_1,\\dots,\\mathbf{v}_p\\) is any vector of the form \\(c_1\\mathbf{v}_1+\\cdots+c_p\\mathbf{v}_p\\), where \\(c_1,\\dots,c_p\\) are scalars.",
    "answer": true,
    "difficulty": 1,
    "variant": "core",
    "misconception": "A linear combination requires some special choice of weights.",
    "explanation": "This is the definition of linear combination. In particular, any choice of scalars \\(c_1,\\dots,c_p\\) is permitted. Different choices of weights may or may not produce different linear combinations of the same list of vectors."
  },
  {
    "id": "1.3-lincomb-02",
    "section": "1.3",
    "topic": "Linear combinations",
    "concept": "linear-combination",
    "statement": "The weights in a linear combination are required to be positive.",
    "answer": false,
    "difficulty": 1,
    "variant": "core",
    "misconception": "Weights behave like proportions and so must be positive.",
    "explanation": "Weights are arbitrary scalars. They may be negative or zero, which is what allows expressions such as \\(2\\mathbf{v}_1-3\\mathbf{v}_2\\)."
  },
  {
    "id": "1.3-lincomb-03",
    "section": "1.3",
    "topic": "Linear combinations",
    "concept": "linear-combination",
    "statement": "The zero vector \\(\\mathbf{0}\\) is a linear combination of any nonempty list of vectors \\(\\mathbf{v}_1,\\dots,\\mathbf{v}_p\\) in \\(\\mathbb{R}^n\\).",
    "answer": true,
    "difficulty": 2,
    "variant": "core",
    "misconception": "Producing the zero vector \\(\\mathbf{0}\\) requires the vectors themselves to be special.",
    "explanation": "Choosing every weight to be \\(0\\) gives \\(0\\mathbf{v}_1+\\cdots+0\\mathbf{v}_p=\\mathbf{0}\\). No assumption about the vectors is needed."
  },
  {
    "id": "1.3-lincomb-04",
    "section": "1.3",
    "topic": "Linear combinations",
    "concept": "linear-combination",
    "statement": "Each of the vectors \\(\\mathbf{v}_1,\\dots,\\mathbf{v}_p\\) is itself a linear combination of \\(\\mathbf{v}_1,\\dots,\\mathbf{v}_p\\).",
    "answer": true,
    "difficulty": 2,
    "variant": "core",
    "misconception": "A linear combination must genuinely mix several vectors together.",
    "explanation": "Put weight \\(1\\) on the vector you want and weight \\(0\\) on all the others. For instance \\(\\mathbf{v}_2=0\\mathbf{v}_1+1\\mathbf{v}_2+0\\mathbf{v}_3+\\cdots+0\\mathbf{v}_p\\)."
  },
  {
    "id": "1.3-lincomb-05",
    "section": "1.3",
    "topic": "Linear combinations",
    "concept": "linear-combination",
    "statement": "A linear combination of vectors in \\(\\mathbb{R}^n\\) is a scalar.",
    "answer": false,
    "difficulty": 1,
    "variant": "core",
    "misconception": "Combining vectors with numerical weights produces a number.",
    "explanation": "Scalar multiples of vectors are vectors, and sums of vectors are vectors. A linear combination of vectors in \\(\\mathbb{R}^n\\) is again a vector in \\(\\mathbb{R}^n\\)."
  },
  {
    "id": "1.3-veceq-01",
    "section": "1.3",
    "topic": "Vector equations",
    "concept": "vector-equation",
    "statement": "The vector equation \\(x_1\\mathbf{a}_1+\\cdots+x_n\\mathbf{a}_n=\\mathbf{b}\\) has the same solution set as the linear system whose augmented matrix is \\(\\begin{bmatrix}\\mathbf{a}_1&\\cdots&\\mathbf{a}_n&\\mathbf{b}\\end{bmatrix}\\).",
    "answer": true,
    "difficulty": 1,
    "variant": "core",
    "misconception": "Vector equations are a separate topic from systems of equations.",
    "explanation": "Comparing the two sides entry by entry turns the single vector equation into one scalar equation per entry, and those are exactly the equations of that system.",
    "why": {
      "prompt": "What makes the two problems the same?",
      "choices": [
        "Equality of vectors is equality in every entry, and each entry gives one equation of the system.",
        "Every vector equation has exactly one solution.",
        "The vectors \\(\\mathbf{a}_1,\\dots,\\mathbf{a}_n\\) must be the columns of an identity matrix.",
        "Row operations convert vector equations into scalar equations."
      ],
      "correct": 0
    }
  },
  {
    "id": "1.3-veceq-02",
    "section": "1.3",
    "topic": "Vector equations",
    "concept": "vector-equation",
    "statement": "Deciding whether \\(\\mathbf{b}\\) is a linear combination of \\(\\mathbf{a}_1,\\dots,\\mathbf{a}_n\\) requires a technique different from solving a linear system.",
    "answer": false,
    "difficulty": 2,
    "variant": "core",
    "misconception": "Questions phrased with vectors need vector-specific methods.",
    "explanation": "Asking whether such weights exist is asking whether the vector equation \\(x_1\\mathbf{a}_1+\\cdots+x_n\\mathbf{a}_n=\\mathbf{b}\\) is solvable, which is asking whether the system with augmented matrix \\(\\begin{bmatrix}\\mathbf{a}_1&\\cdots&\\mathbf{a}_n&\\mathbf{b}\\end{bmatrix}\\) is consistent. Row reduction answers it."
  },
  {
    "id": "1.3-veceq-03",
    "section": "1.3",
    "topic": "Vector equations",
    "concept": "vector-equation",
    "statement": "If the vector equation \\(x_1\\mathbf{a}_1+x_2\\mathbf{a}_2=\\mathbf{b}\\) has a solution, then the weights \\(x_1,x_2\\) are uniquely determined.",
    "answer": false,
    "difficulty": 2,
    "variant": "hypothesis",
    "misconception": "Existence of a representation as a linear combination forces that representation to be unique.",
    "explanation": "Solvability and uniqueness are separate questions here, exactly as they are for systems. The corresponding system may have a free variable.",
    "counterexample": "With \\(\\mathbf{a}_1=\\mathbf{a}_2=\\begin{bmatrix}1\\\\0\\end{bmatrix}\\) and \\(\\mathbf{b}=\\begin{bmatrix}1\\\\0\\end{bmatrix}\\), every pair with \\(x_1+x_2=1\\) works.",
    "why": {
      "prompt": "Which feature of the corresponding system causes the weights to be non-unique?",
      "choices": [
        "The system has a free variable.",
        "The system is inconsistent.",
        "The system has more equations than unknowns.",
        "The augmented column is a pivot column."
      ],
      "correct": 0
    }
  },
  {
    "id": "1.3-span-01",
    "section": "1.3",
    "topic": "Span",
    "concept": "span",
    "statement": "\\(\\operatorname{Span}\\{\\mathbf{v}_1,\\dots,\\mathbf{v}_p\\}\\) is the set of all linear combinations of \\(\\mathbf{v}_1,\\dots,\\mathbf{v}_p\\).",
    "answer": true,
    "difficulty": 1,
    "variant": "core",
    "misconception": "The span is just the list of vectors you started with.",
    "explanation": "The span collects every vector that can be written as \\(c_1\\mathbf{v}_1+\\cdots+c_p\\mathbf{v}_p\\) for some choice of scalars."
  },
  {
    "id": "1.3-span-02",
    "section": "1.3",
    "topic": "Span",
    "concept": "span",
    "statement": "\\(\\mathbf{b}\\) belongs to \\(\\operatorname{Span}\\{\\mathbf{a}_1,\\dots,\\mathbf{a}_n\\}\\) exactly when the system with augmented matrix \\(\\begin{bmatrix}\\mathbf{a}_1&\\cdots&\\mathbf{a}_n&\\mathbf{b}\\end{bmatrix}\\) is inconsistent.",
    "answer": false,
    "difficulty": 2,
    "variant": "core",
    "misconception": "Membership in a span corresponds to inconsistency rather than consistency.",
    "explanation": "It is the other way around. Membership means suitable weights exist, so the system must be consistent.",
    "why": {
      "prompt": "What does consistency of that system mean here?",
      "choices": [
        "Weights exist that express \\(\\mathbf{b}\\) as a linear combination of \\(\\mathbf{a}_1,\\dots,\\mathbf{a}_n\\).",
        "The vectors \\(\\mathbf{a}_1,\\dots,\\mathbf{a}_n\\) are all nonzero.",
        "\\(\\mathbf{b}\\) is one of the vectors \\(\\mathbf{a}_1,\\dots,\\mathbf{a}_n\\).",
        "The span is all of \\(\\mathbb{R}^n\\)."
      ],
      "correct": 0
    }
  },
  {
    "id": "1.3-span-03",
    "section": "1.3",
    "topic": "Span",
    "concept": "span",
    "statement": "\\(\\operatorname{Span}\\{\\mathbf{u},\\mathbf{v}\\}\\) consists of exactly three vectors: \\(\\mathbf{u}\\), \\(\\mathbf{v}\\), and \\(\\mathbf{u}+\\mathbf{v}\\).",
    "answer": false,
    "difficulty": 2,
    "variant": "core",
    "misconception": "The span is a short list built from the obvious combinations.",
    "explanation": "Every choice of weights is allowed, so the span also contains \\(2\\mathbf{u}\\), \\(-\\mathbf{v}\\), \\(3\\mathbf{u}-7\\mathbf{v}\\), the zero vector \\(\\mathbf{0}\\), and infinitely many others whenever \\(\\mathbf{u}\\) or \\(\\mathbf{v}\\) is nonzero. If \\(\\mathbf{u}=\\mathbf{v}=\\mathbf{0}\\), then the span has only one vector, not three."
  },
  {
    "id": "1.3-span-04",
    "section": "1.3",
    "topic": "Span",
    "concept": "span",
    "statement": "If \\(\\mathbf{v}\\) belongs to \\(\\operatorname{Span}\\{\\mathbf{u}\\}\\), then \\(\\operatorname{Span}\\{\\mathbf{u},\\mathbf{v}\\}=\\operatorname{Span}\\{\\mathbf{u}\\}\\).",
    "answer": true,
    "difficulty": 3,
    "variant": "hypothesis",
    "misconception": "Adding another vector to a list always enlarges the span.",
    "explanation": "Write \\(\\mathbf{v}=c\\mathbf{u}\\). Then \\(a\\mathbf{u}+b\\mathbf{v}=(a+bc)\\mathbf{u}\\), so every combination of \\(\\mathbf{u}\\) and \\(\\mathbf{v}\\) is already a multiple of \\(\\mathbf{u}\\). The reverse containment holds by taking \\(b=0\\), so the two spans are equal.",
    "why": {
      "prompt": "Why does adding \\(\\mathbf{v}\\) contribute nothing new?",
      "choices": [
        "\\(\\mathbf{v}\\) is already a multiple of \\(\\mathbf{u}\\), so any combination of \\(\\mathbf{u}\\) and \\(\\mathbf{v}\\) collapses to a multiple of \\(\\mathbf{u}\\).",
        "A span can never contain more than one vector.",
        "\\(\\mathbf{v}\\) must be the zero vector \\(\\mathbf{0}\\).",
        "Spans are unchanged by adding any vector whatsoever."
      ],
      "correct": 0
    }
  },
  {
    "id": "1.3-span-05",
    "section": "1.3",
    "topic": "Span",
    "concept": "span",
    "statement": "\\(\\operatorname{Span}\\{\\mathbf{v}_1,\\dots,\\mathbf{v}_p\\}\\) always contains the zero vector \\(\\mathbf{0}\\).",
    "answer": true,
    "difficulty": 1,
    "variant": "core",
    "misconception": "The span contains the zero vector \\(\\mathbf{0}\\) only when one of the \\(\\mathbf{v}_i\\) is zero.",
    "explanation": "Taking all weights equal to \\(0\\) produces the zero vector \\(\\mathbf{0}\\), whatever the vectors \\(\\mathbf{v}_1,\\dots,\\mathbf{v}_p\\) happen to be."
  },
  {
    "id": "1.3-spangeom-01",
    "section": "1.3",
    "topic": "Span",
    "concept": "span-geometry",
    "statement": "If \\(\\mathbf{v}\\) is a nonzero vector in \\(\\mathbb{R}^3\\), then \\(\\operatorname{Span}\\{\\mathbf{v}\\}\\) is a line through the origin.",
    "answer": true,
    "difficulty": 1,
    "variant": "core",
    "misconception": "The span of one vector is just that single arrow.",
    "explanation": "The span is the set of all multiples \\(c\\mathbf{v}\\). As \\(c\\) ranges over the real numbers these trace out the whole line through the origin in the direction of \\(\\mathbf{v}\\)."
  },
  {
    "id": "1.3-spangeom-02",
    "section": "1.3",
    "topic": "Span",
    "concept": "span-geometry",
    "statement": "If \\(\\mathbf{u}\\) and \\(\\mathbf{v}\\) are nonzero vectors in \\(\\mathbb{R}^3\\), then \\(\\operatorname{Span}\\{\\mathbf{u},\\mathbf{v}\\}\\) is a plane through the origin.",
    "answer": false,
    "difficulty": 2,
    "variant": "hypothesis",
    "misconception": "Two nonzero vectors always span a two-dimensional set.",
    "explanation": "Being nonzero is not enough. If one vector is a multiple of the other, the two of them span only a line.",
    "counterexample": "Take \\(\\mathbf{u}=\\mathbf{v}=\\begin{bmatrix}1\\\\0\\\\0\\end{bmatrix}\\). Both are nonzero, but their span is a line, not a plane.",
    "why": {
      "prompt": "Which hypothesis is missing?",
      "choices": [
        "Neither vector may be a scalar multiple of the other.",
        "Both vectors must have three nonzero entries.",
        "The vectors must be perpendicular.",
        "The vectors must have the same length."
      ],
      "correct": 0
    }
  },
  {
    "id": "1.3-spangeom-03",
    "section": "1.3",
    "topic": "Span",
    "concept": "span-geometry",
    "statement": "If \\(\\mathbf{u}\\) and \\(\\mathbf{v}\\) are vectors in \\(\\mathbb{R}^3\\) and neither is a scalar multiple of the other, then \\(\\operatorname{Span}\\{\\mathbf{u},\\mathbf{v}\\}\\) is a plane containing the origin.",
    "answer": true,
    "difficulty": 2,
    "variant": "hypothesis",
    "misconception": "Ruling out the degenerate case is not enough to guarantee a plane.",
    "explanation": "With that hypothesis the two vectors point in genuinely different directions, and the combinations \\(a\\mathbf{u}+b\\mathbf{v}\\) sweep out a plane. It passes through the origin because \\(a=b=0\\) is allowed."
  },
  {
    "id": "1.3-spangeom-04",
    "section": "1.3",
    "topic": "Span",
    "concept": "span-geometry",
    "statement": "\\(\\operatorname{Span}\\{\\mathbf{0}\\}\\) is a line through the origin.",
    "answer": false,
    "difficulty": 2,
    "variant": "core",
    "misconception": "The span of a single vector is always a line.",
    "explanation": "Every multiple of the zero vector \\(\\mathbf{0}\\) is again \\(\\mathbf{0}\\), so this span is the single point \\(\\{\\mathbf{0}\\}\\). A line requires the vector being spanned to be nonzero."
  },
  {
    "id": "1.3-vector-11",
    "section": "1.3",
    "topic": "Vectors",
    "concept": "column-vector",
    "statement": "Every matrix is a vector.",
    "answer": false,
    "difficulty": 1,
    "variant": "core",
    "misconception": "Because vectors are matrices, the two words describe the same collection of objects.",
    "explanation": "Vectors are exactly the matrices with a single column. A matrix with two or more columns is not a vector, so the containment goes only one way."
  },
  {
    "id": "1.3-geom-04",
    "section": "1.3",
    "topic": "Geometry of vectors",
    "concept": "vector-geometry",
    "statement": "If \\(\\mathbf{v}\\) is a nonzero vector, then \\(-\\mathbf{v}\\) points in the same direction as \\(\\mathbf{v}\\).",
    "answer": false,
    "difficulty": 1,
    "variant": "core",
    "misconception": "Negating a vector changes only its length.",
    "explanation": "\\(-\\mathbf{v}\\) is \\((-1)\\mathbf{v}\\), which reverses direction while keeping the length the same. It points opposite to \\(\\mathbf{v}\\)."
  },
  {
    "id": "1.3-algebra-05",
    "section": "1.3",
    "topic": "Vector algebra",
    "concept": "vector-algebra",
    "statement": "For every vector \\(\\mathbf{v}\\) in \\(\\mathbb{R}^n\\), \\(1\\mathbf{v}=\\mathbf{0}\\).",
    "answer": false,
    "difficulty": 1,
    "variant": "core",
    "misconception": "Confusing the scalar that acts as an identity with the one that annihilates.",
    "explanation": "Multiplying by the scalar \\(1\\) leaves a vector unchanged: \\(1\\mathbf{v}=\\mathbf{v}\\). It is the scalar \\(0\\) that produces the zero vector \\(\\mathbf{0}\\)."
  },
  {
    "id": "1.3-algebra-06",
    "section": "1.3",
    "topic": "Vector algebra",
    "concept": "vector-algebra",
    "statement": "For all vectors \\(\\mathbf{u},\\mathbf{v},\\mathbf{w}\\) in \\(\\mathbb{R}^n\\), \\((\\mathbf{u}+\\mathbf{v})+\\mathbf{w}=\\mathbf{u}+(\\mathbf{v}+\\mathbf{w})\\).",
    "answer": true,
    "difficulty": 2,
    "variant": "core",
    "misconception": "The grouping of a sum of three vectors can change the result.",
    "explanation": "Vector addition is associative, since it is carried out entry by entry and addition of real numbers is associative. This is why a sum of several vectors can be written without parentheses."
  },
  {
    "id": "1.3-lincomb-06",
    "section": "1.3",
    "topic": "Linear combinations",
    "concept": "linear-combination",
    "statement": "If \\(\\mathbf{y}\\) is a linear combination of \\(\\mathbf{v}_1,\\mathbf{v}_2\\), then \\(\\mathbf{y}\\) is also a linear combination of \\(\\mathbf{v}_1,\\mathbf{v}_2,\\mathbf{v}_3\\).",
    "answer": true,
    "difficulty": 2,
    "variant": "core",
    "misconception": "A linear combination must use every vector on the list.",
    "explanation": "Write \\(\\mathbf{y}=c_1\\mathbf{v}_1+c_2\\mathbf{v}_2\\) and then append the term \\(0\\mathbf{v}_3\\). Enlarging the list can never remove anything from the span."
  },
  {
    "id": "1.3-veceq-04",
    "section": "1.3",
    "topic": "Vector equations",
    "concept": "vector-equation",
    "statement": "Asking whether \\(\\mathbf{b}\\) lies in \\(\\operatorname{Span}\\{\\mathbf{a}_1,\\dots,\\mathbf{a}_n\\}\\) and asking whether the system with augmented matrix \\(\\begin{bmatrix}\\mathbf{a}_1&\\cdots&\\mathbf{a}_n&\\mathbf{b}\\end{bmatrix}\\) is consistent are the same question.",
    "answer": true,
    "difficulty": 2,
    "variant": "core",
    "misconception": "Span is a geometric notion that has to be investigated separately from row reduction.",
    "explanation": "\\(\\mathbf{b}\\) is in the span exactly when weights exist with \\(x_1\\mathbf{a}_1+\\cdots+x_n\\mathbf{a}_n=\\mathbf{b}\\), and that vector equation has the same solution set as the system with that augmented matrix. So consistency answers the span question."
  },
  {
    "id": "1.3-lincomb-07",
    "section": "1.3",
    "topic": "Linear combinations",
    "concept": "linear-combination",
    "statement": "If \\(\\mathbf{y}\\) is a linear combination of \\(\\mathbf{v}_1,\\dots,\\mathbf{v}_p\\), then \\(c\\mathbf{y}\\) is also a linear combination of \\(\\mathbf{v}_1,\\dots,\\mathbf{v}_p\\) for every scalar \\(c\\).",
    "answer": true,
    "difficulty": 3,
    "variant": "core",
    "misconception": "A linear combination is not closed under further scalar multiplication.",
    "explanation": "If \\(\\mathbf{y}=c_1\\mathbf{v}_1+\\cdots+c_p\\mathbf{v}_p\\), then \\(c\\mathbf{y}=(cc_1)\\mathbf{v}_1+\\cdots+(cc_p)\\mathbf{v}_p\\). The new weights are still scalars, so \\(c\\mathbf{y}\\) is another linear combination of the same vectors.",
    "why": {
      "prompt": "What happens to the weights?",
      "choices": [
        "They are all multiplied by \\(c\\), producing another permitted choice of scalar weights.",
        "They must stay fixed, so only \\(\\mathbf{y}\\) itself is allowed.",
        "They become vectors, so the expression is no longer a linear combination.",
        "They must all become positive."
      ],
      "correct": 0
    }
  },
  {
    "id": "1.3-span-06",
    "section": "1.3",
    "topic": "Span",
    "concept": "span",
    "statement": "If \\(\\mathbf{b}\\) is not in \\(\\operatorname{Span}\\{\\mathbf{u},\\mathbf{v}\\}\\), then \\(\\operatorname{Span}\\{\\mathbf{u},\\mathbf{v},\\mathbf{b}\\}=\\operatorname{Span}\\{\\mathbf{u},\\mathbf{v}\\}\\).",
    "answer": false,
    "difficulty": 3,
    "variant": "hypothesis",
    "misconception": "Adding a vector outside a span leaves the span unchanged.",
    "explanation": "The vector \\(\\mathbf{b}\\) belongs to \\(\\operatorname{Span}\\{\\mathbf{u},\\mathbf{v},\\mathbf{b}\\}\\), because it is \\(0\\mathbf{u}+0\\mathbf{v}+1\\mathbf{b}\\). If \\(\\mathbf{b}\\) is not in \\(\\operatorname{Span}\\{\\mathbf{u},\\mathbf{v}\\}\\), the two spans cannot be equal.",
    "why": {
      "prompt": "Why must the span get larger?",
      "choices": [
        "The new span contains \\(\\mathbf{b}\\), while the old span does not.",
        "Every time a vector is added to a list, the span becomes all of \\(\\mathbb{R}^n\\).",
        "The old span contained no vectors at all.",
        "The equality fails only because \\(\\mathbf{b}\\) is nonzero."
      ],
      "correct": 0
    }
  },
  {
    "id": "1.3-veceq-05",
    "section": "1.3",
    "topic": "Vector equations",
    "concept": "vector-equation",
    "statement": "If the system with augmented matrix \\(\\begin{bmatrix}\\mathbf{a}_1&\\mathbf{a}_2&\\mathbf{b}\\end{bmatrix}\\) is consistent, then \\(\\mathbf{b}\\) must be a scalar multiple of either \\(\\mathbf{a}_1\\) or \\(\\mathbf{a}_2\\).",
    "answer": false,
    "difficulty": 3,
    "variant": "core",
    "misconception": "A linear combination of two vectors has to use only one of them.",
    "explanation": "Consistency says \\(\\mathbf{b}\\) is a linear combination of \\(\\mathbf{a}_1\\) and \\(\\mathbf{a}_2\\), but that combination may genuinely use both vectors.",
    "counterexample": "With \\(\\mathbf{a}_1=\\begin{bmatrix}1\\\\0\\end{bmatrix}\\), \\(\\mathbf{a}_2=\\begin{bmatrix}0\\\\1\\end{bmatrix}\\), and \\(\\mathbf{b}=\\begin{bmatrix}1\\\\1\\end{bmatrix}\\), the system is consistent because \\(\\mathbf{b}=\\mathbf{a}_1+\\mathbf{a}_2\\), but \\(\\mathbf{b}\\) is not a scalar multiple of either column.",
    "why": {
      "prompt": "What does consistency actually say?",
      "choices": [
        "\\(\\mathbf{b}\\) is some linear combination of the columns, possibly using both.",
        "\\(\\mathbf{b}\\) is equal to one of the columns.",
        "\\(\\mathbf{b}\\) is a scalar multiple of every column.",
        "\\(\\mathbf{b}\\) must be the zero vector \\(\\mathbf{0}\\)."
      ],
      "correct": 0
    }
  },
  {
    "id": "1.4-prod-01",
    "section": "1.4",
    "topic": "The product Ax",
    "concept": "matrix-vector-product",
    "statement": "If \\(A\\) has columns \\(\\mathbf{a}_1,\\dots,\\mathbf{a}_n\\) and \\(\\mathbf{x}\\) is in \\(\\mathbb{R}^n\\), then \\(A\\mathbf{x}=x_1\\mathbf{a}_1+\\cdots+x_n\\mathbf{a}_n\\).",
    "answer": true,
    "difficulty": 1,
    "variant": "core",
    "misconception": "The product \\(A\\mathbf{x}\\) is an unrelated bookkeeping operation.",
    "explanation": "This is the definition of the matrix-vector product: the columns of \\(A\\) are combined using the entries of \\(\\mathbf{x}\\) as weights."
  },
  {
    "id": "1.4-prod-02",
    "section": "1.4",
    "topic": "The product Ax",
    "concept": "matrix-vector-product",
    "statement": "The product \\(A\\mathbf{x}\\) is defined for every matrix \\(A\\) and every vector \\(\\mathbf{x}\\).",
    "answer": false,
    "difficulty": 1,
    "variant": "core",
    "misconception": "Sizes never obstruct the matrix-vector product.",
    "explanation": "The weights come from the entries of \\(\\mathbf{x}\\), one for each column of \\(A\\). So \\(A\\mathbf{x}\\) is defined only when the number of entries of \\(\\mathbf{x}\\) equals the number of columns of \\(A\\)."
  },
  {
    "id": "1.4-prod-03",
    "section": "1.4",
    "topic": "The product Ax",
    "concept": "matrix-vector-product",
    "statement": "If \\(A\\) is \\(m\\times n\\) and \\(\\mathbf{x}\\) is in \\(\\mathbb{R}^n\\), then \\(A\\mathbf{x}\\) is in \\(\\mathbb{R}^m\\).",
    "answer": true,
    "difficulty": 2,
    "variant": "core",
    "misconception": "The output of \\(A\\mathbf{x}\\) lives in the same space as \\(\\mathbf{x}\\).",
    "explanation": "\\(A\\mathbf{x}\\) is a linear combination of the columns of \\(A\\), and each column has \\(m\\) entries. So the result has \\(m\\) entries no matter how large \\(n\\) is."
  },
  {
    "id": "1.4-prod-04",
    "section": "1.4",
    "topic": "The product Ax",
    "concept": "matrix-vector-product",
    "statement": "\\(A\\mathbf{x}\\) is a linear combination of the rows of \\(A\\).",
    "answer": false,
    "difficulty": 2,
    "variant": "core",
    "misconception": "Rows and columns play interchangeable roles in \\(A\\mathbf{x}\\).",
    "explanation": "\\(A\\mathbf{x}\\) is defined as a linear combination of the columns of \\(A\\). Rows are used to compute the individual entries of \\(A\\mathbf{x}\\) if computing the product using the row-vector rule.",
    "why": {
      "prompt": "Why must it be the columns?",
      "choices": [
        "There is one weight for each entry of \\(\\mathbf{x}\\), and \\(\\mathbf{x}\\) has one entry per column of \\(A\\).",
        "Rows of \\(A\\) are never vectors.",
        "The rows of \\(A\\) all have the same number of entries as \\(\\mathbf{x}\\) only when \\(A\\) is square.",
        "Combining rows would give an answer in \\(\\mathbb{R}^m\\), which is the wrong space."
      ],
      "correct": 0
    }
  },
  {
    "id": "1.4-rowrule-01",
    "section": "1.4",
    "topic": "The product Ax",
    "concept": "row-vector-rule",
    "statement": "The \\(i\\)th entry of \\(A\\mathbf{x}\\) is obtained by pairing the entries of row \\(i\\) of \\(A\\) with the entries of \\(\\mathbf{x}\\) and adding the products.",
    "answer": true,
    "difficulty": 2,
    "variant": "core",
    "misconception": "The row-vector rule is a different definition that might disagree with the column definition.",
    "explanation": "This is the row-vector rule. It is a consequence of the definition: taking the \\(i\\)th entry of \\(x_1\\mathbf{a}_1+\\cdots+x_n\\mathbf{a}_n\\) gives exactly that sum of products."
  },
  {
    "id": "1.4-rowrule-02",
    "section": "1.4",
    "topic": "The product Ax",
    "concept": "row-vector-rule",
    "statement": "The row-vector rule and the definition of \\(A\\mathbf{x}\\) as a linear combination of columns can give different answers.",
    "answer": false,
    "difficulty": 2,
    "variant": "core",
    "misconception": "Two different procedures must compute two different things.",
    "explanation": "They always agree. The row-vector rule is derived from the column definition by reading off one entry at a time, so it is a way of computing the same vector."
  },
  {
    "id": "1.4-mateq-01",
    "section": "1.4",
    "topic": "Matrix equations",
    "concept": "matrix-equation",
    "statement": "An equation of the form \\(A\\mathbf{x}=\\mathbf{b}\\), where \\(A\\) is a matrix and \\(\\mathbf{b}\\) is a vector, is called a matrix equation.",
    "answer": true,
    "difficulty": 1,
    "variant": "core",
    "misconception": "Matrix equation is a loose phrase rather than a definition.",
    "explanation": "This is the standard terminology. The unknown \\(\\mathbf{x}\\) is a vector, and solving the equation means finding every vector \\(\\mathbf{x}\\) that satisfies it."
  },
  {
    "id": "1.4-mateq-02",
    "section": "1.4",
    "topic": "Matrix equations",
    "concept": "matrix-equation",
    "statement": "In the matrix equation \\(A\\mathbf{x}=\\mathbf{b}\\), the unknown \\(\\mathbf{x}\\) is a scalar.",
    "answer": false,
    "difficulty": 2,
    "variant": "core",
    "misconception": "A single letter standing for an unknown must denote a single number.",
    "explanation": "If \\(A\\) is \\(m\\times n\\), then \\(\\mathbf{x}\\) is a vector in \\(\\mathbb{R}^n\\). Its entries \\(x_1,\\dots,x_n\\) are the scalars, and they serve as the weights on the columns of \\(A\\)."
  },
  {
    "id": "1.4-equiv-01",
    "section": "1.4",
    "topic": "Matrix equations",
    "concept": "matrix-equation-equivalence",
    "statement": "If \\(A\\) has columns \\(\\mathbf{a}_1,\\dots,\\mathbf{a}_n\\), then \\(A\\mathbf{x}=\\mathbf{b}\\), the vector equation \\(x_1\\mathbf{a}_1+\\cdots+x_n\\mathbf{a}_n=\\mathbf{b}\\), and the system with augmented matrix \\(\\begin{bmatrix}\\mathbf{a}_1&\\cdots&\\mathbf{a}_n&\\mathbf{b}\\end{bmatrix}\\) all have the same solution set.",
    "answer": true,
    "difficulty": 2,
    "variant": "core",
    "misconception": "These are three different problems that happen to look similar.",
    "explanation": "The first two say the same thing by the definition of \\(A\\mathbf{x}\\), and the second and third say the same thing because equality of vectors is equality in each entry. So one row reduction settles all three.",
    "why": {
      "prompt": "What is the practical payoff of this theorem?",
      "choices": [
        "A question about matrices, vectors, or systems can be moved to whichever of the three settings is easiest, and row reduction answers all of them.",
        "It shows every matrix equation has a unique solution.",
        "It shows the three formulations have different solution sets that must be compared.",
        "It replaces row reduction with a faster method."
      ],
      "correct": 0
    }
  },
  {
    "id": "1.4-equiv-02",
    "section": "1.4",
    "topic": "Matrix equations",
    "concept": "matrix-equation-equivalence",
    "statement": "The three formulations agree only when \\(A\\) has at least as many rows as columns.",
    "answer": false,
    "difficulty": 2,
    "variant": "hypothesis",
    "misconception": "The equivalence theorem carries a hidden restriction on the shape of \\(A\\).",
    "explanation": "No condition on the shape of \\(A\\) is needed. The theorem holds for every \\(m\\times n\\) matrix \\(A\\) and every \\(\\mathbf{b}\\) in \\(\\mathbb{R}^m\\), since it follows directly from the definition of \\(A\\mathbf{x}\\) and from what equality of vectors means."
  },
  {
    "id": "1.4-equiv-03",
    "section": "1.4",
    "topic": "Matrix equations",
    "concept": "matrix-equation-equivalence",
    "statement": "Row reducing \\(\\begin{bmatrix}A&\\mathbf{b}\\end{bmatrix}\\) is a legitimate way to solve the matrix equation \\(A\\mathbf{x}=\\mathbf{b}\\).",
    "answer": true,
    "difficulty": 1,
    "variant": "core",
    "misconception": "Matrix equations need a method that does not involve augmented matrices.",
    "explanation": "By the equivalence theorem, the solutions of \\(A\\mathbf{x}=\\mathbf{b}\\) are exactly the solutions of the system with that augmented matrix, so the familiar row reduction applies unchanged."
  },
  {
    "id": "1.4-solv-01",
    "section": "1.4",
    "topic": "Existence of solutions",
    "concept": "solvability-columns",
    "statement": "\\(A\\mathbf{x}=\\mathbf{b}\\) has a solution if and only if \\(\\mathbf{b}\\) is a linear combination of the columns of \\(A\\).",
    "answer": true,
    "difficulty": 2,
    "variant": "core",
    "misconception": "Solvability of \\(A\\mathbf{x}=\\mathbf{b}\\) is unrelated to the columns of \\(A\\).",
    "explanation": "A solution \\(\\mathbf{x}\\) is precisely a list of weights making \\(x_1\\mathbf{a}_1+\\cdots+x_n\\mathbf{a}_n\\) equal to \\(\\mathbf{b}\\). So solutions exist exactly when \\(\\mathbf{b}\\) lies in the span of the columns.",
    "why": {
      "prompt": "Restate the condition using span.",
      "choices": [
        "\\(A\\mathbf{x}=\\mathbf{b}\\) is consistent exactly when \\(\\mathbf{b}\\) is in \\(\\operatorname{Span}\\{\\mathbf{a}_1,\\dots,\\mathbf{a}_n\\}\\).",
        "\\(A\\mathbf{x}=\\mathbf{b}\\) is consistent exactly when \\(\\mathbf{b}\\) is one of the columns of \\(A\\).",
        "\\(A\\mathbf{x}=\\mathbf{b}\\) is consistent exactly when \\(A\\) has no zero columns.",
        "\\(A\\mathbf{x}=\\mathbf{b}\\) is consistent exactly when \\(\\mathbf{b}\\) is the zero vector \\(\\mathbf{0}\\)."
      ],
      "correct": 0
    }
  },
  {
    "id": "1.4-solv-02",
    "section": "1.4",
    "topic": "Existence of solutions",
    "concept": "solvability-columns",
    "statement": "If \\(A\\mathbf{x}=\\mathbf{b}\\) has a solution, then \\(\\mathbf{b}\\) must be one of the columns of \\(A\\).",
    "answer": false,
    "difficulty": 2,
    "variant": "core",
    "misconception": "Being in the span of the columns means being among the columns.",
    "explanation": "Being in the span is far weaker than being one of the columns. Any weighted combination counts.",
    "counterexample": "With \\(A=\\begin{bmatrix}1&0\\\\0&1\\end{bmatrix}\\) and \\(\\mathbf{b}=\\begin{bmatrix}5\\\\7\\end{bmatrix}\\), the equation is solvable but \\(\\mathbf{b}\\) is not a column of \\(A\\)."
  },
  {
    "id": "1.4-solv-03",
    "section": "1.4",
    "topic": "Existence of solutions",
    "concept": "solvability-columns",
    "statement": "If \\(\\mathbf{b}\\) is not in the span of the columns of \\(A\\), then \\(A\\mathbf{x}=\\mathbf{b}\\) has infinitely many solutions.",
    "answer": false,
    "difficulty": 2,
    "variant": "core",
    "misconception": "Failure of a condition produces many solutions rather than none.",
    "explanation": "If \\(\\mathbf{b}\\) is outside the span of the columns, then no choice of weights produces \\(\\mathbf{b}\\), so the equation has no solution at all."
  },
  {
    "id": "1.4-spansrm-01",
    "section": "1.4",
    "topic": "Spanning sets",
    "concept": "spans-rm",
    "statement": "A set of vectors in \\(\\mathbb{R}^m\\) spans \\(\\mathbb{R}^m\\) when every vector in \\(\\mathbb{R}^m\\) is a linear combination of them.",
    "answer": true,
    "difficulty": 1,
    "variant": "core",
    "misconception": "Spanning means the vectors are spread out or point in many directions.",
    "explanation": "Spanning \\(\\mathbb{R}^m\\) means the span is all of \\(\\mathbb{R}^m\\), so nothing in \\(\\mathbb{R}^m\\) is left out."
  },
  {
    "id": "1.4-spansrm-02",
    "section": "1.4",
    "topic": "Spanning sets",
    "concept": "spans-rm",
    "statement": "Every set of three vectors in \\(\\mathbb{R}^3\\) spans \\(\\mathbb{R}^3\\).",
    "answer": false,
    "difficulty": 2,
    "variant": "core",
    "misconception": "Having as many vectors as dimensions is enough to span.",
    "explanation": "The count is not enough; the vectors must genuinely reach in three independent directions. Three vectors lying in a common plane through the origin span only that plane.",
    "counterexample": "Three copies of \\(\\begin{bmatrix}1\\\\0\\\\0\\end{bmatrix}\\) span only a line."
  },
  {
    "id": "1.4-spansrm-03",
    "section": "1.4",
    "topic": "Spanning sets",
    "concept": "spans-rm",
    "statement": "If a set of vectors in \\(\\mathbb{R}^4\\) contains more than four vectors, then it must span \\(\\mathbb{R}^4\\).",
    "answer": false,
    "difficulty": 2,
    "variant": "core",
    "misconception": "Enough vectors will eventually fill up the space.",
    "explanation": "Extra vectors contribute nothing if they repeat directions already present. A long list can still have a small span.",
    "counterexample": "Ten copies of \\(\\begin{bmatrix}1\\\\0\\\\0\\\\0\\end{bmatrix}\\) span only a line in \\(\\mathbb{R}^4\\)."
  },
  {
    "id": "1.4-spansrm-04",
    "section": "1.4",
    "topic": "Spanning sets",
    "concept": "spans-rm",
    "statement": "Fewer than \\(m\\) vectors can never span \\(\\mathbb{R}^m\\).",
    "answer": true,
    "difficulty": 3,
    "variant": "hypothesis",
    "misconception": "A small number of well-chosen vectors might still span the whole space.",
    "explanation": "Arrange \\(p\\) vectors as the columns of an \\(m\\times p\\) matrix \\(A\\). Each pivot occupies its own column and its own row, so there are at most \\(p\\) pivots. If \\(p<m\\), some row has no pivot, and then the columns of \\(A\\) do not span \\(\\mathbb{R}^m\\).",
    "why": {
      "prompt": "Which condition fails?",
      "choices": [
        "\\(A\\) cannot have a pivot position in every row.",
        "\\(A\\) cannot have a pivot position in every column.",
        "\\(A\\) must have a free variable.",
        "\\(A\\) must be inconsistent."
      ],
      "correct": 0
    }
  },
  {
    "id": "1.4-tfae-01",
    "section": "1.4",
    "topic": "Spanning sets",
    "concept": "pivot-in-every-row",
    "statement": "If \\(A\\) is \\(m\\times n\\) and has a pivot position in every row, then \\(A\\mathbf{x}=\\mathbf{b}\\) has a solution for every \\(\\mathbf{b}\\) in \\(\\mathbb{R}^m\\).",
    "answer": true,
    "difficulty": 2,
    "variant": "core",
    "misconception": "Pivots in every row control uniqueness rather than existence.",
    "explanation": "A pivot in every row leaves no room for a row of the form \\([0\\ \\cdots\\ 0\\mid b]\\) with \\(b\\ne0\\) after reduction, so the augmented column can never be a pivot column and the equation is always consistent.",
    "why": {
      "prompt": "Which equivalent statement is this?",
      "choices": [
        "The columns of \\(A\\) span \\(\\mathbb{R}^m\\).",
        "The columns of \\(A\\) span \\(\\mathbb{R}^n\\).",
        "\\(A\\mathbf{x}=\\mathbf{b}\\) has a unique solution for each \\(\\mathbf{b}\\).",
        "\\(A\\) has no free variables."
      ],
      "correct": 0
    }
  },
  {
    "id": "1.4-tfae-02",
    "section": "1.4",
    "topic": "Spanning sets",
    "concept": "pivot-in-every-row",
    "statement": "The columns of \\(A\\) span \\(\\mathbb{R}^m\\) exactly when \\(A\\) has a pivot position in every column.",
    "answer": false,
    "difficulty": 2,
    "variant": "core",
    "misconception": "Row and column are interchangeable in the spanning criterion.",
    "explanation": "The criterion is a pivot in every row, not every column. Pivots in every column concern free variables and uniqueness, which is a different question.",
    "counterexample": "\\(A=\\begin{bmatrix}1&0&0\\\\0&1&0\\end{bmatrix}\\) has columns spanning \\(\\mathbb{R}^2\\), yet its third column has no pivot.",
    "why": {
      "prompt": "Which quantity does a pivot in every row control?",
      "choices": [
        "Existence: whether \\(A\\mathbf{x}=\\mathbf{b}\\) is solvable for every \\(\\mathbf{b}\\).",
        "Uniqueness: whether a solution is the only one.",
        "Whether \\(A\\) is square.",
        "Whether the columns of \\(A\\) are nonzero."
      ],
      "correct": 0
    }
  },
  {
    "id": "1.4-tfae-03",
    "section": "1.4",
    "topic": "Spanning sets",
    "concept": "pivot-in-every-row",
    "statement": "If \\(A\\mathbf{x}=\\mathbf{b}\\) is consistent for some particular \\(\\mathbf{b}\\) in \\(\\mathbb{R}^m\\), then the columns of \\(A\\) span \\(\\mathbb{R}^m\\).",
    "answer": false,
    "difficulty": 3,
    "variant": "hypothesis",
    "misconception": "One solvable case is enough to establish the theorem's for every \\(\\mathbf{b}\\) condition.",
    "explanation": "The theorem requires solvability for every \\(\\mathbf{b}\\) in \\(\\mathbb{R}^m\\). A single \\(\\mathbf{b}\\) that happens to lie in the span of the columns says nothing about the rest of \\(\\mathbb{R}^m\\).",
    "counterexample": "\\(A=\\begin{bmatrix}1&1\\\\0&0\\end{bmatrix}\\) with \\(\\mathbf{b}=\\begin{bmatrix}1\\\\0\\end{bmatrix}\\) is consistent, but the columns of \\(A\\) span only a line in \\(\\mathbb{R}^2\\).",
    "why": {
      "prompt": "What kind of error is this?",
      "choices": [
        "A quantifier error: the theorem needs solvability for every \\(\\mathbf{b}\\), not for some \\(\\mathbf{b}\\).",
        "A hypothesis error: \\(A\\) must also be square.",
        "An arithmetic error in computing \\(A\\mathbf{x}\\).",
        "A terminology error: consistent should read inconsistent."
      ],
      "correct": 0
    }
  },
  {
    "id": "1.4-tfae-04",
    "section": "1.4",
    "topic": "Spanning sets",
    "concept": "pivot-in-every-row",
    "statement": "If \\(A\\) is \\(3\\times5\\) and the columns of \\(A\\) span \\(\\mathbb{R}^3\\), then \\(A\\) has exactly three pivot positions.",
    "answer": true,
    "difficulty": 3,
    "variant": "hypothesis",
    "misconception": "A matrix with five columns should have five pivots.",
    "explanation": "Spanning \\(\\mathbb{R}^3\\) means a pivot in every row, and \\(A\\) has three rows. Since each pivot occupies its own row, there are exactly three. The remaining two columns are not pivot columns, so the system has free variables.",
    "why": {
      "prompt": "Why exactly three, rather than five?",
      "choices": [
        "Spanning needs a pivot in every row, and there are three rows, each holding at most one pivot.",
        "Because \\(A\\) has five columns, and every column is a pivot column.",
        "Because a matrix always has as many pivots as it has columns.",
        "Because \\(A\\) is not square, so its pivots cannot be counted."
      ],
      "correct": 0
    }
  },
  {
    "id": "1.4-tfae-05",
    "section": "1.4",
    "topic": "Spanning sets",
    "concept": "pivot-in-every-row",
    "statement": "The columns of a \\(4\\times3\\) matrix can span \\(\\mathbb{R}^4\\).",
    "answer": false,
    "difficulty": 2,
    "variant": "core",
    "misconception": "Three vectors could still reach every vector in \\(\\mathbb{R}^4\\).",
    "explanation": "Each pivot occupies its own column, so a matrix with three columns has at most three pivots. With four rows, some row has no pivot, and the columns therefore fail to span \\(\\mathbb{R}^4\\)."
  },
  {
    "id": "1.4-linear-01",
    "section": "1.4",
    "topic": "Properties of Ax",
    "concept": "matrix-vector-linearity",
    "statement": "If \\(A\\) is \\(m\\times n\\) and \\(\\mathbf{u},\\mathbf{v}\\) are in \\(\\mathbb{R}^n\\), then \\(A(\\mathbf{u}+\\mathbf{v})=A\\mathbf{u}+A\\mathbf{v}\\).",
    "answer": true,
    "difficulty": 1,
    "variant": "core",
    "misconception": "The product \\(A\\mathbf{x}\\) has no useful algebraic rules.",
    "explanation": "The matrix-vector product distributes over vector addition. This follows from the definition together with the algebraic properties of vectors in \\(\\mathbb{R}^n\\)."
  },
  {
    "id": "1.4-linear-02",
    "section": "1.4",
    "topic": "Properties of Ax",
    "concept": "matrix-vector-linearity",
    "statement": "The identity \\(A(\\mathbf{u}+\\mathbf{v})=A\\mathbf{u}+A\\mathbf{v}\\) requires \\(A\\) to be square.",
    "answer": false,
    "difficulty": 2,
    "variant": "hypothesis",
    "misconception": "Algebraic identities for \\(A\\mathbf{x}\\) carry a hidden squareness assumption.",
    "explanation": "The identity holds for every \\(m\\times n\\) matrix \\(A\\). The only requirement is that \\(\\mathbf{u}\\) and \\(\\mathbf{v}\\) lie in \\(\\mathbb{R}^n\\), so that both products are defined."
  },
  {
    "id": "1.4-linear-03",
    "section": "1.4",
    "topic": "Properties of Ax",
    "concept": "matrix-vector-linearity",
    "statement": "If \\(A\\) is \\(m\\times n\\) and \\(\\mathbf{u},\\mathbf{v}\\) are in \\(\\mathbb{R}^n\\), then \\(A(3\\mathbf{u}-2\\mathbf{v})=3A\\mathbf{u}-2A\\mathbf{v}\\).",
    "answer": true,
    "difficulty": 2,
    "variant": "core",
    "misconception": "The two properties of \\(A\\mathbf{x}\\) cannot be combined in one computation.",
    "explanation": "Distributing over the sum gives \\(A(3\\mathbf{u})+A(-2\\mathbf{v})\\), and pulling out the scalars gives \\(3A\\mathbf{u}-2A\\mathbf{v}\\). The two properties are normally used together like this."
  },
  {
    "id": "1.4-prod-05",
    "section": "1.4",
    "topic": "The product Ax",
    "concept": "matrix-vector-product",
    "statement": "If \\(A\\) is \\(3\\times5\\), then \\(A\\mathbf{x}\\) is defined for \\(\\mathbf{x}\\) in \\(\\mathbb{R}^3\\).",
    "answer": false,
    "difficulty": 1,
    "variant": "core",
    "misconception": "The number of entries of \\(\\mathbf{x}\\) should match the number of rows of \\(A\\).",
    "explanation": "The entries of \\(\\mathbf{x}\\) are the weights on the columns of \\(A\\), and \\(A\\) has five columns. So \\(A\\mathbf{x}\\) is defined for \\(\\mathbf{x}\\) in \\(\\mathbb{R}^5\\), and the result lies in \\(\\mathbb{R}^3\\)."
  },
  {
    "id": "1.4-prod-06",
    "section": "1.4",
    "topic": "The product Ax",
    "concept": "matrix-vector-product",
    "statement": "If \\(A\\) has \\(n\\) columns and \\(\\mathbf{e}_1\\) in \\(\\mathbb{R}^n\\) has first entry \\(1\\) and all other entries \\(0\\), then \\(A\\mathbf{e}_1\\) is the first column of \\(A\\).",
    "answer": true,
    "difficulty": 2,
    "variant": "core",
    "misconception": "Multiplying by a vector of mostly zeros produces the zero vector \\(\\mathbf{0}\\).",
    "explanation": "The weights are \\(1,0,\\dots,0\\), so the combination is \\(1\\mathbf{a}_1+0\\mathbf{a}_2+\\cdots+0\\mathbf{a}_n=\\mathbf{a}_1\\). Multiplying by \\(\\mathbf{e}_i\\) selects the \\(i\\)th column."
  },
  {
    "id": "1.4-mateq-03",
    "section": "1.4",
    "topic": "Matrix equations",
    "concept": "matrix-equation",
    "statement": "In the equation \\(A\\mathbf{x}=\\mathbf{b}\\), the vectors \\(\\mathbf{x}\\) and \\(\\mathbf{b}\\) always have the same number of entries.",
    "answer": false,
    "difficulty": 1,
    "variant": "core",
    "misconception": "Both sides of an equation must live in the same space, so \\(\\mathbf{x}\\) and \\(\\mathbf{b}\\) must match.",
    "explanation": "If \\(A\\) is \\(m\\times n\\), then \\(\\mathbf{x}\\) is in \\(\\mathbb{R}^n\\) while \\(\\mathbf{b}\\) is in \\(\\mathbb{R}^m\\). The two sides that must match are \\(A\\mathbf{x}\\) and \\(\\mathbf{b}\\), both of which lie in \\(\\mathbb{R}^m\\). The sizes agree only when \\(m=n\\)."
  },
  {
    "id": "1.4-solv-04",
    "section": "1.4",
    "topic": "Existence of solutions",
    "concept": "solvability-columns",
    "statement": "If \\(A\\mathbf{x}=\\mathbf{b}\\) has no solution, then \\(\\mathbf{b}\\) is a linear combination of the columns of \\(A\\).",
    "answer": false,
    "difficulty": 1,
    "variant": "core",
    "misconception": "Reversing a criterion without reversing its conclusion.",
    "explanation": "It is the other way around. Having no solution means precisely that no choice of weights produces \\(\\mathbf{b}\\), so \\(\\mathbf{b}\\) is not a linear combination of the columns."
  },
  {
    "id": "1.4-solv-05",
    "section": "1.4",
    "topic": "Existence of solutions",
    "concept": "solvability-columns",
    "statement": "If \\(A\\) is \\(m\\times n\\), then \\(A\\mathbf{x}=\\mathbf{0}\\), where \\(\\mathbf{0}\\) is the zero vector in \\(\\mathbb{R}^m\\), has at least one solution, namely \\(\\mathbf{x}=\\mathbf{0}\\) in \\(\\mathbb{R}^n\\).",
    "answer": true,
    "difficulty": 2,
    "variant": "core",
    "misconception": "Solvability of \\(A\\mathbf{x}=\\mathbf{b}\\) always depends on the particular \\(A\\).",
    "explanation": "Taking \\(\\mathbf{x}\\) to be the zero vector \\(\\mathbf{0}\\) in \\(\\mathbb{R}^n\\) gives a combination of the columns with all weights \\(0\\), which is the zero vector \\(\\mathbf{0}\\) in \\(\\mathbb{R}^m\\). So this equation is consistent no matter what \\(A\\) is."
  },
  {
    "id": "1.4-spansrm-05",
    "section": "1.4",
    "topic": "Spanning sets",
    "concept": "spans-rm",
    "statement": "Saying that a set of vectors spans \\(\\mathbb{R}^m\\) means that every vector in \\(\\mathbb{R}^m\\) is one of the vectors in the set.",
    "answer": false,
    "difficulty": 1,
    "variant": "core",
    "misconception": "Spanning means literally containing everything.",
    "explanation": "Spanning asks that every vector in \\(\\mathbb{R}^m\\) be reachable as a linear combination of the set, not that it already belong to the set. A finite set can span \\(\\mathbb{R}^m\\) even though \\(\\mathbb{R}^m\\) is infinite."
  },
  {
    "id": "1.4-tfae-06",
    "section": "1.4",
    "topic": "Spanning sets",
    "concept": "pivot-in-every-row",
    "statement": "If the columns of \\(A\\) span \\(\\mathbb{R}^m\\), then \\(A\\mathbf{x}=\\mathbf{b}\\) is consistent for every \\(\\mathbf{b}\\) in \\(\\mathbb{R}^m\\).",
    "answer": true,
    "difficulty": 2,
    "variant": "core",
    "misconception": "Spanning is about the columns only and says nothing about solving equations.",
    "explanation": "Spanning means every \\(\\mathbf{b}\\) in \\(\\mathbb{R}^m\\) is a linear combination of the columns, and such a combination is exactly a solution of \\(A\\mathbf{x}=\\mathbf{b}\\). These are two of the equivalent conditions in the theorem."
  },
  {
    "id": "1.5-homog-01",
    "section": "1.5",
    "topic": "Homogeneous systems",
    "concept": "homogeneous-system",
    "statement": "A system of linear equations is homogeneous when it can be written in the form \\(A\\mathbf{x}=\\mathbf{0}\\).",
    "answer": true,
    "difficulty": 1,
    "variant": "core",
    "misconception": "Homogeneous refers to the coefficients rather than the right-hand side.",
    "explanation": "Homogeneous means every constant on the right-hand side is \\(0\\). Nothing is assumed about \\(A\\)."
  },
  {
    "id": "1.5-homog-02",
    "section": "1.5",
    "topic": "Homogeneous systems",
    "concept": "homogeneous-system",
    "statement": "A homogeneous system may be inconsistent.",
    "answer": false,
    "difficulty": 1,
    "variant": "core",
    "misconception": "Consistency has to be checked separately for homogeneous systems too.",
    "explanation": "Taking \\(\\mathbf{x}=\\mathbf{0}\\) gives \\(A\\mathbf{0}=\\mathbf{0}\\), so the zero vector \\(\\mathbf{0}\\) is always a solution. A homogeneous system is therefore consistent no matter what \\(A\\) is."
  },
  {
    "id": "1.5-homog-03",
    "section": "1.5",
    "topic": "Homogeneous systems",
    "concept": "homogeneous-system",
    "statement": "The equation \\(A\\mathbf{x}=\\mathbf{b}\\) with \\(\\mathbf{b}=\\begin{bmatrix}0\\\\0\\\\1\\end{bmatrix}\\) is homogeneous, because most of the entries of \\(\\mathbf{b}\\) are \\(0\\).",
    "answer": false,
    "difficulty": 1,
    "variant": "core",
    "misconception": "Mostly zero is close enough to homogeneous.",
    "explanation": "Homogeneous requires \\(\\mathbf{b}\\) to be the zero vector \\(\\mathbf{0}\\). A single nonzero entry is enough to make the system nonhomogeneous."
  },
  {
    "id": "1.5-homog-04",
    "section": "1.5",
    "topic": "Homogeneous systems",
    "concept": "homogeneous-system",
    "statement": "For a homogeneous system, the rightmost column of the augmented matrix is never a pivot column.",
    "answer": true,
    "difficulty": 2,
    "variant": "core",
    "misconception": "The augmented column of a homogeneous system behaves like any other.",
    "explanation": "That column starts out as all zeros, and every row operation leaves it all zeros. A pivot position needs a leading nonzero entry, so it can never appear there.",
    "why": {
      "prompt": "What does that tell you immediately?",
      "choices": [
        "The system is consistent, by the test from section 1.2.",
        "The system has a unique solution.",
        "The system has at least one free variable.",
        "The columns of \\(A\\) span \\(\\mathbb{R}^m\\)."
      ],
      "correct": 0
    }
  },
  {
    "id": "1.5-trivial-01",
    "section": "1.5",
    "topic": "Homogeneous systems",
    "concept": "trivial-solution",
    "statement": "The zero vector \\(\\mathbf{0}\\) is a solution of every homogeneous equation \\(A\\mathbf{x}=\\mathbf{0}\\).",
    "answer": true,
    "difficulty": 1,
    "variant": "core",
    "misconception": "Whether the zero vector \\(\\mathbf{0}\\) solves the equation depends on \\(A\\).",
    "explanation": "\\(A\\mathbf{0}\\) is the combination of the columns of \\(A\\) with all weights \\(0\\), which is the zero vector \\(\\mathbf{0}\\). This holds for every \\(A\\)."
  },
  {
    "id": "1.5-trivial-02",
    "section": "1.5",
    "topic": "Homogeneous systems",
    "concept": "trivial-solution",
    "statement": "A nontrivial solution of \\(A\\mathbf{x}=\\mathbf{0}\\) is a solution in which every entry is nonzero.",
    "answer": false,
    "difficulty": 1,
    "variant": "core",
    "misconception": "Nontrivial is read as no entry is trivial.",
    "explanation": "A nontrivial solution is any solution other than the zero vector \\(\\mathbf{0}\\). It needs at least one nonzero entry, and the remaining entries are free to be \\(0\\).",
    "counterexample": "For \\(A=\\begin{bmatrix}0&0&0\\end{bmatrix}\\), the vector \\(\\begin{bmatrix}1\\\\0\\\\0\\end{bmatrix}\\) solves \\(A\\mathbf{x}=\\mathbf{0}\\) and is nontrivial even though two of its entries are \\(0\\)."
  },
  {
    "id": "1.5-trivial-03",
    "section": "1.5",
    "topic": "Homogeneous systems",
    "concept": "trivial-solution",
    "statement": "If \\(A\\mathbf{x}=\\mathbf{0}\\) has a nontrivial solution, then it no longer has the trivial solution.",
    "answer": false,
    "difficulty": 2,
    "variant": "core",
    "misconception": "Trivial and nontrivial solutions are alternatives that exclude one another.",
    "explanation": "The zero vector \\(\\mathbf{0}\\) solves \\(A\\mathbf{x}=\\mathbf{0}\\) always. Having a nontrivial solution means there is at least one more solution besides that one, not that the trivial solution has gone away."
  },
  {
    "id": "1.5-trivial-04",
    "section": "1.5",
    "topic": "Homogeneous systems",
    "concept": "trivial-solution",
    "statement": "The trivial solution of \\(A\\mathbf{x}=\\mathbf{0}\\) is the solution \\(\\mathbf{x}=\\mathbf{0}\\).",
    "answer": true,
    "difficulty": 1,
    "variant": "core",
    "misconception": "Trivial describes a system that is easy rather than a specific solution.",
    "explanation": "The word names one particular solution, the zero vector \\(\\mathbf{0}\\). It is called trivial because it requires no work to find."
  },
  {
    "id": "1.5-nontriv-01",
    "section": "1.5",
    "topic": "Homogeneous systems",
    "concept": "nontrivial-solution",
    "statement": "\\(A\\mathbf{x}=\\mathbf{0}\\) has a nontrivial solution if and only if the equation has at least one free variable.",
    "answer": true,
    "difficulty": 2,
    "variant": "core",
    "misconception": "Nontrivial solutions depend on the size of \\(A\\) rather than on free variables.",
    "explanation": "A free variable can be set to any nonzero value, producing a solution other than the zero vector \\(\\mathbf{0}\\). With no free variables, every variable is basic and determined, so \\(\\mathbf{0}\\) is the only solution.",
    "why": {
      "prompt": "Why does one free variable already guarantee a nontrivial solution?",
      "choices": [
        "Setting that free variable to \\(1\\) produces a solution that is not the zero vector \\(\\mathbf{0}\\).",
        "Free variables must be nonzero.",
        "A free variable makes the system inconsistent.",
        "Free variables force the augmented column to be a pivot column."
      ],
      "correct": 0
    }
  },
  {
    "id": "1.5-nontriv-02",
    "section": "1.5",
    "topic": "Homogeneous systems",
    "concept": "nontrivial-solution",
    "statement": "If \\(A\\mathbf{x}=\\mathbf{0}\\) has only the trivial solution, then \\(A\\) has at least one free variable.",
    "answer": false,
    "difficulty": 2,
    "variant": "core",
    "misconception": "Reversing the free-variable criterion without reversing its conclusion.",
    "explanation": "It is the opposite. Only the trivial solution means there are no free variables at all, so every column of \\(A\\) is a pivot column."
  },
  {
    "id": "1.5-nontriv-03",
    "section": "1.5",
    "topic": "Homogeneous systems",
    "concept": "nontrivial-solution",
    "statement": "If \\(A\\) is a \\(3\\times5\\) matrix, then \\(A\\mathbf{x}=\\mathbf{0}\\) must have a nontrivial solution.",
    "answer": true,
    "difficulty": 3,
    "variant": "core",
    "misconception": "Whether nontrivial solutions exist cannot be settled from the size of \\(A\\) alone.",
    "explanation": "Each pivot occupies its own row, so \\(A\\) has at most three pivots among its five columns. At least two columns are not pivot columns, giving free variables and hence nontrivial solutions.",
    "why": {
      "prompt": "Which comparison does the work?",
      "choices": [
        "More columns than rows forces a column without a pivot.",
        "More columns than rows forces a row without a pivot.",
        "The matrix is not square, so it has no pivots.",
        "Three rows means exactly three free variables."
      ],
      "correct": 0
    }
  },
  {
    "id": "1.5-nontriv-04",
    "section": "1.5",
    "topic": "Homogeneous systems",
    "concept": "nontrivial-solution",
    "statement": "If \\(A\\) has more rows than columns, then \\(A\\mathbf{x}=\\mathbf{0}\\) has a nontrivial solution.",
    "answer": false,
    "difficulty": 2,
    "variant": "hypothesis",
    "misconception": "Any mismatch between the number of rows and columns produces free variables.",
    "explanation": "The useful comparison is more columns than rows, which forces a column without a pivot. More rows than columns leaves room for every column to be a pivot column.",
    "counterexample": "\\(A=\\begin{bmatrix}1&0\\\\0&1\\\\0&0\\end{bmatrix}\\) has three rows and two columns, and \\(A\\mathbf{x}=\\mathbf{0}\\) has only the trivial solution."
  },
  {
    "id": "1.5-nontriv-05",
    "section": "1.5",
    "topic": "Homogeneous systems",
    "concept": "nontrivial-solution",
    "statement": "If some column of \\(A\\) is not a pivot column, then \\(A\\mathbf{x}=\\mathbf{0}\\) has a nontrivial solution.",
    "answer": true,
    "difficulty": 2,
    "variant": "core",
    "misconception": "Nonpivot columns say nothing about the homogeneous equation.",
    "explanation": "A column that is not a pivot column corresponds to a free variable, and one free variable is enough to produce a solution other than the zero vector \\(\\mathbf{0}\\)."
  },
  {
    "id": "1.5-span-01",
    "section": "1.5",
    "topic": "Parametric vector form",
    "concept": "homogeneous-span",
    "statement": "The solution set of a homogeneous equation \\(A\\mathbf{x}=\\mathbf{0}\\) can always be written as the span of some list of vectors.",
    "answer": true,
    "difficulty": 2,
    "variant": "core",
    "misconception": "Only some homogeneous systems have solution sets describable as a span.",
    "explanation": "Row reduce, solve for the basic variables, and collect one vector for each free variable. The solution set is exactly the span of those vectors. If there are no free variables, the solution set is \\(\\{\\mathbf{0}\\}\\), which can be written as \\(\\operatorname{Span}\\{\\mathbf{0}\\}\\).",
    "why": {
      "prompt": "Where do the spanning vectors come from?",
      "choices": [
        "One vector for each free variable; if there are none, use \\(\\operatorname{Span}\\{\\mathbf{0}\\}\\).",
        "One vector for each pivot column of \\(A\\).",
        "The columns of \\(A\\) themselves.",
        "The rows of the reduced echelon form."
      ],
      "correct": 0
    }
  },
  {
    "id": "1.5-span-02",
    "section": "1.5",
    "topic": "Parametric vector form",
    "concept": "homogeneous-span",
    "statement": "If \\(A\\mathbf{x}=\\mathbf{0}\\) has only the trivial solution, its solution set can still be described as a span.",
    "answer": true,
    "difficulty": 3,
    "variant": "hypothesis",
    "misconception": "Describing a solution set as a span requires at least one free variable.",
    "explanation": "The solution set is \\(\\{\\mathbf{0}\\}\\), which is \\(\\operatorname{Span}\\{\\mathbf{0}\\}\\). So the description as a span covers this case too, with no exception needed.",
    "why": {
      "prompt": "Why is the claim worth stating separately?",
      "choices": [
        "It shows the span description needs no special case when there are no free variables.",
        "It shows that \\(\\{\\mathbf{0}\\}\\) is a line through the origin.",
        "It shows every homogeneous system has a free variable.",
        "It shows the trivial solution can be omitted from the solution set."
      ],
      "correct": 0
    }
  },
  {
    "id": "1.5-span-03",
    "section": "1.5",
    "topic": "Parametric vector form",
    "concept": "homogeneous-span",
    "statement": "The number of vectors needed to span the solution set of \\(A\\mathbf{x}=\\mathbf{0}\\) equals the number of pivot columns of \\(A\\).",
    "answer": false,
    "difficulty": 2,
    "variant": "core",
    "misconception": "Pivot columns count the vectors in the parametric description.",
    "explanation": "There is one spanning vector for each free variable, that is, for each column that is not a pivot column. Pivot columns correspond to the basic variables, which are determined rather than free."
  },
  {
    "id": "1.5-span-04",
    "section": "1.5",
    "topic": "Parametric vector form",
    "concept": "homogeneous-span",
    "statement": "If \\(A\\mathbf{x}=\\mathbf{0}\\) has a nontrivial solution, then it has infinitely many solutions.",
    "answer": true,
    "difficulty": 2,
    "variant": "core",
    "misconception": "A homogeneous system might have exactly two solutions: the trivial one and one other.",
    "explanation": "If \\(\\mathbf{v}\\ne\\mathbf{0}\\) solves \\(A\\mathbf{x}=\\mathbf{0}\\), then \\(A(c\\mathbf{v})=c(A\\mathbf{v})=\\mathbf{0}\\) for every scalar \\(c\\), and distinct scalars give distinct vectors. So the solutions form a whole line at least."
  },
  {
    "id": "1.5-span-05",
    "section": "1.5",
    "topic": "Parametric vector form",
    "concept": "homogeneous-span",
    "statement": "The solution set of \\(A\\mathbf{x}=\\mathbf{0}\\) is the span of the pivot columns of \\(A\\).",
    "answer": false,
    "difficulty": 2,
    "variant": "core",
    "misconception": "Any span attached to \\(A\\) must be the span of some of its columns.",
    "explanation": "The columns of \\(A\\) live in \\(\\mathbb{R}^m\\), while solutions of \\(A\\mathbf{x}=\\mathbf{0}\\) live in \\(\\mathbb{R}^n\\). The spanning vectors for the solution set are produced from the free variables, and are generally not columns of \\(A\\) at all."
  },
  {
    "id": "1.5-pvf-01",
    "section": "1.5",
    "topic": "Parametric vector form",
    "concept": "parametric-vector-form",
    "statement": "Writing the solution set of \\(A\\mathbf{x}=\\mathbf{0}\\) as \\(\\mathbf{x}=t_1\\mathbf{u}_1+\\cdots+t_k\\mathbf{u}_k\\), with the free variables serving as the parameters \\(t_1,\\dots,t_k\\), is a parametric vector form of that solution set.",
    "answer": true,
    "difficulty": 1,
    "variant": "core",
    "misconception": "Parametric vector form is a different object from the parametric description of section 1.2.",
    "explanation": "It is the same parametric description, collected into vector notation. Each free variable becomes a parameter multiplying one fixed vector."
  },
  {
    "id": "1.5-pvf-02",
    "section": "1.5",
    "topic": "Parametric vector form",
    "concept": "parametric-vector-form",
    "statement": "Parametric vector form requires each free variable to be assigned a specific numerical value.",
    "answer": false,
    "difficulty": 1,
    "variant": "core",
    "misconception": "Parameters must eventually be pinned down to numbers.",
    "explanation": "The parameters stay as parameters. Letting them range over all real numbers is what makes the expression describe the entire solution set rather than one solution."
  },
  {
    "id": "1.5-pvf-04",
    "section": "1.5",
    "topic": "Parametric vector form",
    "concept": "parametric-vector-form",
    "statement": "In a parametric vector form of the solution set of \\(A\\mathbf{x}=\\mathbf{0}\\), the number of vectors equals the number of variables in the system.",
    "answer": false,
    "difficulty": 2,
    "variant": "core",
    "misconception": "Every variable contributes its own vector.",
    "explanation": "Only the free variables become parameters, so the count is the number of free variables. The basic variables are expressed in terms of those parameters rather than contributing vectors of their own."
  },
  {
    "id": "1.5-particular-01",
    "section": "1.5",
    "topic": "Solutions of Ax = b",
    "concept": "particular-solution",
    "statement": "If \\(A\\mathbf{x}=\\mathbf{b}\\) is consistent and \\(\\mathbf{p}\\) is one of its solutions, then the solutions of \\(A\\mathbf{x}=\\mathbf{b}\\) are exactly the vectors \\(\\mathbf{p}+\\mathbf{v}_h\\) where \\(\\mathbf{v}_h\\) ranges over the solutions of \\(A\\mathbf{x}=\\mathbf{0}\\).",
    "answer": true,
    "difficulty": 2,
    "variant": "core",
    "misconception": "The homogeneous equation has nothing to do with the nonhomogeneous one.",
    "explanation": "If \\(A\\mathbf{v}_h=\\mathbf{0}\\) then \\(A(\\mathbf{p}+\\mathbf{v}_h)=\\mathbf{b}+\\mathbf{0}=\\mathbf{b}\\), so every such vector is a solution. Conversely if \\(A\\mathbf{w}=\\mathbf{b}\\) then \\(A(\\mathbf{w}-\\mathbf{p})=\\mathbf{0}\\), so \\(\\mathbf{w}=\\mathbf{p}+(\\mathbf{w}-\\mathbf{p})\\) has the required form.",
    "why": {
      "prompt": "Which computation gives the converse direction?",
      "choices": [
        "\\(A(\\mathbf{w}-\\mathbf{p})=A\\mathbf{w}-A\\mathbf{p}=\\mathbf{b}-\\mathbf{b}=\\mathbf{0}\\), so \\(\\mathbf{w}-\\mathbf{p}\\) solves the homogeneous equation.",
        "\\(A(\\mathbf{w}+\\mathbf{p})=2\\mathbf{b}\\), so \\(\\mathbf{w}+\\mathbf{p}\\) solves the homogeneous equation.",
        "\\(A\\mathbf{w}=A\\mathbf{p}\\) forces \\(\\mathbf{w}=\\mathbf{p}\\).",
        "Every solution of \\(A\\mathbf{x}=\\mathbf{b}\\) is a scalar multiple of \\(\\mathbf{p}\\)."
      ],
      "correct": 0
    }
  },
  {
    "id": "1.5-particular-02",
    "section": "1.5",
    "topic": "Solutions of Ax = b",
    "concept": "particular-solution",
    "statement": "The description of the solution set of \\(A\\mathbf{x}=\\mathbf{b}\\) as all vectors \\(\\mathbf{p}+\\mathbf{v}_h\\) is valid whether or not \\(A\\mathbf{x}=\\mathbf{b}\\) is consistent.",
    "answer": false,
    "difficulty": 2,
    "variant": "hypothesis",
    "misconception": "The consistency hypothesis in the theorem is a formality.",
    "explanation": "The description starts from a particular solution \\(\\mathbf{p}\\). If the equation is inconsistent there is no such \\(\\mathbf{p}\\), and the solution set is empty rather than a translate of anything.",
    "why": {
      "prompt": "What goes wrong when \\(A\\mathbf{x}=\\mathbf{b}\\) is inconsistent?",
      "choices": [
        "There is no particular solution \\(\\mathbf{p}\\) to translate by, and the solution set is empty.",
        "The homogeneous equation \\(A\\mathbf{x}=\\mathbf{0}\\) also becomes inconsistent.",
        "The solution set becomes all of \\(\\mathbb{R}^n\\).",
        "The vector \\(\\mathbf{p}\\) must then be taken to be \\(\\mathbf{0}\\)."
      ],
      "correct": 0
    }
  },
  {
    "id": "1.5-particular-03",
    "section": "1.5",
    "topic": "Solutions of Ax = b",
    "concept": "particular-solution",
    "statement": "In the description \\(\\mathbf{w}=\\mathbf{p}+\\mathbf{v}_h\\), the vector \\(\\mathbf{p}\\) must be the particular solution produced by row reduction; a different solution would describe a different set.",
    "answer": false,
    "difficulty": 3,
    "variant": "core",
    "misconception": "The translation vector is canonical rather than an arbitrary choice.",
    "explanation": "Any solution may be used as \\(\\mathbf{p}\\). If \\(\\mathbf{p}\\) and \\(\\mathbf{p}'\\) both solve \\(A\\mathbf{x}=\\mathbf{b}\\), then \\(\\mathbf{p}-\\mathbf{p}'\\) solves \\(A\\mathbf{x}=\\mathbf{0}\\), and translating by either one sweeps out the same set.",
    "why": {
      "prompt": "Why does any particular solution serve equally well?",
      "choices": [
        "Two particular solutions differ by a solution of \\(A\\mathbf{x}=\\mathbf{0}\\), so the two translates cover the same set.",
        "Because row reduction always produces the same particular solution.",
        "Because the solution set of \\(A\\mathbf{x}=\\mathbf{b}\\) is a span.",
        "Because a consistent equation has only one solution."
      ],
      "correct": 0
    }
  },
  {
    "id": "1.5-particular-04",
    "section": "1.5",
    "topic": "Solutions of Ax = b",
    "concept": "particular-solution",
    "statement": "If \\(A\\mathbf{x}=\\mathbf{b}\\) is consistent and \\(A\\mathbf{x}=\\mathbf{0}\\) has only the trivial solution, then \\(A\\mathbf{x}=\\mathbf{b}\\) has exactly one solution.",
    "answer": true,
    "difficulty": 2,
    "variant": "hypothesis",
    "misconception": "Information about the homogeneous equation cannot settle uniqueness for the nonhomogeneous one.",
    "explanation": "The solutions are the vectors \\(\\mathbf{p}+\\mathbf{v}_h\\). If the only \\(\\mathbf{v}_h\\) is the zero vector \\(\\mathbf{0}\\), then \\(\\mathbf{p}\\) is the only solution. Consistency supplies the existence half."
  },
  {
    "id": "1.5-particular-05",
    "section": "1.5",
    "topic": "Solutions of Ax = b",
    "concept": "particular-solution",
    "statement": "If \\(\\mathbf{p}\\) and \\(\\mathbf{q}\\) are both solutions of \\(A\\mathbf{x}=\\mathbf{b}\\), then \\(\\mathbf{p}-\\mathbf{q}\\) is a solution of \\(A\\mathbf{x}=\\mathbf{0}\\).",
    "answer": true,
    "difficulty": 2,
    "variant": "core",
    "misconception": "Combining two solutions of \\(A\\mathbf{x}=\\mathbf{b}\\) gives another solution of \\(A\\mathbf{x}=\\mathbf{b}\\).",
    "explanation": "\\(A(\\mathbf{p}-\\mathbf{q})=A\\mathbf{p}-A\\mathbf{q}=\\mathbf{b}-\\mathbf{b}=\\mathbf{0}\\). Note that \\(\\mathbf{p}+\\mathbf{q}\\) is generally not a solution of \\(A\\mathbf{x}=\\mathbf{b}\\), since \\(A(\\mathbf{p}+\\mathbf{q})=2\\mathbf{b}\\)."
  },
  {
    "id": "1.5-geom-01",
    "section": "1.5",
    "topic": "Solutions of Ax = b",
    "concept": "solution-set-geometry",
    "statement": "The solution set of a consistent equation \\(A\\mathbf{x}=\\mathbf{b}\\) can be pictured as the solution set of \\(A\\mathbf{x}=\\mathbf{0}\\) shifted by a particular solution \\(\\mathbf{p}\\).",
    "answer": true,
    "difficulty": 2,
    "variant": "core",
    "misconception": "The two solution sets have unrelated shapes.",
    "explanation": "Adding the fixed vector \\(\\mathbf{p}\\) to every element of the homogeneous solution set translates it without changing its shape. A line through the origin becomes a parallel line, a plane through the origin a parallel plane."
  },
  {
    "id": "1.5-geom-02",
    "section": "1.5",
    "topic": "Solutions of Ax = b",
    "concept": "solution-set-geometry",
    "statement": "If \\(\\mathbf{b}\\ne\\mathbf{0}\\) and \\(A\\mathbf{x}=\\mathbf{b}\\) is consistent, then its solution set is a span.",
    "answer": false,
    "difficulty": 3,
    "variant": "core",
    "misconception": "Any solution set that looks like a line or a plane is a span.",
    "explanation": "Every span contains the zero vector \\(\\mathbf{0}\\). Here \\(A\\mathbf{0}=\\mathbf{0}\\ne \\mathbf{b}\\), so \\(\\mathbf{0}\\) is not a solution and the solution set cannot be a span. It is a translate of one.",
    "why": {
      "prompt": "What rules it out?",
      "choices": [
        "A span always contains the zero vector \\(\\mathbf{0}\\), and this solution set does not.",
        "Spans are always infinite, and this set may be finite.",
        "A span must be a line, and this set is a plane.",
        "Spans exist only for homogeneous equations by definition."
      ],
      "correct": 0
    }
  },
  {
    "id": "1.5-geom-03",
    "section": "1.5",
    "topic": "Solutions of Ax = b",
    "concept": "solution-set-geometry",
    "statement": "The solution set of \\(A\\mathbf{x}=\\mathbf{b}\\) always passes through the origin.",
    "answer": false,
    "difficulty": 1,
    "variant": "core",
    "misconception": "Solution sets of linear equations are always lines or planes through the origin.",
    "explanation": "The zero vector \\(\\mathbf{0}\\) solves \\(A\\mathbf{x}=\\mathbf{b}\\) only when \\(\\mathbf{b}=\\mathbf{0}\\). For a nonzero \\(\\mathbf{b}\\), the solution set misses the origin entirely, and it may also be empty."
  },
  {
    "id": "1.5-geom-04",
    "section": "1.5",
    "topic": "Solutions of Ax = b",
    "concept": "solution-set-geometry",
    "statement": "The solution set of a homogeneous equation \\(A\\mathbf{x}=\\mathbf{0}\\) always contains the origin.",
    "answer": true,
    "difficulty": 1,
    "variant": "core",
    "misconception": "Whether the origin belongs depends on the particular matrix.",
    "explanation": "The zero vector \\(\\mathbf{0}\\) is always the trivial solution, so the origin lies in the solution set of every homogeneous equation."
  },
  {
    "id": "1.5-geom-05",
    "section": "1.5",
    "topic": "Solutions of Ax = b",
    "concept": "solution-set-geometry",
    "statement": "If the solution set of \\(A\\mathbf{x}=\\mathbf{b}\\) is a line that does not pass through the origin, then \\(A\\mathbf{x}=\\mathbf{0}\\) has only the trivial solution.",
    "answer": false,
    "difficulty": 3,
    "variant": "core",
    "misconception": "A solution set that misses the origin means the homogeneous equation is as small as possible.",
    "explanation": "The solution set of \\(A\\mathbf{x}=\\mathbf{b}\\) is a translate of the solution set of \\(A\\mathbf{x}=\\mathbf{0}\\), so the two have the same shape. A line of solutions for \\(A\\mathbf{x}=\\mathbf{b}\\) means \\(A\\mathbf{x}=\\mathbf{0}\\) is also a line, namely the parallel one through the origin, which contains nontrivial solutions.",
    "why": {
      "prompt": "What does the shape of the solution set of \\(A\\mathbf{x}=\\mathbf{b}\\) tell you?",
      "choices": [
        "It is a translate of the solution set of \\(A\\mathbf{x}=\\mathbf{0}\\), so that set is a line through the origin.",
        "Nothing at all, since the two equations are unrelated.",
        "That \\(A\\mathbf{x}=\\mathbf{0}\\) is inconsistent.",
        "That \\(A\\mathbf{x}=\\mathbf{b}\\) has exactly one solution."
      ],
      "correct": 0
    }
  },
  {
    "id": "1.7-indep-01",
    "section": "1.7",
    "topic": "Linear independence",
    "concept": "linear-independence",
    "statement": "The vectors \\(\\mathbf{v}_1,\\dots,\\mathbf{v}_p\\) are linearly independent when \\(x_1\\mathbf{v}_1+\\cdots+x_p\\mathbf{v}_p=\\mathbf{0}\\) has only the trivial solution.",
    "answer": true,
    "difficulty": 1,
    "variant": "core",
    "misconception": "Independence is about the vectors looking unrelated rather than about an equation.",
    "explanation": "This is the definition. Independence is a statement about the homogeneous vector equation built from the list."
  },
  {
    "id": "1.7-indep-02",
    "section": "1.7",
    "topic": "Linear independence",
    "concept": "linear-independence",
    "statement": "The vectors \\(\\mathbf{v}_1,\\dots,\\mathbf{v}_p\\) are linearly independent when \\(x_1\\mathbf{v}_1+\\cdots+x_p\\mathbf{v}_p=\\mathbf{0}\\) has no solution.",
    "answer": false,
    "difficulty": 1,
    "variant": "core",
    "misconception": "Independence means the equation cannot be satisfied at all.",
    "explanation": "That equation is always satisfied by the trivial solution, so it is never unsolvable. Independence says the trivial solution is the only one."
  },
  {
    "id": "1.7-indep-03",
    "section": "1.7",
    "topic": "Linear independence",
    "concept": "linear-independence",
    "statement": "If \\(\\mathbf{v}_1,\\dots,\\mathbf{v}_p\\) are linearly independent, then none of them is the zero vector \\(\\mathbf{0}\\).",
    "answer": true,
    "difficulty": 2,
    "variant": "core",
    "misconception": "The zero vector \\(\\mathbf{0}\\) is harmless inside an independent list.",
    "explanation": "If some \\(\\mathbf{v}_i\\) were the zero vector \\(\\mathbf{0}\\), then putting weight \\(1\\) on it and \\(0\\) everywhere else gives a nontrivial solution, contradicting independence."
  },
  {
    "id": "1.7-indep-04",
    "section": "1.7",
    "topic": "Linear independence",
    "concept": "linear-independence",
    "statement": "If \\(\\mathbf{v}_1,\\dots,\\mathbf{v}_p\\) are linearly independent, then no linear combination of them equals the zero vector \\(\\mathbf{0}\\).",
    "answer": false,
    "difficulty": 2,
    "variant": "core",
    "misconception": "Independence forbids the zero vector \\(\\mathbf{0}\\) from arising at all.",
    "explanation": "The combination with all weights \\(0\\) always gives the zero vector \\(\\mathbf{0}\\), for any vectors whatsoever. Independence says that is the only combination that does."
  },
  {
    "id": "1.7-indep-05",
    "section": "1.7",
    "topic": "Linear independence",
    "concept": "linear-independence",
    "statement": "If no two of the vectors \\(\\mathbf{v}_1,\\dots,\\mathbf{v}_p\\) are equal to each other, then the list is linearly independent.",
    "answer": false,
    "difficulty": 1,
    "variant": "core",
    "misconception": "Independence is the same as the vectors being distinct.",
    "explanation": "Distinctness is necessary for independence but nowhere near sufficient. Three distinct vectors can easily be dependent. The implication holds only in the other direction: an independent list cannot repeat a vector.",
    "counterexample": "\\(\\begin{bmatrix}1\\\\0\\end{bmatrix},\\begin{bmatrix}0\\\\1\\end{bmatrix},\\begin{bmatrix}1\\\\1\\end{bmatrix}\\) are pairwise different but dependent, since the third is the sum of the first two."
  },
  {
    "id": "1.7-dep-01",
    "section": "1.7",
    "topic": "Linear independence",
    "concept": "linear-dependence",
    "statement": "The vectors \\(\\mathbf{v}_1,\\dots,\\mathbf{v}_p\\) are linearly dependent when there exist weights \\(c_1,\\dots,c_p\\), not all zero, with \\(c_1\\mathbf{v}_1+\\cdots+c_p\\mathbf{v}_p=\\mathbf{0}\\).",
    "answer": true,
    "difficulty": 1,
    "variant": "core",
    "misconception": "Dependence means one vector is built from the others in some visible way.",
    "explanation": "This is the definition. The phrase not all zero is what makes the condition meaningful."
  },
  {
    "id": "1.7-dep-02",
    "section": "1.7",
    "topic": "Linear independence",
    "concept": "linear-dependence",
    "statement": "The vectors \\(\\mathbf{v}_1,\\dots,\\mathbf{v}_p\\) are linearly dependent when \\(c_1\\mathbf{v}_1+\\cdots+c_p\\mathbf{v}_p=\\mathbf{0}\\) holds for some scalars \\(c_1,\\dots,c_p\\).",
    "answer": false,
    "difficulty": 2,
    "variant": "hypothesis",
    "misconception": "The words not all zero can be dropped from the definition.",
    "explanation": "Without that requirement the condition is satisfied by every list of vectors, using all weights \\(0\\). The definition would then call everything dependent and say nothing.",
    "why": {
      "prompt": "What does the omitted phrase rule out?",
      "choices": [
        "The all-zero choice of weights, which works for any vectors at all.",
        "Negative weights, which are not permitted in a dependence relation.",
        "Lists containing the zero vector \\(\\mathbf{0}\\).",
        "Lists with more than \\(n\\) vectors in \\(\\mathbb{R}^n\\)."
      ],
      "correct": 0
    }
  },
  {
    "id": "1.7-dep-03",
    "section": "1.7",
    "topic": "Linear independence",
    "concept": "linear-dependence",
    "statement": "If \\(\\mathbf{v}_1,\\dots,\\mathbf{v}_p\\) are linearly dependent, then in some dependence relation among them all of the weights are nonzero.",
    "answer": false,
    "difficulty": 2,
    "variant": "core",
    "misconception": "Not all zero is read as none of them zero.",
    "explanation": "Dependence requires only that at least one weight is nonzero. Some of the weights may well be forced to be \\(0\\).",
    "counterexample": "For \\(\\mathbf{v}_1=\\begin{bmatrix}1\\\\0\\end{bmatrix},\\mathbf{v}_2=\\begin{bmatrix}2\\\\0\\end{bmatrix},\\mathbf{v}_3=\\begin{bmatrix}0\\\\1\\end{bmatrix}\\), every dependence relation has weight \\(0\\) on \\(\\mathbf{v}_3\\)."
  },
  {
    "id": "1.7-dep-04",
    "section": "1.7",
    "topic": "Linear independence",
    "concept": "linear-dependence",
    "statement": "If two of the vectors in a list are equal, then the list is linearly dependent.",
    "answer": true,
    "difficulty": 1,
    "variant": "core",
    "misconception": "A repeated vector is merely redundant rather than a source of dependence.",
    "explanation": "If \\(\\mathbf{v}_i=\\mathbf{v}_j\\) with \\(i\\ne j\\), then weight \\(1\\) on \\(\\mathbf{v}_i\\), weight \\(-1\\) on \\(\\mathbf{v}_j\\), and \\(0\\) elsewhere gives a dependence relation."
  },
  {
    "id": "1.7-dep-05",
    "section": "1.7",
    "topic": "Linear independence",
    "concept": "linear-dependence",
    "statement": "If \\(\\mathbf{v}_1,\\mathbf{v}_2,\\mathbf{v}_3\\) are linearly dependent, then \\(\\mathbf{v}_1\\) must be a linear combination of \\(\\mathbf{v}_2\\) and \\(\\mathbf{v}_3\\).",
    "answer": false,
    "difficulty": 2,
    "variant": "core",
    "misconception": "The vector that can be eliminated is always the first one.",
    "explanation": "Dependence guarantees that at least one vector is a combination of the others, but not which one. Any vector whose weight is forced to be \\(0\\) in every dependence relation cannot be the one.",
    "counterexample": "With \\(\\mathbf{v}_1=\\begin{bmatrix}1\\\\0\\end{bmatrix},\\mathbf{v}_2=\\begin{bmatrix}0\\\\1\\end{bmatrix},\\mathbf{v}_3=\\begin{bmatrix}0\\\\2\\end{bmatrix}\\) the list is dependent, but \\(\\mathbf{v}_1\\) is not a combination of \\(\\mathbf{v}_2,\\mathbf{v}_3\\), which span only the vertical axis."
  },
  {
    "id": "1.7-relation-01",
    "section": "1.7",
    "topic": "Dependence relations",
    "concept": "dependence-relation",
    "statement": "An equation \\(c_1\\mathbf{v}_1+\\cdots+c_p\\mathbf{v}_p=\\mathbf{0}\\) in which the weights are not all zero is called a linear dependence relation among \\(\\mathbf{v}_1,\\dots,\\mathbf{v}_p\\).",
    "answer": true,
    "difficulty": 1,
    "variant": "core",
    "misconception": "A dependence relation is any equation involving the vectors.",
    "explanation": "This is the terminology. Exhibiting one such relation is exactly how you certify that a list is linearly dependent."
  },
  {
    "id": "1.7-relation-02",
    "section": "1.7",
    "topic": "Dependence relations",
    "concept": "dependence-relation",
    "statement": "The equation \\(0\\mathbf{v}_1+0\\mathbf{v}_2+0\\mathbf{v}_3=\\mathbf{0}\\) is a linear dependence relation among \\(\\mathbf{v}_1,\\mathbf{v}_2,\\mathbf{v}_3\\).",
    "answer": false,
    "difficulty": 2,
    "variant": "core",
    "misconception": "Any true equation of that shape counts as a dependence relation.",
    "explanation": "All of the weights here are \\(0\\), so this is the trivial relation. It holds for every list of vectors and certifies nothing."
  },
  {
    "id": "1.7-relation-03",
    "section": "1.7",
    "topic": "Dependence relations",
    "concept": "dependence-relation",
    "statement": "If \\(2\\mathbf{v}_1-\\mathbf{v}_2+0\\mathbf{v}_3=\\mathbf{0}\\), then \\(\\mathbf{v}_1,\\mathbf{v}_2,\\mathbf{v}_3\\) are linearly dependent.",
    "answer": true,
    "difficulty": 2,
    "variant": "core",
    "misconception": "A weight of \\(0\\) anywhere disqualifies the relation.",
    "explanation": "The weights are \\(2,-1,0\\), which are not all zero. That is all the definition asks, so this is a genuine dependence relation."
  },
  {
    "id": "1.7-relation-04",
    "section": "1.7",
    "topic": "Dependence relations",
    "concept": "dependence-relation",
    "statement": "When a linear dependence relation among \\(\\mathbf{v}_1,\\dots,\\mathbf{v}_p\\) exists, it is unique.",
    "answer": false,
    "difficulty": 2,
    "variant": "core",
    "misconception": "The certificate of dependence is a canonical object.",
    "explanation": "Multiplying a dependence relation through by any nonzero scalar gives another one. If \\(2\\mathbf{v}_1-\\mathbf{v}_2=\\mathbf{0}\\), then \\(4\\mathbf{v}_1-2\\mathbf{v}_2=\\mathbf{0}\\) as well, so there are infinitely many."
  },
  {
    "id": "1.7-columns-01",
    "section": "1.7",
    "topic": "Independence tests",
    "concept": "independence-columns",
    "statement": "The columns of \\(A\\) are linearly independent if and only if \\(A\\mathbf{x}=\\mathbf{0}\\) has only the trivial solution.",
    "answer": true,
    "difficulty": 2,
    "variant": "core",
    "misconception": "Independence of the columns is unrelated to the homogeneous equation.",
    "explanation": "\\(A\\mathbf{x}\\) is the combination of the columns with weights from \\(\\mathbf{x}\\), so \\(A\\mathbf{x}=\\mathbf{0}\\) is precisely the vector equation in the definition of independence.",
    "why": {
      "prompt": "Why are the two conditions the same?",
      "choices": [
        "\\(A\\mathbf{x}=\\mathbf{0}\\) is exactly the equation \\(x_1\\mathbf{a}_1+\\cdots+x_n\\mathbf{a}_n=\\mathbf{0}\\) from the definition.",
        "\\(A\\mathbf{x}=\\mathbf{0}\\) is always inconsistent when the columns are independent.",
        "Independence requires \\(A\\) to be square.",
        "The trivial solution exists only when the columns are independent."
      ],
      "correct": 0
    }
  },
  {
    "id": "1.7-columns-02",
    "section": "1.7",
    "topic": "Independence tests",
    "concept": "independence-columns",
    "statement": "The columns of \\(A\\) are linearly independent if and only if every column of \\(A\\) is a pivot column.",
    "answer": true,
    "difficulty": 2,
    "variant": "core",
    "misconception": "Pivot positions describe spanning rather than independence.",
    "explanation": "A column that is not a pivot column gives a free variable, and a free variable gives a nontrivial solution of \\(A\\mathbf{x}=\\mathbf{0}\\). So independence is exactly the absence of free variables."
  },
  {
    "id": "1.7-columns-03",
    "section": "1.7",
    "topic": "Independence tests",
    "concept": "independence-columns",
    "statement": "The columns of \\(A\\) are linearly independent if and only if \\(A\\) has a pivot position in every row.",
    "answer": false,
    "difficulty": 2,
    "variant": "core",
    "misconception": "Rows and columns are interchangeable in the pivot criteria.",
    "explanation": "A pivot in every row is the criterion for the columns to span \\(\\mathbb{R}^m\\), which is about existence of solutions. Independence is about uniqueness, and its criterion is a pivot in every column.",
    "why": {
      "prompt": "Which pairing is right?",
      "choices": [
        "Pivot in every row means spanning; pivot in every column means independence.",
        "Pivot in every row means independence; pivot in every column means spanning.",
        "Both conditions mean the same thing.",
        "Neither condition can be checked by row reduction."
      ],
      "correct": 0
    }
  },
  {
    "id": "1.7-columns-04",
    "section": "1.7",
    "topic": "Independence tests",
    "concept": "independence-columns",
    "statement": "If the columns of \\(A\\) are linearly independent, then \\(A\\mathbf{x}=\\mathbf{b}\\) is consistent for every \\(\\mathbf{b}\\).",
    "answer": false,
    "difficulty": 3,
    "variant": "core",
    "misconception": "Independence of the columns settles existence as well as uniqueness.",
    "explanation": "Independence says a solution, if one exists, is unique. It says nothing about whether one exists. Existence for every \\(\\mathbf{b}\\) requires the columns to span, which is a pivot in every row.",
    "counterexample": "\\(A=\\begin{bmatrix}1\\\\0\\end{bmatrix}\\) has a linearly independent single column, but \\(A\\mathbf{x}=\\begin{bmatrix}0\\\\1\\end{bmatrix}\\) has no solution.",
    "why": {
      "prompt": "What does independence of the columns actually give you?",
      "choices": [
        "Uniqueness: at most one solution for each \\(\\mathbf{b}\\).",
        "Existence: at least one solution for each \\(\\mathbf{b}\\).",
        "Both existence and uniqueness for each \\(\\mathbf{b}\\).",
        "That \\(A\\) is square."
      ],
      "correct": 0
    }
  },
  {
    "id": "1.7-columns-05",
    "section": "1.7",
    "topic": "Independence tests",
    "concept": "independence-columns",
    "statement": "If the columns of \\(A\\) are linearly independent and \\(A\\mathbf{x}=\\mathbf{b}\\) is consistent, then that solution is unique.",
    "answer": true,
    "difficulty": 2,
    "variant": "hypothesis",
    "misconception": "Independence alone cannot deliver uniqueness without further assumptions.",
    "explanation": "Independence means \\(A\\mathbf{x}=\\mathbf{0}\\) has only the trivial solution, so the solution set of \\(A\\mathbf{x}=\\mathbf{b}\\) is \\(\\mathbf{p}+\\{\\mathbf{0}\\}=\\{\\mathbf{p}\\}\\). The consistency hypothesis supplies the particular solution \\(\\mathbf{p}\\)."
  },
  {
    "id": "1.7-one-01",
    "section": "1.7",
    "topic": "Independence tests",
    "concept": "one-vector-independence",
    "statement": "A list consisting of a single nonzero vector \\(\\mathbf{v}\\) is linearly independent.",
    "answer": true,
    "difficulty": 1,
    "variant": "core",
    "misconception": "Independence needs at least two vectors to compare.",
    "explanation": "The equation \\(x_1\\mathbf{v}=\\mathbf{0}\\) with \\(\\mathbf{v}\\ne\\mathbf{0}\\) forces \\(x_1=0\\), so only the trivial solution occurs."
  },
  {
    "id": "1.7-one-02",
    "section": "1.7",
    "topic": "Independence tests",
    "concept": "one-vector-independence",
    "statement": "The list consisting of the single vector \\(\\mathbf{0}\\) is linearly independent.",
    "answer": false,
    "difficulty": 1,
    "variant": "core",
    "misconception": "A one-element list is too small to be dependent.",
    "explanation": "The relation \\(1\\cdot\\mathbf{0}=\\mathbf{0}\\) uses the nonzero weight \\(1\\), so it is a genuine dependence relation. The list is dependent."
  },
  {
    "id": "1.7-one-03",
    "section": "1.7",
    "topic": "Independence tests",
    "concept": "one-vector-independence",
    "statement": "A list consisting of a single vector \\(\\mathbf{v}\\) is linearly independent exactly when \\(\\mathbf{v}\\ne\\mathbf{0}\\).",
    "answer": true,
    "difficulty": 2,
    "variant": "core",
    "misconception": "Single-vector lists are always independent, or always dependent.",
    "explanation": "If \\(\\mathbf{v}\\ne\\mathbf{0}\\) then \\(x_1\\mathbf{v}=\\mathbf{0}\\) forces \\(x_1=0\\). If \\(\\mathbf{v}=\\mathbf{0}\\) then \\(1\\cdot \\mathbf{v}=\\mathbf{0}\\) is a nontrivial relation. So the two cases split exactly on whether \\(\\mathbf{v}\\) is the zero vector \\(\\mathbf{0}\\)."
  },
  {
    "id": "1.7-two-01",
    "section": "1.7",
    "topic": "Independence tests",
    "concept": "two-vector-independence",
    "statement": "Two vectors are linearly dependent if and only if one of them is a scalar multiple of the other.",
    "answer": true,
    "difficulty": 2,
    "variant": "core",
    "misconception": "This test is only a rough guide even in the two-vector case.",
    "explanation": "A relation \\(c_1\\mathbf{u}+c_2\\mathbf{v}=\\mathbf{0}\\) with, say, \\(c_1\\ne0\\) gives \\(\\mathbf{u}=(-c_2/c_1)\\mathbf{v}\\). Conversely \\(\\mathbf{u}=c\\mathbf{v}\\) gives the relation \\(\\mathbf{u}-c\\mathbf{v}=\\mathbf{0}\\). The case where one vector is \\(\\mathbf{0}\\) is covered, since \\(\\mathbf{0}=0\\cdot \\mathbf{v}\\).",
    "why": {
      "prompt": "Why does this test not extend to three vectors?",
      "choices": [
        "Three vectors can be dependent even when no one of them is a multiple of another.",
        "Three vectors are always dependent.",
        "Scalar multiples are undefined for three vectors.",
        "Three vectors are always independent unless two coincide."
      ],
      "correct": 0
    }
  },
  {
    "id": "1.7-two-02",
    "section": "1.7",
    "topic": "Independence tests",
    "concept": "two-vector-independence",
    "statement": "A list of three or more vectors is linearly dependent if and only if one of them is a scalar multiple of another.",
    "answer": false,
    "difficulty": 3,
    "variant": "core",
    "misconception": "The two-vector test generalizes directly to longer lists.",
    "explanation": "For longer lists the correct statement uses linear combinations of the others, not scalar multiples of a single one. Pairwise comparisons are not enough.",
    "counterexample": "\\(\\begin{bmatrix}1\\\\0\\end{bmatrix},\\begin{bmatrix}0\\\\1\\end{bmatrix},\\begin{bmatrix}1\\\\1\\end{bmatrix}\\): no one of these is a multiple of another, yet the third is the sum of the first two, so the list is dependent.",
    "why": {
      "prompt": "What is the correct statement for a list of three or more?",
      "choices": [
        "At least one vector is a linear combination of the others, which is a weaker demand than being a multiple of a single one.",
        "At least one vector is a scalar multiple of the sum of the others.",
        "Every vector is a scalar multiple of some other vector in the list.",
        "The list is dependent only when two of the vectors are equal."
      ],
      "correct": 0
    }
  },
  {
    "id": "1.7-two-03",
    "section": "1.7",
    "topic": "Independence tests",
    "concept": "two-vector-independence",
    "statement": "Two nonzero vectors are always linearly independent.",
    "answer": false,
    "difficulty": 1,
    "variant": "core",
    "misconception": "Only the zero vector \\(\\mathbf{0}\\) can create dependence between two vectors.",
    "explanation": "Two nonzero vectors are dependent whenever one is a multiple of the other.",
    "counterexample": "\\(\\begin{bmatrix}1\\\\2\\end{bmatrix}\\) and \\(\\begin{bmatrix}3\\\\6\\end{bmatrix}\\) are both nonzero, but the second is three times the first."
  },
  {
    "id": "1.7-char-01",
    "section": "1.7",
    "topic": "Dependence relations",
    "concept": "dependence-characterization",
    "statement": "A list of two or more vectors is linearly dependent if and only if at least one of the vectors is a linear combination of the others.",
    "answer": true,
    "difficulty": 2,
    "variant": "core",
    "misconception": "Dependence is only about scalar multiples.",
    "explanation": "From a relation with \\(c_j\\ne0\\), solve for \\(\\mathbf{v}_j\\) in terms of the rest. Conversely, if \\(\\mathbf{v}_j\\) is a combination of the others, moving it across gives a relation with weight \\(-1\\) on \\(\\mathbf{v}_j\\), which is nonzero.",
    "why": {
      "prompt": "Which weight lets you solve for one of the vectors?",
      "choices": [
        "Any weight that is nonzero, since you may divide by it.",
        "The first weight, whatever it is.",
        "The largest weight.",
        "Any weight, including zero ones."
      ],
      "correct": 0
    }
  },
  {
    "id": "1.7-char-02",
    "section": "1.7",
    "topic": "Dependence relations",
    "concept": "dependence-characterization",
    "statement": "If a list of vectors is linearly dependent, then every vector in the list is a linear combination of the others.",
    "answer": false,
    "difficulty": 3,
    "variant": "core",
    "misconception": "At least one is read as every one.",
    "explanation": "The theorem promises only that some vector can be written this way. A vector that is not involved in any dependence relation cannot be.",
    "counterexample": "\\(\\begin{bmatrix}1\\\\0\\end{bmatrix},\\begin{bmatrix}2\\\\0\\end{bmatrix},\\begin{bmatrix}0\\\\1\\end{bmatrix}\\) is dependent, but the third vector is not a combination of the first two, which span only the horizontal axis.",
    "why": {
      "prompt": "Which quantifier does the theorem actually use?",
      "choices": [
        "There exists at least one vector that is a combination of the others.",
        "Every vector is a combination of the others.",
        "Exactly one vector is a combination of the others.",
        "The first vector is a combination of the others."
      ],
      "correct": 0
    }
  },
  {
    "id": "1.7-char-03",
    "section": "1.7",
    "topic": "Dependence relations",
    "concept": "dependence-characterization",
    "statement": "A list \\(\\mathbf{v}_1,\\dots,\\mathbf{v}_p\\) with \\(p\\ge2\\) is linearly dependent if and only if \\(\\mathbf{v}_1=\\mathbf{0}\\) or some \\(\\mathbf{v}_j\\) is a linear combination of the preceding vectors \\(\\mathbf{v}_1,\\dots,\\mathbf{v}_{j-1}\\).",
    "answer": true,
    "difficulty": 3,
    "variant": "hypothesis",
    "misconception": "Restricting attention to preceding vectors weakens the characterization.",
    "explanation": "Take a dependence relation and let \\(j\\) be the largest index with \\(c_j\\ne0\\). If \\(j=1\\) the relation reads \\(c_1\\mathbf{v}_1=\\mathbf{0}\\) with \\(c_1\\ne0\\), forcing \\(\\mathbf{v}_1=\\mathbf{0}\\). Otherwise solve for \\(\\mathbf{v}_j\\) in terms of \\(\\mathbf{v}_1,\\dots,\\mathbf{v}_{j-1}\\).",
    "why": {
      "prompt": "Which index \\(j\\) makes the argument work?",
      "choices": [
        "The largest index whose weight is nonzero, so that everything after it drops out.",
        "The smallest index whose weight is nonzero.",
        "Any index at all, since the weights play no role.",
        "The index carrying the largest weight."
      ],
      "correct": 0
    }
  },
  {
    "id": "1.7-many-01",
    "section": "1.7",
    "topic": "Independence tests",
    "concept": "too-many-vectors",
    "statement": "Any list of more than \\(n\\) vectors in \\(\\mathbb{R}^n\\) is linearly dependent.",
    "answer": true,
    "difficulty": 2,
    "variant": "core",
    "misconception": "Carefully chosen vectors can stay independent however many there are.",
    "explanation": "Put the vectors in the columns of an \\(n\\times p\\) matrix with \\(p>n\\). Pivots occupy distinct rows, so there are at most \\(n\\) of them and some column has no pivot. That free variable gives a nontrivial solution of \\(A\\mathbf{x}=\\mathbf{0}\\).",
    "why": {
      "prompt": "Which counting step drives the argument?",
      "choices": [
        "There are at most \\(n\\) pivots but \\(p>n\\) columns, so some column has no pivot.",
        "There are at most \\(p\\) pivots but only \\(n\\) rows.",
        "Every column must be a pivot column.",
        "The matrix must be inconsistent."
      ],
      "correct": 0
    }
  },
  {
    "id": "1.7-many-02",
    "section": "1.7",
    "topic": "Independence tests",
    "concept": "too-many-vectors",
    "statement": "Every list of \\(n\\) or fewer vectors in \\(\\mathbb{R}^n\\) is linearly independent.",
    "answer": false,
    "difficulty": 2,
    "variant": "hypothesis",
    "misconception": "The counting theorem works in both directions.",
    "explanation": "The theorem gives dependence when there are too many vectors. It says nothing when there are few, and few vectors can still be dependent.",
    "counterexample": "In \\(\\mathbb{R}^3\\) the two vectors \\(\\begin{bmatrix}1\\\\0\\\\0\\end{bmatrix}\\) and \\(\\begin{bmatrix}2\\\\0\\\\0\\end{bmatrix}\\) are dependent, even though \\(2\\le3\\)."
  },
  {
    "id": "1.7-many-03",
    "section": "1.7",
    "topic": "Independence tests",
    "concept": "too-many-vectors",
    "statement": "If \\(A\\) is a \\(3\\times5\\) matrix, then the columns of \\(A\\) are linearly dependent.",
    "answer": true,
    "difficulty": 2,
    "variant": "core",
    "misconception": "The size of \\(A\\) alone cannot settle independence.",
    "explanation": "The columns are five vectors in \\(\\mathbb{R}^3\\). Since \\(5>3\\), the counting theorem applies and they are dependent."
  },
  {
    "id": "1.7-many-04",
    "section": "1.7",
    "topic": "Independence tests",
    "concept": "too-many-vectors",
    "statement": "If \\(A\\) is a \\(5\\times3\\) matrix, then the columns of \\(A\\) are linearly dependent.",
    "answer": false,
    "difficulty": 2,
    "variant": "hypothesis",
    "misconception": "Any non-square matrix has dependent columns.",
    "explanation": "Here the columns are three vectors in \\(\\mathbb{R}^5\\), and \\(3\\le5\\), so the counting theorem does not apply. They may be independent or dependent depending on the entries.",
    "counterexample": "The first three columns of a \\(5\\times5\\) identity matrix form a \\(5\\times3\\) matrix with independent columns."
  },
  {
    "id": "1.7-many-05",
    "section": "1.7",
    "topic": "Independence tests",
    "concept": "too-many-vectors",
    "statement": "A list of \\(4\\) vectors in \\(\\mathbb{R}^7\\) must be linearly dependent.",
    "answer": false,
    "difficulty": 1,
    "variant": "core",
    "misconception": "Any mismatch between the number of vectors and the dimension forces dependence.",
    "explanation": "Dependence is forced only when the list is longer than the dimension. Here \\(4<7\\), so no conclusion follows, and four independent vectors in \\(\\mathbb{R}^7\\) are easy to produce."
  },
  {
    "id": "1.7-many-06",
    "section": "1.7",
    "topic": "Independence tests",
    "concept": "too-many-vectors",
    "statement": "If \\(A\\) has more columns than rows, then the columns of \\(A\\) are linearly dependent.",
    "answer": true,
    "difficulty": 3,
    "variant": "core",
    "misconception": "The shape of a matrix says nothing about independence of its columns.",
    "explanation": "If \\(A\\) is \\(m\\times n\\) with \\(n>m\\), its columns are \\(n\\) vectors in \\(\\mathbb{R}^m\\) with \\(n>m\\), so the counting theorem applies directly. Equivalently, some column has no pivot, giving a free variable.",
    "why": {
      "prompt": "Which counting fact does the argument rest on?",
      "choices": [
        "There are at most as many pivots as rows, so with more columns than rows some column has none.",
        "There are at most as many pivots as columns, so some row has none.",
        "Every column of a matrix must be a pivot column.",
        "A matrix with more columns than rows must contain a zero column."
      ],
      "correct": 0
    }
  },
  {
    "id": "1.7-zero-01",
    "section": "1.7",
    "topic": "Independence tests",
    "concept": "zero-vector-dependence",
    "statement": "If a list of vectors contains the zero vector \\(\\mathbf{0}\\), then the list is linearly dependent.",
    "answer": true,
    "difficulty": 2,
    "variant": "core",
    "misconception": "The zero vector \\(\\mathbf{0}\\) contributes nothing and so cannot cause dependence.",
    "explanation": "Put weight \\(1\\) on that zero vector \\(\\mathbf{0}\\) and weight \\(0\\) on everything else. The combination is \\(\\mathbf{0}\\) and the weights are not all zero, so this is a dependence relation.",
    "why": {
      "prompt": "Which relation certifies it?",
      "choices": [
        "Put weight \\(1\\) on that zero vector \\(\\mathbf{0}\\) and \\(0\\) on all other vectors.",
        "Put weight \\(0\\) on every vector in the list.",
        "Put weight \\(1\\) on every vector in the list.",
        "No relation is needed; the zero vector \\(\\mathbf{0}\\) is dependent by definition."
      ],
      "correct": 0
    }
  },
  {
    "id": "1.7-zero-02",
    "section": "1.7",
    "topic": "Independence tests",
    "concept": "zero-vector-dependence",
    "statement": "If a list of vectors does not contain the zero vector \\(\\mathbf{0}\\), then the list is linearly independent.",
    "answer": false,
    "difficulty": 1,
    "variant": "core",
    "misconception": "The zero vector \\(\\mathbf{0}\\) is the only possible source of dependence.",
    "explanation": "Avoiding the zero vector removes one easy source of dependence but not the others. Dependence among nonzero vectors is extremely common.",
    "counterexample": "\\(\\begin{bmatrix}1\\\\0\\end{bmatrix}\\) and \\(\\begin{bmatrix}2\\\\0\\end{bmatrix}\\) are nonzero and dependent."
  },
  {
    "id": "1.7-zero-03",
    "section": "1.7",
    "topic": "Independence tests",
    "concept": "zero-vector-dependence",
    "statement": "The columns of a matrix that has a column of zeros are linearly dependent.",
    "answer": true,
    "difficulty": 2,
    "variant": "core",
    "misconception": "A zero column is merely wasted space in the matrix.",
    "explanation": "The columns then form a list containing the zero vector \\(\\mathbf{0}\\), which is always dependent. Equivalently, that column is not a pivot column, so \\(A\\mathbf{x}=\\mathbf{0}\\) has a free variable."
  },
  {
    "id": "1.8-mattrans-01",
    "section": "1.8",
    "topic": "Transformations",
    "concept": "matrix-transformation",
    "statement": "If \\(A\\) is an \\(m\\times n\\) matrix, then the rule \\(\\mathbf{x}\\mapsto A\\mathbf{x}\\) defines a function from \\(\\mathbb{R}^n\\) to \\(\\mathbb{R}^m\\).",
    "answer": true,
    "difficulty": 1,
    "variant": "core",
    "misconception": "Matrix multiplication is a computation rather than a function.",
    "explanation": "The product \\(A\\mathbf{x}\\) is defined for \\(\\mathbf{x}\\) in \\(\\mathbb{R}^n\\) and produces a vector in \\(\\mathbb{R}^m\\). Assigning each input its output is exactly what a function does, and this one is called a matrix transformation."
  },
  {
    "id": "1.8-mattrans-02",
    "section": "1.8",
    "topic": "Transformations",
    "concept": "matrix-transformation",
    "statement": "If \\(A\\) is \\(m\\times n\\), the matrix transformation \\(\\mathbf{x}\\mapsto A\\mathbf{x}\\) takes vectors in \\(\\mathbb{R}^m\\) and produces vectors in \\(\\mathbb{R}^n\\).",
    "answer": false,
    "difficulty": 1,
    "variant": "core",
    "misconception": "The first number in the size of \\(A\\) tells you the input space.",
    "explanation": "It is the other way around. The entries of \\(\\mathbf{x}\\) weight the \\(n\\) columns, so inputs come from \\(\\mathbb{R}^n\\); each column has \\(m\\) entries, so outputs land in \\(\\mathbb{R}^m\\)."
  },
  {
    "id": "1.8-mattrans-03",
    "section": "1.8",
    "topic": "Transformations",
    "concept": "matrix-transformation",
    "statement": "For the matrix transformation \\(\\mathbf{x}\\mapsto A\\mathbf{x}\\) with \\(A\\) of size \\(2\\times3\\), the domain is \\(\\mathbb{R}^2\\).",
    "answer": false,
    "difficulty": 1,
    "variant": "core",
    "misconception": "The domain is read off the number of rows.",
    "explanation": "The domain is \\(\\mathbb{R}^3\\), one entry for each of the three columns. The codomain is \\(\\mathbb{R}^2\\), one entry for each of the two rows."
  },
  {
    "id": "1.8-mattrans-04",
    "section": "1.8",
    "topic": "Transformations",
    "concept": "matrix-transformation",
    "statement": "Computing \\(T(\\mathbf{u})\\) for the matrix transformation \\(T(\\mathbf{x})=A\\mathbf{x}\\) means forming the linear combination of the columns of \\(A\\) whose weights are the entries of \\(\\mathbf{u}\\).",
    "answer": true,
    "difficulty": 2,
    "variant": "core",
    "misconception": "Transformations require a new rule of computation.",
    "explanation": "Nothing new is happening. \\(T(\\mathbf{u})\\) is just the product \\(A\\mathbf{u}\\) from section 1.4, viewed as the output of a function."
  },
  {
    "id": "1.8-mattrans-05",
    "section": "1.8",
    "topic": "Transformations",
    "concept": "matrix-transformation",
    "statement": "Given an \\(m\\times n\\) matrix \\(A\\), the transformation \\(\\mathbf{x}\\mapsto A\\mathbf{x}\\) is defined for a vector \\(\\mathbf{x}\\) of any size.",
    "answer": false,
    "difficulty": 1,
    "variant": "core",
    "misconception": "Turning a product into a function removes the size requirement.",
    "explanation": "The product is defined only when \\(\\mathbf{x}\\) has one entry for each column of \\(A\\). That requirement is what fixes the domain of the transformation."
  },
  {
    "id": "1.8-vocab-01",
    "section": "1.8",
    "topic": "Function vocabulary",
    "concept": "function-vocabulary",
    "statement": "For a transformation \\(T:\\mathbb{R}^n\\to\\mathbb{R}^m\\), the domain is \\(\\mathbb{R}^n\\) and the codomain is \\(\\mathbb{R}^m\\).",
    "answer": true,
    "difficulty": 1,
    "variant": "core",
    "misconception": "The arrow notation is decoration rather than information.",
    "explanation": "The notation records both spaces: inputs are taken from the domain on the left, and outputs are guaranteed to lie in the codomain on the right."
  },
  {
    "id": "1.8-vocab-02",
    "section": "1.8",
    "topic": "Function vocabulary",
    "concept": "function-vocabulary",
    "statement": "The range of \\(T:\\mathbb{R}^n\\to\\mathbb{R}^m\\) is always all of \\(\\mathbb{R}^m\\).",
    "answer": false,
    "difficulty": 2,
    "variant": "core",
    "misconception": "Range and codomain are the same thing.",
    "explanation": "The range is the set of vectors that actually occur as outputs, and it may be a small part of the codomain.",
    "counterexample": "The transformation of \\(\\mathbb{R}^2\\) that sends every vector to \\(\\mathbf{0}\\) has codomain \\(\\mathbb{R}^2\\) but range \\(\\{\\mathbf{0}\\}\\)."
  },
  {
    "id": "1.8-vocab-03",
    "section": "1.8",
    "topic": "Function vocabulary",
    "concept": "function-vocabulary",
    "statement": "The range of \\(T\\) is the collection of all images \\(T(\\mathbf{x})\\) as \\(\\mathbf{x}\\) runs over the domain.",
    "answer": true,
    "difficulty": 2,
    "variant": "core",
    "misconception": "The range is declared in advance rather than produced by the transformation.",
    "explanation": "The codomain is announced when you write \\(T:\\mathbb{R}^n\\to\\mathbb{R}^m\\). The range has to be worked out, by asking which vectors are actually hit."
  },
  {
    "id": "1.8-vocab-04",
    "section": "1.8",
    "topic": "Function vocabulary",
    "concept": "function-vocabulary",
    "statement": "If \\(T(\\mathbf{u})=\\mathbf{b}\\), then \\(\\mathbf{u}\\) is called the image of \\(\\mathbf{b}\\) under \\(T\\).",
    "answer": false,
    "difficulty": 1,
    "variant": "core",
    "misconception": "Image can be read in either direction.",
    "explanation": "The image is the output: \\(\\mathbf{b}\\) is the image of \\(\\mathbf{u}\\). Going the other way, \\(\\mathbf{u}\\) would be called a preimage of \\(\\mathbf{b}\\)."
  },
  {
    "id": "1.8-vocab-05",
    "section": "1.8",
    "topic": "Function vocabulary",
    "concept": "function-vocabulary",
    "statement": "The range of \\(T\\) is contained in the codomain of \\(T\\).",
    "answer": true,
    "difficulty": 2,
    "variant": "core",
    "misconception": "Range and codomain are unrelated sets.",
    "explanation": "Every output lies in the codomain by definition, so the range sits inside it."
  },
  {
    "id": "1.8-vocab-06",
    "section": "1.8",
    "topic": "Function vocabulary",
    "concept": "function-vocabulary",
    "statement": "If \\(T:\\mathbb{R}^3\\to\\mathbb{R}^2\\), then \\(T(\\mathbf{x})\\) has three entries.",
    "answer": false,
    "difficulty": 1,
    "variant": "core",
    "misconception": "The output has as many entries as the input.",
    "explanation": "\\(T(\\mathbf{x})\\) lies in the codomain \\(\\mathbb{R}^2\\), so it has two entries. It is the input \\(\\mathbf{x}\\) that has three."
  },
  {
    "id": "1.8-vocab-07",
    "section": "1.8",
    "topic": "Function vocabulary",
    "concept": "function-vocabulary",
    "statement": "Every vector in the codomain of \\(T\\) is the image of some vector in the domain.",
    "answer": false,
    "difficulty": 1,
    "variant": "core",
    "misconception": "A transformation must reach everything in its codomain.",
    "explanation": "That property has a name, onto, and it is a condition to be checked rather than something guaranteed. Many transformations miss most of their codomain."
  },
  {
    "id": "1.8-mtl-01",
    "section": "1.8",
    "topic": "Linearity",
    "concept": "matrix-transformations-are-linear",
    "statement": "Every matrix transformation is a linear transformation.",
    "answer": true,
    "difficulty": 2,
    "variant": "core",
    "misconception": "Linearity has to be rechecked for each matrix.",
    "explanation": "It follows from the two algebraic properties of the matrix-vector product: \\(A(\\mathbf{u}+\\mathbf{v})=A\\mathbf{u}+A\\mathbf{v}\\) and \\(A(c\\mathbf{u})=c(A\\mathbf{u})\\). Those are exactly the two requirements in the definition of linear."
  },
  {
    "id": "1.8-mtl-02",
    "section": "1.8",
    "topic": "Linearity",
    "concept": "matrix-transformations-are-linear",
    "statement": "To know that \\(\\mathbf{x}\\mapsto A\\mathbf{x}\\) is linear, you must verify the two linearity conditions separately for each particular matrix \\(A\\).",
    "answer": false,
    "difficulty": 2,
    "variant": "core",
    "misconception": "A general theorem still has to be re-proved in each instance.",
    "explanation": "The verification was done once, for an arbitrary \\(m\\times n\\) matrix. Every matrix transformation inherits the conclusion without further work."
  },
  {
    "id": "1.8-mtl-03",
    "section": "1.8",
    "topic": "Linearity",
    "concept": "matrix-transformations-are-linear",
    "statement": "Because \\(\\mathbf{x}\\mapsto A\\mathbf{x}\\) is linear, \\(A(3\\mathbf{u}-2\\mathbf{v})=3A\\mathbf{u}-2A\\mathbf{v}\\) holds whenever the products are defined.",
    "answer": true,
    "difficulty": 2,
    "variant": "core",
    "misconception": "Linearity of a transformation says nothing about the matrix it came from.",
    "explanation": "Linearity is precisely the statement that the transformation respects linear combinations, and for a matrix transformation that is a fact about \\(A\\)."
  },
  {
    "id": "1.8-lintrans-01",
    "section": "1.8",
    "topic": "Linearity",
    "concept": "linear-transformation",
    "statement": "A transformation \\(T\\) is linear when \\(T(\\mathbf{u}+\\mathbf{v})=T(\\mathbf{u})+T(\\mathbf{v})\\) for all \\(\\mathbf{u},\\mathbf{v}\\) in the domain and \\(T(c\\mathbf{u})=cT(\\mathbf{u})\\) for every scalar \\(c\\) and every \\(\\mathbf{u}\\) in the domain.",
    "answer": true,
    "difficulty": 2,
    "variant": "core",
    "misconception": "Linear means the graph is a straight line.",
    "explanation": "This is the definition. Linearity is about preserving the two operations of \\(\\mathbb{R}^n\\), addition and scalar multiplication, not about the shape of a graph."
  },
  {
    "id": "1.8-lintrans-02",
    "section": "1.8",
    "topic": "Linearity",
    "concept": "linear-transformation",
    "statement": "The definition of a linear transformation asks only that \\(T(\\mathbf{u}+\\mathbf{v})=T(\\mathbf{u})+T(\\mathbf{v})\\).",
    "answer": false,
    "difficulty": 2,
    "variant": "hypothesis",
    "misconception": "The scalar condition follows from the addition condition and can be dropped.",
    "explanation": "The definition has two requirements. Preserving addition is one of them; preserving scalar multiples is a separate demand, and both are needed before the results of this section apply."
  },
  {
    "id": "1.8-lintrans-03",
    "section": "1.8",
    "topic": "Linearity",
    "concept": "linear-transformation",
    "statement": "The transformation \\(T(\\mathbf{x})=\\mathbf{x}+\\mathbf{b}\\), where \\(\\mathbf{b}\\) is a fixed nonzero vector, is linear.",
    "answer": false,
    "difficulty": 2,
    "variant": "core",
    "misconception": "Anything built from addition is linear.",
    "explanation": "A linear transformation must send \\(\\mathbf{0}\\) to \\(\\mathbf{0}\\), but here \\(T(\\mathbf{0})=\\mathbf{b}\\ne\\mathbf{0}\\). Checking directly, \\(T(\\mathbf{u}+\\mathbf{v})=\\mathbf{u}+\\mathbf{v}+\\mathbf{b}\\) while \\(T(\\mathbf{u})+T(\\mathbf{v})=\\mathbf{u}+\\mathbf{v}+2\\mathbf{b}\\).",
    "counterexample": "With \\(\\mathbf{u}=\\mathbf{v}=\\mathbf{0}\\): \\(T(\\mathbf{u}+\\mathbf{v})=\\mathbf{b}\\) but \\(T(\\mathbf{u})+T(\\mathbf{v})=2\\mathbf{b}\\), and these differ because \\(\\mathbf{b}\\ne\\mathbf{0}\\)."
  },
  {
    "id": "1.8-lintrans-04",
    "section": "1.8",
    "topic": "Linearity",
    "concept": "linear-transformation",
    "statement": "Every function from \\(\\mathbb{R}^n\\) to \\(\\mathbb{R}^m\\) is a linear transformation.",
    "answer": false,
    "difficulty": 1,
    "variant": "core",
    "misconception": "Transformation and linear transformation mean the same thing.",
    "explanation": "Linear is an extra condition that most functions fail. Squaring each entry, or adding a fixed nonzero vector, gives perfectly good functions that are not linear."
  },
  {
    "id": "1.8-lintrans-05",
    "section": "1.8",
    "topic": "Linearity",
    "concept": "linear-transformation",
    "statement": "The transformation sending every vector of \\(\\mathbb{R}^n\\) to \\(\\mathbf{0}\\) is linear.",
    "answer": true,
    "difficulty": 2,
    "variant": "core",
    "misconception": "A transformation has to do something in order to be linear.",
    "explanation": "Both conditions hold, with each side equal to \\(\\mathbf{0}\\): \\(T(\\mathbf{u}+\\mathbf{v})=\\mathbf{0}=T(\\mathbf{u})+T(\\mathbf{v})\\) and \\(T(c\\mathbf{u})=\\mathbf{0}=cT(\\mathbf{u})\\). This is the zero transformation."
  },
  {
    "id": "1.8-lintrans-06",
    "section": "1.8",
    "topic": "Linearity",
    "concept": "linear-transformation",
    "statement": "The transformation \\(T(\\mathbf{x})=\\mathbf{x}\\) on \\(\\mathbb{R}^n\\) is linear.",
    "answer": true,
    "difficulty": 1,
    "variant": "core",
    "misconception": "A transformation that changes nothing is too trivial to count.",
    "explanation": "Both conditions read the same on each side. This is the identity transformation, and it is linear."
  },
  {
    "id": "1.8-props-01",
    "section": "1.8",
    "topic": "Linearity",
    "concept": "linear-transformation-properties",
    "statement": "If \\(T\\) is a linear transformation, then \\(T(\\mathbf{0})=\\mathbf{0}\\).",
    "answer": true,
    "difficulty": 1,
    "variant": "core",
    "misconception": "Where the zero vector goes is a separate piece of information.",
    "explanation": "Take \\(c=0\\) in the scalar rule: \\(T(\\mathbf{0})=T(0\\cdot\\mathbf{0})=0\\cdot T(\\mathbf{0})=\\mathbf{0}\\). It is forced, not assumed."
  },
  {
    "id": "1.8-props-02",
    "section": "1.8",
    "topic": "Linearity",
    "concept": "linear-transformation-properties",
    "statement": "If \\(T(\\mathbf{0})=\\mathbf{0}\\), then \\(T\\) is linear.",
    "answer": false,
    "difficulty": 2,
    "variant": "core",
    "misconception": "The test for linearity is where the zero vector goes.",
    "explanation": "Sending \\(\\mathbf{0}\\) to \\(\\mathbf{0}\\) is necessary but nowhere near sufficient. It is useful mainly in the other direction: if \\(T(\\mathbf{0})\\ne\\mathbf{0}\\) you can stop, because \\(T\\) is not linear.",
    "counterexample": "On \\(\\mathbb{R}\\), \\(T(x)=x^2\\) satisfies \\(T(0)=0\\), yet \\(T(1+1)=4\\) while \\(T(1)+T(1)=2\\)."
  },
  {
    "id": "1.8-props-04",
    "section": "1.8",
    "topic": "Linearity",
    "concept": "linear-transformation-properties",
    "statement": "If \\(T\\) is linear, then \\(T(\\mathbf{u}-\\mathbf{v})=T(\\mathbf{u})+T(\\mathbf{v})\\).",
    "answer": false,
    "difficulty": 2,
    "variant": "core",
    "misconception": "Linearity turns every combination into a sum.",
    "explanation": "Linearity preserves the combination as written. Since \\(\\mathbf{u}-\\mathbf{v}=\\mathbf{u}+(-1)\\mathbf{v}\\), the correct conclusion is \\(T(\\mathbf{u}-\\mathbf{v})=T(\\mathbf{u})-T(\\mathbf{v})\\)."
  },
  {
    "id": "1.8-props-05",
    "section": "1.8",
    "topic": "Linearity",
    "concept": "linear-transformation-properties",
    "statement": "If \\(T\\) is linear and \\(T(\\mathbf{u})=T(\\mathbf{v})\\), then \\(\\mathbf{u}=\\mathbf{v}\\).",
    "answer": false,
    "difficulty": 2,
    "variant": "core",
    "misconception": "Linear transformations cannot collapse different inputs together.",
    "explanation": "Many linear transformations send different vectors to the same output. That they do not is a separate property, called one-to-one.",
    "counterexample": "For the zero transformation on \\(\\mathbb{R}^n\\) with \\(n\\ge1\\), \\(T(\\mathbf{e}_1)=\\mathbf{0}=T(\\mathbf{0})\\) even though \\(\\mathbf{e}_1\\ne\\mathbf{0}\\)."
  },
  {
    "id": "1.8-props-06",
    "section": "1.8",
    "topic": "Linearity",
    "concept": "linear-transformation-properties",
    "statement": "If \\(T\\) is linear and \\(\\mathbf{v}\\) lies in \\(\\operatorname{Span}\\{\\mathbf{u}_1,\\mathbf{u}_2\\}\\), then \\(T(\\mathbf{v})\\) lies in \\(\\operatorname{Span}\\{T(\\mathbf{u}_1),T(\\mathbf{u}_2)\\}\\).",
    "answer": true,
    "difficulty": 3,
    "variant": "core",
    "misconception": "Linearity says nothing about how spans are carried along.",
    "explanation": "Write \\(\\mathbf{v}=c_1\\mathbf{u}_1+c_2\\mathbf{u}_2\\). Then \\(T(\\mathbf{v})=c_1T(\\mathbf{u}_1)+c_2T(\\mathbf{u}_2)\\), which is a linear combination of the two images and so lies in their span.",
    "why": {
      "prompt": "Which step does the work?",
      "choices": [
        "Linearity turns \\(T(c_1\\mathbf{u}_1+c_2\\mathbf{u}_2)\\) into \\(c_1T(\\mathbf{u}_1)+c_2T(\\mathbf{u}_2)\\), which is by definition in the span of the images.",
        "\\(T\\) sends every vector to \\(\\mathbf{0}\\), which lies in every span.",
        "Spans are always all of \\(\\mathbb{R}^n\\).",
        "\\(\\mathbf{u}_1\\) and \\(\\mathbf{u}_2\\) have to be linearly independent for the span to exist."
      ],
      "correct": 0
    }
  },
  {
    "id": "1.8-crit-01",
    "section": "1.8",
    "topic": "Linearity",
    "concept": "linearity-criterion",
    "statement": "A transformation \\(T\\) is linear if and only if \\(T(c\\mathbf{u}+d\\mathbf{v})=cT(\\mathbf{u})+dT(\\mathbf{v})\\) for all \\(\\mathbf{u},\\mathbf{v}\\) in the domain and all scalars \\(c,d\\).",
    "answer": true,
    "difficulty": 2,
    "variant": "core",
    "misconception": "The combined identity is weaker than the two separate conditions.",
    "explanation": "Taking \\(c=d=1\\) recovers the addition rule, and taking \\(d=0\\) recovers the scalar rule, so the single identity carries both.",
    "why": {
      "prompt": "Which substitutions recover the two original conditions?",
      "choices": [
        "\\(c=d=1\\) gives the addition rule, and \\(d=0\\) gives the scalar rule.",
        "\\(c=d=0\\) gives both rules at once.",
        "\\(c=d=1\\) gives the scalar rule, and \\(c=0\\) gives the addition rule.",
        "No substitution recovers them; the identity has to be assumed separately."
      ],
      "correct": 0
    }
  },
  {
    "id": "1.8-crit-02",
    "section": "1.8",
    "topic": "Linearity",
    "concept": "linearity-criterion",
    "statement": "If \\(T(c\\mathbf{u}+d\\mathbf{v})=cT(\\mathbf{u})+dT(\\mathbf{v})\\) holds for all \\(\\mathbf{u},\\mathbf{v}\\) when \\(c=d=1\\), then \\(T\\) is linear.",
    "answer": false,
    "difficulty": 2,
    "variant": "core",
    "misconception": "One instance of an identity establishes it for all values.",
    "explanation": "That single case is the addition rule alone. The criterion has to hold for every choice of scalars before it delivers linearity."
  },
  {
    "id": "1.8-crit-03",
    "section": "1.8",
    "topic": "Linearity",
    "concept": "linearity-criterion",
    "statement": "If \\(T(c\\mathbf{u}+d\\mathbf{v})=cT(\\mathbf{u})+dT(\\mathbf{v})\\) holds for all \\(\\mathbf{u},\\mathbf{v}\\) and all scalars \\(c,d\\), then \\(T(\\mathbf{0})=\\mathbf{0}\\) follows without any further assumption.",
    "answer": true,
    "difficulty": 3,
    "variant": "core",
    "misconception": "Sending zero to zero has to be checked on its own.",
    "explanation": "Choose \\(c=d=0\\) and any \\(\\mathbf{u},\\mathbf{v}\\). The left side is \\(T(\\mathbf{0})\\) and the right side is \\(\\mathbf{0}\\), so the two agree.",
    "why": {
      "prompt": "Which choice of scalars produces the conclusion?",
      "choices": [
        "\\(c=d=0\\), which makes the left side \\(T(\\mathbf{0})\\) and the right side \\(\\mathbf{0}\\).",
        "\\(c=d=1\\), which gives the addition rule.",
        "\\(c=1\\) and \\(d=0\\), which gives the scalar rule.",
        "No choice works; \\(T(\\mathbf{0})=\\mathbf{0}\\) has to be assumed separately."
      ],
      "correct": 0
    }
  },
  {
    "id": "1.8-combo-01",
    "section": "1.8",
    "topic": "Linearity",
    "concept": "preserves-combinations",
    "statement": "If \\(T\\) is linear and \\(\\mathbf{y}=c_1\\mathbf{v}_1+\\cdots+c_p\\mathbf{v}_p\\), then \\(T(\\mathbf{y})=c_1T(\\mathbf{v}_1)+\\cdots+c_pT(\\mathbf{v}_p)\\).",
    "answer": true,
    "difficulty": 2,
    "variant": "core",
    "misconception": "Linearity handles two terms at a time and no more.",
    "explanation": "Applying the two-term rule repeatedly extends it to any number of terms. This is what it means to say that linear transformations preserve linear combinations.",
    "why": {
      "prompt": "What does this let you do in practice?",
      "choices": [
        "Work out \\(T\\) on a whole span once you know it on the spanning vectors.",
        "Conclude that \\(T(\\mathbf{v}_1),\\dots,T(\\mathbf{v}_p)\\) are linearly independent.",
        "Conclude that the weights \\(c_1,\\dots,c_p\\) are unique.",
        "Replace \\(T\\) by the identity transformation."
      ],
      "correct": 0
    }
  },
  {
    "id": "1.8-combo-02",
    "section": "1.8",
    "topic": "Linearity",
    "concept": "preserves-combinations",
    "statement": "If \\(T\\) is linear and \\(\\mathbf{v}_1,\\dots,\\mathbf{v}_p\\) are linearly independent, then \\(T(\\mathbf{v}_1),\\dots,T(\\mathbf{v}_p)\\) are linearly independent.",
    "answer": false,
    "difficulty": 3,
    "variant": "core",
    "misconception": "Linearity carries independence forward.",
    "explanation": "A linear transformation may collapse independent vectors onto dependent ones, and nothing in the definition prevents it.",
    "counterexample": "Let \\(T\\) send every vector of \\(\\mathbb{R}^2\\) to \\(\\mathbf{0}\\). Then \\(\\mathbf{e}_1,\\mathbf{e}_2\\) are independent, but their images are both \\(\\mathbf{0}\\) and so are dependent.",
    "why": {
      "prompt": "Which direction does hold?",
      "choices": [
        "If the images are independent, then the original vectors are independent.",
        "If the images are dependent, then the original vectors are dependent.",
        "Neither direction holds.",
        "Both directions hold for every linear transformation."
      ],
      "correct": 0
    }
  },
  {
    "id": "1.8-combo-03",
    "section": "1.8",
    "topic": "Linearity",
    "concept": "preserves-combinations",
    "statement": "If \\(T\\) is linear and \\(T(\\mathbf{v}_1),\\dots,T(\\mathbf{v}_p)\\) are linearly independent, then \\(\\mathbf{v}_1,\\dots,\\mathbf{v}_p\\) are linearly dependent.",
    "answer": false,
    "difficulty": 3,
    "variant": "core",
    "misconception": "Independence of the images tells you nothing, or tells you the opposite.",
    "explanation": "This direction does hold, but with the opposite conclusion: the originals must be independent. If \\(c_1\\mathbf{v}_1+\\cdots+c_p\\mathbf{v}_p=\\mathbf{0}\\), applying \\(T\\) gives \\(c_1T(\\mathbf{v}_1)+\\cdots+c_pT(\\mathbf{v}_p)=\\mathbf{0}\\), and independence of the images forces every \\(c_i\\) to be \\(0\\).",
    "why": {
      "prompt": "What is the correct conclusion?",
      "choices": [
        "The original vectors must be linearly independent.",
        "Nothing follows; the originals may be independent or dependent.",
        "\\(T\\) must be the zero transformation.",
        "The original vectors must be dependent, exactly as the statement says."
      ],
      "correct": 0
    }
  },
  {
    "id": "1.8-combo-04",
    "section": "1.8",
    "topic": "Linearity",
    "concept": "preserves-combinations",
    "statement": "If \\(T\\) is linear and \\(T(\\mathbf{u})=T(\\mathbf{v})\\), then \\(T(\\mathbf{u}-\\mathbf{v})=\\mathbf{0}\\).",
    "answer": true,
    "difficulty": 2,
    "variant": "core",
    "misconception": "Nothing useful follows from two inputs sharing an output.",
    "explanation": "By linearity \\(T(\\mathbf{u}-\\mathbf{v})=T(\\mathbf{u})-T(\\mathbf{v})\\), and the two terms are equal, so the difference is \\(\\mathbf{0}\\)."
  },
  {
    "id": "1.8-scale-01",
    "section": "1.8",
    "topic": "Scaling transformations",
    "concept": "contraction-dilation",
    "statement": "The transformation \\(T(\\mathbf{x})=3\\mathbf{x}\\) on \\(\\mathbb{R}^n\\) is linear.",
    "answer": true,
    "difficulty": 1,
    "variant": "core",
    "misconception": "Stretching distorts vectors and so cannot be linear.",
    "explanation": "Both conditions hold: \\(3(\\mathbf{u}+\\mathbf{v})=3\\mathbf{u}+3\\mathbf{v}\\) and \\(3(c\\mathbf{u})=c(3\\mathbf{u})\\). Scaling by a fixed factor is one of the simplest linear transformations."
  },
  {
    "id": "1.8-scale-02",
    "section": "1.8",
    "topic": "Scaling transformations",
    "concept": "contraction-dilation",
    "statement": "For \\(T(\\mathbf{x})=r\\mathbf{x}\\), the transformation is called a contraction when \\(0\\le r\\le 1\\) and a dilation when \\(r>1\\).",
    "answer": true,
    "difficulty": 2,
    "variant": "core",
    "misconception": "The two words describe different kinds of operation.",
    "explanation": "Both are the same rule with different scaling factors. The names record whether vectors are shortened or lengthened."
  },
  {
    "id": "1.8-scale-03",
    "section": "1.8",
    "topic": "Scaling transformations",
    "concept": "contraction-dilation",
    "statement": "The transformation of \\(\\mathbb{R}^2\\) that squares each entry of \\(\\mathbf{x}\\) is linear.",
    "answer": false,
    "difficulty": 2,
    "variant": "core",
    "misconception": "Applying one rule to every entry makes a transformation linear.",
    "explanation": "Squaring fails both conditions. Doubling the input multiplies the output by four rather than by two, so \\(T(2\\mathbf{u})=4T(\\mathbf{u})\\), which differs from \\(2T(\\mathbf{u})\\) unless \\(T(\\mathbf{u})=\\mathbf{0}\\)."
  },
  {
    "id": "1.8-scale-04",
    "section": "1.8",
    "topic": "Scaling transformations",
    "concept": "contraction-dilation",
    "statement": "The transformation \\(T(\\mathbf{x})=r\\mathbf{x}\\) is linear only when \\(r>0\\).",
    "answer": false,
    "difficulty": 2,
    "variant": "core",
    "misconception": "A negative or zero scaling factor breaks linearity.",
    "explanation": "Every real \\(r\\) gives a linear transformation. Taking \\(r=0\\) gives the zero transformation and \\(r=-1\\) gives reflection through the origin, both of which are linear."
  },
  {
    "id": "1.9-stdmat-01",
    "section": "1.9",
    "topic": "Standard matrix",
    "concept": "standard-matrix",
    "statement": "If \\(T:\\mathbb{R}^n\\to\\mathbb{R}^m\\) is linear, then there is a matrix \\(A\\) with \\(T(\\mathbf{x})=A\\mathbf{x}\\) for every \\(\\mathbf{x}\\) in \\(\\mathbb{R}^n\\).",
    "answer": true,
    "difficulty": 1,
    "variant": "core",
    "misconception": "Only transformations that were defined by a matrix have one.",
    "explanation": "Every linear transformation from \\(\\mathbb{R}^n\\) to \\(\\mathbb{R}^m\\) is a matrix transformation. The matrix is built from the images of \\(\\mathbf{e}_1,\\dots,\\mathbf{e}_n\\), and it is the only one that works."
  },
  {
    "id": "1.9-stdmat-02",
    "section": "1.9",
    "topic": "Standard matrix",
    "concept": "standard-matrix",
    "statement": "The standard matrix of a linear \\(T:\\mathbb{R}^n\\to\\mathbb{R}^m\\) has \\(T(\\mathbf{e}_j)\\) as its \\(j\\)th column.",
    "answer": true,
    "difficulty": 2,
    "variant": "core",
    "misconception": "Building the matrix requires solving a system.",
    "explanation": "Writing \\(\\mathbf{x}=x_1\\mathbf{e}_1+\\cdots+x_n\\mathbf{e}_n\\) and applying linearity gives \\(T(\\mathbf{x})=x_1T(\\mathbf{e}_1)+\\cdots+x_nT(\\mathbf{e}_n)\\), which is exactly the product of \\(\\begin{bmatrix}T(\\mathbf{e}_1)&\\cdots&T(\\mathbf{e}_n)\\end{bmatrix}\\) with \\(\\mathbf{x}\\).",
    "why": {
      "prompt": "Why do the images of \\(\\mathbf{e}_1,\\dots,\\mathbf{e}_n\\) suffice?",
      "choices": [
        "Every \\(\\mathbf{x}\\) is a linear combination of \\(\\mathbf{e}_1,\\dots,\\mathbf{e}_n\\), and linearity carries that combination through \\(T\\).",
        "Because \\(T\\) is one-to-one.",
        "Because \\(\\mathbf{e}_1,\\dots,\\mathbf{e}_n\\) span the codomain.",
        "Because \\(T(\\mathbf{e}_j)=\\mathbf{e}_j\\) for every \\(j\\)."
      ],
      "correct": 0
    }
  },
  {
    "id": "1.9-stdmat-03",
    "section": "1.9",
    "topic": "Standard matrix",
    "concept": "standard-matrix",
    "statement": "A linear transformation can have several different standard matrices.",
    "answer": false,
    "difficulty": 2,
    "variant": "core",
    "misconception": "The matrix depends on how you go about finding it.",
    "explanation": "The matrix is unique. Its \\(j\\)th column has to be \\(T(\\mathbf{e}_j)\\), and those images are determined by \\(T\\) itself, so there is no freedom left."
  },
  {
    "id": "1.9-stdmat-04",
    "section": "1.9",
    "topic": "Standard matrix",
    "concept": "standard-matrix",
    "statement": "If \\(T:\\mathbb{R}^3\\to\\mathbb{R}^2\\) is linear, its standard matrix is \\(3\\times2\\).",
    "answer": false,
    "difficulty": 1,
    "variant": "core",
    "misconception": "The size of the matrix reads in the same order as the arrow.",
    "explanation": "It is \\(2\\times3\\). There is one column for each of the three inputs \\(\\mathbf{e}_1,\\mathbf{e}_2,\\mathbf{e}_3\\), and each column is a vector in \\(\\mathbb{R}^2\\), so the matrix has two rows."
  },
  {
    "id": "1.9-stdmat-05",
    "section": "1.9",
    "topic": "Standard matrix",
    "concept": "standard-matrix",
    "statement": "To find the standard matrix of a linear \\(T\\), you need to know \\(T(\\mathbf{x})\\) for every \\(\\mathbf{x}\\) in the domain.",
    "answer": false,
    "difficulty": 2,
    "variant": "core",
    "misconception": "A matrix can only be recovered from complete information about \\(T\\).",
    "explanation": "Only the \\(n\\) images \\(T(\\mathbf{e}_1),\\dots,T(\\mathbf{e}_n)\\) are needed. Linearity then determines \\(T\\) everywhere else."
  },
  {
    "id": "1.9-stdmat-06",
    "section": "1.9",
    "topic": "Standard matrix",
    "concept": "standard-matrix",
    "statement": "If \\(T:\\mathbb{R}^2\\to\\mathbb{R}^4\\) is linear, its standard matrix has four columns.",
    "answer": false,
    "difficulty": 1,
    "variant": "core",
    "misconception": "The columns are counted from the codomain.",
    "explanation": "It has two columns, one for each of \\(\\mathbf{e}_1,\\mathbf{e}_2\\) in the domain, and four rows, since each image lies in \\(\\mathbb{R}^4\\)."
  },
  {
    "id": "1.9-stdmat-07",
    "section": "1.9",
    "topic": "Standard matrix",
    "concept": "standard-matrix",
    "statement": "Suppose \\(T:\\mathbb{R}^2\\to\\mathbb{R}^3\\) is linear, \\(T(\\mathbf{e}_1)=\\begin{bmatrix}1\\\\-2\\\\0\\end{bmatrix}\\), and \\(T(\\mathbf{e}_2)=\\begin{bmatrix}3\\\\4\\\\5\\end{bmatrix}\\). Then the standard matrix of \\(T\\) is \\(\\begin{bmatrix}1&3\\\\-2&4\\\\0&5\\end{bmatrix}\\).",
    "answer": true,
    "difficulty": 2,
    "variant": "core",
    "misconception": "The images of the standard basis vectors are arranged as rows rather than columns.",
    "explanation": "The first column is \\(T(\\mathbf{e}_1)\\) and the second column is \\(T(\\mathbf{e}_2)\\), so placing the two given images side by side produces the displayed matrix."
  },
  {
    "id": "1.9-stdmat-08",
    "section": "1.9",
    "topic": "Standard matrix",
    "concept": "standard-matrix",
    "statement": "Suppose \\(T:\\mathbb{R}^2\\to\\mathbb{R}^2\\) is linear, \\(T(\\mathbf{e}_1)=\\begin{bmatrix}1\\\\2\\end{bmatrix}\\), and \\(T(\\mathbf{e}_2)=\\begin{bmatrix}-3\\\\4\\end{bmatrix}\\). Then the standard matrix of \\(T\\) is \\(\\begin{bmatrix}1&2\\\\-3&4\\end{bmatrix}\\).",
    "answer": false,
    "difficulty": 2,
    "variant": "core",
    "misconception": "The images of the standard basis vectors are written as rows of the standard matrix.",
    "explanation": "The images must be columns, not rows. The standard matrix is \\(\\begin{bmatrix}1&-3\\\\2&4\\end{bmatrix}\\)."
  },
  {
    "id": "1.9-determined-01",
    "section": "1.9",
    "topic": "Standard matrix",
    "concept": "determined-by-basis-images",
    "statement": "A linear transformation \\(T:\\mathbb{R}^n\\to\\mathbb{R}^m\\) is completely determined by the vectors \\(T(\\mathbf{e}_1),\\dots,T(\\mathbf{e}_n)\\).",
    "answer": true,
    "difficulty": 2,
    "variant": "core",
    "misconception": "Knowing a transformation on finitely many vectors cannot pin it down everywhere.",
    "explanation": "Any \\(\\mathbf{x}\\) is the combination \\(x_1\\mathbf{e}_1+\\cdots+x_n\\mathbf{e}_n\\), and linearity turns that into \\(x_1T(\\mathbf{e}_1)+\\cdots+x_nT(\\mathbf{e}_n)\\). So the \\(n\\) images decide every value of \\(T\\)."
  },
  {
    "id": "1.9-determined-02",
    "section": "1.9",
    "topic": "Standard matrix",
    "concept": "determined-by-basis-images",
    "statement": "Two linear transformations from \\(\\mathbb{R}^n\\) to \\(\\mathbb{R}^m\\) that agree on \\(\\mathbf{e}_1,\\dots,\\mathbf{e}_n\\) can still differ at some other vector.",
    "answer": false,
    "difficulty": 2,
    "variant": "core",
    "misconception": "Agreement on a few vectors leaves room for disagreement elsewhere.",
    "explanation": "Agreeing on \\(\\mathbf{e}_1,\\dots,\\mathbf{e}_n\\) means having the same standard matrix, and the standard matrix determines the transformation. So they agree everywhere."
  },
  {
    "id": "1.9-determined-03",
    "section": "1.9",
    "topic": "Standard matrix",
    "concept": "determined-by-basis-images",
    "statement": "If \\(T:\\mathbb{R}^2\\to\\mathbb{R}^2\\) is linear with \\(T(\\mathbf{e}_1)=\\mathbf{e}_1\\) and \\(T(\\mathbf{e}_2)=\\mathbf{e}_2\\), then \\(T(\\mathbf{x})=\\mathbf{x}\\) for every \\(\\mathbf{x}\\) in \\(\\mathbb{R}^2\\).",
    "answer": true,
    "difficulty": 2,
    "variant": "core",
    "misconception": "Fixing two vectors leaves the rest of the plane free to move.",
    "explanation": "The standard matrix has columns \\(T(\\mathbf{e}_1)=\\mathbf{e}_1\\) and \\(T(\\mathbf{e}_2)=\\mathbf{e}_2\\), so it is the identity matrix and \\(T(\\mathbf{x})=I\\mathbf{x}=\\mathbf{x}\\). Fixing \\(\\mathbf{e}_1\\) and \\(\\mathbf{e}_2\\) forces \\(T\\) to be the identity.",
    "why": {
      "prompt": "Why is \\(T\\) forced to be the identity rather than merely agreeing at two vectors?",
      "choices": [
        "Those two images are the columns of the standard matrix, and the standard matrix determines \\(T\\) everywhere.",
        "Because every linear transformation of \\(\\mathbb{R}^2\\) is the identity.",
        "Because \\(T(\\mathbf{0})=\\mathbf{0}\\) for every linear transformation.",
        "Because \\(\\mathbf{e}_1\\) and \\(\\mathbf{e}_2\\) are linearly independent."
      ],
      "correct": 0
    }
  },
  {
    "id": "1.9-onto-01",
    "section": "1.9",
    "topic": "Onto and one-to-one",
    "concept": "onto",
    "statement": "A transformation \\(T:\\mathbb{R}^n\\to\\mathbb{R}^m\\) is onto \\(\\mathbb{R}^m\\) when every \\(\\mathbf{b}\\) in \\(\\mathbb{R}^m\\) is the image of at least one \\(\\mathbf{x}\\) in \\(\\mathbb{R}^n\\).",
    "answer": true,
    "difficulty": 1,
    "variant": "core",
    "misconception": "Onto is about how many inputs produce each output.",
    "explanation": "Onto asks only that nothing in the codomain is missed. It says nothing about how many inputs land on a given output."
  },
  {
    "id": "1.9-onto-02",
    "section": "1.9",
    "topic": "Onto and one-to-one",
    "concept": "onto",
    "statement": "A transformation \\(T:\\mathbb{R}^n\\to\\mathbb{R}^m\\) is onto \\(\\mathbb{R}^m\\) when every \\(\\mathbf{b}\\) in \\(\\mathbb{R}^m\\) is the image of exactly one \\(\\mathbf{x}\\) in \\(\\mathbb{R}^n\\).",
    "answer": false,
    "difficulty": 1,
    "variant": "core",
    "misconception": "Onto includes a uniqueness requirement.",
    "explanation": "Exactly one would combine onto with one-to-one. Onto by itself asks for at least one, and an onto transformation may send many inputs to the same output."
  },
  {
    "id": "1.9-onto-03",
    "section": "1.9",
    "topic": "Onto and one-to-one",
    "concept": "onto",
    "statement": "Every linear transformation is onto its codomain.",
    "answer": false,
    "difficulty": 1,
    "variant": "core",
    "misconception": "Being defined into \\(\\mathbb{R}^m\\) means reaching all of \\(\\mathbb{R}^m\\).",
    "explanation": "The codomain is announced, not achieved. The zero transformation on \\(\\mathbb{R}^2\\) reaches only \\(\\mathbf{0}\\), and is about as far from onto as possible."
  },
  {
    "id": "1.9-onto-04",
    "section": "1.9",
    "topic": "Onto and one-to-one",
    "concept": "onto",
    "statement": "A transformation \\(T:\\mathbb{R}^n\\to\\mathbb{R}^m\\) is onto exactly when its range equals its codomain.",
    "answer": true,
    "difficulty": 2,
    "variant": "core",
    "misconception": "Onto is unrelated to the range.",
    "explanation": "The range is always contained in the codomain. Onto is precisely the statement that nothing is left over, so the two sets coincide."
  },
  {
    "id": "1.9-onto-05",
    "section": "1.9",
    "topic": "Onto and one-to-one",
    "concept": "onto",
    "statement": "If \\(T:\\mathbb{R}^5\\to\\mathbb{R}^2\\) is linear, then \\(T\\) cannot be onto \\(\\mathbb{R}^2\\).",
    "answer": false,
    "difficulty": 2,
    "variant": "core",
    "misconception": "A large drop in dimension rules out being onto.",
    "explanation": "Going down in dimension is no obstacle. The standard matrix is \\(2\\times5\\), and it only needs a pivot in each of its two rows.",
    "counterexample": "The transformation sending \\(\\mathbf{x}\\) to its first two entries has standard matrix \\(\\begin{bmatrix}1&0&0&0&0\\\\0&1&0&0&0\\end{bmatrix}\\), which has a pivot in every row, so it is onto."
  },
  {
    "id": "1.9-oto-01",
    "section": "1.9",
    "topic": "Onto and one-to-one",
    "concept": "one-to-one",
    "statement": "A transformation \\(T:\\mathbb{R}^n\\to\\mathbb{R}^m\\) is one-to-one when every \\(\\mathbf{b}\\) in \\(\\mathbb{R}^m\\) is the image of at most one \\(\\mathbf{x}\\) in \\(\\mathbb{R}^n\\).",
    "answer": true,
    "difficulty": 1,
    "variant": "core",
    "misconception": "One-to-one requires every output to be reached.",
    "explanation": "At most one allows an output to be missed entirely. One-to-one forbids collisions; it does not demand coverage."
  },
  {
    "id": "1.9-oto-02",
    "section": "1.9",
    "topic": "Onto and one-to-one",
    "concept": "one-to-one",
    "statement": "A transformation \\(T:\\mathbb{R}^n\\to\\mathbb{R}^m\\) is one-to-one when every \\(\\mathbf{b}\\) in \\(\\mathbb{R}^m\\) is the image of at least one \\(\\mathbf{x}\\) in \\(\\mathbb{R}^n\\).",
    "answer": false,
    "difficulty": 1,
    "variant": "core",
    "misconception": "The two definitions are interchangeable.",
    "explanation": "At least one is the definition of onto. One-to-one is at most one, and the two conditions are independent of each other."
  },
  {
    "id": "1.9-oto-03",
    "section": "1.9",
    "topic": "Onto and one-to-one",
    "concept": "one-to-one",
    "statement": "A one-to-one linear transformation must also be onto.",
    "answer": false,
    "difficulty": 2,
    "variant": "core",
    "misconception": "The two properties come as a package.",
    "explanation": "They are separate conditions, and either can hold without the other when the domain and codomain have different dimensions.",
    "counterexample": "The transformation of \\(\\mathbb{R}^2\\) into \\(\\mathbb{R}^3\\) sending \\(\\begin{bmatrix}x_1\\\\x_2\\end{bmatrix}\\) to \\(\\begin{bmatrix}x_1\\\\x_2\\\\0\\end{bmatrix}\\) is one-to-one, but nothing with a nonzero third entry is in its range."
  },
  {
    "id": "1.9-oto-04",
    "section": "1.9",
    "topic": "Onto and one-to-one",
    "concept": "one-to-one",
    "statement": "A transformation \\(T:\\mathbb{R}^n\\to\\mathbb{R}^m\\) is one-to-one exactly when \\(T(\\mathbf{u})=T(\\mathbf{v})\\) forces \\(\\mathbf{u}=\\mathbf{v}\\) for all \\(\\mathbf{u},\\mathbf{v}\\) in \\(\\mathbb{R}^n\\).",
    "answer": true,
    "difficulty": 2,
    "variant": "core",
    "misconception": "One-to-one is only a statement about counting preimages.",
    "explanation": "Saying no output is hit twice is the same as saying two inputs with the same image must have been the same input all along."
  },
  {
    "id": "1.9-oto-05",
    "section": "1.9",
    "topic": "Onto and one-to-one",
    "concept": "one-to-one",
    "statement": "A linear transformation can be one-to-one without being onto.",
    "answer": true,
    "difficulty": 2,
    "variant": "core",
    "misconception": "Any transformation that separates points must also cover the codomain.",
    "explanation": "This can happen when the domain has smaller dimension than the codomain. For instance, embedding \\(\\mathbb{R}^2\\) into \\(\\mathbb{R}^3\\) as the plane \\(x_3=0\\) is one-to-one but not onto."
  },
  {
    "id": "1.9-otok-01",
    "section": "1.9",
    "topic": "Onto and one-to-one",
    "concept": "one-to-one-trivial-kernel",
    "statement": "A linear transformation \\(T:\\mathbb{R}^n\\to\\mathbb{R}^m\\) is one-to-one if and only if \\(T(\\mathbf{x})=\\mathbf{0}\\) has only the trivial solution.",
    "answer": true,
    "difficulty": 2,
    "variant": "core",
    "misconception": "Checking one-to-one means comparing all pairs of inputs.",
    "explanation": "If \\(T(\\mathbf{u})=T(\\mathbf{v})\\) then \\(T(\\mathbf{u}-\\mathbf{v})=\\mathbf{0}\\), so a collision produces a nonzero solution of \\(T(\\mathbf{x})=\\mathbf{0}\\), and conversely. Only one equation has to be solved.",
    "why": {
      "prompt": "Why does one equation settle a question about all pairs?",
      "choices": [
        "Because \\(T(\\mathbf{u})=T(\\mathbf{v})\\) is equivalent to \\(T(\\mathbf{u}-\\mathbf{v})=\\mathbf{0}\\), so every collision shows up as a nonzero solution.",
        "Because \\(T(\\mathbf{0})=\\mathbf{0}\\) for every linear transformation.",
        "Because the trivial solution always exists.",
        "Because one-to-one transformations have square standard matrices."
      ],
      "correct": 0
    }
  },
  {
    "id": "1.9-otok-02",
    "section": "1.9",
    "topic": "Onto and one-to-one",
    "concept": "one-to-one-trivial-kernel",
    "statement": "If \\(T:\\mathbb{R}^n\\to\\mathbb{R}^m\\) is linear and \\(T(\\mathbf{x})=\\mathbf{0}\\) has a nontrivial solution, then \\(T\\) is one-to-one.",
    "answer": false,
    "difficulty": 2,
    "variant": "core",
    "misconception": "The criterion is read with its conclusion reversed.",
    "explanation": "A nontrivial solution \\(\\mathbf{v}\\) gives \\(T(\\mathbf{v})=\\mathbf{0}=T(\\mathbf{0})\\) with \\(\\mathbf{v}\\ne\\mathbf{0}\\), which is exactly a collision. So \\(T\\) is not one-to-one."
  },
  {
    "id": "1.9-otok-03",
    "section": "1.9",
    "topic": "Onto and one-to-one",
    "concept": "one-to-one-trivial-kernel",
    "statement": "If \\(T:\\mathbb{R}^4\\to\\mathbb{R}^3\\) is linear, then \\(T\\) cannot be one-to-one.",
    "answer": true,
    "difficulty": 3,
    "variant": "core",
    "misconception": "One-to-one is possible for any pair of dimensions.",
    "explanation": "The standard matrix is \\(3\\times4\\), with more columns than rows, so its columns are linearly dependent and \\(T(\\mathbf{x})=\\mathbf{0}\\) has a nontrivial solution. Two different inputs therefore share an image.",
    "why": {
      "prompt": "Which counting fact drives this?",
      "choices": [
        "Four columns cannot all be pivot columns when there are only three rows.",
        "Three rows cannot all contain pivots when there are four columns.",
        "A \\(3\\times4\\) matrix has no pivot positions.",
        "Every transformation from a larger space to a smaller one is onto."
      ],
      "correct": 0
    }
  },
  {
    "id": "1.9-ontospan-01",
    "section": "1.9",
    "topic": "Onto and one-to-one",
    "concept": "onto-columns-span",
    "statement": "A linear \\(T:\\mathbb{R}^n\\to\\mathbb{R}^m\\) is onto \\(\\mathbb{R}^m\\) if and only if the columns of its standard matrix span \\(\\mathbb{R}^m\\).",
    "answer": true,
    "difficulty": 2,
    "variant": "core",
    "misconception": "Onto is a property of \\(T\\) that the matrix cannot detect.",
    "explanation": "Onto says every \\(\\mathbf{b}\\) is \\(T(\\mathbf{x})=A\\mathbf{x}\\) for some \\(\\mathbf{x}\\), which is exactly saying every \\(\\mathbf{b}\\) is a linear combination of the columns of \\(A\\).",
    "why": {
      "prompt": "Which pivot condition matches this?",
      "choices": [
        "A pivot in every row of the standard matrix.",
        "A pivot in every column of the standard matrix.",
        "A pivot in the rightmost column.",
        "No pivots at all."
      ],
      "correct": 0
    }
  },
  {
    "id": "1.9-ontospan-02",
    "section": "1.9",
    "topic": "Onto and one-to-one",
    "concept": "onto-columns-span",
    "statement": "A linear transformation \\(T:\\mathbb{R}^n\\to\\mathbb{R}^m\\) is onto \\(\\mathbb{R}^m\\) if and only if the columns of its standard matrix are linearly independent.",
    "answer": false,
    "difficulty": 2,
    "variant": "core",
    "misconception": "The two column conditions attach to whichever property comes to mind first.",
    "explanation": "Independent columns characterize one-to-one, not onto. Onto corresponds to the columns spanning \\(\\mathbb{R}^m\\), which is a pivot in every row rather than in every column.",
    "why": {
      "prompt": "Which pairing is correct?",
      "choices": [
        "Columns span means onto; columns independent means one-to-one.",
        "Columns span means one-to-one; columns independent means onto.",
        "Both column conditions mean onto.",
        "Neither column condition relates to onto or one-to-one."
      ],
      "correct": 0
    }
  },
  {
    "id": "1.9-ontospan-03",
    "section": "1.9",
    "topic": "Onto and one-to-one",
    "concept": "onto-columns-span",
    "statement": "There is a linear transformation \\(T:\\mathbb{R}^2\\to\\mathbb{R}^3\\) that is onto \\(\\mathbb{R}^3\\).",
    "answer": false,
    "difficulty": 3,
    "variant": "core",
    "misconception": "A transformation can reach a larger space if it is chosen cleverly enough.",
    "explanation": "The standard matrix would be \\(3\\times2\\). Each pivot occupies its own column, so there are at most two pivots and some row has none. The columns cannot span \\(\\mathbb{R}^3\\), so no such transformation exists.",
    "why": {
      "prompt": "What is the obstruction?",
      "choices": [
        "A \\(3\\times2\\) matrix has at most two pivots, so one of its three rows has none.",
        "A \\(3\\times2\\) matrix has at most three pivots, which is too few.",
        "Such a transformation would fail to be one-to-one.",
        "\\(\\mathbb{R}^2\\) and \\(\\mathbb{R}^3\\) have no vectors in common."
      ],
      "correct": 0
    }
  },
  {
    "id": "1.9-ontospan-04",
    "section": "1.9",
    "topic": "Onto and one-to-one",
    "concept": "onto-columns-span",
    "statement": "Suppose the standard matrix of a linear transformation \\(T:\\mathbb{R}^3\\to\\mathbb{R}^2\\) is \\(\\begin{bmatrix}1&0&2\\\\0&1&-1\\end{bmatrix}\\), which is in RREF. Then \\(T\\) is onto \\(\\mathbb{R}^2\\) but is not one-to-one.",
    "answer": true,
    "difficulty": 2,
    "variant": "core",
    "misconception": "A matrix must be square for its transformation to be onto, or being onto forces it to be one-to-one.",
    "explanation": "There is a pivot in every row, so the columns span \\(\\mathbb{R}^2\\) and \\(T\\) is onto. The third column is not a pivot column, so the homogeneous equation has a free variable and \\(T\\) is not one-to-one."
  },
  {
    "id": "1.9-otoind-01",
    "section": "1.9",
    "topic": "Onto and one-to-one",
    "concept": "one-to-one-columns-independent",
    "statement": "A linear transformation \\(T:\\mathbb{R}^n\\to\\mathbb{R}^m\\) is one-to-one if and only if the columns of its standard matrix are linearly independent.",
    "answer": true,
    "difficulty": 2,
    "variant": "core",
    "misconception": "Independence of columns is about spanning rather than about collisions.",
    "explanation": "One-to-one is equivalent to \\(A\\mathbf{x}=\\mathbf{0}\\) having only the trivial solution, and that is exactly what independence of the columns of \\(A\\) means."
  },
  {
    "id": "1.9-otoind-02",
    "section": "1.9",
    "topic": "Onto and one-to-one",
    "concept": "one-to-one-columns-independent",
    "statement": "If \\(T:\\mathbb{R}^n\\to\\mathbb{R}^m\\) is linear and the columns of its standard matrix span \\(\\mathbb{R}^m\\), then \\(T\\) is one-to-one.",
    "answer": false,
    "difficulty": 2,
    "variant": "core",
    "misconception": "Spanning is the stronger condition and so implies the other.",
    "explanation": "Spanning gives onto, which settles existence. One-to-one is about uniqueness and needs independent columns instead.",
    "counterexample": "The transformation \\(\\mathbb{R}^3\\to\\mathbb{R}^2\\) with standard matrix \\(\\begin{bmatrix}1&0&0\\\\0&1&0\\end{bmatrix}\\) is onto \\(\\mathbb{R}^2\\), but \\(\\mathbf{e}_3\\) and \\(\\mathbf{0}\\) have the same image."
  },
  {
    "id": "1.9-otoind-03",
    "section": "1.9",
    "topic": "Onto and one-to-one",
    "concept": "one-to-one-columns-independent",
    "statement": "If \\(T:\\mathbb{R}^n\\to\\mathbb{R}^n\\) is linear and one-to-one, then \\(T\\) is onto \\(\\mathbb{R}^n\\).",
    "answer": true,
    "difficulty": 3,
    "variant": "hypothesis",
    "misconception": "The two properties stay independent even when the dimensions match.",
    "explanation": "One-to-one gives \\(n\\) independent columns, so the \\(n\\times n\\) standard matrix has a pivot in every column. With \\(n\\) pivots spread over \\(n\\) rows there is also a pivot in every row, so the columns span \\(\\mathbb{R}^n\\) and \\(T\\) is onto. The equal dimensions are what make this work.",
    "why": {
      "prompt": "Where is the hypothesis that domain and codomain match actually used?",
      "choices": [
        "It forces the \\(n\\) pivots to fill every row as well as every column.",
        "It guarantees the standard matrix has independent columns.",
        "It guarantees \\(T(\\mathbf{0})=\\mathbf{0}\\).",
        "It is not needed; the implication holds for every linear transformation."
      ],
      "correct": 0
    }
  },
  {
    "id": "1.9-otoind-04",
    "section": "1.9",
    "topic": "Onto and one-to-one",
    "concept": "one-to-one-columns-independent",
    "statement": "There is a linear transformation \\(T:\\mathbb{R}^n\\to\\mathbb{R}^n\\) that is onto \\(\\mathbb{R}^n\\) but not one-to-one.",
    "answer": false,
    "difficulty": 3,
    "variant": "hypothesis",
    "misconception": "Onto and one-to-one remain independent in the square case.",
    "explanation": "Onto gives a pivot in each of the \\(n\\) rows, hence \\(n\\) pivots. Since each occupies its own column and there are exactly \\(n\\) columns, every column is a pivot column, the columns are independent, and \\(T\\) is one-to-one after all.",
    "why": {
      "prompt": "Why does onto force one-to-one when the two spaces have the same dimension?",
      "choices": [
        "\\(n\\) pivots spread over \\(n\\) rows must also fill all \\(n\\) columns, leaving no free variables.",
        "Onto and one-to-one are two names for the same definition.",
        "Because \\(T(\\mathbf{0})=\\mathbf{0}\\) for every linear transformation.",
        "Because a square standard matrix has more columns than rows."
      ],
      "correct": 0
    }
  },
  {
    "id": "1.9-otoind-05",
    "section": "1.9",
    "topic": "Onto and one-to-one",
    "concept": "one-to-one-columns-independent",
    "statement": "Suppose the standard matrix of a linear transformation \\(T:\\mathbb{R}^3\\to\\mathbb{R}^4\\) is \\(\\begin{bmatrix}1&2&0\\\\0&1&3\\\\0&0&1\\\\0&0&0\\end{bmatrix}\\), which is in REF. Then \\(T\\) is both one-to-one and onto \\(\\mathbb{R}^4\\).",
    "answer": false,
    "difficulty": 2,
    "variant": "core",
    "misconception": "A pivot in every column also guarantees a pivot in every row.",
    "explanation": "Every column is a pivot column, so \\(T\\) is one-to-one. The last row has no pivot, so the columns do not span \\(\\mathbb{R}^4\\) and \\(T\\) is not onto."
  },
  {
    "id": "1.9-geom-01",
    "section": "1.9",
    "topic": "Geometric transformations",
    "concept": "geometric-transformations",
    "statement": "Reflection of \\(\\mathbb{R}^2\\) through the \\(x_1\\)-axis is a linear transformation.",
    "answer": true,
    "difficulty": 1,
    "variant": "core",
    "misconception": "Geometric operations are a different kind of thing from linear transformations.",
    "explanation": "It sends \\(\\begin{bmatrix}x_1\\\\x_2\\end{bmatrix}\\) to \\(\\begin{bmatrix}x_1\\\\-x_2\\end{bmatrix}\\), which is multiplication by a fixed matrix, so it is linear."
  },
  {
    "id": "1.9-geom-02",
    "section": "1.9",
    "topic": "Geometric transformations",
    "concept": "geometric-transformations",
    "statement": "Projection of \\(\\mathbb{R}^2\\) onto the \\(x_1\\)-axis is a linear transformation.",
    "answer": true,
    "difficulty": 2,
    "variant": "core",
    "misconception": "Throwing information away cannot be linear.",
    "explanation": "It sends \\(\\begin{bmatrix}x_1\\\\x_2\\end{bmatrix}\\) to \\(\\begin{bmatrix}x_1\\\\0\\end{bmatrix}\\), which is multiplication by a fixed matrix. Losing information is allowed; it just means the transformation is not one-to-one."
  },
  {
    "id": "1.9-geom-03",
    "section": "1.9",
    "topic": "Geometric transformations",
    "concept": "geometric-transformations",
    "statement": "A horizontal shear of \\(\\mathbb{R}^2\\) is not a linear transformation.",
    "answer": false,
    "difficulty": 2,
    "variant": "core",
    "misconception": "A transformation that slants the plane must fail linearity.",
    "explanation": "A shear sends \\(\\begin{bmatrix}x_1\\\\x_2\\end{bmatrix}\\) to \\(\\begin{bmatrix}x_1+kx_2\\\\x_2\\end{bmatrix}\\), which is multiplication by a fixed matrix. Shears, reflections, projections, and expansions are all linear."
  },
  {
    "id": "1.9-geom-04",
    "section": "1.9",
    "topic": "Geometric transformations",
    "concept": "geometric-transformations",
    "statement": "Projection of \\(\\mathbb{R}^2\\) onto the \\(x_1\\)-axis is one-to-one.",
    "answer": false,
    "difficulty": 2,
    "variant": "core",
    "misconception": "Being linear and easy to describe makes a transformation one-to-one.",
    "explanation": "Every vector on a given vertical line has the same image, so inputs collide. Equivalently the standard matrix \\(\\begin{bmatrix}1&0\\\\0&0\\end{bmatrix}\\) has a column without a pivot.",
    "counterexample": "\\(\\begin{bmatrix}1\\\\5\\end{bmatrix}\\) and \\(\\begin{bmatrix}1\\\\-3\\end{bmatrix}\\) both map to \\(\\begin{bmatrix}1\\\\0\\end{bmatrix}\\)."
  },
  {
    "id": "1.9-geom-05",
    "section": "1.9",
    "topic": "Geometric transformations",
    "concept": "geometric-transformations",
    "statement": "Reflection of \\(\\mathbb{R}^2\\) through the origin is linear, and it is both one-to-one and onto.",
    "answer": true,
    "difficulty": 2,
    "variant": "core",
    "misconception": "Reflections lose information the way projections do.",
    "explanation": "The transformation is \\(\\mathbf{x}\\mapsto-\\mathbf{x}\\), with standard matrix \\(\\begin{bmatrix}-1&0\\\\0&-1\\end{bmatrix}\\). Its columns are independent and span \\(\\mathbb{R}^2\\), so it is one-to-one and onto; reflecting twice returns every vector to where it started."
  },
  {
    "id": "1.9-geom-06",
    "section": "1.9",
    "topic": "Geometric transformations",
    "concept": "geometric-transformations",
    "statement": "Rotation of \\(\\mathbb{R}^2\\) by \\(90^\\circ\\) about the point \\((1,0)\\) is a linear transformation.",
    "answer": false,
    "difficulty": 2,
    "variant": "core",
    "misconception": "Every rotation of the plane is linear.",
    "explanation": "A linear transformation must fix \\(\\mathbf{0}\\), but this rotation moves the origin. Rotations through a fixed angle about the origin are linear; this rotation about \\((1,0)\\) is not."
  }
];
