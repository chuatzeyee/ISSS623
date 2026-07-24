import type { Definition } from './types'

/**
 * Lecture 2 - Applied Healthcare Analytics (Dr Sean Lam, 2026)
 * Problem framing & data design -> data management, CDM, preparation &
 * feature engineering -> intro to ML & unsupervised learning (clustering).
 * New glossary terms only; terms already defined in definitions.ts
 * (DIKW, LHS, EHR, OMOP, i2b2, RE-AIM, Feature engineering, Supervised vs
 * unsupervised learning, Logistic regression, pandas basics, etc.) are not repeated.
 */
export const l2Definitions: readonly Definition[] = [
  // ── Segment 1: Problem framing & data design ──────────────────────
  {
    term: 'Framing the Analytics Problem',
    definition:
      "Lecture 2's opening framework: before touching data, specify five design elements - (1) target population, (2) intervention/exposure, (3) outcome(s), (4) predictor variables, and (5) time frame. Doing this turns a vague clinical question (e.g. 'which patients become high hospital users?') into a precise, analysable problem statement.",
    category: 'Analytics & AI',
    related: ['Target population', 'Prediction horizon', 'DIKW pyramid'],
  },
  {
    term: 'Target population',
    definition:
      'The set of patients to whom the answer or model should apply and generalise - every member must be at risk of the outcome. Example from the deck: adults aged 18+ with at least one outpatient or primary-care visit, for a high-utilisation risk model.',
    category: 'Analytics & AI',
    related: ['Framing the Analytics Problem', 'Accessible population & discovery sample'],
  },
  {
    term: 'Accessible population & discovery sample',
    definition:
      'Because we rarely have data on the entire target population, we work with an accessible population (patients actually reachable, e.g. those seen at specific centres) and draw a discovery sample from it to build the model. A valid solution holds true in the discovery sample AND generalises to the accessible and target populations - generalisability from discovery to accessible is internal validity, further to target is external validity.',
    category: 'Analytics & AI',
    related: ['Target population', 'Selection bias'],
  },
  {
    term: 'Intervention / Exposure',
    definition:
      'The treatment, policy, or factor whose effect we wish to estimate. In pure prediction problems there is no assigned intervention (observational); the exposure of interest may instead be prior ED visits, discharge complexity, or pre-diagnostic features, as in the COPD-severity example.',
    category: 'Analytics & AI',
    related: ['Framing the Analytics Problem', 'Observational study'],
  },
  {
    term: 'Primary vs secondary outcome',
    definition:
      'The primary outcome is the single main clinical result the study is powered to answer (e.g. unplanned readmission within 30 days); secondary outcomes are additional results examined in support (e.g. ED visit within 30 days, 90-day readmission, post-discharge cost, 30-day mortality). Defining which is primary keeps the analysis focused.',
    category: 'Analytics & AI',
    related: ['Framing the Analytics Problem', 'Prediction horizon'],
  },
  {
    term: 'Predictor variable (covariate)',
    definition:
      'Also called independent, non-interventional variables - the inputs relevant to the analysis (age, sex, comorbidity count, prior admissions, abnormal labs, etc.). Framing asks which variables to include, which are confounders that must be included, and which to omit (e.g. anything only knowable after the outcome).',
    category: 'Analytics & AI',
    related: ['Confounder', 'Feature engineering'],
  },
  {
    term: 'Confounder',
    definition:
      'A variable that influences both the exposure and the outcome, distorting their apparent relationship if uncontrolled; the deck stresses confounders must be included as predictors. Confounding by indication is a special case where the reason a treatment is given also independently causes the outcome.',
    category: 'Analytics & AI',
    related: ['Predictor variable (covariate)', 'Simpson’s paradox'],
  },
  {
    term: 'Prediction horizon (time frame)',
    definition:
      'The temporal design of the question: when the answer must hold, when the model will be applied, and how long the outcome takes to manifest. Example: use 1 Jan-31 Dec 2025 data to predict high utilisation over 1 Jan-31 Dec 2026, using only information available at the prediction point (e.g. discharge).',
    category: 'Analytics & AI',
    related: ['Framing the Analytics Problem', 'Primary vs secondary outcome'],
  },
  {
    term: 'Primary vs secondary (observational) data',
    definition:
      'Primary data is collected first-hand for the specific study; secondary data is repurposed from existing sources such as EHRs, disease registries, questionnaires, or open datasets. Observational studies are cheaper and faster than experiments, and simple statistics on secondary data can reveal insight before rigorous trials - the group project reuses 2024 BRFSS as secondary data.',
    category: 'Data Ecosystem',
    related: ['Observational study', 'BRFSS'],
  },
  {
    term: 'Observational study',
    definition:
      'A design where exposure is not assigned by the researcher; the deck classifies the three the reading covers by when outcomes are determined relative to exposure - cohort (some time after), cross-sectional (same time), and case-control (before, and explicitly out of scope). Bias and error must always be considered.',
    category: 'Analytics & AI',
    related: ['Cross-sectional study', 'Cohort study'],
  },
  {
    term: 'Cross-sectional study',
    definition:
      'Assesses exposure and disease/outcome simultaneously at a single point in time, on a sample independent of exposure and disease status, with no follow-up. It is descriptive - it characterises a community and suggests possible relationships for further research, but cannot establish causality (the index date is the cross-section date).',
    category: 'Analytics & AI',
    related: ['Observational study', 'Cohort study'],
  },
  {
    term: 'Cohort study',
    definition:
      'Follows a group sharing a common characteristic over time (longitudinal), defined by four tenets: the cohort with clear inclusion/exclusion criteria, the exposure, the outcome, and the time period. Groups are compared by exposure status to observe who develops the outcome.',
    category: 'Analytics & AI',
    related: ['Prospective / retrospective / ambispective cohort', 'Observational study'],
  },
  {
    term: 'Prospective / retrospective / ambispective cohort',
    definition:
      'Cohort variants differing by directionality: prospective starts before outcomes occur and follows into the future (e.g. PRESTO preconception study); retrospective looks back at outcomes already recorded (e.g. COVID hospital case series); ambispective combines both, using historical data plus forward follow-up.',
    category: 'Analytics & AI',
    related: ['Cohort study'],
  },
  {
    term: 'Randomised controlled trial (RCT) & pragmatic designs',
    definition:
      'The reference experimental design: participants are randomly assigned to intervention vs control, maximising internal validity. Pragmatic variants relax constraints - a cluster RCT randomises groups (clinics, hospitals, villages) when individual assignment risks contamination, and a stepped-wedge cluster RCT rolls clusters sequentially from control to intervention until all are exposed (watch for confounding by temporal trends).',
    category: 'Analytics & AI',
    related: ['Experimental vs quasi-experimental vs non-experimental design'],
  },
  {
    term: 'Experimental vs quasi-experimental vs non-experimental design',
    definition:
      'A spectrum of increasing rigour/internal validity: non-experimental measures outcomes before/after with no comparison group; quasi-experimental has a comparison group but no random assignment and often runs in a natural setting (controls for bias); experimental (RCT) randomises to treatment and control with an explicit comparison group.',
    category: 'Analytics & AI',
    related: ['Randomised controlled trial (RCT) & pragmatic designs'],
  },
  {
    term: 'Selection bias',
    definition:
      'A (often latent) factor causes certain patients to enter or leave the sample, creating an artefactual difference between the accessible and target populations and harming generalisability. Guard against it by constructing the accessible population to represent the target, and the discovery sample to represent the accessible population.',
    category: 'Analytics & AI',
    related: ['Accessible population & discovery sample', 'Simpson’s paradox'],
  },
  {
    term: 'Simpson’s paradox',
    definition:
      'A trend that appears in aggregate data reverses (or vanishes) when the data is split by a confounding subgroup. The deck’s UC Berkeley 1973 admissions example: men appeared admitted at a higher rate overall (44% vs 35%), yet within most individual departments women were admitted at equal or higher rates - a caution against naive aggregate comparisons.',
    category: 'Analytics & AI',
    related: ['Confounder', 'Selection bias'],
  },

  // ── Segment 2: Data management, CDM, preparation & feature engineering ──
  {
    term: 'Common data model (CDM)',
    definition:
      'A shared, standard data model that a data warehouse and its derivative marts conform to, so definitions and specifications are portable across projects and organisations. This facilitates collaboration and supports clinical trials, drug/disease surveillance and safety monitoring - OMOP (by OHDSI) is the flagship example used in the deck.',
    category: 'Data Ecosystem',
    related: ['OMOP', 'Data warehouse', 'Standardised clinical vocabularies'],
  },
  {
    term: 'Data warehouse',
    definition:
      'A common location (also called a data repository) that consolidates all the data an organisation needs from many sources, built for a broad purpose and acting as a unified single source of truth. Data is brought in via Extract-Load-Transform pipelines with standards and interoperability enforced.',
    category: 'Data Ecosystem',
    related: ['Data mart', 'Common data model (CDM)'],
  },
  {
    term: 'Data mart',
    definition:
      'A purpose-scoped extract of a subset of a data warehouse, typically standardised in its terminologies. From a mart a smaller analytic dataset is derived for one specific question; unlike a broad warehouse/mart, a dataset is built for a single purpose and may span warehouses (so it can contain unstandardised data). SQL is best for warehouse/mart extraction, Python/R for feature engineering and modelling.',
    category: 'Data Ecosystem',
    related: ['Data warehouse', 'Data wrangling / preparation'],
  },
  {
    term: 'Standardised clinical vocabularies',
    definition:
      'Complementary coding systems at different granularities: clinical terminologies (SNOMED CT) are polyhierarchical, dynamic, with 100,000s of concepts for point-of-care recording and semantic interoperability; classifications (ICD-9/10, mono-hierarchical) support statistical/secondary reporting; resource groups (DRG/AR-DRG) support financing and management. Singapore adds TOSP (surgical procedures, ranked 1A-7C) and the Singapore Drug Database; the US uses CPT (5-digit procedure codes).',
    category: 'Data Ecosystem',
    related: ['Common data model (CDM)', 'Comorbidity index (Charlson / Elixhauser)'],
  },
  {
    term: 'FAIR & TRUST principles',
    definition:
      'Two stewardship frameworks the deck cites: FAIR (2016) makes data Findable, Accessible, Interoperable and Reusable; TRUST (2020) makes digital repositories Transparent, Responsible, User-focused, Sustainable and Technologically capable. Good metadata is what makes data findable, accessible and reusable.',
    category: 'Data Ecosystem',
    related: ['Data governance & metadata management'],
  },
  {
    term: 'Data governance & metadata management',
    definition:
      "Two of the deck's data-management pillars. Governance covers ethics/compliance, IT-security policies, acceptable-use, informed consent, ethics approval, storage/archival and data-sharing agreements; metadata management maintains 'data that describes the data' to ensure findability, accessibility and reusability. Both sit alongside data quality, processing and privacy/security.",
    category: 'Data Ecosystem',
    related: ['FAIR & TRUST principles', 'Data quality dimensions'],
  },
  {
    term: 'Data wrangling / preparation',
    definition:
      'The prepare stage (ask, acquire, organise, clean, visualise) that consumes 60-80% of project time - famously the most time-consuming, least enjoyable data-science task. In the deck it spans reshaping, merge/join/concatenate, profiling, handling missing/incorrect/noisy values, outliers and duplicates, rescaling/recoding/aggregating, and feature engineering.',
    category: 'Data Ecosystem',
    related: ['Data profiling', 'Feature engineering'],
  },
  {
    term: 'Data profiling',
    definition:
      'An early exploratory step (often skipped by analysts) that inspects record counts across variables, statistical distributions (SD, IQR, mean/median, skewness, outliers, missingness, correlations) and expected ranges. Crucially, check with domain experts on data validity before any analysis - understanding healthcare data needs domain expertise.',
    category: 'Data Ecosystem',
    related: ['Data wrangling / preparation', 'Outlier detection (Tukey fence)'],
  },
  {
    term: 'Data quality dimensions',
    definition:
      'The harmonised terminology (reading ch.8) with three primary dimensions: Conformance (do values conform to formatting/relational/computational standards?), Completeness (are values present when expected?), and Plausibility (are values believable, e.g. BMI > 100 is implausible?). OHDSI’s Data Quality Dashboard scores an OMOP dataset on these to track quality over time and across sites.',
    category: 'Data Ecosystem',
    related: ['Common data model (CDM)', 'Structural vs inadvertent missingness'],
  },
  {
    term: 'Structural vs inadvertent missingness',
    definition:
      'Three reasons data is missing: structural (never meant to be collected - e.g. spirometry at a vaccination encounter), inadvertent (should have been collected but was not - extraction errors, process/patient/system issues), and data-quality (collected but unreliable - implausible values or conformance errors). A missingness indicator can flag whether absence itself is predictive.',
    category: 'Data Ecosystem',
    related: ['MCAR (Missing Completely At Random)', 'Imputation (single & multiple)'],
  },
  {
    term: 'MCAR (Missing Completely At Random)',
    definition:
      'Missingness whose probability is unrelated to any other measured variable and to the value of Y itself, so every observation has an equal chance of being missing. This is the most benign mechanism - it gives the most freedom in handling - but the deck notes most healthcare data is not truly MCAR.',
    category: 'Data Ecosystem',
    related: ['MAR (Missing At Random)', 'MNAR (Missing Not At Random)'],
  },
  {
    term: 'MAR (Missing At Random)',
    definition:
      'Missingness that depends only on other observed variables, not on the missing value itself - a systematic relationship exists with measured data. Because observed data explains the missingness, methods like multiple imputation can use it to reduce bias.',
    category: 'Data Ecosystem',
    related: ['MCAR (Missing Completely At Random)', 'MNAR (Missing Not At Random)'],
  },
  {
    term: 'MNAR (Missing Not At Random)',
    definition:
      'Missingness whose probability depends on the unobserved value itself - the deck’s example: HbA1c results above 10 are the ones missing. This is the hardest mechanism to handle and can be informative (missingness itself predicts the outcome and can confound observed predictors).',
    category: 'Data Ecosystem',
    related: ['MAR (Missing At Random)', 'Imputation (single & multiple)'],
  },
  {
    term: 'Imputation (single & multiple)',
    definition:
      'Filling missing values instead of discarding rows. Listwise (complete-case) deletion is easy but biases results unless truly MCAR; single imputation replaces with one value (mean, median, stochastic regression) but can introduce bias; multiple imputation creates several completed copies and pools estimates (R MICE, Python scikit-learn IterativeImputer). Always report what was missing, where, why and how it was handled.',
    category: 'Data Ecosystem',
    related: ['MAR (Missing At Random)', 'scikit-learn'],
  },
  {
    term: 'Comorbidity index (Charlson / Elixhauser)',
    definition:
      'Domain-driven features that compress diagnosis/lab/medication information into predictors. The Charlson Comorbidity Index (original 19 items, 1987) weights conditions into a single score; the Elixhauser index (30 comorbidities from ICD-9-CM, 1998; later ICD-10 and 31-item versions) keeps each comorbidity as a separate indicator with no single score - better for administrative-data outcomes like LOS, cost and in-hospital mortality. Always report which version and reference is used.',
    category: 'Data Ecosystem',
    related: ['Standardised clinical vocabularies', 'Feature engineering'],
  },
  {
    term: 'Outlier detection (Tukey fence)',
    definition:
      'Outliers are values from the extreme tail of a distribution; a boxplot is a common tool. The Tukey fence flags points below Q1 - A×IQR or above Q3 + A×IQR (A = 1.5 in Tukey 1977, 2.2 in Hoaglin-Iglewicz 1987). Handle by deletion (treat as missing) or transformation (cap to the nearest non-outlier value), but confirm with domain knowledge first.',
    category: 'Analytics & AI',
    related: ['Data profiling', 'Normalisation'],
  },
  {
    term: 'Normalisation',
    definition:
      'A naive feature-engineering rescale that maps values into a fixed range (e.g. min-max to [0,1]) or divides by a vector norm, so features on very different scales (Age 0-100 vs Income 0-100,000) contribute comparably. Preferred when the distribution is unknown/non-Gaussian and the algorithm makes no distributional assumptions (k-means, neural networks); outliers can bias it, so consider a Robust Scaler.',
    category: 'Analytics & AI',
    related: ['Standardisation (z-score)', 'K-means clustering', 'Robust Scaler'],
  },
  {
    term: 'Standardisation (z-score)',
    definition:
      'Rescaling a variable to mean 0 and standard deviation 1 (z-score normalisation), producing a standard-normal-like variable. Favoured when the data looks Gaussian and for techniques that assume it - linear/logistic regression and linear discriminant analysis; contrast with min-max normalisation used for k-means.',
    category: 'Analytics & AI',
    related: ['Normalisation', 'Logistic regression'],
  },
  {
    term: 'One-hot vs label encoding',
    definition:
      'Ways to turn categorical variables numeric. One-hot encoding creates a separate binary column per category (no false ordering), suited to nominal data; label encoding maps categories to integers, which is only appropriate for ordinal variables since the numbers imply order. The right choice depends on context and the analysis plan.',
    category: 'Analytics & AI',
    related: ['Feature engineering', 'Feature selection vs feature extraction'],
  },
  {
    term: 'Feature selection vs feature extraction',
    definition:
      'Two ways to reduce/shape the feature set. Selection keeps a subset of the original variables (dropping irrelevant/redundant ones); extraction derives new composite features from combinations of the originals (e.g. a comorbidity score, or dimensionality reduction such as t-SNE). Both are part of feature engineering - which Andrew Ng calls the essence of applied machine learning.',
    category: 'Analytics & AI',
    related: ['Feature engineering', 't-SNE (dimensionality reduction)'],
  },

  // ── Segment 3: Intro to ML & unsupervised learning ────────────────
  {
    term: 'Machine learning workflow',
    definition:
      'ML learns a function Y = F(X) linking explanatory features X to outcome Y. The deck’s workflow: data acquisition -> data preparation -> analysis/model development (train on training data, tune hyperparameters on validation) -> model evaluation on unseen out-of-sample test data -> model improvement (more data, better algorithm, domain knowledge). Note statisticians’ and ML practitioners’ train/validation/test terminology can differ.',
    category: 'Analytics & AI',
    related: ['Classification vs regression', 'Supervised vs unsupervised learning'],
  },
  {
    term: 'Classification vs regression',
    definition:
      'The two supervised-learning tasks (outcome labels available). Classification predicts a discrete category/class when data can be tagged or separated into groups (e.g. CKD vs no-CKD); regression predicts a continuous quantity. Both contrast with unsupervised learning, where labels are inferred.',
    category: 'Analytics & AI',
    related: ['Supervised vs unsupervised learning', 'Clustering'],
  },
  {
    term: 'Clustering',
    definition:
      'The unsupervised task of grouping observations by similarity when no outcome labels exist - labels are inferred from structure in the data. The deck contrasts two families: partitioning methods (maintain a set of clusters, assign points to the closest one; e.g. k-means) and hierarchical methods (merge closest clusters repeatedly).',
    category: 'Analytics & AI',
    related: ['K-means clustering', 'Hierarchical clustering (dendrogram)', 'Patient segmentation'],
  },
  {
    term: 'K-means clustering',
    definition:
      'A partitioning algorithm: choose K in advance and place K random seeds; assign each observation to its closest seed; recompute each cluster’s centroid as the new seed; reassign; iterate until stable (typically 5-25 iterations). The deck requires rescaling all variables first (min-max, with log/sqrt for skew), and checking outliers - the StatQuest pre-class video covers these mechanics.',
    category: 'Analytics & AI',
    related: ['Centroid', 'Elbow method', 'Normalisation'],
  },
  {
    term: 'Centroid',
    definition:
      'The mean (centre) of all points currently assigned to a cluster; in k-means it becomes the cluster’s new seed each iteration, and points are reassigned by distance to the updated centroids until the solution stabilises.',
    category: 'Analytics & AI',
    related: ['K-means clustering', 'Inertia (within-cluster sum of squares)'],
  },
  {
    term: 'Inertia (within-cluster sum of squares)',
    definition:
      'The k-means objective/quality measure: the total squared distance from each point to its cluster centroid. Inertia falls as K rises, so it cannot be minimised naively - it is instead read against K to find the point of diminishing returns.',
    category: 'Analytics & AI',
    related: ['Elbow method', 'K-means clustering'],
  },
  {
    term: 'Elbow method',
    definition:
      'A heuristic for choosing K: plot inertia (within-cluster sum of squares) against the number of clusters and pick the “elbow” where the curve bends and additional clusters stop reducing inertia meaningfully. It is the deck’s and lab’s approach to “evaluate the most optimal number of clusters.”',
    category: 'Analytics & AI',
    related: ['Inertia (within-cluster sum of squares)', 'K-means clustering'],
  },
  {
    term: 'Hierarchical clustering (dendrogram)',
    definition:
      'An agglomerative method: start with each point as its own cluster, then repeatedly merge the two closest clusters, producing a tree (dendrogram) that can be cut at any level to yield a chosen number of clusters. Offered as self-study alongside k-means; no K needs to be fixed in advance.',
    category: 'Analytics & AI',
    related: ['Clustering', 'K-means clustering'],
  },
  {
    term: 't-SNE (dimensionality reduction)',
    definition:
      'A dimensionality-reduction technique that projects high-dimensional data into 2D for visualising cluster structure (used in the deck’s Medicare Advantage patient-segmentation example and the CKD lab step “visualise the clusters with reduced dimensionality”). It aids interpretation but does not itself create the clusters.',
    category: 'Analytics & AI',
    related: ['Patient segmentation', 'Clustering'],
  },
  {
    term: 'Patient segmentation',
    definition:
      'Applying clustering to group patients with similar clinical, utilisation and engagement profiles - an unsupervised design where outcomes are NOT used to form clusters but may describe/validate them afterwards. Deck examples: 6 COVID symptom clusters from a tracker app, medication patterns via MCA + k-means, and Medicare top-decile spenders segmented via t-SNE.',
    category: 'Analytics & AI',
    related: ['Clustering', 'K-means clustering'],
  },

  // ── Hands-on lab: Chronic Kidney Disease ──────────────────────────
  {
    term: 'CKD dataset',
    definition:
      "The UCI Chronic Kidney Disease dataset used in both Lecture 2 labs: 400 patients, 25 fields (24 features + 1 binary target 'class' = CKD vs not), with missing values in nearly every feature. Features include age, blood pressure, specific gravity, albumin, serum creatinine, haemoglobin, hypertension and diabetes. Lab 1 practises drop-duplicates, imputation, recoding and rescaling; Lab 2 clusters the 250 CKD-positive patients.",
    category: 'Project & Tools',
    related: ['scikit-learn', 'K-means clustering', 'Google Colab'],
  },
  {
    term: 'scikit-learn',
    definition:
      'The Python ML library used in the CKD labs for standard scaling, k-means clustering, and missing-value handling (e.g. IterativeImputer for multiple imputation). It also provides the RobustScaler recommended when outliers would distort ordinary scaling before clustering.',
    category: 'Project & Tools',
    related: ['Robust Scaler', 'K-means clustering', 'DataFrame'],
  },
  {
    term: 'Robust Scaler',
    definition:
      'A scaling method (scikit-learn RobustScaler) that centres and scales using the median and IQR instead of mean/SD, so it resists outliers. The deck recommends it whenever outliers would bias ordinary normalisation or standardisation - relevant before k-means on the CKD features.',
    category: 'Project & Tools',
    related: ['Normalisation', 'Outlier detection (Tukey fence)', 'scikit-learn'],
  },
]
