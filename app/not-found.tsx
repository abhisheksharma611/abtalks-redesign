import Link from 'next/link'
import { SearchX } from 'lucide-react'

export default function NotFound() {
  return (
    <main id="main" className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <SearchX className="w-10 h-10 text-ink-3 mx-auto mb-4" strokeWidth={1.5} aria-hidden="true" />
        <h1 className="font-display text-6xl font-bold text-ink tracking-[-0.02em]">404</h1>
        <p className="mt-2 text-ink-2">That page does not exist.</p>
        <Link
          href="/"
          className="mt-6 inline-flex items-center min-h-[52px] px-6 rounded-control bg-ink text-paper text-sm font-medium hover:bg-ink-2 transition-colors duration-150"
        >
          Back to home
        </Link>
      </div>
    </main>
  )
}
