import type { Definition } from './types'

/**
 * Lectures 3 & 4 - Applied Healthcare Analytics (Dr Sean Lam, 2026)
 * L3: supervised learning (linear & logistic regression, decision trees),
 * the ML workflow, model evaluation (discrimination, calibration, other
 * metrics), and dimensionality reduction (additional material).
 * L4: ensemble methods (voting, stacking, bagging, random forest, boosting)
 * and Conclude & Communicate (reporting frameworks: EQUATOR, TRIPOD, etc.).
 * New glossary terms only; terms already in definitions.ts / definitions_l2.ts
 * (Logistic regression, Machine learning workflow, Feature engineering,
 * t-SNE, Feature selection vs feature extraction, etc.) are not repeated.
 * Quiz 2 (25%, Session 5) covers this material.
 */
export const l34Definitions: readonly Definition[] = [
  // ── L3 Segment 1: Predictive models ────────────────────────────────
  {
    term: 'Predictive model',
    definition:
      'A model F(x) that learns patterns linking patient characteristics X (age, vitals, previous admissions, lab results) to an outcome Y, then applies those patterns to estimate the outcome (y-hat) for a new patient - e.g. estimated probability of hospital admission. Parameters are learned by empirical risk minimisation: a loss function penalises poor predictions (least-squares loss for regression; entropy or Gini for trees) and the algorithm finds the parameter vector b that minimises average loss over the sample. Actual outcomes are also influenced by unmeasured factors and random variation (the error term epsilon).',
    category: 'Analytics & AI',
    related: ['Linear regression', 'Logistic regression', 'Decision tree'],
  },
  {
    term: 'Linear regression',
    definition:
      'Supervised model for CONTINUOUS response variables: Y = alpha + beta1*X1 + ... + betak*Xk + epsilon, fitted by finding the coefficients b that minimise the least-squares loss (sum of squared differences between actual and predicted Y). Deck example: predicting total procedure time (TPT) per surgical case from ~80,000 records across six Dutch academic hospitals, using estimated surgeon-controlled time, patient age, operation type, ASA status and anaesthesia type - better OR schedules mean higher utilisation.',
    category: 'Analytics & AI',
    related: ['R-squared & adjusted R-squared', 'Generalized Linear Model (GLM)', 'Predictive model'],
  },
  {
    term: 'R-squared & adjusted R-squared',
    definition:
      'R-squared = 1 - SS_residual/SS_total measures how much of the variation in the outcome the regression explains: R2 = 0.65 means the model explains about 65% of the variation in hospital length of stay. BUT R-squared almost always increases (or stays the same) when you add more predictors, so adjusted R-squared applies a penalty: Adjusted R2 = 1 - (1 - R2)(n-1)/(n-p-1), where n = observations and p = predictors. Listed in the deck as an "overall" evaluation measure alongside MSE and log loss.',
    category: 'Analytics & AI',
    related: ['Linear regression', 'Model evaluation families'],
  },
  {
    term: 'Logit (log-odds)',
    definition:
      "The transformation logistic regression fits: log(odds) = log(p/(1-p)) = beta0 + beta1*X1 + ... + betak*Xk. Fitting the logit maps a probability bounded in (0,1) onto the whole real line so it can be modelled linearly; converting back gives the S-shaped curve P(y=1) = 1/(1 + e^-(beta0 + beta1*x1 + ...)). Coefficients are estimated by maximising the likelihood of the observed binary outcomes. Suitable whenever the outcome is binary: 30-day readmission yes/no, missed appointment, high-risk deterioration, claim approved.",
    category: 'Analytics & AI',
    related: ['Logistic regression', 'Odds ratio', 'Generalized Linear Model (GLM)'],
  },
  {
    term: 'Odds ratio',
    definition:
      'Ratio of the odds of an outcome in the exposed group (a/b in a 2x2 event-count table) to the odds in the unexposed group (c/d). From logistic regression, the OR for predictor X1 is e^beta1: the crude OR comes from a model with X1 alone, while the ADJUSTED OR comes from a model that also includes other covariates. Deck example (NULL-EASE validation, JAHA 2024): every 1-point increase in the score raised the odds of in-hospital mortality by about 67% after adjusting for sex, residential arrest, diabetes, chronic respiratory disease and stroke.',
    category: 'Analytics & AI',
    related: ['Logit (log-odds)', 'Logistic regression'],
  },
  {
    term: 'Generalized Linear Model (GLM)',
    definition:
      'The general family containing linear and logistic regression - a maximum-likelihood estimator for the exponential family of distributions. A fully specified GLM has three parts: (1) the distribution of y, (2) a linear predictor eta = X*beta, and (3) a link function g(mu) connecting the expectation E(y) = mu to the linear predictor: eta = g(mu). Logistic regression is the GLM that uses the LOGIT link function with a binomial outcome distribution.',
    category: 'Analytics & AI',
    related: ['Linear regression', 'Logit (log-odds)'],
  },
  {
    term: 'Decision tree',
    definition:
      "Model that predicts by asking a sequence of simple yes/no questions; each split separates patients into groups with increasingly similar outcomes, and a patient follows a path to a final risk group - transparent 'if-then' logic. Built top-down, recursively, by divide-and-conquer: a GREEDY algorithm picks the best local split at each node using a criterion (information gain, Gini impurity reduction, gain ratio; variance reduction for regression trees). Stops when all samples share a class, no useful attributes or samples remain, no split improves impurity, or a complexity limit (max_depth, min_samples_split, min_samples_leaf, max_leaf_nodes) is hit. Trees beat linear models when predictor-response relationships are non-linear; linear models win when they are linear.",
    category: 'Analytics & AI',
    related: ['Entropy & information gain', 'Gini index', 'Pruning', 'Random forest'],
  },
  {
    term: 'Entropy & information gain',
    definition:
      "Entropy H(Y) = -sum(p_i * log2(p_i)) measures the uncertainty (mixedness) of a variable: 0 for a pure node (100%/0%), maximum 1 when classes are 50/50 (log base 2 makes the equal-split entropy exactly 1). Information gain = Info(Y) - Info_A(Y), the entropy reduction from splitting on attribute A, where Info_A weights each partition's entropy by its share of samples. Deck worked example: 14 ED-admission records with 9 YES / 5 NO give root entropy I(9,5) = 0.940; Gain(Age) = 0.246 beats Income (0.029), Diabetes (0.151) and Cholesterol (0.048), so Age is the first split.",
    category: 'Analytics & AI',
    related: ['Decision tree', 'Gini index'],
  },
  {
    term: 'Gini index',
    definition:
      "Alternative impurity criterion: Gini(Y) = 1 - sum(p_j^2), lowest when a node is pure. It is the DEFAULT split criterion in scikit-learn's DecisionTreeClassifier (used in Lab 1; entropy can be specified instead). Other attribute-selection measures in the deck: CHAID (based on the chi-square test of independence), C-SEP, the G-statistic, and CART (multivariate splits on linear combinations of attributes). Most give good results and none is significantly superior in all cases.",
    category: 'Analytics & AI',
    related: ['Entropy & information gain', 'Decision tree'],
  },
  {
    term: 'Pruning',
    definition:
      'Cutting a decision tree back to avoid overfitting. POST-pruning grows the full tree then removes branches; PRE-pruning stops growth early via complexity limits such as max_depth, min_samples_split, min_samples_leaf and max_leaf_nodes. Cross-validation guides the choice: plot cross-validation error against tree size and keep the size where CV error is minimised (in the deck’s regression-tree example the minimum MSE occurred at tree size three).',
    category: 'Analytics & AI',
    related: ['Decision tree', 'Overfitting vs underfitting', 'K-fold cross-validation'],
  },
  {
    term: 'Overfitting vs underfitting',
    definition:
      'Overfitting: the model memorises noise and idiosyncrasies of the training data, so it looks excellent in training but fails on new patients (low bias, high variance). Underfitting: the model is too simple to capture the real signal, performing poorly even in training (high bias, low variance). Pruning, complexity limits, cross-validation and ensembles are the counter-measures covered in class; the train/test split exists precisely to expose overfitting.',
    category: 'Analytics & AI',
    related: ['Bias-variance tradeoff', 'Pruning', 'Train / validation / test split'],
  },
  {
    term: 'Bias-variance tradeoff',
    definition:
      "Quoted in the deck from Aliferis & Simon: 'For a fixed sample size and data generating function, there is an optimal model complexity leading to smallest model error possible.' Total error decomposes into bias (error from a model too simple) plus variance (error from sensitivity to the particular training sample). Increasing complexity lowers bias but raises variance; the sweet spot minimises their sum. Bagging and random forests attack the VARIANCE side; boosting primarily attacks bias.",
    category: 'Analytics & AI',
    related: ['Overfitting vs underfitting', 'Bagging (bootstrap aggregation)', 'Boosting'],
  },
  // ── L3 Segment 2: ML workflow & validation ─────────────────────────
  {
    term: 'Train / validation / test split',
    definition:
      'Deck workflow: 70-80% of data forms the training dataset (model building) and 20-30% the testing dataset (model testing); a validation dataset carved from training data is used for model improvement and hyperparameter tuning before the final, untouched test set measures generalisation. Caution from the deck: statisticians and machine-learning practitioners may use the words training/validation/test differently. In the BRFSS project this is the train/test split step done before fitting logistic regression, decision tree and random forest.',
    category: 'Analytics & AI',
    related: ['K-fold cross-validation', 'Hyperparameter tuning & grid search', 'Machine learning workflow'],
  },
  {
    term: 'Internal vs external validation',
    definition:
      'Internal validation asks whether the model generalises from the discovery sample to the ACCESSIBLE population; external validation asks whether it generalises to the TARGET population and other populations of interest. The deck notes the accessible population can legitimately be defined as just your own hospital - it depends on your problem statement. This links Lecture 2 problem framing to Lecture 3 evaluation.',
    category: 'Analytics & AI',
    related: ['Accessible population & discovery sample', 'Target population', 'TRIPOD'],
  },
  {
    term: 'K-fold cross-validation',
    definition:
      'Split the training data into k folds; train on k-1 folds and validate on the held-out fold, rotating so every fold is used once; report the distribution of performance scores. The deck illustrates 5-fold CV repeated 3 times with re-randomised folds. Uses: hyperparameter tuning, and choosing model complexity (e.g. selecting the tree size where cross-validation error is minimum). Also the engine inside stacking / Super Learner.',
    category: 'Analytics & AI',
    related: ['Hyperparameter tuning & grid search', 'Pruning', 'Stacking (Super Learner)'],
  },
  {
    term: 'Hyperparameter tuning & grid search',
    definition:
      'Hyperparameters are settings chosen BEFORE training (tree depth, min samples per leaf, number of estimators, learning rate) rather than learned from data. In the ML workflow they sit in the model-improvement loop: train, validate, tune, retrain. Grid search - used in the heart-failure lab with cross-validation - systematically tries combinations of hyperparameter values and keeps the best-scoring one. Note from the lab: automatic CV, bagging, random forest and XGBoost runs can take a few minutes.',
    category: 'Analytics & AI',
    related: ['K-fold cross-validation', 'Train / validation / test split', 'Random forest'],
  },
  // ── L3 Segment 3: Model evaluation ─────────────────────────────────
  {
    term: 'Model evaluation families',
    definition:
      "The deck's three-family framework for judging whether a model is good enough. (1) OVERALL measures - how close are predictions to actual outcomes overall? (R2, adjusted R2, MSE, log loss). (2) DISCRIMINATION - can the model separate patients who experience the outcome from those who do not? (sensitivity, specificity, ROC-AUC/C-statistic, precision, recall). (3) CALIBRATION - are the predicted risks numerically accurate: do about x of 100 patients given x% risk actually have the outcome? (Brier score, calibration plot, calibration-in-the-large, calibration slope, Hosmer-Lemeshow). Quiz-favourite distinction: discrimination is about RANKING, calibration about the probability VALUES.",
    category: 'Analytics & AI',
    related: ['ROC curve & AUROC', 'Calibration', 'Brier score'],
  },
  {
    term: 'Confusion matrix',
    definition:
      'The 2x2 table crossing predicted vs actual classes that underlies every discrimination metric. True Positive (TP): predicted positive, actually positive. False Positive (FP): predicted positive, actually negative (false alarm). False Negative (FN): predicted negative, actually positive (missed case). True Negative (TN): predicted negative, actually negative. Row/column ratios generate sensitivity TP/(TP+FN), specificity TN/(TN+FP), PPV TP/(TP+FP) and NPV TN/(TN+FN). The matrix changes with the classification threshold.',
    category: 'Analytics & AI',
    related: ['Sensitivity (recall)', 'Specificity', 'Precision (PPV) & NPV', 'Classification threshold'],
  },
  {
    term: 'Accuracy',
    definition:
      'Proportion of correct predictions: (TP + TN) / (TP + TN + FP + FN). Implicitly assumes the SAME weight (cost) on false positives and false negatives, so it is a good threshold-selection measure only when those costs are similar - rarely true in healthcare, where missing a deteriorating patient (FN) usually costs far more than a false alarm (FP). With imbalanced outcomes (like most BRFSS targets) accuracy is misleading: always predicting the majority class scores high.',
    category: 'Analytics & AI',
    related: ['Confusion matrix', 'F1 score', 'Classification threshold'],
  },
  {
    term: 'Sensitivity (recall)',
    definition:
      "TP / (TP + FN): of all ACTUAL positive cases (e.g. deaths), how many did the model detect? Also called recall or the true positive rate. High sensitivity means few missed cases, which matters when the cost of a false negative is high (screening, deterioration alerts). Plotted on the y-axis of the ROC curve; recall is also one half of the F1 score.",
    category: 'Analytics & AI',
    related: ['Specificity', 'ROC curve & AUROC', 'F1 score'],
  },
  {
    term: 'Specificity',
    definition:
      'TN / (TN + FP): of all ACTUAL negative cases (e.g. survivors), how many did the model correctly identify? High specificity means few false alarms. The ROC curve plots sensitivity against 1 - specificity (the false positive rate); the pneumoconiosis FEV example shows the trade-off - raising the threshold from 60% to 80% of normal FEV lifted sensitivity from 41% to 85% but dropped specificity from 92% to 62%.',
    category: 'Analytics & AI',
    related: ['Sensitivity (recall)', 'Classification threshold', 'ROC curve & AUROC'],
  },
  {
    term: 'Precision (PPV) & NPV',
    definition:
      "Precision / Positive Predictive Value = TP/(TP+FP): of all PREDICTED positives, how many are truly positive? NPV = TN/(TN+FN): of all predicted negatives, how many are truly negative? Unlike sensitivity and specificity, predictive values depend on PREVALENCE - the deck's HIV oracle has 99.9% sensitivity and 99.9% specificity, yet with Singapore prevalence of 0.01228% Bayes' theorem gives P(HIV | positive) of only 10.93%. This is why sensitivity and specificity alone are not enough, and why precision-based metrics matter for rare outcomes.",
    category: 'Analytics & AI',
    related: ['Confusion matrix', 'Precision-recall curve & AUPRC', 'Sensitivity (recall)'],
  },
  {
    term: 'Classification threshold',
    definition:
      "The cut-off applied to a predicted probability (or score) to convert it into a positive/negative call - every threshold produces a different confusion matrix. FEV/pneumoconiosis example: classify diseased if FEV < t% of normal; t=80% gives sensitivity 85% / specificity 62%, t=60% gives 41% / 92%. Choosing the optimal threshold requires defining the cost of a false positive vs a false negative; AUROC sidesteps the choice by summarising performance across ALL thresholds. Clinically, guidelines may fix the threshold for you (e.g. intervene at >20% risk), which is where calibration becomes critical.",
    category: 'Analytics & AI',
    related: ['Confusion matrix', 'ROC curve & AUROC', 'Calibration'],
  },
  {
    term: 'ROC curve & AUROC',
    definition:
      "The Receiver Operating Characteristic curve plots sensitivity against 1 - specificity, connecting the operating points of ALL possible thresholds. The Area Under it (AUROC, or C-statistic) is a global, threshold-free measure of discrimination with a rank interpretation: AUC = 0.73 means that in 73% of randomly drawn (event, non-event) pairs, the event patient received the higher risk score. AUC depends only on the ORDER of predictions, not their values - so two models can share a ROC curve yet output very different risks. Benchmarks: 1.0 = perfect discrimination (some threshold achieves 100% accuracy); 0.5 = just guessing; below 0.5 = worse than chance (predictions inverted).",
    category: 'Analytics & AI',
    related: ['Model evaluation families', 'Classification threshold', 'Calibration'],
  },
  {
    term: 'Precision-recall curve & AUPRC',
    definition:
      'Plots precision (y-axis) against recall (x-axis) across thresholds; curves toward the top-right indicate better performance and the area under it (AUPRC) summarises the curve. Because both axes are built from predicted positives and actual positives (true negatives never appear), the PR curve is more informative than ROC for rare outcomes / imbalanced classes - highly relevant to BRFSS project outcomes with low event rates. The optimal F1 point lies on this curve.',
    category: 'Analytics & AI',
    related: ['Precision (PPV) & NPV', 'Sensitivity (recall)', 'F1 score'],
  },
  {
    term: 'F1 score',
    definition:
      'Harmonic mean of precision and recall: F1 = 2 x Precision x Recall / (Precision + Recall) = 2TP / (2TP + FP + FN); note true negatives never enter the formula. It is the beta=1 member of the F-beta family, F_beta = (1+beta^2) x Precision x Recall / (beta^2 x Precision + Recall), which assumes balanced weight on both; F2 (beta=2) puts more emphasis on recall - useful when missing cases is costlier than false alarms.',
    category: 'Analytics & AI',
    related: ['Precision (PPV) & NPV', 'Sensitivity (recall)', 'Precision-recall curve & AUPRC'],
  },
  {
    term: 'Calibration',
    definition:
      "Whether predicted risks are numerically accurate: if the model predicts 20% risk for 100 similar patients, do about 20 experience the outcome? Deck toolkit: CALIBRATION-IN-THE-LARGE compares overall mean predicted risk with the observed event rate ('right on average'); the HOSMER-LEMESHOW test groups patients by predicted risk and tests observed vs expected events within groups; the RELIABILITY DIAGRAM / CALIBRATION PLOT plots mean predicted risk against observed event rate (binning may be needed) - a well-calibrated model follows the 45-degree diagonal; the COX intercept/slope regression shows over/under-prediction (intercept) and whether predictions are too extreme or too weak (slope); the INTEGRATED CALIBRATION INDEX (ICI) averages the absolute gap to a smoothed calibration curve; ECE and MCE also exist. No single method is best - use a combination. Matters clinically because guidelines act on absolute risk (e.g. intervene at >20%), and models with identical ROC curves can give very different risks. Prof requested calibration assessment for the BRFSS group project.",
    category: 'Analytics & AI',
    related: ['Brier score', 'Model evaluation families', 'ROC curve & AUROC'],
  },
  {
    term: 'Brier score',
    definition:
      "Mean squared difference between predicted probabilities and actual 0/1 outcomes - the MSE of the predicted probabilities. Lower is better; 0 is perfect. Rare-event caveat worked in the deck: with 1% incidence, a useless model that always predicts 0.01 scores BS = 0.99x(0.01)^2 + 0.01x(0.99)^2 = 0.0099 - the score looks excellent only because 99% of patients have no event, so never interpret a Brier score without the event rate. An alternative is the average absolute error; the deck also notes a relationship to Nagelkerke R2. One of the prof-requested calibration metrics for the BRFSS project.",
    category: 'Analytics & AI',
    related: ['Calibration', 'Model evaluation families'],
  },
  // ── L3 Additional material: dimensionality reduction ───────────────
  {
    term: 'Dimensionality reduction',
    definition:
      'Mapping data with many observed variables into a lower-dimensional space that keeps most of the information - enabling visualisation of clusters in 2-3 dimensions and creation of more informative engineered features (combinations of observed variables can carry more insight even if their physical meaning is obscured). Lecture 2 covered t-SNE for cluster visualisation; Lecture 3 adds PCA as the linear workhorse. Presented as additional (non-core) material.',
    category: 'Analytics & AI',
    related: ['Principal Component Analysis (PCA)', 't-SNE (dimensionality reduction)', 'Feature selection vs feature extraction'],
  },
  {
    term: 'Principal Component Analysis (PCA)',
    definition:
      'Linear projection that transforms a set of correlated variables into a new set of UNCORRELATED variables (principal components) on orthogonal axes. PC1 points in the direction of greatest variability in the data; after removing that variability, each next PC is orthogonal to the earlier ones. The SCREE PLOT shows each component’s contribution to total variance - keep the top components (the deck’s example retains ~65% of total variation) and drop the rest, accepting a small, bearable information loss. In PCA the factors are combinations of the observed variables.',
    category: 'Analytics & AI',
    related: ['Dimensionality reduction', 'Feature selection vs feature extraction'],
  },
  // ── L4 Segment 1: Ensemble methods ─────────────────────────────────
  {
    term: 'Ensemble method',
    definition:
      'Combines predictions from multiple models (base learners) to produce a final prediction that is usually more accurate and robust than any single model. The four families covered in Lecture 4: VOTING (combine finished models’ votes), STACKING (a meta-learner learns how to combine base learners), BAGGING (parallel training on bootstrap resamples, e.g. random forest), and BOOSTING (sequential training where each model corrects its predecessors, e.g. XGBoost). Only methods covered in class are examinable in Quiz 2.',
    category: 'Analytics & AI',
    related: ['Voting classifier (hard vs soft)', 'Stacking (Super Learner)', 'Bagging (bootstrap aggregation)', 'Boosting'],
  },
  {
    term: 'Voting classifier (hard vs soft)',
    definition:
      "Simplest ensemble: train several different classifiers (e.g. logistic regression, decision tree, SVM) and combine their outputs. HARD voting takes the majority class label across models; SOFT voting averages the models' predicted probabilities and picks the class with the highest average - soft voting uses more information and generally performs better when the base models output well-calibrated probabilities. Implemented as sklearn.ensemble.VotingClassifier.",
    category: 'Analytics & AI',
    related: ['Ensemble method', 'Stacking (Super Learner)'],
  },
  {
    term: 'Stacking (Super Learner)',
    definition:
      "Ensemble that learns HOW to combine candidate learners. Super Learner algorithm (van der Laan, Polley & Hubbard 2007), as stepped through in the deck: split data into V mutually exclusive folds; hold out one fold, train each candidate learner on the other V-1, test on the held-out fold and compute each learner's risk; repeat V times so every fold validates once; average each learner's risk across folds; select the learner or combination with the lowest cross-validated risk; then retrain on the entire dataset and evaluate on the test set. Available in R (SuperLearner) and scikit-learn (StackingClassifier/Regressor).",
    category: 'Analytics & AI',
    related: ['K-fold cross-validation', 'Ensemble method', 'Voting classifier (hard vs soft)'],
  },
  {
    term: 'Bagging (bootstrap aggregation)',
    definition:
      "Fits base classifiers IN PARALLEL, each on a random BOOTSTRAP subset of the data (samples drawn with replacement; bootstrap=True gives classic bagging), then aggregates their predictions by voting or averaging. It reduces the VARIANCE of an unstable black-box estimator such as a decision tree by injecting randomisation and ensembling the results. Key sklearn BaggingClassifier parameters from the deck: estimator (default decision tree), n_estimators (default 10 - more improves stability at compute cost), max_samples / max_features (smaller values create more diversity), oob_score (use out-of-bag samples - those not drawn into a tree's bootstrap - to estimate generalisation error without a separate validation set), and random_state for reproducibility.",
    category: 'Analytics & AI',
    related: ['Random forest', 'Ensemble method', 'Bias-variance tradeoff'],
  },
  {
    term: 'Random forest',
    definition:
      "Extension of bagging: each tree is trained on a bootstrap sample AND, at each split, only a random subset of features (max_features) is considered - this random feature projection reduces correlation among trees, which further reduces ensemble variance versus plain bagging. Four mechanisms in the deck: bagging (n_estimators, bootstrap, max_samples), random feature projection (max_features), out-of-bag error estimation (oob_score), and complexity restrictions (max_depth, min_samples_split, min_samples_leaf, max_leaf_nodes). Caveat slide (Biau & Scornet): RFs work very well in practice but theory is incomplete - tuning (bootstrap size, tree depth) remains partly empirical. One of the three required models in the BRFSS group project.",
    category: 'Analytics & AI',
    related: ['Bagging (bootstrap aggregation)', 'Decision tree', 'Feature importance'],
  },
  {
    term: 'Boosting',
    definition:
      "General paradigm for assembling a STRONG learner from a collection of WEAK learners: models are trained SEQUENTIALLY, each new (small) tree fitted to the errors/residuals of the ensemble so far - in contrast to bagging's parallel, independent trees. The SHRINKAGE parameter is the learning rate: it tells the model 'do not fully trust each new tree - add only a small part of its correction'; typical values are 0.01 or 0.001, and statistical learning approaches that learn slowly tend to perform well. Boosting primarily reduces bias, whereas bagging reduces variance.",
    category: 'Analytics & AI',
    related: ['Gradient boosting & XGBoost', 'Bagging (bootstrap aggregation)', 'Ensemble method'],
  },
  {
    term: 'Gradient boosting & XGBoost',
    definition:
      'Gradient Boosting Machines implement boosting by having each new tree fit the gradient of the loss (for classification and regression trees); available as sklearn GradientBoostingClassifier. XGBoost is the popular optimised implementation used in the heart-failure lab (Ensemble Boosting - XGBoost). Deck case study: an XGBoost model predicting asthma exacerbations from 235 candidate features (literature risk factors, prior-model features, general-health factors, clinician suggestions) outperformed existing models, reported with ROC curves and sensitivity across thresholds. Note: XGBoost/CV runs can take a few minutes in Colab.',
    category: 'Analytics & AI',
    related: ['Boosting', 'ROC curve & AUROC', 'Feature importance'],
  },
  {
    term: 'Feature importance',
    definition:
      "Ranking of how much each predictor contributes to a model's predictions - a standard output of tree ensembles (and a required lab/project step: 'Model Evaluation and Feature Importance'). Motivating case study (Chicco & Jurman 2020, the lab dataset of 299 heart-failure patients): serum creatinine and ejection fraction alone were sufficient to predict survival, and a two-feature model beat one using all original features. In the BRFSS project, feature-importance plots help translate the random forest into which risk factors matter most.",
    category: 'Analytics & AI',
    related: ['Random forest', 'Gradient boosting & XGBoost', 'Feature engineering'],
  },
  // ── L4 Segment 2: Conclude & communicate ───────────────────────────
  {
    term: 'Bias in the analytic value chain',
    definition:
      'Framework (Suresh & Guttag 2021) mapping where harm enters the ML life cycle - from historical bias in the world, through representation and measurement bias in data collection, to learning, evaluation and deployment biases. Practical defence highlighted in the deck: describe your ANALYTIC COHORT clearly so stakeholders can judge whether it reflects the real-world population of interest.',
    category: 'Project & Tools',
    related: ['Table 1 (cohort description)', 'Selection bias', 'Communicate to implement'],
  },
  {
    term: 'Table 1 (cohort description)',
    definition:
      'The standard first table of a healthcare analytics report: a clear description of the analysed cohort so readers can judge generalisability. Deck checklist of what it should summarise: patient characteristics (age, sex, ethnicity, SES), clinical characteristics (diagnosis group, comorbidities, severity), service-use variables (admissions, ED visits, outpatient appointments), outcome variables (readmission, mortality, length of stay, no-show), and data-quality indicators (missingness, unusual values, coding completeness). Expected in the BRFSS group project write-up.',
    category: 'Project & Tools',
    related: ['Bias in the analytic value chain', 'TRIPOD', 'BRFSS'],
  },
  {
    term: 'Communicate to implement',
    definition:
      "Lecture 4's closing message: translate analytical results into clear, decision-relevant messages, highlighting what is ACTIONABLE, what is UNCERTAIN, and what is NOT YET READY for action. Know your consumers of results - the deck's stakeholder table spans subject-matter experts (doctors, nurses, executives who need performance in business terms plus a feedback loop), data scientists, data engineers, software engineers, DevOps (CI/CD), model/IT risk managers and auditors, and regulators. Responsibility for safe AI growth in healthcare is shared across the public, developers, regulators, and implementers (hospitals, long-term care providers, clinics); Singapore regulators span PDPA/HBRA, HSA guidelines and the Healthcare Services Act, plus institutional ethics boards.",
    category: 'Project & Tools',
    related: ['Reporting standards & EQUATOR Network', 'Bias in the analytic value chain', 'Clinical-grade model'],
  },
  {
    term: 'Reporting standards & EQUATOR Network',
    definition:
      'Reporting standards prescribe the MINIMAL set of information that must be included in a model description so that research is REPRODUCIBLE - independent scientists can recreate the findings (models and their performance characteristics) from what is reported. The most established organisation for reporting guidelines is EQUATOR (Enhancing the QUAlity and Transparency Of health Research). Deck mapping of protocol to typical use: STROBE - observational studies; RECORD - routinely collected health data; TRIPOD - prediction model development and validation; CONSORT-AI - clinical trials involving AI interventions; SPIRIT-AI - protocols for such trials.',
    category: 'Project & Tools',
    related: ['TRIPOD', 'STROBE & RECORD', 'CONSORT-AI & SPIRIT-AI'],
  },
  {
    term: 'TRIPOD',
    definition:
      'Transparent Reporting of a multivariable prediction model for Individual Prognosis Or Diagnosis (Collins et al. 2015) - THE reporting checklist for prediction-model studies, with items covering model DEVELOPMENT, model VALIDATION, or both (source of data, participants, outcome, predictors, sample size, missing data handling, model-building, performance measures, presentation). The deck also covers TRIPOD pitfalls shared with other checklists (box-ticking without substance). Most relevant framework for reporting the BRFSS group project, which develops and validates prediction models.',
    category: 'Project & Tools',
    related: ['Reporting standards & EQUATOR Network', 'Internal vs external validation', 'Table 1 (cohort description)'],
  },
  {
    term: 'STROBE & RECORD',
    definition:
      'STROBE (Strengthening the Reporting of Observational Studies in Epidemiology, 2007/2015) is the reporting guideline for observational studies - cohort, case-control and cross-sectional designs. RECORD (2015/2017) extends STROBE for studies using ROUTINELY COLLECTED health data such as EHRs, registries and administrative claims. Both sit under the EQUATOR umbrella; a BRFSS analysis is an observational study on routinely collected survey data, so these frameworks apply alongside TRIPOD.',
    category: 'Project & Tools',
    related: ['Reporting standards & EQUATOR Network', 'Observational study', 'TRIPOD'],
  },
  {
    term: 'CONSORT-AI & SPIRIT-AI',
    definition:
      'AI extensions of the classic trial-reporting standards: CONSORT-AI guides the reporting of completed CLINICAL TRIALS involving AI interventions, while SPIRIT-AI guides the PROTOCOLS for such trials. They add AI-specific items (algorithm version, input data handling, human-AI interaction, error analysis) to the base checklists - relevant once a predictive model moves from retrospective validation to prospective clinical evaluation.',
    category: 'Project & Tools',
    related: ['Reporting standards & EQUATOR Network', 'TRIPOD', 'Randomised controlled trial (RCT) & pragmatic designs'],
  },
]
