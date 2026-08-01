import type { QuizQuestion } from './types'

export const l34Questions: readonly QuizQuestion[] = [
  // ── Supervised ML (Lecture 3) ─────────────────────────────────────
  {
    id: 'l3q1',
    topic: 'Supervised ML',
    prompt:
      'A hospital wants to predict total procedure time in minutes for surgical cases using patient age, ASA status, and anaesthesia type. Which model is the most appropriate first choice?',
    options: [
      'Logistic regression',
      'K-means clustering',
      'Linear regression',
      'A classification tree',
    ],
    answerIndex: 2,
    explanation:
      'Procedure time is a continuous response, so linear regression is the natural fit — exactly the approach used in the Dutch operating-room scheduling study. Logistic regression and classification trees target binary or categorical outcomes, and k-means is unsupervised.',
  },
  {
    id: 'l3q2',
    topic: 'Supervised ML',
    prompt:
      'A colleague keeps adding predictors to a linear regression of hospital length of stay and reports that R-squared rose from 0.60 to 0.66. Why should you look at adjusted R-squared instead?',
    options: [
      'Adjusted R-squared is always larger, so it gives the model more credit',
      'R-squared almost never decreases when predictors are added, while adjusted R-squared penalizes the number of predictors',
      'Adjusted R-squared measures calibration rather than explained variance',
      'R-squared cannot be computed when there is more than one predictor',
    ],
    answerIndex: 1,
    explanation:
      'Plain R-squared stays the same or increases with every added predictor, even a useless one. Adjusted R-squared multiplies (1 − R²) by (n − 1)/(n − p − 1), so it can fall when a new predictor adds little, making it the fairer comparison across models of different sizes.',
  },
  {
    id: 'l3q3',
    topic: 'Supervised ML',
    prompt:
      'A logistic regression predicting in-hospital mortality returns a coefficient of β = 0.693 for diabetes. What is the correct interpretation?',
    options: [
      'The probability of death increases by 0.693 for diabetic patients',
      'Diabetes is protective, with an odds ratio of about 0.5',
      'The risk of death increases by 69.3 percentage points',
      'The odds of death for diabetic patients are about twice those of non-diabetic patients, holding other predictors constant',
    ],
    answerIndex: 3,
    explanation:
      'The adjusted odds ratio is e^β = e^0.693 ≈ 2.0, so the odds (not the probability) roughly double. Coefficients in logistic regression act on the log-odds scale, so they must be exponentiated before interpretation.',
  },
  {
    id: 'l3q4',
    topic: 'Supervised ML',
    prompt:
      'A validation study reports an adjusted odds ratio of 1.67 per 1-point increase in a risk score for in-hospital mortality. Which statement is correct?',
    options: [
      'Each 1-point increase raises the odds of mortality by about 67%, after accounting for the other covariates in the model',
      'Each 1-point increase raises the probability of mortality by 67 percentage points',
      'Mortality risk is exactly 1.67 times higher per point, because an odds ratio equals a risk ratio',
      'The estimate is a crude association that ignores all other covariates',
    ],
    answerIndex: 0,
    explanation:
      'An adjusted OR of 1.67 means the odds multiply by 1.67 (a 67% increase in odds) per point, with the other model covariates held constant. Odds are not probabilities, and an OR only approximates a risk ratio when the outcome is rare.',
  },
  {
    id: 'l3q5',
    topic: 'Supervised ML',
    prompt:
      'Why does logistic regression model the logit (log-odds) instead of fitting a straight line directly to a 0/1 outcome?',
    options: [
      'Because the logit minimizes the least-squares loss for binary data',
      'Because the logit link maps the linear predictor onto valid probabilities between 0 and 1',
      'Because it forces the binary outcome to follow a normal distribution',
      'Because it automatically removes confounding between predictors',
    ],
    answerIndex: 1,
    explanation:
      'A straight line can predict values below 0 or above 1, which are invalid probabilities. As a GLM, logistic regression uses the logit link so the linear predictor η = Xβ maps to P(y = 1) = 1/(1 + e^−η), and coefficients are estimated by maximum likelihood, not least squares.',
  },
  {
    id: 'l3q6',
    topic: 'Supervised ML',
    prompt:
      'At the root of a classification tree for ED admission, the information gains are: Age 0.246, Income 0.029, Diabetes 0.151, Cholesterol 0.048. Which attribute does the algorithm split on first, and why?',
    options: [
      'Age, because it has the highest information gain and therefore reduces entropy the most',
      'Income, because a low-gain split preserves flexibility for later levels',
      'Diabetes, because clinical variables take priority over demographics',
      'Cholesterol, because trees prefer variables with fewer categories',
    ],
    answerIndex: 0,
    explanation:
      'Tree induction is greedy: at each node it picks the attribute that maximizes information gain (the largest drop from the prior entropy of 0.940). Age wins at 0.246, so it becomes the root split; clinical importance and category counts play no direct role.',
  },
  {
    id: 'l3q7',
    topic: 'Supervised ML',
    prompt:
      'Three leaf nodes of a mortality tree contain: Node A — 50% died, 50% survived; Node B — 90% survived, 10% died; Node C — 100% survived. Which statement about their entropy is correct?',
    options: [
      'Node C has the highest entropy because it contains only one class',
      'Node B has the highest entropy because 90/10 splits are the most uncertain',
      'Node A has the maximum entropy of 1, and Node C has an entropy of 0',
      'All three nodes have the same entropy because they hold the same outcome variable',
    ],
    answerIndex: 2,
    explanation:
      'Entropy measures uncertainty: a 50/50 split gives H = −(0.5·log₂0.5 + 0.5·log₂0.5) = 1, the maximum for a binary outcome, while a pure node has entropy 0. Node B sits in between (low entropy, mostly one class).',
  },
  {
    id: 'l3q8',
    topic: 'Supervised ML',
    prompt:
      'A fully grown decision tree classifies its training data perfectly, but its AUROC on the held-out test set is far worse. What is the diagnosis and the standard remedy?',
    options: [
      'Underfitting — grow the tree deeper until test performance matches training performance',
      'The model needs more predictors — add variables until the gap closes',
      'Data leakage — perfect training accuracy always means the outcome leaked into the features',
      'Overfitting (low bias, high variance) — prune the tree or restrict complexity with limits like max_depth or min_samples_leaf',
    ],
    answerIndex: 3,
    explanation:
      'An unrestricted tree memorizes noise in the training sample, giving low bias but high variance — the classic overfitting pattern from the bias–variance tradeoff. Pruning (post-pruning) or pre-pruning complexity limits trades a little training accuracy for much better generalization.',
  },
  {
    id: 'l3q9',
    topic: 'Supervised ML',
    prompt:
      'The true relationship between the predictors and a continuous outcome is approximately linear and additive. How would a single regression tree compare with linear regression here?',
    options: [
      'The tree wins because trees always dominate linear models',
      'Linear regression will typically outperform the tree; trees have the advantage when relationships are non-linear or involve complex interactions',
      'They are mathematically equivalent, so performance is identical',
      'Neither can be used for a continuous outcome',
    ],
    answerIndex: 1,
    explanation:
      'When the signal really is linear, a linear model captures it directly, while a tree must approximate the smooth trend with a staircase of splits. Trees earn their keep when decision boundaries are non-linear — neither family is universally better.',
  },

  // ── Model Evaluation (Lecture 3) ──────────────────────────────────
  {
    id: 'l3q10',
    topic: 'Model Evaluation',
    prompt:
      'A readmission model is tested on 200 patients: TP = 40, FN = 10, FP = 20, TN = 130. What is the sensitivity?',
    options: ['0.67', '0.80', '0.85', '0.87'],
    answerIndex: 1,
    explanation:
      'Sensitivity = TP/(TP + FN) = 40/(40 + 10) = 0.80 — of all patients actually readmitted, the model detected 80%. (0.67 is the PPV, 0.85 the accuracy, and 0.87 the specificity of this matrix.)',
  },
  {
    id: 'l3q11',
    topic: 'Model Evaluation',
    prompt:
      'Using the same confusion matrix (TP = 40, FN = 10, FP = 20, TN = 130), what is the positive predictive value (PPV)?',
    options: ['0.93', '0.85', '0.67', '0.80'],
    answerIndex: 2,
    explanation:
      'PPV = TP/(TP + FP) = 40/(40 + 20) = 40/60 ≈ 0.67 — of all patients flagged high-risk, two-thirds were actually readmitted. NPV here would be TN/(TN + FN) = 130/140 ≈ 0.93.',
  },
  {
    id: 'l3q12',
    topic: 'Model Evaluation',
    prompt:
      'Still with TP = 40, FN = 10, FP = 20, TN = 130, what is the F1 score (to two decimal places)?',
    options: ['0.61', '0.67', '0.80', '0.73'],
    answerIndex: 3,
    explanation:
      'F1 = 2TP/(2TP + FP + FN) = 80/(80 + 20 + 10) = 80/110 ≈ 0.73. F1 is the harmonic mean of precision (0.67) and recall (0.80), weighting both equally; an F2 score would emphasize recall more.',
  },
  {
    id: 'l3q13',
    topic: 'Model Evaluation',
    prompt:
      'A screening test has 99.9% sensitivity and 99.9% specificity for a disease with a prevalence of roughly 0.01% in the population. A randomly screened person tests positive. Approximately what is the chance they truly have the disease?',
    options: ['About 11%', 'About 50%', 'About 89%', 'About 99.9%'],
    answerIndex: 0,
    explanation:
      'By Bayes’ theorem, PPV = (0.999 × 0.0001228)/(0.999 × 0.0001228 + 0.001 × 0.9998772) ≈ 11%: with such a rare disease, false positives from the huge healthy pool swamp the true positives. Sensitivity and specificity are prevalence-free, but PPV is not — which is why they alone are never enough.',
  },
  {
    id: 'l3q14',
    topic: 'Model Evaluation',
    prompt:
      'A risk model flags patients as high-risk when their predicted probability exceeds a threshold. If the threshold is raised from 0.3 to 0.6, what happens to sensitivity and specificity?',
    options: [
      'Both sensitivity and specificity increase',
      'Both sensitivity and specificity decrease',
      'Sensitivity decreases and specificity increases',
      'Sensitivity and specificity are unaffected because they are threshold-free',
    ],
    answerIndex: 2,
    explanation:
      'A higher threshold means fewer patients are called positive: more true cases are missed (sensitivity falls) but fewer non-cases are wrongly flagged (specificity rises). This inherent tradeoff across thresholds is exactly what the ROC curve traces out.',
  },
  {
    id: 'l3q15',
    topic: 'Model Evaluation',
    prompt: 'A mortality model has an AUROC of 0.73. What does this number mean?',
    options: [
      'If you randomly pick one patient who died and one who survived, the model assigns the higher predicted risk to the patient who died 73% of the time',
      '73% of all the model’s predictions are correct',
      'The predicted probabilities are within 73% of the observed event rates',
      '73% of patients flagged as high-risk actually die',
    ],
    answerIndex: 0,
    explanation:
      'AUROC is a rank-based, threshold-free measure of discrimination: it equals the probability that a randomly drawn case outranks a randomly drawn non-case. It says nothing about accuracy at a specific threshold (option b/d) or about whether the probabilities themselves are numerically accurate (option c — that is calibration).',
  },
  {
    id: 'l3q16',
    topic: 'Model Evaluation',
    prompt:
      'Two classifiers achieve similar AUROC on an outcome with only 2% prevalence. Why is it worth also comparing their area under the precision–recall curve (AUPRC)?',
    options: [
      'AUPRC is always numerically higher, making models easier to distinguish',
      'The precision–recall curve ignores true negatives, so AUPRC better exposes performance differences on the rare positive class, where AUROC can look deceptively strong',
      'AUPRC measures calibration while AUROC measures discrimination',
      'AUROC is invalid whenever prevalence is below 5%',
    ],
    answerIndex: 1,
    explanation:
      'With 98% negatives, a model can rank most of the majority class correctly and post a flattering AUROC while its precision on the rare positives is poor. Because precision and recall never use TN, AUPRC directly reflects performance on the minority class — a useful check for imbalanced BRFSS outcomes in the group project.',
  },
  {
    id: 'l3q17',
    topic: 'Model Evaluation',
    prompt:
      'A readmission model has an AUROC of 0.85, but its mean predicted risk is about 40% while the observed readmission rate is 20%. A guideline enrols every patient with predicted risk above 20% in a transition-of-care programme. What is the correct assessment?',
    options: [
      'The model is fine, because an AUROC of 0.85 guarantees the probabilities are accurate',
      'The model discriminates and calibrates poorly, so it must be discarded entirely',
      'The model has poor discrimination but good calibration',
      'The model discriminates well but is poorly calibrated — it overestimates risk, so it needs recalibration before the 20% treatment threshold can be used',
    ],
    answerIndex: 3,
    explanation:
      'Discrimination (ranking) and calibration (numerical accuracy of the risks) are separate properties: models with identical ROC curves can output very different risk levels. When decisions hinge on an absolute risk cut-off, calibration must be checked — this is why calibration plots and the Brier score are expected alongside AUROC in the BRFSS project.',
  },
  {
    id: 'l3q18',
    topic: 'Model Evaluation',
    prompt:
      'An event occurs in 1% of patients, and a model simply predicts a probability of 0.01 for everyone, giving a Brier score of about 0.0099. What is the key lesson?',
    options: [
      'For rare events a very low Brier score can come from a model with no discriminating ability, so Brier should be interpreted alongside discrimination measures',
      'The model is excellent, because a Brier score near 0 means near-perfect predictions',
      'The Brier score was computed incorrectly, since constant predictions have undefined Brier scores',
      'The Brier score measures ranking, so this model must also have a high AUROC',
    ],
    answerIndex: 0,
    explanation:
      'The Brier score is the mean squared difference between predicted probabilities and outcomes: BS = 0.99(0.01 − 0)² + 0.01(0.01 − 1)² ≈ 0.0099. Predicting the base rate is nearly correct for the 99% of non-events, so the score looks superb even though the model cannot separate cases from non-cases at all.',
  },
  {
    id: 'l3q19',
    topic: 'Model Evaluation',
    prompt:
      'On external validation, a prediction model shows a Cox calibration slope of 0.6 (significantly below 1). What does this indicate?',
    options: [
      'Predictions are too conservative — high and low risks are both pulled toward the average',
      'The model underpredicts risk uniformly across all patients',
      'Predictions are too extreme — high risks are overestimated and low risks underestimated, a typical signature of overfitting',
      'The model has perfect calibration-in-the-large',
    ],
    answerIndex: 2,
    explanation:
      'A calibration slope below 1 means the spread of predicted risks is wider than the observed reality: extremes are exaggerated, which commonly happens when an overfitted model is applied to new data. Calibration-in-the-large is a separate check — whether the mean predicted risk matches the overall observed event rate.',
  },
  {
    id: 'l3q20',
    topic: 'Model Evaluation',
    prompt:
      'In the standard machine learning workflow that splits data into training, validation, and test sets, what is the validation set used for?',
    options: [
      'Providing extra training examples once the model architecture is fixed',
      'Comparing candidate models and tuning hyperparameters during development, while the test set stays untouched for one final unbiased assessment',
      'Reporting the final headline performance of the chosen model',
      'Checking generalizability to a different hospital’s population',
    ],
    answerIndex: 1,
    explanation:
      'Typically 70–80% of the data trains the model, the validation portion guides hyperparameter tuning (often via k-fold cross-validation), and the held-out 20–30% test set is used once for the final performance estimate. Testing on a different institution’s population is external validation, a separate step beyond this internal workflow.',
  },

  // ── Ensembles & Communication (Lecture 4) ─────────────────────────
  {
    id: 'l4q1',
    topic: 'Ensembles & Communication',
    prompt:
      'A voting classifier combines a logistic regression, a decision tree, and a random forest. What is the difference between hard and soft voting?',
    options: [
      'Hard voting requires identical base learners; soft voting allows different model types',
      'Hard voting averages AUROC values; soft voting averages Brier scores',
      'Hard voting is used for regression and soft voting for classification',
      'Hard voting takes the majority of the predicted class labels; soft voting averages the predicted probabilities and picks the class with the highest average',
    ],
    answerIndex: 3,
    explanation:
      'Hard voting counts each base learner’s class label as one vote and returns the majority class. Soft voting averages the predicted probabilities across learners, which exploits confidence information and requires base learners that can output probabilities.',
  },
  {
    id: 'l4q2',
    topic: 'Ensembles & Communication',
    prompt: 'Which statement best describes how a bagging classifier works?',
    options: [
      'It fits base learners in parallel, each on a bootstrap sample drawn with replacement from the training data, then aggregates their predictions by voting or averaging',
      'It fits base learners sequentially, with each learner focusing on the mistakes of the previous ones',
      'It trains a meta-learner on the cross-validated predictions of several candidate models',
      'It splits the feature set into disjoint groups and trains one model per group',
    ],
    answerIndex: 0,
    explanation:
      'Bagging — bootstrap aggregation — injects randomness by resampling the training data with replacement, trains the base learners independently in parallel, and combines them. Its main benefit is reducing the variance of unstable learners such as deep decision trees; sequential error-correction describes boosting, and the meta-learner setup describes stacking.',
  },
  {
    id: 'l4q3',
    topic: 'Ensembles & Communication',
    prompt:
      'When fitting a bagged ensemble or random forest, what does setting oob_score=True provide?',
    options: [
      'A guarantee that every observation appears in every bootstrap sample',
      'An optimism-corrected AUROC computed on the training folds',
      'An estimate of generalization error using, for each tree, the samples that were not drawn into its bootstrap sample — no separate validation set needed',
      'A regularization penalty that shrinks each tree’s contribution',
    ],
    answerIndex: 2,
    explanation:
      'Because bootstrap sampling with replacement leaves roughly a third of observations out of each tree’s sample, those out-of-bag cases act as a built-in validation set for that tree. The pooled OOB predictions estimate test performance essentially for free, and the option only works when bootstrap=True.',
  },
  {
    id: 'l4q4',
    topic: 'Ensembles & Communication',
    prompt:
      'What is the single key modification that turns bagged decision trees into a random forest, and why does it help?',
    options: [
      'Trees are grown sequentially on reweighted samples, which reduces bias',
      'At each split only a random subset of features (max_features) is considered, which decorrelates the trees and further reduces ensemble variance',
      'Each tree is pruned back to a fixed depth of three, which prevents overfitting',
      'Bootstrap sampling is switched off so every tree sees the full dataset',
    ],
    answerIndex: 1,
    explanation:
      'Random forests keep the bootstrap sampling of bagging but add random feature projection: each split can only choose among a random subset of predictors. Without it, a few dominant predictors would head almost every tree, making the trees highly correlated and blunting the variance reduction from averaging.',
  },
  {
    id: 'l4q5',
    topic: 'Ensembles & Communication',
    prompt: 'Which statement correctly contrasts bagging and boosting?',
    options: [
      'Bagging trains learners independently in parallel on bootstrap samples and mainly reduces variance; boosting trains weak learners sequentially, each correcting the errors of the current ensemble, to build a strong learner',
      'Bagging is sequential and boosting is parallel',
      'Bagging can only use decision trees, whereas boosting can use any base learner',
      'Boosting reduces variance by averaging while bagging reduces bias by reweighting',
    ],
    answerIndex: 0,
    explanation:
      'Bagging’s independent bootstrap models are averaged to stabilize a high-variance learner. Boosting is the opposite paradigm: a sequence of weak learners is fitted slowly, each new one targeting what the ensemble still gets wrong — the roles in the other options are reversed or invented.',
  },
  {
    id: 'l4q6',
    topic: 'Ensembles & Communication',
    prompt:
      'In gradient boosting, what does setting the shrinkage (learning rate) to a small value such as 0.01 mean?',
    options: [
      'Each tree is trained on only 1% of the observations',
      'Each tree may use at most 1% of the available features',
      'Training stops as soon as the error falls below 1%',
      'Each new tree’s correction is added only in small part, so the model learns slowly — usually generalizing better but requiring more trees',
    ],
    answerIndex: 3,
    explanation:
      'Shrinkage scales down every tree’s contribution, telling the ensemble not to fully trust any single correction; typical values are 0.01 or 0.001. Statistical learning methods that learn slowly tend to perform well, at the cost of needing more boosting rounds.',
  },
  {
    id: 'l4q7',
    topic: 'Ensembles & Communication',
    prompt:
      'How does the Super Learner (stacking) approach decide how to use its library of candidate learners?',
    options: [
      'It takes a simple majority vote across all candidates',
      'It estimates each candidate’s risk with V-fold cross-validation and selects the learner or weighted combination with the lowest cross-validated risk, before refitting on the full data',
      'It keeps whichever candidate has the highest accuracy on the training set',
      'It averages all candidates with equal weights regardless of performance',
    ],
    answerIndex: 1,
    explanation:
      'Stacking splits the data into V mutually exclusive folds, trains each candidate on V−1 folds, scores it on the held-out fold, and averages the risks across folds. Choosing by training-set accuracy would reward overfitting, which is precisely what the cross-validation layer prevents.',
  },
  {
    id: 'l4q8',
    topic: 'Ensembles & Communication',
    prompt:
      'Your group has developed and validated logistic regression and random forest models predicting a binary health outcome from BRFSS survey data. Which reporting guideline is specifically designed for writing up this kind of work?',
    options: ['STROBE', 'CONSORT-AI', 'TRIPOD', 'SPIRIT-AI'],
    answerIndex: 2,
    explanation:
      'TRIPOD (Transparent Reporting of a multivariable prediction model for Individual Prognosis Or Diagnosis) covers the development and validation of prediction models — exactly the project deliverable. STROBE targets observational studies in general, while CONSORT-AI and SPIRIT-AI cover clinical trials involving AI and their protocols.',
  },
  {
    id: 'l4q9',
    topic: 'Ensembles & Communication',
    prompt: 'Which reporting-guideline pairing is correct?',
    options: [
      'STROBE — clinical trials involving AI interventions',
      'RECORD — studies using routinely collected health data',
      'CONSORT-AI — observational epidemiological studies',
      'SPIRIT-AI — development and validation of prediction models',
    ],
    answerIndex: 1,
    explanation:
      'RECORD extends STROBE for research based on routinely collected health data such as EHR or administrative claims. The correct mappings are STROBE for observational studies, TRIPOD for prediction models, CONSORT-AI for AI clinical trials, and SPIRIT-AI for AI trial protocols — all catalogued by the EQUATOR network.',
  },
  {
    id: 'l4q10',
    topic: 'Ensembles & Communication',
    prompt:
      'When communicating healthcare analytics results, why should the report include a clear cohort description ("Table 1") with patient, clinical, service-use, outcome, and data-quality variables?',
    options: [
      'It demonstrates that the findings are statistically significant',
      'It is required in order to compute p-values for the model coefficients',
      'It substitutes for formal model evaluation when AUROC cannot be computed',
      'It lets stakeholders judge whether the analysed cohort reflects the real-world population of interest, exposing selection bias and the limits of generalizability',
    ],
    answerIndex: 3,
    explanation:
      'Bias can enter anywhere along the analytic value chain, and a Table 1 makes the analytic cohort transparent so readers can assess who the results actually apply to. It supports interpretation and implementation decisions; it has nothing to do with significance testing or replacing evaluation metrics.',
  },
]
