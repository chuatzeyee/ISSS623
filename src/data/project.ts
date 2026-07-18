import type {
  BrfssTopicOption,
  DeadlineItem,
  ProjectRole,
  ProjectStep,
  ResourceLink,
  RubricRow,
  ScopeItem,
} from './types'

// ── Assessment deadlines ────────────────────────────────────────────
export const deadlines: readonly DeadlineItem[] = [
  {
    date: '2026-07-18',
    what: 'Mini structured debate on ageing - participation counts from this date (participation assessed Weeks 1–4)',
    weight: '15% (participation)',
  },
  {
    date: '2026-07-25',
    what: 'Group project proposal - max 2 pages excluding annexes: project question, public health motivation, literature context, outcome + predictors, planned models, role allocation',
    weight: '10%',
  },
  {
    date: '2026-08-01',
    what: 'Quiz 1 - covers healthcare landscape, health data ecosystem, and assigned readings (Aliferis & Simon ch.1 & 6, Liu et al. 2025)',
    weight: '20%',
  },
  {
    date: '2026-08-15',
    what: 'Quiz 2, plus final group presentation (20 minutes + 10 minutes Q&A, 8–10 slides recommended)',
    weight: '25% (Quiz 2) + presentation (part of 20% presentation & final)',
  },
  {
    date: '2026-08-21',
    what: 'Final submission - report (2,500–3,500 words), reproducible notebook, slides, collaterals - plus SPOT peer evaluation form',
    weight: '20% (final) + 10% (peer evaluation)',
  },
]

// ── Required project scope (Group Project Brief, section 5) ─────────
export const scope: readonly ScopeItem[] = [
  {
    item: 'Outcome',
    scope: '1 primary outcome only (or a justified composite) + 1 optional secondary outcome - prevents proliferation of models',
  },
  {
    item: 'Predictor variables',
    scope: 'Maximum 20 predictors, drawn from demographics, behaviours, healthcare access, chronic conditions, and disability',
  },
  {
    item: 'Baseline model',
    scope: '1 regression model - logistic regression recommended; use linear regression only if the outcome is continuous',
  },
  {
    item: 'Machine-learning models',
    scope: 'Minimum 2 models in addition to the baseline - decision tree (interpretability), random forest or gradient boosting (stronger nonlinear); SVM optional; neural nets not recommended without prior experience',
  },
  {
    item: 'Dataset year',
    scope: '2024 BRFSS only (unless there are documented reasons to explore other years) - 457,670 respondents, 297 columns',
  },
  {
    item: 'Survey weights',
    scope: 'NOT used (_LLCPWT ignored) - interpret results as findings from your analytic sample, NOT nationally representative estimates; a limitation statement is required',
  },
]

