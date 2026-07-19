import { useState } from 'react'
import { FileText, Lightbulb, GraduationCap, ClipboardCheck, Users, Star, ChevronDown, Scale } from 'lucide-react'
import { proposals, scopeComparison, strategicComparison } from '../data/proposals'
import type { Proposal, ComparisonRow } from '../data/types'

const roleColor: Record<string, string> = {
  Outcome: 'text-glow bg-glow-dim border-glow/20',
  'Secondary outcome': 'text-s3 bg-s3/10 border-s3/20',
  Predictor: 'text-ink-secondary bg-raised border-edge',
  Subgroup: 'text-s4 bg-s4/10 border-s4/20',
}

function Collapsible({ title, icon: Icon, children, defaultOpen = false }: {
  title: string
  icon: typeof Lightbulb
  children: React.ReactNode
  defaultOpen?: boolean
}) {
  const [open, setOpen] = useState(defaultOpen)
  return (
    <div className="bg-surface border border-edge rounded-lg overflow-hidden">
      <button onClick={() => setOpen(o => !o)} className="w-full flex items-center justify-between gap-3 px-5 py-4 text-left hover:bg-raised transition-colors">
        <span className="flex items-center gap-2.5 font-semibold text-ink"><Icon size={16} className="text-glow" /> {title}</span>
        <ChevronDown size={18} className={`text-ink-muted flex-shrink-0 transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && <div className="px-5 pb-5 animate-fade-in">{children}</div>}
    </div>
  )
}

function ProposalView({ p }: { p: Proposal }) {
  return (
    <div className="space-y-4 animate-fade-in">
      <div className="bg-surface border border-edge rounded-lg p-6">
        <div className="flex items-start justify-between gap-3 mb-2">
          <h2 className="text-xl font-bold text-ink">{p.title}</h2>
          {p.recommended && (
            <span className="flex items-center gap-1.5 text-xs font-medium text-s4 bg-s4/10 border border-s4/25 rounded-full px-3 py-1 whitespace-nowrap">
              <Star size={13} /> Recommended pick
            </span>
          )}
        </div>
        <p className="text-ink-secondary italic leading-relaxed mb-3">"{p.question}"</p>
        <span className="text-xs font-mono text-glow bg-glow-dim px-2.5 py-1 rounded-full border border-glow/10">
          measured event rate: {p.eventRate}
        </span>
      </div>

      <Collapsible title="Why this proposal - decision rationale" icon={Lightbulb}>
        <ul className="space-y-2.5">
          {p.rationale.map((r, i) => (
            <li key={i} className="text-sm text-ink-secondary flex gap-2.5 leading-relaxed">
              <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-glow flex-shrink-0 opacity-70" />
              <span>{r}</span>
            </li>
          ))}
        </ul>
      </Collapsible>

      <Collapsible title="What we will learn" icon={GraduationCap}>
        <ul className="space-y-2.5">
          {p.learning.map((r, i) => (
            <li key={i} className="text-sm text-ink-secondary flex gap-2.5 leading-relaxed">
              <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-s2 flex-shrink-0 opacity-70" />
              <span>{r}</span>
            </li>
          ))}
        </ul>
      </Collapsible>

      <Collapsible title="What we are required to do" icon={ClipboardCheck}>
        <ul className="space-y-2.5">
          {p.requirements.map((r, i) => (
            <li key={i} className="text-sm text-ink-secondary flex gap-2.5 leading-relaxed">
              <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-s3 flex-shrink-0 opacity-70" />
              <span>{r}</span>
            </li>
          ))}
        </ul>
      </Collapsible>

      <Collapsible title="The submittable proposal (2 pages)" icon={FileText} defaultOpen>
        <div className="space-y-5">
          {p.proposal.map(s => (
            <div key={s.heading}>
              <h3 className="font-semibold text-ink mb-2">{s.heading}</h3>
              {s.paragraphs.map((t, i) => (
                <p key={i} className="text-sm text-ink-secondary leading-relaxed mb-2">{t}</p>
              ))}
              {s.bullets && (
                <ul className="space-y-1.5 mt-1">
                  {s.bullets.map((b, i) => (
                    <li key={i} className="text-sm text-ink-secondary flex gap-2.5 leading-relaxed">
                      <span className="mt-1.5 h-1 w-1 rounded-full bg-ink-faint flex-shrink-0" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </Collapsible>

      <Collapsible title={`Variable table (${p.variables.length} variables)`} icon={ClipboardCheck}>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-edge">
                <th className="text-left px-3 py-2 text-xs font-mono uppercase tracking-wider text-ink-muted">Concept</th>
                <th className="text-left px-3 py-2 text-xs font-mono uppercase tracking-wider text-ink-muted">Variable</th>
                <th className="text-left px-3 py-2 text-xs font-mono uppercase tracking-wider text-ink-muted">Role</th>
                <th className="text-left px-3 py-2 text-xs font-mono uppercase tracking-wider text-ink-muted">Original coding</th>
                <th className="text-left px-3 py-2 text-xs font-mono uppercase tracking-wider text-ink-muted">Recode</th>
              </tr>
            </thead>
            <tbody>
              {p.variables.map(v => (
                <tr key={v.variable + v.role} className="border-b border-edge last:border-0">
                  <td className="px-3 py-2.5 text-ink align-top">{v.concept}</td>
                  <td className="px-3 py-2.5 font-mono text-glow align-top whitespace-nowrap">{v.variable}</td>
                  <td className="px-3 py-2.5 align-top">
                    <span className={`text-xs px-2 py-0.5 rounded-full border whitespace-nowrap ${roleColor[v.role] ?? roleColor.Predictor}`}>{v.role}</span>
                  </td>
                  <td className="px-3 py-2.5 text-ink-secondary align-top">{v.original}</td>
                  <td className="px-3 py-2.5 text-ink-secondary align-top">{v.recode}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Collapsible>

      <Collapsible title="Team roles (5 members)" icon={Users}>
        <div className="space-y-3">
          {p.roles.map(r => (
            <div key={r.role} className="bg-raised border border-edge rounded-lg px-4 py-3">
              <div className="flex items-baseline justify-between gap-3 mb-1">
                <span className="font-medium text-ink text-sm">{r.role}</span>
                <span className="text-xs font-mono text-glow whitespace-nowrap">{r.member}</span>
              </div>
              <p className="text-sm text-ink-secondary leading-relaxed">{r.responsibilities}</p>
            </div>
          ))}
        </div>
      </Collapsible>
    </div>
  )
}

function ComparisonTable({ rows, caption }: { rows: readonly ComparisonRow[]; caption: string }) {
  return (
    <div className="bg-surface border border-edge rounded-lg overflow-hidden mb-6">
      <div className="px-5 py-3 border-b border-edge text-sm font-semibold text-ink">{caption}</div>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-edge bg-raised/50">
              <th className="text-left px-4 py-2.5 text-xs font-mono uppercase tracking-wider text-ink-muted whitespace-nowrap">Scope item</th>
              <th className="text-left px-4 py-2.5 text-xs font-mono uppercase tracking-wider text-ink-muted">Requirement</th>
              <th className="text-left px-4 py-2.5 text-xs font-mono uppercase tracking-wider text-s3">A · High Burden</th>
              <th className="text-left px-4 py-2.5 text-xs font-mono uppercase tracking-wider text-s5">B · Mental Health</th>
              <th className="text-left px-4 py-2.5 text-xs font-mono uppercase tracking-wider text-s4">C · Care Gap ★</th>
            </tr>
          </thead>
          <tbody>
            {rows.map(r => (
              <tr key={r.item} className="border-b border-edge last:border-0 align-top">
                <td className="px-4 py-3 text-ink font-medium whitespace-nowrap">{r.item}</td>
                <td className="px-4 py-3 text-ink-muted">{r.requirement}</td>
                <td className="px-4 py-3 text-ink-secondary leading-relaxed">{r.a}</td>
                <td className="px-4 py-3 text-ink-secondary leading-relaxed">{r.b}</td>
                <td className="px-4 py-3 text-ink-secondary leading-relaxed">{r.c}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default function Proposals() {
  const [active, setActive] = useState<string>(() => proposals.find(p => p.recommended)?.id ?? proposals[0]?.id ?? 'compare')
  const current = proposals.find(p => p.id === active)
  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <div className="mb-8 animate-fade-in">
        <h1 className="text-3xl font-bold text-ink mb-2">Project Proposals</h1>
        <p className="text-ink-secondary">Three fully-drafted, submittable proposals (due 25 Jul, 10%) - one per suggested topic, each with the decision rationale, learning outcomes and requirements mapped. Pick one in the group meeting, paste, personalise, submit.</p>
      </div>
      <div className="flex flex-wrap gap-2 mb-8">
        {proposals.map(p => (
          <button
            key={p.id}
            onClick={() => setActive(p.id)}
            className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              active === p.id
                ? 'bg-glow-dim text-glow border border-glow/20'
                : 'bg-surface text-ink-muted border border-edge hover:text-ink'
            }`}
          >
            {p.recommended && <Star size={13} />}
            Topic {p.id}: {p.topic}
          </button>
        ))}
        <button
          onClick={() => setActive('compare')}
          className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-colors ${
            active === 'compare'
              ? 'bg-glow-dim text-glow border border-glow/20'
              : 'bg-surface text-ink-muted border border-edge hover:text-ink'
          }`}
        >
          <Scale size={13} /> Compare
        </button>
      </div>
      {active === 'compare' ? (
        <div className="animate-fade-in">
          <ComparisonTable rows={scopeComparison} caption="Compliance with the brief's §5 scope table - all three proposals meet every requirement" />
          <ComparisonTable rows={strategicComparison} caption="Strategic differences (the real decision axes - compliance is a tie)" />
          <div className="bg-surface border border-edge rounded-lg p-5 text-sm text-ink-secondary leading-relaxed">
            <span className="text-ink font-medium">Bottom line: </span>
            all three are 100% compliant with every row of the scope table - none needs modification to submit.
            The choice is strategic, not compliance-driven. B sits exactly at the 20-predictor cap (any later addition
            forces a cut) and carries the DECIDE leakage question, while A and C keep a slot of slack. C combines a
            clean outcome, one slot of headroom and the most actionable public-health story - which is why it is the
            recommended pick.
          </div>
        </div>
      ) : (
        current && <ProposalView p={current} />
      )}
    </div>
  )
}
