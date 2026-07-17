import type {
  DebateGroup,
  Jury,
  RebuttalPair,
  StatItem,
  TimelineItem,
  VocabItem,
} from './types'

// ── Motion & scenario ───────────────────────────────────────────────

export const motion: string =
  'Population ageing should primarily be framed as a healthcare and economic challenge.'

export const scenario: string =
  'Singapore is becoming a super-aged society, and your team advises the Government (PMO, MTI, MOH) on how to frame ageing in a national strategy document. The central question: is population ageing best understood as a dependency problem, a healthcare planning problem, or a longevity opportunity? Learning outcome: explain how perceptions of demographic change shape policy priorities, public attitudes and healthcare planning.'

// ── Format / timetable (25–30 min total) ────────────────────────────

export const timetable: readonly TimelineItem[] = [
  {
    time: '3 min',
    activity: 'Read article extract; individual reflection',
    action:
      'Highlight 2–3 stats you will actually quote; jot down your 2 strongest points.',
  },
  {
    time: '5 min',
    activity: 'Groups A & B huddle; Group C prepares evaluation criteria',
    action:
      'Assign speaking order fast: 30 sec to pick a leader, 2 min to converge on 3 arguments max, 90 sec to assign speakers, 1 min to dry-run the opening line.',
  },
  {
    time: '4 min',
    activity: 'Group A presents',
    action:
      'About 3 speakers × 75 seconds, or opener/body/closer. Open with the one-line thesis, number the arguments, close by restating.',
  },
  {
    time: '4 min',
    activity: 'Group B presents',
    action:
      'Same structure — but ideally rebut A’s specific points live, not a canned speech.',
  },
  {
    time: '5 min',
    activity: 'Group C discusses & synthesises',
    action:
      'A & B: stay quiet and note what C picks up on. C: fill the scorecard, agree the verdict with criteria and the dual-track recommendation.',
  },
  {
    time: '4 min',
    activity: 'Group C presents synthesis + instructor wrap-up',
    action:
      'C delivers the verdict with criteria, then the "Plan for the costs. Invest in the capabilities. Retire the tsunami." synthesis — strong finish: the framing decides which analytics get built.',
  },
]

// ── Stat card (memorise — usable by every group) ────────────────────

export const statCard: readonly StatItem[] = [
  {
    label: 'SG residents aged 65+',
    value: '20.7% → 23.9%',
    detail: '2025 → 2030 — roughly 1 in 4 Singapore residents will be 65+ by 2030.',
  },
  {
    label: 'Super-aged threshold',
    value: '21% aged 65+',
    detail:
      'UN/WHO convention (aged society = 14%); Singapore crosses the super-aged line around 2026.',
  },
  {
    label: 'Life expectancy vs healthspan',
    value: '83.9 vs ≈74 years',
    detail:
      'Life expectancy at birth 83.9 years (2025) vs healthy life expectancy ≈74 — about 10 years lived in poor health.',
  },
  {
    label: 'Old-age support ratio',
    value: '5.7 → 2.7',
    detail:
      'Residents aged 20–64 per resident 65+, 2015 → 2030 — workers per senior more than halve in 15 years.',
  },
  {
    label: 'National health expenditure',
    value: '$22B → $59B',
    detail:
      'Projected 2018 → 2030 — nearly triples; the fastest-growing item in the national budget.',
  },
  {
    label: 'Healthcare workforce',
    value: '129k → ~156k',
    detail: '2024 headcount → needed by 2030: +20% in six years.',
  },
  {
    label: 'Global context',
    value: '18M shortfall',
    detail:
      'WHO projects an 18 million health-worker shortfall globally by 2030 — every developed country competes for the same nurses and care aides.',
  },
]

// ── Key vocabulary (use precisely — it signals preparation) ─────────

