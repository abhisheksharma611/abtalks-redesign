'use client'

import { useState } from 'react'
import { guestDirectory } from '@/data/content'

const PAGE = 12

const initials = (name: string) =>
  name
    .split(' ')
    .filter((p) => /^[A-Za-z]/.test(p))
    .slice(0, 2)
    .map((p) => p[0].toUpperCase())
    .join('')

export default function GuestDirectory() {
  const [expanded, setExpanded] = useState(false)
  const shown = expanded ? guestDirectory : guestDirectory.slice(0, PAGE)

  return (
    <div>
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-0 border-t border-ink/10">
        {shown.map((g) => (
          <li key={g.name} className="flex items-center gap-4 py-4 border-b border-ink/10">
            <span aria-hidden="true" className="w-11 h-11 shrink-0 rounded-full bg-ink text-paper text-[11px] font-display font-semibold flex items-center justify-center">
              {initials(g.name)}
            </span>
            <span className="min-w-0">
              <span className="block font-medium text-ink leading-tight">{g.name}</span>
              <span className="block text-sm text-ink-3 leading-snug mt-0.5 line-clamp-2">{g.episode}</span>
            </span>
          </li>
        ))}
      </ul>
      {guestDirectory.length > PAGE && (
        <div className="mt-6 text-center">
          <button
            onClick={() => setExpanded((v) => !v)}
            aria-expanded={expanded}
            className="min-h-11 px-6 rounded-control border border-ink/20 text-sm font-medium text-ink hover:border-ink/40 transition-colors duration-150"
          >
            {expanded ? 'Show fewer voices' : `Explore all ${guestDirectory.length} voices`}
          </button>
        </div>
      )}
    </div>
  )
}
