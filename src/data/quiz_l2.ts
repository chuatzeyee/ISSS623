import type { QuizQuestion } from './types'

export const l2Questions: readonly QuizQuestion[] = [
  // ── Problem Framing & Data Design ─────────────────────────────────
  {
    id: 'l2q1',
    topic: 'Problem Framing & Data Design',
    prompt:
      'Lecture 2 lists five elements for framing an analytics problem. Which of the following is NOT one of the five?',
    options: [
      'Target population',
      'Sample size calculation',
      'Time frame',
      'Predictor variables',
    ],
    answerIndex: 1,
    explanation:
      'The five framing elements are target population, intervention/exposure, outcome (primary and secondary), predictor variables, and time frame. Sample size is a later study-planning concern, not one of the five framing elements from the Simon & Aliferis data design chapter.',
  },
  {
    id: 'l2q2',
    topic: 'Problem Framing & Data Design',
    prompt:
      'In the 30-day readmission example, "unplanned readmission within 30 days" is the primary outcome while "ED visit within 30 days" is secondary. What defines a PRIMARY outcome?',
    options: [
      'The outcome that occurs earliest in time',
      'The outcome with the most complete data',
      'The outcome that is easiest to measure objectively',
      'The main outcome of interest that the study is designed to answer',
    ],
    answerIndex: 3,
    explanation:
      'The primary outcome is the main focus of interest; all other outcomes of interest are secondary. Chronological order, data completeness and ease of measurement are practical considerations but do not define primacy.',
  },
  {
    id: 'l2q3',
    topic: 'Problem Framing & Data Design',
    prompt:
      'When deciding which predictor variables to include, how should confounders be treated according to the framing checklist?',
    options: [
      'Omit them because they distort the effect estimate',
      'Include them only if they improve predictive accuracy',
      'They must be included in the analysis',
      'Replace them with the primary outcome',
    ],
    answerIndex: 2,
    explanation:
      'The checklist explicitly asks "which variables are confounders and must be included?" - confounders are non-interventional variables that must be adjusted for. Omitting them is what causes distortion, and inclusion is about validity, not just predictive accuracy.',
  },
  {
    id: 'l2q4',
    topic: 'Problem Framing & Data Design',
    prompt:
      'A study samples participants independently of exposure and disease status, then measures exposure and outcome simultaneously at a single point in time with no follow-up. Which design is this?',
    options: [
      'Prospective cohort study',
      'Cross-sectional study',
      'Retrospective cohort study',
      'Randomized controlled trial',
    ],
    answerIndex: 1,
    explanation:
      'Simultaneous assessment of exposure and outcome at one time point, with no follow-up, defines a cross-sectional study; the date of the cross section is the index date. Cohort designs follow subjects forward through time (prospectively or by reconstructing the past), and an RCT assigns the exposure.',
  },
  {
    id: 'l2q5',
    topic: 'Problem Framing & Data Design',
    prompt:
      'The group project uses the 2024 BRFSS survey, where self-reported predictors and the outcome (e.g., CHECKUP1, time since last routine check-up) are collected from each respondent in the same interview. Which data design does this most closely resemble?',
    options: [
      'Stepped-wedge cluster RCT',
      'Prospective cohort study',
      'Quasi-experimental design',
      'Cross-sectional study',
    ],
    answerIndex: 3,
    explanation:
      'BRFSS captures exposure and outcome at the same time point with no follow-up of respondents, which is the definition of a cross-sectional design. There is no assigned intervention (ruling out RCT and quasi-experimental designs) and no forward follow-up (ruling out a cohort).',
  },
  {
    id: 'l2q6',
    topic: 'Problem Framing & Data Design',
    prompt:
      'Which of the following is NOT one of the four tenets of a cohort study given in Lecture 2?',
    options: [
      'Randomization of participants to exposure groups',
      'A cohort defined by inclusion/exclusion criteria',
      'An exposure and an outcome',
      'A time period (retrospective or prospective)',
    ],
    answerIndex: 0,
    explanation:
      'The four tenets are the cohort (with inclusion/exclusion criteria), exposure, outcome, and time period. Cohort studies are observational - the exposure is NOT assigned by the researcher; randomization belongs to experimental designs like RCTs.',
  },
  {
    id: 'l2q7',
    topic: 'Problem Framing & Data Design',
    prompt:
      'Researchers identify 889 patients admitted with COVID-19 between March and April 2020 from laboratory records, and analyse exposures and outcomes that had all already occurred before the study began. Which cohort type is this?',
    options: [
      'Prospective cohort',
      'Ambispective cohort',
      'Retrospective cohort',
      'Cross-sectional study',
    ],
    answerIndex: 2,
    explanation:
      'In a retrospective cohort both exposure and outcome lie in the past relative to study start, and the researcher looks backward through existing records. A prospective cohort follows subjects into the future; an ambispective cohort combines past data with continued future follow-up; the passage of time between exposure and outcome rules out a cross-sectional design.',
  },
  {
    id: 'l2q8',
    topic: 'Problem Framing & Data Design',
    prompt:
      'In the data design hierarchy, what is the FIRST question that separates experimental from observational designs?',
    options: [
      'How large is the discovery sample?',
      'Did the modelling/research team decide on (assign) the intervention?',
      'Is the outcome rare?',
      'Are the data primary or secondary?',
    ],
    answerIndex: 1,
    explanation:
      'The hierarchy first asks whether the team assigned the exposure/intervention: yes leads to experimental designs (RCT, cluster, stepped-wedge), no leads to observational designs, which are then split by the direction of time (no time gap = cross-sectional; forward = cohort; backward = case-control). Sample size, outcome rarity and primary-vs-secondary data come later.',
  },
  {
    id: 'l2q9',
    topic: 'Problem Framing & Data Design',
    prompt:
      'According to the data design chapter, a VALID solution is one that is true in the discovery sample and also...',
    options: [
      'achieves at least 80% accuracy on the training data',
      'is statistically significant at p < 0.05',
      'generalizes to the accessible and target populations',
      'was produced by a randomized experiment',
    ],
    answerIndex: 2,
    explanation:
      'Validity is defined as a finding that remains true in (generalizes to) the accessible population (internal validity) and further to the target population (external validity). Accuracy thresholds, p-values and randomization are neither necessary nor sufficient for this definition.',
  },
  {
    id: 'l2q10',
    topic: 'Problem Framing & Data Design',
    prompt:
      'In the 30-day readmission framing example, why should "discharge codes that directly encode the outcome" and post-discharge events be omitted from the predictors?',
    options: [
      'They leak information not available at prediction time and can encode the outcome itself',
      'They are always missing in EHR extracts',
      'They are confounders and would bias the estimate',
      'They cannot be one-hot encoded',
    ],
    answerIndex: 0,
    explanation:
      'The model is applied at the point of discharge, so only information available up to discharge may be used; variables recorded after the index discharge or that directly encode readmission would leak the answer. Confounders, by contrast, must be included, and encoding difficulty is not the issue.',
  },
  {
    id: 'l2q11',
    topic: 'Problem Framing & Data Design',
    prompt:
      'A health system cannot roll out a new care programme to all clinics at once, so clusters are randomly and sequentially crossed over from control to intervention until all are exposed. Which design is this, and what is its key threat?',
    options: [
      'Cluster RCT; contamination between arms',
      'Quasi-experimental design; lack of comparison group',
      'Pragmatic parallel RCT; poor external validity',
      'Stepped-wedge cluster RCT; confounding by temporal trends',
    ],
    answerIndex: 3,
    explanation:
      'Sequential random crossover of clusters until all receive the intervention defines the stepped-wedge cluster RCT, used when time or rollout constraints apply; because intervention timing is spread across calendar time, temporal trends can confound results. A plain cluster RCT randomizes clusters simultaneously without the sequential crossover.',
  },

  // ── Data Prep & Quality ───────────────────────────────────────────
  {
    id: 'l2q12',
    topic: 'Data Prep & Quality',
    prompt:
      'According to Lecture 2, roughly what share of a data science project is typically spent on the Prepare phase (asking questions, acquiring, organizing, cleaning and visualizing data)?',
    options: ['10-20%', '60-80%', '30-40%', 'Under 5%'],
    answerIndex: 1,
    explanation:
      'Data preparation/wrangling consumes 60-80% of project time, with only 20-40% left for analysis and application - the "most time-consuming, least enjoyable" part of data science. The other figures understate it.',
  },
  {
    id: 'l2q13',
    topic: 'Data Prep & Quality',
    prompt:
      'Which transformation produces a variable with mean 0 and standard deviation 1?',
    options: [
      'Normalization (rescaling to a fixed min-max range)',
      'Log transformation',
      'One-hot encoding',
      'Standardization (z-score normalization)',
    ],
    answerIndex: 3,
    explanation:
      'Standardizing subtracts the mean and divides by the standard deviation, giving a standard normal-style variable (mean 0, SD 1). Normalization instead rescales values into a specified range such as [0, 1]; log transforms reduce skew; one-hot encoding converts categories to indicators.',
  },
  {
    id: 'l2q14',
    topic: 'Data Prep & Quality',
    prompt:
      'OMOP, the common data model gaining momentum internationally (adopted by All of Us and N3C), is developed and maintained by which community?',
    options: ['WHO', 'OHDSI (Observational Health Data Sciences and Informatics)', 'HL7', 'SNOMED International'],
    answerIndex: 1,
    explanation:
      'The OMOP CDM (current version 5.4) is maintained by the OHDSI community, whose Athena service translates between healthcare vocabularies. WHO maintains ICD, HL7 maintains FHIR, and SNOMED International maintains SNOMED CT - all standards, but not OMOP.',
  },
  {
    id: 'l2q15',
    topic: 'Data Prep & Quality',
    prompt:
      'Which standard clinical vocabulary is polyhierarchical, contains hundreds of thousands of granular concepts, and is designed to support direct clinical care and semantic interoperability at the point of care?',
    options: ['SNOMED CT', 'ICD-10', 'DRG', 'TOSP'],
    answerIndex: 0,
    explanation:
      'SNOMED CT is a dynamic, granular, polyhierarchical clinical terminology with 100,000s of concepts organized by meaning for point-of-care recording and information sharing. ICD-10 is a mono-hierarchical classification for statistical reporting, DRGs are resource groups (100s) for financing, and TOSP is Singapore\'s table of surgical procedures.',
  },
  {
    id: 'l2q16',
    topic: 'Data Prep & Quality',
    prompt:
      'After a patient is discharged, diagnoses are translated into mutually exclusive coded groups used for mortality statistics, benchmarking, financing and epidemiological research. This describes the primary purpose of which system?',
    options: [
      'SNOMED CT clinical terminology',
      'The Charlson Comorbidity Index',
      'FAIR data principles',
      'ICD classification (ICD-9/ICD-10)',
    ],
    answerIndex: 3,
    explanation:
      'ICD is a mono-hierarchical classification with mutually exclusive groups, applied after discharge to support consistent statistical reporting and secondary use (financing, registries, research). SNOMED CT supports point-of-care recording, Charlson is a comorbidity score built on top of such codes, and FAIR concerns data stewardship, not coding.',
  },
  {
    id: 'l2q17',
    topic: 'Data Prep & Quality',
    prompt:
      'In a diabetes clinic dataset, HbA1c results are missing precisely for patients whose HbA1c values exceed 10 (e.g., very sick patients avoid testing). Which missingness mechanism is this?',
    options: [
      'MCAR - missing completely at random',
      'MAR - missing at random',
      'MNAR - missing not at random',
      'Structural missingness',
    ],
    answerIndex: 2,
    explanation:
      'When the probability of being missing depends on the (unobserved) value itself, the data are MNAR - the hardest case, which cannot be confirmed from the observed data alone. MAR would mean missingness depends only on other observed variables (e.g., clinic type), MCAR on nothing at all, and structural missingness means the data were never supposed to be collected.',
  },
  {
    id: 'l2q18',
    topic: 'Data Prep & Quality',
    prompt:
      'Complete-case analysis (listwise deletion) yields unbiased results only under which condition?',
    options: [
      'The data are MNAR',
      'The data are MAR',
      'The data are MCAR (or the complete cases are a random sample of the analytic sample)',
      'At least 50% of rows are complete',
    ],
    answerIndex: 2,
    explanation:
      'Listwise deletion is easy but biases results unless missingness is truly MCAR, because otherwise the complete cases are not a random sample. Under MAR or MNAR the deleted rows differ systematically; the 50% threshold is irrelevant - even a large complete subset can be biased.',
  },
  {
    id: 'l2q19',
    topic: 'Data Prep & Quality',
    prompt:
      'The harmonized data quality terminology (used by the OHDSI Data Quality Dashboard) defines three primary dimensions of data quality. Which option is NOT one of them?',
    options: ['Timeliness', 'Plausibility', 'Conformance', 'Completeness'],
    answerIndex: 0,
    explanation:
      'The three harmonized dimensions are Plausibility (are the data believable?), Conformance (do values conform to standards/formats?) and Completeness (are values missing?). Timeliness appears in other quality frameworks but is not one of the three primary dimensions here.',
  },
  {
    id: 'l2q20',
    topic: 'Data Prep & Quality',
    prompt:
      'Using Tukey fences with the conventional factor of 1.5, a data point is flagged as a potential outlier when it lies...',
    options: [
      'more than 3 standard deviations from the mean',
      'outside the 5th-95th percentile band',
      'below Q1 - 1.5 x IQR or above Q3 + 1.5 x IQR',
      'below the median minus one IQR',
    ],
    answerIndex: 2,
    explanation:
      'Tukey (1977) fences flag values beyond Q1 - 1.5 x IQR or Q3 + 1.5 x IQR, the same rule visualized by boxplot whiskers (Hoaglin & Iglewicz later suggested a factor of 2.2). The standard-deviation and percentile rules are different outlier heuristics, and the median-minus-IQR option is not a recognized rule.',
  },
  {
    id: 'l2q21',
    topic: 'Data Prep & Quality',
    prompt:
      'A blood pressure variable has ordered levels normal < pre-hypertensive < grade 1 < grade 2. What is the pitfall of encoding it with plain one-hot indicator variables?',
    options: [
      'One-hot encoding cannot handle more than three levels',
      'The ordinal (semantic) relationship among the levels is hidden from the learning algorithm',
      'One-hot encoding forces the levels to become continuous values',
      'It makes standardization impossible afterwards',
    ],
    answerIndex: 1,
    explanation:
      'Pitfall 8.4.1: one-hot encoding of ordinal variables hides the ordering from the model; an encoding like "at least grade X" makes the semantics explicit. One-hot handles any number of levels, produces binary (not continuous) columns, and does not prevent later scaling.',
  },
  {
    id: 'l2q22',
    topic: 'Data Prep & Quality',
    prompt:
      'Which statement correctly describes the UCI Chronic Kidney Disease dataset used in the Lecture 2 hands-on lab?',
    options: [
      '4,000 patients, 10 features, no missing values',
      '400 patients, 24 features and no outcome label, so only clustering is possible',
      '250 patients, all of whom have CKD',
      '400 patients, 24 features plus a binary target "class" (CKD vs not CKD), with missing values',
    ],
    answerIndex: 3,
    explanation:
      'The CKD dataset has 400 unique rows and 25 fields - 24 features (age, bp, sg, hemo, sc, etc.) plus the binary "class" target - and contains missing values, which is exactly why the lab practises drop-duplicates, missing value imputation, recoding and rescaling. 250 is the number of CKD-positive patients later used for clustering, not the whole dataset.',
  },

  // ── ML & Clustering ───────────────────────────────────────────────
  {
    id: 'l2q23',
    topic: 'ML & Clustering',
    prompt:
      'What is the key difference between supervised and unsupervised learning as presented in Lecture 2?',
    options: [
      'Supervised learning uses available outcome labels; unsupervised learning infers structure without labels',
      'Supervised learning is always more accurate than unsupervised learning',
      'Unsupervised learning requires larger datasets than supervised learning',
      'Supervised learning works only on numeric data',
    ],
    answerIndex: 0,
    explanation:
      'In supervised learning (e.g., classification) outcome labels are AVAILABLE, while in unsupervised learning (e.g., clustering) labels are INFERRED from the data structure. Accuracy, dataset size and data type do not define the distinction.',
  },
  {
    id: 'l2q24',
    topic: 'ML & Clustering',
    prompt: 'Which sequence correctly orders the k-means algorithm steps?',
    options: [
      'Compute centroids -> choose K -> assign points -> stop after one pass',
      'Assign points to clusters -> choose K -> compute centroids -> iterate',
      'Choose K and place initial seeds -> assign each point to the closest seed -> recompute centroids as new seeds -> reassign points and iterate until stable',
      'Choose K -> compute the global mean -> split the data at the mean -> merge the closest clusters',
    ],
    answerIndex: 2,
    explanation:
      'K is decided in advance and K seeds are placed (randomly); each observation is allocated to the closest seed; the centroid of each cluster becomes the new seed; points are reassigned and steps repeat until a stopping criterion (in practice about 5-25 iterations reaches a stable solution). Merging closest clusters describes hierarchical, not k-means, clustering.',
  },
  {
    id: 'l2q25',
    topic: 'ML & Clustering',
    prompt: 'What quantity does k-means clustering seek to minimize?',
    options: [
      'The between-cluster sum of squares',
      'The within-cluster sum of squares (inertia)',
      'The number of clusters K',
      'The classification error rate against the true labels',
    ],
    answerIndex: 1,
    explanation:
      'K-means minimizes inertia - the within-cluster sum of squares, i.e., total variation of points around their cluster centroids. Between-cluster variation is thereby (indirectly) maximized, K is fixed in advance, and there are no true labels in unsupervised learning.',
  },
  {
    id: 'l2q26',
    topic: 'ML & Clustering',
    prompt: 'What is the purpose of the elbow method in k-means clustering?',
    options: [
      'To detect and remove outliers before clustering',
      'To decide which distance metric to use',
      'To standardize the features',
      'To choose the number of clusters K by finding where additional clusters stop reducing inertia substantially',
    ],
    answerIndex: 3,
    explanation:
      'The elbow method plots inertia (within-cluster sum of squares) against K and picks the "elbow" where the curve flattens - adding more clusters beyond that point buys little reduction in variation. It does not handle outliers, distance metrics or scaling, which are separate preparation decisions.',
  },
  {
    id: 'l2q27',
    topic: 'ML & Clustering',
    prompt:
      'Why must features be rescaled before running k-means on healthcare data such as age [0-100] and annual cost [0-100,000]?',
    options: [
      'K-means is distance-based, so variables with larger numeric ranges would dominate the cluster assignments',
      'K-means only accepts values between 0 and 1',
      'Rescaling guarantees the globally optimal clustering',
      'Rescaling removes all outliers automatically',
    ],
    answerIndex: 0,
    explanation:
      'Cluster assignment depends on distances, so an unscaled variable a thousand times larger (cost vs age) would swamp the others; the lecture guideline is to rescale ALL variables, log/square-root transform highly skewed ones, and check for outliers (or use a Robust Scaler). Rescaling neither guarantees a global optimum nor removes outliers, and k-means has no [0,1] input requirement.',
  },
  {
    id: 'l2q28',
    topic: 'ML & Clustering',
    prompt:
      'In the StatQuest k-means video, the algorithm is re-run several times with different random starting points. How is the best clustering chosen?',
    options: [
      'The run that converged in the fewest iterations wins',
      'The run whose clusters are most equal in size wins',
      'The run with the lowest total within-cluster variation wins',
      'The first run is always kept, since k-means is deterministic',
    ],
    answerIndex: 2,
    explanation:
      'Because random initialization can land in a poor solution, StatQuest re-runs k-means with different random starts and keeps the clustering with the smallest total within-cluster variation. Convergence speed and cluster-size balance are not the quality criterion, and k-means is not deterministic - initial seeds matter.',
  },
  {
    id: 'l2q29',
    topic: 'ML & Clustering',
    prompt:
      'According to the StatQuest pre-class video, how does basic k-means clustering begin?',
    options: [
      'By building a dendrogram of all pairwise distances',
      'By sorting the data and splitting it into K equal groups',
      'By computing the overall mean and splitting the data around it',
      'By selecting K (in advance) and randomly picking K initial points to serve as starting clusters',
    ],
    answerIndex: 3,
    explanation:
      'The video starts by choosing K up front, randomly selecting K data points as initial cluster centres, assigning every point to the nearest centre, then recomputing cluster means and repeating until assignments stop changing. Dendrograms belong to hierarchical clustering, and equal-size or mean-based splits are not part of k-means.',
  },
  {
    id: 'l2q30',
    topic: 'ML & Clustering',
    prompt:
      'Which statement correctly contrasts hierarchical clustering with partitioning methods like k-means?',
    options: [
      'Hierarchical clustering requires K to be fixed before starting; k-means does not',
      'K-means merges the two closest clusters at every step',
      'Hierarchical clustering only works on binary variables',
      'Hierarchical clustering starts with each point as its own cluster and repeatedly merges the two closest clusters; k-means maintains K clusters and assigns points to the closest one',
    ],
    answerIndex: 3,
    explanation:
      'Hierarchical (agglomerative) clustering begins with every point as a singleton cluster and repeatedly combines the two closest, needing no pre-set K; partitioning methods like k-means fix K and repeatedly place points into the closest of K clusters. The first two options swap the methods\' properties, and neither method is restricted to binary data.',
  },
  {
    id: 'l2q31',
    topic: 'ML & Clustering',
    prompt:
      'In the unsupervised patient segmentation framing example (identifying patient subgroups with similar clinical and utilisation profiles), how are OUTCOMES handled?',
    options: [
      'They are not used to create the clusters, but may be examined afterwards to describe or validate the clusters',
      'They are the most important clustering variable and must be included',
      'They replace the target population element of the framing',
      'They are used to compute the inertia during clustering',
    ],
    answerIndex: 0,
    explanation:
      'In the segmentation design the clusters are built from variables such as age, chronic condition count, ED visits and prior cost (e.g., 2025 data), while outcomes (e.g., 2026 utilisation) are held out and examined later to characterize or validate the segments. Including the outcome in the clustering would defeat the unsupervised framing; inertia is computed from the clustering variables only.',
  },
  {
    id: 'l2q32',
    topic: 'ML & Clustering',
    prompt:
      'Which sequence best matches the Lecture 2 CKD clustering lab (Lab 2) workflow?',
    options: [
      'One-hot encode all variables -> run hierarchical clustering -> prune the dendrogram',
      'Impute the target label -> train a classifier -> extract clusters from its errors',
      'Keep only numeric columns -> visualize distributions -> standard-scale the data -> evaluate the optimal number of clusters -> visualize clusters in reduced dimensions -> interpret them',
      'Cluster the raw unscaled data on all 400 patients including non-CKD cases',
    ],
    answerIndex: 2,
    explanation:
      'Lab 2 clusters the 250 CKD-positive patients using only the numeric columns, standard-scales the data before k-means, evaluates the optimal K, then visualizes the clusters with dimensionality reduction and interprets their clinical characteristics. It is unsupervised (no classifier), uses k-means rather than hierarchical clustering, and never clusters raw unscaled data on the full 400.',
  },
  {
    id: 'l2q33',
    topic: 'ML & Clustering',
    prompt:
      'In the machine learning workflow presented in Lecture 2, what characterizes the TEST data used for model evaluation?',
    options: [
      'It is the same data used for hyperparameter tuning',
      'It is data unseen by the model during training (out-of-sample data)',
      'It must be at least twice the size of the training set',
      'It is generated synthetically from the training data',
    ],
    answerIndex: 1,
    explanation:
      'Test data is out-of-sample data the model has never seen, giving an honest estimate of generalization; hyperparameter tuning happens on the training/validation split, not the test set. There is no rule that the test set exceeds the training set, and it should be real held-out data, not synthetic copies - a point that matters for Quiz 1\'s lifecycle questions linking problem framing, data design and first-pass analysis.',
  },
]