export const vocab: readonly VocabItem[] = [
  {
    term: 'Aged / super-aged society',
    meaning:
      '14% / 21% of the population aged 65+ (UN/WHO convention). Singapore crosses the super-aged threshold around 2026.',
  },
  {
    term: 'Old-age dependency ratio vs old-age support ratio',
    meaning:
      'The same fraction inverted: seniors per 100 working-age adults (dependency) vs working-age adults per senior (support). The word "dependency" itself embeds the deficit framing — a point Group B can exploit.',
  },
  {
    term: 'Silver tsunami',
    meaning:
      'Alarmist metaphor for the ageing wave. A tsunami is sudden, unpredictable and destructive; ageing is gradual, decades-predictable and the product of development success.',
  },
  {
    term: 'Compression of morbidity',
    meaning:
      'Pushing illness into a shorter window at the end of life — closing the roughly 10-year gap between lifespan (83.9 years) and healthspan (≈74 years).',
  },
  {
    term: 'Deficit-based vs asset-based framing',
    meaning:
      'Seniors as consumers of resources vs contributors of resources. The frame determines what gets funded, what gets measured and what the public believes.',
  },
  {
    term: 'Intergenerational capital',
    meaning:
      'Knowledge, care and wealth transfers from older to younger generations — mentoring, skills transfer, grandparent childcare, and family wealth that funds the next generation’s housing and education.',
  },
  {
    term: 'Longevity economy / longevity dividend',
    meaning:
      'Economic value created by and for older adults — seniors as consumers, workers and entrepreneurs; businesses serving older adults (health tech, tourism, learning) are a growth sector Singapore could export to every ageing Asian economy.',
  },
  {
    term: 'Prospective age',
    meaning:
      'Measuring age by expected years of life remaining rather than years since birth — a refinement (alongside healthy life expectancy) that can supplement crude 65+ thresholds in planning indicators.',
  },
]

// ── Delivery tactics (this is 15%-participation territory) ──────────

export const tactics: readonly string[] = [
  'Structure beats volume. Open with a one-line thesis, number your arguments ("three reasons"), close by restating. 4 minutes ≈ 550 words total for a group — brutal; cap at 3 arguments.',
  'Quote Singapore numbers, not generalities. "One in four Singaporeans will be 65+ by 2030" lands harder than "the population is ageing".',
  'Pre-empt the other side in one sentence per argument ("Some will say X — but…"). The jury’s criteria almost always include anticipation of counterarguments.',
  'Speak to the scenario: you are advising the Government on a strategy document. Argue about consequences of the FRAMING (what gets funded, what the public believes, what gets measured) — not just whether ageing is good or bad. This is the actual point of the exercise.',
  'Tie to the course if you get a closing line: framing determines which data we collect and which analytics we build — challenge framing → cost-prediction and bed-demand models; asset framing → healthy-ageing, participation and prevention analytics. The instructor will love this.',
  'In the 5-minute huddle: 30 seconds to pick a leader, 2 minutes to choose 3 arguments, 90 seconds to assign speakers, 1 minute to dry-run the opening line.',
]

// ── Group A — Proposition ───────────────────────────────────────────