// ── Suggested BRFSS project topics (Group Project Brief, section 4) ─
export const topicOptions: readonly BrfssTopicOption[] = [
  {
    id: 'A',
    title: 'High Health Burden',
    exampleQuestion: 'Can BRFSS respondent characteristics predict high health burden?',
    outcomes: [
      'Poor or fair self-rated general health (GENHLTH recoded good/better vs fair/poor)',
      'Frequent physical distress (PHYSHLTH ≥14 unhealthy days vs <14)',
      'Frequent mental distress (MENTHLTH ≥14 unhealthy days vs <14)',
      'Activity limitation due to poor physical or mental health (POORHLTH)',
      'Simple composite outcome combining two or more HRQOL indicators',
    ],
    variables: [
      'GENHLTH',
      'PHYSHLTH',
      'MENTHLTH',
      'POORHLTH',
      'CHECKUP1',
      'MEDCOST1',
      '_AGE80',
      '_EDUCAG',
      '_INCOMG1',
      'EMPLOY1',
      'DIABETE4',
      '_MICHD',
      '_SMOKER3',
      '_TOTINDA',
      '_HLTHPL2',
      '_BMI5CAT',
    ],
    literature:
      'Jiang, Hesser & Williams (2006, Health Qual Life Outcomes 4:14) - Rhode Island 2002 BRFSS linking HRQOL indicators (fair/poor health, physically/mentally unhealthy days, activity limitation) to demographics, health behaviours and risks; see also Moriarty, Zack & Kobau (2003) on the CDC Healthy Days measures.',
    whyItMatters:
      'Health-related quality of life is the CDC’s core population health surveillance construct; predicting high burden lets groups combine predictors across demographics, behaviours, access, chronic conditions and socioeconomic position. Variables listed here match the header of the prof-supplied brfss2024_topic_a.csv (457,670 respondents, 29 columns).',
  },
  {
    id: 'B',
    title: 'Mental Health / Substance Use',
    exampleQuestion:
      'Can demographic, behavioural, healthcare access, chronic disease, and disability variables predict mental health issues among BRFSS respondents?',
    outcomes: [
      'Frequent mental distress (MENTHLTH ≥14 days)',
      'Daily or near-daily marijuana use (optional module - availability varies by state)',
      'Heavy drinking (_RFDRHV9) or binge drinking (_RFBING6) calculated flags',
      'Current smoking (_SMOKER3) or current e-cigarette use (_CURECI3)',
    ],
    variables: [
      'MENTHLTH',
      '_SMOKER3',
      '_CURECI3',
      '_RFBING6',
      '_RFDRHV9',
      'DEAF',
      'BLIND',
      'DECIDE',
      'DIFFWALK',
      'DIFFALON',
      '_AGEG5YR',
      '_EDUCAG',
      '_INCOMG1',
      'EMPLOY1',
      'MEDCOST1',
      '_HLTHPL2',
    ],
    literature:
      'Parekh & Fahim (2021, Drug and Alcohol Dependence 225:108789) - pooled 2016–2019 BRFSS; logistic regression, decision tree, random forest and Naive Bayes to predict daily marijuana use. Also Cree et al. (2020, MMWR 69(36)) on frequent mental distress by disability status.',
    whyItMatters:
      'Substance use is associated with mental health, behavioural risk factors, healthcare access, social position and chronic disease burden, and Parekh & Fahim provide a direct methodological precedent for respondent-level BRFSS ML. Caution: marijuana questions sit in state-dependent optional modules and are NOT in the pre-extracted topic B file - the supplied outcome set centres on MENTHLTH plus smoking/vaping/drinking calculated flags; extract module fields yourself if you want them.',
  },
  {
    id: 'C',
    title: 'Preventive Care Gap',
    exampleQuestion: 'Can BRFSS respondent characteristics predict whether a respondent has a preventive care gap?',
    outcomes: [
      'No routine check-up in the past year (CHECKUP1)',
      'Cost-related barrier to seeing a doctor (MEDCOST1)',
      'No recent dental visit (_DENVST3)',
      'No recent flu vaccination (FLUSHOT7 - NOT in the pre-extracted topic C file; extract it yourself with BRFSS_Extraction.ipynb)',
    ],
    variables: [
      'CHECKUP1',
      'MEDCOST1',
      '_DENVST3',
      'PRIMINS2',
      'PERSDOC3',
      '_HLTHPL2',
      '_AGEG5YR',
      '_EDUCAG',
      '_INCOMG1',
      'EMPLOY1',
      'GENHLTH',
      'DIABETE4',
      '_URBSTAT',
    ],
    literature:
      'Clark et al. (2021, J Gen Intern Med 36(5):1181–1188) - machine-learning models predicting self-rated health from BRFSS, stratified by age, race/ethnicity and sex; a methodological precedent for respondent-level prediction with health-equity framing.',
    whyItMatters:
      'Gaps in preventive care and access flag populations at risk of late diagnosis and higher downstream acute-care cost - the "move care left" argument from Lecture 1. Insurance (PRIMINS2 - note the 2024 name; older papers say PRIMINSR), cost barriers and socioeconomic variables make this a natural access-equity story. Variables listed here are verified against the header of the prof-supplied brfss2024_topic_c.csv.',
  },
]

