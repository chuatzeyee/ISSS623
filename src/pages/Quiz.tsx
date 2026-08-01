import { useEffect, useMemo, useState } from 'react'
import { Check, X, RotateCcw, ListFilter, ClipboardCheck, PenLine, Eye, EyeOff, Timer, FileText } from 'lucide-react'
import { questions } from '../data/quiz'
import { drills } from '../data/drills'
import { codeQuestions } from '../data/quiz_code'
import { quiz1Excluded } from '../data/quiz1_scope'
import { mockSets } from '../data/mockSets'
import type { MockSet } from '../data/types'

function shuffled<T>(arr: readonly T[]): T[] {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

// Quiz 1 scope per prof's announcement: everything up to Lecture 2 SLIDE 68
// (Charlson CI). Exclusions are per-question (quiz1_scope.ts), not per-topic,
// because L2 Segment 2 is split mid-way by the cut-off.
type Scope = 'covered' | 'all'
const inScope = (id: string, scope: Scope) => scope === 'all' || !quiz1Excluded.has(id)

function ShortAnswerDrill({ scope }: { scope: Scope }) {
  const scoped = useMemo(() => drills.filter(d => inScope(d.id, scope)), [scope])
  const topics = useMemo(() => ['All', ...Array.from(new Set(scoped.map(d => d.topic)))], [scoped])
  const [topic, setTopic] = useState('All')
  const [seed, setSeed] = useState(0)
  const pool = useMemo(
    () => shuffled(scoped.filter(d => topic === 'All' || d.topic === topic)),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [scoped, topic, seed],
  )
  const [i, setI] = useState(0)
  const [revealed, setRevealed] = useState(false)
  const d = pool[i % Math.max(pool.length, 1)]
  if (!d) return null
  return (
    <>
      <div className="flex flex-wrap items-center gap-1.5 mb-6">
        <ListFilter size={14} className="text-ink-muted mr-1" />
        {topics.map(t => (
          <button
            key={t}
            onClick={() => { setTopic(t); setI(0); setRevealed(false) }}
            className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${topic === t ? 'bg-glow-dim text-glow border border-glow/20' : 'bg-surface text-ink-muted border border-edge hover:text-ink'}`}
          >
            {t}
          </button>
        ))}
      </div>
      <div className="flex items-center justify-between mb-4 text-sm">
        <span className="font-mono text-ink-muted">Card {(i % pool.length) + 1} of {pool.length} <span className="text-ink-faint">· {d.topic}</span></span>
        <button onClick={() => { setSeed(s => s + 1); setI(0); setRevealed(false) }} className="flex items-center gap-1.5 text-xs text-ink-muted hover:text-ink transition-colors">
          <RotateCcw size={13} /> Shuffle
        </button>
      </div>
      <div className="bg-surface border border-edge rounded-lg p-6 animate-fade-in" key={d.id + String(i)}>
        <div className="text-xs font-mono uppercase tracking-wider text-glow mb-3">Answer in 2-4 written sentences before revealing</div>
        <p className="text-lg text-ink leading-relaxed mb-5">{d.prompt}</p>
        {revealed ? (
          <div className="animate-fade-in mb-5 space-y-3">
            <div className="text-sm text-ink-secondary leading-relaxed bg-raised border border-edge rounded-md px-4 py-3">
              <span className="text-ink font-medium">Model answer: </span>{d.modelAnswer}
            </div>
            <div className="bg-glow-dim/40 border border-glow/15 rounded-md px-4 py-3">
              <div className="text-xs font-mono uppercase tracking-wider text-glow mb-1.5">Marker looks for</div>
              <ul className="space-y-1">
                {d.keyPoints.map((k, idx) => (
                  <li key={idx} className="text-sm text-ink-secondary flex gap-2"><span className="text-glow mt-0.5">✓</span><span>{k}</span></li>
                ))}
              </ul>
            </div>
          </div>
        ) : (
          <div className="mb-5 h-20 flex items-center justify-center border border-dashed border-edge rounded-md">
            <span className="text-xs text-ink-faint">Write your answer down first - recognition is not recall…</span>
          </div>
        )}
        <div className="flex gap-2">
          <button
            onClick={() => setRevealed(r => !r)}
            className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium bg-glow-dim text-glow border border-glow/20 hover:bg-glow/15 transition-colors"
          >
            {revealed ? <EyeOff size={15} /> : <Eye size={15} />}
            {revealed ? 'Hide' : 'Reveal model answer'}
          </button>
          <button
            onClick={() => { setI(n => n + 1); setRevealed(false) }}
            className="px-4 py-2 rounded-lg text-sm font-medium bg-surface text-ink-secondary border border-edge hover:bg-raised transition-colors"
          >
            Next →
          </button>
        </div>
      </div>
    </>
  )
}

const allQuestions = [...questions, ...codeQuestions]

function MockExam() {
  const [setId, setSetId] = useState<number | null>(null)
  const [started, setStarted] = useState(false)
  const [secondsLeft, setSecondsLeft] = useState(45 * 60)
  const [picks, setPicks] = useState<Record<string, number>>({})
  const [selfMarks, setSelfMarks] = useState<Record<string, boolean>>({})
  const [revealed, setRevealed] = useState<Record<string, boolean>>({})
  const [submitted, setSubmitted] = useState(false)

  const set: MockSet | undefined = mockSets.find(s => s.id === setId)
  const mcqs = useMemo(() => (set ? set.mcqIds.map(id => allQuestions.find(q => q.id === id)!).filter(Boolean) : []), [set])
  const dcards = useMemo(() => (set ? set.drillIds.map(id => drills.find(d => d.id === id)!).filter(Boolean) : []), [set])

  useEffect(() => {
    if (!started || submitted) return
    const t = setInterval(() => setSecondsLeft(s => {
      if (s <= 1) { setSubmitted(true); return 0 }
      return s - 1
    }), 1000)
    return () => clearInterval(t)
  }, [started, submitted])

  const reset = () => { setSetId(null); setStarted(false); setSecondsLeft(45 * 60); setPicks({}); setSelfMarks({}); setRevealed({}); setSubmitted(false) }

  if (!set) {
    return (
      <div className="grid sm:grid-cols-2 gap-3 animate-fade-in">
        {mockSets.map(s => (
          <button
            key={s.id}
            onClick={() => setSetId(s.id)}
            className="bg-surface border border-edge rounded-lg p-5 text-left hover:border-glow/30 hover:bg-raised transition-all"
          >
            <div className="font-semibold text-ink mb-1">{s.title}</div>
            <div className="text-sm text-ink-secondary">10 MCQs + 5 short answers · 45 min · same blueprint as the real paper</div>
          </button>
        ))}
        <div className="sm:col-span-2 text-xs text-ink-faint">Sets are non-overlapping and drawn only from the Quiz 1 scope (up to Lecture 2 slide 68). Each set mirrors the real topic mix: 2 code-interpretation, 2 framing/data-design, 2 landscape/financing, 2 ecosystem/analytics, 1 Python, 1 BRFSS.</div>
      </div>
    )
  }

  if (!started) {
    return (
      <div className="bg-surface border border-edge rounded-lg p-6 animate-fade-in">
        <h2 className="text-xl font-bold text-ink mb-2">{set.title}</h2>
        <p className="text-sm text-ink-secondary leading-relaxed mb-4">
          Exam conditions: 45-minute countdown starts when you begin. Part 1 = 10 MCQs (auto-graded).
          Part 2 = 5 structured questions - write each answer on paper or in a doc BEFORE revealing the model answer,
          then honestly self-mark it right or wrong. Score appears when you submit (or when time expires).
        </p>
        <div className="flex gap-2">
          <button onClick={() => setStarted(true)} className="flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium bg-glow-dim text-glow border border-glow/20 hover:bg-glow/15 transition-colors">
            <Timer size={15} /> Start 45:00
          </button>
          <button onClick={reset} className="px-4 py-2 rounded-lg text-sm font-medium bg-surface text-ink-secondary border border-edge hover:bg-raised transition-colors">Back</button>
        </div>
      </div>
    )
  }

  const mcqRight = mcqs.filter(q => picks[q.id] === q.answerIndex).length
  const drillRight = dcards.filter(d => selfMarks[d.id]).length
  const mm = String(Math.floor(secondsLeft / 60)).padStart(2, '0')
  const ss = String(secondsLeft % 60).padStart(2, '0')

  return (
    <div className="animate-fade-in">
      <div className="sticky top-0 z-10 bg-void/95 backdrop-blur-sm py-3 mb-4 flex items-center justify-between border-b border-edge">
        <span className="font-semibold text-ink">{set.title}</span>
        <div className="flex items-center gap-3">
          <span className={`font-mono text-sm px-3 py-1 rounded-full border ${secondsLeft < 300 ? 'text-wrong border-wrong/40 bg-wrong-dim/40' : 'text-glow border-glow/20 bg-glow-dim'}`}>
            <Timer size={13} className="inline mr-1.5 -mt-0.5" />{mm}:{ss}
          </span>
          {!submitted && (
            <button onClick={() => setSubmitted(true)} className="px-4 py-1.5 rounded-full text-xs font-medium bg-s4/10 text-s4 border border-s4/25 hover:bg-s4/20 transition-colors">Submit</button>
          )}
          <button onClick={reset} className="text-xs text-ink-muted hover:text-ink transition-colors">Exit</button>
        </div>
      </div>

      {submitted && (
        <div className="bg-surface border border-glow/30 rounded-lg p-5 mb-6">
          <div className="font-semibold text-ink mb-1">Result</div>
          <p className="text-sm text-ink-secondary">
            Part 1 (MCQ): <span className="text-glow font-mono">{mcqRight}/10</span> ·
            Part 2 (self-marked): <span className="text-glow font-mono">{drillRight}/5</span> ·
            Combined: <span className="text-glow font-mono">{((mcqRight + drillRight * 2) / 20 * 20).toFixed(0)}/20 marks</span>
            <span className="text-ink-faint"> (each MCQ 1%, each structured question 2%)</span>
          </p>
        </div>
      )}

      <h3 className="font-semibold text-ink mb-3">Part 1 - Multiple Choice (10 × 1%)</h3>
      <div className="space-y-4 mb-10">
        {mcqs.map((q, qi) => {
          const picked = picks[q.id]
          return (
            <div key={q.id} className="bg-surface border border-edge rounded-lg p-5">
              <p className={`text-sm text-ink leading-relaxed mb-3 whitespace-pre-line ${q.topic === 'Code Interpretation' ? 'font-mono bg-raised border border-edge rounded-md px-3 py-2.5' : ''}`}>
                <span className="font-mono text-glow mr-2">{qi + 1}.</span>{q.prompt}
              </p>
              <div className="space-y-1.5">
                {q.options.map((opt, idx) => {
                  const isPicked = picked === idx
                  const showResult = submitted
                  const isAnswer = idx === q.answerIndex
                  let cls = isPicked ? 'bg-glow-dim/60 border-glow/40 text-ink' : 'bg-raised border-edge text-ink-secondary hover:border-glow/30'
                  if (showResult) {
                    if (isAnswer) cls = 'bg-correct-dim/60 border-correct/40 text-ink'
                    else if (isPicked) cls = 'bg-wrong-dim/60 border-wrong/40 text-ink'
                    else cls = 'bg-raised border-edge text-ink-faint'
                  }
                  return (
                    <button key={idx} disabled={submitted}
                      onClick={() => setPicks(p => ({ ...p, [q.id]: idx }))}
                      className={`w-full text-left px-3.5 py-2.5 rounded-lg border text-sm transition-colors flex items-start gap-2.5 ${cls}`}>
                      <span className="font-mono text-xs mt-0.5">{String.fromCharCode(65 + idx)}</span>
                      <span className="flex-1">{opt}</span>
                      {showResult && isAnswer && <Check size={15} className="text-correct flex-shrink-0 mt-0.5" />}
                      {showResult && isPicked && !isAnswer && <X size={15} className="text-wrong flex-shrink-0 mt-0.5" />}
                    </button>
                  )
                })}
              </div>
              {submitted && (
                <p className="text-xs text-ink-secondary leading-relaxed mt-3 bg-raised border border-edge rounded-md px-3 py-2">{q.explanation}</p>
              )}
            </div>
          )
        })}
      </div>

      <h3 className="font-semibold text-ink mb-3">Part 2 - Structured Questions (5 × 2%)</h3>
      <div className="space-y-4">
        {dcards.map((d, di) => (
          <div key={d.id} className="bg-surface border border-edge rounded-lg p-5">
            <p className="text-sm text-ink leading-relaxed mb-3">
              <span className="font-mono text-glow mr-2">Q{di + 1}.</span>{d.prompt}
            </p>
            {revealed[d.id] ? (
              <div className="space-y-2.5">
                <div className="text-sm text-ink-secondary leading-relaxed bg-raised border border-edge rounded-md px-3.5 py-2.5">
                  <span className="text-ink font-medium">Model answer: </span>{d.modelAnswer}
                </div>
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-xs text-ink-muted">Self-mark:</span>
                  <button onClick={() => setSelfMarks(m => ({ ...m, [d.id]: true }))}
                    className={`px-3 py-1 rounded-full text-xs font-medium border transition-colors ${selfMarks[d.id] === true ? 'bg-correct-dim/60 text-correct border-correct/40' : 'bg-surface text-ink-muted border-edge hover:text-ink'}`}>
                    Got it right
                  </button>
                  <button onClick={() => setSelfMarks(m => ({ ...m, [d.id]: false }))}
                    className={`px-3 py-1 rounded-full text-xs font-medium border transition-colors ${selfMarks[d.id] === false ? 'bg-wrong-dim/60 text-wrong border-wrong/40' : 'bg-surface text-ink-muted border-edge hover:text-ink'}`}>
                    Missed it
                  </button>
                </div>
              </div>
            ) : (
              <button onClick={() => setRevealed(r => ({ ...r, [d.id]: true }))}
                className="flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-medium bg-glow-dim text-glow border border-glow/20 hover:bg-glow/15 transition-colors">
                <Eye size={13} /> I've written my answer - reveal
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default function Quiz() {
  const [scope, setScope] = useState<Scope>('covered')
  const scopedQuestions = useMemo(() => allQuestions.filter(q => inScope(q.id, scope)), [scope])
  const scopedDrills = useMemo(() => drills.filter(d => inScope(d.id, scope)), [scope])
  const topics = useMemo(() => ['All', ...Array.from(new Set(scopedQuestions.map(q => q.topic)))], [scopedQuestions])
  const [topic, setTopic] = useState('All')
  const [seed, setSeed] = useState(0)
  const pool = useMemo(
    () => shuffled(scopedQuestions.filter(q => topic === 'All' || q.topic === topic)),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [scopedQuestions, topic, seed],
  )
  const [i, setI] = useState(0)
  const [picked, setPicked] = useState<number | null>(null)
  const [score, setScore] = useState({ right: 0, done: 0 })

  const q = pool[i % Math.max(pool.length, 1)]

  const pick = (idx: number) => {
    if (picked !== null) return
    setPicked(idx)
    setScore(s => ({ right: s.right + (idx === q.answerIndex ? 1 : 0), done: s.done + 1 }))
  }

  const next = () => {
    setPicked(null)
    setI(n => n + 1)
  }

  const restart = () => {
    setSeed(s => s + 1)
    setI(0)
    setPicked(null)
    setScore({ right: 0, done: 0 })
  }

  const [mode, setMode] = useState<'mcq' | 'drill' | 'mock'>('mcq')

  if (!q) return null

  return (
    <div className="max-w-3xl mx-auto px-6 py-12">
      <div className="mb-8 animate-fade-in">
        <h1 className="text-3xl font-bold text-ink mb-2">Practice Quiz</h1>
        <p className="text-ink-secondary">Quiz 1 is TOMORROW (1 Aug), at the start of class: Part 1 = 10 MCQs (10%), Part 2 = 5 structured/short-answer questions (10%). 45 min via eLearn - bring laptop + WiFi. Scope: up to Lecture 2 slide 68. No code-writing, but code INTERPRETATION is fair game - see the Code Interpretation topic in MCQ mode.</p>
      </div>

      <div className="flex flex-wrap items-center gap-2 mb-4">
        <button
          onClick={() => setMode('mcq')}
          className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-colors ${mode === 'mcq' ? 'bg-glow-dim text-glow border border-glow/20' : 'bg-surface text-ink-muted border border-edge hover:text-ink'}`}
        >
          <ClipboardCheck size={15} /> MCQ ({scopedQuestions.length})
        </button>
        <button
          onClick={() => setMode('drill')}
          className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-colors ${mode === 'drill' ? 'bg-glow-dim text-glow border border-glow/20' : 'bg-surface text-ink-muted border border-edge hover:text-ink'}`}
        >
          <PenLine size={15} /> Short Answer ({scopedDrills.length})
        </button>
        <button
          onClick={() => setMode('mock')}
          className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-colors ${mode === 'mock' ? 'bg-glow-dim text-glow border border-glow/20' : 'bg-surface text-ink-muted border border-edge hover:text-ink'}`}
        >
          <FileText size={15} /> Mock Exam ({mockSets.length} sets)
        </button>
      </div>

      <div className={`flex flex-wrap items-center gap-2 mb-8 ${mode === 'mock' ? 'hidden' : ''}`}>
        <span className="text-xs text-ink-muted">Scope:</span>
        <button
          onClick={() => { setScope('covered'); setTopic('All'); setI(0); setPicked(null) }}
          className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${scope === 'covered' ? 'bg-s4/10 text-s4 border border-s4/25' : 'bg-surface text-ink-muted border border-edge hover:text-ink'}`}
        >
          Quiz 1 scope (up to L2 slide 68)
        </button>
        <button
          onClick={() => { setScope('all'); setTopic('All'); setI(0); setPicked(null) }}
          className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${scope === 'all' ? 'bg-s4/10 text-s4 border border-s4/25' : 'bg-surface text-ink-muted border border-edge hover:text-ink'}`}
        >
          Everything
        </button>
        {scope === 'covered' && (
          <span className="text-xs text-ink-faint">Quiz 1 cut-off: excludes post-slide-68 L2 content and Lectures 3-4</span>
        )}
      </div>

      {mode === 'mock' ? <MockExam /> : mode === 'drill' ? <ShortAnswerDrill scope={scope} key={scope} /> : (
      <>
      <div className="flex flex-wrap items-center gap-1.5 mb-6">
        <ListFilter size={14} className="text-ink-muted mr-1" />
        {topics.map(t => (
          <button
            key={t}
            onClick={() => { setTopic(t); setI(0); setPicked(null) }}
            className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${topic === t ? 'bg-glow-dim text-glow border border-glow/20' : 'bg-surface text-ink-muted border border-edge hover:text-ink'}`}
          >
            {t}
          </button>
        ))}
      </div>

      <div className="flex items-center justify-between mb-4 text-sm">
        <span className="font-mono text-ink-muted">Q{(i % pool.length) + 1} of {pool.length} <span className="text-ink-faint">· {q.topic}</span></span>
        <div className="flex items-center gap-3">
          <span className="font-mono text-ink-muted">
            <span className="text-correct">{score.right}</span>/{score.done} correct
          </span>
          <button onClick={restart} className="flex items-center gap-1.5 text-xs text-ink-muted hover:text-ink transition-colors">
            <RotateCcw size={13} /> Restart
          </button>
        </div>
      </div>

      <div className="bg-surface border border-edge rounded-lg p-6 animate-fade-in" key={q.id + String(i)}>
        <p className={`text-lg text-ink leading-relaxed mb-5 whitespace-pre-line ${q.topic === 'Code Interpretation' ? 'font-mono text-sm bg-raised border border-edge rounded-md px-4 py-3' : ''}`}>{q.prompt}</p>
        <div className="space-y-2.5 mb-2">
          {q.options.map((opt, idx) => {
            const isPicked = picked === idx
            const isAnswer = idx === q.answerIndex
            let cls = 'bg-raised border-edge text-ink-secondary hover:border-glow/30 hover:text-ink'
            if (picked !== null) {
              if (isAnswer) cls = 'bg-correct-dim/60 border-correct/40 text-ink'
              else if (isPicked) cls = 'bg-wrong-dim/60 border-wrong/40 text-ink'
              else cls = 'bg-raised border-edge text-ink-faint'
            }
            return (
              <button
                key={idx}
                onClick={() => pick(idx)}
                disabled={picked !== null}
                className={`w-full text-left px-4 py-3 rounded-lg border text-sm transition-colors flex items-start gap-3 ${cls}`}
              >
                <span className="font-mono text-xs mt-0.5 flex-shrink-0">{String.fromCharCode(65 + idx)}</span>
                <span className="flex-1">{opt}</span>
                {picked !== null && isAnswer && <Check size={16} className="text-correct flex-shrink-0 mt-0.5" />}
                {picked !== null && isPicked && !isAnswer && <X size={16} className="text-wrong flex-shrink-0 mt-0.5" />}
              </button>
            )
          })}
        </div>
        {picked !== null && (
          <div className="animate-fade-in mt-4">
            <div className="text-sm text-ink-secondary leading-relaxed bg-raised border border-edge rounded-md px-4 py-3 mb-4">
              <span className="text-ink font-medium">Why: </span>{q.explanation}
            </div>
            <button
              onClick={next}
              className="px-5 py-2.5 rounded-lg text-sm font-medium bg-glow-dim text-glow border border-glow/20 hover:bg-glow/15 transition-colors"
            >
              Next question →
            </button>
          </div>
        )}
      </div>
      </>
      )}
    </div>
  )
}