export const groupA: DebateGroup = {
  id: 'A',
  role: 'Proposition — ageing IS primarily a healthcare & economic challenge',
  stance:
    'From a policy-planning perspective, the challenge framing is the correct primary frame for a national strategy document. Framing drives resource allocation; only the challenge framing mobilises the money, workforce and infrastructure that seniors will actually need.',
  thesis:
    'We do not frame ageing as a challenge because we think less of our seniors — we frame it as a challenge because that is the only framing that guarantees the beds, the nurses, and the dollars will be there when they need them.',
  closing:
    'The kindest thing a government can do for its seniors is to be pessimistic on paper. Frame ageing as the healthcare and economic challenge it arithmetically is — 1 in 4 citizens 65+, support ratio 2.7, $59 billion — so that the optimistic future our opposition describes is actually funded. Dignity in old age is purchased by realism in planning.',
  args: [
    {
      id: 'a1',
      title: 'Healthcare demand rises steeply and non-linearly with age',
      guidingQuestion: 'How does population ageing affect healthcare demand?',
      claim:
        'An ageing population does not increase healthcare demand proportionally — it multiplies it.',
      reasoning: [
        'Chronic disease prevalence climbs sharply with age: diabetes, hypertension, cardiovascular disease, cancer, dementia, frailty. Most seniors have multimorbidity (2+ chronic conditions), and multimorbid patients have more admissions, longer stays, more complications, more readmissions and more polypharmacy risks.',
        'Per-capita healthcare spending for a person 65+ is a multiple of that for a working-age adult; the last years of life are the most expensive of all.',
        'This is already visible in Singapore: projected national health expenditure nearly triples from $22B (2018) to $59B (2030) — the fastest-growing item in the national budget. That growth is driven overwhelmingly by ageing, not by population growth.',
        'Demand also changes in KIND, not just volume: from episodic acute care to long-term care, dementia care, home care, palliative care — services Singapore historically under-built because they were not needed at scale.',
      ],
      whyItSupports:
        'Only a challenge framing communicates the scale and urgency of this demand shift to ministries competing for budget. A strategy document that leads with "opportunity" will not win a $37B budget increase.',
      preempt:
        'Yes, many seniors are healthy — but planning is done for the tail, not the average. Hospitals are sized for peak demand; an optimistic average hides the frail 20% who consume 80% of care.',
    },
    {
      id: 'a2',
      title: 'The fiscal and labour-force arithmetic is unforgiving',
      guidingQuestion:
        'What are the implications for the economy, tax base, and labour force?',
      claim:
        'The same demographic change that raises spending simultaneously shrinks the base that pays for it — a scissors effect.',
      reasoning: [
        'Old-age support ratio: 5.7 working-age adults per senior in 2015 → 2.7 by 2030. In 15 years, the number of workers supporting each senior more than halves. Fewer workers = smaller income tax and CPF contribution base exactly when subsidies, MediShield payouts and Medifund draws rise.',
        'The Government has already acted on this arithmetic: GST was raised explicitly citing rising healthcare spending; retirement and re-employment ages are being pushed to 65/70 by 2030; CareShield Life was made compulsory. These are challenge-framing policies — and they were necessary.',
        'A shrinking workforce also slows GDP growth, which compounds the problem: slower growth means slower revenue growth against accelerating health costs.',
        'Singapore cannot inflate or borrow its way out (reserves discipline, small open economy), so the adjustment must be planned decades ahead — which is what a strategy document is FOR.',
      ],
      whyItSupports:
        'Framing ageing as an economic challenge is what legitimises politically painful but necessary moves (taxes, retirement age, compulsory insurance). An "asset" framing gives no mandate for any of them.',
      preempt:
        'Seniors do contribute — but volunteering and caregiving, valuable as they are, do not pay for chemotherapy or nursing-home staff. Budgets are paid in dollars, and the dollar arithmetic is what it is.',
    },
    {
      id: 'a3',
      title:
        'Workforce and infrastructure have long lead times and hard constraints',
      guidingQuestion:
        'Why might governments focus on retirement age, preventive health, healthcare infrastructure, and long-term care?',
      claim:
        'Healthcare capacity cannot be conjured on demand — you must plan pessimistically, a decade ahead.',
      reasoning: [
        'Workforce: Singapore’s healthcare workforce must grow from 129k (2024) to ~156k (2030) — +20% in six years — while the WHO projects a global shortfall of 18 million health workers by 2030. Every developed country is competing for the same nurses and care aides. Training a doctor takes 10+ years; a nurse 3–4. Miss the planning window and no amount of money fixes it in time.',
        'Infrastructure: a hospital takes ~7–10 years from planning to opening; nursing homes and community hospitals similar. The bed crunches and A&E boarding episodes Singapore has already experienced are what insufficient pessimism looks like.',
        'Preventive health is ALSO a challenge-framing response: Healthier SG exists precisely because the system cannot afford the trajectory of unmanaged chronic disease. Prevention is cost-avoidance — the challenge frame is what justifies paying GPs capitation to keep people well.',
        'Long-term care especially: ILTC has historically been the most under-provided layer (VWO-dependent), and it is exactly where super-aged demand explodes.',
      ],
      whyItSupports:
        'Infrastructure and workforce decisions being made TODAY in the strategy document determine care capacity in 2035. Under-planning is irreversible on the timescale that matters; over-planning is merely expensive. A challenge framing is the rational asymmetric bet.',
    },
    {
      id: 'a4',
      title:
        'Dependency/support ratios remain useful, honest planning indicators',
      guidingQuestion:
        'How can indicators such as the old-age dependency ratio or old-age support ratio still be useful for planning?',
      claim:
        'The opposition will attack these indicators as crude and ageist. They are crude — and still indispensable.',
      reasoning: [
        'They are simple, transparent, internationally comparable, and projectable decades ahead with high confidence (everyone who will be 65 in 2045 is already alive). Few policy indicators have that property.',
        'They map directly onto concrete decisions: CPF adequacy, healthcare subvention budgets, foreign-workforce quotas for care staff, land allocation for eldercare facilities.',
        'They are leading indicators of fiscal structure, not claims about individual seniors’ worth. No planner reads "2.7" as "each senior is a burden"; they read it as "the contribution base per beneficiary is halving — adjust financing design".',
        'Refinements exist (healthy life expectancy, prospective age) and can supplement — but a strategy document needs a headline planning number, and support ratio is it.',
      ],
      whyItSupports:
        'Defending the indicators defuses the opposition’s strongest attack on the challenge frame’s core planning tool — the support ratio remains the headline number a strategy document needs.',
      preempt:
        'We agree the ratio should not define how society SEES seniors. But a strategy document is a planning instrument, not a greeting card — it must plan with planning numbers.',
    },
  ],
}

