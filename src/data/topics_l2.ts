import type { Session } from './types'

export const l2Sessions: readonly Session[] = [
  {
    id: 5,
    title: 'Lecture 2 · Segment 1 - Problem Framing & Data Design',
    subtitle: 'From problem statement to data design',
    topics: [
      {
        title: 'Framing the analytics problem - the 5-element checklist',
        summary:
          'Data design starts with the problem statement. Before touching data, Dr Lam frames every analytic question against five elements. Missing any one produces a mis-specified study - the single most common failure in healthcare analytics.',
        points: [
          '1. Target population: which patient group should the answer apply to, and for whom must the findings be valid or generalisable?',
          '2. Intervention / Exposure: is there a specific exposure or intervention whose effect we wish to estimate? (In pure prediction problems there is often none.)',
          '3. Outcome: what clinical outcome(s) are we considering? If multiple, name the PRIMARY outcome vs the SECONDARY outcomes explicitly.',
          '4. Predictor variables (a.k.a. independent, non-interventional variables): which variables are relevant and should be included; which are confounders that MUST be included; which should be omitted?',
          '5. Time frame: when should the answer hold true; when do we intervene / apply the model / use the knowledge; and how long does the outcome take to manifest?',
          'The checklist forces you to distinguish prediction (no assigned intervention) from causal estimation before choosing a design.',
        ],
        tip: 'Memorise the order Population → Exposure → Outcome (primary vs secondary) → Predictors (include / confounders / omit) → Time frame. It maps almost 1:1 onto a PICOT-style frame and is prime MCQ material.',
        important:
          'The primary-vs-secondary outcome distinction and the confounder-vs-omit predictor distinction are the two points examiners love. A confounder must be INCLUDED; a variable that leaks the outcome must be OMITTED.',
        relatedTerms: ['Target population', 'Confounder', 'Primary outcome', 'Time frame', 'Predictor variables'],
      },
      {
        title: 'Worked framing examples: utilisation, readmission, COPD',
        summary:
          'The deck applies the 5-element checklist to three concrete questions. These worked tables show how the same frame is reused and how leakage variables are handled - directly relevant to your BRFSS check-up-gap group project.',
        points: [
          'Healthcare utilisation ("which patients become high users?"): target = adults 18+ with ≥1 outpatient/primary-care visit; exposure = prior utilisation (ED visits, admissions in prior 12 months); primary outcome = high utilisation next 12 months (top 10% of cost OR ≥3 ED visits); time frame = use 2025 data to predict 2026.',
          'Secondary outcomes for utilisation: number of ED visits, inpatient admissions, total bed days, total cost.',
          'Readmission risk ("which discharged patients are at higher 30-day readmission risk?"): target = adults discharged alive from medical wards; primary outcome = unplanned readmission within 30 days; predict AT THE POINT OF DISCHARGE using only information available up to discharge.',
          'Readmission "variables to omit or handle carefully": post-discharge events, variables only known after readmission, and discharge codes that directly encode the outcome - these cause data leakage.',
          'COPD case study reframes an ambiguous question into a clean prediction question: "Among patients diagnosed with COPD, which PRE-diagnostic clinical features and utilisation patterns are associated with high disease severity at diagnosis?" - observational, no assigned intervention.',
          'Note the COPD "exposure" is better described as pre-diagnostic predictors / indexed features, not an intervention, because nothing is assigned by the research team.',
        ],
        tip: 'For your BRFSS check-up-gap outcome, mirror the utilisation frame: define the target population, fix a time frame, and quarantine any variable that could leak the check-up outcome.',
        relatedTerms: ['Data leakage', '30-day readmission', 'Prediction problem', 'Reframing the question'],
      },
      {
        title: 'What kind of problem: correlation vs causal, and study designs',
        summary:
          'The deck separates the KIND of question (correlational vs causal) from the DESIGN used to answer it, then lays out the observational-to-experimental spectrum with increasing rigour and internal validity.',
        points: [
          'Correlational questions: exploratory analysis / descriptive statistics, and association of an intervention with one or more outcomes.',
          'Causal questions: policy effects (e.g. COVID vaccination adoption) and effects of new operational policies (high-risk-patient models, readmissions, ICU LOS, surgery durations, ED LOS).',
          'Observational studies: primary vs secondary observational data; more time- and money-efficient than experiments; simple statistics can reveal insights before rigorous trials; bias and error must always be considered.',
          'Design decision hinges on two questions: was exposure ASSIGNED (experimental) or NOT (observational); and WHEN were outcomes determined relative to exposure?',
          'Cross-sectional study: exposure and outcome assessed at the SAME time (the date of the cross section is the index date); no follow-up; descriptive; can suggest but NOT establish causal relationships.',
          'Cohort study - 4 tenets: (1) cohort with clear inclusion/exclusion criteria, (2) exposure, (3) outcome, (4) time period; prospective (start → future), retrospective (outcome already occurred → look back), or ambispective (both).',
          'Data acquisition sources named: EMR, disease registries, open source, questionnaires, surveys.',
        ],
        important:
          'Case-control studies are NOT in scope - the Reference-Text slide explicitly excludes them from Chapter 7. Do not spend quiz effort on case-control odds-ratio mechanics.',
        relatedTerms: ['Cross-sectional study', 'Cohort study', 'Prospective', 'Retrospective', 'Ambispective', 'Observational data'],
      },
      {
        title: 'Experimental spectrum: non-experimental → quasi → RCT & pragmatic trials',
        summary:
          'A single "increasing rigour and internal validity" arrow orders three design families, then RCT variants show how real-world constraints are reconciled with scientific rigour.',
        points: [
          'Non-experimental: measure outcomes before and after a programme; NO comparison group.',
          'Quasi-experimental: measure outcomes for participants and non-participants WITHOUT random assignment; there IS a comparison group; controls for bias; researcher has no control over the experiment (natural setting).',
          'Experimental (RCT): measure outcomes for treatment AND control groups; participants RANDOMISED; explicit comparison group - highest internal validity.',
          'Cluster RCT: unit of randomisation is a cluster (clinic, hospital, village) - used when you cannot direct the intervention to individuals or cannot prevent contamination between them.',
          'Stepped-wedge cluster RCT: random and sequential crossover of clusters from control to intervention until all are exposed; potential confounding by temporal trends; reconciles managers/policymakers needing to implement with the need for rigorous evaluation.',
          'Rule of thumb: randomisation + explicit comparison group = strongest causal claim; before/after with no comparison = weakest.',
        ],
        tip: 'Pragmatic designs (cluster and stepped-wedge) exist precisely because you often cannot randomise individuals in a live health system - a favourite "why not just do an RCT?" exam angle.',
        relatedTerms: ['Quasi-experimental', 'RCT', 'Cluster RCT', 'Stepped-wedge', 'Internal validity'],
      },
      {
        title: 'Data design in observational studies: discovery → accessible → target',
        summary:
          'The central data-design diagram nests three populations and defines validity in terms of generalisation across them. This is the conceptual backbone of Segment 1 and a near-certain quiz item.',
        points: [
          'Discovery sample: where the model is built (e.g. all ED visits by adults 18+ at Hospital A in 2025) - used to train, test, and estimate performance.',
          'Accessible population: what we can realistically learn about (e.g. all adult ED visits across the hospital cluster with linked EHR data).',
          'Target population: what we ultimately want to learn about (e.g. all adult ED visits in all public and private hospitals across Singapore).',
          'Definition of a valid solution: one that is TRUE in the discovery sample AND remains true in (i.e. generalises to) the accessible and target populations.',
          'Generalisation #1 = internal validation: does the model generalise within the cluster (across hospitals)?',
          'Generalisation #2 = external validation: does the model generalise to all hospitals in the target population?',
          'Acquiring data in practice: identify a domain expert as collaborator and request a data dictionary + sample dataset early - "what you observe at the data-capture process may not be what you get from the data warehouse".',
        ],
        important:
          'Learn the ladder discovery ⊂ accessible ⊂ target and match internal validation to the accessible population and external validation to the target population.',
        relatedTerms: ['Discovery sample', 'Accessible population', 'Target population', 'Internal validation', 'External validation', 'Data dictionary'],
      },
      {
        title: 'Bias, Simpson’s Paradox and Garbage-In-Garbage-Out',
        summary:
          'Bias can enter at every stage of the analytics lifecycle. The deck maps five bias-entry points and illustrates confounding with the 1973 UC Berkeley Simpson’s Paradox case.',
        points: [
          'Stage 1 - Data collection/generation: survival bias, ascertainment (informed-presence) bias, recall bias, non-contemporaneous control bias.',
          'Stage 2 - Data processing/preparation: cherry-picking (selective inclusion), data dredging (data snooping), gerrymandering (arbitrary grouping), measurement/information bias.',
          'Stage 3 - Descriptive/diagnostic analysis: reverse causation, Simpson’s Paradox, confounding bias, multiple comparisons.',
          'Stage 4 - Predictive analysis/modelling: overfitting, underfitting (high bias), data leakage, gambler’s fallacy, class imbalance / prevalence bias.',
          'Stage 5 - Prescriptive / decision support & feedback: McNamara fallacy (over-relying on surrogates), Hawthorne effect, automation bias, feedback (self-reinforcing) bias.',
          'Simpson’s Paradox: UC Berkeley 1973 - overall men 44% vs women 35% admitted looked like sex discrimination, but department-by-department women were admitted at similar or higher rates; the aggregate reversed the subgroup trend (women applied to more competitive departments).',
          'Garbage-In-Garbage-Out: a perfect model on garbage data gives garbage results, and a garbage model on perfect data also gives garbage results - data quality and model quality both matter.',
        ],
        tip: 'If a quiz shows an aggregate trend reversing when you split by subgroup, name Simpson’s Paradox and the lurking confounder.',
        important:
          'Data leakage and class imbalance both sit in the MODELLING stage - relevant to your BRFSS project where the check-up-gap outcome may be imbalanced.',
        relatedTerms: ['Simpson’s Paradox', 'Confounding', 'Survival bias', 'Data leakage', 'Class imbalance', 'GIGO'],
      },
    ],
  },
  {
    id: 6,
    title: 'Lecture 2 · Segment 2 - Data Management & Preparation',
    subtitle: 'Common data models, wrangling, feature engineering, CKD lab',
    topics: [
      {
        title: 'Data management pillars and the health-data lifecycle',
        summary:
          'Before analysis, healthcare data must be managed. The deck lists five management considerations and situates them in a five-stage health-data lifecycle running from capture to disposal.',
        points: [
          'Data quality: rules and policies so data meets the business definition; safeguards to ensure quality AT SOURCE.',
          'Data processing: Extract-Load-Transform from multiple sources into a unified single source of truth; data standards and interoperability.',
          'Metadata management: metadata is structured data that describes the data; ensures findability, accessibility and reusability.',
          'Data governance: ethics and compliance to data/IT-security policies; acceptable-use policies, informed consent, ethics approval; storage/archival policies and data-sharing agreements.',
          'Data privacy and security: network/IT and endpoint security; privacy preservation.',
          'Health-data lifecycle (AHIMA): 1 Data Capture (record accurately, standardise at point of capture) → 2 Processing (clean, validate, integrate) → 3 Data Use (secure access, sharing, analysis) → 4 Storage & Archival → 5 Disposal (retention/disposal policies) - all around "Better Decisions, Better Health".',
          'Real-world Singapore context: legacy EDW/eHINTS built on OMOP CDM; public sector moving to the cloud-based AI platform HEALIX (from June) and NGEMR as the national EMR, integrating via HL7 v2, FHIR, Epic APIs and DICOM.',
        ],
        tip: '"Standardise at the point of capture" and "quality at source" are the cheapest ways to prevent downstream garbage - a recurring theme linking to GIGO.',
        relatedTerms: ['ETL', 'Metadata', 'Data governance', 'HEALIX', 'NGEMR', 'FHIR', 'Interoperability'],
      },
      {
        title: 'Data processing stacks: SQL vs R vs Python task-fit',
        summary:
          'A single task-by-tool table (Johnson, Simon & Aliferis, Ch.8) tells you which language fits which step. Learn the pattern, not just the cells: SQL owns extraction, R/Python own modelling.',
        points: [
          'Data extraction from a warehouse / data mart: SQL = ++ (purpose-built), Python = + (good), R = O (possible but not recommended).',
          'Data transformation / creating data-design features: SQL, R and Python are all + (all good).',
          'Feature engineering: SQL = − (not designed for it), R = ++, Python = ++.',
          'Modeling: SQL = −, R = ++, Python = ++.',
          'Visualization: SQL = −, R = ++, Python = ++.',
          'Notation key: − not designed for the task; O possible but not recommended; + good; ++ specifically designed to do it efficiently.',
          'Best practices: create and maintain a repeatable data pipeline per project; document every transformation for reproducibility and auditability; use Jupyter Notebook or R Markdown to combine narrative, code, output and visualisations in one place.',
          'The project-specific data pipeline: Data Sources → Data Extraction (query/read, initial validation) → Data Transformation (clean, join, handle missing, create features) → Modeling Dataset (train/validate/test), producing DQ reports, summary tables, visualisations, metadata and data lineage - with an "iterate and improve" loop.',
        ],
        tip: 'Exam shortcut: SQL is best at pulling data out of the warehouse; R and Python are best at feature engineering, modelling and visualisation. SQL scores − on all three of those.',
        relatedTerms: ['SQL', 'R', 'Python', 'Data pipeline', 'Jupyter Notebook', 'Reproducibility'],
      },
      {
        title: 'Common data models & standardised clinical vocabularies',
        summary:
          'A common data model lets definitions be shared across projects and organisations. OMOP (by OHDSI) is the exemplar; standardised vocabularies sit at three levels of granularity for three different purposes.',
        points: [
          'Common Data Model purpose: shared definitions/specifications across projects and organisations; facilitates collaboration; supports clinical trials, drug/disease surveillance and safety monitoring.',
          'OMOP CDM v5.4 by OHDSI (Observational Health Data Sciences and Informatics) is the headline example - standardises structure so analytics port across sites.',
          'Clinical terminologies (SNOMED CT): polyhierarchical, 100,000s of concepts + >1M relationships; dynamic and granular; support DIRECT clinical care and semantic interoperability at the point of care.',
          'Classifications (ICD-9, ICD-10, DRG): mono-hierarchical, stable, grouped mutually-exclusive concepts (10,000s); support SECONDARY use - statistical reporting, financing, activity-based costing, registries, epidemiology.',
          'Resource groups (DRG / AR-DRG): 100s of groups; stable and often nation-specific; support health-system management, resource management and healthcare financing.',
          'Other systems: CPT (US procedure codes, five digits, 3 categories), TOSP (Singapore Table of Surgical Procedures, ranked 1A–7C by severity), SDD (Singapore Drug Database); mapping between standards is "not an exact science" and needs clinical + contextual domain knowledge.',
          'Data-management principles: FAIR (Findable, Accessible, Interoperable, Reusable - 2016) for scientific data, and TRUST (Transparency, Responsibility, User focus, Sustainability, Technology - 2020) for digital repositories.',
        ],
        important:
          'Match the level to its purpose: SNOMED CT = granular, direct clinical care; ICD = classification for statistics/reporting; DRG = resource groups for financing/management. Translating ICD-9 → ICD-10 can introduce artificial discontinuities.',
        relatedTerms: ['OMOP CDM', 'OHDSI', 'SNOMED CT', 'ICD-10', 'DRG', 'TOSP', 'FAIR', 'TRUST'],
      },
      {
        title: 'Data wrangling, understanding, profiling and reshaping',
        summary:
          'Preparation dominates the timeline. The Prepare–Analyze–Apply pipeline shows 60–80% of effort is preparation; profiling and reshaping are core sub-steps before any modelling.',
        points: [
          'Effort split: Prepare (ask questions, acquire, organise, clean, visualise) = 60–80% of time; Analyze + Apply (find patterns/relationships, filter, summarise, generate insights, communicate) = 20–40% (Forbes 2016 - cleaning is the most time-consuming, least enjoyable task).',
          'Data understanding checklist: size, source, format, quality/integrity, what the fields mean, where bias could arise, and "can it answer the question?"',
          'Data-preparation steps (9 tiles): reshaping; merge/join/concatenate; data profiling; handle missing values; handle incorrect/noisy values; handle outliers; handle duplicates; rescale/recode/aggregate; feature engineering.',
          'Data profiling (an often-missed first step): check record counts across variables, statistical distribution (SD, IQR, mean/median, skewness, support, outliers, missingness, correlations), and validate expected ranges (e.g. plausible BMI or dosage) WITH domain experts before analysis.',
          'Reshaping - Long/Normalized format: one fact/observation per row (patient + date + lab type), compact and best for storing detailed healthcare events; patients have multiple rows.',
          'Reshaping - Wide/Unnormalized format: one row per patient/encounter/sampling unit, data spread across many columns, best for analysis, modelling and reporting; missing values appear where a patient lacked a test.',
          'Python reshaping: pivot() or pivot_table() for Long→Wide (use pivot_table() with an aggregation rule such as mean/first/last when duplicates exist for the same patient-date-lab); pd.melt() for Wide→Long.',
        ],
        tip: 'If a single patient can have two glucose results on the same day, pivot() fails - you need pivot_table() with an aggfunc. That specific gotcha is on a slide.',
        relatedTerms: ['Data profiling', 'Long format', 'Wide format', 'pivot_table', 'pd.melt', 'IQR'],
      },
      {
        title: 'Feature engineering, encoding, rescaling and aggregation',
        summary:
          '"Applied machine learning is basically feature engineering" (Andrew Ng). The deck covers categorical encoding, rescaling (normalisation vs standardisation), binning/aggregation, and clinically-informed derived features.',
        points: [
          'Feature engineering = using domain knowledge to create features that make ML/data-mining algorithms work; mostly manual, difficult and time-consuming; rescaling/normalisation/standardisation are forms of "naïve" feature engineering.',
          'Categorical encoding: Boolean, one-hot/dummy (each category an indicator 0/1, one reference category, e.g. reference = Brown stool colour), and label encoding (a unique integer per category) - label encoding is NOT recommended when the integers imply false ordinal information.',
          'Contrast/dummy coding in regression: reference = Mild, so β0 = expected value for Mild, β1 = difference Moderate−Mild, β2 = difference Severe−Mild - makes coefficients easy to interpret.',
          'Rescale = consistent functional transformation (e.g. Celsius→Fahrenheit, log). Normalise = divide by a norm / rescale to a fixed range so variables on different scales are comparable (e.g. Age [0,100] vs Income [0,100000]). Standardise (z-score) = transform to mean 0, SD 1 via z = (x − μ)/σ.',
          'When to use which: Normalisation when distribution is unknown/non-Gaussian or the algorithm makes no distributional assumption (k-means, neural networks) - but outliers bias the scaling, so consider Robust Scaler. Standardisation when the distribution is roughly Gaussian (linear regression, LDA, logistic regression). Other transforms: log, Box-Cox.',
          'Aggregation by binning: convert continuous values into meaningful categories (e.g. Age → child/young-adult/middle-age/older-adult; medicine dose → low/medium/high per GINA thresholds). Advanced methods like entropy-based binning exist, but bins should match the healthcare DECISION problem, not just statistical convenience.',
          'Aggregation by summarising repeated measurements: turn many rows into features (First/Last/Mean/Max/Min/Range/Count/Sum) - e.g. BP variability, mean HbA1c over 6 months and first-minus-latest change, monthly ED attendance totals.',
          'Clinically-informed features: scoring systems compress several features into one interpretable score (e.g. NEWS); Charlson Comorbidity Index (weighted, 19-item original) and Elixhauser (no weights, separate indicators, ~30–31 comorbidities from administrative data) - always report which version and cite it.',
        ],
        tip: 'Standardisation is required before k-means (Gaussian-agnostic distance-based); it prevents high-range variables like income from dominating the clustering. This links straight to Segment 3.',
        important:
          'Normalisation vs standardisation is a classic MCQ: normalise for range/scale-invariance and non-Gaussian/distance-based algorithms; standardise (z-score, mean 0 SD 1) for Gaussian-assuming statistical models.',
        relatedTerms: ['One-hot encoding', 'Label encoding', 'Standardisation', 'Normalisation', 'Robust Scaler', 'Binning', 'Charlson Comorbidity Index'],
      },
      {
        title: 'Missing data and outlier handling',
        summary:
          'Understanding WHY data are missing is as valuable as filling them. The deck teaches missingness reasons, the MCAR/MAR/MNAR mechanism taxonomy, imputation options, and Tukey-fence outlier detection.',
        points: [
          'Reasons for missingness: Structural (data was never meant to be collected, e.g. no spirometry at a vaccination encounter); Inadvertent (should have been captured but was not - extraction errors, process/patient/system issues); Data-quality issues (collected but implausible, e.g. BMI > 100, or a date stored as a text integer code).',
          'Missingness mechanisms - MCAR: probability of missingness is unrelated to other variables AND to the value of Y itself (missing completely at random).',
          'MAR: missingness has a systematic relationship with one or more OTHER measured variables (missing at random given observed data).',
          'MNAR: probability of missingness depends on the VALUE itself (e.g. HbA1c > 10 tends to be missing) - the hardest and most dangerous case.',
          'Handling methods: complete-case / listwise deletion (easy but biased unless truly MCAR); single imputation (mean, median, stochastic regression - can introduce bias); multiple imputation (create multiple datasets and pool estimates - R MICE, Python scikit-learn IterativeImputer).',
          'Missingness indicators: a flag for whether a value is missing lets the model learn if missingness itself is predictive.',
          'Good practice: report ALL missingness (quantify what, where, why if known, and how handled); stay curious - missingness can reveal workflow problems and improve data management.',
          'Outliers: distinguish outliers from extreme values (an extreme tail value is only a POTENTIAL outlier). Boxplot is a key tool; Tukey fence flags values below Q1 − A·IQR or above Q3 + A·IQR (A = 1.5 per Tukey 1977, 2.2 per Hoaglin & Iglewicz 1987). Handle by deleting (set missing) or transforming to the next non-outlier value.',
        ],
        important:
          'Know the three mechanisms cold: MCAR (unrelated to anything), MAR (related to other observed variables), MNAR (related to the missing value itself). MNAR biases naive imputation most.',
        relatedTerms: ['MCAR', 'MAR', 'MNAR', 'Multiple imputation', 'MICE', 'Tukey fence', 'IQR', 'Boxplot'],
      },
      {
        title: 'Hands-on lab: Chronic Kidney Disease (CKD) data preparation',
        summary:
          'Segment 2 closes with a Python lab on the UCI Chronic Kidney Disease dataset in Google Colab, applying the preparation concepts end to end. No coding is examined, but the concepts are.',
        points: [
          'Dataset: UCI Chronic Kidney Disease - 400 unique patients/rows, 25 fields = 24 features + 1 target (class: CKD vs not-CKD); missing values present in nearly every feature. Donated by Dr P. Soundarapandian, Apollo Hospitals, Karaikudi, Tamil Nadu, India.',
          'Feature types are mixed: integers (age, bp, bgr, bu, sod, pcv, wbcc), continuous (sc serum creatinine, pot potassium, hemo haemoglobin, rbcc red-blood-cell count), categorical (sg specific gravity, al albumin, su sugar) and binary (rbc, pc, pcc, ba, htn, dm, cad, appet, pe, ane).',
          'Access: Google Colab → File → Open Notebook → GitHub → the ISSS623-AHA repo → Lecture_2_Lab1_CKD.ipynb.',
          'Practice concepts, in order: 1 drop duplicates, 2 missing-value imputation, 3 recoding, 4 rescaling.',
          'Useful pandas idioms shown: apply, map, lambda, groupby, and profiling with ckd.describe().',
          'The lab is deliberately AI-assisted: prompts like "explain this function ckd.describe()" or explaining ckd[ckd.duplicated(subset=None)].sort_values(by=[\'age\']) model how to use an AI copilot to learn wrangling.',
          'CKD flow ties the whole segment together: profile → deduplicate → impute missing → recode categoricals → rescale numeric features, producing a clean modelling dataset (and later the clustering input in Segment 3).',
        ],
        tip: 'Quiz 1 (1 Aug) has NO coding questions, but the CKD flow (dedupe → impute → recode → rescale) and why each step matters is fair game.',
        relatedTerms: ['CKD dataset', 'Google Colab', 'Imputation', 'Recoding', 'Rescaling', 'pandas'],
      },
    ],
  },
  {
    id: 7,
    title: 'Lecture 2 · Segment 3 - Machine Learning & Clustering',
    subtitle: 'ML in healthcare, unsupervised patient segmentation',
    topics: [
      {
        title: 'What machine learning is, and the ML workflow',
        summary:
          'ML models the relationship between explanatory features X and an outcome Y as Y = F(X, ε). The deck lays out the end-to-end workflow and warns that "training/validation/test" means different things to statisticians and ML practitioners.',
        points: [
          'General idea: ML considers the relation between a set of explanatory features (X) and the response/outcome variable(s) (Y): Y = F(X, ε), where ε is irreducible error.',
          'Workflow stages: Data Acquisition → Data Preparation → Analysis & Model Development → Model Evaluation → Model Deployment.',
          'Model training: build a model from existing algorithms (hundreds exist, each with parameter settings); requires hyperparameter tuning on the training/validation set.',
          'Model evaluation: assess performance and diagnose "what is wrong?" during validation and testing; TEST data is data unseen by the model (out-of-sample).',
          'Model improvement loop: get more data? better algorithm? - domain knowledge and experience are essential here.',
          'The workflow diagram shows data source splitting into training and test data, feeding model training/validation, then display/conclude, with feedback arrows for hyperparameter tuning and model improvement.',
          'Caution slide: statisticians and ML practitioners use "training / validation / test" differently - be explicit about which split you mean.',
        ],
        tip: 'Test data must stay unseen until final evaluation - reusing it for tuning leaks information and inflates performance (links to the data-leakage bias from Segment 1).',
        relatedTerms: ['Y = F(X, ε)', 'Hyperparameter tuning', 'Training/validation/test', 'Out-of-sample', 'Model deployment'],
      },
      {
        title: 'ML taxonomy: supervised, unsupervised, reinforcement',
        summary:
          'The Generic Classes tree divides ML into three families. Lecture 2 covers only a subset of biomedical methods; the emphasis this week is unsupervised learning.',
        points: [
          'Supervised learning: learns from LABELLED data (input → known output). Sub-types: regression (predict a continuous value - linear/non-linear) and classification (predict a category - binary or multi-class).',
          'Unsupervised learning: finds patterns in UNLABELLED data (input only). Sub-types: clustering (group similar points) and association (relationships between variables, e.g. market-basket analysis).',
          'Reinforcement learning: learns by interacting with an environment to maximise cumulative reward - "with data" (real interaction data: treatment optimisation, resource allocation, personalised care pathways) or "without data" (simulation: policy evaluation, ED-flow simulation, epidemic control).',
          'Biomedical ML methods map onto Predictive Modeling (regression, classification, time-to-event) and Exploratory Analysis (density estimation, outlier detection, clustering).',
          'In-scope methods this course: regression (OLS, GLM incl. logistic/Poisson, DT, SVM, ANN/DL, kNN, NB, BN, penalised regression, boosting/GBM/RF, kernel methods) and clustering (hierarchical, k-means, bisecting k-means, SNN).',
          'EXCLUDED this course: time-to-event / survival methods (KM, Nelson-Aalen, Cox PH, AFT, random survival forest, frailty models).',
        ],
        important:
          'Supervised = labels available (Y known); Unsupervised = labels inferred (Y = "?"). The supervised-vs-unsupervised table with an "Outcome" column of 1/0 vs "?" is a likely exam figure.',
        relatedTerms: ['Supervised learning', 'Unsupervised learning', 'Reinforcement learning', 'Classification', 'Clustering', 'Association'],
      },
      {
        title: 'Supervised vs unsupervised: labels available vs inferred',
        summary:
          'A paired data-table figure crystallises the difference: supervised learning has a known outcome column; unsupervised learning has the same features but the outcome is unknown and must be discovered.',
        points: [
          'Supervised setup: rows are patients, columns are features X (SBP, temperature, ...), and there is a known outcome Y (1/0 per patient) the model learns to predict.',
          'Unsupervised setup: identical feature matrix X, but the outcome column is "?" - there are no labels, so the algorithm must find structure itself.',
          'Classification (supervised) - "outcome labels are AVAILABLE": use it when data can be tagged, categorised or separated into known groups (the apples-vs-oranges decision-boundary illustration).',
          'Clustering (unsupervised) - "labels are INFERRED": the algorithm discovers groupings/patterns in the data with no pre-existing labels.',
          'Practical implication: supervised needs a labelled ground truth (expensive to obtain in healthcare); unsupervised can run on raw feature matrices but its output needs clinical interpretation to be meaningful.',
          'Your BRFSS group project is supervised (predicting the check-up-gap outcome); the CKD clustering lab is unsupervised (segmenting patients with no target).',
        ],
        tip: 'If the prompt gives you a known target column to predict, it is supervised; if you are asked to "discover subgroups/segments" with no target, it is unsupervised clustering.',
        relatedTerms: ['Labelled data', 'Ground truth', 'Classification', 'Clustering', 'Decision boundary'],
      },
      {
        title: 'Clustering methods and k-means mechanics',
        summary:
          'Clustering methods split into hierarchical and partitioning families; k-means is the partitioning exemplar taught in the StatQuest pre-class video. Know its five-step iterative loop.',
        points: [
          'Hierarchical clustering: initially each point is its own cluster, then repeatedly combine the two "closest" clusters into one (agglomerative, bottom-up) - visualised as a dendrogram; hierarchical is self-study via video.',
          'Partitioning method: maintain a set of clusters and place each point into the "closest" cluster - example: K-means.',
          'K-means step 1: the value of K is decided IN ADVANCE and K seeds/centroids are assigned RANDOMLY.',
          'Step 2: each observation (point/row) is allocated to the closest seed, producing K clusters.',
          'Step 3: compute the centroid of each cluster to use as the new seed.',
          'Step 4: reassign each observation to the new clusters based on distance to the new seeds.',
          'Step 5: iterate steps 2–4 until a stopping criterion is met - in practice 5 to 25 iterations usually reaches a stable solution.',
          'Because k-means is distance-based, feature rescaling (standardisation) is mandatory so no single variable dominates.',
        ],
        tip: 'K-means requires you to fix K before running and starts from random seeds, so results can vary by initialisation - a common exam point vs hierarchical clustering, which does not need K up front.',
        relatedTerms: ['Hierarchical clustering', 'Partitioning', 'K-means', 'Centroid', 'Seed', 'Dendrogram'],
      },
      {
        title: 'Choosing K, the elbow method, and other clustering algorithms',
        summary:
          'How many clusters? The deck uses inertia (within-cluster sum of squares) and the elbow method to choose K, and shows that different algorithms suit different data shapes.',
        points: [
          'Inertia = within-cluster sum of squares; it always decreases as K increases (more clusters fit the data more tightly).',
          'Elbow method: plot inertia vs number of clusters and pick K at the "elbow" where adding another cluster yields diminishing reduction in inertia.',
          'K-means guidelines: rescale ALL variables; for highly skewed variables apply log or square-root transforms to reduce skew; always check for outliers (they bias rescaling - consider Robust Scaler, or remove outliers so a transform may not be needed).',
          'Other transformations named: log, Box-Cox, square-root, and advanced techniques such as Generalized Estimating Equations.',
          'Other clustering algorithms (scikit-learn comparison on toy datasets): MiniBatch K-Means, Affinity Propagation, MeanShift, Spectral Clustering, Ward, Agglomerative, DBSCAN, Birch, Gaussian Mixture - performance differs by data geometry (rings, moons, blobs).',
          'No single algorithm wins on all shapes: k-means struggles with non-convex shapes (rings/moons) where DBSCAN or spectral clustering succeed.',
        ],
        important:
          'Inertia is the within-cluster sum of squares and the elbow point is the chosen K - the classic "how do you choose K?" MCQ answer.',
        relatedTerms: ['Inertia', 'Elbow method', 'Within-cluster sum of squares', 'DBSCAN', 'Gaussian Mixture', 'Robust Scaler'],
      },
      {
        title: 'Patient segmentation: real-world clustering use cases',
        summary:
          'Unsupervised learning powers patient segmentation. The deck frames it with the 5-element checklist (adapted) and shows three published clustering studies plus t-SNE for visualisation.',
        points: [
          'Segmentation framing (unsupervised): target = adults 18+ with ≥1 outpatient/primary-care visit; intervention/exposure = NONE required; outcomes = NOT used to build clusters (may describe/validate them later); variables for clustering = age, chronic-condition count, ED visits, admissions, medication count, no-show rate, HbA1c, eGFR, prior cost; time frame = cluster on 2025 data, examine 2026 utilisation afterward.',
          'Key design shift: in unsupervised segmentation the outcome is deliberately held OUT of the clustering and used only post-hoc to characterise or validate the segments.',
          'Medication patterns (Barcelona, older adults with multimorbidity): cross-sectional EHR from 50 primary-care centres, multiple correspondence analysis + k-means, stratified by sex and age - found 6 medication patterns across 8 anatomical groups.',
          'COVID-19 symptom clusters (COVID Symptom Study app, Science Advances): unsupervised clustering of symptom time series found six distinct "types" of COVID-19 (flu-like no fever, flu-like with fever, gastrointestinal, and three severity levels) - could predict need for respiratory support.',
          'High-cost patient segmentation (Medicare Advantage top-decile spenders, n=6154): compared connectivity-based (agglomerative), centroid-based (k-medoids) and density-based (OPTICS) clustering; post-hoc discriminative models identify which variables distinguish each cluster.',
          't-SNE dimension-reduction algorithm projects high-dimensional patient data into 2-D so clusters can be visualised (used both in the Medicare study and the CKD lab).',
        ],
        tip: 'Post-hoc discriminative modelling ("what distinguishes this cluster from the rest?") is how you make an unlabelled clustering clinically actionable - a strong point for a caregiver-angle BRFSS segmentation.',
        relatedTerms: ['Patient segmentation', 't-SNE', 'k-medoids', 'Medication patterns', 'Post-hoc discrimination', 'Multimorbidity'],
      },
      {
        title: 'Lab 2 (CKD clustering) and Lecture 2 key takeaways',
        summary:
          'The final lab clusters CKD-positive patients, and the closing slide states the three learning outcomes near-verbatim. This is the highest-yield revision anchor for the 1 Aug quiz.',
        points: [
          'Lab 2 objective: identify clusters of CKD patients (among those who HAVE CKD) and describe the clinical characteristics of each cluster; data = 400 patients / 25 attributes, of which 250 have CKD (Apollo Hospitals CKD dataset).',
          'Lab 2 steps: 1 use only the numeric columns; 2 visualise the distribution of numeric columns; 3 standard-scale the data BEFORE k-means; 4 evaluate the optimal number of clusters (elbow); 5 visualise clusters with reduced dimensionality (t-SNE); 6 basic interpretation of the clusters. Notebook: Lecture_2_Lab2_Clustering.ipynb in the ISSS623-AHA repo.',
          'Key Takeaway 1: Frame healthcare problems and design appropriate data structures for analysis.',
          'Key Takeaway 2: Prepare, clean and manage healthcare data - the steps to generate insights from data.',
          'Key Takeaway 3: Understand the role of machine learning in healthcare, with emphasis on unsupervised learning.',
          'These three takeaways map exactly onto the three segments: problem framing/data design (S1), data management/preparation (S2), and ML/clustering (S3).',
          'Course-position note: Lecture 2 sits between Lecture 1 (data-science value chain, clinical-grade AI lifecycle) and Lectures 3–4 (data analysis and modelling) - problem framing → data design → first-pass analysis.',
        ],
        important:
          'Formative Quiz 1 is on 1 August: 20 MCQs, online via eLearn, 45 minutes, 20% weightage, covering Lectures 1–2 (and the Ch.7 & Ch.8 readings). NO coding questions.',
        relatedTerms: ['CKD clustering', 'Standard scaling', 'Elbow method', 't-SNE', 'Key takeaways', 'Quiz 1'],
      },
    ],
  },
]
