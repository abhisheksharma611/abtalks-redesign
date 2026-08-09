import Link from 'next/link'
import { Flame, Trophy, Calendar, Target, Zap, CheckCircle2, Clock, TrendingUp, ChevronRight, Star, Shield } from 'lucide-react'
import { student } from '@/data/mockData'

function Navbar() {
  return (
    <nav className="sticky top-0 z-50 glass">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center">
            <Flame className="w-5 h-5 text-white" />
          </div>
          <span className="text-lg font-bold gradient-text">ABTalks</span>
        </Link>
        <div className="flex items-center gap-3">
          <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-lg glass text-sm">
            <Flame className="w-4 h-4 text-orange-400" />
            <span className="font-semibold">{student.currentStreak}</span>
            <span className="text-slate-400">day streak</span>
          </div>
          <div className="w-9 h-9 rounded-full bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center text-sm font-bold">
            {student.name.split(' ').map(n => n[0]).join('')}
          </div>
        </div>
      </div>
    </nav>
  )
}

function StreakCard() {
  const completionRate = Math.round((student.completedDays / student.totalDays) * 100)

  return (
    <div className="glass rounded-2xl p-6 glow-purple">
      <div className="flex items-start justify-between mb-4">
        <div>
          <p className="text-sm text-slate-400 mb-1">Current Streak</p>
          <div className="flex items-end gap-2">
            <span className="text-5xl font-bold gradient-text fire-animation">{student.currentStreak}</span>
            <span className="text-lg text-slate-400 mb-1">days</span>
          </div>
          <p className="text-xs text-slate-500 mt-2">Longest: {student.longestStreak} days</p>
        </div>
        <div className="w-16 h-16 relative">
          <svg className="w-16 h-6 -rotate-90" viewBox="0 0 64 64">
            <circle cx="32" cy="32" r="28" fill="none" stroke="#1e293b" strokeWidth="4" />
            <circle
              cx="32" cy="32" r="28" fill="none"
              stroke="url(#gradient)" strokeWidth="4"
              strokeDasharray={`${completionRate * 1.76} 176`}
              strokeLinecap="round"
              className="animate-progress-ring"
            />
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#8b5cf6" />
                <stop offset="100%" stopColor="#6d28d9" />
              </linearGradient>
            </defs>
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-xs font-bold">{completionRate}%</span>
          </div>
        </div>
      </div>

      {/* Streak freeze */}
      {student.streakFreezeAvailable && (
        <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-blue-500/10 border border-blue-500/20 text-xs text-blue-300">
          <Shield className="w-3.5 h-3.5" />
          <span>Streak Freeze available — use it if you miss a day!</span>
        </div>
      )}
    </div>
  )
}

function TodayTask() {
  return (
    <div className="glass rounded-2xl p-6">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Target className="w-5 h-5 text-primary-400" />
          <h3 className="font-semibold">Today&apos;s Task</h3>
        </div>
        <span className="text-xs px-2 py-1 rounded-full bg-primary-500/20 text-primary-300">Day 14</span>
      </div>
      <h4 className="text-lg font-medium mb-2">Deploy Your First Full-Stack App</h4>
      <p className="text-sm text-slate-400 mb-4">
        Take one of your previous projects and deploy it to the internet. Learn about environment variables, build processes, and hosting platforms.
      </p>
      <Link
        href="/day/14"
        className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-500 hover:to-primary-600 rounded-lg text-sm font-medium transition-all"
      >
        View & Submit
        <ChevronRight className="w-4 h-4" />
      </Link>
    </div>
  )
}

function WeeklyHeatmap() {
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

  return (
    <div className="glass rounded-2xl p-6">
      <div className="flex items-center gap-2 mb-4">
        <Calendar className="w-5 h-5 text-primary-400" />
        <h3 className="font-semibold">This Week</h3>
      </div>
      <div className="grid grid-cols-7 gap-2">
        {days.map((day, i) => {
          const activity = student.weeklyActivity[i]
          return (
            <div key={i} className="text-center">
              <div className="text-xs text-slate-500 mb-2">{day}</div>
              <div
                className={`w-full aspect-square rounded-lg flex items-center justify-center text-xs font-medium ${
                  activity?.submitted
                    ? 'bg-primary-500/30 text-primary-300 border border-primary-500/40'
                    : activity?.completed
                    ? 'bg-yellow-500/20 text-yellow-300 border border-yellow-500/30'
                    : 'bg-slate-800/50 text-slate-600 border border-slate-700/50'
                }`}
              >
                {activity?.submitted ? (
                  <CheckCircle2 className="w-4 h-4" />
                ) : (
                  activity?.dayNumber || '-'
                )}
              </div>
            </div>
          )
        })}
      </div>
      <div className="flex items-center gap-4 mt-4 text-xs text-slate-500">
        <div className="flex items-center gap-1.5">
          <div className="w-3 h-3 rounded bg-primary-500/30 border border-primary-500/40" />
          <span>Submitted</span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-3 h-3 rounded bg-yellow-500/20 border border-yellow-500/30" />
          <span>Done</span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-3 h-3 rounded bg-slate-800/50 border border-slate-700/50" />
          <span>Pending</span>
        </div>
      </div>
    </div>
  )
}

