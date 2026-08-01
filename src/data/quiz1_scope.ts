// Quiz 1 scope per prof's announcement (30 Jul): "Materials covered in the Quiz are
// till where we stopped last week (Lecture 2, Slide 68)".
// Slide 68 = Charlson Comorbidity Index. IN scope: all of Lecture 1; L2 Segment 1
// (framing, study designs); L2 Segment 2 up to slide 68 (data management, CDM/OMOP,
// vocabularies, FAIR, wrangling/reshape, recode, rescale, aggregation/binning, Charlson).
// OUT of scope: Elixhauser (p69), guidelines-driven methods (p70), missingness (p71-77),
// outliers/Tukey (p78+), CKD labs (p82+), and all of Segment 3 (ML & clustering).

const OUT_OF_SCOPE_IDS: readonly string[] = [
  // quiz_l2 MCQs beyond slide 68
  'l2q17', // MNAR missingness scenario (p72+)
  'l2q18', // complete-case / MCAR (p72+)
  'l2q19', // harmonized data-quality dimensions (beyond 68 / ch.8 only)
  'l2q20', // Tukey fences (p78)
  'l2q22', // CKD dataset (lab, p82+)
  'l2q23', 'l2q24', 'l2q25', 'l2q26', 'l2q27', 'l2q28', 'l2q29',
  'l2q30', 'l2q31', 'l2q32', 'l2q33', // Segment 3: ML & clustering
  // drill cards beyond slide 68
  'd113', // data-quality dimensions
  'd114', // imputation approaches (p72+)
  'd115', // outliers / Tukey (p78)
  'd117', // skew transforms (taught after slide 68 in v4 ordering)
  'd119', // CKD lab flow
  'd120', 'd121', 'd122', 'd123', // ML & clustering
  // Lecture 3-4: beyond Quiz 1 scope
  'l3q1', 'l3q2', 'l3q3', 'l3q4', 'l3q5', 'l3q6', 'l3q7', 'l3q8', 'l3q9',
  'l3q10', 'l3q11', 'l3q12', 'l3q13', 'l3q14', 'l3q15', 'l3q16', 'l3q17',
  'l3q18', 'l3q19', 'l3q20',
  'l4q1', 'l4q2', 'l4q3', 'l4q4', 'l4q5', 'l4q6', 'l4q7', 'l4q8', 'l4q9',
  'l4q10',
  'd201', 'd202', 'd203', 'd204', 'd205', 'd206', 'd207', 'd208', 'd209',
  'd210', 'd211', 'd212', 'd213', 'd214', 'd215', 'd216', 'd217', 'd218',
]

export const quiz1Excluded: ReadonlySet<string> = new Set(OUT_OF_SCOPE_IDS)
