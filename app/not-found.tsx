import Link from 'next/link'
import { Flame, Home } from 'lucide-react'

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center">
        <div className="text-6xl mb-4">🔍</div>
        <h1 className="text-4xl font-bold gradient-text mb-3">404</h1>
        <p className="text-slate-400 text-lg mb-2">Day not found</p>
        <p className="text-slate-500 text-sm mb-8">This challenge day doesn&apos;t exist yet.</p>
        <Link
          href="/dashboard"
          className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-500 hover:to-primary-600 rounded-xl text-sm font-semibold transition-all glow-purple"
        >
          <Home className="w-4 h-4" />
          Back to Dashboard
        </Link>
      </div>
    </main>
  )
}
