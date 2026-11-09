import Link from 'next/link'
import type { Metadata } from 'next'
import { Linkedin } from 'lucide-react'
import SiteHeader from '@/components/SiteHeader'
import SiteFooter from '@/components/SiteFooter'
import Avatar from '@/components/Avatar'

export const metadata: Metadata = {
  title: 'Meet Anil',
  description: 'Anil Bajpai, founder of ABTalksOnAI. Enterprise technology, a curiosity habit, and the show that came from it.',
}

const STATS = [
  { value: '12', label: 'Featured conversations' },
  { value: '51', label: 'Guests in conversation' },
  { value: '3', label: 'Themes, AI at work to human stories' },
]

export default function MeetAnilPage() {
  return (
    <main id="main">
      <SiteHeader />

      <section className="mx-auto max-w-6xl px-5 sm:px-8 pt-10 sm:pt-14 pb-12 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        <div className="lg:col-span-6">
          <p className="text-sm text-ink-3">Meet the host</p>
          <h1 className="mt-2 font-display font-bold text-ink leading-[0.98] tracking-[-0.02em] text-6xl sm:text-8xl">Anil<br />Bajpai.</h1>
          <p className="mt-4 font-display text-2xl font-semibold text-ink-2">Host of the show.</p>
          <p className="mt-4 text-lg text-ink-2 max-w-[46ch] leading-snug">
            Founder of ABTalksOnAI. He came up through enterprise technology, then started asking the questions everyone in the room was skipping.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3">
            <Link
              href="/conversations"
              className="inline-flex items-center min-h-[52px] px-6 rounded-control bg-ink text-paper text-base font-semibold hover:bg-ink-2 transition-colors duration-150"
            >
              Explore the archive
            </Link>
            <span className="inline-flex items-center gap-2 text-base text-ink-3 underline underline-offset-4 decoration-ink/25 cursor-default" title="Placeholder link in this unofficial redesign">
              <Linkedin className="w-5 h-5" strokeWidth={1.5} aria-hidden="true" />
              LinkedIn (placeholder)
            </span>
          </div>
        </div>
        <div className="lg:col-span-6 flex lg:justify-center">
          <div className="border border-ink/10 rounded-card p-10 text-center">
            <Avatar name="Anil Bajpai" size="lg" />
            <p className="mt-5 font-display font-semibold text-2xl text-ink">Anil Bajpai</p>
            <p className="text-sm text-ink-3 mt-1">Founder of ABTalksOnAI</p>
          </div>
        </div>
      </section>

      <section className="border-t border-ink/10">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 py-12 sm:py-16 grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-7 space-y-5 text-lg text-ink-2 leading-relaxed max-w-[62ch]">
            <p>
              Anil founded ABTalksOnAI to make the AI conversation honest. Guests are founders, investors and operators, people who have bet their work on the answers they give on camera.
            </p>
            <p>
              His format is simple: ask the real question, then stay quiet long enough to hear the real answer. The show&rsquo;s archive is the proof that it works.
            </p>
          </div>
          <div className="lg:col-span-5 lg:border-l lg:border-ink/10 lg:pl-10 flex flex-col justify-center">
            <p className="font-display font-semibold text-ink text-3xl leading-[1.15] tracking-[-0.01em]">The room&rsquo;s rule: long questions, longer answers.</p>
            <p className="mt-4 text-sm text-ink-3">How each episode opens</p>
          </div>
        </div>
      </section>

      <section className="border-t border-ink/10 bg-paper-2">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 py-12">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-y-8 gap-x-10">
            {STATS.map((s) => (
              <div key={s.label} className="border-t border-ink/10 pt-4">
                <p className="font-display font-bold text-6xl text-ink leading-none tabular-nums">{s.value}</p>
                <p className="mt-2 text-sm text-ink-3 max-w-[28ch]">{s.label}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-xs text-ink-3">Figures as published by ABTalksOnAI.</p>
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