// ── Group B — Opposition ────────────────────────────────────────────

export const groupB: DebateGroup = {
  id: 'B',
  role: 'Opposition — ageing should be framed as a social & community asset',
  stance:
    'Challenge the deficit-based framing. A national strategy document is not just a budget instrument — it sets public attitudes, senior self-perception, and the direction of innovation for a generation. Leading with "burden" produces worse policy AND worse health.',
  thesis:
    'Population ageing is not a disaster that happened to Singapore — it is the greatest achievement of Singapore’s own development. A strategy document that frames our longest-lived generation primarily as a cost is not realism; it is a failure of imagination that will cost us more than it saves.',
  closing:
    'The problem was never that Singaporeans are living longer — it is that our institutions were designed for shorter lives. Frame ageing as a burden and we will spend $59 billion managing decline. Frame it as longevity — capability, contribution, intergenerational capital — and we redesign work, homes, and health so that the extra decade we’ve won is lived, not endured. Don’t write a strategy document about a wave. Write one about a dividend.',
  args: [
    {
      id: 'b1',
      title:
        'Deficit framing distorts policy and harms seniors’ actual health',
      guidingQuestion:
        'What is lost when older adults are viewed mainly as dependents, patients, or fiscal burdens?',
      claim:
        'Framing is not cosmetic — it changes what gets funded, what gets measured, and how seniors see themselves, with measurable health consequences.',
      reasoning: [
        'Policy distortion: a burden frame channels money into treating sickness (beds, wards, nursing homes) and away from sustaining capability (community programmes, employment redesign, age-friendly environments). You get a system optimised for decline.',
        'Public attitudes: national documents set the vocabulary employers, media and families use. If the state calls seniors dependents, employers see 60-year-old applicants as liabilities and families see caregiving as pure sacrifice.',
        'Self-fulfilling prophecy — the strongest evidence: research on age self-perception (Becca Levy, Yale) found that older adults with positive perceptions of ageing lived ~7.5 years longer than those with negative perceptions, and show lower dementia incidence — effects larger than many clinical interventions. Negative framing is literally a public-health risk factor. A government that frames ageing as burden is administering a population-level nocebo.',
        'What gets measured: deficit framing measures bed-days and cost per senior; it does not measure senior volunteering hours, caregiving output, or healthy life expectancy — so those never get managed or grown.',
      ],
      whyItSupports:
        'If framing changes funding, measurement, public attitudes and even health outcomes (Levy’s ~7.5-year longevity gap), then the choice of primary frame is a first-order policy decision — and the deficit frame fails it.',
      preempt:
        'Group A says the document plans budgets, not attitudes. Wrong — national strategy documents are read by every ministry, employer association and newspaper. In Singapore especially, the government’s framing IS the national attitude.',
    },
    {
      id: 'b2',
      title:
        'Older adults are net contributors in ways GDP doesn’t count',
      guidingQuestion:
        'How can older adults contribute beyond paid employment?',
      claim:
        'The "dependency" ledger only counts what seniors take, never what they give. Count both sides and the picture inverts.',
      reasoning: [
        'Informal caregiving: grandparents providing childcare are a pillar of Singapore’s workforce — they are the reason many dual-income parents can work at all. Seniors caring for spouses and older parents substitute directly for paid long-term care the state would otherwise fund. Priced at market rates, informal care is worth billions annually.',
        'Volunteering & community: seniors staff VWOs, religious organisations, grassroots (RSVP Singapore, Silver Generation Ambassadors — seniors serving seniors). Social capital in an urban society is disproportionately maintained by retirees who have time.',
        'Intergenerational capital: mentoring, skills transfer, family wealth transfer that funds the next generation’s housing and education.',
        'The longevity economy: seniors as consumers, workers and entrepreneurs. Healthspan extension means a 65-year-old today has the functional capacity of a 55-year-old a generation ago; with re-employment to 70, seniors ARE labour force. Businesses serving older adults (health tech, tourism, learning) are a growth sector Singapore could export to every ageing Asian economy.',
        'Most 65–74-year-olds are healthy, active and independent — the "dependent senior" is a minority within the cohort the ratio labels 100% dependent.',
      ],
      whyItSupports:
        'Once the ledger counts contribution as well as consumption, the dependency arithmetic collapses — asset framing reflects the true balance sheet, so it should lead the strategy document.',
      preempt:
        'Group A says volunteering doesn’t staff an ICU. But grandparent childcare keeps nurses in the workforce, senior volunteers deliver the community care that keeps people OUT of the ICU, and senior workers pay taxes. Contribution isn’t a feeling — it’s substitution for state spending.',
    },
    {
      id: 'b3',
      title:
        '"Silver tsunami" language is analytically wrong and socially corrosive',
      guidingQuestion:
        'What are the risks of using terms such as "silver tsunami"?',
      claim:
        'The metaphor fails on every dimension — and metaphors in strategy documents become policy.',
      reasoning: [
        'Analytically wrong: a tsunami is sudden, unpredictable and destructive. Ageing is the opposite — gradual, decades-predictable, and the product of success (sanitation, medicine, education). Everyone who will be 65 in 2045 is alive today; nothing in policy is more forecastable. Calling a fully predictable trend a natural disaster is an admission of planning failure, not a description of reality.',
        'Homogenising: it treats 65–100 as one grey mass. The cohort spans marathon runners and palliative patients; framing by the frailest tail misallocates resources and insults the majority.',
        'Socially corrosive: disaster language breeds intergenerational resentment — young taxpayers primed to see seniors as a wave about to crush them. That corrodes the social compact (and the political support) that financing reform actually requires.',
        'Alarmism produces fatalism, not action: disaster framing invites "brace for impact"; a transition framing invites redesign. Notice Singapore’s own best recent policy — Healthier SG, active ageing centres, Kampung Admiralty — came from health-and-community framing, not tsunami framing.',
      ],
      whyItSupports:
        'The motion is about FRAMING — if the challenge side’s signature metaphor is analytically wrong and socially corrosive, the challenge frame cannot be the primary frame of a national strategy document.',
      preempt:
        'Group A will say "we defend the arithmetic, not the metaphor". Good — then concede the framing point, because the motion is about FRAMING. Keep your numbers; change the story they tell.',
    },
    {
      id: 'b4',
      title: 'Asset framing produces better, cheaper policy',
      guidingQuestion:
        'How might policy change if ageing is framed as longevity, capability, social contribution, or intergenerational capital?',
      claim:
        'Reframe, and the policy menu transforms — mostly toward interventions that are cheaper than the acute care they avert.',
      reasoning: [
        'Longevity → life-course redesign: if 100-year lives are normal, education/work/retirement stops being three fixed blocks. Policies: phased retirement, mid-career reskilling (SkillsFuture for 50+), flexible work. Result: longer contribution, later dependency, bigger tax base — directly attacking Group A’s ratio.',
        'Capability → prevent decline, don’t just treat it: invest in healthspan (Healthier SG, exercise, screening, social prescribing) to compress morbidity. Every year of healthy life expectancy gained defers the expensive final years. The cheapest hospital bed is the one never needed.',
        'Social contribution → build infrastructure for contribution: senior volunteer corps, grandparent-caregiver support, senior employment grants. Every hour of enabled senior contribution substitutes for paid services.',
        'Intergenerational capital → design for mixing, not warehousing: Kampung Admiralty (housing + healthcare + childcare + community in one building) is world-famous precisely because it treats seniors as community anchors, not occupants. Age-friendly city design (WHO framework) benefits everyone — prams and wheelchairs need the same ramps.',
        'Better indicators follow the better frame: report healthy life expectancy and effective economic contribution alongside the support ratio; measure what you want to grow.',
      ],
      whyItSupports:
        'The strongest case for asset framing is instrumental: it unlocks prevention and participation policies that reduce the very costs the challenge frame plans for — it is the fiscally conservative position.',
      preempt:
        'Group A says optimistic framing risks under-building capacity. No one is proposing to cancel hospitals — we’re saying the PRIMARY frame determines the growth strategy. Their frame builds capacity for decline; ours reduces the decline you need capacity for. Prevention is the fiscally conservative position.',
    },
  ],
}

