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
]

export const quiz1Excluded: ReadonlySet<string> = new Set(OUT_OF_SCOPE_IDS)
