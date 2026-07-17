import { useMemo, useState } from 'react'
import {
  Scale, Swords, Shield, Gavel, Timer, Quote, BookMarked,
  ChevronDown, Eye, EyeOff, RotateCcw, Megaphone, Target,
} from 'lucide-react'
import {
  motion, scenario, groupA, groupB, jury, statCard, vocab, timetable, tactics, rebuttals,
} from '../data/debate'
import type { DebateGroup } from '../data/types'

type Tab = 'overview' | 'A' | 'B' | 'C' | 'spar'

const tabs: readonly { id: Tab; label: string; icon: typeof Scale }[] = [
  { id: 'overview', label: 'Overview', icon: Scale },
  { id: 'A', label: 'Proposition', icon: Swords },
  { id: 'B', label: 'Opposition', icon: Shield },
  { id: 'C', label: 'Policy Jury', icon: Gavel },
  { id: 'spar', label: 'Sparring', icon: Megaphone },
]

function ArgumentCard({ a, accent }: { a: DebateGroup['args'][number]; accent: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="bg-surface border border-edge rounded-lg overflow-hidden">
      <button
        onClick={() => setOpen(o => !o)}
        className="w-full flex items-start justify-between gap-3 px-5 py-4 text-left hover:bg-raised transition-colors"
      >
        <div>
          <div className={`text-xs font-mono uppercase tracking-wider mb-1 ${accent}`}>{a.id}</div>
          <div className={`font-semibold ${open ? 'text-ink' : 'text-ink-secondary'}`}>{a.title}</div>
          {a.guidingQuestion && (
            <div className="text-xs text-ink-muted mt-1 italic">Guiding question: {a.guidingQuestion}</div>
          )}
        </div>
        <ChevronDown size={18} className={`text-ink-muted flex-shrink-0 mt-1 transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && (
        <div className="px-5 pb-5 animate-fade-in">
          <p className="text-sm text-ink font-medium mb-3 leading-relaxed">
            <span className={`font-mono text-xs uppercase tracking-wider mr-2 ${accent}`}>Claim</span>
            {a.claim}
          </p>
          <div className="mb-3">
            <div className="text-xs font-mono uppercase tracking-wider text-ink-muted mb-2">Reasoning & evidence</div>
            <ul className="space-y-2">
              {a.reasoning.map((r, i) => (
                <li key={i} className="text-sm text-ink-secondary flex gap-2.5 leading-relaxed">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-ink-faint flex-shrink-0" />
                  <span>{r}</span>
                </li>
              ))}
            </ul>
          </div>
          {a.whyItSupports && (
            <div className="flex gap-2.5 text-sm bg-glow-dim/40 border border-glow/15 rounded-md px-3.5 py-2.5 mb-2">
              <Target size={15} className="text-glow flex-shrink-0 mt-0.5" />
              <span className="text-ink-secondary"><span className="text-ink font-medium">Why this supports the position: </span>{a.whyItSupports}</span>
            </div>
          )}
          {a.preempt && (
            <div className="flex gap-2.5 text-sm bg-s4/5 border border-s4/20 rounded-md px-3.5 py-2.5">
              <Shield size={15} className="text-s4 flex-shrink-0 mt-0.5" />
              <span className="text-ink-secondary"><span className="text-ink font-medium">Pre-empt the rebuttal: </span>{a.preempt}</span>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

function GroupView({ g, accent }: { g: DebateGroup; accent: string }) {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="bg-surface border border-edge rounded-lg p-5">
        <div className={`text-xs font-mono uppercase tracking-wider mb-2 ${accent}`}>{g.role}</div>
        <p className="text-sm text-ink-secondary leading-relaxed">{g.stance}</p>
      </div>
      <div className={`border rounded-lg p-5 bg-raised/50 ${accent.replace('text-', 'border-')}/20`}>
        <div className="flex gap-3">
          <Quote size={18} className={`${accent} flex-shrink-0`} />
          <div>
            <div className="text-xs font-mono uppercase tracking-wider text-ink-muted mb-1.5">Opening thesis - memorize this line</div>
            <p className="text-ink leading-relaxed italic">{g.thesis}</p>
          </div>
        </div>
      </div>
      <div className="space-y-3">
        {g.args.map(a => <ArgumentCard key={a.id} a={a} accent={accent} />)}
      </div>
      <div className={`border rounded-lg p-5 bg-raised/50 ${accent.replace('text-', 'border-')}/20`}>
        <div className="flex gap-3">
          <Megaphone size={18} className={`${accent} flex-shrink-0`} />
          <div>
            <div className="text-xs font-mono uppercase tracking-wider text-ink-muted mb-1.5">Closing line - rehearse out loud</div>
            <p className="text-ink leading-relaxed italic">{g.closing}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

function SparringDrill() {
  const [i, setI] = useState(0)
  const [revealed, setRevealed] = useState(false)
  const [order, setOrder] = useState<number[]>(() => rebuttals.map((_, idx) => idx))

  const shuffle = () => {
    const next = [...rebuttals.keys()].sort(() => Math.random() - 0.5)
    setOrder(next)
    setI(0)
    setRevealed(false)
  }

  const cur = rebuttals[order[i] ?? 0]
  const sideAccent = cur.side === 'A' ? 'text-s3' : 'text-s5'
  const sideName = cur.side === 'A' ? 'Proposition (A)' : 'Opposition (B)'
  const attackerName = cur.side === 'A' ? 'Opposition (B)' : 'Proposition (A)'

  return (
    <div className="animate-fade-in">
      <div className="bg-surface border border-edge rounded-lg p-5 mb-4">
        <p className="text-sm text-ink-secondary leading-relaxed">
          Sparring drill: read the attack, formulate your one-line response <em>out loud</em>, then reveal the
          model answer. You are answering as <span className={`font-medium ${sideAccent}`}>{sideName}</span>.
        </p>
      </div>
      <div className="bg-surface border border-edge rounded-lg p-6">
        <div className="flex items-center justify-between mb-4">
          <span className="text-xs font-mono text-ink-muted">{i + 1} / {rebuttals.length}</span>
          <button onClick={shuffle} className="flex items-center gap-1.5 text-xs text-ink-muted hover:text-ink transition-colors">
            <RotateCcw size={13} /> Shuffle
          </button>
        </div>
        <div className="mb-5">
          <div className="text-xs font-mono uppercase tracking-wider text-wrong mb-2">{attackerName} attacks:</div>
          <p className="text-lg text-ink leading-relaxed">"{cur.attack}"</p>
        </div>
        {revealed ? (
          <div className="animate-fade-in mb-5">
            <div className={`text-xs font-mono uppercase tracking-wider mb-2 ${sideAccent}`}>Your response as {sideName}:</div>
            <p className="text-ink-secondary leading-relaxed bg-raised border border-edge rounded-md px-4 py-3">"{cur.response}"</p>
          </div>
        ) : (
          <div className="mb-5 h-16 flex items-center justify-center border border-dashed border-edge rounded-md">
            <span className="text-xs text-ink-faint">Say your response out loud first…</span>
          </div>
        )}
        <div className="flex gap-2">
          <button
            onClick={() => setRevealed(r => !r)}
            className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium bg-glow-dim text-glow border border-glow/20 hover:bg-glow/15 transition-colors"
          >
            {revealed ? <EyeOff size={15} /> : <Eye size={15} />}
            {revealed ? 'Hide' : 'Reveal model response'}
          </button>
          <button
            onClick={() => { setI(n => (n + 1) % rebuttals.length); setRevealed(false) }}
            className="px-4 py-2 rounded-lg text-sm font-medium bg-surface text-ink-secondary border border-edge hover:bg-raised transition-colors"
          >
            Next →
          </button>
        </div>
      </div>
    </div>
  )
}

export default function Debate() {
  const [tab, setTab] = useState<Tab>('overview')
  const juryAccent = 'text-s2'

  const content = useMemo(() => {
    switch (tab) {
      case 'A': return <GroupView g={groupA} accent="text-s3" />
      case 'B': return <GroupView g={groupB} accent="text-s5" />
      case 'C':
        return (
          <div className="space-y-6 animate-fade-in">
            <div className="bg-surface border border-edge rounded-lg p-5">
              <div className={`text-xs font-mono uppercase tracking-wider mb-2 ${juryAccent}`}>{jury.role}</div>
              <p className="text-sm text-ink-secondary leading-relaxed">{jury.stance}</p>
            </div>
            <section>
              <h3 className="font-semibold text-ink mb-3 flex items-center gap-2"><Gavel size={16} className={juryAccent} /> Evaluation scorecard - draw this before the speeches</h3>
              <div className="bg-surface border border-edge rounded-lg overflow-hidden">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-edge bg-raised/50">
                      <th className="text-left px-4 py-2.5 text-xs font-mono uppercase tracking-wider text-ink-muted">Criterion</th>
                      <th className="text-left px-4 py-2.5 text-xs font-mono uppercase tracking-wider text-ink-muted">What to look for</th>
                    </tr>
                  </thead>
                  <tbody>
                    {jury.criteria.map(c => (
                      <tr key={c.criterion} className="border-b border-edge last:border-0">
                        <td className="px-4 py-3 text-ink font-medium align-top">{c.criterion}</td>
                        <td className="px-4 py-3 text-ink-secondary">{c.lookFor}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
            <section>
              <h3 className="font-semibold text-ink mb-3">Pre-analyzed strengths & blind spots</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {jury.framings.map(f => (
                  <div key={f.framing} className="bg-surface border border-edge rounded-lg p-5">
                    <div className="font-medium text-ink mb-3">{f.framing}</div>
                    <div className="text-xs font-mono uppercase tracking-wider text-correct mb-1.5">Strengths</div>
                    <ul className="space-y-1.5 mb-4">
                      {f.strengths.map((s, i) => (
                        <li key={i} className="text-sm text-ink-secondary flex gap-2"><span className="text-correct mt-0.5">+</span><span>{s}</span></li>
                      ))}
                    </ul>
                    <div className="text-xs font-mono uppercase tracking-wider text-wrong mb-1.5">Blind spots</div>
                    <ul className="space-y-1.5">
                      {f.blindSpots.map((s, i) => (
                        <li key={i} className="text-sm text-ink-secondary flex gap-2"><span className="text-wrong mt-0.5">−</span><span>{s}</span></li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>
            <section>
              <h3 className="font-semibold text-ink mb-3">The balanced synthesis to propose</h3>
              <div className={`border rounded-lg p-5 bg-raised/50 border-s2/20 mb-4`}>
                <div className="flex gap-3">
                  <Quote size={18} className={`${juryAccent} flex-shrink-0`} />
                  <p className="text-ink leading-relaxed italic">{jury.thesis}</p>
                </div>
              </div>
              <div className="space-y-3">
                {jury.synthesis.map((s, i) => (
                  <div key={i} className="bg-surface border border-edge rounded-lg px-5 py-4">
                    <div className="font-medium text-ink mb-1">{i + 1}. {s.title}</div>
                    <p className="text-sm text-ink-secondary leading-relaxed">{s.detail}</p>
                  </div>
                ))}
              </div>
              <div className={`border rounded-lg p-5 bg-raised/50 border-s2/20 mt-4`}>
                <div className="flex gap-3">
                  <Megaphone size={18} className={`${juryAccent} flex-shrink-0`} />
                  <div>
                    <div className="text-xs font-mono uppercase tracking-wider text-ink-muted mb-1.5">Closing line</div>
                    <p className="text-ink leading-relaxed italic">{jury.closing}</p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        )
      case 'spar': return <SparringDrill />
      default:
        return (
          <div className="space-y-8 animate-fade-in">
            <div className="bg-surface border border-edge rounded-lg p-6">
              <div className="text-xs font-mono uppercase tracking-wider text-glow mb-2">The motion</div>
              <p className="text-xl text-ink font-semibold leading-relaxed mb-4">"{motion}"</p>
              <p className="text-sm text-ink-secondary leading-relaxed">{scenario}</p>
            </div>

            <section>
              <h3 className="font-semibold text-ink mb-3 flex items-center gap-2"><Timer size={16} className="text-glow" /> Format (25–30 min)</h3>
              <div className="bg-surface border border-edge rounded-lg overflow-hidden">
                <table className="w-full text-sm">
                  <tbody>
                    {timetable.map(t => (
                      <tr key={t.activity} className="border-b border-edge last:border-0">
                        <td className="px-4 py-3 font-mono text-glow whitespace-nowrap align-top">{t.time}</td>
                        <td className="px-4 py-3 text-ink align-top">{t.activity}</td>
                        <td className="px-4 py-3 text-ink-muted">{t.action}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            <section>
              <h3 className="font-semibold text-ink mb-3 flex items-center gap-2"><BookMarked size={16} className="text-glow" /> The stat card - memorize</h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {statCard.map(s => (
                  <div key={s.label} className="bg-surface border border-edge rounded-lg px-4 py-3.5">
                    <div className="text-xs text-ink-muted mb-1">{s.label}</div>
                    <div className="text-lg font-mono text-glow font-semibold">{s.value}</div>
                    {s.detail && <div className="text-xs text-ink-muted mt-1">{s.detail}</div>}
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h3 className="font-semibold text-ink mb-3">Vocabulary that signals preparation</h3>
              <div className="space-y-2">
                {vocab.map(v => (
                  <div key={v.term} className="bg-surface border border-edge rounded-lg px-4 py-3 text-sm">
                    <span className="text-ink font-medium">{v.term}</span>
                    <span className="text-ink-muted"> - {v.meaning}</span>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h3 className="font-semibold text-ink mb-3">Delivery tactics</h3>
              <ol className="space-y-2.5">
                {tactics.map((t, i) => (
                  <li key={i} className="flex gap-3 text-sm text-ink-secondary bg-surface border border-edge rounded-lg px-4 py-3 leading-relaxed">
                    <span className="font-mono text-glow flex-shrink-0">{i + 1}.</span>
                    <span>{t}</span>
                  </li>
                ))}
              </ol>
            </section>
          </div>
        )
    }
  }, [tab])

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <div className="mb-8 animate-fade-in">
        <h1 className="text-3xl font-bold text-ink mb-2">Debate Trainer</h1>
        <p className="text-ink-secondary">Ageing as burden vs ageing as resource - prepare all three roles; you won't know yours until class.</p>
      </div>
      <div className="flex flex-wrap gap-2 mb-8">
        {tabs.map(({ id, label, icon: Icon }) => (
          <button
            key={id}
            onClick={() => setTab(id)}
            className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              tab === id
                ? 'bg-glow-dim text-glow border border-glow/20'
                : 'bg-surface text-ink-muted border border-edge hover:text-ink'
            }`}
          >
            <Icon size={15} /> {label}
          </button>
        ))}
      </div>
      {content}
    </div>
  )
}