// ── Group C — Policy Jury ───────────────────────────────────────────

export const jury: Jury = {
  role: 'Policy Jury — evaluate both framings and propose a balanced narrative (explicitly NOT just pick a winner)',
  stance:
    'Evaluate strengths, weaknesses, risks and policy implications of BOTH framings; say which side argued more persuasively and why; then propose a balanced policy narrative for Singapore — realistic, without being alarmist or overly optimistic. The exercise sheet states: a strong synthesis recognises that both framings are partially valid but incomplete.',
  thesis:
    '"Plan for the costs. Invest in the capabilities. Retire the tsunami." Recommend the Ministry adopt a dual-track framing — ageing as "a longevity transition to be managed": challenge lens for capacity and financing, asset lens for society, work and community.',
  closing:
    'Singapore should write a strategy document that budgets like a pessimist and speaks like a builder. Both sides today were partially right and incomplete alone — realism about costs plus ambition about capability is the only framing that is neither alarmist nor naive.',
  criteria: [
    {
      criterion: 'Evidence',
      lookFor:
        'Specific Singapore data used correctly — 20.7% → 23.9% aged 65+, support ratio 5.7 → 2.7, $22B → $59B, 129k → 156k workforce — not generic "the population is ageing" claims.',
    },
    {
      criterion: 'Logic',
      lookFor:
        'Do conclusions follow from premises? Watch for leaps from "costs rise" to "therefore burden framing", or from "seniors contribute" to "therefore no capacity problem".',
    },
    {
      criterion: 'Policy realism',
      lookFor:
        'Implementable? Costed? Do they respect lead times — 7–10 years to open a hospital, 3–4 years to train a nurse, 10+ years for a doctor?',
    },
    {
      criterion: 'Anticipation',
      lookFor:
        'Did they pre-empt the other side’s strongest point in one sentence per argument, and rebut live rather than deliver a canned speech?',
    },
    {
      criterion: 'Scope',
      lookFor:
        'Did they address FRAMING — attitudes, priorities, what gets measured and funded — not just whether the facts are true? The motion is about framing.',
    },
    {
      criterion: 'Blind spots',
      lookFor:
        'What did each side never acknowledge? A: ageist spillover, uncounted contribution, measurement bias. B: hard capacity arithmetic, complacency risk, the frail tail.',
    },
  ],
  framings: [
    {
      framing: 'Ageing as healthcare & economic challenge (Group A)',
      strengths: [
        'Matches genuinely hard constraints: health spend $22B → $59B; workforce 129k → 156k needed against a global 18M shortfall; 7–10-year hospital lead times. These are real and non-negotiable.',
        'Mobilises urgency and budget; historically effective in Singapore — the GST rise, CareShield Life and retirement-age moves were all won on this framing.',
        'Support ratio (5.7 → 2.7) is simple, projectable and internationally comparable — a usable planning number.',
        'Pessimistic capacity planning is the rational asymmetric bet: under-building is irreversible, over-building is merely costly.',
      ],
      blindSpots: [
        'Ageist spillover: system-level "burden" language leaks into public attitudes and senior self-perception; negative age perception is itself associated with worse health outcomes (Levy: ~7.5-year longevity gap) — the framing can worsen the very costs it forecasts.',
        'Homogenises the cohort: treats all 65+ as dependent, when most 65–74s are healthy and contributing.',
        'Ignores uncounted contribution: informal caregiving, grandparent childcare and volunteering are real fiscal substitution, invisible to GDP and to the dependency ratio.',
        'Measurement bias: counts costs (bed-days, spending) but not assets (healthy life expectancy, participation), so policy optimises for managing decline rather than reducing it.',
        'Alarmist vocabulary ("silver tsunami") mislabels a slow, predictable, success-driven transition as a disaster.',
      ],
    },
    {
      framing: 'Ageing as social resource & longevity opportunity (Group B)',
      strengths: [
        'Restores dignity and agency; counters self-fulfilling decline; aligns with evidence that perception affects health.',
        'Unlocks a wider policy menu: life-course redesign, reskilling, phased retirement, age-friendly cities, intergenerational housing (Kampung Admiralty), social prescribing — many cheaper than the acute care they avert.',
        'Prevention logic is fiscally sound: compressing morbidity defers the most expensive care years; consistent with Healthier SG.',
        'Measures what you want to grow (healthy life expectancy, contribution), not only what you fear.',
      ],
      blindSpots: [
        'Can understate the hard arithmetic: optimism does not staff wards or build nursing homes; capacity gaps are irreversible on the timescales that matter.',
        'Complacency risk: "opportunity" rhetoric can politically justify under-investment ("seniors are assets, so we need fewer beds").',
        'Overgeneralises from the healthy majority: the frail minority with dementia and multimorbidity have genuinely heavy, costly needs; a strategy must plan for the tail, not the mean.',
        'Prevention pays back slowly and partially; even perfect compression of morbidity leaves a larger absolute number of very old people needing care.',
        'Contribution claims are hard to budget: informal care is real but cannot be redeployed by fiat.',
      ],
    },
  ],
  synthesis: [
    {
      title: 'Challenge lens where it belongs — capacity & financing',
      detail:
        'Pessimistic planning for hospitals, ILTC, workforce (156k by 2030) and financing reform in the annexes and budgets. Keep the support ratio as a planning indicator. Rationale: lead times are long and under-provision is irreversible — A’s strongest ground.',
    },
    {
      title: 'Asset lens where it belongs — society, work and community',
      detail:
        'Life-course redesign, senior employment and reskilling, caregiver support, age-friendly and intergenerational design, Healthier SG-style prevention in the narrative and national goals. Rationale: perception shapes behaviour and health; contribution is real fiscal substitution — B’s strongest ground.',
    },
    {
      title: 'Fix the measurement so both lenses stay honest',
      detail:
        'Report healthy life expectancy alongside the old-age support ratio; track senior participation and informal-care contribution, not only cost per senior. What gets measured gets managed.',
    },
    {
      title: 'Fix the language',
      detail:
        'The strategy document uses "longevity society / super-aged transition" and drops "silver tsunami" and "burden". Costs are stated plainly as numbers — numbers inform without insulting.',
    },
    {
      title: 'The two frames are complements, not rivals',
      detail:
        'The asset agenda (prevention, participation) is the best long-run cost-control strategy, and the challenge agenda (funded capacity) is what makes the opportunity credible. Alarmism without investment breeds fatalism; optimism without capacity breeds crisis.',
    },
  ],
}

