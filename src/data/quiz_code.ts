import type { QuizQuestion } from './types'

// Code-INTERPRETATION questions per the prof's Quiz 1 announcement: "questions may ask
// you to interpret/provide outputs from codes provided (only Python codes in the Lecture
// Notes of Lectures 1 and 2, before we stopped [slide 68])". The only Python code in
// scope is Lecture 1's Basic Python Concepts section. Every output below was verified
// by executing the code.

export const codeQuestions: readonly QuizQuestion[] = [
  {
    id: 'cq1',
    topic: 'Code Interpretation',
    prompt:
      'ages = [25, 40, 60, 75]\nprint(ages[-1])\nages.append(80)\nprint(ages)\n\nWhat is printed?',
    options: [
      '75, then [25, 40, 60, 75, 80]',
      '80, then [25, 40, 60, 75, 80]',
      'An IndexError, because -1 is not a valid index',
      '75, then [80, 25, 40, 60, 75]',
    ],
    answerIndex: 0,
    explanation:
      'ages[-1] is negative indexing for the LAST element (75). append(80) adds to the END of the list, giving [25, 40, 60, 75, 80]. Negative indices are valid in Python; append never inserts at the front.',
  },
  {
    id: 'cq2',
    topic: 'Code Interpretation',
    prompt:
      'ages = [25, 40, 60, 75]\nolder_adults = [age for age in ages if age >= 60]\nprint(older_adults)\n\nWhat is the output?',
    options: ['[60, 75]', '[75]', '[25, 40]', 'True'],
    answerIndex: 0,
    explanation:
      'The list comprehension keeps elements satisfying the condition age >= 60: both 60 (>= is inclusive) and 75. It returns a new list, not a Boolean.',
  },
  {
    id: 'cq3',
    topic: 'Code Interpretation',
    prompt:
      'ages = [25, 40, 60, 75]\ngroups = ["Older adult" if a >= 65 else "Adult" for a in ages]\nprint(groups)\n\nWhat is the output?',
    options: [
      "['Adult', 'Adult', 'Adult', 'Older adult']",
      "['Adult', 'Adult', 'Older adult', 'Older adult']",
      "['Older adult']",
      "['Adult', 'Adult', 'Adult', 'Adult']",
    ],
    answerIndex: 0,
    explanation:
      'The conditional comprehension classifies EVERY element: threshold is >= 65, so 60 is still "Adult" and only 75 is "Older adult". Contrast with cq2 where the filter threshold was 60 - read the cutoff carefully.',
  },
  {
    id: 'cq4',
    topic: 'Code Interpretation',
    prompt:
      'bmi = 28\nif bmi < 18.5:\n    print("Underweight")\nelif bmi < 25:\n    print("Normal weight")\nelif bmi < 30:\n    print("Overweight")\nelse:\n    print("Obese")\n\nWhat is printed?',
    options: ['Normal weight', 'Overweight', 'Obese', 'Nothing - no branch matches'],
    answerIndex: 1,
    explanation:
      'elif chains evaluate top-down and stop at the FIRST true branch: 28 < 18.5 false, 28 < 25 false, 28 < 30 true -> "Overweight". The else branch only runs when every prior test fails.',
  },
  {
    id: 'cq5',
    topic: 'Code Interpretation',
    prompt:
      'def calculate_bmi(weight_kg, height_m):\n    bmi = weight_kg / (height_m ** 2)\n    return bmi\n\nresult = calculate_bmi(70, 1.75)\nprint(round(result, 1))\n\nWhat is printed?',
    options: ['22.9', '40.0', '22.86', 'Nothing - the function only returns, it never prints'],
    answerIndex: 0,
    explanation:
      '70 / 1.75^2 = 70 / 3.0625 = 22.857..., which rounds to 22.9 at 1 decimal place. The function returns the value and the print() outside displays it - defining a function does not print, but this code CALLS it and prints the result.',
  },
  {
    id: 'cq6',
    topic: 'Code Interpretation',
    prompt:
      'count = 1\nwhile count <= 5:\n    print("Round", count)\n    count = count + 1\n\nHow many lines are printed, and what would happen without the line "count = count + 1"?',
    options: [
      '5 lines; without the increment the loop runs forever (infinite loop)',
      '4 lines; without the increment the loop stops after one round',
      '5 lines; without the increment Python raises an error',
      '6 lines; without the increment the loop runs forever',
    ],
    answerIndex: 0,
    explanation:
      'count goes 1,2,3,4,5 - five iterations (the check fails when count reaches 6). A while loop only terminates when its condition becomes false, so removing the increment means count stays 1 forever: the classic infinite loop. Python raises no error for it.',
  },
  {
    id: 'cq7',
    topic: 'Code Interpretation',
    prompt:
      "patient = {\"patient_id\": \"P001\", \"age\": 65, \"diabetes\": True}\nprint(patient[\"age\"])\n\npatient_record = (\"P001\", 65, \"Male\")\nprint(patient_record[1])\n\nWhat is printed?",
    options: ['65 and 65', '65 and P001', 'age and 65', 'A TypeError - tuples cannot be indexed'],
    answerIndex: 0,
    explanation:
      'Dictionaries are accessed by KEY (patient["age"] -> 65); tuples by POSITION (index 1 is the second element, 65). Both print 65. Tuples are immutable but fully indexable.',
  },
  {
    id: 'cq8',
    topic: 'Code Interpretation',
    prompt:
      'df has columns patient_id, age, gender, bp, diabetes where age has one missing value and bp has one missing value (4 rows total).\n\nprint(df.isna().sum())\nprint(df["age"].count())\n\nWhat do the two statements report?',
    options: [
      'Per-column missing counts (age 1, bp 1, others 0); then 3 - count() counts NON-missing values',
      'Per-column missing counts; then 4 - count() counts all rows',
      'Total missing in the whole frame (2); then 1 - count() counts missing values',
      'Booleans per cell; then an error because age has a missing value',
    ],
    answerIndex: 0,
    explanation:
      'isna().sum() gives missing-value counts per column. count() is the mirror image: it counts NON-missing entries, so a 4-row column with 1 missing reports 3. Confusing count() with "number of rows" (len) or with missing counts is the classic trap.',
  },
  {
    id: 'cq9',
    topic: 'Code Interpretation',
    prompt:
      'df["age"] = [65, 45, None, 72]\ndf["age"] = df["age"].fillna(df["age"].median())\n\nWhat value replaces the missing entry?',
    options: ['65.0 (the median of 45, 65, 72)', '60.67 (the mean of 45, 65, 72)', '45.0 (the minimum)', '0'],
    answerIndex: 0,
    explanation:
      'The median is computed over NON-missing values only: sorted 45, 65, 72 -> middle value 65. fillna(median) is preferred over mean when outliers are present because the median is robust.',
  },
  {
    id: 'cq10',
    topic: 'Code Interpretation',
    prompt:
      'df["general_health"] = ["Good", "Fair", "Poor", "Good", "Excellent"]\ndf["poor_fair"] = df["general_health"].isin(["Poor", "Fair"]).astype(int)\nprint(df["poor_fair"].tolist())\n\nWhat is the output?',
    options: ['[0, 1, 1, 0, 0]', '[1, 0, 0, 1, 1]', '[False, True, True, False, False]', '[0, 1, 2, 0, 0]'],
    answerIndex: 0,
    explanation:
      'isin() returns True where the value is "Poor" or "Fair" (rows 2 and 3), and astype(int) converts True/False to 1/0. This is exactly the binary-outcome recode pattern from the Lecture 1 mini end-to-end example (and our BRFSS project).',
  },
  {
    id: 'cq11',
    topic: 'Code Interpretation',
    prompt:
      'df has sex = [F, M, F, M, F] and age = [25, 45, 67, 72, 38].\n\nsummary = df.groupby("sex").agg(\n    n=("respondent_id", "count"),\n    mean_age=("age", "mean"),\n)\n\nWhat does summary contain?',
    options: [
      'One row per sex: Female n=3 mean_age=43.33; Male n=2 mean_age=58.5',
      'One row per respondent with their sex and age',
      'A single overall mean age of 49.4',
      'An error - agg cannot compute two statistics at once',
    ],
    answerIndex: 0,
    explanation:
      'groupby("sex") splits rows into Female (25, 67, 38 -> mean 43.33, n=3) and Male (45, 72 -> mean 58.5, n=2); agg applies both summaries per group in one call (named aggregation). This is the split-apply-combine pattern.',
  },
  {
    id: 'cq12',
    topic: 'Code Interpretation',
    prompt:
      'summary = df.groupby("age_group").agg(n=("id", "count"), cases=("poor_fair", "sum"))\nsummary["rate"] = summary["cases"] / summary["n"]\n\nIf the Older adult group has n=2 and cases=1, what does rate report and what does it mean?',
    options: [
      '0.5 - half the respondents in that group have the outcome (a group-level proportion)',
      '2.0 - the ratio of group size to cases',
      '1.0 - because sum() counts rows, not events',
      '50 - a percentage',
    ],
    answerIndex: 0,
    explanation:
      'cases/n = 1/2 = 0.5, the within-group outcome proportion. sum() over a 0/1 outcome counts the 1s (events). This recode -> group -> rate pattern is the core workflow of both the Lecture 1 example and the BRFSS group project.',
  },
]
