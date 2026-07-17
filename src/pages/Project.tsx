import { useState } from 'react'
import { CalendarDays, ChevronDown, Users, Ruler, ClipboardList, Link2 } from 'lucide-react'
import { deadlines, steps, scope, topicOptions, roles, proposalRubric, finalRubric, resources } from '../data/project'

function StepCard({ n, title, detail, actions }: { n: number; title: string; detail: string; actions: readonly string[] }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="bg-surface border border-edge rounded-lg overflow-hidden">
      <button onClick={() => setOpen(o => !o)} className="w-full flex items-center justify-between gap-3 px-5 py-4 text-left hover:bg-raised transition-colors">
        <span className="flex items-center gap-3">
          <span className="font-mono text-glow text-sm">{String(n).padStart(2, '0')}</span>
          <span className={`font-semibold ${open ? 'text-ink' : 'text-ink-secondary'}`}>{title}</span>
        </span>
        <ChevronDown size={18} className={`text-ink-muted flex-shrink-0 transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && (
        <div className="px-5 pb-5 animate-fade-in">
          <p className="text-sm text-ink-secondary leading-relaxed mb-3">{detail}</p>
          <ul className="space-y-2">
            {actions.map((a, i) => (
              <li key={i} className="text-sm text-ink flex gap-2.5 leading-relaxed">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-glow flex-shrink-0 opacity-70" />
                <span>{a}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

export default function Project() {
  const [topicOpen, setTopicOpen] = useState<string | null>(null)
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <div className="mb-8 animate-fade-in">
        <h1 className="text-3xl font-bold text-ink mb-2">BRFSS Group Project</h1>
        <p className="text-ink-secondary">Predictive modelling using the 2024 Behavioral Risk Factor Surveillance System — 40% of your grade across proposal, presentation, final submission and peer evaluation.</p>
      </div>

      <section className="mb-10">
        <h2 className="font-semibold text-ink mb-3 flex items-center gap-2"><CalendarDays size={16} className="text-glow" /> Deadlines</h2>
        <div className="bg-surface border border-edge rounded-lg overflow-hidden">
          <table className="w-full text-sm">
            <tbody>
              {deadlines.map(d => (
                <tr key={d.what} className="border-b border-edge last:border-0">
                  <td className="px-4 py-3 font-mono text-glow whitespace-nowrap">{d.date}</td>
                  <td className="px-4 py-3 text-ink">{d.what}</td>
                  <td className="px-4 py-3 text-ink-muted text-right whitespace-nowrap">{d.weight}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="font-semibold text-ink mb-3 flex items-center gap-2"><Ruler size={16} className="text-glow" /> Required scope</h2>
        <div className="grid sm:grid-cols-2 gap-3">
          {scope.map(s => (
            <div key={s.item} className="bg-surface border border-edge rounded-lg px-4 py-3.5">
              <div className="text-xs text-ink-muted mb-1">{s.item}</div>
              <div className="text-sm text-ink font-medium">{s.scope}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-10">
        <h2 className="font-semibold text-ink mb-3">Topic options — pick one before class if you can</h2>
        <div className="space-y-3">
          {topicOptions.map(t => (
            <div key={t.id} className="bg-surface border border-edge rounded-lg overflow-hidden">
              <button
                onClick={() => setTopicOpen(o => (o === t.id ? null : t.id))}
                className="w-full flex items-center justify-between gap-3 px-5 py-4 text-left hover:bg-raised transition-colors"
              >
                <span>
                  <span className="font-mono text-glow text-sm mr-3">Topic {t.id}</span>
                  <span className={`font-semibold ${topicOpen === t.id ? 'text-ink' : 'text-ink-secondary'}`}>{t.title}</span>
                </span>
                <ChevronDown size={18} className={`text-ink-muted flex-shrink-0 transition-transform ${topicOpen === t.id ? 'rotate-180' : ''}`} />
              </button>
              {topicOpen === t.id && (
                <div className="px-5 pb-5 animate-fade-in space-y-3 text-sm">
                  <p className="text-ink italic">"{t.exampleQuestion}"</p>
                  <div>
                    <div className="text-xs font-mono uppercase tracking-wider text-ink-muted mb-1.5">Possible outcomes</div>
                    <ul className="space-y-1">
                      {t.outcomes.map((o, i) => <li key={i} className="text-ink-secondary flex gap-2"><span className="text-glow mt-0.5">•</span>{o}</li>)}
                    </ul>
                  </div>
                  <div>
                    <div className="text-xs font-mono uppercase tracking-wider text-ink-muted mb-1.5">Candidate BRFSS variables (verify against 2024 codebook)</div>
                    <div className="flex flex-wrap gap-1.5">
                      {t.variables.map(v => <span key={v} className="font-mono text-xs text-glow bg-glow-dim px-2 py-0.5 rounded border border-glow/10">{v}</span>)}
                    </div>
                  </div>
                  <p className="text-ink-secondary"><span className="text-ink font-medium">Literature anchor: </span>{t.literature}</p>
                  <p className="text-ink-secondary"><span className="text-ink font-medium">Why it matters: </span>{t.whyItMatters}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      <section className="mb-10">
        <h2 className="font-semibold text-ink mb-3">Step-by-step playbook</h2>
        <div className="space-y-3">
          {steps.map((s, i) => <StepCard key={s.title} n={i + 1} {...s} />)}
        </div>
      </section>

      <section className="mb-10">
        <h2 className="font-semibold text-ink mb-3 flex items-center gap-2"><Users size={16} className="text-glow" /> Team roles (~6 people)</h2>
        <div className="bg-surface border border-edge rounded-lg overflow-hidden">
          <table className="w-full text-sm">
            <tbody>
              {roles.map(r => (
                <tr key={r.role} className="border-b border-edge last:border-0">
                  <td className="px-4 py-3 text-ink font-medium whitespace-nowrap align-top">{r.role}</td>
                  <td className="px-4 py-3 text-ink-secondary">{r.responsibility}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="font-semibold text-ink mb-3 flex items-center gap-2"><ClipboardList size={16} className="text-glow" /> Rubrics — write to these</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <div className="text-sm text-ink-muted mb-2">Proposal (10%)</div>
            <div className="bg-surface border border-edge rounded-lg overflow-hidden">
              <table className="w-full text-sm">
                <tbody>
                  {proposalRubric.map(r => (
                    <tr key={r.criterion} className="border-b border-edge last:border-0">
                      <td className="px-3.5 py-2.5 text-ink align-top">{r.criterion}<div className="text-xs text-ink-muted mt-0.5">{r.expectation}</div></td>
                      <td className="px-3.5 py-2.5 font-mono text-glow text-right align-top whitespace-nowrap">{r.weight}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div>
            <div className="text-sm text-ink-muted mb-2">Final submission (20%)</div>
            <div className="bg-surface border border-edge rounded-lg overflow-hidden">
              <table className="w-full text-sm">
                <tbody>
                  {finalRubric.map(r => (
                    <tr key={r.criterion} className="border-b border-edge last:border-0">
                      <td className="px-3.5 py-2.5 text-ink align-top">{r.criterion}<div className="text-xs text-ink-muted mt-0.5">{r.expectation}</div></td>
                      <td className="px-3.5 py-2.5 font-mono text-glow text-right align-top whitespace-nowrap">{r.weight}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h2 className="font-semibold text-ink mb-3 flex items-center gap-2"><Link2 size={16} className="text-glow" /> Resources</h2>
        <div className="space-y-2">
          {resources.map(r => (
            <a key={r.url} href={r.url} target="_blank" rel="noreferrer" className="block bg-surface border border-edge rounded-lg px-4 py-3 text-sm hover:border-glow/30 transition-colors">
              <span className="text-ink font-medium">{r.label}</span>
              <span className="text-ink-muted font-mono text-xs block mt-0.5 truncate">{r.url}</span>
            </a>
          ))}
        </div>
      </section>
    </div>
  )
}