function QuickStats() {
  const stats = [
    { icon: Zap, label: 'Total Commits', value: student.completedDays.toString(), color: 'text-yellow-400' },
    { icon: TrendingUp, label: 'Completion', value: `${Math.round((student.completedDays / student.totalDays) * 100)}%`, color: 'text-green-400' },
    { icon: Clock, label: 'Days Left', value: (student.totalDays - student.completedDays).toString(), color: 'text-blue-400' },
    { icon: Trophy, label: 'Achievements', value: student.achievements.filter(a => a.unlockedAt).length.toString(), color: 'text-purple-400' },
  ]

  return (
    <div className="grid grid-cols-2 gap-4">
      {stats.map((s, i) => (
        <div key={i} className="glass rounded-xl p-4">
          <s.icon className={`w-5 h-5 ${s.color} mb-2`} />
          <div className="text-2xl font-bold">{s.value}</div>
          <div className="text-xs text-slate-400">{s.label}</div>
        </div>
      ))}
    </div>
  )
}

function Achievements() {
  return (
    <div className="glass rounded-2xl p-6">
      <div className="flex items-center gap-2 mb-4">
        <Trophy className="w-5 h-5 text-primary-400" />
        <h3 className="font-semibold">Achievements</h3>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {student.achievements.map((a) => (
          <div
            key={a.id}
            className={`p-3 rounded-xl text-center transition-all ${
              a.unlockedAt
                ? 'bg-primary-500/10 border border-primary-500/30'
                : 'bg-slate-800/30 border border-slate-700/30 opacity-50'
            }`}
          >
            <div className="text-2xl mb-1">{a.icon}</div>
            <div className="text-xs font-medium">{a.title}</div>
            <div className="text-[10px] text-slate-500 mt-0.5">{a.description}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

function RecentSubmissions() {
  return (
    <div className="glass rounded-2xl p-6">
      <div className="flex items-center gap-2 mb-4">
        <Star className="w-5 h-5 text-primary-400" />
        <h3 className="font-semibold">Recent Submissions</h3>
      </div>
      <div className="space-y-3">
        {student.submissions.map((sub, i) => (
          <div key={i} className="flex items-center justify-between p-3 rounded-xl bg-slate-800/30 border border-slate-700/30">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-primary-500/20 flex items-center justify-center text-xs font-bold text-primary-300">
                D{sub.day}
              </div>
              <div>
                <div className="text-sm font-medium">Day {sub.day}</div>
                <div className="text-xs text-slate-500">{sub.date}</div>
              </div>
            </div>
            <span className={`text-xs px-2 py-1 rounded-full ${
              sub.status === 'approved' ? 'bg-green-500/20 text-green-300' :
              sub.status === 'pending' ? 'bg-yellow-500/20 text-yellow-300' :
              'bg-red-500/20 text-red-300'
            }`}>
              {sub.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function DashboardPage() {
  return (
    <main className="min-h-screen pb-8">
      <Navbar />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-6">
        {/* Welcome */}
        <div className="mb-6 animate-slide-up">
          <h1 className="text-2xl sm:text-3xl font-bold">
            Welcome back, <span className="gradient-text">{student.name.split(' ')[0]}</span> 👋
          </h1>
          <p className="text-sm text-slate-400 mt-1">
            {student.todaySubmitted ? "You've submitted today's task. Great job!" : "Don't break the chain. Submit today's proof of work!"}
          </p>
        </div>

        {/* Grid layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left column */}
          <div className="lg:col-span-2 space-y-6">
            <StreakCard />
            <TodayTask />
            <WeeklyHeatmap />
          </div>

          {/* Right column */}
          <div className="space-y-6">
            <QuickStats />
            <Achievements />
            <RecentSubmissions />
          </div>
        </div>
      </div>
    </main>
  )
}
