import { Link } from 'react-router-dom'
import { BookOpen, Scale, FlaskConical, ClipboardCheck, ArrowRight, CalendarDays } from 'lucide-react'
import { sessions } from '../data/topics'
import { definitions } from '../data/definitions'
import { groupA, groupB, rebuttals } from '../data/debate'
import { questions } from '../data/quiz'
import { deadlines } from '../data/project'

const cards = [
  {
    to: '/topics',
    icon: BookOpen,
    title: 'Topics & Glossary',
    description: 'Healthcare landscape, financing, value, data ecosystem and analytics — organized by lecture segment, plus a searchable glossary',
    count: sessions.reduce((sum, s) => sum + s.topics.length, 0) + definitions.length,
    unit: 'entries',
  },
  {
    to: '/debate',
    icon: Scale,
    title: 'Debate Trainer',
    description: 'The ageing debate: full cases for Proposition, Opposition and Policy Jury, stat card, tactics, and a rebuttal sparring drill',
    count: groupA.args.length + groupB.args.length + rebuttals.length,
    unit: 'arguments & rebuttals',
  },
  {
    to: '/project',
    icon: FlaskConical,
    title: 'BRFSS Group Project',
    description: 'Step-by-step project playbook: dataset, scope, topic options, roles, rubrics and deadlines',
    count: deadlines.length,
    unit: 'deadlines tracked',
  },
  {
    to: '/quiz',
    icon: ClipboardCheck,
    title: 'Practice Quiz',
    description: 'MCQ bank covering every lecture topic with explanations — built for Quiz 1 and Quiz 2 prep',
    count: questions.length,
    unit: 'questions',
  },
] as const

function nextDeadline(): { date: string; what: string } | null {
  const now = new Date()
  for (const d of deadlines) {
    const dt = new Date(d.date + 'T23:59:59')
    if (dt >= now) return { date: d.date, what: d.what.split(' — ')[0] }
  }
  return null
}

export default function Home() {
  const next = nextDeadline()
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <div className="text-center mb-12 animate-fade-in">
        <div className="inline-block mb-4">
          <span className="text-xs font-mono text-glow bg-glow-dim px-3 py-1 rounded-full border border-glow/20">
            SMU MITB
          </span>
        </div>
        <h1 className="text-4xl font-bold text-ink mb-2 tracking-tight">
          🩺 ISSS623 HealthStack
        </h1>
        <p className="text-lg text-glow font-medium mb-6 font-mono tracking-wide">
          Applied Data Science in Healthcare
        </p>
        <p className="text-ink-secondary max-w-2xl mx-auto leading-relaxed">
          Study companion for SMU ISSS623: the Singapore healthcare landscape,
          health data ecosystem, analytics value chain, the ageing debate, and
          the 2024 BRFSS predictive-modelling group project.
        </p>
        {next && (
          <div className="mt-6 inline-flex items-center gap-2 text-sm text-ink-secondary bg-surface border border-edge rounded-full px-4 py-2">
            <CalendarDays size={16} className="text-glow" />
            <span>
              Next deadline: <span className="text-ink font-medium">{next.what}</span>{' '}
              <span className="font-mono text-glow">{next.date}</span>
            </span>
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {cards.map(({ to, icon: Icon, title, description, count, unit }, i) => (
          <Link
            key={to}
            to={to}
            className="group bg-surface border border-edge rounded-lg p-6 hover:border-glow/30 hover:bg-raised transition-all duration-200 animate-fade-in"
            style={{ animationDelay: `${i * 80}ms`, animationFillMode: 'both' }}
          >
            <div className="flex items-start gap-4">
              <div className="p-2.5 bg-glow-dim rounded-lg text-glow group-hover:bg-glow/15 transition-colors duration-200">
                <Icon size={24} />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <h2 className="text-lg font-semibold text-ink">{title}</h2>
                  <ArrowRight
                    size={16}
                    className="text-ink-faint group-hover:text-glow group-hover:translate-x-1 transition-all duration-200"
                  />
                </div>
                <p className="text-sm text-ink-secondary mb-3">{description}</p>
                <span className="text-xs font-medium text-glow bg-glow-dim px-2.5 py-1 rounded-full font-mono border border-glow/10">
                  {count} {unit}
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
