import type { Proposal } from './types'

export const proposals: readonly Proposal[] = [
  {
    id: "C",
    topic: "Preventive Care Gap",
    recommended: true,
    title: "Caregiving and the Annual Check-Up: Do Caregivers Miss Their Own Preventive Care?",
    question: "Among respondents in the 2024 BRFSS analytic sample (states fielding the Caregiver module), can selected demographic, behavioural, healthcare access, chronic condition, disability, and caregiving-status variables predict not having had a routine check-up within the past year? (Secondary: can the same variables predict a cost-related barrier to seeing a doctor?)",
    eventRate: "18.2% no-checkup in the 87,098-respondent module sample; caregivers 22.2%; bivariate gap 15.0% (caregivers) vs 19.1% (non-caregivers)",
    rationale: [
      "GROUP-CHOSEN ANGLE: the question now centres on caregiver status (CAREGIV1) - whether providing regular care to a family member or friend is associated with missing vs attending one's own annual check-up.",
      "CAREGIV1 sits in the Caregiver optional module fielded by only 16 of 53 states in 2024 and is NOT in the prof's topic C extract - we extracted it ourselves from the raw 922MB LLCP2024.ASC using the course extraction logic, exactly the 'go beyond these suggestions' invitation on the Project Guidance slide.",
      "Verified coverage: 96,287 respondents asked (21.0%), 94,670 with valid caregiver status + outcome, 87,098 complete cases (92.0% within-module retention). Caregiver prevalence 22.2% matches CDC's published ~1-in-5, validating the extraction.",
      "The motivating puzzle - our data contradicts the popular narrative: the caregiver-strain literature says caregivers postpone their own care, but our bivariate check shows caregivers have a LOWER gap rate (15.0% vs 19.1%), persisting within age bands (under-65: 21.1% vs 26.7%; 65+: 7.0% vs 7.4%).",
      "Caregivers skew female (60.0%) and older - the exact profile with higher baseline attendance - so whether the caregiver advantage survives adjustment is the headline question. Either answer is interpretable: persistence supports a connection hypothesis (caregivers are already in clinics with their care recipient); reversal recovers the neglect hypothesis for subgroups.",
      "Coding trap handled: CAREGIV1 code 8 means 'expects to provide care within two years' (n=215), NOT 'none' - recoded to missing with documentation. Same digit, different meaning than the day-count 88 convention.",
      "Skip-logic discipline: caregiver-intensity items (CRGVHRS2, CRGVREL5, CRGVLNG2) are asked only of caregivers - using them as predictors would leak caregiver status, so they appear only in a caregiver-side descriptive profile.",
      "Predictor changes vs the generic draft: CAREGIV1 added as the focal predictor; _URBSTAT dropped (the 16-state footprint already constrains geography - better handled as a limitation). Still 19 predictors, one slot under the cap.",
      "Trade-off stated honestly: analytic N drops from ~382k to 87,098 and generalisability is scoped to module states - still >4,000 events per predictor, so power is a non-issue.",
      "Dedicated literature anchor upgrade: Schulz & Beach 1999 (JAMA caregiver mortality), Bevans & Sternberg 2012 (JAMA caregiving burden), Edwards et al. 2020 (MMWR - profiles caregivers using this very BRFSS module).",
    ],
    learning: [
      "Formulating a feasible problem the hard way: exposure availability checked in the codebook, optional-module coverage quantified (16 states, 21.0%), sample re-derived (87,098), event rate re-verified (18.2%).",
      "Raw-data engineering: fixed-width extraction from the 922MB ASC file using variable-dictionary column positions, with row-order verification against the supplied extract before merging - a fully reproducible notebook step.",
      "The complete missing-code taxonomy: 7/9/77/99 don't-know/refused, the CAREGIV1 code-8 trap, day-count 88->0, blank-as-not-asked, and the critical distinction between structural module non-participation (79.0%) and item-level missingness - reported separately in the missingness table.",
      "Confounding logic in practice: the raw caregiver advantage could be an age/sex artefact; the adjusted odds ratio from the baseline logistic answers it - a concrete lesson in why regression adjustment matters.",
      "Interaction discovery with ML: random forest surfaces caregiver-by-age and caregiver-by-sex interactions that a main-effects logistic cannot.",
      "Interpreting counter-intuitive findings responsibly: connection vs neglect hypotheses, predictive (non-causal) framing, cross-sectional caveats.",
      "Communicating a limitation as a strength: the brief itself warns optional modules 'vary by state and should be used with caution' - our proposal demonstrates exactly that caution with numbers.",
    ],
    requirements: [
      "Variable dictionary: 21 rows (2 outcomes + 19 predictors) including CAREGIV1 with the code-8 note - drafted in full in the proposal.",
      "Missingness table separating structural module non-participation (79.0% of the full file) from item-level missingness within the module sample - with a per-variable decision column.",
      "Data-flow diagram: 457,670 -> 96,287 asked the module (16 states) -> 94,670 valid caregiver status + outcome -> 87,098 complete cases (92.0% within-module retention).",
      "Table 1 stratified by outcome PLUS a caregiver-vs-non-caregiver profile including the caregiver-only intensity items (descriptive only); two charts: gap rate by caregiver status within age bands, and by insurance type.",
      "Baseline logistic regression whose adjusted caregiver odds ratio is the headline estimand; interpreted for direction, significance, practical importance, limitations.",
      "Model comparison table: logistic, depth-limited CART, random forest x Accuracy/Sensitivity/Specificity/AUROC/AUPRC on a stratified 70/30 held-out test set, plus a majority-class dummy row.",
      "Interpretation answering the brief's five questions, centred on whether the caregiver association survives adjustment and what it means for caregiver-support policy (respite care, opportunistic caregiver screening, AIC caregiver grants parallel).",
      "Extended limitation statement: the verbatim unweighted-sample statement PLUS the 16-state module-sample caveat.",
    ],
    proposal: [
      {
        heading: "1. Project question",
        paragraphs: [
          "Among respondents in the 2024 BRFSS analytic sample (states fielding the Caregiver module), can selected demographic, behavioural, healthcare access, chronic condition, disability, and caregiving-status variables predict not having had a routine check-up within the past year? Our focal question is whether informal caregivers differ from non-caregivers in attending their own preventive care once other characteristics are accounted for. As a secondary question using the same analytic sample and predictor framework, we will examine whether the same variables predict a cost-related barrier to seeing a doctor.",
        ],
      },
      {
        heading: "2. Public health motivation",
        paragraphs: [
          "An estimated one in five US adults provides regular unpaid care to a family member or friend, and the caregiver-health literature has long warned that caregivers neglect their own health while caring for others (Schulz & Beach 1999; Bevans & Sternberg 2012). Routine check-ups are the entry point to preventive care, so a caregiver gap - if real - would compound into later diagnoses and higher downstream costs precisely in the population the health system depends on for informal care.",
          "Our verified extract of the 2024 BRFSS Caregiver module (16 states; 94,670 respondents with valid data; 22.2% caregivers) shows a counter-intuitive starting point: caregivers report FEWER check-up gaps than non-caregivers (15.0% vs 19.1%), a difference that persists within age bands. Whether this caregiver advantage survives adjustment for age, sex, health status, socioeconomic position and healthcare access - or conceals neglect within specific caregiver subgroups - is an open, actionable question informing caregiver-support policy such as respite provision and opportunistic caregiver screening during the care recipient's clinical visits. The question resonates in Singapore, where informal caregivers underpin ageing-in-place policy (AIC caregiver grants) and Healthier SG anchors residents to one regular family doctor.",
        ],
      },
      {
        heading: "3. Brief literature context",
        paragraphs: [
          "Schulz and Beach (1999, JAMA) established caregiving as a risk factor for mortality; Bevans and Sternberg (2012, JAMA) reviewed the burden and health effects of family caregiving. Edwards et al. (2020, MMWR) profiled informal caregivers using this same BRFSS Caregiver module, documenting higher rates of mentally-unhealthy days among caregivers - motivating our inclusion of mental distress as an adjustment variable. For method, Clark et al. (2021) frame BRFSS machine-learning prediction as a health-equity targeting tool, and Parekh and Fahim (2021) provide the logistic-regression-versus-tree-ensemble recipe we adopt. We verified in the 2024 codebook that the insurance variable is now PRIMINS2 (formerly PRIMINSR/HLTHPLN1) and that CAREGIV1 sits in a state-optional module fielded by 16 states in 2024 - both checks material to feasibility.",
        ],
      },
      {
        heading: "4. Outcome variable and proposed predictors",
        paragraphs: [
          "All variables were checked in the 2024 BRFSS codebook. CAREGIV1 and caregiver-detail items are not in the course-supplied extract; we extracted them from the raw LLCP2024.ASC using the course extraction notebook's fixed-width logic and merged them onto the supplied Topic C extract with row-order verification (working file brfss2024_topic_c_caregiver.csv, 41 columns). In CAREGIV1, code 8 means 'expects to provide care within two years' (recoded to missing, n = 215), not 'none'. We propose 19 predictors, deliberately under the 20-variable cap; relative to a generic care-gap model we added CAREGIV1 (focal) and removed _URBSTAT (the 16-state module footprint already constrains geographic generalisability), retaining earlier exclusions: PHYSHLTH (near-collinear with GENHLTH), _HLTHPL2 (verified redundant with PRIMINS2 = 88), MARITAL, CHCCOPD3, CHCKDNY2. Caregiver-intensity items (CRGVHRS2, CRGVREL5, CRGVLNG2) are asked only of caregivers and are used solely in a caregiver-profile descriptive table, never as model predictors.",
          "Data flow (verified in pandas on the raw file): 457,670 respondents -> 96,287 asked the Caregiver module (16 states, 21.0%) -> 94,670 with valid caregiver status and check-up outcome -> 87,098 complete cases (92.0% within-module retention). Event rate 18.2%; caregivers 22.2% (20,976). Bivariate preview: caregiver gap rate 15.0% vs non-caregiver 19.1%; under-65: 21.1% vs 26.7%; 65+: 7.0% vs 7.4%.",
        ],
      },
      {
        heading: "5. Planned models and analysis",
        paragraphs: [
          "We will (i) clean and recode per our variable dictionary, documenting every decision in a missingness table that separates structural module non-participation from item-level missingness, plus a data-flow diagram; (ii) produce Table 1 stratified by outcome, a caregiver-vs-non-caregiver profile (including the caregiver-only intensity items descriptively), and two charts (gap rate by caregiver status within age bands; gap rate by insurance type); (iii) fit a baseline logistic regression whose adjusted caregiver odds ratio is our headline estimand; (iv) fit two machine-learning models - a depth-limited decision tree (CART) for transparent decision rules and a random forest for nonlinear interactions (caregiver x age, caregiver x sex) and permutation importance (gradient boosting optional); (v) evaluate all models on a single stratified 70/30 held-out test set using Accuracy, Sensitivity, Specificity, AUROC and AUPRC, with a majority-class dummy baseline reported because the 18% event rate makes accuracy alone misleading; and (vi) interpret: does the caregiver association survive adjustment, does it make public-health sense, is it consistent with the descriptives, what are the limitations, and what additional data would help. No neural networks; no survey weights (_LLCPWT).",
          "\"This project is an unweighted respondent-level predictive modelling exercise using the 2024 BRFSS analytic sample. The results should not be interpreted as nationally representative prevalence estimates.\" In addition, because the Caregiver module was fielded by 16 states in 2024, findings describe the module-state analytic sample and may not generalise to other states.",
        ],
      },
      {
        heading: "6. Team role allocation",
        paragraphs: [
          "All members review the full pipeline end-to-end; no artefact is owned by one person alone. Role-specific responsibilities are listed in the team table below.",
        ],
      },
      {
        heading: "References",
        paragraphs: [
          "Schulz R, Beach SR. JAMA 1999;282(23):2215-2219. · Bevans M, Sternberg EM. JAMA 2012;307(4):398-403. · Edwards VJ, et al. MMWR 2020;69(7):183-188. · Clark CR, et al. J Gen Intern Med 2021;36(5):1181-1188. · Parekh T, Fahim F. Drug Alcohol Depend 2021;225:108789. · CDC, 2024 BRFSS Codebook (LLCP).",
        ],
      },
    ],
    variables: [
      { concept: "No routine check-up <=1 yr", variable: "CHECKUP1", role: "Outcome", original: "1 <=1yr; 2 <=2yr; 3 <=5yr; 4 >5yr; 8 never; 7/9 DK/ref", recode: "1->0; 2/3/4/8->1; 7/9/blank->missing" },
      { concept: "Cost barrier to care", variable: "MEDCOST1", role: "Secondary outcome", original: "1 yes; 2 no; 7/9", recode: "1->1; 2->0; 7/9->missing (also predictor in primary model)" },
      { concept: "Caregiver status (focal)", variable: "CAREGIV1", role: "Predictor", original: "1 yes; 2 no; 8 expects within 2 yrs; 7/9; blank = module not fielded", recode: "1->1; 2->0; 7/8/9->missing; module non-participation reported separately" },
      { concept: "Insurance type", variable: "PRIMINS2", role: "Predictor", original: "1-10 types; 88 none; 77/99", recode: "employer/private/Medicare/Medicaid-state/military-IHS/other-gov/uninsured(88)/not-reported(77,99)" },
      { concept: "Personal healthcare provider", variable: "PERSDOC3", role: "Predictor", original: "1 one; 2 more than one; 3 none; 7/9", recode: "1/2->1; 3->0; 7/9->missing" },
      { concept: "Self-rated general health", variable: "GENHLTH", role: "Predictor", original: "1-5 excellent->poor; 7/9", recode: "Ordinal 1-5; 7/9->missing" },
      { concept: "Mentally unhealthy days", variable: "MENTHLTH", role: "Predictor", original: "1-30 days; 88 none; 77/99", recode: "88->0; keep 0-30; 77/99->missing" },
      { concept: "Diabetes", variable: "DIABETE4", role: "Predictor", original: "1 yes; 2 pregnancy-only; 3 no; 4 pre-diabetes; 7/9", recode: "1->1; 2/3/4->0; 7/9->missing" },
      { concept: "CHD or MI history", variable: "_MICHD", role: "Predictor", original: "1 yes; 2 no; blank", recode: "1->1; 2->0; blank->missing" },
      { concept: "Difficulty walking", variable: "DIFFWALK", role: "Predictor", original: "1 yes; 2 no; 7/9; blank", recode: "1->1; 2->0; else missing" },
      { concept: "Cognitive difficulty", variable: "DECIDE", role: "Predictor", original: "1 yes; 2 no; 7/9; blank", recode: "1->1; 2->0; else missing" },
      { concept: "Difficulty doing errands alone", variable: "DIFFALON", role: "Predictor", original: "1 yes; 2 no; 7/9; blank", recode: "1->1; 2->0; else missing" },
      { concept: "Smoking status", variable: "_SMOKER3", role: "Predictor", original: "1/2 current; 3 former; 4 never; 9", recode: "Current/former/never/not-reported(9)" },
      { concept: "Any leisure physical activity", variable: "_TOTINDA", role: "Predictor", original: "1 yes; 2 no; 9", recode: "1->1; 2->0; 9->missing" },
      { concept: "Sex", variable: "SEXVAR", role: "Predictor", original: "1 M; 2 F", recode: "As is" },
      { concept: "Age group", variable: "_AGEG5YR", role: "Predictor", original: "1-13 five-yr bands; 14 unknown", recode: "Bands 1-13; 14->missing" },
      { concept: "Race/ethnicity group", variable: "_RACEGR3", role: "Predictor", original: "1-5 groups; 9", recode: "Groups 1-5; 9->missing" },
      { concept: "Education level", variable: "_EDUCAG", role: "Predictor", original: "1-4; 9", recode: "Levels 1-4; 9->missing" },
      { concept: "Income group", variable: "_INCOMG1", role: "Predictor", original: "1-7; 9 not reported", recode: "Levels 1-7 + not-reported(9) kept as category (19.1%)" },
      { concept: "Employment status", variable: "EMPLOY1", role: "Predictor", original: "1-8; 9 refused", recode: "Employed/unemployed/homemaker-student/retired/unable; 9/blank->missing" },
    ],
    roles: [
      { role: "Data Preparation Lead", member: "[You]", responsibilities: "Codebook verification (PRIMINS2 rename, CAREGIV1 code-8 trap, module coverage), raw-file extraction and merge of caregiver variables, recoding per variable dictionary, missingness table separating structural vs item missingness, data-flow diagram. Reviews the full pipeline with all members." },
      { role: "Project & Proposal Lead", member: "[Member 2]", responsibilities: "Timeline and coordination, proposal drafting, GitHub repo and Colab management, submission logistics. Reviews the full pipeline with all members." },
      { role: "Descriptive Analysis Lead", member: "[Member 3]", responsibilities: "Table 1, caregiver profile table (incl. CRGV* descriptive-only items), the two charts, bivariate checks anchoring interpretation. Reviews the full pipeline with all members." },
      { role: "Modelling Lead", member: "[Member 4]", responsibilities: "Logistic baseline (adjusted caregiver OR), decision tree and random forest, interaction inspection, train/test protocol, five-metric comparison table. Reviews the full pipeline with all members." },
      { role: "Interpretation & Report Lead", member: "[Member 5]", responsibilities: "Connection-vs-neglect interpretation, caregiver-policy framing, limitations incl. the module-sample caveat, final report and presentation assembly. Reviews the full pipeline with all members." },
    ],
  },
  {
    id: "A",
    topic: "High Health Burden",
    recommended: false,
    title: "Predicting High Health Burden Among 2024 BRFSS Respondents",
    question: "Among respondents in the 2024 BRFSS analytic sample, can selected demographic, behavioural, healthcare access, and chronic condition variables predict high health burden, defined primarily as poor or fair self-rated general health (GENHLTH), with frequent physical distress (PHYSHLTH >= 14 days) as a secondary outcome?",
    eventRate: "19.7% poor/fair GENHLTH among valid responses (18.9% in the final analytic sample of 424,140); secondary FPD 14.3%",
    rationale: [
      "GENHLTH is the canonical CDC HRQOL indicator with the most direct literature anchor of any topic: both Topic A references (Jiang & Hesser 2006; Moriarty, Zack & Kobau 2003) and even the Topic C reference (Clark et al. 2021) model exactly this variable.",
      "The measured event rate of 19.7% poor/fair health is nearly ideal for classification: common enough for stable sensitivity and AUPRC estimation, rare enough that majority-class prediction cannot win.",
      "Outcome missingness is essentially zero (0.29% coded don't know/refused), making the recode a one-line, fully defensible operation verified in the actual professor-supplied CSV.",
      "POORHLTH (activity limitation) was explicitly rejected as an outcome because 41.4% of records are blank through skip logic, which would non-randomly discard the healthiest respondents by design.",
      "Strong monotone signal exists in the data: poor/fair health rises from 7.5% with zero chronic conditions to 66.2% with four or more, and from 5.3% in the highest income band to 45.0% in the lowest, so model findings will cohere with descriptives.",
      "We keep 19 predictors (below the 20 cap), cutting EMPLOY1 for outcome-leakage risk (code 8 = unable to work), MARITAL and _HLTHPL2 for redundancy, CHECKUP1 because it is itself a Topic C outcome, and demoting _URBSTAT to descriptive-only.",
      "The eight individual chronic-condition flags are kept instead of a single count because they preserve the key interpretive question of which conditions carry the prediction; the count is used only as a descriptive chart.",
      "Model choice follows the brief exactly: logistic regression baseline, decision tree for interpretability, random forest as the stronger nonlinear model; no SVM or neural nets, with class weighting for the ~19% imbalance.",
      "Honest trade-off versus Topics B and C: Topic A is the safest and best-anchored but also the most predictable choice with a lower insight ceiling, which is why it is not our recommended pick in a relatively graded cohort.",
      "Key risks and mitigations are pre-identified: class imbalance (class weights plus AUPRC), _AGE80 top-coding at 80 (stated limitation), income non-response absorbing SES signal (coefficient sanity check), and pervasive reverse causation (strictly no causal claims)."
    ],
    learning: [
      "Learning outcome 1 (feasible problem): feasibility is argued with measured numbers - 0.29% outcome missingness and 19.7% event rate - and POORHLTH is rejected on its measured 41.4% skip-logic blankness.",
      "Learning outcome 2 (cleaning and missingness): a transparent rule handles every code - unknowns >=5% of file (income 19.1%, binge 10.4%, BMI 9.4%, smoking 7.0%) become explicit 'Not reported' categories, below 5% become complete-case exclusions, and PHYSHLTH 88 is recoded to 0 days.",
      "Learning outcome 3 (descriptive analysis): Table 1 by outcome status plus two pre-computed gradient charts - poor/fair health by chronic-condition count (7.5% to 66.2%) and by income band (45.0% to 5.3%).",
      "Learning outcome 4 (baseline plus ML comparison): logistic regression odds ratios versus decision tree and random forest on identical stratified 70/30 train/test splits with fixed seed.",
      "Learning outcome 5 (public health interpretation): variable importance across all three models checked for consistency with descriptives, interpreted in surveillance terms with no causal language.",
      "Learning outcome 6 (professional communication): a two-page proposal now, then data-flow diagram, model comparison table, and the required verbatim limitation statement in the final report.",
      "Learning outcome 7 (teamwork): five defined roles with a rule that every deliverable is reviewed by at least one member outside the owning role.",
      "Course-theme fit: the project frames high health burden as a population-health surveillance task tied to the quadruple aim, and the unweighted-sample caveat itself teaches the difference between surveillance estimates and predictive modelling."
    ],
    requirements: [
      "Variable dictionary: 21 rows (2 outcomes + 19 predictors) with BRFSS name, concept, original coding, recode, and role - drafted in full in the proposal annex.",
      "Missingness table: per-variable counts and percentages already measured (income 19.1%, binge 10.4%, BMI 9.4%, smoking 7.0%, all others under 2.1%) with an explicit keep-as-category or exclude decision per variable.",
      "Data-flow diagram: 457,670 respondents, minus 1,310 with unusable outcome (GENHLTH 7/9/blank) to 456,360, minus 32,220 with missing low-missingness predictors, to a final analytic sample of 424,140 (92.7% retained), with a separate minus-8,364 branch for the secondary outcome.",
      "Table 1 plus at least two charts: descriptives by outcome status, chronic-condition-count gradient chart, and income-band gradient chart, all describable only as analytic-sample characteristics.",
      "Baseline logistic regression interpreted for direction, statistical significance, practical importance, and limitations across the 19 predictors.",
      "Model comparison table reporting Accuracy, Sensitivity, Specificity, AUROC, and AUPRC for logistic regression, decision tree, and random forest on the held-out test set, with a paragraph on whether differences are meaningful.",
      "Interpretation answering all five brief questions: most important variables, public-health sense, consistency with descriptives, model limitations, and what additional data (clinical measures, utilisation, social needs) would improve prediction.",
      "Required limitation statement quoted verbatim: 'This project is an unweighted respondent-level predictive modelling exercise using the 2024 BRFSS analytic sample. The results should not be interpreted as nationally representative prevalence estimates.'"
    ],
    proposal: [
      {
        heading: "1. Project question",
        paragraphs: [
          "Among respondents in the 2024 BRFSS analytic sample, can selected demographic, behavioural, healthcare access, and chronic condition variables predict high health burden, defined primarily as poor or fair self-rated general health (GENHLTH), with frequent physical distress (PHYSHLTH >= 14 days) as a secondary outcome?"
        ],
      },
      {
        heading: "2. Public health motivation",
        paragraphs: [
          "Self-rated general health is the Centers for Disease Control and Prevention's core health-related quality of life (HRQOL) indicator and a validated predictor of mortality, morbidity, and healthcare utilisation. In our preliminary audit of the 2024 file, 19.7% of respondents with a valid response reported fair or poor health, and the rate rose steeply from 7.5% among respondents with none of eight measured chronic conditions to 66.2% among those with four or more, and from 5.3% in the highest income band to 45.0% in the lowest. A model that identifies which respondent profiles concentrate high health burden supports population-health surveillance and prevention outreach - helping health systems understand where poor perceived health clusters across behavioural, access, chronic disease, and socioeconomic domains, in line with population-health management and quadruple-aim thinking."
        ],
      },
      {
        heading: "3. Brief literature context",
        paragraphs: [
          "Jiang and Hesser (2006) used Rhode Island's 2002 BRFSS to show that fair/poor general health and the CDC Healthy Days measures are strongly associated with demographics, health behaviours, and health risks - the direct template for our outcome and predictor domains. Moriarty, Zack and Kobau (2003) establish GENHLTH and PHYSHLTH as the CDC's standard population HRQOL tracking measures, supporting our primary/secondary pairing. Clark et al. (2021) demonstrate that machine-learning models can predict self-rated health from BRFSS data and yield health-equity insights, providing methodological precedent for comparing a logistic baseline against tree-based learners on this outcome."
        ],
      },
      {
        heading: "4. Outcome variable and proposed predictors",
        paragraphs: [
          "We verified every variable in the supplied 2024 extract (457,670 respondents). Primary outcome: GENHLTH recoded to poor/fair (4-5) vs excellent/very good/good (1-3); don't know/refused (7/9, 0.29%) excluded. Secondary outcome: PHYSHLTH recoded 88 to 0 days and 77/99 (2.4%) to missing, then dichotomised at >=14 days (frequent physical distress, 14.3%). We deliberately rejected POORHLTH (activity limitation) as an outcome because 41.4% of records are blank through skip logic.",
          "We propose 19 predictors across four domains: demographics/SES - sex, age, race/ethnicity group, education, income; behaviours - smoking status, binge drinking, leisure-time physical activity, BMI category; chronic conditions - diabetes, coronary heart disease/MI, stroke, COPD, depressive disorder, current asthma, arthritis, kidney disease; healthcare access - personal care provider, cost barrier to care. Missing/refused handling is rule-based: variables with >=5% unknown (income 19.1%, binge drinking 10.4%, BMI 9.4%, smoking 7.0%) retain an explicit 'Not reported' category; variables below 5% are recoded to missing with complete-case exclusion. The resulting analytic flow is 457,670 to 456,360 (outcome usable) to 424,140 (92.7% retained), with an 18.9% primary event rate. We excluded EMPLOY1 (its 'unable to work' code risks outcome leakage), MARITAL and health-plan status (redundancy/parsimony), CHECKUP1 (a care-seeking outcome in its own right), and retained urban-rural status for descriptive comparison only."
        ],
      },
      {
        heading: "5. Planned models",
        paragraphs: [
          "We will split the analytic sample into stratified training and test sets (70/30, fixed seed). The baseline model is a logistic regression on all 19 predictors, interpreted through odds ratios (direction, statistical significance, practical importance, limitations). We will then build two machine-learning models: a decision tree (depth and minimum-leaf tuned) for an interpretable segmentation of high-burden profiles, and a random forest (number of trees, depth, minimum-leaf tuned) as a stronger nonlinear comparator; a gradient-boosting model may be added if time permits. Class imbalance (~19% events) will be addressed with class weighting. All models will be compared on the held-out test set in a single table reporting Accuracy, Sensitivity, Specificity, AUROC, and AUPRC, followed by interpretation: variable importance (odds ratios, tree splits, permutation importance), whether findings make public-health sense, consistency with the descriptive analysis, model limitations, and what additional data would improve prediction. No causal claims will be made."
        ],
      },
      {
        heading: "6. Team role allocation",
        paragraphs: [
          "Five roles cover the pipeline end-to-end; all members review the full pipeline and each deliverable is checked by at least one member outside the owning role."
        ],
        bullets: [
          "Data Preparation Lead ([You]): codebook review; variable dictionary; recoding of all 21 variables; missingness table and rule-based handling; data-flow diagram; analytic-sample construction.",
          "Project & Proposal Lead ([Member 2]): timeline and coordination; proposal drafting; GitHub repo and notebook hygiene; scope control (<=20 predictors, 2024 only, no weights).",
          "Descriptive Analysis Lead ([Member 3]): Table 1 by outcome status; chronic-count and income-gradient charts; outcome prevalence checks against the data dictionary.",
          "Modelling Lead ([Member 4]): train/test split; logistic baseline; decision tree and random forest with basic tuning; model comparison table (Accuracy/Sensitivity/Specificity/AUROC/AUPRC).",
          "Interpretation & Report Lead ([Member 5]): variable-importance analysis; public-health interpretation; limitations; final report and presentation assembly."
        ],
      },
      {
        heading: "7. Scope and limitations",
        paragraphs: [
          "This project uses the 2024 BRFSS only, without survey weights, per the project brief. 'This project is an unweighted respondent-level predictive modelling exercise using the 2024 BRFSS analytic sample. The results should not be interpreted as nationally representative prevalence estimates.' Further limitations: cross-sectional self-reported data (no causal inference), age top-coded at 80, and income non-response retained as an explicit category."
        ],
      },
      {
        heading: "References",
        paragraphs: [
          "Jiang Y, Hesser JE. Associations between health-related quality of life and demographics and health risks: results from Rhode Island's 2002 Behavioral Risk Factor Survey. Health Qual Life Outcomes. 2006;4:14.",
          "Moriarty DG, Zack MM, Kobau R. The CDC's Healthy Days Measures - population tracking of perceived physical and mental health over time. Health Qual Life Outcomes. 2003;1:37.",
          "Clark CR, Ommerborn MJ, Moran K, et al. Predicting self-rated health across the life course: health equity insights from machine learning models. J Gen Intern Med. 2021;36(5):1181-1188."
        ],
      },
    ],
    variables: [
      { concept: "Self-rated general health", variable: "GENHLTH", role: "Outcome", original: "1 excellent ... 5 poor; 7 don't know; 9 refused", recode: "Poor/fair (4-5)=1 vs good or better (1-3)=0; 7/9/blank excluded (0.29%)" },
      { concept: "Physically unhealthy days", variable: "PHYSHLTH", role: "Secondary outcome", original: "1-30 days; 88 none; 77 don't know; 99 refused", recode: "88 to 0; >=14 days=1 vs <14=0; 77/99 excluded (2.4%)" },
      { concept: "Sex", variable: "SEXVAR", role: "Predictor", original: "1 male; 2 female", recode: "Binary female vs male" },
      { concept: "Age", variable: "_AGE80", role: "Predictor", original: "18-80 (top-coded at 80)", recode: "Continuous years" },
      { concept: "Race/ethnicity group", variable: "_RACEGR3", role: "Predictor", original: "1 White NH; 2 Black NH; 3 Other NH; 4 Multiracial NH; 5 Hispanic; 9 DK/refused", recode: "5 categories; 9 to missing (2.0%)" },
      { concept: "Education level", variable: "_EDUCAG", role: "Predictor", original: "1 <high school; 2 HS grad; 3 some college; 4 college grad; 9 DK/refused", recode: "4 categories; 9 to missing (0.5%)" },
      { concept: "Household income", variable: "_INCOMG1", role: "Predictor", original: "1 <$15k ... 7 >=$200k; 9 DK/refused", recode: "7 bands plus explicit 'Not reported' (19.1%)" },
      { concept: "Smoking status", variable: "_SMOKER3", role: "Predictor", original: "1 daily; 2 some days; 3 former; 4 never; 9 DK/refused", recode: "4 categories plus 'Not reported' (7.0%)" },
      { concept: "Binge drinking", variable: "_RFBING6", role: "Predictor", original: "1 no; 2 yes; 9 DK/refused", recode: "Yes vs no plus 'Not reported' (10.4%)" },
      { concept: "Leisure-time physical activity", variable: "_TOTINDA", role: "Predictor", original: "1 had activity; 2 none; 9 DK/refused", recode: "Active vs inactive; 9 to missing (0.3%)" },
      { concept: "BMI category", variable: "_BMI5CAT", role: "Predictor", original: "1 underweight; 2 normal; 3 overweight; 4 obese; blank", recode: "4 categories plus 'Unknown' (9.4% blank)" },
      { concept: "Diabetes", variable: "DIABETE4", role: "Predictor", original: "1 yes; 2 gestational only; 3 no; 4 pre-diabetes; 7/9", recode: "Yes (1) vs no (2-4); 7/9 to missing (0.2%)" },
      { concept: "Coronary heart disease or MI", variable: "_MICHD", role: "Predictor", original: "1 yes; 2 no; blank", recode: "Yes vs no; blank to missing (1.1%)" },
      { concept: "Stroke", variable: "CVDSTRK3", role: "Predictor", original: "1 yes; 2 no; 7/9", recode: "Yes vs no; 7/9 to missing (0.3%)" },
      { concept: "COPD", variable: "CHCCOPD3", role: "Predictor", original: "1 yes; 2 no; 7/9", recode: "Yes vs no; 7/9 to missing (0.5%)" },
      { concept: "Depressive disorder", variable: "ADDEPEV3", role: "Predictor", original: "1 yes; 2 no; 7/9", recode: "Yes vs no; 7/9 to missing (0.6%)" },
      { concept: "Current asthma", variable: "_CASTHM1", role: "Predictor", original: "1 no; 2 yes; 9 DK/refused", recode: "Yes vs no; 9 to missing (0.9%)" },
      { concept: "Arthritis", variable: "_DRDXAR2", role: "Predictor", original: "1 yes; 2 no; blank", recode: "Yes vs no; blank to missing (0.6%)" },
      { concept: "Kidney disease", variable: "CHCKDNY2", role: "Predictor", original: "1 yes; 2 no; 7/9", recode: "Yes vs no; 7/9 to missing (0.4%)" },
      { concept: "Personal care provider", variable: "PERSDOC3", role: "Predictor", original: "1 one; 2 more than one; 3 none; 7/9", recode: "Has provider (1-2) vs none (3); 7/9 to missing (1.0%)" },
      { concept: "Cost barrier to care", variable: "MEDCOST1", role: "Predictor", original: "1 yes; 2 no; 7/9", recode: "Yes vs no; 7/9 to missing (0.4%)" },
      { concept: "Urban/rural status", variable: "_URBSTAT", role: "Subgroup", original: "1 urban; 2 rural; blank", recode: "Urban vs rural; blank to missing (3.2%); descriptive only, not in models" },
    ],
    roles: [
      { role: "Data Preparation Lead", member: "[You]", responsibilities: "Codebook review; variable dictionary; recoding of all 21 variables; missingness table and rule-based missing/refused handling; data-flow diagram; analytic-sample construction. All members review the full pipeline." },
      { role: "Project & Proposal Lead", member: "[Member 2]", responsibilities: "Timeline and coordination; proposal drafting; GitHub repo and notebook hygiene; scope control (<=20 predictors, 2024 only, no survey weights). All members review the full pipeline." },
      { role: "Descriptive Analysis Lead", member: "[Member 3]", responsibilities: "Table 1 by outcome status; chronic-condition-count and income-gradient charts; outcome prevalence checks against the data dictionary. All members review the full pipeline." },
      { role: "Modelling Lead", member: "[Member 4]", responsibilities: "Stratified 70/30 train/test split; logistic regression baseline; decision tree and random forest with basic tuning; model comparison table (Accuracy/Sensitivity/Specificity/AUROC/AUPRC). All members review the full pipeline." },
      { role: "Interpretation & Report Lead", member: "[Member 5]", responsibilities: "Variable-importance analysis across models; public-health interpretation without causal claims; limitations including the required unweighted-sample statement; final report and presentation assembly. All members review the full pipeline." },
    ],
  },
  {
    id: "B",
    topic: "Mental Health",
    recommended: false,
    title: "Predicting Frequent Mental Distress Among 2024 BRFSS Respondents",
    question: "Among respondents in the 2024 BRFSS analytic sample, can selected demographic, behavioural, healthcare access, chronic condition, and disability variables predict frequent mental distress (MENTHLTH >= 14 days in the past 30)? Secondary outcome: binge drinking (_RFBING6).",
    eventRate: "13.9% of valid respondents (13.6% in the ~374,000 complete-case analytic sample; 449,514 valid outcome records of 457,670)",
    rationale: [
      "The brief's example Topic B outcome (daily marijuana use) sits in state-optional BRFSS modules absent from all three supplied extracts; we verified this against the extract columns before selecting an outcome, directly avoiding the brief's #1 common mistake and demonstrating the codebook-checking judgement the 3% data-feasibility criterion rewards.",
      "Frequent mental distress (MENTHLTH >= 14 days) is the standard CDC surveillance definition, is asked of every respondent (only 3 blanks in 457,670 rows), and has a measured 13.9% event rate, making it both nearly missingness-free and well-suited to classification.",
      "Topic B's extract is the only one containing the full six-item disability battery (DEAF, BLIND, DECIDE, DIFFWALK, DIFFDRES, DIFFALON), enabling a disability-equity angle: measured FMD is 26.4% among respondents with any disability versus 7.8% without, a 3.4-fold gap replicating Cree et al. 2020.",
      "DECIDE (difficulty concentrating/remembering/deciding) is construct-adjacent to the outcome: measured FMD is 47.4% when DECIDE=yes versus 9.1% when no; we keep it in the primary specification, faithful to the Cree disability framing, but pre-register a sensitivity re-fit without it and report both importance rankings.",
      "We trimmed 27 candidate predictors to exactly 20 with documented reasons: _BMI5CAT cut for 9.4% missingness (the largest avoidable complete-case cost), _RFDRHV9 and _CURECI3 for domain overlap with the secondary outcome and smoking, CHECKUP1/CVDSTRK3/CHCKDNY2/MARITAL for redundancy or low prevalence.",
      "The model ladder (logistic baseline, decision tree, random forest) mirrors Parekh & Fahim 2021's published BRFSS machine-learning design, and the 13.6% event rate dictates reporting AUPRC and threshold discussion rather than leading with accuracy.",
      "Income refusals are kept as an explicit 'not reported' category (13.9% of the final sample) rather than dropped, because refusal itself may carry predictive signal, and dropping would cost a further ~52,000 rows.",
      "Trade-offs versus other topics: topic_b lacks GENHLTH/PHYSHLTH/ADDEPEV3, so a depression-diagnosis covariate is unavailable; the marijuana pivot needs careful explanation; hence B is fully feasible and distinctive but not our top recommendation over Topic A's pivot-free 19.7% poor/fair-health outcome.",
      "Estimated data flow is fully measured: 457,670 raw records, 449,514 after dropping MENTHLTH 77/99/blank (-8,156), and approximately 374,400 after complete-case filtering on the 20 predictors (81.8% retained)."
    ],
    learning: [
      "Healthcare data landscape: BRFSS as the archetypal population telephone survey, including proxy codes (7/9/77/88/99), skip logic, calculated underscore variables, and state-optional modules (the marijuana lesson).",
      "Formulating a feasible analytics question: the marijuana-to-FMD pivot is a live case study in verifying outcome availability in the codebook before committing to a research question.",
      "Data preparation: recoding 88 to 0, dropping don't-know/refused codes, handling blank-by-design values, and building a full recode dictionary, which is the deepest-weighted skill across both rubrics (3% proposal plus 6% final).",
      "Descriptive analysis: constructing a Table 1 stratified by FMD status, plotting the outcome distribution, and visualising the disability and income gradients in mental distress.",
      "Predictive modelling: fitting an interpretable logistic baseline plus a decision tree and a random forest on an imbalanced binary outcome, following a published BRFSS model ladder.",
      "Model evaluation: comparing Accuracy, Sensitivity, Specificity, AUROC, and AUPRC on a held-out set and understanding why AUPRC matters at a 13.6% event rate.",
      "Cautious interpretation and communication: distinguishing variable importance from causation, openly handling the DECIDE construct overlap with dual specifications, and applying the unweighted analytic-sample limitation throughout."
    ],
    requirements: [
      "Variable dictionary: a 23-row table (primary outcome, secondary outcome, 20 predictors, one derived subgroup flag) with name, concept, original coding, recode, and role, drafted in the proposal and expanded in an annex.",
      "Missingness table: per-variable rates of 7/9/blank codes already measured from the CSV (disability blanks 3.3-4.5%, MENTHLTH 77/99 1.8% combined, income code 9 kept as category) with the decision documented for each variable.",
      "Data-flow diagram: 457,670 raw respondents to 449,514 with valid MENTHLTH (drop 8,156) to approximately 374,400 complete-case analytic sample (81.8% retained).",
      "Table 1 plus at least two charts: descriptives by FMD status, FMD prevalence by disability count (0/1/2+), and FMD prevalence by income group.",
      "Model comparison table: logistic regression versus decision tree versus random forest on Accuracy, Sensitivity, Specificity, AUROC, and AUPRC over a stratified 30% held-out test set, with a parallel DECIDE-excluded sensitivity run.",
      "Interpretation section answering the required questions: most important variables under both specifications, public-health plausibility against Cree 2020, consistency with descriptives, limitations, and what extra data (depression diagnosis, social support, ACE modules) would help.",
      "Required limitation statement quoted verbatim: this is an unweighted respondent-level predictive modelling exercise on the 2024 BRFSS analytic sample, not nationally representative prevalence estimation."
    ],
    proposal: [
      {
        heading: "1. Project question",
        paragraphs: [
          "Among respondents in the 2024 BRFSS analytic sample, can selected demographic, behavioural, healthcare access, chronic condition, and disability variables predict frequent mental distress (FMD), defined by the CDC surveillance standard of 14 or more poor-mental-health days in the past 30 days (MENTHLTH >= 14)? As a secondary outcome, we will apply the same pipeline to the calculated binge-drinking indicator (_RFBING6), a closely linked behavioural-health outcome.",
          "A note on outcome selection: the brief's example Topic B outcome (daily marijuana use) sits in state-optional BRFSS modules that are not present in the supplied 2024 extract; we verified this against the extract columns and the 2024 codebook before selecting FMD, which is asked of all respondents (only 3 blank values in 457,670 records). We chose FMD deliberately: it is the standard CDC definition used in prior BRFSS mental-health surveillance research, ensuring both feasibility and comparability."
        ],
      },
      {
        heading: "2. Public health motivation",
        paragraphs: [
          "Frequent mental distress marks the population whose mental-health burden is persistent rather than episodic, and it predicts unmet treatment need, health-risk behaviours, and downstream chronic disease. In our 2024 analytic sample, 13.9% of respondents meet the FMD threshold, but the burden is starkly unequal: among respondents reporting at least one functional disability (30.8% of the sample), FMD prevalence is 26.4%, versus 7.8% among those reporting none, a 3.4-fold gap. Identifying which routinely collected survey characteristics best discriminate FMD can help target screening and community mental-health outreach toward the highest-burden groups, particularly people with disabilities, an explicit health-equity priority."
        ],
      },
      {
        heading: "3. Brief literature context",
        paragraphs: [
          "Cree et al. (MMWR 2020) documented, using BRFSS and this same >= 14-day definition, that FMD among adults with disabilities is several times that of adults without, establishing our equity framing. Miyakado-Steger & Seidel (Prev Chronic Dis 2019) modelled FMD risk factors in BRFSS data, finding income, employment, and chronic conditions to be dominant correlates, informing our predictor domains. Methodologically, Parekh & Fahim (Drug Alcohol Depend 2021) applied logistic regression, decision tree, and random forest classifiers to BRFSS behavioural-health outcomes; we adopt their model ladder and evaluation approach. Our contribution is applying this design to the 2024 cycle with the full six-item disability battery."
        ],
      },
      {
        heading: "4. Outcome variable and proposed predictors (20 predictors)",
        paragraphs: [
          "Outcome recoding: MENTHLTH 88 recoded to 0 days; 77 (don't know, 1.2%) and 99 (refused, 0.6%) dropped; FMD = 1 if days >= 14. Blank disability items (3.3-4.5%, skip-logic/module non-response) are dropped complete-case; income code 9 (not reported, 13.9% of the final sample) is retained as an explicit category because refusal may itself carry signal. Estimated data flow: 457,670 raw records, 449,514 with a valid outcome, approximately 374,000 complete-case analytic sample (about 82% retained; FMD 13.6%). Predictors span five domains: disability (DEAF, BLIND, DECIDE, DIFFWALK, DIFFDRES, DIFFALON), behaviour (_SMOKER3, _TOTINDA), healthcare access (PERSDOC3, MEDCOST1, _HLTHPL2), chronic conditions (_MICHD, DIABETE4, CHCCOPD3), and demographic/socioeconomic (SEXVAR, _AGEG5YR, _RACEGR3, _EDUCAG, _INCOMG1, EMPLOY1).",
          "We considered and excluded seven further candidates, documenting each decision: _BMI5CAT (9.4% missing, the largest avoidable complete-case cost), _RFDRHV9 and _CURECI3 (domain overlap with the secondary outcome and with smoking respectively), CHECKUP1 (access already covered; complex code-8 handling), CVDSTRK3 and CHCKDNY2 (low prevalence, overlapping the cardiometabolic axis), and MARITAL (held as a sensitivity swap candidate)."
        ],
        bullets: [
          "Primary outcome MENTHLTH: 1-30 days, 88 none, 77 DK, 99 refused; recode 88 to 0, drop 77/99, FMD = days >= 14",
          "Secondary outcome _RFBING6: 1 no, 2 yes, 9 missing; recode 2 to 1 and 1 to 0, drop 9",
          "Disability items (6): 1 yes / 2 no / 7 / 9 / blank; recode to 1/0, drop 7/9/blank; DECIDE additionally gets a sensitivity run without it due to construct overlap with the outcome",
          "Behaviour: _SMOKER3 four categories (drop 9); _TOTINDA active 1/0 (drop 9)",
          "Access: PERSDOC3 three categories (drop 7/9); MEDCOST1 1/0 (drop 7/9); _HLTHPL2 1/0 (drop 9)",
          "Chronic: _MICHD 1/0 (drop blank); DIABETE4 yes vs not, codes 2/3/4 to 0 (drop 7/9); CHCCOPD3 1/0 (drop 7/9)",
          "Demographic/SES: SEXVAR binary; _AGEG5YR ordinal 13 bands (drop 14); _RACEGR3 five categories (drop 9); _EDUCAG ordinal four levels (drop 9); _INCOMG1 seven levels plus explicit 'not reported' category; EMPLOY1 eight categories (drop 9/blank)",
          "Derived 'any disability' flag (>= 1 of six items) used as a descriptive stratifier only, not a model predictor"
        ],
      },
      {
        heading: "5. Planned models and analysis plan",
        paragraphs: [
          "Cleaning and recoding proceed per the variable table, with a missingness table (per-variable 7/9/blank rates and the decision taken) and a data-flow diagram from 457,670 raw records to the final analytic sample. Descriptive analysis: Table 1 of all predictors stratified by FMD status, the outcome distribution, and two charts (FMD by disability count; FMD by income group). Modelling on a stratified 70/30 train/test split: (i) baseline logistic regression with odds ratios; (ii) a depth-limited decision tree for interpretability, as the brief recommends; (iii) a random forest as the stronger nonlinear learner, mirroring the Parekh & Fahim BRFSS model ladder. Given the 13.6% event rate we will compare models on Accuracy, Sensitivity, Specificity, AUROC, and AUPRC, emphasising AUPRC and threshold choice over raw accuracy.",
          "Because DECIDE (cognitive difficulty) is construct-adjacent to FMD (measured FMD 47.4% when DECIDE = yes versus 9.1% when no), all models will be fitted with and without DECIDE and both importance rankings reported. Interpretation will compare variable importance against the descriptive patterns and prior literature, answer whether findings make public-health sense, and state limitations, including what additional data (e.g., a depression-diagnosis variable, social-support and adverse-childhood-experience modules) would strengthen the work. The same pipeline is then applied to the secondary outcome _RFBING6.",
          "Required limitation statement: \"This project is an unweighted respondent-level predictive modelling exercise using the 2024 BRFSS analytic sample. The results should not be interpreted as nationally representative prevalence estimates.\""
        ],
      },
      {
        heading: "6. Team role allocation",
        paragraphs: [
          "Five roles cover the pipeline end-to-end; all members review every artefact before submission, so no deliverable rests on a single member's checking alone."
        ],
        bullets: [
          "Data Preparation Lead ([You]): codebook verification including the outcome-availability check, recode dictionary, missingness table and decisions, data-flow diagram, analytic-sample construction",
          "Project & Proposal Lead ([Member 2]): timeline and coordination, proposal drafting, GitHub repo management, submission logistics",
          "Descriptive Analysis Lead ([Member 3]): Table 1, outcome distribution, disability-gap and income charts, descriptive narrative",
          "Modelling Lead ([Member 4]): logistic baseline, decision tree, random forest, DECIDE sensitivity runs, evaluation metrics and comparison table",
          "Interpretation & Report Lead ([Member 5]): variable-importance interpretation, equity framing, limitations, final report and presentation slides"
        ],
      },
      {
        heading: "References",
        paragraphs: [
          "Cree RA, et al. Frequent mental distress among adults, by disability status, disability type, and selected characteristics - United States, 2018. MMWR 2020;69(36):1238-1243. Miyakado-Steger H, Seidel S. Using BRFSS data to assess mental health, Travis County, Texas, 2011-2016. Prev Chronic Dis 2019;16:180449. Parekh T, Fahim F. Building risk prediction models for daily use of marijuana using machine learning techniques. Drug Alcohol Depend 2021;225:108789."
        ],
      },
    ],
    variables: [
      { concept: "Poor mental health days", variable: "MENTHLTH", role: "Outcome", original: "1-30 days; 88 none; 77 don't know; 99 refused", recode: "88 to 0; drop 77/99; FMD = 1 if days >= 14" },
      { concept: "Binge drinking", variable: "_RFBING6", role: "Secondary outcome", original: "1 no; 2 yes; 9 missing", recode: "2 to 1, 1 to 0; drop 9" },
      { concept: "Deafness or serious hearing difficulty", variable: "DEAF", role: "Predictor", original: "1 yes; 2 no; 7 DK; 9 refused; blank not asked", recode: "1/0; drop 7/9/blank (3.3% blank)" },
      { concept: "Blindness or serious vision difficulty", variable: "BLIND", role: "Predictor", original: "1 yes; 2 no; 7; 9; blank", recode: "1/0; drop 7/9/blank (3.6% blank)" },
      { concept: "Serious difficulty concentrating, remembering, or deciding", variable: "DECIDE", role: "Predictor", original: "1 yes; 2 no; 7; 9; blank", recode: "1/0; drop 7/9/blank; sensitivity re-fit without it due to construct overlap with FMD" },
      { concept: "Serious difficulty walking or climbing stairs", variable: "DIFFWALK", role: "Predictor", original: "1 yes; 2 no; 7; 9; blank", recode: "1/0; drop 7/9/blank (4.1% blank)" },
      { concept: "Difficulty dressing or bathing", variable: "DIFFDRES", role: "Predictor", original: "1 yes; 2 no; 7; 9; blank", recode: "1/0; drop 7/9/blank (4.3% blank)" },
      { concept: "Difficulty doing errands alone", variable: "DIFFALON", role: "Predictor", original: "1 yes; 2 no; 7; 9; blank", recode: "1/0; drop 7/9/blank (4.5% blank)" },
      { concept: "Smoking status (calculated)", variable: "_SMOKER3", role: "Predictor", original: "1 daily; 2 some days; 3 former; 4 never; 9 missing", recode: "4 categories; drop 9 (7.0%)" },
      { concept: "Leisure-time physical activity (calculated)", variable: "_TOTINDA", role: "Predictor", original: "1 active; 2 not active; 9 missing", recode: "1/0; drop 9 (0.3%)" },
      { concept: "Has personal doctor or care provider", variable: "PERSDOC3", role: "Predictor", original: "1 yes one; 2 yes more than one; 3 no; 7; 9", recode: "3 categories; drop 7/9 (1.0%)" },
      { concept: "Could not see doctor due to cost, past 12 months", variable: "MEDCOST1", role: "Predictor", original: "1 yes; 2 no; 7; 9", recode: "1/0; drop 7/9 (0.4%)" },
      { concept: "Any health-care coverage (calculated)", variable: "_HLTHPL2", role: "Predictor", original: "1 have; 2 do not have; 9 missing", recode: "1/0; drop 9 (4.1%)" },
      { concept: "Coronary heart disease or myocardial infarction (calculated)", variable: "_MICHD", role: "Predictor", original: "1 reported; 2 not reported; blank missing", recode: "1/0; drop blank (1.1%)" },
      { concept: "Diabetes diagnosis", variable: "DIABETE4", role: "Predictor", original: "1 yes; 2 gestational only; 3 no; 4 borderline; 7; 9", recode: "yes vs not (2/3/4 to 0); drop 7/9 (0.2%)" },
      { concept: "COPD, emphysema, or chronic bronchitis", variable: "CHCCOPD3", role: "Predictor", original: "1 yes; 2 no; 7; 9", recode: "1/0; drop 7/9 (0.5%)" },
      { concept: "Sex of respondent", variable: "SEXVAR", role: "Predictor", original: "1 male; 2 female", recode: "binary; no missing values" },
      { concept: "Age group (calculated)", variable: "_AGEG5YR", role: "Predictor", original: "1-13 five-year bands; 14 missing", recode: "ordinal 13 bands; drop 14 (1.8%)" },
      { concept: "Race/ethnicity group (calculated)", variable: "_RACEGR3", role: "Predictor", original: "1 White NH; 2 Black NH; 3 Other NH; 4 Multiracial NH; 5 Hispanic; 9 missing", recode: "5 categories; drop 9 (2.0%)" },
      { concept: "Education level (calculated)", variable: "_EDUCAG", role: "Predictor", original: "1-4 levels; 9 missing", recode: "ordinal 4 levels; drop 9 (0.5%)" },
      { concept: "Household income group (calculated)", variable: "_INCOMG1", role: "Predictor", original: "1-7 income bands; 9 not reported (19.1% raw)", recode: "7 levels plus explicit 'not reported' category (kept, 13.9% of final sample)" },
      { concept: "Employment status", variable: "EMPLOY1", role: "Predictor", original: "1-8 categories; 9 refused; blank", recode: "8 categories; drop 9/blank (1.8%)" },
      { concept: "Any disability (derived from six items)", variable: "ANYDIS (derived)", role: "Subgroup", original: "Derived: >= 1 of DEAF/BLIND/DECIDE/DIFFWALK/DIFFDRES/DIFFALON = yes", recode: "1/0 flag; used as descriptive stratifier only, not a model predictor" },
    ],
    roles: [
      { role: "Data Preparation Lead", member: "[You]", responsibilities: "Codebook verification including the outcome-availability check that drove the FMD pivot; recode dictionary; missingness table and per-variable decisions; data-flow diagram; construction of the ~374,000-record analytic sample. Reviews the full pipeline with all members." },
      { role: "Project & Proposal Lead", member: "[Member 2]", responsibilities: "Timeline and coordination, proposal drafting and formatting to the 2-page limit, GitHub repository management, submission logistics. Reviews the full pipeline with all members." },
      { role: "Descriptive Analysis Lead", member: "[Member 3]", responsibilities: "Table 1 stratified by FMD status, outcome distribution, the FMD-by-disability-count and FMD-by-income charts, and the descriptive narrative. Reviews the full pipeline with all members." },
      { role: "Modelling Lead", member: "[Member 4]", responsibilities: "Baseline logistic regression, decision tree, random forest, the DECIDE-excluded sensitivity runs, stratified 70/30 split, and the Accuracy/Sensitivity/Specificity/AUROC/AUPRC comparison table. Reviews the full pipeline with all members." },
      { role: "Interpretation & Report Lead", member: "[Member 5]", responsibilities: "Variable-importance interpretation under both specifications, disability-equity framing against Cree 2020, limitations including the required unweighted-sample statement, final report and presentation slides. Reviews the full pipeline with all members." },
    ],
  },
]