// ── Project playbook (brief sections 6–9 + suggested workflow) ──────
export const steps: readonly ProjectStep[] = [
  {
    title: 'Get the data - the prof now supplies everything (v3 "Project Guidance" slide)',
    detail:
      'BRFSS is a CDC + US states/territories telephone survey of health risk behaviours, chronic conditions, healthcare access and preventive service use. The v3 slides added a Project Guidance page: dataset, codebook, a parsed variable dictionary, per-topic pre-extracted CSVs and sample extraction code are all provided.',
    actions: [
      'Download LLCP2024ASC.zip from the CDC (41.5 MB zip - extracts to a 922 MB fixed-width ASCII file; never commit or email the extracted file)',
      'Get the codebook: codebook24_llcp-v2-508.zip (HTML inside) - or use the prof’s parsed brfss2024_variable_dictionary.csv (variable, label, column positions, type)',
      'Start from the pre-extracted topic files in the course repo (Lecture 1 folder): brfss2024_topic_a.csv (29 cols), brfss2024_topic_b.csv (33 cols), brfss2024_topic_c.csv (37 cols) - each with all 457,670 respondents',
      'Study BRFSS_Extraction.ipynb (fixed-width parsing driven by the variable dictionary) so you can extract EXTRA fields beyond the suggested ones - the slide says "You may go beyond these suggestions"',
      'Do NOT submit the full raw dataset - create and document a smaller working dataset instead',
    ],
  },
  {
    title: 'Choose the topic, define the outcome, and select ≤20 predictors',
    detail:
      'Pick one feasible predictive question (Topic A/B/C or your own, justified). Choose exactly one primary outcome (optionally one secondary or a justified composite) and a manageable predictor set spanning demographics, behaviours, access, chronic conditions and disability.',
    actions: [
      'Check in the codebook that the outcome variable is actually available and usable in 2024 (common mistake #1)',
      'Cap the predictor list at 20; prefer variables used in the anchor literature',
      'Beware optional modules - they vary by state and shrink the analytic sample',
      'Assign each variable a role: outcome, predictor, or subgroup variable',
      'Agree the general question form: "Among respondents in the 2024 BRFSS analytic sample, can selected demographic, behavioural, healthcare access, chronic condition, and disability variables predict [outcome]?"',
    ],
  },
  {
    title: 'Build a variable dictionary and recode responsibly',
    detail:
      'You must demonstrate you understand every variable you use. BRFSS quirks: 7/77 = "Don’t know / Not sure", 9/99 = "Refused", BLANK = not asked or missing. Data preparation and variable handling is worth 6% - the single largest final-rubric criterion.',
    actions: [
      'For each variable record: BRFSS name, concept, original coding, your recoded version, and its role (outcome/predictor/subgroup)',
      'Recode outcomes to clear binaries, e.g. GENHLTH → good/better vs fair/poor; MENTHLTH → ≥14 vs <14 days',
      'Map 7/77 and 9/99 codes to missing before any modelling - never treat them as real values',
      'Keep recoding simple, transparent and defensible; cite references for cut-points (e.g. CDC frequent-distress ≥14 days)',
      'Add an entity-relationship diagram for your working database if needed',
    ],
  },
  {
    title: 'Handle missing and refused responses with a missingness table',
    detail:
      'A simple missingness table is required: variable, role, missing/refused/unknown count, percentage, and decision. A good project does not need sophisticated missing-data methods, but it must show missing, refused and skipped responses were handled intentionally.',
    actions: [
      'Tabulate missing/refused/unknown counts and percentages for every selected variable',
      'Record an explicit decision per variable: exclude missing outcome rows, keep, exclude unknown/refused, or impute (e.g. MICE for income)',
      'Draw a data-flow diagram from raw BRFSS (457,670 respondents) to the final analytic cohort, showing each exclusion',
      'Document respondent counts before and after every exclusion step',
    ],
  },
  {
    title: 'Descriptive analysis of the analytic sample',
    detail:
      'Describe the sample before modelling (4% of grade). Because survey weights are not used, always describe results as characteristics of the analytic sample, never as US population estimates.',
    actions: [
      'Report number and percentage of respondents with the outcome',
      'Produce a Table 1 summarising key demographics and predictor/outcome variables',
      'Compare outcome status across selected predictors (the recode → groupby → rate pattern from Lecture_1.ipynb)',
      'Include at least two clear charts or tables',
      'Check descriptive patterns now - later you must confirm model findings are consistent with them',
    ],
  },
  {
    title: 'Build the baseline regression model',
    detail:
      'One baseline regression is mandatory - logistic recommended (linear only for a continuous outcome), with a modest set of relevant predictors. Its purpose is an interpretable benchmark, not perfection.',
    actions: [
      'Split data into training and testing sets before fitting anything',
      'Fit logistic regression on a modest, justified predictor subset',
      'Interpret: direction of association, statistical significance, practical importance, and model limitations',
      'Keep coefficient/odds-ratio outputs for comparison against ML feature importance later',
    ],
  },
  {
    title: 'Build at least two machine-learning models',
    detail:
      'Minimum 2 ML models beyond the baseline. Recommended: decision tree (interpretability), random forest or gradient boosting (stronger nonlinear). SVM optional; neural networks not recommended unless the group has prior experience. Emphasis is on understanding, not maximising accuracy.',
    actions: [
      'Train the same train/test split used for the baseline so comparison is fair',
      'Limit tuning to basics: maximum tree depth, minimum samples per leaf, number of trees in a random forest',
      'Extract feature importances to compare with the regression coefficients',
      'Be able to explain every model you use - using advanced models you cannot explain is a listed common mistake',
    ],
  },
  {
    title: 'Evaluate and compare models',
    detail:
      'A model comparison table on the held-out test set is required: accuracy, sensitivity, specificity, AUROC, AUPRC (and calibration where relevant). High accuracy is not required; correct evaluation and interpretation are.',
    actions: [
      'Build the comparison table: baseline logistic vs each ML model across accuracy, sensitivity, specificity, AUROC, AUPRC',
      'State which model performed best and whether the difference is practically meaningful',
      'Check sensitivity/specificity trade-offs at your chosen classification threshold, especially with an imbalanced outcome',
      'Comment on calibration or class imbalance if the outcome prevalence is low',
    ],
  },
  {
    title: 'Interpret findings in public health terms',
    detail:
      'Explain what the models suggest - which variables mattered, whether results make public health sense, consistency with descriptives, limitations, and what extra data would help. Avoid causal language: a cross-sectional prediction exercise does not support "X causes Y".',
    actions: [
      'Answer the five required interpretation questions: importance, public-health sense, consistency with descriptives, limitations, additional data',
      'Include the required limitation statement: unweighted respondent-level exercise on the 2024 BRFSS analytic sample, not nationally representative prevalence estimates',
      'Frame findings as hypothesis-generating and pattern-identifying, useful for further public health analysis',
      'Never write that a predictor "causes" the outcome',
    ],
  },
  {
    title: 'Assemble deliverables and submit peer evaluation',
    detail:
      'Final package: report (2,500–3,500 words), reproducible Jupyter notebook (a GitHub repo with a proper README is acceptable), 8–10 presentation slides for the 20 + 10 min session, and the SPOT peer evaluation. Collateral completeness is worth 2%.',
    actions: [
      'Follow the 10-part report structure: title/question, background, dataset & variables, cleaning & recoding, missingness handling, descriptives, modelling approach, evaluation & interpretation, limitations, conclusions & learning points',
      'Make the notebook reproducible end-to-end: import → variable selection → cleaning → recoding → descriptives → modelling → evaluation → interpretation',
      'Explain carefully how any submitted working dataset was derived from the raw BRFSS file',
      'Prepare slides covering question, why it matters, variables, cleaning decisions, descriptives, models, evaluation, limitations, takeaways',
      'Submit the SPOT peer evaluation: Supportive/Proactive/Openness/Thorough at 15% each + participation, quantity, quality, useful ideas at 10% each',
    ],
  },
]

