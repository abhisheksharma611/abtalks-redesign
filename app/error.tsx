'use client'

import { useEffect } from 'react'

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <main className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center">
        <div className="text-6xl mb-4">⚠️</div>
        <h1 className="text-2xl font-bold mb-3">Something went wrong</h1>
        <p className="text-slate-400 text-sm mb-6">{error.message}</p>
        <button
          onClick={reset}
          className="px-6 py-3 bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-500 hover:to-primary-600 rounded-xl text-sm font-semibold transition-all"
        >
          Try Again
        </button>
      </div>
    </main>
  )
}
