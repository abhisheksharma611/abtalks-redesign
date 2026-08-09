import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Flame, ChevronLeft, CheckCircle2, Clock, Zap, Github, Linkedin, ExternalLink, AlertCircle, Send } from 'lucide-react'
import { allChallengeDays, student } from '@/data/mockData'

function Navbar() {
  return (
    <nav className="sticky top-0 z-50 glass">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
        <Link href="/dashboard" className="flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors">
          <ChevronLeft className="w-4 h-4" />
          <span>Back to Dashboard</span>
        </Link>
        <Link href="/" className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center">
            <Flame className="w-4 h-4 text-white" />
          </div>
          <span className="text-sm font-bold gradient-text">ABTalks</span>
        </Link>
      </div>
    </nav>
  )
}

function DifficultyBadge({ difficulty }: { difficulty: string }) {
  const colors = {
    beginner: 'bg-green-500/20 text-green-300 border-green-500/30',
    intermediate: 'bg-yellow-500/20 text-yellow-300 border-yellow-500/30',
    advanced: 'bg-red-500/20 text-red-300 border-red-500/30',
  }
  return (
    <span className={`text-xs px-2.5 py-1 rounded-full border ${colors[difficulty as keyof typeof colors]}`}>
      {difficulty}
    </span>
  )
}

function TypeBadge({ type }: { type: string }) {
  const colors = {
    build: 'bg-blue-500/20 text-blue-300 border-blue-500/30',
    learn: 'bg-purple-500/20 text-purple-300 border-purple-500/30',
    ship: 'bg-orange-500/20 text-orange-300 border-orange-500/30',
    setup: 'bg-slate-500/20 text-slate-300 border-slate-500/30',
  }
  const icons = { build: '🔨', learn: '📚', ship: '🚀', setup: '⚙️' }
  return (
    <span className={`text-xs px-2.5 py-1 rounded-full border ${colors[type as keyof typeof colors]}`}>
      {icons[type as keyof typeof icons]} {type}
    </span>
  )
}

