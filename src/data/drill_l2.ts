import type { DrillCard } from './types'

/**
 * Lecture 2 short-answer drill cards (Quiz 1, 1 Aug: 10 MCQ + 5 short answers).
 * Every model answer is transformed from the verified Lecture 2 decks captured in
 * topics_l2.ts, definitions_l2.ts and quiz_l2.ts - no content beyond those sources.
 */
export const l2Drills: readonly DrillCard[] = [
  // ── Problem Framing & Data Design ─────────────────────────────────
  {
    id: 'd101',
    topic: 'Problem Framing & Data Design',
    prompt:
      'List the five elements of the checklist for framing an analytics problem, and explain why the framing must be done before any data is touched.',
    modelAnswer:
      'The five elements are (1) target population, (2) intervention/exposure, (3) outcome(s) with the primary named separately from the secondary ones, (4) predictor variables - which to include, which are confounders that must be included, and which to omit - and (5) time frame. Framing first turns a vague clinical question such as "which patients become high hospital users?" into a precise, analysable problem statement. It also forces you to decide whether the question is prediction (no assigned intervention) or causal estimation before choosing a study design. Missing any one element produces a mis-specified study, which is the most common failure in healthcare analytics.',
    keyPoints: [
      'Names all five: target population, intervention/exposure, outcome (primary vs secondary), predictor variables, time frame',
      'Framing converts a vague clinical question into a precise, analysable problem statement',
      'Separates prediction (no assigned intervention) from causal estimation before design choice',
      'Omitting an element causes a mis-specified study',
    ],
  },
  {
    id: 'd102',
    topic: 'Problem Framing & Data Design',
    prompt:
      'Define primary and secondary outcomes, and illustrate the difference using the 30-day readmission example.',
    modelAnswer:
      'The primary outcome is the single main outcome of interest that the study is designed and powered to answer; all other outcomes of interest are secondary. In the readmission example the primary outcome is unplanned readmission within 30 days of discharge, while secondary outcomes include ED visit within 30 days, 90-day readmission, post-discharge cost and 30-day mortality. Naming which outcome is primary keeps the analysis focused and prevents fishing across many endpoints. Primacy is defined by the question being asked, not by which outcome occurs first, is easiest to measure, or has the most complete data.',
    keyPoints: [
      'Primary = the main outcome the study is designed to answer; all others are secondary',
      'Worked example: unplanned 30-day readmission (primary) vs ED visit/90-day readmission/cost/mortality (secondary)',
      'Declaring the primary outcome keeps the analysis focused',
      'Primacy is not about timing, measurability or data completeness',
    ],
  },
  {
    id: 'd103',
    topic: 'Problem Framing & Data Design',
    prompt:
      'What is a confounder, and how does the framing checklist say confounders should be handled among the predictor variables?',
    modelAnswer:
      'A confounder is a variable that influences both the exposure and the outcome, so leaving it uncontrolled distorts the apparent relationship between them. The checklist explicitly asks which predictors are confounders that MUST be included in the analysis - omitting a confounder is what creates the distortion, so inclusion is a matter of validity rather than of improving predictive accuracy. Confounding by indication is a special case, where the very reason a treatment was given also independently causes the outcome. Simpson\'s Paradox (UC Berkeley 1973: men 44% vs women 35% admitted overall, yet women equal or higher within departments) shows how a lurking confounder can reverse an aggregate trend.',
    keyPoints: [
      'Confounder influences BOTH exposure and outcome and distorts their relationship if uncontrolled',
      'Checklist requires confounders to be included as predictors (contrast with leakage variables, which must be omitted)',
      'Inclusion is about validity, not predictive accuracy',
      'Confounding by indication / Simpson\'s Paradox as illustrations',
    ],
  },
  {
    id: 'd104',
    topic: 'Problem Framing & Data Design',
    prompt:
      'Explain what the "time frame" element of the framing checklist covers, and why the prediction horizon must be fixed in advance.',
    modelAnswer:
      'The time frame specifies when the answer must hold true, when we intervene or apply the model, and how long the outcome takes to manifest. In the utilisation example this means using 1 Jan-31 Dec 2025 data to predict high utilisation over 1 Jan-31 Dec 2026; in the readmission example the model is applied at the point of discharge and looks forward 30 days. Fixing the horizon in advance defines exactly which information is available at the prediction point, so that anything recorded afterwards is excluded. Without it you cannot tell legitimate predictors from leakage, and the outcome window itself becomes ambiguous.',
    keyPoints: [
      'Covers when the answer holds, when the model is applied, and how long the outcome takes to manifest',
      'Concrete example: 2025 data to predict 2026 high utilisation; readmission predicted AT discharge over 30 days',
      'Determines which variables are available at the prediction point',
      'Prevents data leakage and an ambiguous outcome window',
    ],
  },
  {
    id: 'd105',
    topic: 'Problem Framing & Data Design',
    prompt:
      'Distinguish a cross-sectional study, a cohort study and a randomised controlled trial in terms of exposure assignment and the timing of outcome measurement.',
    modelAnswer:
      'The design hierarchy asks first whether the research team assigned the exposure: if yes the design is experimental (RCT), if no it is observational. A cross-sectional study is observational and assesses exposure and outcome at the SAME point in time with no follow-up (the date of the cross section is the index date), so it is descriptive and can suggest but not establish causal relationships. A cohort study is also observational but longitudinal, defined by four tenets - a cohort with clear inclusion/exclusion criteria, an exposure, an outcome and a time period - and can be prospective, retrospective or ambispective. An RCT randomises participants to intervention and control with an explicit comparison group, giving the highest internal validity.',
    keyPoints: [
      'First split: was the exposure assigned by the team (experimental) or not (observational)',
      'Cross-sectional = exposure and outcome measured simultaneously, no follow-up, descriptive only',
      'Cohort = four tenets (cohort with inclusion/exclusion, exposure, outcome, time period); prospective / retrospective / ambispective',
      'RCT = randomisation plus explicit comparison group = highest internal validity',
    ],
  },
  {
    id: 'd106',
    topic: 'Problem Framing & Data Design',
    prompt:
      'Why would a health system use a cluster RCT or a stepped-wedge cluster RCT rather than randomising individual patients? Name the main threat to validity of the stepped-wedge design.',
    modelAnswer:
      'A cluster RCT randomises whole clusters - clinics, hospitals or villages - and is used when the intervention cannot be directed at individuals or when contamination between individuals in the same setting cannot be prevented. A stepped-wedge cluster RCT randomly and sequentially crosses clusters over from control to intervention until all are exposed, which reconciles managers and policymakers who must roll the programme out to everyone with the need for rigorous evaluation. Its main threat is confounding by temporal trends, because intervention timing is spread across calendar time. Both are pragmatic designs that preserve randomisation and a comparison group when individual randomisation is impossible in a live health system.',
    keyPoints: [
      'Cluster RCT: unit of randomisation is a cluster (clinic/hospital/village); used when intervention cannot target individuals or contamination cannot be prevented',
      'Stepped-wedge: random and sequential crossover of clusters from control to intervention until all exposed',
      'Reconciles the need to implement for everyone with rigorous evaluation',
      'Key threat: confounding by temporal trends',
    ],
  },
  {
    id: 'd107',
    topic: 'Problem Framing & Data Design',
    prompt:
      'Explain the discovery sample, accessible population and target population, and state how internal and external validation map onto them.',
    modelAnswer:
      'The discovery sample is where the model is built, tested and its performance estimated (e.g. all ED visits by adults 18+ at Hospital A in 2025); the accessible population is what we can realistically learn about (e.g. all adult ED visits across the hospital cluster with linked EHR data); the target population is what we ultimately want to learn about (e.g. all adult ED visits in all public and private hospitals in Singapore). They nest as discovery within accessible within target. A valid solution is one that is true in the discovery sample AND still generalises to the accessible and target populations. Generalisation to the accessible population is internal validation; generalisation to the target population is external validation.',
    keyPoints: [
      'Ladder: discovery sample within accessible population within target population, with a concrete example of each',
      'Valid solution = true in the discovery sample and generalises to accessible and target populations',
      'Internal validation = generalising within the cluster / accessible population',
      'External validation = generalising to the target population',
    ],
  },
  {
    id: 'd108',
    topic: 'Problem Framing & Data Design',
    prompt:
      'A readmission model performs well at the hospital where it was built but degrades when deployed elsewhere and again a year later. Explain this in terms of the data design and the model lifecycle.',
    modelAnswer:
      'This is a failure of generalisation: the model is only true in the discovery sample, so validity does not carry to the accessible and target populations - typically because selection bias or differences in case-mix and data capture make those populations differ from the sample. Deployment elsewhere is exactly what external validation is meant to test, and a shift in the underlying population between the accessible and target settings will show up as degraded performance. Performance can also drift over time because clinical data, practice and populations change after deployment. That is why model monitoring and safeguards are a continuous stage of the clinical-grade lifecycle, with version control and audit trails so a model can be retrained or withdrawn.',
    keyPoints: [
      'Names the generalisation failure: valid in discovery sample but not in accessible/target populations',
      'Cause: selection bias / differing case-mix and data capture between populations; external validation is the test',
      'Performance drift after deployment because clinical data and populations change over time',
      'Remedy: continuous model monitoring and safeguards (retrain or withdraw)',
    ],
  },
  {
    id: 'd109',
    topic: 'Problem Framing & Data Design',
    prompt:
      'In the 30-day readmission framing, which variables are listed as "to omit or handle carefully", and why?',
    modelAnswer:
      'The variables to omit or handle carefully are post-discharge events, variables only known after a readmission has occurred, and discharge codes that directly encode the outcome. The model is applied at the point of discharge, so only information available up to discharge may legitimately be used. Including these variables causes data leakage: the model is fed the answer, so measured performance is inflated and collapses in real use. This is the opposite of a confounder, which must be included - the leakage variables must be excluded.',
    keyPoints: [
      'Names the three groups: post-discharge events, variables known only after readmission, discharge codes encoding the outcome',
      'Prediction point is discharge, so only information available up to discharge is admissible',
      'Mechanism is data leakage, which inflates apparent performance',
      'Contrast with confounders, which must be included',
    ],
  },

  // ── Data Prep & Quality ───────────────────────────────────────────
  {
    id: 'd110',
    topic: 'Data Prep & Quality',
    prompt:
      'Compare SNOMED CT, ICD and DRG in terms of granularity and the purpose each is designed to serve.',
    modelAnswer:
      'SNOMED CT is a clinical terminology: polyhierarchical, dynamic and granular, with hundreds of thousands of concepts and over a million relationships, designed to support DIRECT clinical care and semantic interoperability at the point of care. ICD-9/ICD-10 are classifications: mono-hierarchical and stable, with tens of thousands of mutually exclusive grouped concepts, designed for SECONDARY use such as statistical reporting, financing, registries and epidemiology. DRG/AR-DRG are resource groups: only hundreds of groups, stable and often nation-specific, designed for health-system and resource management and healthcare financing. Mapping between these standards is "not an exact science" and needs clinical and contextual domain knowledge.',
    keyPoints: [
      'SNOMED CT = polyhierarchical, 100,000s of granular concepts, direct clinical care and semantic interoperability',
      'ICD = mono-hierarchical classification, 10,000s of mutually exclusive concepts, secondary use: statistics, reporting, financing, registries',
      'DRG/AR-DRG = 100s of resource groups, health-system/resource management and financing',
      'Mapping between standards is not exact and requires domain knowledge',
    ],
  },
  {
    id: 'd111',
    topic: 'Data Prep & Quality',
    prompt: 'What is a common data model, and what does OMOP CDM achieve for healthcare analytics?',
    modelAnswer:
      'A common data model is a shared, standard structure and set of definitions that a data warehouse and its derivative marts conform to, so specifications are portable across projects and organisations. OMOP CDM v5.4, maintained by the OHDSI community, is the flagship example: because sites standardise their data to the same structure, the same analytic code and cohort definitions can be run at multiple sites. This facilitates collaboration and supports clinical trials, drug and disease surveillance, and safety monitoring. Locally, the legacy EDW/eHINTS environment was built on OMOP CDM.',
    keyPoints: [
      'CDM = shared definitions/specifications portable across projects and organisations',
      'OMOP CDM v5.4 maintained by OHDSI (Observational Health Data Sciences and Informatics)',
      'Enables collaboration and multi-site analytics: clinical trials, drug/disease surveillance, safety monitoring',
      'Singapore example: legacy EDW/eHINTS built on OMOP CDM',
    ],
  },
  {
    id: 'd112',
    topic: 'Data Prep & Quality',
    prompt:
      'State the FAIR principles and explain the role metadata management plays in achieving them.',
    modelAnswer:
      'FAIR (2016) states that scientific data should be Findable, Accessible, Interoperable and Reusable. Metadata - structured data that describes the data - is what makes data findable, accessible and reusable, which is why metadata management is one of the five data-management pillars alongside data quality, data processing, data governance, and data privacy and security. Interoperability additionally depends on data standards and standardised vocabularies so that data means the same thing across systems. (TRUST, for digital repositories, was dropped from the v4 deck and is background only.)',
    keyPoints: [
      'FAIR = Findable, Accessible, Interoperable, Reusable (2016)',
      'Metadata is structured data describing the data; it delivers findability, accessibility and reusability',
      'Metadata management is one of the data-management pillars (with quality, processing, governance, privacy/security)',
      'Interoperability rests on standards and standardised vocabularies',
    ],
  },
  {
    id: 'd113',
    topic: 'Data Prep & Quality',
    prompt:
      'Name the three primary data quality dimensions from the harmonised terminology and give an example of a violation of each.',
    modelAnswer:
      'The three primary dimensions are Conformance, Completeness and Plausibility. Conformance asks whether values conform to formatting, relational and computational standards - for example a date stored as a text integer code violates it. Completeness asks whether values are present when expected - for example a lab result that should have been captured but is missing. Plausibility asks whether values are believable - for example a recorded BMI above 100. OHDSI\'s Data Quality Dashboard scores an OMOP dataset on these dimensions to track quality over time and across sites.',
    keyPoints: [
      'Names all three: Conformance, Completeness, Plausibility',
      'One concrete violation each (format/type error, missing expected value, implausible value such as BMI > 100)',
      'OHDSI Data Quality Dashboard applies them to OMOP datasets over time and across sites',
      'Timeliness is NOT one of the three primary dimensions',
    ],
  },
  {
    id: 'd114',
    topic: 'Data Prep & Quality',
    prompt:
      'Contrast complete-case deletion, single imputation and multiple imputation for handling missing data, and say when each is acceptable.',
    modelAnswer:
      'Complete-case (listwise) deletion drops rows with any missing value; it is easy but biases results unless the data are truly MCAR, because otherwise the complete cases are not a random sample. Single imputation replaces each missing value with one value (mean, median or stochastic regression); it is convenient but can introduce bias and understates uncertainty. Multiple imputation creates several completed copies of the dataset and pools the estimates - implemented as MICE in R or IterativeImputer in Python scikit-learn - and works well under MAR, where missingness is explained by other observed variables. A missingness indicator can also be added so the model can learn whether the absence itself is predictive, and good practice is to report what was missing, where, why and how it was handled.',
    keyPoints: [
      'Listwise deletion: simple but unbiased only under MCAR',
      'Single imputation (mean/median/stochastic regression) can introduce bias',
      'Multiple imputation creates multiple datasets and pools estimates - R MICE / scikit-learn IterativeImputer',
      'Missingness indicators plus full reporting of what, where, why and how',
    ],
  },
  {
    id: 'd115',
    topic: 'Data Prep & Quality',
    prompt:
      'Distinguish an outlier from an extreme value, describe how the Tukey fence identifies outliers, and give the two handling options.',
    modelAnswer:
      'An extreme value is a value in the tail of a distribution and is only a POTENTIAL outlier; whether it is a genuine outlier is a judgement that should be confirmed with domain knowledge, since an extreme but clinically plausible value is real data. The boxplot is the standard tool, and the Tukey fence flags values below Q1 - A x IQR or above Q3 + A x IQR, with A = 1.5 (Tukey 1977) or 2.2 (Hoaglin & Iglewicz 1987). Once confirmed, outliers can be deleted (set to missing and then handled as missing data) or transformed by capping them to the next non-outlier value. Outliers matter for preparation because they bias rescaling, which is why a Robust Scaler may be preferred.',
    keyPoints: [
      'Extreme tail value = only a potential outlier; confirm with domain knowledge',
      'Tukey fence: below Q1 - A x IQR or above Q3 + A x IQR, A = 1.5 (Tukey 1977) or 2.2 (Hoaglin & Iglewicz 1987); boxplot as the tool',
      'Two handling options: delete (treat as missing) or transform/cap to the nearest non-outlier value',
      'Outliers bias rescaling, hence the Robust Scaler',
    ],
  },
  {
    id: 'd116',
    topic: 'Data Prep & Quality',
    prompt:
      'Define normalisation and standardisation, explain when each is preferred, and explain why features must be rescaled before k-means.',
    modelAnswer:
      'Normalisation rescales values into a fixed range (e.g. min-max to [0,1]) or divides by a norm so that variables measured on very different scales - Age [0,100] versus Income [0,100,000] - contribute comparably; standardisation converts to a z-score, z = (x - mu)/sigma, giving mean 0 and standard deviation 1. Normalisation is preferred when the distribution is unknown or non-Gaussian and the algorithm makes no distributional assumption (k-means, neural networks), while standardisation suits roughly Gaussian data and techniques that assume it (linear regression, logistic regression, LDA). K-means is distance-based, so without rescaling a large-range variable such as annual cost would dominate the distance calculations and drive the cluster assignments. Outliers bias the scaling itself, so a Robust Scaler (median and IQR) may be used instead.',
    keyPoints: [
      'Normalisation = rescale to a fixed range / divide by a norm; standardisation = z = (x - mu)/sigma, mean 0 SD 1',
      'Normalise for unknown/non-Gaussian distributions and distance-based or assumption-free algorithms (k-means, neural nets); standardise for Gaussian-assuming models (linear/logistic regression, LDA)',
      'K-means is distance-based, so unscaled large-range variables dominate cluster assignment',
      'Outliers bias scaling - consider Robust Scaler',
    ],
  },
  {
    id: 'd117',
    topic: 'Data Prep & Quality',
    prompt:
      'Why are highly skewed variables transformed before clustering, and which transformations are commonly used?',
    modelAnswer:
      'A highly skewed variable stretches the distance scale so that a few large values dominate the rescaled feature and therefore the clustering. The k-means guideline is therefore to rescale ALL variables and, for highly skewed ones, to apply a log or square-root transform to reduce skew; log and Box-Cox are the transformations named in the deck (along with square root, and Generalized Estimating Equations as an advanced technique). You must also always check for outliers first, because they bias the rescaling - removing them may mean no transform is needed, otherwise a Robust Scaler helps. Rescaling itself is described as a form of "naive" feature engineering: a consistent functional transformation of a variable.',
    keyPoints: [
      'Skew lets a few large values dominate the rescaled feature and the distance-based clustering',
      'Named transforms: log, Box-Cox, square root (plus GEE as advanced)',
      'Guideline: rescale all variables, transform highly skewed ones, always check outliers first',
      'Rescaling/normalisation/standardisation count as naive feature engineering',
    ],
  },
  {
    id: 'd118',
    topic: 'Data Prep & Quality',
    prompt:
      'Define feature engineering, quote what Andrew Ng says about it, and give two examples of clinically-informed features.',
    modelAnswer:
      'Feature engineering is the use of domain knowledge to create features that make machine-learning and data-mining algorithms work; it is mostly manual, difficult and time-consuming, which is why Andrew Ng says "applied machine learning is basically feature engineering". It spans naive forms such as rescaling, normalisation and standardisation, categorical encoding, binning and aggregation of repeated measurements (first, last, mean, max, min, range, count, sum - e.g. mean HbA1c over six months or BP variability). Clinically-informed examples include scoring systems that compress several features into one interpretable score, such as NEWS, and comorbidity indices - the weighted 19-item Charlson index or Elixhauser, which keeps around 30 comorbidities as separate unweighted indicators. Always report which version of an index was used and cite it.',
    keyPoints: [
      'Definition: using domain knowledge to create features that make ML algorithms work; manual, difficult, time-consuming',
      'Andrew Ng: "applied machine learning is basically feature engineering"',
      'Covers encoding, rescaling (naive feature engineering), binning and aggregation of repeated measurements',
      'Clinically-informed examples: NEWS score, Charlson (weighted, 19 items) vs Elixhauser (~30 separate indicators); report the version',
    ],
  },
  {
    id: 'd119',
    topic: 'Data Prep & Quality',
    prompt:
      'Describe the order of data preparation steps used in the CKD lab and explain the rationale for each step.',
    modelAnswer:
      'The CKD flow is profile, then drop duplicates, then impute missing values, then recode categoricals, then rescale the numeric features. Profiling first (record counts, distributions, missingness, expected ranges checked with domain experts) tells you what you are dealing with; de-duplication comes next so that repeated rows do not distort every statistic computed afterwards. Imputation then fills the missing values that appear in nearly every one of the 24 features of the 400-patient UCI dataset, and recoding turns categorical and binary fields into numeric form the algorithms can use. Rescaling comes last because it is computed from the cleaned distribution, and it produces the clean modelling dataset that becomes the clustering input in Segment 3.',
    keyPoints: [
      'Order: profile - drop duplicates - impute missing - recode - rescale',
      'Duplicates removed before statistics are computed; profiling checks ranges with domain experts',
      'CKD dataset context: 400 patients, 25 fields (24 features + binary class), missing values in nearly every feature',
      'Rescaling last, computed on cleaned data, producing the modelling/clustering input',
    ],
  },

  // ── ML & Clustering ───────────────────────────────────────────────
  {
    id: 'd120',
    topic: 'ML & Clustering',
    prompt:
      'Explain the difference between supervised and unsupervised learning, and give a healthcare example of each.',
    modelAnswer:
      'Machine learning models the relation between explanatory features X and an outcome Y as Y = F(X, e). In supervised learning the outcome labels are AVAILABLE - the rows have a known Y column (1/0) - and the model learns to predict it, giving regression for a continuous outcome and classification for a category (e.g. predicting the check-up-gap outcome in the BRFSS project, or CKD vs no-CKD). In unsupervised learning the feature matrix is identical but the outcome column is "?", so labels are INFERRED: the algorithm must discover structure itself, as in clustering or association analysis (e.g. segmenting CKD patients in Lab 2). Supervised learning needs a labelled ground truth, which is expensive to obtain in healthcare, whereas unsupervised output runs on raw features but needs clinical interpretation to be meaningful.',
    keyPoints: [
      'Supervised = labels available (known Y); unsupervised = labels inferred (Y = "?")',
      'Supervised sub-types regression and classification; unsupervised sub-types clustering and association',
      'Healthcare example of each (e.g. BRFSS check-up prediction vs CKD patient clustering)',
      'Trade-off: labelled ground truth is costly; unsupervised output needs clinical interpretation',
    ],
  },
  {
    id: 'd121',
    topic: 'ML & Clustering',
    prompt: 'Describe the k-means algorithm step by step, and state one consequence of how it is initialised.',
    modelAnswer:
      'K-means is a partitioning method. Step 1: the value of K is decided in advance and K seeds/centroids are placed randomly. Step 2: each observation is allocated to the closest seed, producing K clusters. Step 3: the centroid (mean) of each cluster is computed and becomes the new seed. Step 4: observations are reassigned based on distance to the new seeds, and step 5 iterates steps 2-4 until a stopping criterion is met - in practice 5 to 25 iterations usually reaches a stable solution. Because the seeds are random, results can vary by initialisation, so the algorithm is re-run with different starts and the run with the lowest total within-cluster variation is kept; this contrasts with hierarchical clustering, which merges the two closest clusters repeatedly and needs no K up front.',
    keyPoints: [
      'K fixed in advance and K seeds placed randomly',
      'Assign each point to the closest seed, recompute centroids as new seeds, reassign, iterate until stable (about 5-25 iterations)',
      'Random initialisation means results vary; re-run and keep the lowest total within-cluster variation',
      'Contrast with hierarchical/agglomerative clustering, which needs no pre-set K',
    ],
  },
  {
    id: 'd122',
    topic: 'ML & Clustering',
    prompt:
      'How do you choose the number of clusters K? Define inertia and explain why it cannot simply be minimised.',
    modelAnswer:
      'Inertia is the within-cluster sum of squares - the total squared distance from each point to its cluster centroid - and it is the quantity k-means minimises for a given K. It cannot be minimised naively across K because it always decreases as K increases, reaching zero when every point is its own cluster. Instead the elbow method plots inertia against the number of clusters and picks K at the "elbow", where adding another cluster stops producing a meaningful reduction in inertia. This is the approach used in Lab 2 to evaluate the optimal number of clusters.',
    keyPoints: [
      'Inertia = within-cluster sum of squares (distance of points to their centroid)',
      'Inertia always falls as K rises, so it cannot be minimised naively',
      'Elbow method: plot inertia vs K and choose the point of diminishing returns',
      'Used in the CKD Lab 2 workflow to pick the optimal K',
    ],
  },
  {
    id: 'd123',
    topic: 'ML & Clustering',
    prompt:
      'In the unsupervised patient-segmentation design, how are outcomes handled, and why is that design choice important?',
    modelAnswer:
      'The framing checklist is reused but adapted: the target is adults 18+ with at least one outpatient/primary-care visit, no intervention or exposure is required, the clustering variables are things like age, chronic-condition count, ED visits, admissions, medication count, no-show rate, HbA1c, eGFR and prior cost, and the time frame is to cluster on 2025 data and examine 2026 utilisation afterwards. The key design shift is that outcomes are deliberately held OUT of the clustering and used only post-hoc to describe or validate the segments. Including the outcome would defeat the unsupervised framing and make the segments circular rather than an independent discovery. Post-hoc discriminative modelling - asking what distinguishes each cluster from the rest - is what makes an unlabelled clustering clinically actionable, as in the Medicare high-cost segmentation and the six COVID-19 symptom clusters.',
    keyPoints: [
      'Outcomes are held out of the clustering and used only post-hoc to characterise or validate segments',
      'Clustering variables are clinical/utilisation features; no intervention or exposure is required',
      'Time frame example: cluster on 2025 data, examine 2026 utilisation afterwards',
      'Post-hoc discriminative modelling makes clusters interpretable and actionable (COVID symptom clusters, Medicare high-cost segmentation)',
    ],
  },
]
