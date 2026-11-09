'use client'

import { useEffect } from 'react'
import { TriangleAlert } from 'lucide-react'

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <main id="main" className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <TriangleAlert className="w-10 h-10 text-accent-ink mx-auto mb-4" strokeWidth={1.5} aria-hidden="true" />
        <h1 className="font-display text-3xl font-semibold text-ink tracking-[-0.015em]">Something went wrong</h1>
        <p className="mt-2 text-ink-2">The page hit an unexpected error.</p>
        <button
          onClick={reset}
          className="mt-6 inline-flex items-center min-h-[52px] px-6 rounded-control bg-ink text-paper text-sm font-medium hover:bg-ink-2 transition-colors duration-150"
        >
          Try again
        </button>
      </div>
    </main>
  )
}
