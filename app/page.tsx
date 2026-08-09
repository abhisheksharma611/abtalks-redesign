import Link from 'next/link'
import { Flame, Github, Linkedin, Zap, Trophy, Users, ChevronRight, Star, ArrowRight } from 'lucide-react'
import { stats, testimonials } from '@/data/mockData'

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center">
            <Flame className="w-5 h-5 text-white" />
          </div>
          <span className="text-lg font-bold gradient-text">ABTalks</span>
        </Link>
        <div className="hidden sm:flex items-center gap-6 text-sm text-slate-300">
          <a href="#how-it-works" className="hover:text-primary-400 transition-colors">How it Works</a>
          <a href="#testimonials" className="hover:text-primary-400 transition-colors">Success Stories</a>
          <a href="#stats" className="hover:text-primary-400 transition-colors">Stats</a>
        </div>
        <Link
          href="/dashboard"
          className="px-4 py-2 bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-500 hover:to-primary-600 rounded-lg text-sm font-medium transition-all duration-200 glow-purple"
        >
          Go to Dashboard
        </Link>
      </div>
    </nav>
  )
}

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 px-4 sm:px-6 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary-500/8 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-900/20 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center animate-fade-in">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-xs sm:text-sm text-primary-300 mb-6">
          <Zap className="w-3.5 h-3.5" />
          <span>60-Day Coding Challenge for Indian Students</span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold leading-tight mb-6">
          Build <span className="gradient-text">Every Day</span>.
          <br />
          Get <span className="gradient-text">Noticed</span>.
        </h1>

        <p className="text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto mb-8 leading-relaxed">
          Pick a track. Build something daily. Share your proof of work on GitHub & LinkedIn.
          Join <span className="text-primary-400 font-semibold">{stats.totalStudents.toLocaleString()}+ students</span> building consistency and landing their dream jobs.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/dashboard"
            className="group px-8 py-3.5 bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-500 hover:to-primary-600 rounded-xl text-base font-semibold transition-all duration-300 glow-purple-strong flex items-center gap-2"
          >
            Start Your Streak
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
          <a
            href="#how-it-works"
            className="px-8 py-3.5 glass rounded-xl text-base font-medium text-slate-300 hover:text-white transition-colors"
          >
            See How It Works
          </a>
        </div>

        {/* Trust badges */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-sm text-slate-500">
          <div className="flex items-center gap-1.5">
            <Github className="w-4 h-4" />
            <span>GitHub Commits</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Linkedin className="w-4 h-4" />
            <span>LinkedIn Posts</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Trophy className="w-4 h-4" />
            <span>{stats.placementRate}% Placement Rate</span>
          </div>
        </div>
      </div>
    </section>
  )
}

function HowItWorks() {
  const steps = [
    { step: '01', title: 'Pick Your Track', desc: 'Choose from Full-Stack, Frontend, Backend, or DSA. Start from scratch or level up.', icon: '🎯' },
    { step: '02', title: 'Build Daily', desc: 'Each day brings a new challenge. Build it, push it to GitHub, and share on LinkedIn.', icon: '⚡' },
    { step: '03', title: 'Stay Consistent', desc: 'Maintain your streak. Build in public. Let recruiters notice your consistency.', icon: '🔥' },
    { step: '04', title: 'Get Placed', desc: 'Your public profile speaks louder than a resume. Land interviews through your work.', icon: '🚀' },
  ]

  return (
    <section id="how-it-works" className="py-20 sm:py-28 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">How It Works</h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">Four simple steps to transform your coding journey and get placed.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <div key={i} className="gradient-border p-6 rounded-2xl hover:scale-[1.02] transition-transform duration-300">
              <div className="text-3xl mb-4">{s.icon}</div>
              <div className="text-primary-500 text-xs font-bold mb-2">{s.step}</div>
              <h3 className="text-lg font-semibold mb-2">{s.title}</h3>
              <p className="text-sm text-slate-400 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Stats() {
  const statItems = [
    { value: `${stats.totalStudents.toLocaleString()}+`, label: 'Active Students' },
    { value: `${stats.totalSubmissions.toLocaleString()}+`, label: 'Submissions' },
    { value: `${stats.placementRate}%`, label: 'Placement Rate' },
    { value: `${stats.averageStreak} days`, label: 'Avg Streak' },
  ]

  return (
    <section id="stats" className="py-20 sm:py-28 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="glass rounded-3xl p-8 sm:p-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {statItems.map((s, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl sm:text-4xl font-bold gradient-text mb-2">{s.value}</div>
                <div className="text-sm text-slate-400">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function Testimonials() {
  return (
    <section id="testimonials" className="py-20 sm:py-28 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Success Stories</h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">Students who built consistently and landed their dream jobs.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className="glass rounded-2xl p-6 hover:border-primary-500/30 transition-colors">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-sm text-slate-300 mb-4 leading-relaxed">&ldquo;{t.text}&rdquo;</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center text-xs font-bold">
                  {t.avatar}
                </div>
                <div>
                  <div className="text-sm font-medium">{t.name}</div>
                  <div className="text-xs text-slate-500">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function CTA() {
  return (
    <section className="py-20 sm:py-28 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto text-center">
        <div className="gradient-border p-8 sm:p-12 rounded-3xl">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Ready to Start Your 60-Day Journey?</h2>
          <p className="text-slate-400 text-lg mb-8 max-w-xl mx-auto">
            Join thousands of students building consistency, one commit at a time.
          </p>
          <Link
            href="/dashboard"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-500 hover:to-primary-600 rounded-xl text-base font-semibold transition-all duration-300 glow-purple-strong"
          >
            Go to Dashboard
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="border-t border-slate-800 py-8 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-md bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center">
            <Flame className="w-3.5 h-3.5 text-white" />
          </div>
          <span className="text-sm font-semibold gradient-text">ABTalks</span>
        </div>
        <p className="text-xs text-slate-500">© 2026 ABTalks. 60-Day Coding Challenge. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default function LandingPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <HowItWorks />
      <Stats />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  )
}
