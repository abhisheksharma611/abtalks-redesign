import Link from 'next/link'

const NAV = [
  { href: '/', label: 'Home' },
  { href: '/the-show', label: 'The Show' },
  { href: '/conversations', label: 'Conversations' },
  { href: '/guests', label: 'Our Guests' },
  { href: '/meet-anil', label: 'Meet Anil' },
  { href: '/campus', label: 'Campus' },
]

const SOCIALS = ['YouTube', 'Apple Podcasts', 'LinkedIn', 'Instagram', 'Email']

export default function SiteFooter() {
  return (
    <footer className="border-t border-ink/10">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 py-10 grid grid-cols-1 md:grid-cols-12 gap-8">
        <div className="md:col-span-4">
          <Link href="/" aria-label="ABTalksOnAI, home" className="font-display text-2xl font-bold text-ink leading-none tracking-[-0.02em]">
            ABTalksOnAI
          </Link>
          <p className="mt-3 text-sm text-ink-3">A podcast by ABTalksOnAI. AI, work and the people shaping what comes next.</p>
          <p className="mt-2 text-xs text-ink-3 leading-snug max-w-[36ch]">Unofficial redesign concept built for the ABTalks Vibe Code Hackathon 2026. Not affiliated with or endorsed by ABTalksOnAI. All logos, photos and copy belong to their owners.</p>
        </div>
        <nav aria-label="Footer" className="md:col-span-4 grid grid-cols-2 gap-x-6 gap-y-2 text-sm content-start">
          {NAV.map((l) => (
            <Link key={l.href} href={l.href} className="text-ink-2 hover:text-ink transition-colors duration-150 py-1">
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="md:col-span-4 text-sm">
          <p className="text-ink-3">Everywhere else</p>
          <ul className="mt-2 flex flex-wrap gap-x-5 gap-y-2">
            {SOCIALS.map((label) => (
              <li key={label}>
                <span className="text-ink-3 py-1 inline-block cursor-default" title="Placeholder link in this unofficial redesign">{label} (placeholder)</span>
              </li>
            ))}
          </ul>
          <p className="mt-3 inline-block text-sm text-ink-3 py-1">Community platform (placeholder)</p>
        </div>
      </div>
      <div className="border-t border-ink/10">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 h-12 flex items-center text-xs text-ink-3">
          <p>ABTalksOnAI redesign concept, Vibe Code Hackathon 2026, brand assets belong to their owners</p>
        </div>
      </div>
    </footer>
  )
}
