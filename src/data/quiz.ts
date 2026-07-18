import type { QuizQuestion } from './types'

export const questions: readonly QuizQuestion[] = [
  // ── Healthcare Landscape ──────────────────────────────────────────
  {
    id: 'q1',
    topic: 'Healthcare Landscape',
    prompt:
      'After the 2017 reorganisation, which public healthcare cluster serves the eastern region and includes SGH, KKH, CGH and Sengkang General Hospital?',
    options: ['NHG', 'NUHS', 'SingHealth', 'MOHT'],
    answerIndex: 2,
    explanation:
      'SingHealth covers the east with SGH, KKH, CGH, SKH and the Duke-NUS academic medical centre. NHG is the central cluster (TTSH, KTPH, LKC Medicine) and NUHS the west (NUH, NTFGH, Alexandra, NUS); MOHT is not a cluster at all.',
  },
  {
    id: 'q2',
    topic: 'Healthcare Landscape',
    prompt:
      'Corporatization of Singapore public hospitals - giving each hospital its own Board with autonomy and flexibility - began in 1985 with which hospital?',
    options: ['SGH', 'NUH', 'TTSH', 'KKH'],
    answerIndex: 1,
    explanation:
      'NUH was the first hospital corporatized in 1985, the second stage of the four-stage evolution (government-owned → corporatization → clusters in 2001 → Regional Health Systems). The other hospitals were corporatized later.',
  },
  {
    id: 'q3',
    topic: 'Healthcare Landscape',
    prompt:
      'The 2017 reorganisation consolidated Singapore\'s Regional Health Systems into how many public healthcare clusters?',
    options: ['Two', 'Three', 'Four', 'Six'],
    answerIndex: 1,
    explanation:
      'The 2017 reorganisation created today\'s three clusters: SingHealth, NHG and NUHS. Two was the number of clusters at the 2001 start, and six was the number of Regional Health Systems immediately before 2017.',
  },
  {
    id: 'q4',
    topic: 'Healthcare Landscape',
    prompt:
      'Which agency coordinates the Intermediate and Long-Term Care (ILTC) sector - nursing homes, hospices, and home- and centre-based care?',
    options: ['Synapxe', 'ALPS', 'AIC', 'HPB'],
    answerIndex: 2,
    explanation:
      'AIC (Agency for Integrated Care) coordinates the largely VWO-run ILTC sector. Synapxe is the national health-tech agency, ALPS runs the healthcare supply chain, and HPB does health promotion.',
  },
  {
    id: 'q5',
    topic: 'Healthcare Landscape',
    prompt: 'What is Synapxe\'s role in the Singapore health system?',
    options: [
      'Managing the healthcare supply chain',
      'National health technology (health IT) agency',
      'Regulating health products and medical devices',
      'Running national health promotion campaigns',
    ],
    answerIndex: 1,
    explanation:
      'Synapxe is the national health-tech agency supporting systems such as the NEHR. Supply chain is ALPS, product regulation is HSA, and health promotion is HPB.',
  },
  {
    id: 'q6',
    topic: 'Healthcare Landscape',
    prompt:
      'Polyclinics, GP clinics, family medicine clinics and dental clinics belong to which of the five care settings in the care continuum?',
    options: ['Acute care', 'ILTC', 'Preventive care', 'Primary care'],
    answerIndex: 3,
    explanation:
      'These are primary care providers. Preventive care happens in schools, communities, workplaces and homes; acute care covers hospitals, A&E and specialist outpatient clinics; ILTC covers nursing homes, hospices and home/centre-based care.',
  },
  {
    id: 'q7',
    topic: 'Healthcare Landscape',
    prompt:
      'Why does "moving care left" along the continuum (towards prevention, home care, telemedicine and chronic disease management) matter?',
    options: [
      'It improves health outcomes while lowering cost, because acute care is the most expensive setting',
      'It improves outcomes but always increases total system cost',
      'It transfers most of the cost burden from the state to patients',
      'It only affects the ILTC sector and has no impact on hospitals',
    ],
    answerIndex: 0,
    explanation:
      'The lecture\'s key insight is that shifting care leftward delivers better outcomes AND lower cost, since acute care carries the highest burden of care. This is precisely why analytics that predicts and prevents is valuable.',
  },
  {
    id: 'q8',
    topic: 'Healthcare Landscape',
    prompt:
      'Coordination of care has four layers. Which layer does this course - with integrated records, care pathways, and data analytics & feedback - primarily sit in?',
    options: [
      'Ancillary and support services',
      'Clinical care (care plans, medication reconciliation)',
      'Front-line patient care (appointments, referrals, handovers)',
      'IT and information systems',
    ],
    answerIndex: 3,
    explanation:
      'The IT/information systems layer covers integrated records, care pathways, and data analytics & feedback - the subject of this course. The other three layers are real coordination layers but are not where analytics lives.',
  },
  {
    id: 'q9',
    topic: 'Healthcare Landscape',
    prompt:
      'In the WHO Health System Framework, which of the following is one of the four GOALS rather than one of the six building blocks?',
    options: ['Health workforce', 'Financing', 'Responsiveness', 'Service delivery'],
    answerIndex: 2,
    explanation:
      'Responsiveness is a goal, alongside improved health (level and equity), social & financial risk protection, and improved efficiency. The six building blocks are service delivery, health workforce, information, medical products/vaccines/technologies, financing, and leadership/governance - mediated by access, coverage, quality and safety.',
  },
  {
    id: 'q10',
    topic: 'Healthcare Landscape',
    prompt:
      'When mapping health system stakeholders (Class Exercise 1), which category is most commonly overlooked?',
    options: [
      'Patients currently receiving treatment',
      'Doctors and nurses in public hospitals',
      'MOH as policymaker and regulator',
      'Informal caregivers, IT vendors, and the healthy public (taxpayers, future patients)',
    ],
    answerIndex: 3,
    explanation:
      'Patients, clinicians and MOH are the obvious answers everyone gives. Volunteering a category others miss - informal caregivers, IT vendors like Synapxe or Epic, and healthy citizens as taxpayers and future patients - earns participation marks.',
  },

  // ── Financing & Value ─────────────────────────────────────────────
  {
    id: 'q11',
    topic: 'Financing & Value',
    prompt:
      'In the S+3M financing stack, which layer is a compulsory savings scheme channelling 6–8% of income into a personal account for smaller bills?',
    options: ['Subsidies', 'MediShield Life', 'MediSave', 'Medifund'],
    answerIndex: 2,
    explanation:
      'MediSave is the compulsory individual-savings layer (6–8% of income). Subsidies provide up to 80% subvention in lower ward classes, MediShield Life pools risk for large bills, and Medifund is the last-resort safety net.',
  },
  {
    id: 'q12',
    topic: 'Financing & Value',
    prompt:
      'Which S+3M layer is a government endowment fund acting as the last-resort safety net for the indigent?',
    options: ['Subsidies', 'MediShield Life', 'CareShield Life', 'Medifund'],
    answerIndex: 3,
    explanation:
      'Medifund is the endowment-funded last resort for those who cannot pay even after subsidies, MediSave and insurance. CareShield Life is long-term care insurance, not the safety net of last resort.',
  },
  {
    id: 'q13',
    topic: 'Financing & Value',
    prompt: 'What is the primary purpose of MediShield Life in the financing stack?',
    options: [
      'National risk pooling (catastrophic insurance) for large hospital bills',
      'Personal compulsory savings for smaller, routine bills',
      'Providing up to 80% ward-class subsidies',
      'A last-resort endowment fund for the indigent',
    ],
    answerIndex: 0,
    explanation:
      'MediShield Life (supplemented by Integrated Shield Plans and ElderShield/CareShield) is the national catastrophic insurance layer that pools risk for large bills. The distractors describe MediSave, Subsidies and Medifund respectively.',
  },
  {
    id: 'q14',
    topic: 'Financing & Value',
    prompt:
      'Under the 1993 MOH White Paper "Affordable Healthcare", when does the government intervene directly in the healthcare market?',
    options: [
      'Always - healthcare is fully state-provided and free at point of use',
      'When the market fails to keep costs down',
      'Never - the market alone determines prices',
      'Only during declared public health emergencies',
    ],
    answerIndex: 1,
    explanation:
      'Principle 5 states the government intervenes directly when the market fails to keep costs down. The White Paper otherwise relies on competition and market forces (Principle 4) and personal responsibility (Principle 2), so neither extreme is correct.',
  },
  {
    id: 'q15',
    topic: 'Financing & Value',
    prompt: 'Which of the following is NOT one of the "3 Beyonds" (Beyond Healthcare 2020, ~2016)?',
    options: [
      'Beyond healthcare to health',
      'Beyond hospital to community',
      'Beyond quality to value',
      'Beyond affordability to accessibility',
    ],
    answerIndex: 3,
    explanation:
      'The 3 Beyonds are healthcare→health (prevention, Healthier SG), hospital→community (care near home), and quality→value (sustainable best value). Accessibility, quality and affordability were the pillars of the earlier Healthcare 2020 strategy (~2012), not a "Beyond".',
  },
  {
    id: 'q16',
    topic: 'Financing & Value',
    prompt: 'How does Porter define value in healthcare?',
    options: [
      'Health outcomes that matter to patients divided by total resources/cost across the full cycle of care',
      'Hospital revenue divided by operating cost',
      'Number of procedures performed divided by cost per procedure',
      'Patient satisfaction scores minus total expenditure',
    ],
    answerIndex: 0,
    explanation:
      'Value = outcomes that matter to patients ÷ total cost across the full cycle of care. Cost-cutting without regard to outcomes can be harmful, and outcomes are condition-specific and multidimensional - so revenue- or volume-based definitions miss the point.',
  },
  {
    id: 'q17',
    topic: 'Financing & Value',
    prompt:
      'A patient completes a survey rating how easy it was to get an appointment and how well staff communicated with them. This is an example of what?',
    options: ['A PROM', 'A clinical outcome indicator', 'A PREM', 'A Clinical Quality Index'],
    answerIndex: 2,
    explanation:
      'PREMs (patient-reported experience measures) capture the experience of receiving care. PROMs (patient-reported outcome measures) capture the patient\'s reported health status, e.g. pain or function after surgery. Both belong to the shift from volume to outcomes.',
  },
  {
    id: 'q18',
    topic: 'Financing & Value',
    prompt:
      'Under Value Driven Care (VDC, launched 2017), MOH selected how many high-impact conditions for standardised outcome and cost benchmarking?',
    options: ['5', '10', '17', '30'],
    answerIndex: 2,
    explanation:
      'VDC covers 17 high-impact conditions such as cataract, total knee replacement, stroke, pneumonia and congestive heart failure, with standardised clinical outcome indicators for like-for-like benchmarking across public healthcare institutions.',
  },
  {
    id: 'q19',
    topic: 'Financing & Value',
    prompt: 'How is the Clinical Quality Index (CQI) in VDC computed?',
    options: [
      'The average score across all clinical indicators',
      'The percentage of cases in which ALL clinical indicators are met (all-or-none composite)',
      'A cost-weighted composite of the three most important indicators',
      'Total cost per case relative to the national fee benchmark',
    ],
    answerIndex: 1,
    explanation:
      'The CQI is an all-or-none composite: a case counts only if every indicator is met. This is deliberately stricter than an average, which would let strong performance on easy indicators mask failures on hard ones.',
  },
  {
    id: 'q20',
    topic: 'Financing & Value',
    prompt:
      'In 2023/24, alongside Healthier SG, which funding change was introduced for public healthcare institutions?',
    options: [
      'Higher fee-for-service reimbursement rates',
      'Abolition of bundled payments',
      'Unconditional volume-based block grants',
      'Capitation funding',
    ],
    answerIndex: 3,
    explanation:
      'The VDC timeline runs 2017 (3 Beyonds + VDC) → 2018 (fee benchmarks + ALPS) → 2022 (cancer drug list) → 2023/24 (Healthier SG, capitation funding for PHIs, implant subsidy list). Capitation pays per enrolled resident rather than per service, rewarding prevention over volume.',
  },

  // ── Data Ecosystem ────────────────────────────────────────────────
  {
    id: 'q21',
    topic: 'Data Ecosystem',
    prompt:
      'A home motion sensor logs {14:00, 255} and {14:10, 0}. The statement "No motion has been detected since 14:10" belongs to which DIKW layer?',
    options: ['Data', 'Information', 'Knowledge', 'Wisdom'],
    answerIndex: 1,
    explanation:
      'Information gives raw data meaning (raw → meaning → context → action). The raw sensor readings are Data; "the senior has been motionless for hours and may have fainted" adds context (Knowledge); "activate the caregiver" is action (Wisdom).',
  },
  {
    id: 'q22',
    topic: 'Data Ecosystem',
    prompt:
      'In the same motion-sensor example, the decision "activate the caregiver" sits at which DIKW layer?',
    options: ['Data', 'Information', 'Knowledge', 'Wisdom'],
    answerIndex: 3,
    explanation:
      'Wisdom is the action layer - applying knowledge to decide and act. Knowledge was the contextual inference that the senior may have fainted; the alert itself is the actionable wisdom step.',
  },
  {
    id: 'q23',
    topic: 'Data Ecosystem',
    prompt:
      'The IOM 2008 definition of a Learning Health System says which four elements must be aligned for continuous improvement and innovation?',
    options: [
      'Science, informatics, incentives, and culture',
      'Data, technology, talent, and governance',
      'People, process, technology, and policy',
      'Structure, process, outcome, and feedback',
    ],
    answerIndex: 0,
    explanation:
      'The IOM 2008 wording is "science, informatics, incentives, and culture" aligned for continuous improvement, with best practices seamlessly embedded and new knowledge captured as an integral by-product of delivery. Option B lists LHS enablers, not the IOM definition.',
  },
  {
    id: 'q24',
    topic: 'Data Ecosystem',
    prompt:
      'Which aim was added to the Triple Aim to create the Quadruple Aims, and why?',
    options: [
      'Reducing per-capita cost, because of budget pressures',
      'Improving population health, because of pandemics',
      'Improving provider work-life, because of clinician burnout',
      'Enhancing patient experience, because of consumerism',
    ],
    answerIndex: 2,
    explanation:
      'The fourth aim - improving the work-life of healthcare providers - was added because of clinician burnout. Patient experience, population health and cost reduction were already the original Triple Aim.',
  },
  {
    id: 'q25',
    topic: 'Data Ecosystem',
    prompt: 'Which combination of characteristics describes RESEARCH IT rather than operational IT?',
    options: [
      'Funded from operational budgets, with rigorous clinical validation and UAT',
      'Grant-funded, governed by IRB/ethics, tolerates downtime, success measured in publications',
      'Mission-critical 24/7 support with large multidisciplinary teams',
      'Stable, reliable design with controlled and infrequent change',
    ],
    answerIndex: 1,
    explanation:
      'Research IT is grant-funded, IRB-governed, PI-owned, flexible/experimental, changes frequently, tolerates downtime, and measures success in publications. Operational IT is the opposite on each dimension: operational budgets, regulatory compliance, institution-owned, mission-critical, success measured in patient outcomes and uptime.',
  },
  {
    id: 'q26',
    topic: 'Data Ecosystem',
    prompt: 'What is the guiding principle of Singapore\'s NEHR?',
    options: [
      '"One Patient, One Health Record" - a national record following the patient across GP, hospital and community care',
      'A de-identified national research data lake open to all universities',
      'A single Epic instance replacing every hospital\'s EMR',
      'A national insurance-claims clearing house',
    ],
    answerIndex: 0,
    explanation:
      'NEHR stands for "One Patient, One Health Record": a national record that follows the patient across care settings, delivering coordination, safety and efficiency benefits. It is a clinical record system, not a research data lake or claims platform.',
  },
  {
    id: 'q27',
    topic: 'Data Ecosystem',
    prompt: 'Which Singapore registry captures resuscitation (out-of-hospital cardiac arrest) outcomes?',
    options: ['SingCLOUD', 'National Death Registry', 'PAROS', 'NEHR'],
    answerIndex: 2,
    explanation:
      'PAROS is the resuscitation outcomes registry. SingCLOUD holds cardiac data, the National Death Registry records deaths, and NEHR is the national health record rather than a disease registry.',
  },
  {
    id: 'q28',
    topic: 'Data Ecosystem',
    prompt:
      'Which of these data sources provides FREE, curated physiological and clinical datasets?',
    options: ['Flatiron', 'PhysioNet', 'Datarage.ai', 'Thomson Reuters'],
    answerIndex: 1,
    explanation:
      'PhysioNet (like NIH resources and data.gov.sg, which spans >70 agencies and >100 health datasets) is free and curated. Datarage.ai, Flatiron and Thomson Reuters are paid sources; web scraping yields non-curated data.',
  },
  {
    id: 'q29',
    topic: 'Data Ecosystem',
    prompt: 'In the Liu et al. (2025) LHS pipeline, OMOP and i2b2 are examples of what?',
    options: [
      'Common data models used to standardise EHR data for research',
      'Assessment frameworks like RE-AIM',
      'Commercial EHR vendors like Epic',
      'Privacy regulations governing data sharing',
    ],
    answerIndex: 0,
    explanation:
      'In the Learning phase (EHR snapshot → data lake → ETL → common data models → research dataset → model development), OMOP and i2b2 are the common data models. RE-AIM belongs to the Assessment phase, and Epic is an EHR product, not a data model.',
  },

  // ── Analytics & AI ────────────────────────────────────────────────
  {
    id: 'q30',
    topic: 'Analytics & AI',
    prompt:
      'A monthly dashboard reporting last month\'s A&E attendances by age band answers "what happened?". Which Gartner analytics stage is this?',
    options: ['Diagnostic', 'Descriptive', 'Predictive', 'Prescriptive'],
    answerIndex: 1,
    explanation:
      'Descriptive analytics (EDA, dashboards, reports) answers "what happened?" - hindsight. Diagnostic asks why, predictive asks what will happen, and prescriptive asks how to make it happen.',
  },
  {
    id: 'q31',
    topic: 'Analytics & AI',
    prompt:
      'An analyst drills down into ward, diagnosis and discharge data to find WHY 30-day readmissions spiked last quarter. Which Gartner stage is this?',
    options: ['Descriptive', 'Predictive', 'Diagnostic', 'Prescriptive'],
    answerIndex: 2,
    explanation:
      'Diagnostic analytics answers "why did it happen?" using drill-down, association and causal analysis. Describing the spike would be descriptive; forecasting future spikes would be predictive.',
  },
  {
    id: 'q32',
    topic: 'Analytics & AI',
    prompt:
      'A model produces a risk score forecasting which patients are likely to be readmitted within 30 days. Which Gartner stage is this?',
    options: ['Predictive', 'Prescriptive', 'Diagnostic', 'Cognitive'],
    answerIndex: 0,
    explanation:
      'Risk scores, forecasting and anomaly detection answer "what will happen?" - predictive analytics (foresight). Prescriptive would recommend or optimise an intervention; cognitive is the adaptive/continual-learning extension including LLMs and GenAI.',
  },
  {
    id: 'q33',
    topic: 'Analytics & AI',
    prompt:
      'A simulation-and-optimisation model recommends the best nurse roster to minimise overtime while meeting demand. Which Gartner stage is this?',
    options: ['Descriptive', 'Diagnostic', 'Predictive', 'Prescriptive'],
    answerIndex: 3,
    explanation:
      'Prescriptive analytics answers "how can we make it happen?" via simulation, optimisation and reinforcement learning. Merely forecasting demand would be predictive; recommending the action makes it prescriptive.',
  },
  {
    id: 'q34',
    topic: 'Analytics & AI',
    prompt: 'Which Gartner analytics stages does ISSS623 focus on?',
    options: [
      'All five stages equally',
      'Descriptive, diagnostic and predictive',
      'Predictive, prescriptive and cognitive',
      'Descriptive only',
    ],
    answerIndex: 1,
    explanation:
      'The course focus is the first three stages: descriptive, diagnostic and predictive. Along the chain (hindsight → insight → foresight), both value and difficulty increase rightward, with prescriptive and cognitive beyond the course scope.',
  },
  {
    id: 'q35',
    topic: 'Analytics & AI',
    prompt: 'Which statement correctly describes the relationship between AI, ML and deep learning?',
    options: [
      'AI is a subset of machine learning',
      'ML and deep learning are separate, non-overlapping fields',
      'All deep learning is machine learning, and all machine learning is AI - but not vice versa',
      'AI and deep learning are exactly the same thing',
    ],
    answerIndex: 2,
    explanation:
      'The nesting is AI ⊃ ML ⊃ DL. AI additionally includes planning, expert systems, robotics and vision; ML spans supervised/unsupervised/reinforcement learning; DL is multilayer neural nets. Hence the slide\'s takeaway: "AI in healthcare goes beyond deep learning."',
  },
  {
    id: 'q36',
    topic: 'Analytics & AI',
    prompt:
      'The Aliferis & Simon lecture slide summarises data science with which formula?',
    options: [
      'Data Assets + Scientific Thinking',
      'Big Data + Fast Compute',
      'Statistics + Programming',
      'Hindsight + Foresight',
    ],
    answerIndex: 0,
    explanation:
      'Data science = Data Assets + Scientific Thinking: the science and technology of (a) data measurement/collection design, (b) representation, management, harmonisation and secure storage/transmission, (c) analysis and interpretation, and (d) deployment of results in applied problem-solving.',
  },
  {
    id: 'q37',
    topic: 'Analytics & AI',
    prompt: 'What is the FIRST stage of the clinical-grade AI/ML lifecycle (Aliferis & Simon ch. 6)?',
    options: [
      'Data design and collection',
      '"First-pass" analysis and modelling',
      'Model optimisation and validation',
      'Establish performance and safety requirements',
    ],
    answerIndex: 3,
    explanation:
      'The lifecycle runs: establish performance & safety requirements → data design & collection → first-pass analysis & modelling → model optimisation & validation → production models & delivery → model monitoring & safeguards, with regulatory/ethical/legal/societal considerations in parallel. Requirements come before any data work.',
  },
  {
    id: 'q38',
    topic: 'Analytics & AI',
    prompt:
      'In the clinical-grade AI/ML lifecycle, what does the framework require AFTER models enter production and delivery?',
    options: [
      'Nothing further, provided validation was rigorous',
      'Ongoing model monitoring and safeguards',
      'Immediate model retirement after 12 months',
      'Handover to the vendor with no in-house oversight',
    ],
    answerIndex: 1,
    explanation:
      'Model monitoring & safeguards is an explicit lifecycle stage - clinical-grade models must be watched for drift and safety after deployment. "Validated once, safe forever" is exactly the misconception the clinical-grade framework rejects.',
  },

  // ── Ageing & Policy ───────────────────────────────────────────────
  {
    id: 'q39',
    topic: 'Ageing & Policy',
    prompt:
      'The old-age support ratio counts residents aged 20–64 per resident aged 65+. Roughly what is Singapore\'s projected ratio in 2030?',
    options: ['5.7', '4.9', '2.7', '1.5'],
    answerIndex: 2,
    explanation:
      'The ratio falls from 5.7 (2015) to 2.7 (2030) - the number of working-age residents per senior roughly halves in 15 years. 5.7 is the 2015 figure, and the other options are invented.',
  },
  {
    id: 'q40',
    topic: 'Ageing & Policy',
    prompt:
      'By UN/WHO convention, a society becomes "super-aged" when what share of the population is 65 or older?',
    options: ['21%', '14%', '23.9%', '7%'],
    answerIndex: 0,
    explanation:
      'Super-aged = 21% aged 65+, a threshold Singapore crosses around 2026. 14% is the "aged society" threshold, 7% is "ageing society", and 23.9% is Singapore\'s projected 65+ share in 2030 - not the threshold.',
  },
  {
    id: 'q41',
    topic: 'Ageing & Policy',
    prompt: 'What share of Singapore residents is projected to be aged 65+ by 2030?',
    options: ['20.7%', '23.9% - roughly 1 in 4', '30%', '16.6%'],
    answerIndex: 1,
    explanation:
      'The projection is 23.9% by 2030 (about one in four residents), up from 20.7% in 2025. Quoting the Singapore-specific number rather than a generality is a debate delivery tactic in itself.',
  },
  {
    id: 'q42',
    topic: 'Ageing & Policy',
    prompt: 'What does "compression of morbidity" mean?',
    options: [
      'Squeezing illness into a shorter window at the end of life, narrowing the gap between lifespan and healthspan',
      'Reducing the number of hospital beds per capita as the population ages',
      'Falling birth rates compressing the base of the population pyramid',
      'Rationing chronic disease care to the oldest patients',
    ],
    answerIndex: 0,
    explanation:
      'Compression of morbidity means pushing illness into a shorter period before death. In Singapore, life expectancy is 83.9 years but healthy life expectancy is about 74 - roughly 10 years in poor health, which prevention aims to compress.',
  },
  {
    id: 'q43',
    topic: 'Ageing & Policy',
    prompt: 'Why is the "silver tsunami" metaphor analytically wrong, according to the opposition critique?',
    options: [
      'Because ageing affects only a tiny minority of the population',
      'Because tsunamis are slow and ageing is sudden',
      'Because population ageing is actually reversing in Singapore',
      'Because ageing is gradual, predictable decades ahead, and the product of development success - the opposite of a sudden disaster',
    ],
    answerIndex: 3,
    explanation:
      'A tsunami is sudden, unpredictable and destructive; ageing is gradual, forecastable (everyone who will be 65 in 2045 is alive today) and the product of success in sanitation, medicine and education. The metaphor also homogenises 65–100 into one frail mass and breeds intergenerational resentment.',
  },
  {
    id: 'q44',
    topic: 'Ageing & Policy',
    prompt:
      'Becca Levy\'s research (Yale) on self-perceptions of ageing found that older adults with POSITIVE perceptions of ageing lived roughly how much longer?',
    options: ['2.5 years', '7.5 years', '12 years', '15 years'],
    answerIndex: 1,
    explanation:
      'Levy found ~7.5 years longer life for those with positive age self-perceptions, plus lower dementia incidence - effects larger than many clinical interventions. This is the opposition\'s strongest evidence that deficit framing is itself a population-level health risk.',
  },
  {
    id: 'q45',
    topic: 'Ageing & Policy',
    prompt:
      'How are the old-age "dependency ratio" and old-age "support ratio" related?',
    options: [
      'They measure entirely different populations',
      'The dependency ratio counts only frail seniors needing care',
      'The support ratio includes children while the dependency ratio does not',
      'They are the same fraction inverted - and "dependency" wording itself embeds a deficit framing',
    ],
    answerIndex: 3,
    explanation:
      'The two ratios are mathematical inverses of the same fraction. Calling it "dependency" builds the deficit framing into the vocabulary - a point Group B exploits, since the ratio assumes everyone 65+ is dependent when most 65–74-year-olds are healthy and independent.',
  },
  {
    id: 'q46',
    topic: 'Ageing & Policy',
    prompt: 'How is Singapore\'s national health expenditure projected to change from 2018 to 2030?',
    options: [
      'From $22 billion to $59 billion',
      'From $10 billion to $25 billion',
      'From $59 billion to $100 billion',
      'From $22 billion to $40 billion',
    ],
    answerIndex: 0,
    explanation:
      'MOH (2021) projects national health expenditure rising from $22B in 2018 to $59B by 2030 - nearly tripling. Alongside it, the healthcare workforce must grow from 129k (2024) to about 156k by 2030 (+20%), against a WHO-projected global shortfall of 18M workers.',
  },

  // ── BRFSS Project ─────────────────────────────────────────────────
  {
    id: 'q47',
    topic: 'BRFSS Project',
    prompt: 'What is the maximum number of predictor variables allowed in the BRFSS group project?',
    options: ['10', '15', '20', '25'],
    answerIndex: 2,
    explanation:
      'The required scope is one primary outcome (plus an optional secondary), a maximum of 20 predictors, one baseline regression and at least two ML models, using 2024 data only without survey weights.',
  },
  {
    id: 'q48',
    topic: 'BRFSS Project',
    prompt: 'What is the minimum modelling requirement for the BRFSS project?',
    options: [
      'One baseline regression (linear or logistic) plus at least two machine-learning models',
      'At least five deep-learning models',
      'Two baseline regressions only, with ML optional',
      'A single ensemble model with cross-validation',
    ],
    answerIndex: 0,
    explanation:
      'The brief mandates one baseline regression (linear/logistic) plus a minimum of two ML models. The baseline gives an interpretable benchmark against which the ML models are compared; deep learning and ensembles are not required.',
  },
  {
    id: 'q49',
    topic: 'BRFSS Project',
    prompt: 'Which statement about the BRFSS project data scope is correct?',
    options: [
      'Pool the 2020–2024 survey waves for a larger sample',
      'Apply the BRFSS complex survey weights to all analyses',
      'A secondary outcome is mandatory',
      'Use 2024 data only, and do NOT apply survey weights',
    ],
    answerIndex: 3,
    explanation:
      'The scope is deliberately narrow: the 2024 BRFSS wave only, with survey weights explicitly NOT used. Pooling waves and weighting are common misconceptions taken from published BRFSS papers, but they are out of scope for this project.',
  },
  {
    id: 'q50',
    topic: 'BRFSS Project',
    prompt: 'In BRFSS coding conventions, what do the values 9 or 99 in a variable typically mean?',
    options: ['Don\'t know / Not sure', 'Refused', 'Not asked (missing)', 'A valid count of 99 days'],
    answerIndex: 1,
    explanation:
      '9/99 means "Refused", while 7/77 means "Don\'t know / Not sure" and BLANK means the question was not asked. Treating these codes as real values would corrupt every analysis - recoding them responsibly is worth 6% of the grade.',
  },
  {
    id: 'q51',
    topic: 'BRFSS Project',
    prompt:
      'Which component of the project PROPOSAL rubric carries the largest weight?',
    options: [
      'Data feasibility and variables (3%)',
      'Project framing (2%)',
      'Literature context (2%)',
      'Team role allocation (1%)',
    ],
    answerIndex: 0,
    explanation:
      'The proposal (due 18 Jul, worth 10% overall, max 2 pages excluding annexes) is graded: framing 2%, data feasibility & variables 3%, literature 2%, analysis plan 2%, roles 1%. Demonstrating codebook awareness in variable selection is therefore the single biggest scoring lever.',
  },
  {
    id: 'q52',
    topic: 'BRFSS Project',
    prompt: 'The peer-evaluation SPOT criteria (worth 10% overall) stand for what?',
    options: [
      'Supportive, Punctual, Organised, Technical',
      'Skilled, Proactive, Open, Timely',
      'Supportive, Proactive, Original, Thorough',
      'Supportive, Proactive, Openness, Thorough',
    ],
    answerIndex: 3,
    explanation:
      'SPOT = Supportive, Proactive, Openness, Thorough - each 15% of the peer score - plus overall participation, quantity, quality and ideas at 10% each. Practically: be responsive on the group chat and hit internal deadlines.',
  },
  {
    id: 'q53',
    topic: 'BRFSS Project',
    prompt:
      'For Topic A (High Health Burden), which BRFSS variable is the natural primary OUTCOME?',
    options: ['CHECKUP1', 'GENHLTH', 'FLUSHOT7', 'MEDCOST1'],
    answerIndex: 1,
    explanation:
      'GENHLTH (self-rated general health), together with PHYSHLTH/MENTHLTH (unhealthy days) and POORHLTH (activity limitation), anchors Topic A. CHECKUP1, MEDCOST1 and FLUSHOT7 are Topic C (Preventive Care Gap) variables.',
  },
  {
    id: 'q54',
    topic: 'BRFSS Project',
    prompt:
      'What is the key caveat about BRFSS optional modules, such as the marijuana-use module relevant to Topic B?',
    options: [
      'They are asked in every state, so no caveat applies',
      'They were permanently withdrawn in 2024',
      'They are state-dependent - only some states administer them, so sample coverage varies',
      'They are only available for US territories, not states',
    ],
    answerIndex: 2,
    explanation:
      'Optional modules vary by state - the project brief explicitly warns about this. A group choosing Topic B must check which states fielded the marijuana module in 2024, or their analytic sample will silently shrink or be biased.',
  },

  // ── Python & Tools ────────────────────────────────────────────────
  {
    id: 'q55',
    topic: 'Python & Tools',
    prompt: 'What does df.groupby("gender")["age"].mean() return?',
    options: [
      'A DataFrame with one row per patient',
      'A pandas Series indexed by gender, containing each group\'s mean age',
      'A single scalar: the overall mean age',
      'Nothing - it modifies df in place by adding a column',
    ],
    answerIndex: 1,
    explanation:
      'Selecting one column after groupby and aggregating returns a Series whose index is the group keys (gender) and whose values are the group means. It never mutates df; call .reset_index() to convert it back into a DataFrame.',
  },
  {
    id: 'q56',
    topic: 'Python & Tools',
    prompt:
      'Why does the course notebook prefer df["age"].fillna(df["age"].median()) over filling with the mean?',
    options: [
      'The median is robust to outliers and skew, so extreme values do not distort the imputed figure',
      'The median is faster to compute than the mean in pandas',
      'fillna only accepts the median, not the mean',
      'The mean cannot be computed when any value is missing',
    ],
    answerIndex: 0,
    explanation:
      'Health variables like age, income or unhealthy days are often skewed with outliers; the mean gets dragged towards them while the median does not. fillna happily accepts any value including the mean, and pandas skips NaN when computing both.',
  },
  {
    id: 'q57',
    topic: 'Python & Tools',
    prompt:
      'What does df["poor_fair"] = df["general_health"].isin(["Poor", "Fair"]).astype(int) produce?',
    options: [
      'A boolean column of True/False values',
      'A string column containing "Poor" or "Fair"',
      'An integer column of 1s (where general_health is Poor or Fair) and 0s otherwise',
      'A TypeError, because isin cannot be chained with astype',
    ],
    answerIndex: 2,
    explanation:
      'isin returns a boolean Series, and .astype(int) converts True/False to 1/0 - the standard recode pattern for creating a binary outcome. Without astype(int) you would indeed get booleans, which is why option A is the tempting near-miss.',
  },
  {
    id: 'q58',
    topic: 'Python & Tools',
    prompt: 'Given ages = [45, 60, 72, 58, 80], what does [a for a in ages if a >= 60] evaluate to?',
    options: ['[72, 80]', '[45, 58]', '[True, False, True, False, True]', '[60, 72, 80]'],
    answerIndex: 3,
    explanation:
      'A filtering list comprehension keeps elements satisfying the condition, and >= includes 60 itself, so the result is [60, 72, 80]. The conditional form ["Older adult" if a >= 65 else "Adult" for a in ages] would instead return a label for every element.',
  },
  {
    id: 'q59',
    topic: 'Python & Tools',
    prompt: 'In Google Colab, what does the number in brackets - e.g. [3] - next to a code cell indicate?',
    options: [
      'The cell contains 3 lines of code',
      'The cell was the third cell executed in this session',
      'The cell took 3 seconds to run',
      'The cell produced 3 separate outputs',
    ],
    answerIndex: 1,
    explanation:
      'The bracketed number shows execution order within the runtime session, which matters because running cells out of order changes program state. Connecting to a hosted runtime (green tick with RAM/Disk bars) is required before any cell can run.',
  },
  {
    id: 'q60',
    topic: 'Python & Tools',
    prompt:
      'According to the course GitHub collaboration loop, what should you do at the START and END of each working session?',
    options: [
      'Start: Pull. End: Commit, then Push',
      'Start: Push. End: Pull',
      'Start: Commit. End: Pull, then Push',
      'Start: Fork the repository. End: delete the .git folder',
    ],
    answerIndex: 0,
    explanation:
      'The mandated loop is Pull at the start of every session (get teammates\' changes) and Commit then Push at the end (share yours). Never delete the hidden .git folder - it contains the entire repository history.',
  },
  {
    id: 'q61',
    topic: 'Python & Tools',
    prompt: 'Which pandas call counts the number of missing values in each column of a DataFrame?',
    options: ['df.describe()', 'df.count()', 'df.isna().sum()', 'df.dropna()'],
    answerIndex: 2,
    explanation:
      'df.isna().sum() returns per-column missing counts - the essential first check before BRFSS recoding. df.count() counts NON-missing values, df.describe() gives summary statistics, and df.dropna() removes rows rather than counting anything.',
  },
  {
    id: 'q62',
    topic: 'BRFSS Project',
    prompt:
      'Per the v3 Project Guidance slide, which file is the official 2024 BRFSS dataset the class should download, and what should you expect after extraction?',
    options: [
      'LLCP2024XPT.zip - extracts to a 50 MB SAS transport file',
      'brfss2024_topic_a.csv - the complete raw survey',
      'LLCP2024ASC.zip (41.5 MB) - extracts to a ~922 MB fixed-width ASCII file',
      'codebook24_llcp-v2-508.zip - extracts to the full dataset in HTML',
    ],
    answerIndex: 2,
    explanation:
      'The Project Guidance slide points to LLCP2024ASC.zip (41.5 MB) and warns it extracts to a 922 MB ASCII file. The codebook zip contains the HTML codebook, not data; the topic CSVs are pre-extracted subsets, not the raw survey.',
  },
  {
    id: 'q63',
    topic: 'BRFSS Project',
    prompt: 'What do the prof-supplied files brfss2024_topic_a/b/c.csv contain?',
    options: [
      'Random 10% samples of respondents for quick prototyping',
      'All 457,670 respondents with a suggested column subset per topic, extracted via BRFSS_Extraction.ipynb',
      'Nationally weighted estimates ready for population-level claims',
      'Only complete cases with no missing, refused or skipped responses',
    ],
    answerIndex: 1,
    explanation:
      'Each topic CSV holds every 2024 respondent (457,670 rows) with the suggested fields for that topic (A: 29, B: 33, C: 37 columns), produced by the extraction notebook. They are unweighted and still contain 7/77, 9/99 and blank codes - your group must still recode and handle missingness, and may extract extra fields.',
  },
  {
    id: 'q64',
    topic: 'Analytics & AI',
    prompt: 'Which statement is one of the three Key Takeaways closing the v3 Session 1 deck?',
    options: [
      'Healthcare data science must start with the dataset, then find a matching problem',
      'Survey weights are essential for all healthcare analytics',
      'Deep learning should be the default first model in healthcare',
      'Healthcare data science must start with the healthcare problem, not the dataset',
    ],
    answerIndex: 3,
    explanation:
      'The three takeaways: start with the healthcare problem (not the dataset); learning health systems use data to continuously improve care; the data science value chain is an end-to-end process. Option A inverts the first takeaway.',
  },
  {
    id: 'q65',
    topic: 'BRFSS Project',
    prompt: 'In the 2024 BRFSS, the health-insurance source variable appearing in the topic C extract is named:',
    options: ['PRIMINS2', 'PRIMINSR', 'HLTHPLN1', 'INSURANCE'],
    answerIndex: 0,
    explanation:
      'Variable names change between BRFSS years: 2024 uses PRIMINS2 (older literature and earlier years say PRIMINSR or HLTHPLN1). The calculated flag _HLTHPL2 also captures having any coverage - always confirm names in the 2024 codebook or variable dictionary.',
  },
]
