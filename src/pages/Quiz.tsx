import { useMemo, useState } from 'react'
import { Check, X, RotateCcw, ListFilter, ClipboardCheck, PenLine, Eye, EyeOff } from 'lucide-react'
import { questions } from '../data/quiz'
import { drills } from '../data/drills'

function shuffled<T>(arr: readonly T[]): T[] {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

function ShortAnswerDrill() {
  const topics = useMemo(() => ['All', ...Array.from(new Set(drills.map(d => d.topic)))], [])
  const [topic, setTopic] = useState('All')
  const [seed, setSeed] = useState(0)
  const pool = useMemo(
    () => shuffled(drills.filter(d => topic === 'All' || d.topic === topic)),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [topic, seed],
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

export default function Quiz() {
  const topics = useMemo(() => ['All', ...Array.from(new Set(questions.map(q => q.topic)))], [])
  const [topic, setTopic] = useState('All')
  const [seed, setSeed] = useState(0)
  const pool = useMemo(
    () => shuffled(questions.filter(q => topic === 'All' || q.topic === topic)),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [topic, seed],
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

  const [mode, setMode] = useState<'mcq' | 'drill'>('mcq')

  if (!q) return null

  return (
    <div className="max-w-3xl mx-auto px-6 py-12">
      <div className="mb-8 animate-fade-in">
        <h1 className="text-3xl font-bold text-ink mb-2">Practice Quiz</h1>
        <p className="text-ink-secondary">Quiz 1 (1 Aug) is 10 MCQs + 5 short-answer questions, 45 min via eLearn, covering Lectures 1-2. Train both halves here.</p>
      </div>

      <div className="flex gap-2 mb-8">
        <button
          onClick={() => setMode('mcq')}
          className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-colors ${mode === 'mcq' ? 'bg-glow-dim text-glow border border-glow/20' : 'bg-surface text-ink-muted border border-edge hover:text-ink'}`}
        >
          <ClipboardCheck size={15} /> MCQ ({questions.length})
        </button>
        <button
          onClick={() => setMode('drill')}
          className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-colors ${mode === 'drill' ? 'bg-glow-dim text-glow border border-glow/20' : 'bg-surface text-ink-muted border border-edge hover:text-ink'}`}
        >
          <PenLine size={15} /> Short Answer ({drills.length})
        </button>
      </div>

      {mode === 'drill' ? <ShortAnswerDrill /> : (
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
        <p className="text-lg text-ink leading-relaxed mb-5">{q.prompt}</p>
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
