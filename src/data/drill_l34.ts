import type { DrillCard } from './types'

/**
 * Lecture 3-4 short-answer drill cards (Quiz 2, 15 Aug: 25%, structured
 * questions like Quiz 1). Content is drawn from the verified Lecture 3 deck
 * (supervised ML, model evaluation, dimensionality reduction) and Lecture 4
 * deck (ensembles, conclude & communicate, reporting frameworks).
 * Where natural, answers connect to the BRFSS group project, which runs
 * logistic regression, decision tree and random forest, with calibration and
 * Brier score explicitly requested by the professor.
 */
export const l34Drills: readonly DrillCard[] = [
  // ── Supervised ML ─────────────────────────────────────────────────
  {
    id: 'd201',
    topic: 'Supervised ML',
    prompt:
      'When would you choose linear regression versus logistic regression for a healthcare prediction problem? Explain what logistic regression actually fits.',
    modelAnswer:
      'Linear regression is used when the response variable is continuous, for example total procedure time in the OR or length of stay; logistic regression is used when the outcome is binary, such as 30-day readmission (yes/no) or in-hospital mortality. Logistic regression does not fit the outcome directly - it fits the logit (log-odds) of the outcome as a linear function of the predictors, then converts back to a probability via P(y=1) = 1 / (1 + e^-(b0 + b1x1 + ... + bkxk)). Coefficients are estimated by maximising the likelihood of the observed outcomes, not by least squares. Both are special cases of the Generalized Linear Model, where logistic regression uses the LOGIT link function.',
    keyPoints: [
      'Linear regression: continuous response (e.g. surgical duration, LOS); logistic regression: binary outcome (readmission, mortality, no-show)',
      'Logistic fits the logit (log-odds), then maps to probability via the sigmoid 1/(1+e^-(Xb))',
      'Estimation is maximum likelihood, not least squares',
      'Both are GLMs; logistic regression uses the logit link function',
    ],
  },
  {
    id: 'd202',
    topic: 'Supervised ML',
    prompt:
      'Define the odds ratio, show how it is estimated from a logistic regression coefficient, and interpret an adjusted OR of 1.67 for a 1-point increase in a risk score.',
    modelAnswer:
      'Odds are p/(1-p); the odds ratio is the odds of the outcome in the exposed group divided by the odds in the unexposed group (a/b divided by c/d in a 2x2 table). In logistic regression, log(odds) = b0 + b1X1 + ..., so the OR for X1 is e^b1: exponentiating the coefficient gives the multiplicative change in odds per one-unit increase in X1. An adjusted OR of 1.67 means that for every 1-point increase in the score, the odds of the outcome increase by about 67%, holding all other variables in the model constant - exactly how the NULL-EASE score was reported, where each 1-point increase raised the odds of in-hospital mortality by about 67% after adjusting for sex, residential arrest, diabetes, chronic respiratory disease and stroke. The word "adjusted" signals that other covariates were included in the model.',
    keyPoints: [
      'Odds = p/(1-p); OR = odds(exposed)/odds(unexposed) = (a/b)/(c/d)',
      'From logistic regression: OR for X1 = e^b1 (exponentiated coefficient)',
      'Interpretation: OR 1.67 = odds increase ~67% per one-unit increase in the predictor',
      'Adjusted OR = effect holding the other covariates in the model constant (NULL-EASE example)',
      'OR describes change in odds, NOT change in probability/risk',
    ],
  },
  {
    id: 'd203',
    topic: 'Supervised ML',
    prompt:
      'What does R-squared measure in a linear regression, and why is adjusted R-squared preferred when comparing models with different numbers of predictors?',
    modelAnswer:
      'R-squared = 1 - SS(residual)/SS(total): the proportion of variation in the outcome explained by the model. If R2 = 0.65 when predicting hospital length of stay from age, comorbidity count and prior admissions, the model explains about 65% of the variation in length of stay in that dataset. The problem is that R-squared almost always increases, or at least stays the same, whenever another predictor is added - even a useless one - so it rewards complexity. Adjusted R-squared, 1 - (1-R2)(n-1)/(n-p-1), penalises the number of predictors p relative to the sample size n, so it only rises when a new predictor adds genuine explanatory power.',
    keyPoints: [
      'R2 = 1 - SSresidual/SStotal = proportion of outcome variation explained',
      'Worked interpretation: R2 = 0.65 means ~65% of variation in LOS explained',
      'R2 never decreases when predictors are added, so it favours overly complex models',
      'Adjusted R2 = 1 - (1-R2)(n-1)/(n-p-1) penalises the predictor count',
    ],
  },
  {
    id: 'd204',
    topic: 'Supervised ML',
    prompt:
      'Explain how a decision tree chooses which variable to split on at each node. Use the ED-admission example with Gain(Age) = 0.246 in your answer.',
    modelAnswer:
      'A tree is built top-down with a greedy, divide-and-conquer strategy: at each node it computes, for every candidate feature, how much that split would reduce impurity, and picks the single best one. With entropy as the criterion this is information gain: Gain(A) = Info(Y) - Info_A(Y), the entropy before the split minus the weighted average entropy of the child nodes. In the ED-admission example the root entropy is I(9,5) = 0.940, and splitting on Age leaves expected entropy 0.694, so Gain(Age) = 0.246 - higher than Income (0.029), Diabetes (0.151) and Cholesterol (0.048) - so Age is chosen at the root. The process then repeats recursively within each branch until a stopping condition is met; the approach is "greedy" because each choice is the best local split, with no lookahead.',
    keyPoints: [
      'Top-down, recursive, divide-and-conquer; greedy = best local split, no lookahead',
      'Information gain = entropy before split minus weighted entropy after split: Gain(A) = Info(Y) - Info_A(Y)',
      'ED example: root I(9,5)=0.940; Gain(Age)=0.246 beats Income 0.029, Diabetes 0.151, Cholesterol 0.048',
      'Repeats recursively on each subtree until a stopping condition is met',
      'Alternative criteria: Gini impurity reduction, gain ratio, variance reduction for regression trees',
    ],
  },
  {
    id: 'd205',
    topic: 'Supervised ML',
    prompt:
      'Define entropy for a binary outcome and state its value for a node that is (a) 100% one class and (b) a 50/50 mix. Name one alternative impurity measure.',
    modelAnswer:
      'Entropy measures the uncertainty of a random variable: H(Y) = -sum(p_i log2 p_i). For a pure node (100% one class) entropy is 0 - there is no uncertainty; for a 50/50 binary mix entropy reaches its maximum of 1, which is exactly why log base 2 is used, so that equal proportions give entropy 1. For example, a node with 40% events and 60% non-events has H = -(0.6 log2 0.6 + 0.4 log2 0.4) = 0.971. The Gini index, Gini(Y) = 1 - sum(p_j^2), is an alternative impurity measure and is the default criterion in scikit-learn\'s decision tree; the lecture notes that most measures give good results and none is significantly superior in all cases.',
    keyPoints: [
      'H(Y) = -sum p_i log2(p_i); higher entropy = higher uncertainty/more mixed node',
      'Pure node: entropy 0; 50/50 split: entropy 1 (maximum)',
      'log2 chosen so equally distributed classes give entropy exactly 1',
      'Alternative: Gini index = 1 - sum(p_j^2), the scikit-learn default; no criterion dominates in all cases',
    ],
  },
  {
    id: 'd206',
    topic: 'Supervised ML',
    prompt:
      'List three conditions under which a decision tree stops splitting, and explain why pruning is needed. When would a tree outperform a linear model?',
    modelAnswer:
      'A tree stops when all samples at a node belong to the same class, when no useful attributes remain or no split improves the impurity criterion, when a branch has no samples, or when a complexity limit such as max_depth, min_samples_split, min_samples_leaf or max_leaf_nodes is reached. Even so, a fully grown tree memorises noise in the training data, so pruning - removing branches after growth (post-pruning) or restricting growth in advance (pre-pruning) - is used to avoid overfitting. On model choice: if the true predictor-response relationship is linear, classical linear models outperform trees; if the relationship (or decision boundary) is non-linear, decision trees outperform the classical approaches. Trees also offer transparent if-then logic that clinicians can follow.',
    keyPoints: [
      'Stopping: same class; no useful attributes / no impurity improvement; no samples; complexity limits (max_depth, min_samples_split, min_samples_leaf, max_leaf_nodes)',
      'Pruning (post- or pre-) controls overfitting from a fully grown tree',
      'Linear relationship: linear model wins; non-linear boundaries: tree wins',
      'Trees give transparent if-then decision logic',
    ],
  },

  // ── Model Evaluation ──────────────────────────────────────────────
  {
    id: 'd207',
    topic: 'Model Evaluation',
    prompt:
      'Why must data be split into training and testing sets before building a model? Describe the roles of the training, validation and test sets in the ML workflow.',
    modelAnswer:
      'Performance measured on the same data used to fit the model is optimistically biased, because a flexible model can memorise noise (overfit); a held-out test set gives an honest estimate of how the model generalises to new patients. Typically 70-80% of the data is used for model building and 20-30% is locked away for testing: the training set fits the parameters, the validation set (or k-fold cross-validation within the training data) is used for hyperparameter tuning and model selection, and the test set is touched only once, for final evaluation. This is internal validation - generalisation from the discovery sample to the accessible population; external validation on data from other sites or populations addresses generalisability to the wider target population. In the BRFSS project this is why the train/test split is defined before fitting the logistic regression, decision tree and random forest.',
    keyPoints: [
      'Training performance is optimistically biased; overfit models memorise noise',
      'Split roughly 70-80% train / 20-30% test; test set used once, for final evaluation',
      'Validation set or k-fold CV inside the training data drives hyperparameter tuning/model selection',
      'Internal validation (accessible population) vs external validation (target/other populations)',
      'Bias-variance tradeoff: an optimal complexity minimises test error',
    ],
  },
  {
    id: 'd208',
    topic: 'Model Evaluation',
    prompt:
      'Distinguish discrimination from calibration, giving one metric for each. Why can a model with excellent AUROC still be clinically dangerous if it is poorly calibrated?',
    modelAnswer:
      'Discrimination asks whether the model can separate patients who experience the outcome from those who do not - do patients who die or get readmitted receive higher predicted risks? It is measured by AUROC/C-statistic, sensitivity, specificity, precision and recall. Calibration asks whether the predicted risks are numerically accurate - if the model predicts 20% risk for 100 similar patients, do about 20 actually experience the outcome? - measured by the Brier score, calibration plot, calibration-in-the-large, calibration slope or Hosmer-Lemeshow test. Two models can share the same ROC curve yet output very different risk values, because AUROC depends only on the ranking of predictions; if a guideline recommends intervention for everyone above 20% risk, a miscalibrated model will treat the wrong patients even though it ranks them perfectly. This is why the professor asked project groups to report calibration and Brier score alongside AUROC on BRFSS.',
    keyPoints: [
      'Discrimination = separating events from non-events (ranking); metrics: AUROC/C-statistic, sensitivity, specificity, precision/recall',
      'Calibration = numerical accuracy of predicted risks ("of 100 patients at 20%, do ~20 have the event?"); metrics: Brier score, calibration plot, calibration slope/intercept, Hosmer-Lemeshow',
      'Same ROC, different risks: AUROC uses only prediction order, not values',
      'Clinical thresholds (e.g. treat if risk >20%) make calibration decision-critical',
      'Project link: calibration + Brier requested for the BRFSS models',
    ],
  },
  {
    id: 'd209',
    topic: 'Model Evaluation',
    prompt:
      'What exactly does an AUROC of 0.73 mean? State the values for perfect discrimination and for random guessing, and explain why AUROC is threshold-independent.',
    modelAnswer:
      'AUROC 0.73 means that if you randomly draw one patient with the outcome and one without, there is a 73% chance the model assigns the higher predicted risk to the patient with the outcome - 73% of paired comparisons are ranked correctly. AUROC = 1 is perfect discrimination (some threshold achieves 100% accuracy) and AUROC = 0.5 is no better than guessing; below 0.5 the model ranks cases backwards. Because sensitivity and specificity change as the classification threshold moves, the ROC curve traces every possible threshold (sensitivity vs 1-specificity), and the area summarises discriminative power globally across all thresholds. Choosing an actual operating threshold is a separate decision requiring the relative costs of false positives versus false negatives.',
    keyPoints: [
      'AUROC = P(random event case scores higher than random non-event case); 0.73 = 73% of pairs ranked correctly',
      '1.0 = perfect discrimination; 0.5 = random guessing; <0.5 = reversed ranking',
      'ROC plots sensitivity vs 1-specificity across ALL thresholds; AUROC is a global, threshold-free summary',
      'Depends on prediction order only, not probability values',
      'Picking an operating threshold requires costs of FP vs FN',
    ],
  },
  {
    id: 'd210',
    topic: 'Model Evaluation',
    prompt:
      'A test for a rare disease has 99.9% sensitivity and 99.9% specificity, but prevalence is 0.01228%. Why are sensitivity and specificity not enough, and what should also be reported?',
    modelAnswer:
      'Sensitivity (TP/(TP+FN)) and specificity (TN/(TN+FP)) condition on the true disease state, but a patient who tests positive wants P(disease | positive) - the positive predictive value, which conditions on the prediction and depends heavily on prevalence. By Bayes\' rule, with 99.9% sensitivity and specificity at 0.01228% prevalence, PPV = (0.999 x 0.0001228) / (0.999 x 0.0001228 + 0.001 x 0.9998772) = 10.93%: nearly 9 out of 10 positive results are false alarms despite a near-perfect test. So for rare outcomes, PPV (precision) and NPV must be reported alongside sensitivity and specificity. This is also why plain accuracy can mislead - it implicitly assumes equal costs for false positives and false negatives and is dominated by the majority class.',
    keyPoints: [
      'Sensitivity/specificity condition on true status; PPV/NPV condition on the prediction',
      'PPV depends strongly on prevalence (Bayes\' rule)',
      'HIV example: 99.9%/99.9% test at 0.01228% prevalence gives PPV = 10.93%',
      'Report PPV (precision) and NPV for rare outcomes',
      'Accuracy assumes equal FP/FN costs and is dominated by the majority class',
    ],
  },
  {
    id: 'd211',
    topic: 'Model Evaluation',
    prompt:
      'When should you prefer the precision-recall curve (AUPRC) over the ROC curve (AUROC), and why? Define the F1 score and state when you would use F2 instead.',
    modelAnswer:
      'Prefer the precision-recall curve when the outcome is rare (severe class imbalance) and the positive class is what matters, because precision and recall are computed without true negatives - the huge pool of easy negatives that can make AUROC look flatteringly high. AUPRC directly shows whether high recall can be achieved while keeping false alarms (precision) acceptable, which is the real operating question for rare events like mortality or readmission in BRFSS-style data. The F score summarises the precision-recall tradeoff: F1 = 2 x Precision x Recall / (Precision + Recall) weights them equally, while F-beta with beta = 2 (F2) puts more emphasis on recall - appropriate when missing a true case (false negative) is costlier than a false alarm, as in screening for a dangerous condition.',
    keyPoints: [
      'AUPRC preferred under class imbalance / rare outcomes when the positive class is the focus',
      'Precision and recall ignore true negatives, so AUPRC is not inflated by abundant easy negatives (AUROC can be)',
      'F1 = 2PR/(P+R) = harmonic mean, balanced weights',
      'F2 (beta=2) emphasises recall - use when false negatives are costlier (e.g. missing deterioration)',
    ],
  },
  {
    id: 'd212',
    topic: 'Model Evaluation',
    prompt:
      'Define the Brier score and explain, with the 1%-incidence example, why a low Brier score can be misleading for rare events. Name two other ways to assess calibration.',
    modelAnswer:
      'The Brier score is the mean squared error of predicted probabilities against actual outcomes (0 or 1); lower is better and 0 is perfect. With 1% event incidence, a useless model that predicts 0.01 for everyone scores BS = 0.99 x (0.01-0)^2 + 0.01 x (0.01-1)^2 = 0.0099 - it looks excellent only because predicting near-zero risk is almost correct for the 99% of patients without the event, while contributing nothing to identifying the 1% who matter. Therefore Brier score should be interpreted against the event rate and paired with other calibration checks: a calibration plot / reliability diagram (mean predicted risk vs observed event rate should follow the 45-degree diagonal, with binning to derive observed rates), calibration-in-the-large, the Cox calibration intercept and slope, the Hosmer-Lemeshow test, or the Integrated Calibration Index - no single method is best, so several are used in combination. This combination is exactly what was requested for the BRFSS project models.',
    keyPoints: [
      'Brier = mean squared difference between predicted probability and actual outcome; lower better, 0 perfect',
      'Rare-event pitfall: 1% incidence, constant 0.01 prediction gives BS = 0.0099 despite zero discriminative value',
      'Calibration plot: predicted vs observed rates on the 45-degree line (binning needed)',
      'Other checks: calibration-in-the-large, Cox intercept/slope, Hosmer-Lemeshow, ICI; use several together',
    ],
  },

  // ── Ensembles & Communication ─────────────────────────────────────
  {
    id: 'd213',
    topic: 'Ensembles & Communication',
    prompt:
      'What is an ensemble method, and why does an ensemble of trees usually beat a single decision tree?',
    modelAnswer:
      'An ensemble method combines the predictions of multiple base learners into one final prediction that is usually more accurate and more robust than any single model. A single fully grown decision tree is a high-variance, unstable estimator: small changes in the training data can produce a very different tree, so its test performance fluctuates. By training many diverse trees - through bootstrap resampling (bagging), random feature subsets (random forest), or sequential error-correction (boosting) - and aggregating their outputs by voting or averaging, the errors of individual trees partially cancel, which reduces variance without a large increase in bias. This is why the BRFSS project random forest generally outperforms the single decision tree on held-out data.',
    keyPoints: [
      'Ensemble = combining multiple base learners into a final prediction (voting, stacking, bagging, boosting)',
      'Single trees are unstable/high-variance: small data changes give different trees',
      'Aggregating diverse models cancels individual errors and reduces variance',
      'Diversity is created via bootstrap samples, random feature subsets or sequential reweighting',
      'More accurate and robust than a single model (project: RF vs single tree on BRFSS)',
    ],
  },
  {
    id: 'd214',
    topic: 'Ensembles & Communication',
    prompt:
      'Compare the mechanics of bagging and boosting: how each builds its base learners, whether training is parallel or sequential, and what error component each mainly targets.',
    modelAnswer:
      'Bagging (bootstrap aggregation) draws random bootstrap samples (with replacement) from the training data, fits a base classifier on each sample independently and in parallel, then aggregates predictions by voting or averaging; it is a way to reduce the variance of an unstable black-box estimator such as a deep decision tree. Boosting instead builds a strong learner from a collection of weak learners sequentially: each new tree is fitted to the errors/residuals of the current ensemble, so the model concentrates on the cases it currently gets wrong, primarily reducing bias. Boosting adds each new tree scaled by a shrinkage parameter (the learning rate, typically 0.01 or 0.001) - "do not fully trust each new tree, add only a small part of its correction" - because approaches that learn slowly tend to perform well. Bagging examples include random forest; boosting examples include gradient boosting machines and XGBoost, both used in the heart-failure lab.',
    keyPoints: [
      'Bagging: bootstrap samples with replacement, models trained independently/in parallel, aggregate by vote or average',
      'Bagging mainly reduces variance of unstable learners (deep trees)',
      'Boosting: sequential weak learners, each fits the errors/residuals of the ensemble so far; mainly reduces bias',
      'Shrinkage/learning rate (~0.01 or 0.001) scales each new tree; slow learning performs well',
      'Examples: bagging -> random forest; boosting -> GBM/XGBoost',
    ],
  },
  {
    id: 'd215',
    topic: 'Ensembles & Communication',
    prompt:
      'How does random forest extend bagging, and why does this extra step improve performance? Explain what the out-of-bag (OOB) error estimate is.',
    modelAnswer:
      'Random forest adds random feature projection to bagging: besides training each tree on a bootstrap sample, at every split each tree considers only a random subset of the predictors (max_features). This decorrelates the trees - without it, one dominant predictor would head almost every bagged tree, making their predictions highly correlated so that averaging removes little variance; random subsets force diversity and improve the ensemble\'s variance reduction. Out-of-bag estimation exploits the samples not drawn into a tree\'s bootstrap sample: each tree is evaluated on its own left-out cases, giving an estimate of generalisation error without needing a separate validation set (oob_score=True, only available when bootstrap=True). Complexity is still controlled per tree by max_depth, min_samples_split, min_samples_leaf and max_leaf_nodes, though the lecture notes RF theory is incomplete and tuning remains partly empirical.',
    keyPoints: [
      'RF = bagging + random subset of features considered at each split (max_features)',
      'Random projection decorrelates trees; correlated trees would gain little from averaging',
      'Lower correlation between trees -> greater variance reduction -> better ensemble prediction',
      'OOB error: samples excluded from a tree\'s bootstrap sample act as its test cases; estimates generalisation error without a separate validation set',
      'Key parameters: n_estimators, bootstrap, max_samples, max_features, oob_score, tree-depth limits',
    ],
  },
  {
    id: 'd216',
    topic: 'Ensembles & Communication',
    prompt:
      'Distinguish hard voting from soft voting in a voting ensemble, and briefly describe how stacking (the Super Learner) differs from simple voting.',
    modelAnswer:
      'In hard voting, each base classifier casts one vote for a class label and the majority class wins; in soft voting, the classifiers\' predicted probabilities are averaged and the class with the highest mean probability is chosen. Soft voting exploits how confident each model is - a model predicting 0.95 counts for more than one predicting 0.55 - but it requires base learners that output meaningful, well-calibrated probabilities. Stacking goes further: instead of a fixed voting rule, it uses V-fold cross-validation to estimate each candidate learner\'s risk (train on V-1 folds, test on the held-out fold, repeat so every fold validates once, average the risks), then selects or learns the combination of learners with the lowest cross-validated risk - the Super Learner - which is finally trained on the whole dataset and evaluated on the test set. In effect, stacking learns how to weight the base models rather than assuming equal votes.',
    keyPoints: [
      'Hard voting: majority of predicted class labels',
      'Soft voting: average predicted probabilities, pick the highest; uses model confidence but needs probability outputs',
      'Stacking/Super Learner: V-fold CV estimates each learner\'s risk; pick/combine learners with lowest cross-validated risk',
      'Final Super Learner retrained on the full dataset, then evaluated on the test set',
      'Stacking learns the combination weights instead of assuming equal votes',
    ],
  },
  {
    id: 'd217',
    topic: 'Ensembles & Communication',
    prompt:
      'What is the purpose of a reporting framework such as TRIPOD, and which framework would you use for (a) a prediction model study, (b) an observational study, and (c) a clinical trial of an AI intervention?',
    modelAnswer:
      'Reporting standards prescribe the minimal set of information that must be included when describing a model or study, so that the research is reproducible - independent scientists can recreate the findings (the AI/ML models and their performance characteristics) from the reported information alone - and so that readers can judge validity, bias and applicability. The most established organisation for reporting guidelines is the EQUATOR network. For a prediction model development and validation study - like the BRFSS group project - the relevant framework is TRIPOD (Transparent Reporting of a multivariable prediction model for Individual Prognosis Or Diagnosis); for observational studies it is STROBE (with RECORD for studies using routinely collected health data); and for clinical trials involving AI interventions it is CONSORT-AI, with SPIRIT-AI covering the trial protocols.',
    keyPoints: [
      'Purpose: minimal reporting set -> reproducibility (independent recreation of models and performance) and transparency for appraisal',
      'EQUATOR network hosts the established reporting guidelines',
      '(a) Prediction model development/validation: TRIPOD',
      '(b) Observational studies: STROBE; routinely collected health data: RECORD',
      '(c) AI clinical trials: CONSORT-AI (protocols: SPIRIT-AI)',
    ],
  },
  {
    id: 'd218',
    topic: 'Ensembles & Communication',
    prompt:
      'How should model results be communicated differently to clinicians versus managers/executives, and what role does a "Table 1" cohort description play in that communication?',
    modelAnswer:
      'Communication should translate analytical results into clear, decision-relevant messages that highlight what is actionable, what is uncertain, and what is not yet ready for action - tailored to the consumer. Clinicians (subject matter experts) need results in clinical terms: which patients the model applies to, performance at the decision-relevant risk threshold (sensitivity, PPV, calibration at the treat/no-treat cut-off), and a feedback mechanism; managers and operations/finance executives need the deployed model\'s performance expressed in business terms - impact on KPIs, admissions avoided, cost and resource implications. A "Table 1" cohort description summarising patient characteristics (age, sex, ethnicity, SES), clinical characteristics, service-use variables, outcome variables and data-quality indicators lets every stakeholder judge whether the analysed cohort reflects the real-world population of interest - a key defence against bias in the analytic value chain. For the project presentation, this means pairing the technical metrics with a plain-language statement of who the model works for and what decision it should inform.',
    keyPoints: [
      'Translate results into decision-relevant messages: actionable vs uncertain vs not ready for action',
      'Clinicians: clinical terms, performance at the decision threshold, applicability to their patients, feedback loop',
      'Managers/executives: business terms - KPIs, cost, operational impact of the deployed model',
      'Table 1 (patient, clinical, service-use, outcome, data-quality summaries) lets stakeholders judge cohort representativeness',
      'Guards against bias across the analytic value chain; frame the model around the decision it informs',
    ],
  },
]