// ── Scope-compliance comparison (brief §5 table vs each proposal) ───
import type { ComparisonRow } from './types'

export const scopeComparison: readonly ComparisonRow[] = [
  {
    item: 'Outcome',
    requirement: '1 primary + 1 secondary outcome',
    a: '✓ Primary: poor/fair general health (GENHLTH, 19.7%). Secondary: frequent physical distress (PHYSHLTH ≥14 days, 14.3%)',
    b: '✓ Primary: frequent mental distress (MENTHLTH ≥14 days, 13.9%). Secondary: binge drinking (_RFBING6)',
    c: '✓ Primary: no routine check-up in past year (CHECKUP1, 18.2% in module sample). Secondary: cost barrier (MEDCOST1). Focal predictor: caregiver status (CAREGIV1, 22.2% caregivers)',
  },
  {
    item: 'Predictor variables',
    requirement: 'Maximum 20 predictors',
    a: '✓ 19 - one slot of slack. Cut EMPLOY1 (leakage risk: code 8 = unable to work), MARITAL and _HLTHPL2 (redundancy), CHECKUP1 (it is a Topic C outcome)',
    b: '✓ 20 - exactly at the cap (disability battery ×6 is the Cree et al. angle); any later addition forces a cut',
    c: '✓ 19 - CAREGIV1 added as focal predictor, _URBSTAT dropped (16-state module footprint). MEDCOST1 double-duty resolved as before',
  },
  {
    item: 'Baseline model',
    requirement: '1 regression model',
    a: '✓ Logistic regression with odds ratios and 95% CIs',
    b: '✓ Logistic regression',
    c: '✓ Logistic regression',
  },
  {
    item: 'Machine-learning models',
    requirement: 'Minimum 2 models',
    a: '✓ Decision tree + random forest (gradient boosting optional third)',
    b: '✓ Decision tree + random forest (gradient boosting optional annex)',
    c: '✓ Decision tree + random forest (gradient boosting optional third)',
  },
  {
    item: 'Dataset year',
    requirement: '2024 only',
    a: '✓ 2024 brfss2024_topic_a.csv - 457,670 respondents',
    b: '✓ 2024 brfss2024_topic_b.csv - 457,670 respondents',
    c: '✓ 2024 raw LLCP2024.ASC + topic_c extract merged - 87,098 complete cases in the 16 Caregiver-module states',
  },
  {
    item: 'Survey weights',
    requirement: 'Not used',
    a: '✓ Not used; verbatim limitation statement included',
    b: '✓ Not used; verbatim limitation statement included',
    c: '✓ Not used; verbatim limitation statement included',
  },
  {
    item: 'Smaller variable set',
    requirement: 'Do not use the entire BRFSS dataset',
    a: '✓ 21 of 297 columns (7%)',
    b: '✓ 22 of 297 columns (7%)',
    c: '✓ 22 of 297 columns - incl. self-extracted CAREGIV1 from the raw file',
  },
]

