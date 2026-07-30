import type { DrillCard } from './types'

export const l1Drills: readonly DrillCard[] = [
  // ── Healthcare Landscape ──────────────────────────────────────────
  {
    id: 'd1',
    topic: 'Healthcare Landscape',
    prompt:
      'Describe the four-stage evolution of Singapore\'s public healthcare system and name the three clusters that exist today.',
    modelAnswer:
      'Singapore\'s public system evolved through four stages: government-owned hospitals directly under MOH; corporatization from 1985 (NUH first), giving each hospital its own Board with autonomy and management flexibility; cluster formation in 2001, starting with 2 clusters that integrated hospitals, polyclinics and specialist centres around patients; and Regional Health Systems, where clusters went 2 → 6 → reorganised in 2017 into today\'s 3. The three clusters are SingHealth (east, e.g. SGH/KKH/CGH/SKH, with Duke-NUS), NHG (central, e.g. TTSH/KTPH, with LKC Medicine) and NUHS (west, e.g. NUH/NTFGH, with NUS).',
    keyPoints: [
      'Four stages: MOH-owned → corporatization (NUH 1985) → clusters (2001, started with 2) → Regional Health Systems',
      '2017 reorganisation: 6 clusters consolidated into exactly 3',
      'SingHealth = east, NHG = central, NUHS = west',
      'Each cluster anchored to a medical school (Duke-NUS, LKC, NUS)',
    ],
  },
  {
    id: 'd2',
    topic: 'Healthcare Landscape',
    prompt:
      'List the five settings of the care continuum and explain why "moving care left" matters to the health system.',
    modelAnswer:
      'The five settings are preventive (school, community, workplace, home), primary (polyclinics, GPs, family medicine clinics), acute (hospitals, A&E, specialist outpatient clinics), ILTC (nursing homes, hospices, home- and centre-based care, mostly run by VWOs) and social & community care (senior activity centres, FSCs/SSOs). Acute care is the most expensive setting and carries the highest burden of care. Shifting care left - towards prevention, home care, telemedicine and chronic disease management - therefore improves health outcomes AND lowers cost. This is the economic case for predictive analytics: predicting and preventing keeps patients out of the costliest (acute) setting.',
    keyPoints: [
      'Five settings: preventive → primary → acute → ILTC → social & community',
      'Acute care is the most expensive setting',
      'Left shift = better outcomes AND lower cost',
      'Links directly to the value of predictive analytics',
    ],
  },
  {
    id: 'd3',
    topic: 'Healthcare Landscape',
    prompt:
      'In the WHO Health System Framework, distinguish the six building blocks from the four goals.',
    modelAnswer:
      'The six building blocks are the system inputs: service delivery, health workforce, information, medical products/vaccines/technologies, financing, and leadership/governance. Mediated by access, coverage, quality and safety, these produce the four goals: improved health (both level AND equity), responsiveness, social & financial risk protection, and improved efficiency. Note that "information" is a building block in its own right - data and analytics are core system infrastructure, not an add-on - and that equity is part of the improved-health goal, not a separate goal.',
    keyPoints: [
      '6 blocks: service delivery, workforce, information, medical products, financing, leadership/governance',
      '4 goals: improved health (level AND equity), responsiveness, risk protection, efficiency',
      'Mediators: access, coverage, quality, safety',
      'Information is a building block; equity sits inside the health goal',
    ],
  },

  // ── Financing & Value ─────────────────────────────────────────────
  {
    id: 'd4',
    topic: 'Financing & Value',
    prompt:
      'State the five principles of the 1993 MOH White Paper "Affordable Healthcare".',
    modelAnswer:
      'The five principles are: (1) nurture a healthy nation by promoting good health; (2) personal responsibility for one\'s health, avoiding over-reliance on welfare or medical insurance; (3) good and affordable basic medical services for all; (4) rely on competition and market forces to improve efficiency; and (5) the government intervenes directly when the market fails to keep costs down. The philosophy deliberately balances personal responsibility against targeted government intervention - neither fully free state provision nor a pure market.',
    keyPoints: [
      'Promote good health / healthy nation',
      'Personal responsibility - avoid over-reliance on welfare or insurance',
      'Affordable basic care for all; competition and market forces for efficiency',
      'Government intervenes directly when the market fails to keep costs down',
    ],
  },
  {
    id: 'd5',
    topic: 'Financing & Value',
    prompt:
      'Explain the purpose of each layer in Singapore\'s S+3M healthcare financing framework.',
    modelAnswer:
      'Subsidies provide up to 80% subvention in lower ward classes - universal access with co-payment. MediSave is compulsory individual savings (6-8% of income into a personal account) for smaller bills; MediShield Life is national catastrophic insurance that pools risk for large bills (complemented by Integrated Shield Plans and ElderShield/CareShield); and Medifund is a government endowment fund acting as the last-resort safety net for the indigent. The layers are deliberately sequenced from routine bills to catastrophic bills to destitution: access → individual savings → risk pooling → safety net.',
    keyPoints: [
      'Subsidies = access (up to 80% subvention, with co-payment)',
      'MediSave = compulsory individual savings, 6-8% of income, smaller bills',
      'MediShield Life = risk pooling / catastrophic insurance for large bills',
      'Medifund = endowment-funded last-resort safety net for the indigent',
    ],
  },
  {
    id: 'd6',
    topic: 'Financing & Value',
    prompt:
      'Define and contrast MediSave and MediShield Life. Why is confusing them the classic mistake?',
    modelAnswer:
      'MediSave is a compulsory savings account: 6-8% of income goes into a personal account - it is the patient\'s own money, used for smaller, routine bills. MediShield Life is the national insurance layer: it pools risk across the population to cover large, catastrophic hospital bills. The classic mistake is calling MediSave "insurance" - it involves no risk pooling; each layer targets a different bill size and risk, with savings for the routine and insurance for the catastrophic.',
    keyPoints: [
      'MediSave = personal savings account (own money), 6-8% of income, smaller bills',
      'MediShield Life = national insurance, risk pooling, large/catastrophic bills',
      'Savings vs insurance (no risk pooling in MediSave) is the key contrast',
    ],
  },
  {
    id: 'd7',
    topic: 'Financing & Value',
    prompt:
      'Name the "3 Beyonds" of Beyond Healthcare 2020 (~2016) and give one analytics example for each.',
    modelAnswer:
      'Beyond healthcare to health means shifting to prevention (Healthier SG); the analytics example is population risk stratification. Beyond hospital to community means delivering care near home; the analytics examples are telemonitoring analytics and demand forecasting for community care. Beyond quality to value means best value, financially sustainable care; the analytics example is VDC outcome/cost benchmarking. Each policy shift maps directly to a data use case - the earlier Healthcare 2020 (~2012) pillars were accessibility, quality and affordability.',
    keyPoints: [
      'Beyond healthcare to health → prevention/Healthier SG → risk stratification',
      'Beyond hospital to community → care near home → telemonitoring, demand forecasting',
      'Beyond quality to value → sustainable best value → VDC outcome/cost benchmarking',
    ],
  },
  {
    id: 'd8',
    topic: 'Financing & Value',
    prompt:
      'How does Porter define value in healthcare, and why is value not the same as low cost?',
    modelAnswer:
      'Porter defines value as health outcomes that matter to patients divided by the total resources/cost across the full cycle of care. Value is not low cost because the numerator must move: cutting cost while outcomes fall destroys value and can be harmful, and outcomes are condition-specific and multidimensional. Achieving value requires three shifts: from supply-driven to patient-centred care, from volume and profitability to outcomes achieved, and from fragmented to integrated care.',
    keyPoints: [
      'Value = outcomes that matter to patients ÷ total cost over the full cycle of care',
      'Cost-cutting without outcomes destroys value / can be harmful',
      'Outcomes are condition-specific and multidimensional',
      'Three shifts: patient-centred, outcomes over volume, integrated care',
    ],
  },
  {
    id: 'd9',
    topic: 'Financing & Value',
    prompt: 'Define and contrast PROMs and PREMs, giving an example of each.',
    modelAnswer:
      'A PROM (patient-reported outcome measure) is the patient\'s own report of their health status and outcomes - for example, pain or function after a knee replacement. A PREM (patient-reported experience measure) is the patient\'s report of the experience of receiving care - for example, how easy it was to get an appointment or how well staff communicated. Both are instruments for the value-based shift from volume and profitability to outcomes achieved: PROMs measure the outcome of care, PREMs measure the experience of care.',
    keyPoints: [
      'PROM = patient-reported health status/outcome (e.g. pain, function after surgery)',
      'PREM = patient-reported experience of care (communication, waiting, appointments)',
      'Outcome vs experience is the contrast; both support the volume → outcomes shift',
    ],
  },
  {
    id: 'd10',
    topic: 'Financing & Value',
    prompt:
      'What is Value Driven Care (VDC), and how is the Clinical Quality Index (CQI) computed? Why is the CQI deliberately stringent?',
    modelAnswer:
      'VDC, launched in 2017 as part of the 3 Beyonds, is MOH\'s programme covering 17 high-impact conditions (e.g. cataract, total knee replacement, stroke, pneumonia, congestive heart failure) with standardised clinical outcome indicators for like-for-like benchmarking across public healthcare institutions; total cost benchmarking additionally enables bundled payments. The Clinical Quality Index is the percentage of cases in which ALL indicators are met - an all-or-none composite. It is deliberately stringent: a case meeting 9 of 10 indicators counts as a fail, so strong performance on easy indicators cannot mask failures on hard ones, unlike an average.',
    keyPoints: [
      'VDC launched 2017, 17 high-impact conditions, standardised outcome indicators',
      'Enables like-for-like benchmarking; cost benchmarking enables bundled payments',
      'CQI = % of cases where ALL indicators met (all-or-none composite)',
      '9 of 10 indicators met = fail; stricter than averaging',
    ],
  },

  // ── Data Ecosystem ────────────────────────────────────────────────
  {
    id: 'd11',
    topic: 'Data Ecosystem',
    prompt:
      'Explain the DIKW pyramid using the lecture\'s motion-sensor worked example.',
    modelAnswer:
      'DIKW orders Data → Information → Knowledge → Wisdom, i.e. raw → meaning → context → action. In the worked example, the raw motion-sensor readings {14:00, 255} and {14:10, 0} are Data; "no motion detected since 14:10" gives the data meaning, so it is Information; "the senior has been motionless for hours and may have fainted" adds context and risk interpretation, so it is Knowledge; and "activate the caregiver" applies knowledge as action, so it is Wisdom. The trap is the information/knowledge boundary: once a statement interprets risk or cause, it has crossed into knowledge.',
    keyPoints: [
      'Data → Information → Knowledge → Wisdom = raw → meaning → context → action',
      'Sensor readings = data; "no motion since 14:10" = information',
      '"May have fainted" (context/risk) = knowledge; "activate caregiver" = wisdom',
      'Interpretation of risk/cause marks the information → knowledge boundary',
    ],
  },
  {
    id: 'd12',
    topic: 'Data Ecosystem',
    prompt:
      'State the IOM (2008) definition of a Learning Health System and outline its four-step loop.',
    modelAnswer:
      'The IOM (2008) defines a Learning Health System as one in which science, informatics, incentives and culture are aligned for continuous improvement and innovation, best practices are seamlessly embedded in delivery, and new knowledge is captured as an integral by-product of the delivery experience. It runs as a repeating four-step loop: pick a high-priority clinical process; build an evidence-based best-practice guideline; blend the guideline into clinical workflow WITH a data system tracking it; and feed the data into a lean learning loop, then repeat. The loop is grounded in measured reality - data from actual practice, not assumption.',
    keyPoints: [
      'Four aligned elements: science, informatics, incentives, culture (SIIC)',
      'Best practices seamlessly embedded; knowledge as an integral by-product of care',
      'Loop: priority process → evidence-based guideline → embed in workflow with tracking data system → lean learning loop, repeat',
      'Grounded in measured reality',
    ],
  },
  {
    id: 'd13',
    topic: 'Data Ecosystem',
    prompt:
      'What are the Quadruple Aims? Which aim was added to the Triple Aim, and why?',
    modelAnswer:
      'The Quadruple Aims are: enhance patient experience, improve population health, reduce cost, and improve provider work-life. The fourth aim - provider work-life - was added to the original Triple Aim in response to clinician burnout. All four are the yardstick against which health data initiatives are judged, e.g. PREMs for experience, risk stratification for population health, VDC benchmarking for cost, and automation/decision support that reduces documentation burden for work-life.',
    keyPoints: [
      'Four aims: patient experience, population health, cost, provider work-life',
      'Provider work-life was the addition to the Triple Aim',
      'Reason: clinician burnout',
    ],
  },
  {
    id: 'd14',
    topic: 'Data Ecosystem',
    prompt:
      'Contrast research IT and operational IT on at least three dimensions, and state the thesis of Liu et al. (2025).',
    modelAnswer:
      'Research IT is grant-funded, governed by IRB/ethics, owned by the principal investigator, flexible and experimental with frequent change, tolerates downtime, and measures success in publications. Operational IT serves clinical care and billing, is funded from operational budgets, institution-owned, stable and reliable with controlled change, mission-critical 24/7, and measures success in patient outcomes and uptime; its validation involves rigorous clinical validation, UAT and security audits. Liu et al. (2025) argue that socio-technical harmonization of these two worlds is the bottleneck for a rapid and continuous Learning Health System, achieved through a 3-phase pipeline of Learning, Implementation and Assessment.',
    keyPoints: [
      'Research IT: grant-funded, IRB, PI-owned, flexible, downtime tolerable, publications',
      'Operational IT: operational budget, compliance, institution-owned, mission-critical 24/7, patient outcomes/uptime',
      'Liu et al. thesis: socio-technical harmonization is the LHS bottleneck',
      '3 phases: Learning → Implementation → Assessment',
    ],
  },
  {
    id: 'd15',
    topic: 'Data Ecosystem',
    prompt:
      'In the Liu et al. (2025) LHS pipeline, what are OMOP and i2b2, and in which phase do they appear?',
    modelAnswer:
      'OMOP and i2b2 are common data models that standardise EHR extracts into a shared structure and vocabulary so analyses and models are portable across institutions. They appear in Phase 1 (Learning) of the pipeline: EHR snapshot → data lake → ETL → common data models (OMOP/i2b2) → research dataset → model development. They should not be confused with EHR products like Epic, nor with RE-AIM, which is an assessment framework used in Phase 3.',
    keyPoints: [
      'OMOP/i2b2 = common data models standardising EHR data for research',
      'Phase 1 Learning: EHR snapshot → data lake → ETL → CDM → research dataset → model',
      'Not EHR vendors (Epic) and not assessment frameworks (RE-AIM, Phase 3)',
    ],
  },
  {
    id: 'd16',
    topic: 'Data Ecosystem',
    prompt:
      'What is Singapore\'s NEHR, what is its guiding principle, and what benefits does it deliver?',
    modelAnswer:
      'The NEHR (National Electronic Health Record), run by Synapxe, embodies the principle "One Patient, One Health Record": a single national record that follows the patient across care settings, from GP to hospital to community hospital. Its benefits are care coordination, patient safety and efficiency, because every provider sees the same longitudinal record. It is a clinical record system, not a research data lake or a claims platform.',
    keyPoints: [
      'NEHR = "One Patient, One Health Record"',
      'National record following the patient across GP → hospital → community care',
      'Benefits: coordination, safety, efficiency',
      'Run by Synapxe; a clinical record, not a research data lake',
    ],
  },
  {
    id: 'd17',
    topic: 'Data Ecosystem',
    prompt:
      'Describe the main categories of health data sources, naming two Singapore disease registries and what each covers.',
    modelAnswer:
      'Health data arises from patient-provider interactions in the health system (demographic, clinical and administrative/claims data captured in EHR/EMR systems like NEHR, Epic and eHintS), from external sources (consumer-generated wearables and environmental data), and from research databases (genomics, clinical trials, observational studies). Disease registries curate all patients with a condition or event: PAROS covers resuscitation (out-of-hospital cardiac arrest) outcomes, and SingCLOUD covers cardiac data - alongside the National Diabetes Registry and National Death Registry. Open curated sources include data.gov.sg (>70 agencies, >100 health datasets) and PhysioNet, which are free, in contrast to paid sources like Flatiron.',
    keyPoints: [
      'Three source families: patient-provider (EHR/claims), external (wearables, environment), research databases',
      'PAROS = resuscitation outcomes; SingCLOUD = cardiac',
      'Open/free curated data: data.gov.sg, PhysioNet (vs paid sources)',
    ],
  },

  // ── Analytics & AI ────────────────────────────────────────────────
  {
    id: 'd18',
    topic: 'Analytics & AI',
    prompt:
      'Explain the Gartner analytics value chain: name each stage, the question it answers, and where this course focuses.',
    modelAnswer:
      'The chain runs descriptive ("what happened?" - EDA, dashboards, reports), diagnostic ("why did it happen?" - drill-down, association, causality), predictive ("what will happen?" - risk scores, forecasting, anomaly detection) and prescriptive ("how can we make it happen?" - simulation, optimisation, reinforcement learning), with cognitive (adaptive/continual learning, LLMs and GenAI) as an extension. Both value and difficulty increase left to right - hindsight → insight → foresight. ISSS623 focuses on the first three stages (descriptive, diagnostic, predictive), which is also the scope of the BRFSS group project. Note that prescriptive is not just "prediction plus a recommendation" - it requires simulation/optimisation to choose actions.',
    keyPoints: [
      'Descriptive = what happened; diagnostic = why; predictive = what will happen; prescriptive = how to make it happen; cognitive = extension (LLMs/GenAI)',
      'Value and difficulty both rise rightward (hindsight → insight → foresight)',
      'Course focus = first three stages',
      'A risk score alone is predictive, not prescriptive',
    ],
  },
  {
    id: 'd19',
    topic: 'Analytics & AI',
    prompt:
      'Describe the nesting relationship between AI, machine learning and deep learning, and explain why "AI in healthcare goes beyond deep learning".',
    modelAnswer:
      'The nesting is AI ⊃ ML ⊃ deep learning: every deep-learning model is machine learning and every machine-learning model is AI, but not vice versa. AI beyond ML includes planning, expert systems, robotics and computer vision; ML spans supervised, unsupervised and reinforcement learning; deep learning is multilayer neural networks, dominant for pathology/radiology images, clinical notes, NLP and LLMs. Hence the lecture takeaway "AI in healthcare goes beyond deep learning" - a rule-based expert system is AI without being ML at all.',
    keyPoints: [
      'AI ⊃ ML ⊃ DL nesting; not vice versa',
      'AI beyond ML: planning, expert systems, robotics, computer vision',
      'ML paradigms: supervised, unsupervised, reinforcement; DL = multilayer neural nets',
      'Expert system = AI but not ML',
    ],
  },
  {
    id: 'd20',
    topic: 'Analytics & AI',
    prompt:
      'Outline the six stages of the clinical-grade AI/ML lifecycle (Aliferis & Simon ch. 6) and explain why model monitoring is a stage in its own right.',
    modelAnswer:
      'The lifecycle runs: (1) establish performance and safety requirements; (2) data design & collection; (3) "first-pass" analysis & modelling; (4) model optimisation & validation; (5) production models & delivery; and (6) model monitoring & safeguards - with regulatory, ethical, legal and societal considerations running in parallel across all stages. Monitoring is a stage in its own right because clinical data and populations change after deployment: a model validated once is not safe forever, so deployed models must be watched for drift and degradation with safeguards, version control and audit so they can be retrained or withdrawn. This is why high test-set accuracy alone does not make a model "clinical grade" - clinical grade means engineered to the whole lifecycle, from requirements before any data work to surveillance after deployment.',
    keyPoints: [
      'Six stages: requirements → data design → first-pass modelling → optimisation/validation → production/delivery → monitoring & safeguards',
      'Regulatory/ethical/legal/societal considerations run in parallel',
      'Monitoring needed because data and populations drift post-deployment; "validated once, safe forever" is the rejected misconception',
      'Starts with requirements (not data), does not end at deployment',
    ],
  },

  // ── Python & Tools ────────────────────────────────────────────────
  {
    id: 'd21',
    topic: 'Python & Tools',
    prompt: 'Define a list and a tuple in Python, and state the key difference between them.',
    modelAnswer:
      'A list is an ordered, changeable (mutable) collection written with square brackets, e.g. [25, 40, 60], accessed by index (ages[0], ages[-1]) and extendable with append(). A tuple is an ordered but unchangeable (immutable) collection written with parentheses, e.g. ("P001", 65, "Male"). Both are ordered and can store any type - the key difference is mutability: a tuple cannot be modified after creation, so it is used when data must not change.',
    keyPoints: [
      'List: ordered, mutable, square brackets, append()',
      'Tuple: ordered, immutable, parentheses',
      'Mutability is THE contrast; use a tuple when data must not be modified',
    ],
  },
  {
    id: 'd22',
    topic: 'Python & Tools',
    prompt:
      'What is a Python dictionary and how are its values accessed? Contrast this with a list.',
    modelAnswer:
      'A dictionary is a collection of key-value pairs written with curly braces, e.g. patient = {"patient_id": "P001", "age": 65}. Values are accessed by KEY - patient["age"] returns 65 - not by numeric position. This is the defining contrast with lists and tuples, which are accessed by index (ages[0]): dictionaries look up by name, sequences look up by position.',
    keyPoints: [
      'Dictionary = key-value pairs in curly braces',
      'Access by key, e.g. patient["age"]',
      'Contrast: lists/tuples accessed by numeric index (position)',
    ],
  },
  {
    id: 'd23',
    topic: 'Python & Tools',
    prompt: 'Define a pandas Series and a DataFrame, and explain how they are related.',
    modelAnswer:
      'A Series is pandas\' ONE-dimensional labelled array - a single column of values, e.g. pd.Series([25, 40, 60]), with vectorised methods like .mean(). A DataFrame is the TWO-dimensional table of rows and columns - the standard structure for health datasets like the BRFSS topic CSVs, inspected with head(), info() and describe(). They are related because each column of a DataFrame is a Series: 1-D vs 2-D is the contrast to state.',
    keyPoints: [
      'Series = one-dimensional labelled array (a single column)',
      'DataFrame = two-dimensional table of rows x columns',
      'Each DataFrame column is a Series; 1-D vs 2-D is the key contrast',
    ],
  },
  {
    id: 'd24',
    topic: 'Python & Tools',
    prompt:
      'Contrast what the pandas info() and describe() functions tell you about a DataFrame.',
    modelAnswer:
      'info() shows STRUCTURE: the number of rows and columns, each column\'s name, its count of non-null (non-missing) values, and its data type (dtype) - it answers "what columns do I have, how complete are they, and what types are they?" describe() shows SUMMARY STATISTICS for numeric columns: count, mean, standard deviation, minimum, the 25th/50th/75th percentiles (the 50th being the median) and maximum. The one-line contrast is structure vs statistics; head() completes the trio by showing the first rows of actual data. The prof explicitly flagged info() vs describe() as quiz material.',
    keyPoints: [
      'info() = structure: rows/columns, non-null counts, dtypes',
      'describe() = summary statistics: count, mean, std, min, 25/50/75 percentiles, max',
      'Structure vs statistics is the contrast; head() shows the first rows of data',
    ],
  },
  {
    id: 'd25',
    topic: 'Python & Tools',
    prompt:
      'Explain what df.isna().sum() and fillna() each do, and why the median is often preferred to the mean when filling.',
    modelAnswer:
      'df.isna().sum() counts the missing values in each column - the essential first check before BRFSS recoding - whereas df.count() counts NON-missing values. fillna() replaces missing values with a specified value, e.g. df["age"].fillna(df["age"].median()). The median is preferred because it is robust to outliers and skew: health variables like age or unhealthy days are often skewed, and the mean gets dragged towards extreme values while the median does not.',
    keyPoints: [
      'isna().sum() = count missing per column (count() counts non-missing)',
      'fillna() = replace/impute missing values',
      'Median preferred: robust to outliers and skew, unlike the mean',
    ],
  },

  // ── BRFSS Project ─────────────────────────────────────────────────
  {
    id: 'd26',
    topic: 'BRFSS Project',
    prompt:
      'Explain the meaning of the BRFSS codes 7/77, 9/99, 88 and BLANK, and why they must be recoded before analysis.',
    modelAnswer:
      'In BRFSS coding conventions, 7 or 77 means "Don\'t know / Not sure", 9 or 99 means "Refused", and BLANK means the question was not asked (e.g. skip logic or a state not fielding an optional module). For day-count variables like MENTHLTH or PHYSHLTH, 88 means "none" (zero days) and must be recoded to 0. These codes must be mapped to missing (or 0 for 88) before any modelling because treating them as real numeric values silently corrupts every mean and rate computed - responsible recoding is worth about 6% of the project grade, the largest final-rubric criterion.',
    keyPoints: [
      '7/77 = Don\'t know/Not sure; 9/99 = Refused; BLANK = not asked',
      '88 = "none" (zero days) on day-count variables → recode to 0',
      'Treated as numbers they corrupt every mean/rate; recode to missing first',
      'Data preparation/recoding worth ~6% of grade',
    ],
  },
  {
    id: 'd27',
    topic: 'BRFSS Project',
    prompt:
      'Why are the project\'s unweighted BRFSS results NOT nationally representative, and how must findings be phrased?',
    modelAnswer:
      'BRFSS provides survey weights (e.g. _LLCPWT) that adjust responses for sampling design and non-response so estimates represent the US population; the project scope explicitly does NOT use them. Without weights, results describe only the analytic sample, because some groups are over- or under-represented relative to the population. Findings must therefore be phrased as characteristics of the 2024 analytic sample - never as US population or nationally representative prevalence estimates - and the report must include this as an explicit limitation statement.',
    keyPoints: [
      'Survey weights correct for sampling design and non-response',
      'Project rule: weights NOT used (_LLCPWT ignored)',
      'Unweighted = findings about the analytic sample, not the US population',
      'A limitation statement is required',
    ],
  },
  {
    id: 'd28',
    topic: 'BRFSS Project',
    prompt:
      'State the BRFSS project\'s outcome and modelling scope rules, and explain the rationale for the one-primary-outcome rule.',
    modelAnswer:
      'The scope is one primary outcome only (or a justified composite), plus at most one optional secondary outcome; a maximum of 20 predictors; and one baseline regression (linear or logistic) plus at least two machine-learning models, using 2024 data only without survey weights. The one-primary-outcome rule exists to prevent the proliferation of models: a single well-justified outcome keeps the analysis focused and comparable. The baseline regression provides an interpretable benchmark against which the ML models are compared.',
    keyPoints: [
      '1 primary outcome (or justified composite) + optional 1 secondary',
      'Max 20 predictors; 2024 data only; no survey weights',
      '1 baseline regression + at least 2 ML models',
      'Rule prevents proliferation of models; baseline = interpretable benchmark',
    ],
  },
]