// ── Rebuttal drill: attack → one-line response ──────────────────────
// Side = who delivers the response. First five: A answers B's attacks;
// last five: B answers A's attacks.

export const rebuttals: readonly RebuttalPair[] = [
  {
    side: 'A',
    attack: 'Deficit framing is ageist and becomes self-fulfilling.',
    response:
      'Framing a SYSTEM challenge is not labelling PEOPLE burdens; the document plans budgets, not attitudes.',
  },
  {
    side: 'A',
    attack:
      'Seniors contribute — caregiving, volunteering, the longevity economy.',
    response:
      'True and welcome — and none of it staffs an ICU or funds long-term care. Both can be true; only one sizes the budget.',
  },
  {
    side: 'A',
    attack: '"Silver tsunami" is alarmist.',
    response:
      'We are not defending the metaphor; we are defending the arithmetic. Drop the word, keep the numbers.',
  },
  {
    side: 'A',
    attack: 'The dependency ratio wrongly assumes 65+ = dependent.',
    response:
      'It is a fiscal-structure indicator, not a biography of each senior — and it is the only one projectable 20 years out.',
  },
  {
    side: 'A',
    attack: 'Healthier SG shows the future is health, not healthcare.',
    response:
      'Healthier SG was justified and FUNDED by the cost challenge — it is our framing’s success story, not yours.',
  },
  {
    side: 'B',
    attack: '$22B → $59B — only challenge framing wins that budget.',
    response:
      'The budget case can be made without insulting the people it serves; and asset framing shrinks the curve via prevention — it is the cheaper strategy.',
  },
  {
    side: 'B',
    attack: 'Support ratio 5.7 → 2.7 — workers per senior halving.',
    response:
      'The ratio assumes 65 = dependent. Raise healthy working lives (our policies) and the EFFECTIVE ratio improves — their framing takes decline as fixed; ours treats it as a variable.',
  },
  {
    side: 'B',
    attack: 'Hospitals take 10 years to build; plan pessimistically.',
    response:
      'Plan capacity pessimistically in the annex; frame the nation optimistically in the narrative. Engineering margins do not require a burden narrative.',
  },
  {
    side: 'B',
    attack: 'Contribution does not fund chemotherapy.',
    response:
      'Informal care and senior childcare offset billions in state spending and keep younger workers taxed and productive — it IS fiscal.',
  },
  {
    side: 'B',
    attack: 'Healthier SG was justified by cost pressure.',
    response:
      'And it works only if seniors believe health in old age is possible — that is, only under our framing. Cost got it funded; capability makes it succeed.',
  },
]
