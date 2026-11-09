'use client'

import Link from 'next/link'
import { useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'
import { Youtube, Menu } from 'lucide-react'

const LINKS = [
  { href: '/', label: 'Home' },
  { href: '/the-show', label: 'The Show' },
  { href: '/conversations', label: 'Conversations' },
  { href: '/guests', label: 'Our Guests' },
  { href: '/meet-anil', label: 'Meet Anil' },
  { href: '/campus', label: 'Campus' },
]

export default function SiteHeader() {
  const pathname = usePathname()
  const menuRef = useRef<HTMLDetailsElement>(null)

  useEffect(() => {
    menuRef.current?.removeAttribute('open')
  }, [pathname])

  return (
    <header className="sticky top-0 z-[300] bg-paper border-b border-ink/10">
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[500] focus:min-h-11 focus:px-5 focus:py-3 focus:rounded-control focus:bg-ink focus:text-paper focus:text-sm focus:font-medium">
        Skip to main content
      </a>
      <div className="mx-auto max-w-6xl px-5 sm:px-8 h-16 flex items-center justify-between gap-4">
        <Link href="/" aria-label="ABTalksOnAI, home" className="font-display text-2xl font-bold text-ink leading-none tracking-[-0.02em] shrink-0">
          ABTalksOnAI
        </Link>

        <nav aria-label="Main navigation" className="hidden lg:flex items-center gap-6 text-sm text-ink-2">
          {LINKS.map((l) => {
            const active = pathname === l.href
            return (
              <Link
                key={l.href}
                href={l.href}
                aria-current={active ? 'page' : undefined}
                className={`hover:text-ink transition-colors duration-150 ${active ? 'text-ink font-semibold underline underline-offset-8 decoration-2 decoration-accent' : ''}`}
              >
                {l.label}
              </Link>
            )
          })}
        </nav>

        <div className="flex items-center gap-2 shrink-0">
          <span className="hidden sm:inline-flex items-center gap-2 min-h-11 px-4 rounded-control border border-ink/15 text-ink-2 text-sm font-medium cursor-default" title="Placeholder link in this unofficial redesign">
            <Youtube className="w-4 h-4" strokeWidth={1.5} aria-hidden="true" />
            YouTube (placeholder)
          </span>
          <details ref={menuRef} className="lg:hidden relative">
            <summary aria-label="Menu" className="list-none cursor-pointer min-w-11 min-h-11 flex items-center justify-center rounded-control border border-ink/15 text-ink hover:bg-paper-2 transition-colors duration-150">
              <Menu className="w-5 h-5" strokeWidth={1.5} aria-hidden="true" />
            </summary>
            <div className="absolute right-0 mt-2 w-56 rounded-card border border-ink/10 bg-paper p-2 z-[400]">
              {LINKS.map((l) => {
                const active = pathname === l.href
                return (
                  <Link
                    key={l.href}
                    href={l.href}
                    aria-current={active ? 'page' : undefined}
                    className={`block px-3 py-2.5 rounded-control text-sm ${active ? 'bg-paper-2 font-semibold text-ink' : 'text-ink-2 hover:bg-paper-2 hover:text-ink'}`}
                  >
                    {l.label}
                  </Link>
                )
              })}
              <span className="mt-1 flex items-center gap-2 px-3 py-2.5 rounded-control text-sm font-medium border border-ink/15 text-ink-2 cursor-default" title="Placeholder link in this unofficial redesign">
                <Youtube className="w-4 h-4" strokeWidth={1.5} aria-hidden="true" />
                YouTube (placeholder)
              </span>
            </div>
          </details>
        </div>
      </div>
    </header>
  )
}