export default async function DayPage({ params }: { params: Promise<{ dayNumber: string }> }) {
  const { dayNumber } = await params
  const day = parseInt(dayNumber)
  const challenge = allChallengeDays.find(d => d.dayNumber === day)

  if (!challenge) {
    notFound()
  }

  const existingSubmission = student.submissions.find(s => s.day === day)

  return (
    <main className="min-h-screen pb-12">
      <Navbar />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 pt-6">
        {/* Day Header */}
        <div className="mb-8 animate-slide-up">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-xs px-2.5 py-1 rounded-full bg-primary-500/20 text-primary-300 border border-primary-500/30">
              Day {challenge.dayNumber} of 60
            </span>
            <DifficultyBadge difficulty={challenge.difficulty} />
            <TypeBadge type={challenge.type} />
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold mb-3">{challenge.title}</h1>
          <p className="text-slate-400 text-lg leading-relaxed">{challenge.description}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Requirements */}
            <div className="glass rounded-2xl p-6">
              <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-primary-400" />
                Requirements
              </h2>
              <ul className="space-y-3">
                {challenge.requirements.map((req, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary-500/20 border border-primary-500/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-[10px] font-bold text-primary-300">{i + 1}</span>
                    </div>
                    <span className="text-sm text-slate-300">{req}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tools */}
            <div className="glass rounded-2xl p-6">
              <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <Zap className="w-5 h-5 text-primary-400" />
                Tools You&apos;ll Use
              </h2>
              <div className="flex flex-wrap gap-2">
                {challenge.tools.map((tool, i) => (
                  <span key={i} className="px-3 py-1.5 rounded-lg bg-slate-800/50 border border-slate-700/50 text-sm text-slate-300">
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            {/* Submission Form */}
            <div className="glass rounded-2xl p-6 glow-purple">
              <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <Send className="w-5 h-5 text-primary-400" />
                Submit Proof of Work
              </h2>

              {existingSubmission ? (
                <div className="p-4 rounded-xl bg-green-500/10 border border-green-500/20">
                  <div className="flex items-center gap-2 text-green-300 mb-2">
                    <CheckCircle2 className="w-5 h-5" />
                    <span className="font-medium">Already Submitted!</span>
                  </div>
                  <p className="text-sm text-slate-400 mb-3">You submitted this day on {existingSubmission.date}. Status: <span className="text-green-300 capitalize">{existingSubmission.status}</span></p>
                  <div className="flex flex-wrap gap-3">
                    <a href={existingSubmission.githubUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-xs text-primary-300 hover:text-primary-200">
                      <Github className="w-3.5 h-3.5" /> View GitHub
                    </a>
                    <a href={existingSubmission.linkedinUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-xs text-primary-300 hover:text-primary-200">
                      <Linkedin className="w-3.5 h-3.5" /> View LinkedIn
                    </a>
                  </div>
                </div>
              ) : (
                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-1.5">
                      GitHub Repository / Commit URL
                    </label>
                    <div className="relative">
                      <Github className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                      <input
                        type="url"
                        placeholder="https://github.com/yourusername/day-14"
                        className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-800/50 border border-slate-700/50 text-sm text-slate-200 placeholder:text-slate-600 focus:outline-none focus:border-primary-500/50 focus:ring-1 focus:ring-primary-500/20 transition-all"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-1.5">
                      LinkedIn Post URL
                    </label>
                    <div className="relative">
                      <Linkedin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                      <input
                        type="url"
                        placeholder="https://linkedin.com/posts/yourusername_day14"
                        className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-800/50 border border-slate-700/50 text-sm text-slate-200 placeholder:text-slate-600 focus:outline-none focus:border-primary-500/50 focus:ring-1 focus:ring-primary-500/20 transition-all"
                      />
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="w-full py-3 bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-500 hover:to-primary-600 rounded-xl text-sm font-semibold transition-all duration-300 glow-purple flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    Submit Proof of Work
                  </button>
                  <p className="text-xs text-slate-500 text-center flex items-center justify-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    Make sure your GitHub repo is public and LinkedIn post is visible
                  </p>
                </form>
              )}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Progress */}
            <div className="glass rounded-2xl p-6">
              <h3 className="font-semibold mb-4">Your Progress</h3>
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-slate-400">Days Completed</span>
                  <span className="font-medium">{student.completedDays}/{student.totalDays}</span>
                </div>
                <div className="w-full h-2 rounded-full bg-slate-800">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-primary-500 to-primary-600 transition-all duration-500"
                    style={{ width: `${(student.completedDays / student.totalDays) * 100}%` }}
                  />
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-slate-400">Current Streak</span>
                  <span className="font-medium flex items-center gap-1">
                    <Flame className="w-3.5 h-3.5 text-orange-400" />
                    {student.currentStreak} days
                  </span>
                </div>
              </div>
            </div>

            {/* Previous submissions */}
            <div className="glass rounded-2xl p-6">
              <h3 className="font-semibold mb-4">Recent Submissions</h3>
              <div className="space-y-3">
                {student.submissions.slice(0, 3).map((sub, i) => (
                  <div key={i} className="flex items-center justify-between p-3 rounded-xl bg-slate-800/30 border border-slate-700/30">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-lg bg-primary-500/20 flex items-center justify-center text-[10px] font-bold text-primary-300">
                        D{sub.day}
                      </div>
                      <div>
                        <div className="text-xs font-medium">Day {sub.day}</div>
                        <div className="text-[10px] text-slate-500">{sub.date}</div>
                      </div>
                    </div>
                    <span className={`text-[10px] px-2 py-0.5 rounded-full ${
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

            {/* Tips */}
            <div className="glass rounded-2xl p-6">
              <h3 className="font-semibold mb-3 flex items-center gap-2">
                <Clock className="w-4 h-4 text-primary-400" />
                Pro Tips
              </h3>
              <ul className="space-y-2 text-xs text-slate-400">
                <li className="flex items-start gap-2">
                  <span className="text-primary-400 mt-0.5">•</span>
                  <span>Write a meaningful commit message, not just &quot;update&quot;</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary-400 mt-0.5">•</span>
                  <span>Tag ABTalks in your LinkedIn post for visibility</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary-400 mt-0.5">•</span>
                  <span>Add a README with screenshots of your work</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary-400 mt-0.5">•</span>
                  <span>Engage with other students&apos; posts to build community</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
