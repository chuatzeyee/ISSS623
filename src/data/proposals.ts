import type { Proposal } from './types'

export const proposals: readonly Proposal[] = [
  {
    id: "C",
    topic: "Preventive Care Gap",
    recommended: true,
    title: "Predicting Preventive Care Gaps: Who Misses the Annual Check-Up?",
    question: "Among respondents in the 2024 BRFSS analytic sample, can selected demographic, behavioural, healthcare access, chronic condition, and disability variables predict not having had a routine check-up within the past year? (Secondary: can the same variables predict a cost-related barrier to seeing a doctor?)",
    eventRate: "18.2% (82,313 of 452,336 valid responses; only 1.17% of rows unusable); secondary outcome MEDCOST1 9.5%",
    rationale: [
      "CHECKUP1 is the cleanest outcome available: only 1.17% of the 457,670 rows are unusable (7/9/blank), versus POORHLTH at 41.4% blank from skip logic and _BMI5CAT at 9.4% missing.",
      "The 18.2% event rate is nearly ideal for classification: a meaningful public-health gap that does not require heavy class-imbalance surgery, unlike rarer outcomes.",
      "Bivariate signal verified in the actual CSV is strong and coherent: gap rate 57.8% among uninsured vs 7.6% on Medicare, 62.5% without a personal provider vs 12.1% with one, 38.0% with a cost barrier vs 16.0% without - so models and descriptives will visibly agree.",
      "The outcome is a concrete utilisation behaviour, not a self-perception, making it directly actionable via outreach targeting, reminders, and enrolment - the 'left-shift' argument that the cheapest hospital bed is the one never needed.",
      "Codebook diligence evidence for the 3% feasibility criterion: 2024 renamed insurance to PRIMINS2 (older papers use PRIMINSR/HLTHPLN1), and PRIMINS2 gives insurance TYPE rather than a yes/no flag.",
      "We verified _HLTHPL2 (any coverage) is redundant with PRIMINS2=88 (25,405 of 25,406 no-coverage rows match exactly) and drop it, avoiding variable-list padding.",
      "_INCOMG1 'not reported' is 19.1% of respondents - too large to drop without bias, so it is kept as an explicit category; same treatment for _SMOKER3 code 9 (7.0%) and PRIMINS2 77/99 (4.1%).",
      "topic_c.csv is a 37-column superset containing GENHLTH/PHYSHLTH/MENTHLTH, so the group can pivot to a Topic A outcome without re-extraction if pushed back.",
      "The question resonates locally: Singapore's Healthier SG enrols residents with one regular family doctor, exactly the mechanism our strongest predictor (PERSDOC3) captures.",
      "Models chosen for interpretability per the brief: logistic regression baseline, depth-limited decision tree whose top splits are usable outreach rules, and random forest for interactions - no neural networks or SVMs at N=380k."
    ],
    learning: [
      "LO1 Feasible problem formulation: outcome chosen only after verifying coding and missingness in the actual extract (18.2% event rate, <1.2% invalid), phrased in the brief's prescribed question form.",
      "LO2 Cleaning and feature engineering: the full 7/77 don't-know, 9/99 refused, 88=none, blank=skip-logic taxonomy is handled per variable with documented decisions, including PRIMINS2 insurance-type grouping and MENTHLTH 88-to-0 recoding.",
      "LO3 Descriptive analysis: Table 1 stratified by outcome plus two charts (gap rate by insurance type; gap rate by age band and personal-provider status) that prefigure model findings.",
      "LO4 Baseline plus ML comparison: logistic regression, CART, and random forest compared on one stratified held-out test set with a dummy-classifier honesty row.",
      "LO5 Public-health interpretation: outreach-targeting story, the Healthier SG parallel, and the expected reverse health-status gradient (sicker people have fewer gaps) discussed in predictive, non-causal language.",
      "LO6 Professional communication: the proposal's variable table is already in the final variable-dictionary format so numbers never drift between proposal, slides, and report.",
      "LO7 Teamwork: five named roles with concrete responsibilities and whole-pipeline review by all members."
    ],
    requirements: [
      "Variable dictionary (name/concept/original coding/recode/role): Section 4 table is already in that exact format; the final dictionary is an extension, not a rewrite.",
      "Missingness table with per-variable decisions: drop-if-invalid for <5% variables; category retention for _INCOMG1 (19.1%), _SMOKER3 (7.0%), PRIMINS2 77/99 (4.1%); POORHLTH skip-logic cited as the counter-example avoided.",
      "Data-flow diagram: 457,670 respondents -> 452,336 with valid CHECKUP1 -> 381,759 complete cases (83.4%), verified in pandas, not projected by guesswork.",
      "Table 1 descriptives stratified by outcome plus two charts: gap rate by insurance type, and gap rate by age band and personal-provider status.",
      "Model comparison table: three models x Accuracy/Sensitivity/Specificity/AUROC/AUPRC on one stratified 70/30 held-out test set, with a majority-class dummy row because 18% prevalence makes accuracy alone misleading.",
      "Interpretation questions pre-answerable: access variables expected to dominate; descriptive gap rates (57.8% uninsured, 62.5% no provider) provide the consistency check; extra-data wish-list includes FLUSHOT7 and cost/utilisation linkage.",
      "Required limitation statement quoted verbatim in Section 5: unweighted respondent-level exercise, not nationally representative.",
      "MEDCOST1 dual role resolved cleanly: predictor in the primary model; target (and removed from predictors) in the separate secondary-outcome run."
    ],
    proposal: [
      {
        heading: "1. Project question",
        paragraphs: [
          "Among respondents in the 2024 BRFSS analytic sample, can selected demographic, behavioural, healthcare access, chronic condition, and disability variables predict not having had a routine check-up within the past year? As a secondary question using the same analytic sample and predictor framework, we will examine whether the same variables predict a cost-related barrier to seeing a doctor."
        ],
      },
      {
        heading: "2. Public health motivation",
        paragraphs: [
          "Routine check-ups are the entry point to preventive care: blood-pressure and diabetes screening, vaccination, and early detection all depend on periodic contact with primary care. In our verified extract of the 2024 BRFSS (N = 457,670), 18.2% of respondents with a valid response had no routine check-up in the past year, and the gap is starkly unequal: 57.8% among uninsured respondents versus 7.6% among Medicare respondents, and 62.5% among those without a personal healthcare provider versus 12.1% among those with one. A model that identifies who misses check-ups supports the most actionable of public-health responses - targeted outreach and enrolment - and reflects the 'left-shift' principle that resources spent keeping people connected to primary care are cheaper than the downstream admissions they prevent. The question also resonates beyond the US: Singapore's Healthier SG programme is built on precisely the mechanism our strongest predictor captures - enrolling every resident with one regular family doctor to anchor preventive care."
        ],
      },
      {
        heading: "3. Brief literature context",
        paragraphs: [
          "Clark et al. (2021) used machine learning on BRFSS data to predict poor self-rated health and explicitly framed prediction as a tool for identifying underserved groups, motivating our access-equity angle and our choice of interpretable models. Parekh and Fahim (2021) demonstrated the standard BRFSS modelling recipe we adopt - logistic regression compared against decision tree and random forest classifiers on a binary behavioural outcome. Cree et al. (2020, MMWR) documented how disability status stratifies both distress and healthcare access in BRFSS, motivating our inclusion of the disability battery; the CDC Healthy Days literature (Moriarty, Zack & Kobau 2003) underpins our handling of the day-count measures. We note that 2024 BRFSS renamed the insurance variable to PRIMINS2 (formerly PRIMINSR/HLTHPLN1 in the studies above), which we verified in the 2024 codebook."
        ],
      },
      {
        heading: "4. Outcome variable and proposed predictors",
        paragraphs: [
          "All variables were checked in the 2024 BRFSS codebook and verified in the supplied extract (brfss2024_topic_c.csv, 37 columns). Throughout, 7/77 = don't know, 9/99 = refused, 88 = 'none' in day-count items, blank = not asked. The primary outcome has only 1.17% unusable responses. We propose 19 predictors, deliberately under the 20-variable cap; we excluded PHYSHLTH (near-collinear with GENHLTH), _HLTHPL2 (verified redundant with PRIMINS2 = 88), and MARITAL, CHCCOPD3, CHCKDNY2 (weaker marginal contribution) to keep the model lean and interpretable. The full variable table with original coding and recodes accompanies this proposal.",
          "Data flow: 457,670 respondents -> 452,336 with a valid primary outcome -> projected 381,759 complete cases (83.4%) after the per-variable decisions (verified in pandas). MEDCOST1 serves as a predictor in the primary model; in the secondary analysis it becomes the target and is removed from the predictor set. _DENVST3 (no dental visit, 31.1%) is retained for descriptive comparison only, since its refused/missing responses are folded into a single code; FLUSHOT7 is not in our extract, so immunisation outcomes are out of scope."
        ],
        bullets: [
          "Healthcare access (3): PRIMINS2 insurance type, PERSDOC3 personal provider, MEDCOST1 cost barrier - the policy levers, with verified gap-rate spreads of 50, 50 and 22 percentage points",
          "Health status (2): GENHLTH, MENTHLTH (88 recoded to 0 days)",
          "Chronic conditions (2): DIABETE4, _MICHD - chronic diagnosis anchors people into recall systems",
          "Disability (3): DIFFWALK, DECIDE, DIFFALON - three distinct mechanisms for missing appointments (mobility, cognition, errand-independence)",
          "Behaviours (2): _SMOKER3 (code 9 kept as not-reported), _TOTINDA",
          "Demographics/SES (7): SEXVAR, _AGEG5YR, _RACEGR3, _EDUCAG, _INCOMG1 (19.1% not-reported kept as category), EMPLOY1, _URBSTAT"
        ],
      },
      {
        heading: "5. Planned models and analysis",
        paragraphs: [
          "We will (i) clean and recode per the variable table, documenting every missing/refused/inapplicable decision in a missingness table and data-flow diagram; (ii) produce Table 1 descriptives stratified by outcome plus two charts (gap rate by insurance type; gap rate by age band and personal-provider status); (iii) fit a baseline logistic regression for interpretable odds ratios; (iv) fit two machine-learning models - a depth-limited decision tree (CART) for transparent decision rules and a random forest for nonlinear interactions and permutation importance (gradient boosting optional); (v) evaluate all models on a single stratified held-out test set (70/30) using Accuracy, Sensitivity, Specificity, AUROC and AUPRC, with a majority-class dummy baseline reported because the 18% event rate makes accuracy alone misleading; and (vi) interpret: which variables matter most, whether they make public-health sense, whether they are consistent with the descriptives, limitations, and what additional data would help. No neural networks will be used; interpretability is prioritised throughout. Survey weights (_LLCPWT) will not be used.",
          "\"This project is an unweighted respondent-level predictive modelling exercise using the 2024 BRFSS analytic sample. The results should not be interpreted as nationally representative prevalence estimates.\""
        ],
      },
      {
        heading: "6. Team role allocation",
        paragraphs: [
          "Roles are allocated across the five members as listed in the role table. All members review the full pipeline end-to-end; no artefact is owned by one person alone.",
          "References: Clark CR, et al. J Gen Intern Med 2021;36(5):1181-1188. Parekh T, Fahim F. Drug Alcohol Depend 2021;225:108789. Cree RA, et al. MMWR 2020;69(36). Moriarty DG, Zack MM, Kobau R. Health Qual Life Outcomes 2003;1:37. CDC, 2024 BRFSS Codebook (LLCP)."
        ],
      },
    ],
    variables: [
      { concept: "No routine check-up within past year", variable: "CHECKUP1", role: "Outcome", original: "1 within 1yr; 2 within 2yr; 3 within 5yr; 4 5+ yr; 8 never; 7 DK; 9 refused", recode: "1 -> 0; 2/3/4/8 -> 1; 7/9/blank -> missing (1.17%)" },
      { concept: "Cost barrier to seeing a doctor", variable: "MEDCOST1", role: "Secondary outcome", original: "1 yes; 2 no; 7 DK; 9 refused", recode: "1 -> 1; 2 -> 0; 7/9 -> missing (0.37%); also used as predictor in the primary model" },
      { concept: "Primary insurance type", variable: "PRIMINS2", role: "Predictor", original: "1-10 coverage types; 88 none; 77 DK; 99 refused (2024 rename of PRIMINSR)", recode: "Groups: employer(1)/private(2)/Medicare(3,4)/Medicaid-state(5,6,9)/military-IHS(7,8)/other-gov(10)/uninsured(88)/not-reported(77,99; 4.1%)" },
      { concept: "Personal healthcare provider", variable: "PERSDOC3", role: "Predictor", original: "1 one; 2 more than one; 3 none; 7 DK; 9 refused", recode: "1/2 -> 1 (has provider); 3 -> 0; 7/9 -> missing" },
      { concept: "Self-rated general health", variable: "GENHLTH", role: "Predictor", original: "1 excellent - 5 poor; 7 DK; 9 refused", recode: "Ordinal 1-5; 7/9 -> missing" },
      { concept: "Mentally unhealthy days (past 30)", variable: "MENTHLTH", role: "Predictor", original: "1-30 days; 88 none; 77 DK; 99 refused", recode: "88 -> 0; keep 0-30; 77/99 -> missing" },
      { concept: "Diabetes diagnosis", variable: "DIABETE4", role: "Predictor", original: "1 yes; 2 pregnancy-only; 3 no; 4 pre-diabetes; 7 DK; 9 refused", recode: "1 -> 1; 2/3/4 -> 0; 7/9 -> missing" },
      { concept: "Coronary heart disease or MI", variable: "_MICHD", role: "Predictor", original: "1 yes; 2 no; blank", recode: "1 -> 1; 2 -> 0; blank -> missing (1.1%)" },
      { concept: "Serious difficulty walking", variable: "DIFFWALK", role: "Predictor", original: "1 yes; 2 no; 7 DK; 9 refused; blank", recode: "1 -> 1; 2 -> 0; else missing (~4%)" },
      { concept: "Difficulty concentrating/remembering/deciding", variable: "DECIDE", role: "Predictor", original: "1 yes; 2 no; 7 DK; 9 refused; blank", recode: "1 -> 1; 2 -> 0; else missing (~4%)" },
      { concept: "Difficulty doing errands alone", variable: "DIFFALON", role: "Predictor", original: "1 yes; 2 no; 7 DK; 9 refused; blank", recode: "1 -> 1; 2 -> 0; else missing (~4.5%)" },
      { concept: "Smoking status", variable: "_SMOKER3", role: "Predictor", original: "1 daily; 2 some days; 3 former; 4 never; 9 missing", recode: "Current(1,2)/former(3)/never(4)/not-reported(9; 7.0% kept as category)" },
      { concept: "Any leisure-time physical activity", variable: "_TOTINDA", role: "Predictor", original: "1 yes; 2 no; 9 missing", recode: "1 -> 1; 2 -> 0; 9 -> missing (0.3%)" },
      { concept: "Sex", variable: "SEXVAR", role: "Predictor", original: "1 male; 2 female", recode: "As is (no missing)" },
      { concept: "Age group", variable: "_AGEG5YR", role: "Predictor", original: "1-13 five-year bands; 14 unknown/refused", recode: "Bands 1-13; 14 -> missing (1.8%)" },
      { concept: "Race/ethnicity group", variable: "_RACEGR3", role: "Predictor", original: "1-5 groups; 9 missing", recode: "Groups 1-5; 9 -> missing (2.0%)" },
      { concept: "Education level", variable: "_EDUCAG", role: "Predictor", original: "1-4 levels; 9 missing", recode: "Levels 1-4; 9 -> missing (0.5%)" },
      { concept: "Income group", variable: "_INCOMG1", role: "Predictor", original: "1-7 income bands; 9 not reported", recode: "Levels 1-7 + not-reported(9) kept as explicit category (19.1% - too large to drop)" },
      { concept: "Employment status", variable: "EMPLOY1", role: "Predictor", original: "1-8 statuses; 9 refused; blank", recode: "Employed(1,2)/unemployed(3,4)/homemaker-student(5,6)/retired(7)/unable(8); 9/blank -> missing" },
      { concept: "Urban/rural residence", variable: "_URBSTAT", role: "Predictor", original: "1 urban; 2 rural; blank", recode: "1 -> urban; 2 -> rural; blank -> missing (3.2%)" },
      { concept: "No dental visit within past year (descriptive comparison only)", variable: "_DENVST3", role: "Subgroup", original: "1 yes visit; 2 no; 9 DK/refused/missing (folded into one code)", recode: "Descriptive comparison only, not an outcome (31.1% no-visit rate; code-9 quirk prevents clean missingness handling)" },
    ],
    roles: [
      { role: "Data Preparation Lead", member: "[You]", responsibilities: "Codebook verification (incl. 2024 renames such as PRIMINS2), recoding per the variable dictionary, missingness table and per-variable decisions, data-flow diagram, analytic-sample construction (the 6% final-report criterion)" },
      { role: "Project & Proposal Lead", member: "[Member 2]", responsibilities: "Timeline and coordination, proposal drafting, GitHub repo and Colab management, submission logistics" },
      { role: "Descriptive Analysis Lead", member: "[Member 3]", responsibilities: "Table 1 stratified descriptives, the two charts (gap rate by insurance type; gap rate by age band and provider status), bivariate gap-rate checks that anchor model interpretation" },
      { role: "Modelling Lead", member: "[Member 4]", responsibilities: "Logistic regression baseline, decision tree and random forest, stratified 70/30 train/test protocol, model comparison table across Accuracy/Sensitivity/Specificity/AUROC/AUPRC" },
      { role: "Interpretation & Report Lead", member: "[Member 5]", responsibilities: "Public-health interpretation (variable importance, consistency with descriptives), limitations incl. the required unweighted-sample statement, final report and presentation assembly" },
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
