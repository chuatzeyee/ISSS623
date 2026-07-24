import type { Definition } from './types'
import { l2Definitions } from './definitions_l2'

const l1Definitions: readonly Definition[] = [
  // ── Health System ─────────────────────────────────────────────────
  {
    term: 'SingHealth',
    definition:
      'Singapore Health Services, the largest of the three public healthcare clusters, serving the eastern region. It includes SGH, KKH, Changi General Hospital (CGH), Sengkang General Hospital (SKH) and partners Duke-NUS Medical School as its Academic Medical Centre.',
    category: 'Health System',
    related: ['NHG', 'NUHS', 'Regional Health System'],
  },
  {
    term: 'NHG (National Healthcare Group)',
    definition:
      'The public healthcare cluster serving the central region of Singapore. Key institutions include Tan Tock Seng Hospital (TTSH), Khoo Teck Puat Hospital (KTPH) and Yishun Community Hospital, with Lee Kong Chian School of Medicine as academic partner.',
    category: 'Health System',
    related: ['SingHealth', 'NUHS', 'Regional Health System'],
  },
  {
    term: 'NUHS (National University Health System)',
    definition:
      'The public healthcare cluster serving the western region. It comprises National University Hospital (NUH), Ng Teng Fong General Hospital (NTFGH) and Alexandra Hospital, with NUS as its academic partner.',
    category: 'Health System',
    related: ['SingHealth', 'NHG', 'Regional Health System'],
  },
  {
    term: 'Synapxe',
    definition:
      'The national health-technology agency (formerly IHiS) that builds and runs Singapore\'s public healthcare IT systems, including the National Electronic Health Record (NEHR). One of the key supporting agencies alongside ALPS, HSA, HPB, AIC and MOHT.',
    category: 'Health System',
    related: ['NEHR', 'ALPS', 'AIC'],
  },
  {
    term: 'ALPS',
    definition:
      'The national healthcare supply chain agency, established in 2018 (in the same policy wave as fee benchmarks) to consolidate procurement and logistics for public healthcare institutions and drive cost efficiency.',
    category: 'Health System',
    related: ['Synapxe', 'VDC'],
  },
  {
    term: 'AIC (Agency for Integrated Care)',
    definition:
      'The agency that coordinates the intermediate and long-term care (ILTC) sector - nursing homes, home care, centre-based care - and manages referrals between hospitals and community care providers.',
    category: 'Health System',
    related: ['ILTC', 'VWO'],
  },
  {
    term: 'HSA (Health Sciences Authority)',
    definition:
      'Singapore\'s regulator for medicines, medical devices and blood services. In stakeholder analysis it sits in the "regulators & policy" category alongside MOH.',
    category: 'Health System',
    related: ['HPB'],
  },
  {
    term: 'HPB (Health Promotion Board)',
    definition:
      'The statutory board responsible for national health promotion and preventive health programmes - the agency most aligned with the "beyond healthcare to health" shift and Healthier SG.',
    category: 'Health System',
    related: ['Healthier SG', '3 Beyonds'],
  },
  {
    term: 'Polyclinic',
    definition:
      'A public primary care clinic offering subsidised GP consultations, chronic disease management, diagnostics and pharmacy services. Polyclinics belong to the three clusters and anchor the primary layer of the care continuum together with private GPs and family medicine clinics.',
    category: 'Health System',
    related: ['Care continuum', 'Regional Health System'],
  },
  {
    term: 'ILTC (Intermediate & Long-Term Care)',
    definition:
      'The care setting between acute hospitals and home: nursing homes, hospices, home-based and centre-based care. It is mostly run by voluntary welfare organisations (VWOs) and coordinated by AIC.',
    category: 'Health System',
    related: ['AIC', 'VWO', 'Care continuum'],
  },
  {
    term: 'VWO (Voluntary Welfare Organisation)',
    definition:
      'Non-profit organisations that deliver most of Singapore\'s ILTC services (nursing homes, hospices, day care). Also part of the non-government financing layer alongside NTUC Income/Health, C3A, TOUCH and the People\'s Association.',
    category: 'Health System',
    related: ['ILTC', 'AIC'],
  },
  {
    term: 'SOC (Specialist Outpatient Clinic)',
    definition:
      'Hospital-based clinics where patients see specialists on referral, part of the acute care setting alongside public/private hospitals, A&E and community hospitals.',
    category: 'Health System',
    related: ['A&E', 'Care continuum'],
  },
  {
    term: 'A&E (Accident & Emergency)',
    definition:
      'The emergency department of an acute hospital - the most expensive point of entry into the system. Analytics that predicts and prevents (moving care left) aims to reduce avoidable A&E attendances and admissions.',
    category: 'Health System',
    related: ['SOC', 'Care continuum'],
  },
  {
    term: 'NEHR (National Electronic Health Record)',
    definition:
      'Singapore\'s "One Patient, One Health Record" system, run by Synapxe: a national record that follows the patient across GP, hospital and community hospital. Benefits are care coordination, patient safety and efficiency.',
    category: 'Health System',
    related: ['Synapxe', 'EHR/EMR'],
  },
  {
    term: 'Corporatization',
    definition:
      'The 1985 reform (NUH first) converting government-run hospitals into government-owned corporate entities, each with its own Board, gaining management autonomy and flexibility while remaining publicly owned. Stage 2 of the four-stage evolution of Singapore\'s public system.',
    category: 'Health System',
    related: ['Regional Health System'],
  },
  {
    term: 'Regional Health System',
    definition:
      'The cluster model that organises hospitals, polyclinics and specialist centres around a geographic population rather than as standalone institutions. Clusters began in 2001 with 2, expanded to 6, and were reorganised in 2017 into today\'s 3: SingHealth (east), NHG (central) and NUHS (west).',
    category: 'Health System',
    related: ['SingHealth', 'NHG', 'NUHS', 'Corporatization'],
  },
  {
    term: 'Care continuum',
    definition:
      'The five care settings: preventive (school, community, workplace, home), primary (polyclinics, GPs), acute (hospitals, A&E, SOCs), ILTC (nursing homes, hospices, home care) and social & community (senior activity centres, FSCs/SSOs). Moving care "left" toward prevention and home yields better outcomes at lower cost - acute care is the costliest setting.',
    category: 'Health System',
    related: ['Polyclinic', 'ILTC', 'A&E'],
  },

  // ── Financing ─────────────────────────────────────────────────────
  {
    term: 'MediSave',
    definition:
      'Compulsory individual medical savings: 6–8% of income goes into a personal account used for smaller hospital bills, approved outpatient treatments and MediShield Life premiums. It embodies the personal-responsibility layer of the S+3M financing stack.',
    category: 'Financing',
    related: ['MediShield Life', 'Medifund', '1993 White Paper'],
  },
  {
    term: 'MediShield Life',
    definition:
      'The universal national health insurance scheme providing risk pooling for large hospital bills - the catastrophic-insurance layer of the S+3M stack. Complemented by Integrated Shield Plans and, for long-term care, ElderShield/CareShield.',
    category: 'Financing',
    related: ['Integrated Shield Plan', 'CareShield', 'MediSave'],
  },
  {
    term: 'Medifund',
    definition:
      'A government endowment fund acting as the last-resort safety net, paying the bills of indigent patients who cannot afford care even after subsidies, MediSave and MediShield Life.',
    category: 'Financing',
    related: ['MediSave', 'MediShield Life', 'Subvention'],
  },
  {
    term: 'CareShield (Life)',
    definition:
      'National long-term care insurance (successor to ElderShield) that pays out monthly cash benefits when a person becomes severely disabled and unable to perform activities of daily living - pooling the financial risk of long-term care.',
    category: 'Financing',
    related: ['MediShield Life', 'ILTC (Intermediate & Long-Term Care)'],
  },
  {
    term: 'Integrated Shield Plan',
    definition:
      'Private insurance that rides on top of MediShield Life, adding coverage for higher ward classes and private hospitals. Part of the non-government financing layer alongside private insurers.',
    category: 'Financing',
    related: ['MediShield Life', 'Co-payment'],
  },
  {
    term: 'Subvention',
    definition:
      'Direct government subsidy of care - up to 80% of costs in lower ward classes (B2/C) - ensuring universal access while retaining co-payment. The "S" in the S+3M financing framework.',
    category: 'Financing',
    related: ['Co-payment', 'Medifund'],
  },
  {
    term: 'Capitation',
    definition:
      'A payment model in which providers receive a fixed sum per enrolled person per period regardless of services used, rewarding prevention over volume. Introduced as funding for public healthcare institutions around 2023/24 alongside Healthier SG.',
    category: 'Financing',
    related: ['Healthier SG', 'Bundled payment'],
  },
  {
    term: 'Bundled payment',
    definition:
      'A single payment covering the full cycle of care for a condition (e.g. total knee replacement) rather than fee-for-service per item. Value Driven Care\'s total cost benchmarking across institutions is what enables bundled payments in Singapore.',
    category: 'Financing',
    related: ['VDC (Value Driven Care)', 'Capitation', 'Value in health'],
  },
  {
    term: 'Co-payment',
    definition:
      'The requirement that patients pay a share of every bill, even in the most subsidised ward classes, to deter over-consumption of care. It operationalises the 1993 White Paper principle of personal responsibility and avoiding over-reliance on welfare or insurance.',
    category: 'Financing',
    related: ['Subvention', '1993 White Paper'],
  },

  // ── Value & Policy ────────────────────────────────────────────────
  {
    term: '3 Beyonds',
    definition:
      'MOH\'s strategy shift (~2016, "Beyond Healthcare 2020"): (1) beyond healthcare to health (prevention, Healthier SG), (2) beyond hospital to community (care near home, telemonitoring), (3) beyond quality to value (best value, sustainable - VDC). Each maps to an analytics use case: risk stratification, demand forecasting for community care, and outcome/cost benchmarking respectively.',
    category: 'Value & Policy',
    related: ['Healthier SG', 'VDC (Value Driven Care)', 'Healthcare 2020'],
  },
  {
    term: 'Healthier SG',
    definition:
      'Singapore\'s national preventive-care strategy (launched 2023) enrolling residents with a regular family doctor and personalised health plans, funded via capitation. The flagship of "beyond healthcare to health".',
    category: 'Value & Policy',
    related: ['3 Beyonds', 'Capitation', 'HPB (Health Promotion Board)'],
  },
  {
    term: 'Healthcare 2020',
    definition:
      'MOH\'s masterplan from around 2012 built on three pillars: Accessibility, Quality and Affordability. Superseded conceptually by Beyond Healthcare 2020 (the 3 Beyonds) from about 2016.',
    category: 'Value & Policy',
    related: ['3 Beyonds'],
  },
  {
    term: 'Value in health',
    definition:
      'Porter\'s definition: health outcomes that matter to patients divided by the total cost of achieving them across the full cycle of care. Cost-cutting without regard to outcomes can be harmful; outcomes are condition-specific and multidimensional. Requires three shifts: supply-driven to patient-centred, volume to outcomes, fragmented to integrated care.',
    category: 'Value & Policy',
    related: ['VDC (Value Driven Care)', 'PROM', 'PREM'],
  },
  {
    term: 'PROM',
    definition:
      'Patient-Reported Outcome Measure: the patient\'s own report of health status and outcomes (e.g. pain, function after knee replacement), used to shift measurement from volume and profitability to outcomes achieved.',
    category: 'Value & Policy',
    related: ['PREM', 'Value in health'],
  },
  {
    term: 'PREM',
    definition:
      'Patient-Reported Experience Measure: the patient\'s report of the experience of receiving care (communication, waiting, dignity), complementing PROMs in outcome measurement for value-based care.',
    category: 'Value & Policy',
    related: ['PROM', 'Value in health'],
  },
  {
    term: 'VDC (Value Driven Care)',
    definition:
      'MOH programme launched 2017 as part of the 3 Beyonds: 17 high-impact conditions (e.g. cataract, total knee replacement, stroke, pneumonia, CHF) with standardised clinical outcome indicators for like-for-like benchmarking across public institutions, plus total cost benchmarking that enables bundled payments.',
    category: 'Value & Policy',
    related: ['Clinical Quality Index', 'Bundled payment', '3 Beyonds'],
  },
  {
    term: 'AVBC (Appropriate and Value-Based Care)',
    definition:
      'The value-based care agenda summarised by the FOCUS pillars: Financing models, Outcome measurement, Cost-effective interventions, Unwarranted variation & waste reduction, and Skills/culture.',
    category: 'Value & Policy',
    related: ['VDC (Value Driven Care)', 'Value in health'],
  },
  {
    term: 'Clinical Quality Index',
    definition:
      'VDC\'s all-or-none composite quality measure: the percentage of cases in which ALL clinical outcome indicators for a condition were met. Stricter than averaging individual indicators.',
    category: 'Value & Policy',
    related: ['VDC (Value Driven Care)'],
  },
  {
    term: '1993 White Paper ("Affordable Healthcare")',
    definition:
      'The founding statement of Singapore\'s healthcare philosophy, with 5 principles: (1) nurture a healthy nation by promoting good health, (2) personal responsibility, avoiding over-reliance on welfare or insurance, (3) good and affordable basic care for all, (4) rely on competition and market forces for efficiency, (5) government intervenes directly when the market fails to keep costs down.',
    category: 'Value & Policy',
    related: ['Co-payment', 'MediSave', 'Subvention'],
  },

  // ── Data Ecosystem ────────────────────────────────────────────────
  {
    term: 'DIKW pyramid',
    definition:
      'Data → Information → Knowledge → Wisdom: raw values gain meaning, then context, then drive action. Lecture example: motion sensor readings {14:00, 255}, {14:10, 0} (data) → "no motion since 14:10" (information) → "senior motionless, may have fainted" (knowledge) → "activate caregiver" (wisdom/action).',
    category: 'Data Ecosystem',
    related: ['Learning Health System'],
  },
  {
    term: 'Learning Health System (LHS)',
    definition:
      'IOM 2008: a system in which "science, informatics, incentives, and culture are aligned for continuous improvement and innovation", best practices are "seamlessly embedded" in delivery, and new knowledge is captured as an "integral by-product" of care. Operates as a loop: pick a high-priority process → evidence-based guideline → embed in workflow with a tracking data system → lean learning loop → repeat.',
    category: 'Data Ecosystem',
    related: ['Quadruple Aim', 'Research IT vs Operational IT', 'RE-AIM'],
  },
  {
    term: 'Quadruple Aim',
    definition:
      'Four goals for health system improvement: (1) enhance patient experience, (2) improve population health, (3) reduce cost, (4) improve provider work-life. The fourth aim was added to the original Triple Aim because of clinician burnout - a common quiz nuance.',
    category: 'Data Ecosystem',
    related: ['Learning Health System (LHS)'],
  },
  {
    term: 'EHR/EMR',
    definition:
      'Electronic Health/Medical Record: the digital record of patient-provider interactions - demographic, clinical (vitals, medications, diagnostics) and administrative data. Singapore examples include NEHR, Epic and eHintS; EHRs feed electronic data warehouses and are the primary data source for operational IT.',
    category: 'Data Ecosystem',
    related: ['NEHR (National Electronic Health Record)', 'Disease registry', 'Claims data'],
  },
  {
    term: 'Disease registry',
    definition:
      'A curated database tracking all patients with a condition or event to support surveillance and research. Singapore examples: National Diabetes Registry, National Death Registry, PAROS (resuscitation) and SingCLOUD (cardiac).',
    category: 'Data Ecosystem',
    related: ['EHR/EMR'],
  },
  {
    term: 'OMOP',
    definition:
      'A common data model that standardises EHR data into a shared structure and vocabulary so analyses and models are portable across institutions. In the Liu et al. LHS pipeline, EHR snapshots flow through a data lake and ETL into OMOP or i2b2 before becoming research datasets.',
    category: 'Data Ecosystem',
    related: ['i2b2', 'Learning Health System (LHS)'],
  },
  {
    term: 'i2b2',
    definition:
      'Informatics for Integrating Biology and the Bedside: an open-source research data warehouse framework and common data model for querying de-identified clinical data - the other common data model (with OMOP) named in the LHS learning phase.',
    category: 'Data Ecosystem',
    related: ['OMOP', 'Learning Health System (LHS)'],
  },
  {
    term: 'RE-AIM',
    definition:
      'An implementation-evaluation framework (Reach, Effectiveness, Adoption, Implementation, Maintenance) used in the assessment phase of a learning health system to judge whether a deployed model or intervention actually works in practice.',
    category: 'Data Ecosystem',
    related: ['Learning Health System (LHS)'],
  },
  {
    term: 'Research IT vs Operational IT',
    definition:
      'The contrast at the heart of Liu et al. 2025: research IT is grant-funded, PI-owned, flexible, tolerant of downtime and measured by publications; operational IT serves clinical care and billing, is institution-owned, stable, mission-critical 24/7 and measured by patient outcomes and uptime. A rapid, continuous LHS requires socio-technical harmonisation of these two worlds across Learning, Implementation and Assessment phases.',
    category: 'Data Ecosystem',
    related: ['Learning Health System (LHS)', 'OMOP', 'RE-AIM'],
  },
  {
    term: 'PhysioNet',
    definition:
      'A free repository of curated physiological and clinical research datasets (home of MIMIC critical-care data) - an example of open curated data, contrasted with paid sources (Flatiron, Thomson Reuters) and non-curated scraping.',
    category: 'Data Ecosystem',
    related: ['data.gov.sg'],
  },
  {
    term: 'data.gov.sg',
    definition:
      'Singapore\'s open data portal aggregating datasets from more than 70 agencies, including over 100 health datasets - the local open-data source named in the lecture alongside NIH and PhysioNet.',
    category: 'Data Ecosystem',
    related: ['PhysioNet'],
  },
  {
    term: 'Claims data',
    definition:
      'Administrative records of billing and reimbursement generated by patient-provider interactions. A major secondary data source for analytics - cheap and comprehensive but capturing what was billed rather than full clinical detail.',
    category: 'Data Ecosystem',
    related: ['EHR/EMR'],
  },

  // ── Analytics & AI ────────────────────────────────────────────────
  {
    term: 'Analytics value chain (descriptive → cognitive)',
    definition:
      'Gartner\'s maturity ladder: descriptive ("what happened?" - EDA, dashboards, reports), diagnostic ("why did it happen?" - drill-down, association, causality), predictive ("what will happen?" - risk scores, forecasting, anomaly detection), prescriptive ("how can we make it happen?" - simulation, optimisation, reinforcement learning) and cognitive (adaptive/continual learning, LLMs/GenAI). Value and difficulty increase from hindsight to insight to foresight; ISSS623 focuses on the first three stages.',
    category: 'Analytics & AI',
    related: ['AI (Artificial Intelligence)', 'Machine Learning (ML)', 'LLM (Large Language Model)'],
  },
  {
    term: 'AI (Artificial Intelligence)',
    definition:
      'The broadest field, encompassing machine learning plus planning, expert systems, robotics and computer vision. Nesting to memorise: AI ⊃ ML ⊃ Deep Learning - "AI in healthcare goes beyond deep learning."',
    category: 'Analytics & AI',
    related: ['Machine Learning (ML)', 'Deep learning'],
  },
  {
    term: 'Machine Learning (ML)',
    definition:
      'The subset of AI in which algorithms learn patterns from data rather than being explicitly programmed. Three paradigms: supervised, unsupervised and reinforcement learning.',
    category: 'Analytics & AI',
    related: ['AI (Artificial Intelligence)', 'Deep learning', 'Supervised vs unsupervised learning'],
  },
  {
    term: 'Deep learning',
    definition:
      'The subset of ML using multilayer neural networks, powering pathology and radiology image analysis, clinical-note processing, NLP and LLMs. It is nested inside ML, which is nested inside AI.',
    category: 'Analytics & AI',
    related: ['Machine Learning (ML)', 'NLP (Natural Language Processing)', 'LLM (Large Language Model)'],
  },
  {
    term: 'Supervised vs unsupervised learning',
    definition:
      'Supervised learning trains on labelled data to predict a known outcome (e.g. logistic regression predicting poor/fair health); unsupervised learning finds structure in unlabelled data (e.g. clustering patients into risk groups). Reinforcement learning, the third paradigm, learns by trial-and-error reward.',
    category: 'Analytics & AI',
    related: ['Machine Learning (ML)', 'Logistic regression'],
  },
  {
    term: 'NLP (Natural Language Processing)',
    definition:
      'Techniques for extracting meaning from unstructured text such as clinical notes and discharge summaries - a key deep-learning application area in healthcare and the foundation of LLMs.',
    category: 'Analytics & AI',
    related: ['Deep learning', 'LLM (Large Language Model)'],
  },
  {
    term: 'LLM (Large Language Model)',
    definition:
      'Very large deep-learning models trained on text that can generate and reason over language (e.g. the Gemini assistant built into Google Colab, demoed in Session 1). LLMs/GenAI sit at the cognitive-analytics end of the value chain and can act as a Python tutor when used with verification discipline.',
    category: 'Analytics & AI',
    related: ['NLP (Natural Language Processing)', 'Google Colab', 'Analytics value chain (descriptive → cognitive)'],
  },
  {
    term: 'Clinical-grade model',
    definition:
      'An AI/ML model developed under the Aliferis & Simon lifecycle: establish performance and safety requirements → data design & collection → first-pass analysis & modelling → optimisation & validation → production delivery → model monitoring & safeguards, with regulatory, ethical, legal and societal considerations running in parallel. What separates it from an ordinary ML project is rigorous clinical validation, safety requirements and post-deployment surveillance.',
    category: 'Analytics & AI',
    related: ['Model monitoring', 'Learning Health System (LHS)'],
  },
  {
    term: 'Model monitoring',
    definition:
      'The final, continuous stage of the clinical-grade AI lifecycle: watching a deployed model for performance drift and degradation, with safeguards, version control and audit trails so it can be retrained or withdrawn - because clinical data and populations change after deployment.',
    category: 'Analytics & AI',
    related: ['Clinical-grade model'],
  },

  // ── Ageing & Debate ───────────────────────────────────────────────
  {
    term: 'Super-aged society',
    definition:
      'UN/WHO convention: a society where 21% or more of the population is aged 65+ ("aged" = 14%). Singapore crosses the 21% threshold around 2026, with 20.7% in 2025 rising to a projected 23.9% by 2030 - roughly 1 in 4 residents.',
    category: 'Ageing & Debate',
    related: ['Old-age support ratio', 'Silver tsunami'],
  },
  {
    term: 'Old-age support ratio',
    definition:
      'The number of residents aged 20–64 per resident aged 65+. In Singapore it falls from 5.7 (2015) to a projected 2.7 (2030) - the headline statistic of the challenge framing in the ageing debate.',
    category: 'Ageing & Debate',
    related: ['Old-age dependency ratio', 'Super-aged society'],
  },
  {
    term: 'Old-age dependency ratio',
    definition:
      'The inverse of the support ratio: persons 65+ per working-age person. The word "dependency" itself embeds deficit framing - it assumes everyone over 65 is a dependent, a point the opposition side exploits since most 65–74-year-olds are healthy, active and independent.',
    category: 'Ageing & Debate',
    related: ['Old-age support ratio', 'Deficit-based framing'],
  },
  {
    term: 'Silver tsunami',
    definition:
      'An alarmist metaphor for the ageing wave. It is analytically wrong - a tsunami is sudden and unpredictable, whereas ageing is gradual, decades-predictable and the product of development success - and socially corrosive, homogenising 65–100-year-olds and breeding intergenerational resentment.',
    category: 'Ageing & Debate',
    related: ['Deficit-based framing', 'Super-aged society'],
  },
  {
    term: 'Compression of morbidity',
    definition:
      'Pushing illness into a shorter window at the very end of life, closing the gap between lifespan and healthspan. In Singapore, life expectancy is 83.9 years (2025) but healthy life expectancy is about 74 - roughly 10 years lived in poor health that prevention (e.g. Healthier SG) aims to compress.',
    category: 'Ageing & Debate',
    related: ['Healthy life expectancy', 'Healthier SG'],
  },
  {
    term: 'Healthy life expectancy',
    definition:
      'The average number of years lived in good health - about 74 in Singapore versus a total life expectancy of 83.9 years (2025). Reporting it alongside the support ratio is the asset-framing move: measure what you want to grow.',
    category: 'Ageing & Debate',
    related: ['Compression of morbidity', 'Deficit-based framing'],
  },
  {
    term: 'Longevity economy',
    definition:
      'The economic value created by and for older adults - as consumers, workers and entrepreneurs - sometimes called the longevity dividend. With re-employment to 70 and healthspan gains, businesses serving older adults (health tech, tourism, learning) become a growth sector exportable to every ageing Asian economy.',
    category: 'Ageing & Debate',
    related: ['Intergenerational capital', 'Deficit-based framing'],
  },
  {
    term: 'Intergenerational capital',
    definition:
      'The knowledge, care and wealth that flow from older to younger generations - grandparent childcare that keeps dual-income parents in the workforce, mentoring and skills transfer, and family wealth that funds housing and education. The dependency ledger counts none of it.',
    category: 'Ageing & Debate',
    related: ['Longevity economy', 'Old-age dependency ratio'],
  },
  {
    term: 'Deficit-based framing',
    definition:
      'Framing seniors primarily as consumers of resources (costs, beds, dependents), versus asset-based framing of seniors as contributors. Framing has measurable health effects: Becca Levy\'s Yale research found older adults with positive perceptions of ageing lived about 7.5 years longer - negative national framing acts as a population-level nocebo. Framing also determines which data get collected and which analytics get built.',
    category: 'Ageing & Debate',
    related: ['Silver tsunami', 'Intergenerational capital', 'Healthy life expectancy'],
  },

  // ── Project & Tools ───────────────────────────────────────────────
  {
    term: 'BRFSS',
    definition:
      'The CDC Behavioral Risk Factor Surveillance System: the annual US state-based telephone survey of health behaviours, chronic conditions and preventive service use. The ISSS623 group project uses 2024 BRFSS data only, with one primary outcome, a maximum of 20 predictors, one baseline regression and at least two ML models.',
    category: 'Project & Tools',
    related: ['Codebook', 'Survey weights', 'Missing/refused codes (7/77, 9/99)'],
  },
  {
    term: 'Codebook',
    definition:
      'The BRFSS 2024 documentation of every variable\'s name, value labels and skip logic (e.g. GENHLTH for general health, MENTHLTH for mentally unhealthy days, CHECKUP1 for routine checkups). Demonstrating codebook awareness in the variable list is part of the proposal\'s biggest rubric item (data feasibility & variables, 3%).',
    category: 'Project & Tools',
    related: ['BRFSS', 'Feature engineering'],
  },
  {
    term: 'Survey weights',
    definition:
      'Weights that adjust survey responses for sampling design and non-response so estimates represent the population. BRFSS provides them, but the project scope explicitly states survey weights are NOT used - results describe the sample, not the weighted US population.',
    category: 'Project & Tools',
    related: ['BRFSS', 'Codebook'],
  },
  {
    term: 'Missing/refused codes (7/77, 9/99)',
    definition:
      'BRFSS coding quirks that must be recoded before analysis: 7 or 77 = "Don\'t know/Not sure", 9 or 99 = "Refused", and BLANK = not asked or missing; optional modules also vary by state. Handling these responsibly is worth about 6% of the project grade.',
    category: 'Project & Tools',
    related: ['BRFSS', 'Codebook', 'Feature engineering'],
  },
  {
    term: 'Google Colab',
    definition:
      'Google\'s free cloud Jupyter-notebook environment used for the course labs: open a notebook directly from GitHub (repo ISSS623-AHA/ISSS623_2024, Lecture 1/Lecture_1.ipynb), connect to a hosted runtime, run cells top-to-bottom, and mount Google Drive for file persistence. It includes the Gemini AI assistant, which the instructor demos for "learning in the era of GenAI".',
    category: 'Project & Tools',
    related: ['GitHub', 'LLM (Large Language Model)'],
  },
  {
    term: 'GitHub',
    definition:
      'The version-control platform hosting the course repository (ISSS623-AHA/ISSS623_2024) and each group\'s project code. The mandated collaboration loop: Pull at the start of every session, Commit then Push at the end - and never delete the hidden .git folder.',
    category: 'Project & Tools',
    related: ['Google Colab'],
  },
  {
    term: 'Logistic regression',
    definition:
      'Regression for binary outcomes that models log-odds as a linear function of predictors, yielding interpretable odds ratios. It is the natural choice for the project\'s required baseline model (one linear/logistic regression before the two or more ML models), e.g. predicting poor/fair self-rated health from GENHLTH.',
    category: 'Project & Tools',
    related: ['Supervised vs unsupervised learning', 'Feature engineering', 'BRFSS'],
  },
  {
    term: 'Feature engineering',
    definition:
      'Transforming raw codebook variables into analysis-ready features: recoding 7/77 and 9/99 to missing, creating binary outcomes (e.g. poor_fair = GENHLTH in {Poor, Fair}), and building age groups with conditional logic. The core project pattern is recode → group → rate, mirroring the Lecture 1 notebook\'s mini end-to-end example.',
    category: 'Project & Tools',
    related: ['Codebook', 'Missing/refused codes (7/77, 9/99)', 'Logistic regression'],
  },
  {
    term: 'SPOT peer evaluation',
    definition:
      'The peer-evaluation framework worth 10% of the final grade (due 21 Aug): Supportive, Proactive, Openness and Thorough at 15% each, plus overall participation, quantity, quality and ideas at 10% each. Practically: be responsive on the group chat and hit internal deadlines.',
    category: 'Project & Tools',
    related: ['BRFSS'],
  },

  // ── Python concept definitions (quiz tests TERMS, not coding) ─────
  {
    term: 'Variable (Python)',
    definition:
      'A named container that stores a value which can be reused and changed. Variables can hold different data types: text (string), numbers (integer, float) and Booleans (True/False) - e.g. patient_id = "P001", blood_pressure = 135, has_diabetes = True.',
    category: 'Project & Tools',
    related: ['List', 'Dictionary'],
  },
  {
    term: 'List',
    definition:
      'An ORDERED and CHANGEABLE (mutable) collection of items, written with square brackets, e.g. ages = [25, 40, 60, 75]. Items are accessed by position (ages[0] is the first, ages[-1] the last) and can be added with append(). The go-to structure when a sequence must grow or change.',
    category: 'Project & Tools',
    related: ['Tuple', 'List comprehension', 'pandas Series'],
  },
  {
    term: 'Tuple',
    definition:
      'An ORDERED but UNCHANGEABLE (immutable) collection, written with parentheses, e.g. patient_record = ("P001", 65, "Male"). Use when data should not be modified after creation - the key contrast with a list, which is mutable.',
    category: 'Project & Tools',
    related: ['List', 'Dictionary'],
  },
  {
    term: 'Dictionary',
    definition:
      'A collection of KEY-VALUE pairs written with curly braces, e.g. patient = {"patient_id": "P001", "age": 65}. Values are accessed by key (patient["age"]), not by position - unlike lists and tuples, which are accessed by index.',
    category: 'Project & Tools',
    related: ['List', 'Tuple', 'DataFrame'],
  },
  {
    term: 'pandas Series',
    definition:
      'A ONE-dimensional labelled array from the pandas library, often one column of a DataFrame, e.g. pd.Series([25, 40, 60, 75]). Supports vectorised statistics like .mean() directly.',
    category: 'Project & Tools',
    related: ['DataFrame', 'List'],
  },
  {
    term: 'DataFrame',
    definition:
      'The pandas TWO-dimensional table of rows and columns - the standard structure for health datasets like the BRFSS topic CSVs. Inspected with head() / info() / describe(); each column is a Series.',
    category: 'Project & Tools',
    related: ['pandas Series', 'groupby', 'CSV'],
  },
  {
    term: 'List comprehension',
    definition:
      'A concise one-line syntax for building a new list from an existing sequence, optionally with a condition, e.g. [age for age in ages if age >= 60]. The conditional form ["Older adult" if a >= 65 else "Adult" for a in ages] classifies every element.',
    category: 'Project & Tools',
    related: ['List', 'Conditional (if/elif/else)'],
  },
  {
    term: 'Conditional (if/elif/else)',
    definition:
      'Control-flow statements that run different code depending on whether conditions are true - e.g. a BMI classifier: if bmi < 18.5 → underweight, elif bmi < 25 → normal, elif bmi < 30 → overweight, else → obese. elif chains are evaluated top-down and stop at the first true branch.',
    category: 'Project & Tools',
    related: ['For loop', 'Function'],
  },
  {
    term: 'For loop',
    definition:
      'Iterates over each item in a sequence (e.g. for age in ages: print(age)), running the indented block once per item. Contrast with the while loop, which repeats as long as a condition remains true and needs an explicit counter/condition update to stop.',
    category: 'Project & Tools',
    related: ['While loop', 'List comprehension'],
  },
  {
    term: 'While loop',
    definition:
      'Repeats a block as long as its condition stays true, e.g. while count <= 5. Requires the loop body to change the condition (count = count + 1) or it runs forever - the classic infinite-loop mistake.',
    category: 'Project & Tools',
    related: ['For loop'],
  },
  {
    term: 'Function (Python)',
    definition:
      'A named, reusable block defined with def that takes inputs (parameters) and usually returns a result - e.g. def calculate_bmi(weight_kg, height_m): return weight_kg / height_m ** 2. Functions let you write logic once and call it many times.',
    category: 'Project & Tools',
    related: ['Conditional (if/elif/else)'],
  },
  {
    term: 'CSV file',
    definition:
      'Comma-Separated Values - a plain-text format storing tabular data one row per line with commas between fields. Read/written in pandas with pd.read_csv() and df.to_csv(index=False). Contrast: text files store unstructured text; Excel (.xlsx) supports multiple sheets and formatting.',
    category: 'Project & Tools',
    related: ['DataFrame', 'Excel file'],
  },
  {
    term: 'Excel file',
    definition:
      'A spreadsheet format (.xlsx) supporting multiple sheets and cell formatting, handled in pandas with pd.read_excel() and df.to_excel(index=False). Heavier than CSV; CSV is preferred for plain data exchange.',
    category: 'Project & Tools',
    related: ['CSV file'],
  },
  {
    term: 'head() function',
    definition:
      'DataFrame inspection function returning the FIRST rows of the table (default 5) - a quick visual peek at the actual data values. First of the three standard inspection calls: head() shows the data, info() shows the structure, describe() shows the statistics.',
    category: 'Project & Tools',
    related: ['info() function', 'describe() function', 'DataFrame'],
  },
  {
    term: 'info() function',
    definition:
      'DataFrame inspection function summarising STRUCTURE: number of rows and columns, each column\'s name, count of non-null (non-missing) values, and data type (dtype), plus memory usage. It answers "what columns do I have, how complete are they, and what types are they?" - it does NOT compute statistics. (Prof flagged this as quiz material.)',
    category: 'Project & Tools',
    related: ['head() function', 'describe() function', 'isna()'],
  },
  {
    term: 'describe() function',
    definition:
      'DataFrame inspection function computing SUMMARY STATISTICS for numeric columns: count, mean, standard deviation, minimum, 25th/50th/75th percentiles (the 50th = median) and maximum. It answers "how are my numeric values distributed?" - structure and dtypes are info()\'s job, not describe()\'s. (Prof flagged this as quiz material.)',
    category: 'Project & Tools',
    related: ['head() function', 'info() function'],
  },
  {
    term: 'isna()',
    definition:
      'Pandas method flagging missing values; chained as df.isna().sum() it counts missing values per column - the essential first check before BRFSS recoding. Contrast: df.count() counts NON-missing values; dropna() removes rows; fillna() replaces missing values (e.g. with the median).',
    category: 'Project & Tools',
    related: ['info() function', 'fillna()'],
  },
  {
    term: 'fillna()',
    definition:
      'Pandas method replacing missing values with a specified value, commonly the column median (robust to outliers) or mean, e.g. df["age"].fillna(df["age"].median()). Part of the standard cleaning toolkit alongside isna(), dropna() and rename().',
    category: 'Project & Tools',
    related: ['isna()'],
  },
  {
    term: 'groupby',
    definition:
      'The pandas split-apply-combine operation: groupby() SPLITS rows into groups by a key, an aggregation function (mean, sum, count via .agg()) SUMMARISES each group, and the results are combined into a table - e.g. df.groupby("gender")["age"].mean(). reset_index() flattens the result back to a normal DataFrame.',
    category: 'Project & Tools',
    related: ['DataFrame', 'pandas Series'],
  },
  {
    term: 'Jupyter/Colab notebook',
    definition:
      'An interactive document mixing runnable code cells, output and formatted text. Google Colab hosts notebooks in the browser on a free cloud runtime; the bracketed number beside a cell (e.g. [3]) shows execution ORDER, and out-of-order execution is a classic source of bugs.',
    category: 'Project & Tools',
    related: ['Google Colab', 'Runtime'],
  },
  {
    term: 'Runtime (Colab)',
    definition:
      'The cloud virtual machine that executes a Colab notebook. It is EPHEMERAL: files in /content/ disappear when the runtime recycles, so outputs must be saved to mounted Google Drive. "Connect to hosted runtime" attaches the notebook to this VM.',
    category: 'Project & Tools',
    related: ['Jupyter/Colab notebook', 'Google Colab'],
  },
  {
    term: 'Mutable vs immutable',
    definition:
      'Mutable objects can be changed in place after creation (lists, dictionaries, DataFrames); immutable objects cannot (tuples, strings, numbers). This is THE distinguishing feature between lists (mutable) and tuples (immutable) - a favourite definition-quiz contrast.',
    category: 'Project & Tools',
    related: ['List', 'Tuple'],
  },
] satisfies readonly Definition[]

export const definitions: readonly Definition[] = [...l1Definitions, ...l2Definitions]