// ── Suggested group roles (brief section 8, ~6 people) ──────────────
export const roles: readonly ProjectRole[] = [
  {
    role: 'Project and proposal lead',
    responsibility:
      'Frames the research question, reviews the anchor literature, and writes the 2-page proposal due 25 Jul',
  },
  {
    role: 'Data preparation lead',
    responsibility:
      'Reviews the 2024 codebook, selects variables, builds the variable dictionary, handles recoding (7/77, 9/99, BLANK) and missing values - owns the 6% data-prep criterion',
  },
  {
    role: 'Descriptive analysis lead',
    responsibility:
      'Produces Table 1, summary tables, charts, the data-flow diagram, and the analytic-sample description',
  },
  {
    role: 'Modelling lead',
    responsibility:
      'Builds the baseline logistic regression and the 2+ machine-learning models; owns the train/test split and the model comparison table',
  },
  {
    role: 'Interpretation and report lead',
    responsibility:
      'Interprets results in public health terms, writes the 2,500–3,500-word report, and prepares the presentation slides - smaller groups combine roles; larger groups may share one',
  },
]

// ── Week 2 proposal rubric (10% total) ──────────────────────────────
export const proposalRubric: readonly RubricRow[] = [
  {
    criterion: 'Problem framing and motivation',
    weight: '2%',
    expectation:
      'Clearly explains the selected public health / healthcare analytics problem, why it matters, and why BRFSS is suitable for studying it',
  },
  {
    criterion: 'Data feasibility and variable selection',
    weight: '3%',
    expectation:
      'Identifies a feasible outcome and a manageable predictor set; variables must exist in the 2024 BRFSS codebook, with awareness of coding, missingness and recoding needs - the largest proposal criterion',
  },
  {
    criterion: 'Preliminary literature or background justification',
    weight: '2%',
    expectation:
      'Briefly summarises relevant prior work (e.g. the anchor papers), public health context, or a practical gap motivating the project',
  },
  {
    criterion: 'Proposed analysis plan',
    weight: '2%',
    expectation:
      'Realistic plan covering data cleaning, missing/refused handling, descriptive analysis, baseline regression, two machine-learning models, evaluation, and interpretation',
  },
  {
    criterion: 'Team organisation and role allocation',
    weight: '1%',
    expectation:
      'Explains how work is divided, with clear roles for data preparation, analysis, modelling, interpretation, and presentation',
  },
]