export const strategicComparison: readonly ComparisonRow[] = [
  {
    item: 'Event rate balance',
    requirement: 'Higher = easier classification',
    a: '19.7% - best balanced',
    b: '13.9% - most imbalanced (AUPRC emphasised)',
    c: '18.2% in module sample - near-ideal; caregiver split 15.0% vs 19.1%',
  },
  {
    item: 'Outcome data quality',
    requirement: 'Lower invalid % = cleaner recode',
    a: '0.29% invalid - cleanest single recode',
    b: '88→0 recode needed; 77/99 ~1.8%',
    c: '<1.2% invalid; CAREGIV1 code-8 trap handled (means expects-to-caregive, not none)',
  },
  {
    item: 'Headroom under cap',
    requirement: 'Slack for late additions',
    a: '1 free slot',
    b: '0 free slots - at the cap',
    c: '1 free slot',
  },
  {
    item: 'Literature fit',
    requirement: 'Anchor strength for the 2% criterion',
    a: 'Strongest - near-replication of Jiang 2006 / Healthy Days',
    b: 'Requires the marijuana→FMD pivot judgement call (Cree 2020, Miyakado-Steger 2019 support it)',
    c: 'Strong + distinctive - Schulz & Beach 1999, Bevans & Sternberg 2012, Edwards 2020 (this exact BRFSS module) + Clark 2021',
  },
  {
    item: 'Risk level',
    requirement: 'Lower = safer submission',
    a: 'Lowest, but the most "predictable" choice in a curved cohort',
    b: 'Highest - DECIDE is leakage-adjacent (sensitivity runs planned) and predictor list is at cap',
    c: 'Moderate-low: 16-state module subsample (87k, disclosed) traded for a distinctive counter-intuitive question - the group\'s chosen pick',
  },
]
