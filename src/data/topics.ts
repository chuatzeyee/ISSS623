import type { Session } from './types'

export const sessions: readonly Session[] = [
  {
    id: 1,
    title: 'Segment 1 - Healthcare Landscape',
    subtitle: 'Systems, stakeholders, financing, value',
    topics: [
      {
        title: 'Evolution of the Singapore public healthcare system',
        summary:
          'Singapore public healthcare evolved through four stages: government-owned hospitals under MOH, corporatization, cluster formation, and Regional Health Systems. Since the 2017 reorganisation there are exactly three integrated clusters, each anchored to a medical school.',
        points: [
          'Stage 1: government-owned hospitals directly under MOH.',
          'Stage 2: corporatization - NUH was the first corporatized hospital in 1985; each hospital got its own Board, gaining autonomy and management flexibility.',
          'Stage 3: healthcare clusters formed in 2001, starting with 2 clusters that integrated hospitals, polyclinics and specialist centres around patients.',
          'Stage 4: Regional Health Systems - clusters went 2 → 6 → reorganized in 2017 into today’s 3 clusters.',
          'SingHealth (east): SGH, KKH, CGH, SKH; academic partner Duke-NUS (AMC).',
          'NHG (central): TTSH, KTPH, Yishun Community Hospital; academic partner LKC Medicine.',
          'NUHS (west): NUH, NTFGH, Alexandra Hospital; academic partner NUS.',
          'Supporting agencies: Synapxe (national health-tech), ALPS (healthcare supply chain), HSA (regulator), HPB (health promotion), AIC (Agency for Integrated Care - coordinates ILTC), SCDF (emergency), MOHT.',
        ],
        tip: 'Quiz-friendly pairings: cluster ↔ region ↔ flagship hospital ↔ medical school. E.g. NUHS–west–NUH–NUS; SingHealth–east–SGH–Duke-NUS; NHG–central–TTSH–LKC Medicine.',
        important:
          'Do not say Singapore has 6 clusters - that was the pre-2017 arrangement. Since 2017 there are exactly 3 Regional Health Systems.',
        relatedTerms: ['SingHealth', 'NHG', 'NUHS', 'Corporatization', 'Synapxe', 'AIC'],
      },
      {
        title: 'Care continuum: five settings and coordination of care',
        summary:
          'Care spans five settings from preventive to social/community care. Moving care "left" toward prevention and home yields better outcomes at lower cost, while acute care is the most expensive - this is the economic case for predictive analytics.',
        points: [
          'Setting 1 - Preventive: school, community, workplace, home.',
          'Setting 2 - Primary: polyclinics, GPs, family medicine clinics, dental.',
          'Setting 3 - Acute: public/private hospitals, A&E, specialist outpatient clinics (SOC), community hospitals.',
          'Setting 4 - ILTC (Intermediate & Long-Term Care): nursing homes, hospices, home-based and centre-based care; mostly run by VWOs.',
          'Setting 5 - Social & community: senior activity centres, FSCs/SSOs, corporate social responsibility programmes.',
          'Key insight: shifting care left (prevention, home care, telemedicine, chronic disease management) improves outcomes AND lowers cost; acute care carries the highest cost and burden.',
          'Coordination of care has 4 layers: ancillary/support services; clinical care (care plans, information sharing, medication reconciliation); front-line patient care (appointments, referrals, handovers); and IT/information systems (integrated records, care pathways, data analytics & feedback).',
          'The IT/information-systems layer - integrated records, care pathways, analytics and feedback - is where this course sits.',
        ],
        tip: 'If asked "why does analytics matter to the health system?", answer with the left-shift argument: predicting and preventing keeps patients out of the most expensive (acute) setting.',
        relatedTerms: ['ILTC', 'Care continuum', 'Polyclinic', 'VWO'],
      },
      {
        title: 'The five memorize-cold Singapore statistics',
        summary:
          'Five headline numbers quantify Singapore’s ageing and cost challenge. They anchor the debate on 11 Jul and are likely quiz material - know value, direction and source year.',
        points: [
          'Population aged 65+: 20.7% in 2025, projected 23.9% by 2030 - roughly 1 in 4 residents (population.gov.sg).',
          'Life expectancy at birth: 83.9 years (2025; Straits Times 2026).',
          'National health expenditure: S$22B (2018) projected to reach S$59B by 2030 (MOH 2021).',
          'Old-age support ratio (residents aged 20–64 per person 65+): 5.7 in 2015 falling to 2.7 by 2030 (Population in Brief 2022).',
          'Healthcare workforce: 129k (2024) with ~156k needed by 2030 - about +20% (MOH 2026); WHO projects a global health-worker shortfall of 18M by 2030.',
          'Debate stat card mnemonic: 23.9% · 83.9 yrs · $22B→$59B · 5.7→2.7 · 129k→156k.',
        ],
        tip: 'Pair each stat with an implication: fewer workers per senior (support ratio) → automation/analytics; expenditure near-tripling → value-based care; workforce gap → productivity tools.',
        important:
          'Keep the years straight: 20.7% is the 2025 figure, 23.9% is the 2030 projection. Mixing them up in the debate or quiz undermines credibility.',
        relatedTerms: ['Old-age support ratio', 'Ageing population'],
      },
      {
        title: '1993 White Paper philosophy and S + 3M financing',
        summary:
          'The 1993 MOH White Paper "Affordable Healthcare" sets out five principles balancing personal responsibility against government intervention. Financing is layered as Subsidies plus the 3Ms - MediSave, MediShield Life and Medifund - each targeting a different bill size and risk.',
        points: [
          'Principle 1: nurture a healthy nation by promoting good health.',
          'Principle 2: personal responsibility for one’s health; avoid over-reliance on welfare or medical insurance.',
          'Principle 3: good and affordable basic medical services for all.',
          'Principle 4: rely on competition and market forces to improve efficiency.',
          'Principle 5: government intervenes directly when the market fails to keep costs down.',
          'Subsidies: up to 80% subvention in lower ward classes - universal access with co-payment.',
          'MediSave: compulsory 6–8% of income into a personal account - individual savings for smaller bills. MediShield Life (+ Integrated Shield Plans, ElderShield/CareShield): national catastrophic insurance - risk pooling for large bills. Medifund: government endowment fund - last-resort safety net for the indigent.',
          'Non-government layer: private insurers, NTUC Income/Health, C3A, TOUCH, People’s Association.',
        ],
        tip: 'Exam framing: match each layer to its purpose. Subsidies = access; MediSave = individual savings; MediShield Life = risk pooling; Medifund = safety net. The layers are deliberately sequenced from routine to catastrophic to destitute.',
        important:
          'MediSave is a savings account (your own money), not insurance. MediShield Life is the insurance layer. Confusing the two is the classic mistake.',
        relatedTerms: ['MediSave', 'MediShield Life', 'Medifund', 'Subsidies', '3Ms'],
      },
      {
        title: 'Policy evolution: Healthcare 2020 and the 3 Beyonds',
        summary:
          'Healthcare 2020 (~2012) targeted accessibility, quality and affordability. Beyond Healthcare 2020 (~2016) reframed strategy as the "3 Beyonds", each of which maps directly to an analytics use case.',
        points: [
          'Healthcare 2020 (~2012): Accessibility + Quality + Affordability.',
          'Beyond 1 - beyond healthcare to health: prevention and Healthier SG; analytics example - population risk stratification.',
          'Beyond 2 - beyond hospital to community: care near home; analytics example - telemonitoring analytics and demand forecasting for community care.',
          'Beyond 3 - beyond quality to value: best value, financially sustainable care; analytics example - VDC outcome/cost benchmarking.',
          'Timeline of value reforms: 2017 3 Beyonds + VDC → 2018 fee benchmarks + ALPS → 2022 cancer drug list → 2023/24 Healthier SG, capitation funding for PHIs, implant subsidy list.',
        ],
        tip: 'Be able to give one concrete analytics example per Beyond - Dr Lam links each policy shift to a data use case, and this is a natural participation question.',
        relatedTerms: ['3 Beyonds', 'Healthier SG', 'VDC', 'Capitation'],
      },
      {
        title: 'Value in health: Porter, PROMs/PREMs, AVBC and VDC',
        summary:
          'Porter defines value as health outcomes that matter to patients divided by the total cost across the full cycle of care. Singapore operationalises this via Value Driven Care (2017): 17 high-impact conditions with standardised outcome indicators and a Clinical Quality Index.',
        points: [
          'Value = health outcomes that matter to patients ÷ total resources/cost across the full cycle of care (Porter). Cost-cutting without outcomes can be harmful; outcomes are condition-specific and multidimensional.',
          'Three key shifts: supply-driven → patient-centred; volume & profitability → outcomes achieved; fragmented → integrated care.',
          'PROMs = patient-reported outcome measures; PREMs = patient-reported experience measures - the instruments for the "outcomes achieved" shift.',
          'AVBC (Appropriate and Value-Based Care) FOCUS pillars: Financing models, Outcome measurement, Cost-effective interventions, Unwarranted variation & waste reduction, Skills/culture.',
          'VDC (Value Driven Care, launched 2017 as part of the 3 Beyonds): MOH selected 17 high-impact conditions, e.g. cataract, total knee replacement, stroke, pneumonia, congestive heart failure.',
          'VDC standardises clinical outcome indicators for like-for-like benchmarking across public healthcare institutions; total cost benchmarking enables bundled payments.',
          'Clinical Quality Index = percentage of cases where ALL indicators are met - an all-or-none composite, deliberately stringent.',
        ],
        tip: 'CQI is all-or-none: a case with 9 of 10 indicators met counts as a fail. Expect a quiz item testing exactly this nuance.',
        important:
          'Value is not the same as low cost. The denominator is cost, but the numerator (outcomes that matter to patients) must move - cutting cost while outcomes fall destroys value.',
        relatedTerms: ['Value-based care', 'PROMs', 'PREMs', 'VDC', 'Clinical Quality Index', 'Bundled payment'],
      },
      {
        title: 'WHO Health System Framework and stakeholders',
        summary:
          'The WHO framework lists 6 building blocks that, mediated by access, coverage, quality and safety, produce 4 system goals. It doubles as the answer scaffold for Class Exercise 1 on stakeholders.',
        points: [
          '6 building blocks: 1 Service delivery · 2 Health workforce · 3 Information · 4 Medical products, vaccines & technologies · 5 Financing · 6 Leadership/governance.',
          'Mediators: access, coverage, quality, safety.',
          '4 goals: improved health (both level AND equity) · responsiveness · social & financial risk protection · improved efficiency.',
          'Class Exercise 1 (10 min): "Who are the stakeholders in a health system?" - answer by category, not by listing randomly.',
          'Stakeholder categories: patients & caregivers · providers (doctors, nurses, allied health, hospitals, GPs, VWOs) · payers (government, insurers, employers) · regulators & policy (MOH, HSA) · suppliers (pharma, medtech, IT vendors like Synapxe/Epic) · researchers & academia · community/social services · the healthy public (taxpayers, future patients).',
          'Participation edge: volunteer a category others miss - informal caregivers, IT vendors, or healthy citizens as future patients and taxpayers.',
        ],
        tip: '"Information" is a building block in its own right - a neat hook for arguing that data/analytics is core system infrastructure, not an add-on.',
        important:
          'Note "improved health (level AND equity)" - equity is part of the goal, not a separate goal. Quizzes often test whether you remember both dimensions.',
        relatedTerms: ['WHO building blocks', 'Stakeholders', 'Health equity'],
      },
    ],
  },
  {
    id: 2,
    title: 'Segment 2 - Health Data Ecosystem',
    subtitle: 'DIKW, learning health systems, data sources',
    topics: [
      {
        title: 'Why data: uses of healthcare data',
        summary:
          'Healthcare data serves six core uses spanning discovery, operations and population health, plus broader applications from precision medicine to patient empowerment. Be ready to name 3–4 uses with a concrete example each.',
        points: [
          'Six core uses: disease/biological insights · hospital efficiency · new care tools · patient outcomes/experience · population health · lower cost.',
          'Broader applications: precision medicine, drug development, clinical trials, public health surveillance, quality & safety monitoring, policy-making, predictive analytics, patient empowerment.',
          'Example pairings: population health ↔ Healthier SG risk stratification; hospital efficiency ↔ bed demand forecasting; patient outcomes ↔ PROMs dashboards; lower cost ↔ VDC cost benchmarking.',
          'The uses map onto the care continuum: prediction and prevention shift demand out of the expensive acute setting.',
        ],
        tip: 'In class, pair every named use with a Singapore-specific example - it signals preparation and earns participation credit.',
        relatedTerms: ['Population health', 'Predictive analytics', 'PROMs'],
      },
      {
        title: 'DIKW pyramid with the motion-sensor worked example',
        summary:
          'DIKW orders Data → Information → Knowledge → Wisdom, i.e. raw → meaning → context → action. The lecture’s motion-sensor example is the canonical worked case and quizzes typically ask you to classify a statement into the right layer.',
        points: [
          'Data: raw symbols with no interpretation - motion sensor readings {14:00, 255}, {14:10, 0}.',
          'Information: data given meaning - "no motion detected since 14:10".',
          'Knowledge: information in context - "senior has been motionless for x hours and may have fainted".',
          'Wisdom: knowledge applied as action - "activate the caregiver".',
          'Compact mapping: raw → meaning → context → action.',
          'Alternative healthcare examples: continuous glucose monitoring, hospital early-warning scores, medication adherence tracking.',
        ],
        tip: 'Classification drill: "average HbA1c rose 0.3 points this quarter" = information; "this pattern indicates deteriorating diabetes control in ward 5" = knowledge; "trigger a pharmacist review" = wisdom.',
        important:
          'The information/knowledge boundary is the trap: information describes what the data means; knowledge adds context and implication. If a statement includes interpretation of risk or cause, it has crossed into knowledge.',
        relatedTerms: ['DIKW', 'Data', 'Information', 'Knowledge', 'Wisdom'],
      },
      {
        title: 'Learning Health System: IOM definition, 4-step loop, enablers',
        summary:
          'The IOM (2008) defines a Learning Health System as one where science, informatics, incentives and culture are aligned for continuous improvement, with new knowledge captured as a by-product of care delivery. It runs as a repeating 4-step loop grounded in measured reality.',
        points: [
          'IOM 2008 definition fragments to memorise: "science, informatics, incentives, and culture" aligned for "continuous improvement and innovation"; best practices "seamlessly embedded" in delivery; new knowledge captured as an "integral by-product" of the delivery experience.',
          'Step 1: pick a high-priority clinical process.',
          'Step 2: build an evidence-based best-practice guideline.',
          'Step 3: blend the guideline into clinical workflow WITH a data system tracking it.',
          'Step 4: feed the data into a "lean learning loop" - then repeat.',
          'The loop is grounded in measured reality: data from actual practice, not assumption.',
          'Enablers wheel: Talent (data literacy, citizen data science) · Data (quality, integration, interoperability) · Technology (big data & AI/ML infrastructure) · Governance (privacy, security, AI governance, ethics) · Implementation (implementation science, cost-effectiveness, sustainable scale) · Collaboration (across research, operational and IT domains).',
          'Collaboration is highlighted in red on the slide - the instructor’s explicit emphasis, and the bridge to the Liu et al. harmonization paper.',
        ],
        tip: 'Memorise the four aligned elements as an acronym-ish list: Science, Informatics, Incentives, Culture (SIIC). Quizzes love asking which four things the IOM definition aligns.',
        relatedTerms: ['Learning Health System', 'IOM', 'Interoperability', 'Implementation science'],
      },
      {
        title: 'Quadruple Aims',
        summary:
          'The Quadruple Aims extend the Triple Aim with a fourth goal - provider work-life - added in response to clinician burnout. All four are the yardstick against which health data initiatives are judged.',
        points: [
          'Aim 1: enhance patient experience.',
          'Aim 2: improve population health.',
          'Aim 3: reduce cost.',
          'Aim 4: improve provider work-life - added to the original Triple Aim because of clinician burnout.',
          'The fourth aim is the likely quiz nuance: know that it was the addition, and why (burnout).',
          'Analytics mapping: experience ↔ PREMs; population health ↔ risk stratification; cost ↔ VDC benchmarking; work-life ↔ automation/decision support reducing documentation burden.',
        ],
        important:
          'If a question asks "which aim was added to make the Triple Aim quadruple?", the answer is provider work-life (clinician wellbeing) - not cost and not equity.',
        relatedTerms: ['Quadruple Aim', 'Triple Aim', 'Clinician burnout'],
      },
      {
        title: 'Research IT vs Operational IT, and Liu et al. (2025) harmonization',
        summary:
          'Research IT and operational IT differ on a dozen dimensions from funding to validation, and Liu et al. (2025) argue a rapid, continuous LHS requires socio-technical harmonization of the two worlds through a 3-phase pipeline.',
        points: [
          'Purpose: research/analytics vs clinical care & billing. Funding: grants vs operational budget. Data: multimodal incl. genomic/survey vs primarily EHR.',
          'Governance: IRB/ethics vs regulatory & privacy compliance. Ownership: principal investigator vs institution. Sharing: de-identified sharing encouraged vs restricted.',
          'Teams: small project-based vs large multidisciplinary. Design: flexible/experimental vs stable/reliable. Change: frequent vs controlled.',
          'Support: downtime tolerable vs mission-critical 24/7. Success metric: publications vs patient outcomes/uptime. Validation: methodological/retrospective vs rigorous clinical validation, UAT, security audits.',
          'Liu et al. thesis: harmonizing these two worlds - socio-technical harmonization - is the bottleneck for a rapid and continuous LHS.',
          'Phase 1 Learning: EHR snapshot → data lake → ETL → common data models (OMOP/i2b2) → research dataset → model development.',
          'Phase 2 Implementation: multi-stakeholder collaboration; hosting/execution/integration decisions; clinical workflow integration via alerts, dashboards, EHR notes; monitoring, version control, audit.',
          'Phase 3 Assessment: define outcomes with frontline healthcare workers; frameworks like RE-AIM; extract, analyse, classify as QI or research - plus a continuous cycle to retrain, refine and feed back.',
        ],
        tip: 'The two contrast tables are flagged as high quiz probability. Practise by picking any dimension (e.g. "downtime tolerable") and naming which side it belongs to.',
        important:
          'OMOP and i2b2 are common data models used in the Learning phase to standardise EHR extracts for research - do not confuse them with EHR products like Epic.',
        relatedTerms: ['Research IT', 'Operational IT', 'OMOP', 'i2b2', 'RE-AIM', 'ETL'],
      },
      {
        title: 'Sources of health data: EHR, registries, NEHR, open data',
        summary:
          'Health data arises from patient–provider interactions, external sources and research databases. Singapore’s NEHR embodies "One Patient, One Health Record", and open sources like data.gov.sg and PhysioNet supply free curated datasets.',
        points: [
          'Patient–provider interactions (health system): demographic, clinical (vitals, medications, diagnostics) and administrative (claims, reimbursements) data - captured in EHR/EMR systems (NEHR, Epic, eHintS) and electronic data warehouses.',
          'Disease registries: National Diabetes Registry, National Death Registry, PAROS (Pan-Asian Resuscitation Outcomes Study, resuscitation) and SingCLOUD (cardiac).',
          'External sources: consumer-generated (wearables, smart devices) and environmental (air/water/food quality, transport).',
          'Research databases: genomics, clinical trials, observational studies. Additional categories: IoT/medical devices · claims · health services research (PROMs, surveys) · patient behaviour/sentiment from the social web.',
          'Open data: data.gov.sg (>70 agencies, >100 health datasets), NIH, PhysioNet (free, curated). Paid: Datarage.ai, Flatiron, Thomson Reuters. Scraping yields non-curated data.',
          'NEHR = "One Patient, One Health Record": a national record following the patient across GP → hospital → community hospital; benefits are coordination, safety and efficiency.',
        ],
        tip: 'Registry name-drops score: PAROS for resuscitation outcomes, SingCLOUD for cardiac. Knowing what each registry covers is exactly the kind of detail quizzes reward.',
        relatedTerms: ['NEHR', 'EHR', 'Disease registry', 'PAROS', 'SingCLOUD', 'PhysioNet'],
      },
    ],
  },
  {
    id: 3,
    title: 'Segment 3 - Analytics & AI in Healthcare',
    subtitle: 'Value chain, AI/ML landscape, clinical-grade lifecycle',
    topics: [
      {
        title: 'Gartner analytics value chain: descriptive to cognitive',
        summary:
          'Gartner orders analytics maturity as descriptive → diagnostic → predictive → prescriptive, with cognitive as an extension; value and difficulty both rise rightward. The course focuses on the first three stages.',
        points: [
          'Descriptive - "What happened?": EDA, dashboards, reports.',
          'Diagnostic - "Why did it happen?": drill-down, association, causality.',
          'Predictive - "What will happen?": risk scores, forecasting, anomaly detection, deep learning.',
          'Prescriptive - "How can we make it happen?": simulation, optimisation, reinforcement learning.',
          'Cognitive (extension): adaptive/continual learning, LLMs and GenAI.',
          'Framing: hindsight → insight → foresight; both value and difficulty increase left to right.',
          'Course focus = the first three stages (descriptive, diagnostic, predictive) - which is also the scope of the BRFSS group project.',
        ],
        tip: 'Given a scenario, classify it by its question word: "what happened" = descriptive, "why" = diagnostic, "what will" = predictive, "how can we make it happen" = prescriptive.',
        important:
          'Prescriptive is not just "prediction plus a recommendation" - it involves simulation/optimisation to choose actions. A risk score alone is predictive.',
        relatedTerms: ['Descriptive analytics', 'Diagnostic analytics', 'Predictive analytics', 'Prescriptive analytics', 'Cognitive analytics'],
      },
      {
        title: 'AI ⊃ ML ⊃ Deep Learning: the nesting and what each adds',
        summary:
          'AI is the superset, machine learning a subset, and deep learning a subset of ML. The takeaway line from the lecture: "AI in healthcare goes beyond deep learning."',
        points: [
          'AI beyond ML includes planning, expert systems, robotics and computer vision.',
          'ML branches: supervised, unsupervised and reinforcement learning.',
          'Deep learning = multilayer neural networks - dominant for pathology/radiology images, clinical notes, NLP and LLMs.',
          'Takeaway: "AI in healthcare goes beyond deep learning" - rule-based expert systems and optimisation are also AI.',
          'For the group project you will use classic supervised ML (baseline regression plus at least 2 ML models), not deep learning.',
        ],
        tip: 'Venn-diagram question alert: every DL model is ML and every ML model is AI, but an expert system is AI without being ML.',
        relatedTerms: ['Artificial intelligence', 'Machine learning', 'Deep learning', 'Supervised learning', 'LLM'],
      },
      {
        title: 'Data science defined (Aliferis & Simon)',
        summary:
          'Aliferis & Simon define data science as the science and technology of measurement design, data management, analysis and deployment applied to problem-solving. The slide compresses this to Data Assets + Scientific Thinking.',
        points: [
          'Component (a): design of data measurement and collection.',
          'Component (b): representation, management, harmonization, secure storage and transmission.',
          'Component (c): analysis and interpretation.',
          'Component (d): deployment of results - all in applied problem-solving.',
          'Slide formula: Data Science = Data Assets + Scientific Thinking.',
          'Reading 1 (Aliferis & Simon ch. 1) motivates why healthcare AI needs best practices: sources of failure and mistrust demand rigorous validation.',
        ],
        tip: 'Note that the definition starts before analysis (measurement design) and ends after it (deployment) - data science is end-to-end, not just modelling.',
        relatedTerms: ['Data science', 'Aliferis & Simon', 'Validation'],
      },
      {
        title: 'Clinical-grade AI/ML lifecycle (6 stages)',
        summary:
          'The Aliferis & Simon chapter 6 lifecycle takes a model from requirements through monitored production, with regulatory, ethical, legal and societal considerations running in parallel. "Clinical grade" means engineered to this whole lifecycle, not just good test-set accuracy.',
        points: [
          'Stage 1: establish performance and safety requirements.',
          'Stage 2: data design & collection.',
          'Stage 3: "first-pass" analysis & modeling.',
          'Stage 4: model optimization & validation.',
          'Stage 5: production models & delivery - with health-economic and implementation-science considerations.',
          'Stage 6: model monitoring & safeguards.',
          'Running in parallel across all stages: regulatory/ethical/legal/societal considerations, IP, and ancillary work products.',
          'Course focus box = stages 2–4: data design → first-pass modeling → optimization/validation - exactly the arc of the BRFSS project.',
        ],
        tip: 'Know both endpoints: the lifecycle starts with requirements (not data) and does not end at deployment - monitoring & safeguards is a stage in its own right.',
        important:
          'A model with high AUC on a held-out test set is not automatically "clinical grade" - clinical grade requires the full lifecycle: safety requirements up front, rigorous validation, and monitoring after deployment.',
        relatedTerms: ['Clinical-grade AI', 'Model validation', 'Model monitoring', 'Implementation science'],
      },
      {
        title: 'Trust and best practices in healthcare AI (Reading 1)',
        summary:
          'Aliferis & Simon chapter 1 argues that healthcare AI/ML fails and loses trust for identifiable reasons, and that best practices with rigorous validation are the remedy. This reading and chapter 6 are prime Quiz 1 material (25 Jul).',
        points: [
          'Extract from the reading: definitions of AI, ML and data science; why healthcare AI specifically needs best practices; sources of failure and mistrust; the case for rigorous validation.',
          'Deep-read schedule: skim before Session 1; deep-read before Quiz 1 on 25 Jul, since "relevant sections covered in the lecture notes" define the quiz scope.',
          'Reading method from the prep guide: for each reading write 5 bullet takeaways plus 3 possible quiz questions in your own words.',
          'The other priority readings: ch. 6 (clinical-grade lifecycle) and Liu et al. 2025 (research vs operational IT, 3-phase LHS pipeline, OMOP/i2b2, RE-AIM).',
        ],
        tip: 'Quiz scope is anchored to what appeared in the lecture slides - prioritise reading sections that overlap with Segment 2 and 3 slide content.',
        relatedTerms: ['Aliferis & Simon', 'Validation', 'Learning Health System'],
      },
    ],
  },
  {
    id: 4,
    title: 'Segment 4 - Tools & Workflow',
    subtitle: 'Colab, GitHub, Python for health data',
    topics: [
      {
        title: 'Google Colab workflow',
        summary:
          'Segment 3A of Session 1 walks through opening the course notebook from GitHub in Colab, connecting a runtime, running cells and mounting Google Drive. Fluency here lets you help groupmates, which counts as participation.',
        points: [
          'Open a notebook: colab.research.google.com → File → Open Notebook → GitHub tab → paste repo URL https://github.com/ISSS623-AHA/ISSS623_2024 → open Lecture 1/Lecture_1.ipynb.',
          'Connect → Connect to hosted runtime (top right); a green tick with RAM/Disk bars means connected.',
          'Run cells top-to-bottom with ▶ or Ctrl-Enter; the bracketed number like [3] shows execution order.',
          'Mount Google Drive: Files panel → Mount Drive icon → run the generated cell (from google.colab import drive; drive.mount("/content/drive")) → authorise → confirm drive/MyDrive appears.',
          'Output files written by the notebook land in /content/ (ephemeral unless saved to Drive).',
          'Try the Gemini button (✦ icon) - the instructor explicitly demos "learning in the era of GenAI"; ask it to explain a code block.',
        ],
        tip: 'Run the whole notebook end-to-end the night before class. Stale runtimes and out-of-order execution ([5] before [2]) are the two most common in-class failures.',
        important:
          'The hosted runtime is ephemeral: files in /content/ vanish when the runtime recycles. Save anything you need to Drive or download it.',
        relatedTerms: ['Google Colab', 'Runtime', 'Jupyter notebook'],
      },
      {
        title: 'GitHub and GitHub Desktop: the pull → commit → push loop',
        summary:
          'The course mandates a simple collaboration loop: pull at the start of every session, commit and push at the end. Setup means creating an account, installing GitHub Desktop and cloning the course repo.',
        points: [
          'Create a GitHub account with a professional username (you will share it with your group) and install GitHub Desktop.',
          'Clone: Clone a repository → URL tab → https://github.com/ISSS623-AHA/ISSS623_2024 → choose an EMPTY local folder → Clone.',
          'Verify folders after cloning: Lecture 1–4, Group_Project, plus the hidden .git folder - never delete .git.',
          'The mandated loop: start of session = Pull; end of session = Commit then Push.',
          'Practice once on your OWN test repo (not the course repo): edit README locally → file appears under "Changes" → write a commit message → Commit → Push.',
          'Reference: 5_Github Guide.pdf (25 pages) in the course folder; VS Code is the instructor’s preferred IDE with Git integration built in.',
        ],
        tip: 'The loop order matters and is examinable as workflow knowledge: Pull FIRST (get teammates’ changes), work, then Commit (local snapshot) and Push (share). Committing without pushing shares nothing.',
        important:
          'Deleting the hidden .git folder destroys the repository history and its link to GitHub. Also: clone into an empty folder, or GitHub Desktop will refuse.',
        relatedTerms: ['GitHub', 'Commit', 'Push', 'Pull', 'Clone', 'Repository'],
      },
      {
        title: 'Python for health data: the 12 notebook topics',
        summary:
          'Lecture_1.ipynb covers 12 topics from variables to groupby aggregation. The self-check standard: can you write each pattern without looking it up.',
        points: [
          'Basics (topics 1–2): variables and printing - store patient_id, blood_pressure, has_diabetes and print labelled output.',
          'Collections (topic 3): lists, tuples, dicts, pd.Series - ages[-1], ages.append(), patient["age"], pd.Series(ages).mean().',
          'List comprehension (topic 4): [age for age in ages if age >= 60]; conditional form ["Older adult" if a >= 65 else "Adult" for a in ages].',
          'Control flow & functions (topics 5–6): BMI classifier with if/elif/else; def calculate_bmi(weight_kg, height_m): return weight_kg / height_m ** 2.',
          'File I/O (topics 7–9): with open(..., "w"); pd.read_csv / to_csv; pd.read_excel / to_excel(index=False).',
          'Wrangling (topic 10): df.head() / .info() / .describe(); df.rename(columns={...}); df.isna().sum(); df["age"].fillna(df["age"].median()); boolean filter df[df["age"] >= 65]; column select df[["a", "b"]].',
          'Groupby (topics 11–12): df.groupby("gender")["age"].mean(); multi-agg df.groupby("g").agg(n=("id", "count"), mean_bp=("bp", "mean")); then .reset_index().',
        ],
        tip: 'The missing-data pair to drill: .isna().sum() to COUNT missingness, .fillna(median) to IMPUTE it. The BRFSS project grades responsible missing-data handling.',
        relatedTerms: ['pandas', 'DataFrame', 'groupby', 'fillna', 'List comprehension'],
      },
      {
        title: 'The mini end-to-end drill: recode → group → rate',
        summary:
          'The notebook’s "Mini End-to-End Example" - build a small DataFrame, recode a binary outcome, bin ages, then groupby-aggregate into a rate - is precisely the analytic core of the BRFSS group project.',
        points: [
          'Step 1: build a 5-row DataFrame with age, sex, exercise, general_health.',
          'Step 2: create a binary outcome - df["poor_fair"] = df["general_health"].isin(["Poor", "Fair"]).astype(int).',
          'Step 3: create age groups with a conditional list comprehension.',
          'Step 4: groupby("age_group").agg(...) and compute a rate column.',
          'The pattern recode → group → rate is exactly what the BRFSS project requires: recode GENHLTH-style variables, group by demographics, compute prevalence rates.',
          'BRFSS recoding quirk to internalise now: 7/77 = "Don’t know/Not sure", 9/99 = "Refused", BLANK = not asked - these must NOT be treated as real values.',
        ],
        important:
          'Treating BRFSS 7/9/77/99 codes as numeric values silently corrupts every mean and rate you compute. Recode them to missing first - this is worth marks (responsible recoding ≈ 6% of the project grade).',
        relatedTerms: ['BRFSS', 'Recoding', 'GENHLTH', 'Prevalence'],
      },
      {
        title: 'GenAI as Python tutor: the 8 rules',
        summary:
          'The instructor’s slide "How GenAI can be a good Python Tutor" gives 8 rules for learning with Gemini/ChatGPT rather than outsourcing to them. The theme: understand and verify, never paste blindly.',
        points: [
          'Rule 1: ask it to explain concepts BEFORE generating code.',
          'Rule 2: work with small examples.',
          'Rule 3: run code line by line.',
          'Rule 4: paste errors back and ask why they happened.',
          'Rule 5: modify generated code yourself.',
          'Rule 6: ask for explanations "like I’m new" when stuck.',
          'Rule 7: keep a personal snippets notebook.',
          'Rule 8: always verify outputs.',
        ],
        tip: 'This is also participation strategy: when the Gemini demo runs in class, having already tried it (rule 1 + rule 4) lets you contribute a concrete observation.',
        important:
          'The rules exist because GenAI code can be confidently wrong - rule 8 (verify outputs) is non-negotiable when the data is health data.',
        relatedTerms: ['GenAI', 'Gemini', 'Prompting'],
      },
    ],
  },
]
