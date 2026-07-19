// ── Topics ──────────────────────────────────────────────────────────
export interface Topic {
  readonly title: string
  readonly summary?: string
  readonly points: readonly string[]
  readonly tip?: string
  readonly important?: string
  readonly relatedTerms?: readonly string[]
}

export interface Session {
  readonly id: number
  readonly title: string
  readonly subtitle?: string
  readonly topics: readonly Topic[]
}

// ── Glossary ────────────────────────────────────────────────────────
export interface Definition {
  readonly term: string
  readonly definition: string
  readonly category:
    | 'Health System'
    | 'Financing'
    | 'Value & Policy'
    | 'Data Ecosystem'
    | 'Analytics & AI'
    | 'Ageing & Debate'
    | 'Project & Tools'
  readonly related?: readonly string[]
}

// ── Debate module ───────────────────────────────────────────────────
export interface DebateArgument {
  readonly id: string
  readonly title: string
  readonly guidingQuestion?: string
  readonly claim: string
  readonly reasoning: readonly string[]
  readonly preempt?: string
  readonly whyItSupports?: string
}

export interface RebuttalPair {
  /** Which side delivers the response */
  readonly side: 'A' | 'B'
  readonly attack: string
  readonly response: string
}

export interface DebateGroup {
  readonly id: 'A' | 'B' | 'C'
  readonly role: string
  readonly stance: string
  readonly thesis: string
  readonly closing: string
  readonly args: readonly DebateArgument[]
}

export interface StatItem {
  readonly label: string
  readonly value: string
  readonly detail?: string
}

export interface VocabItem {
  readonly term: string
  readonly meaning: string
}

export interface TimelineItem {
  readonly time: string
  readonly activity: string
  readonly action: string
}

export interface JuryCriterion {
  readonly criterion: string
  readonly lookFor: string
}

export interface FramingAnalysis {
  readonly framing: string
  readonly strengths: readonly string[]
  readonly blindSpots: readonly string[]
}

export interface SynthesisPoint {
  readonly title: string
  readonly detail: string
}

export interface Jury {
  readonly role: string
  readonly stance: string
  readonly thesis: string
  readonly closing: string
  readonly criteria: readonly JuryCriterion[]
  readonly framings: readonly FramingAnalysis[]
  readonly synthesis: readonly SynthesisPoint[]
}

// ── Quiz ────────────────────────────────────────────────────────────
export interface QuizQuestion {
  readonly id: string
  readonly topic: string
  readonly prompt: string
  readonly options: readonly string[]
  readonly answerIndex: number
  readonly explanation: string
}

// ── Project guide ───────────────────────────────────────────────────
export interface ProjectStep {
  readonly title: string
  readonly detail: string
  readonly actions: readonly string[]
}

export interface RubricRow {
  readonly criterion: string
  readonly weight: string
  readonly expectation: string
}

export interface BrfssTopicOption {
  readonly id: 'A' | 'B' | 'C'
  readonly title: string
  readonly exampleQuestion: string
  readonly outcomes: readonly string[]
  readonly variables: readonly string[]
  readonly literature: string
  readonly whyItMatters: string
}

export interface ProjectRole {
  readonly role: string
  readonly responsibility: string
}

export interface ScopeItem {
  readonly item: string
  readonly scope: string
}

export interface DeadlineItem {
  readonly date: string
  readonly what: string
  readonly weight: string
}

export interface ResourceLink {
  readonly label: string
  readonly url: string
}

export interface ModelPlanEntry {
  readonly model: string
  readonly role: string
  readonly notes: string
}

export interface ModellingPlan {
  readonly lineup: readonly ModelPlanEntry[]
  readonly methodology: readonly string[]
  readonly donts: readonly string[]
}

// ── Proposals ───────────────────────────────────────────────────────
export interface ProposalSection {
  readonly heading: string
  readonly paragraphs: readonly string[]
  readonly bullets?: readonly string[]
}

export interface VariableRow {
  readonly concept: string
  readonly variable: string
  readonly role: 'Outcome' | 'Secondary outcome' | 'Predictor' | 'Subgroup'
  readonly original: string
  readonly recode: string
}

export interface ProposalRole {
  readonly role: string
  readonly member: string
  readonly responsibilities: string
}

export interface Proposal {
  readonly id: string
  readonly topic: string
  readonly recommended: boolean
  readonly title: string
  readonly question: string
  readonly eventRate: string
  readonly rationale: readonly string[]
  readonly learning: readonly string[]
  readonly requirements: readonly string[]
  readonly proposal: readonly ProposalSection[]
  readonly variables: readonly VariableRow[]
  readonly roles: readonly ProposalRole[]
}

export interface ComparisonRow {
  readonly item: string
  readonly requirement: string
  readonly a: string
  readonly b: string
  readonly c: string
}