// ── Week 5 final rubric (20% total) ─────────────────────────────────
export const finalRubric: readonly RubricRow[] = [
  {
    criterion: 'Data preparation and variable handling',
    weight: '6%',
    expectation:
      'Selects appropriate variables, recodes them clearly, handles missing/refused/skipped responses responsibly, and documents key decisions - the single biggest final criterion',
  },
  {
    criterion: 'Descriptive analysis and sample understanding',
    weight: '4%',
    expectation:
      'Describes the analytic sample, outcome distribution, and key predictors with clear tables, charts, and concise interpretation',
  },
  {
    criterion: 'Model development, evaluation and interpretation',
    weight: '4%',
    expectation:
      'Builds an appropriate baseline (logistic/linear) regression plus suitable ML models; evaluates with appropriate metrics and explains key predictors; interpretation clear, cautious, and connected to the problem statement',
  },
  {
    criterion: 'Reporting and presentation',
    weight: '4%',
    expectation:
      'Reporting and presentation are clear, organised, and professionally executed, acknowledging the important limitations of this predictive modelling exercise',
  },
  {
    criterion: 'Completeness of collaterals',
    weight: '2%',
    expectation:
      'Submits all required materials - final report, analysis notebook, slides, peer evaluation - complete, readable, well-organised, and mutually consistent (full raw BRFSS dataset not required)',
  },
]

// ── Key resources ───────────────────────────────────────────────────
export const resources: readonly ResourceLink[] = [
  {
    label: 'LLCP2024ASC.zip - the dataset the prof asked you to download (41.5 MB zip, extracts to 922 MB ASCII)',
    url: 'https://www.cdc.gov/brfss/annual_data/2024/files/LLCP2024ASC.zip',
  },
  {
    label: '2024 codebook zip (HTML file inside) - codebook24_llcp-v2-508.zip',
    url: 'https://www.cdc.gov/brfss/annual_data/2024/zip/codebook24_llcp-v2-508.zip',
  },
  {
    label: 'BRFSS_Extraction.ipynb - prof’s sample extraction code (also produces the topic A/B/C CSVs)',
    url: 'https://github.com/ISSS623-AHA/ISSS623_2024/blob/main/Lecture%201/BRFSS_Extraction.ipynb',
  },
  {
    label: 'CDC BRFSS index (survey overview and data portal)',
    url: 'https://www.cdc.gov/brfss/index.html',
  },
  {
    label: '2024 BRFSS annual data page (dataset, codebook, calculated variables, data quality report)',
    url: 'https://www.cdc.gov/brfss/annual_data/annual_2024.html',
  },
  {
    label: 'Course GitHub repository (ISSS623-AHA/ISSS623_2024 - lecture notebooks and Group_Project folder)',
    url: 'https://github.com/ISSS623-AHA/ISSS623_2024',
  },
  {
    label: 'Google Colab (open Lecture_1.ipynb from GitHub, hosted runtime, Drive mounting)',
    url: 'https://colab.research.google.com/',
  },
  {
    label: 'GitHub Desktop (clone the course repo; pull at session start, commit + push at session end)',
    url: 'https://desktop.github.com/',
  },
]
