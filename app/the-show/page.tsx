import Link from 'next/link'
import type { Metadata } from 'next'
import SiteHeader from '@/components/SiteHeader'
import SiteFooter from '@/components/SiteFooter'
import Avatar from '@/components/Avatar'

export const metadata: Metadata = {
  title: 'The Show',
  description: 'AI is changing work. Why this podcast exists, and who it is for.',
}

const DIFFERENTIATORS = [
  { n: '01', title: 'Operators on the mic', line: 'Guests who ship, invest and hire, not influencers reading the news.' },
  { n: '02', title: 'Names that matter', line: 'Founders, CIOs, investors and operators across Google, 3one4, G2C and the field.' },
  { n: '03', title: 'Long answers, real ones', line: 'Hiring, leadership, enterprise AI, healthcare, defence. Substance over headlines.' },
  { n: '04', title: 'Out of the studio', line: 'The show extends to campus: workshops, the 60-day challenge, ViCodathon.' },
]

export default function TheShowPage() {
  return (
    <main id="main">
      <SiteHeader />

      <section className="mx-auto max-w-6xl px-5 sm:px-8 pt-10 sm:pt-14 pb-12 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        <div className="lg:col-span-7">
          <p className="text-sm text-ink-3">The show</p>
          <h1 className="mt-2 font-display font-bold text-ink leading-[1.0] tracking-[-0.02em] text-5xl sm:text-7xl">Why this<br />show exists.</h1>
          <p className="mt-5 text-xl text-ink-2 max-w-[42ch] leading-snug">AI is changing work. That deserves better questions than most interviews ask.</p>
          <p className="mt-4 text-ink-2 max-w-[52ch] leading-relaxed">
            ABTalksOnAI is Anil Bajpai&rsquo;s podcast. He sits down with the founders, investors and operators doing the work and lets the conversation run long enough to get past the rehearsed answers.
          </p>
          <Link href="/conversations" className="mt-6 inline-flex items-center min-h-[52px] px-6 rounded-control bg-ink text-paper text-base font-semibold hover:bg-ink-2 transition-colors duration-150">
            Watch the show
          </Link>
        </div>
        <div className="lg:col-span-4 flex lg:justify-center">
          <div className="border border-ink/10 rounded-card p-8 text-center">
            <Avatar name="Anil Bajpai" size="lg" />
            <p className="mt-4 font-display font-semibold text-xl text-ink">Anil Bajpai</p>
            <p className="text-sm text-ink-3 mt-0.5">Founder, your host</p>
          </div>
        </div>
      </section>

      <figure className="border-t border-ink/10">
        <blockquote className="mx-auto max-w-4xl px-5 sm:px-8 py-12 sm:py-16 text-center">
          <p className="font-display font-semibold text-ink text-3xl sm:text-5xl leading-[1.1] tracking-[-0.015em]">
            Long answers.<br />Better questions.
          </p>
          <figcaption className="mt-5 text-sm text-ink-3">The rule of the room</figcaption>
        </blockquote>
      </figure>

      <section className="border-t border-ink/10 bg-paper-2">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 py-14 sm:py-20">
          <h2 className="font-display font-semibold text-ink text-4xl sm:text-5xl leading-[1.02] tracking-[-0.015em]">What makes it different?</h2>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-8 gap-x-8 border-t border-ink/10 pt-8">
            {DIFFERENTIATORS.map((d) => (
              <div key={d.n}>
                <p className="font-display text-lg font-medium text-ink-3 tabular-nums">{d.n}</p>
                <h3 className="mt-2 font-display text-xl font-semibold text-ink leading-tight">{d.title}</h3>
                <p className="mt-1.5 text-sm text-ink-2 leading-relaxed">{d.line}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-ink/10 bg-ink text-paper">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 py-14 sm:py-16 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <p className="text-sm text-paper/55">Stay close</p>
            <h2 className="mt-2 font-display font-bold text-5xl sm:text-6xl leading-[1.0] tracking-[-0.02em]">Be part of<br />the conversation.</h2>
          </div>
            <span className="shrink-0 inline-flex items-center min-h-[52px] px-6 rounded-control bg-paper text-ink text-base font-semibold cursor-default" title="Placeholder link in this unofficial redesign">
              Subscribe on YouTube (placeholder)
            </span>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}
