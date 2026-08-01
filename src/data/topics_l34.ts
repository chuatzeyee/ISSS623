import type { Session } from './types'

/**
 * Lectures 3 & 4 study topics (Dr Sean Lam, 2026).
 * L3: supervised learning (linear regression, logistic regression, decision
 * trees), the ML workflow, model evaluation (discrimination, calibration,
 * other metrics), dimensionality reduction (additional material).
 * L4: ensemble methods (voting, stacking, bagging, random forest, boosting)
 * and Conclude & Communicate (reporting frameworks, EQUATOR/TRIPOD).
 * Quiz 2 (in-class, Session 5, 25%) covers this material; the BRFSS group
 * project applies logistic regression + decision tree + random forest with
 * calibration and Brier score explicitly requested by the professor.
 */
export const l34Sessions: readonly Session[] = [
  {
    id: 8,
    title: 'Lecture 3 · Segment 1 - Supervised Learning',
    subtitle: 'Predictive models: linear regression, logistic regression, decision trees',
    topics: [
      {
        title: 'What a predictive model is, and empirical risk minimisation',
        summary:
          'A predictive model F(x) learns patterns linking patient characteristics X to an outcome Y, then estimates the outcome (y-hat) for a new patient. Learning means finding parameters that minimise a loss function averaged over the sample.',
        points: [
          'Inputs X: patient characteristics such as age, vital signs, previous admissions, laboratory results. Output Y: e.g. estimated probability of hospital admission.',
          'Actual outcomes are also influenced by unmeasured factors and random variation - the error term epsilon. A model never explains everything.',
          'Empirical risk minimisation: a loss function l(true, prediction) defines a penalty for poor predictions; the algorithm finds b* = argmin of the average loss over the N sample points.',
          'Loss/criterion pairings to memorise: least-squares loss for linear regression; likelihood for logistic regression; entropy H(Y) = -sum(p_i log p_i) or Gini(Y) = 1 - sum(p_j^2) for decision trees.',
          'Data type drives model choice: continuous response → linear regression (or regression tree); binary outcome → logistic regression (or classification tree).',
          'BRFSS project mapping: the binary health outcome makes logistic regression the baseline, with decision tree and random forest as the ML comparators.',
        ],
        tip: 'Given any scenario question, first classify the outcome variable: continuous → linear regression; yes/no → logistic regression or classification tree. Most model-choice MCQs are decided by this single step.',
        relatedTerms: ['Predictive model', 'Linear regression', 'Logit (log-odds)', 'Decision tree'],
      },
      {
        title: 'Linear regression and R-squared vs adjusted R-squared',
        summary:
          'Linear regression models a continuous response as Y = alpha + beta1*X1 + ... + betak*Xk + epsilon. R-squared measures explained variation but always rewards added predictors; adjusted R-squared corrects for this.',
        points: [
          'Reality: Y = alpha + beta1*X1 + ... + betak*Xk + epsilon; prediction: y-hat = a + b1*X1 + ... + bk*Xk with coefficients fitted by least squares.',
          'Deck case study: surgical duration prediction - ~80,000 records from six Dutch academic hospitals (2012-2016, 199,772 OR-hours) predicting total procedure time (TPT) from estimated surgeon-controlled time (eSCT), patient age, operation type, ASA status and anaesthesia type.',
          'Why it matters: accurate TPT predictions improve OR block schedules and case sequencing, raising utilisation - direct financial and productivity benefits.',
          'R-squared = 1 - SS_residual/SS_total. R2 = 0.65 for a length-of-stay model means the model explains ~65% of the variation in LOS in this dataset.',
          'BUT R-squared almost always increases (or stays the same) when predictors are added - even useless ones.',
          'Adjusted R2 = 1 - (1 - R2)(n - 1)/(n - p - 1), where n = observations, p = predictors: it penalises model size and can fall when a new predictor adds little.',
        ],
        important:
          'If a quiz asks why adjusted R-squared exists, the answer is the monotonicity problem: plain R-squared never punishes an extra predictor, so it cannot compare models of different sizes fairly.',
        relatedTerms: ['Linear regression', 'R-squared & adjusted R-squared', 'Predictive model'],
      },
      {
        title: 'Logistic regression: logit, odds ratios, GLM',
        summary:
          'Logistic regression is linear regression adapted for binary outcomes: it fits the logit (log-odds) as a linear function of predictors and estimates coefficients by maximum likelihood. Coefficients exponentiate to odds ratios.',
        points: [
          'Suitable when the outcome is binary: 30-day readmission (yes/no), missed appointment, high-risk deterioration, claim approved.',
          'The model: P(y=1) = 1/(1 + e^-(b0 + b1x1 + ... + bkxk)); equivalently log(odds) = b0 + b1X1 + ... + bkXk. Objective: find the beta vector maximising the likelihood of the observed outcomes.',
          'Why fit the logit? A straight line predicts values outside [0,1]; the logit link maps the linear predictor onto valid probabilities via the S-shaped sigmoid.',
          'Odds ratio from a 2x2 table: odds(exposed)/odds(unexposed) = (a/b)/(c/d). From the model: OR for X1 = e^beta1. Crude OR = model with X1 alone; adjusted OR = model including other covariates.',
          'NULL-EASE case study (JAHA 2024): each 1-point score increase raised the odds of in-hospital mortality by ~67% (adjusted OR 1.67) after adjusting for sex, residential arrest, diabetes, chronic respiratory disease and stroke.',
          'GLM framing: a fully specified GLM has (1) the distribution of y, (2) linear predictor eta = X*beta, (3) link function g with eta = g(mu). Logistic regression = GLM with binomial outcome and LOGIT link.',
          'Framingham heart-failure profile (Kannel et al. 1999): pooled logistic regression computing 4-year heart-failure probabilities from routine risk factors - the classic clinical risk-profile application.',
        ],
        tip: 'Interpretation drill: beta = 0.693 → OR = e^0.693 ≈ 2, i.e. odds double per unit increase. Never say "probability doubles" - odds are p/(1-p), not p.',
        important:
          'Logistic regression coefficients are estimated by MAXIMUM LIKELIHOOD, not least squares. And an odds ratio only approximates a risk ratio when the outcome is rare.',
        relatedTerms: ['Logit (log-odds)', 'Odds ratio', 'Generalized Linear Model (GLM)'],
      },
      {
        title: 'Decision trees: entropy, information gain, and the ED-admission worked example',
        summary:
          'Trees predict via transparent if-then splits chosen greedily to maximise impurity reduction. The 14-record ED-admission table is the deck’s worked example: root entropy 0.940, Age wins the first split with gain 0.246.',
        points: [
          'A tree asks a sequence of simple yes/no questions; each split separates patients into groups with increasingly similar outcomes, and a patient follows a path to a final risk group - transparent "if-then" logic.',
          'Strategy: top-down, recursive, divide-and-conquer; GREEDY - the best local split is chosen at each node with no lookahead.',
          'Entropy H(Y) = -sum(p_i log2 p_i): 0 for a pure node (100%/0%), 1 for a 50/50 binary split (log2 makes the equal split exactly 1). Example: 60%/40% gives 0.971.',
          'Information gain: Gain(A) = Info(Y) - Info_A(Y), where Info_A weights each partition’s entropy by its share of samples.',
          'Worked example: 14 ED-admission records, 9 YES / 5 NO → Info(Y) = I(9,5) = 0.940. Splitting on Age gives Info_age = (5/14)I(2,3) + (4/14)I(4,0) + (5/14)I(3,2) = 0.694, so Gain(Age) = 0.246.',
          'Gain(Income) = 0.029, Gain(Diabetes) = 0.151, Gain(Cholesterol) = 0.048 - Age reduces entropy most, so it is the root split. The 30-60 branch is already pure (all YES); in the Age<30 subtree Diabetes gives a perfect split, in Age>60 Cholesterol does.',
          'Other criteria: Gini index (scikit-learn default), gain ratio, variance reduction for regression trees; also CHAID (chi-square), C-SEP, G-statistic, CART (multivariate splits). None is significantly superior in all cases.',
          'Stopping conditions: all samples same class; no useful attributes; no split improves impurity; no samples in a branch; complexity limits (max_depth, min_samples_split, min_samples_leaf, max_leaf_nodes).',
        ],
        tip: 'Be ready to reproduce the gain ranking Age 0.246 > Diabetes 0.151 > Cholesterol 0.048 > Income 0.029 and to compute entropy for a simple split - both are prime structured-question material.',
        important:
          'Most modern decision trees use BINARY splits even for multi-class attributes, and the algorithm picks splits purely by the criterion - clinical plausibility plays no direct role.',
        relatedTerms: ['Decision tree', 'Entropy & information gain', 'Gini index'],
      },
      {
        title: 'Pruning, overfitting, and trees vs linear models',
        summary:
          'A fully grown tree memorises training noise. Pruning (post- or pre-) restores generalisation, and the trees-vs-linear-models rule tells you which family wins for which signal shape.',
        points: [
          'Step 3 of tree building is pruning to avoid overfitting: POST-pruning grows the full tree then cuts branches; PRE-pruning stops growth early via complexity limits.',
          'Overfitting = low bias, high variance: perfect training accuracy but poor test performance. Underfitting = high bias: too simple to capture the signal at all.',
          'Bias-variance quote from Aliferis & Simon: "For a fixed sample size and data generating function, there is an optimal model complexity leading to smallest model error possible."',
          'Cross-validation guides tree size: plot CV error against tree size and keep the minimum (the deck’s regression-tree example minimises MSE at tree size three).',
          'Trees vs linear models: if the predictor-response relationship is linear, classical linear regression outperforms regression trees; if it is non-linear, trees outperform the classical approaches.',
          'Tree application papers in the deck: early diabetes detection from symptom questionnaires (Sylhet, Bangladesh) and SEER breast-cancer survival trees cross-validated with logistic regression.',
        ],
        tip: 'The exam-safe phrasing: pruning trades a little training accuracy for better generalisation by reducing variance.',
        relatedTerms: ['Pruning', 'Overfitting vs underfitting', 'Bias-variance tradeoff', 'Decision tree'],
      },
    ],
  },
  {
    id: 9,
    title: 'Lecture 3 · Segment 2 - Model Evaluation',
    subtitle: 'ML workflow, discrimination, calibration; PCA (additional)',
    topics: [
      {
        title: 'The ML workflow: train/validation/test and cross-validation',
        summary:
          'Judging a model starts with an honest workflow: 70-80% of data builds the model, 20-30% is locked away for testing, and hyperparameters are tuned on validation data or by k-fold cross-validation.',
        points: [
          'Split: training dataset (model building, 70-80%) vs testing dataset (model testing, 20-30%); a validation set carved from training data drives model improvement and hyperparameter tuning.',
          'Full loop: data source → model training and validation → hyperparameter tuning (model improvement) → model evaluation on test data → display model → conclude and communicate.',
          'Deck caution: statisticians and ML practitioners may use "training/validation/test" differently - define your terms.',
          'K-fold cross-validation: split training data into k folds, train on k-1, validate on the held-out fold, rotate; the deck shows 5-fold CV repeated 3 times with re-randomised folds, reporting the distribution of scores.',
          'Evaluation ties back to L2 populations: internal validation = generalisation from discovery sample to ACCESSIBLE population; external validation = generalisability to the TARGET population. The accessible population can be just your own hospital - it depends on your problem statement.',
          'Heart-failure lab (Chicco & Jurman 2020, 299 patients): wrangling → train/test split → logistic regression → evaluation → grid-search tuning → feature importance. Finding: serum creatinine + ejection fraction alone predicted survival better than all features together.',
        ],
        important:
          'The test set is used ONCE, for the final estimate. Tuning hyperparameters against the test set leaks information and inflates reported performance.',
        relatedTerms: ['Train / validation / test split', 'K-fold cross-validation', 'Hyperparameter tuning & grid search', 'Internal vs external validation'],
      },
      {
        title: 'Three evaluation families: overall, discrimination, calibration',
        summary:
          'The deck organises "is the model good enough?" into three families of measures. Discrimination asks whether the model RANKS events above non-events; calibration asks whether the predicted risk VALUES are numerically accurate.',
        points: [
          'Family 1 - Overall measures: how close are predictions to actual outcomes overall? Metrics: R2, adjusted R2, mean squared error, log loss.',
          'Family 2 - Discrimination: can the model separate patients who experience the outcome from those who do not? Metrics: sensitivity, specificity, ROC-AUC / C-statistic, precision, recall.',
          'Family 3 - Calibration: are predicted risks numerically accurate - do about x of 100 patients given x% risk have the outcome? Metrics: Brier score, calibration plot, calibration-in-the-large, calibration slope, Hosmer-Lemeshow test.',
          'The families answer different questions: a model can discriminate perfectly (right ordering) while being badly calibrated (wrong risk levels), and vice versa.',
          'BRFSS project: the prof explicitly asked for calibration assessment and Brier score alongside AUROC for the logistic regression / decision tree / random forest lineup.',
        ],
        tip: 'Classification drill for the quiz: "ranks the dead above the living" → discrimination; "20% predicted = 20% observed" → calibration; "average squared error of probabilities" → Brier (calibration family).',
        relatedTerms: ['Model evaluation families', 'ROC curve & AUROC', 'Calibration', 'Brier score'],
      },
      {
        title: 'Confusion-matrix metrics and the prevalence trap',
        summary:
          'Sensitivity, specificity, PPV and NPV all come from the 2x2 confusion matrix - but PPV depends on prevalence, which is why a 99.9%-sensitive, 99.9%-specific test can still be wrong 9 times out of 10 when positive.',
        points: [
          'Confusion matrix: TP (predicted and actual positive), FP (false alarm), FN (missed case), TN (correct negative).',
          'Accuracy = (TP+TN)/all: implicitly assumes equal costs on FP and FN - only appropriate for threshold selection when those costs are similar.',
          'Sensitivity/recall = TP/(TP+FN): of all actual cases, how many did we detect? Specificity = TN/(TN+FP): of all actual non-cases, how many did we correctly clear?',
          'PPV/precision = TP/(TP+FP): of all predicted positives, how many are real? NPV = TN/(TN+FN).',
          'HIV oracle example: sensitivity 99.9%, specificity 99.9%, Singapore prevalence 0.01228% → Bayes gives P(HIV | positive) = 10.93%. Sensitivity and specificity are not enough; predictive values depend on prevalence.',
          'Threshold dependence (pneumoconiosis/FEV example): classify diseased if FEV < t% of normal. t=80%: sensitivity 85%, specificity 62%; t=60%: sensitivity 41%, specificity 92% - raising the threshold trades one for the other.',
          'F scores summarise precision and recall: F1 = 2PR/(P+R) = 2TP/(2TP+FP+FN) with balanced weights; F2 emphasises recall - use when a missed case costs more than a false alarm.',
        ],
        important:
          'Memorise the four formulas cold and the Bayes worked example: PPV = (sens x prev)/(sens x prev + (1-spec) x (1-prev)). The rare-disease PPV collapse is a near-certain exam scenario.',
        relatedTerms: ['Confusion matrix', 'Sensitivity (recall)', 'Specificity', 'Precision (PPV) & NPV', 'Accuracy', 'F1 score'],
      },
      {
        title: 'ROC/AUROC, precision-recall curves, and threshold choice',
        summary:
          'The ROC curve connects the operating points of all thresholds; AUROC is the global, rank-based discrimination summary. For rare outcomes the precision-recall curve is often more informative because it ignores true negatives.',
        points: [
          'ROC plots sensitivity vs 1-specificity across all thresholds; AUROC quantifies discriminative power globally, so no single threshold must be chosen first.',
          'Rank interpretation: AUC = 0.73 means that for a randomly drawn (event, non-event) pair, the event patient gets the higher risk score 73% of the time. AUROC depends on the ORDER of predictions, not their values.',
          'Benchmarks: 1.0 = perfect discrimination (a threshold exists with 100% accuracy); 0.5 = just guessing; below 0.5 = systematically inverted ranking.',
          'Choosing the actual operating threshold requires the cost of a false positive vs the cost of a false negative - AUROC deliberately sidesteps this.',
          'Precision-recall curve: precision vs recall across thresholds; the area (AUPRC) and the optimal-F1 point summarise it. Because TN never enters precision or recall, PR curves expose weak minority-class performance that a flattering AUROC can hide - key for imbalanced BRFSS outcomes.',
        ],
        tip: 'If a question contrasts two models on a rare outcome with similar AUROC, the expected answer is: compare AUPRC (or precision at clinically relevant recall), because AUROC is inflated by the abundant easy negatives.',
        relatedTerms: ['ROC curve & AUROC', 'Precision-recall curve & AUPRC', 'Classification threshold', 'F1 score'],
      },
      {
        title: 'Calibration: same ROC, different risks - Brier score and the calibration toolkit',
        summary:
          'Models with identical ROC curves can output very different risk levels. When guidelines act on absolute risk (e.g. intervene above 20%), calibration decides whether the right patients get treated.',
        points: [
          '"Same ROC, different risks": AUROC is rank-based, so recalibrated or distorted probability outputs leave the ROC untouched - but change who crosses a guideline threshold like >20% risk.',
          'Brier score = mean squared difference between predicted probabilities and actual outcomes; lower is better, 0 is perfect. Alternative: average absolute error; deck notes a relationship to Nagelkerke R2.',
          'Rare-event caveat: with 1% incidence, always predicting 0.01 gives BS = 0.99(0.01)^2 + 0.01(0.99)^2 = 0.0099 - superb-looking, yet the model discriminates nothing. Interpret Brier against the event rate.',
          'Calibration-in-the-large: is the model right ON AVERAGE - mean predicted risk vs observed event rate.',
          'Hosmer-Lemeshow test: group patients by predicted risk; test observed vs expected events within groups.',
          'Reliability diagram / calibration plot: mean predicted risk vs observed event rate (binning may be required); a well-calibrated model follows the 45-degree diagonal.',
          'Cox calibration intercept/slope: intercept shows overall over/under-prediction; slope shows whether predictions are too extreme (slope < 1, typical of overfitting) or too weak (slope > 1).',
          'Integrated Calibration Index (ICI): average absolute gap between predicted risks and a smoothed calibration curve; ECE and MCE also exist. No single method is best - use a combination (Binuya et al. 2022 systematic review).',
        ],
        important:
          'For the BRFSS project the prof requested calibration plots and Brier score explicitly. Report them per model, and interpret Brier against the outcome prevalence.',
        relatedTerms: ['Calibration', 'Brier score', 'ROC curve & AUROC', 'Model evaluation families'],
      },
      {
        title: 'Additional material: dimensionality reduction and PCA',
        summary:
          'PCA linearly projects correlated variables onto a smaller set of uncorrelated principal components ordered by explained variance; the scree plot decides how many to keep. Flagged as additional (non-core) material.',
        points: [
          'Why reduce dimensions: too many observations and factors to visualise; better representation without losing too much information; enables more informative engineered features - combinations of observed variables can be more effective even if physical meaning is obscured.',
          'Continuity from L2: t-SNE was covered in Lecture 2 as a way to visualise clusters; PCA is the linear workhorse added here.',
          'PCA mechanics: linear projection to fewer parameters; transforms correlated variables into uncorrelated ones on orthogonal axes.',
          'PC1 = direction of greatest variability; after removing variability along PC1, centre at the centroid and take the next PC orthogonal to earlier PCs.',
          'Scree plot: shows each component’s contribution to total variance; ignore low-contribution components - the deck example keeps components accounting for ~65% of total variation. You lose some information, but a small loss is bearable.',
          'In PCA the factors are combinations of the observed variables - interpretation of individual components is not guaranteed.',
        ],
        tip: 'Know the two PCA facts examiners like: components are orthogonal/uncorrelated, and PC1 captures maximum variance. The scree plot is the tool for "how many components?"',
        relatedTerms: ['Dimensionality reduction', 'Principal Component Analysis (PCA)'],
      },
    ],
  },
  {
    id: 10,
    title: 'Lecture 4 · Segment 1 - Ensemble Methods',
    subtitle: 'Voting, stacking, bagging, random forest, boosting',
    topics: [
      {
        title: 'Why ensembles: combining base learners',
        summary:
          'An ensemble combines predictions from multiple base learners into a final prediction that is usually more accurate and robust than any single model. Four families are examinable: voting, stacking, bagging, boosting.',
        points: [
          'Definition (verbatim-worthy): an ensemble method combines predictions from multiple models, known as BASE LEARNERS, to produce a final prediction that is usually more accurate and robust than the prediction from a single model.',
          'Why it works: a single deep decision tree is unstable (high variance) - small data changes give a different tree. Aggregating many diverse trees cancels individual errors.',
          'Family map: VOTING combines finished models’ outputs; STACKING learns how to combine candidates via cross-validation; BAGGING trains models in parallel on bootstrap resamples; BOOSTING trains weak learners sequentially, each correcting the ensemble’s errors.',
          'Variance vs bias: bagging/random forest mainly reduce VARIANCE; boosting mainly reduces BIAS by fitting residual errors.',
          'Quiz scope note from the deck: only methods covered in class are included in the quiz; the ISLR tree-based-methods chapter is reference only and NOT in the quiz.',
        ],
        tip: 'One-line contrasts win marks: bagging = parallel + bootstrap + variance; boosting = sequential + error-correcting + bias; voting = combine labels/probabilities; stacking = CV-selected combination.',
        relatedTerms: ['Ensemble method', 'Bagging (bootstrap aggregation)', 'Boosting', 'Voting classifier (hard vs soft)'],
      },
      {
        title: 'Voting and stacking (Super Learner)',
        summary:
          'Voting aggregates trained classifiers by majority label (hard) or averaged probabilities (soft). Stacking goes further: V-fold cross-validation estimates each candidate learner’s risk and the lowest-risk learner or combination becomes the Super Learner.',
        points: [
          'Hard voting: each base classifier casts one vote for a class label; majority wins.',
          'Soft voting: average the predicted probabilities across classifiers and pick the class with the highest mean - uses confidence information but requires probability outputs (sklearn VotingClassifier).',
          'Super Learner recipe (van der Laan, Polley & Hubbard 2007): split data into V mutually exclusive and exhaustive folds → hold out one fold → train each candidate on the remaining V-1 folds → test on the held-out fold and compute each learner’s risk → repeat V times so every fold validates once → average risks across folds → select the learner or combination with the LOWEST cross-validated risk.',
          'Then: train the Super Learner with candidate learners on the ENTIRE dataset, and evaluate it on the test set.',
          'Implementations: SuperLearner package in R; StackingClassifier/StackingRegressor in scikit-learn.',
        ],
        important:
          'Stacking selects by CROSS-VALIDATED risk, never by training-set accuracy - training accuracy would simply reward the most overfitted candidate.',
        relatedTerms: ['Voting classifier (hard vs soft)', 'Stacking (Super Learner)', 'K-fold cross-validation'],
      },
      {
        title: 'Bagging: bootstrap aggregation and out-of-bag estimation',
        summary:
          'Bagging fits base classifiers in parallel, each on a bootstrap sample drawn with replacement, then aggregates by voting or averaging - a way to reduce the variance of an unstable estimator like a decision tree.',
        points: [
          'Bagging = "Bootstrap Aggregation": an ensemble meta-estimator fitting base classifiers on random subsets of the original dataset, then aggregating their individual predictions.',
          'Models are trained IN PARALLEL; aggregation is by voting (classification) or averaging (regression).',
          'Purpose: reduce the variance of a black-box estimator (e.g. a decision tree) by introducing randomisation into its construction and ensembling the results.',
          'Key sklearn BaggingClassifier parameters: estimator (default = decision tree), n_estimators (default 10; more improves stability at compute cost), max_samples and max_features (smaller values create more diversity), bootstrap (True = with replacement = classic bagging), oob_score, warm_start, random_state (reproducibility).',
          'Out-of-bag (OOB): samples not drawn into a tree’s bootstrap sample serve as that tree’s built-in test cases; oob_score=True estimates generalisation error WITHOUT a separate validation set - only available when bootstrap=True.',
        ],
        tip: 'OOB is the free lunch of bagging: roughly a third of observations are left out of each bootstrap sample, and pooling their predictions approximates test-set performance.',
        relatedTerms: ['Bagging (bootstrap aggregation)', 'Random forest', 'Bias-variance tradeoff'],
      },
      {
        title: 'Random forest: bagging plus random feature projection',
        summary:
          'Random forest extends bagging by also randomising the features considered at each split, which decorrelates the trees and further reduces ensemble variance. It is one of the three required BRFSS project models.',
        points: [
          'The single key addition over bagging: at each split, only a random subset of predictors (max_features) is considered - random feature projection.',
          'Why it helps: random subsets reduce correlations amongst the trees; less-correlated trees average to a lower-variance, better ensemble prediction. Without it, dominant predictors head almost every tree.',
          'Four mechanisms with their parameters: (1) bagging - n_estimators, bootstrap, max_samples; (2) random feature projection - max_features; (3) out-of-bag error estimation - oob_score; (4) model complexity restrictions - max_depth, min_samples_split, min_samples_leaf, max_leaf_nodes.',
          'Honest caveat slide (Biau & Scornet): RFs work very well in practice, but theory is incomplete; they may capture complex patterns beyond classical sparsity/smoothness ideas, may share similarities with deep networks (both partition input space into many regions), and tuning (bootstrap size, tree depth) remains partly empirical.',
          'CKD case study: J48 vs random forest predicting CKD stages from age, sex, race and serum creatinine - 85.5% accuracy (J48) vs 78.25% (RF); ensembles are not automatically best on every dataset.',
          'Asthma XGBoost case study: 235 candidate features from literature risk factors, prior models, general-health factors and clinical experts; reported via ROC curves and sensitivity across thresholds.',
        ],
        important:
          'Exam distinction: bagging randomises SAMPLES only; random forest randomises SAMPLES AND FEATURES. That one sentence answers the "what turns bagging into RF?" question.',
        relatedTerms: ['Random forest', 'Bagging (bootstrap aggregation)', 'Feature importance', 'Gradient boosting & XGBoost'],
      },
      {
        title: 'Boosting: weak learners, shrinkage, XGBoost',
        summary:
          'Boosting assembles a strong learner from weak learners trained sequentially, each fitting the errors of the ensemble so far. The shrinkage (learning-rate) parameter makes the ensemble learn slowly, which tends to generalise better.',
        points: [
          'Definition: a general learning paradigm for putting together a STRONG learner from a collection (possibly infinite) of WEAK learners.',
          'For regression trees: fit a small tree to the residuals of the current model, add it (scaled) to the ensemble, update residuals, repeat - each tree corrects what the ensemble still gets wrong.',
          'Shrinkage = the learning rate: "do not fully trust each new tree; add only a small part of its correction." Typical values 0.01 or 0.001; the right choice is problem-dependent.',
          'Statistical learning approaches that LEARN SLOWLY tend to perform well - the deck’s stated rationale for small learning rates (at the cost of more trees).',
          'Implementations: GradientBoostingClassifier in scikit-learn; XGBoost is the optimised gradient-boosting library used in the heart-failure lab (Ensemble Boosting - XGBoost).',
          'Lab note: automatic CV, bagging, random forest and XGBoost cells can take a few minutes to run in Colab - plan for it in class and project work.',
        ],
        tip: 'The boosting-vs-bagging table is the highest-yield revision item of Lecture 4: sequential vs parallel, weak vs full learners, bias vs variance, reweighted errors vs bootstrap samples.',
        relatedTerms: ['Boosting', 'Gradient boosting & XGBoost', 'Ensemble method'],
      },
    ],
  },
  {
    id: 11,
    title: 'Lecture 4 · Segment 2 - Conclude & Communicate',
    subtitle: 'Communicate to implement, Table 1, reporting frameworks',
    topics: [
      {
        title: 'Bias in the analytic value chain and the Table 1 cohort description',
        summary:
          'Bias can enter anywhere along the ML life cycle (Suresh & Guttag framework). The practical defence is transparency: a clear "Table 1" cohort description lets stakeholders judge whether the analysed cohort reflects the real-world population.',
        points: [
          'Framework citation: Suresh & Guttag (2021), a framework for understanding sources of harm throughout the machine learning life cycle - from data collection through deployment.',
          'Core question: what is your ANALYTIC COHORT, and does it reflect the real-world population of interest?',
          'Table 1 checklist - five areas with examples: patient characteristics (age, sex, ethnicity, SES); clinical characteristics (diagnosis group, comorbidities, severity indicators); service-use variables (admissions, ED visits, outpatient appointments); outcome variables (readmission, mortality, length of stay, no-show status); data-quality indicators (missingness, unusual values, coding completeness).',
          'Note that DATA QUALITY is part of Table 1 - reporting missingness and coding completeness up front, not burying it.',
          'NULL-EASE OHCA validation study is the deck’s worked example of cohort description and reporting done properly.',
          'BRFSS project: your write-up needs a Table 1 for the analytic cohort after exclusions and recoding - it evidences responsible missing-data handling too.',
        ],
        tip: 'If asked how to detect selection bias in a published model, the deck-aligned answer is: inspect the Table 1 cohort description against the intended target population.',
        relatedTerms: ['Bias in the analytic value chain', 'Table 1 (cohort description)', 'Internal vs external validation'],
      },
      {
        title: 'Communicate to implement: messages and stakeholders',
        summary:
          'Results only create value when translated into clear, decision-relevant messages for the right consumers - highlighting what is actionable, what is uncertain, and what is not yet ready for action.',
        points: [
          'Three-way message discipline: state what is ACTIONABLE, what is UNCERTAIN, and what is NOT YET READY for action.',
          'Stakeholder table: subject-matter experts (doctors, nurses, allied health, operations/finance/HR executives) need deployed-model performance in BUSINESS terms plus a feedback-loop mechanism.',
          'Data scientists build and validate models and assess quality; data engineers extract and wrangle data; software engineers integrate models into enterprise systems; DevOps manage the CI/CD pipeline, security, performance and availability.',
          'Model/IT risk managers and auditors ensure compliance with IT and data governance, ethics, and internal/external regulation (IT governance, data governance, research governance, medical board).',
          'Who is responsible for safe AI growth in healthcare? Four groups: the PUBLIC, DEVELOPERS, REGULATORS, and IMPLEMENTERS (hospitals, healthcare institutions, long-term care providers, private clinics) - some developers are implementers too.',
          'Singapore regulatory layers: national legislation (PDPA, HBRA, Penal Code); health products and medical devices (HSA guidelines, Health Products Act); healthcare services provision (PHMCA, Healthcare Services Act); professional registration (Medical Registration Act, ethical codes); institutional ethics review boards and data/AI governance policies.',
          'Project presentation angle: pitch the model around the decision it informs - who acts, at what threshold, with what expected impact.',
        ],
        important:
          'The class-discussion answer "who is responsible for AI/ML in healthcare?" is ALL FOUR: public, developers, regulators, implementers - not just regulators.',
        relatedTerms: ['Communicate to implement', 'Table 1 (cohort description)', 'Reporting standards & EQUATOR Network'],
      },
      {
        title: 'Reporting standards: EQUATOR, TRIPOD, STROBE/RECORD, CONSORT-AI/SPIRIT-AI',
        summary:
          'Reporting standards prescribe the minimal information a model description must contain so research is reproducible. EQUATOR is the umbrella; the protocol-to-use mapping is the single most quiz-ready table of Lecture 4.',
        points: [
          'Purpose: reporting standards prescribe a MINIMAL SET of information for the model description; research is REPRODUCIBLE if independent scientists can recreate the findings (AI/ML models and their performance characteristics) based on the reported information.',
          'EQUATOR (Enhancing the QUAlity and Transparency Of health Research) is the most established organisation for reporting guidelines.',
          'The mapping to memorise: STROBE → observational studies; RECORD → studies using routinely collected health data; TRIPOD → prediction model development and validation; CONSORT-AI → clinical trials involving AI interventions; SPIRIT-AI → protocols for such trials.',
          'TRIPOD (Collins et al. 2015): Transparent Reporting of a multivariable prediction model for Individual Prognosis Or Diagnosis - checklist items span model development, model validation, or both.',
          'TRIPOD pitfalls (shared with other checklists): box-ticking compliance without substantive transparency.',
          'For the BRFSS project: you develop AND validate prediction models on routinely collected survey data - TRIPOD is the primary frame, with STROBE/RECORD relevant to the observational-data aspects.',
        ],
        tip: 'Five-way matching question is almost guaranteed: be able to pair each of STROBE, RECORD, TRIPOD, CONSORT-AI, SPIRIT-AI with its typical use in one phrase each.',
        important:
          'TRIPOD covers prediction models regardless of technique - a logistic regression risk score and a random forest both fall under TRIPOD, not CONSORT-AI (which is for trials of AI interventions).',
        relatedTerms: ['Reporting standards & EQUATOR Network', 'TRIPOD', 'STROBE & RECORD', 'CONSORT-AI & SPIRIT-AI'],
      },
      {
        title: 'Course checkpoint: what Session 5 holds',
        summary:
          'The Lecture 4 course calendar confirms Session 5 = in-class Quiz (25%) plus project presentation, and Session 6 = submission of the group project (20%) and peer evaluation (10%).',
        points: [
          'Session 5: in-class QUIZ worth 25% AND the project presentation - both on the same day, so quiz revision and presentation rehearsal must be planned together.',
          'Session 6: submission of group projects (20%) and peer evaluation (10%).',
          'Quiz 2 scope: Lecture 3 (supervised ML, model evaluation, dimensionality reduction) and Lecture 4 (ensembles, conclude & communicate) - per the reference-text slides, only materials covered in class are included; the ISLR chapter is explicitly NOT in the quiz.',
          'Highest-yield revision list: entropy/information-gain computation, confusion-matrix metrics + Bayes/PPV, AUROC rank interpretation, discrimination-vs-calibration, Brier rare-event caveat, bagging-vs-boosting-vs-RF contrasts, Super Learner steps, and the five reporting-guideline pairings.',
          'Project alignment: the BRFSS deliverable is effectively a mini-TRIPOD exercise - Table 1, model lineup (logistic regression, decision tree, random forest), discrimination AND calibration metrics, feature importance, and decision-relevant communication.',
        ],
        tip: 'Treat every Lecture 3-4 worked example (ED-admission tree, HIV PPV, FEV thresholds, 1%-incidence Brier) as a template: the quiz tends to swap the numbers, not the structure.',
        relatedTerms: ['Model evaluation families', 'TRIPOD', 'Ensemble method', 'Calibration'],
      },
    ],
  },
]
