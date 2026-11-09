import Link from 'next/link'
import SiteHeader from '@/components/SiteHeader'
import SiteFooter from '@/components/SiteFooter'
import Avatar from '@/components/Avatar'
import { LATEST, FEATURED_VOICES } from '@/data/content'

export default function HomePage() {
  return (
    <main id="main">
      <SiteHeader />

      {/* Hero: copy + a live episode card, no borrowed artwork */}
      <section className="mx-auto max-w-6xl px-5 sm:px-8 pt-10 sm:pt-16 pb-14 sm:pb-20 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        <div className="lg:col-span-6">
          <p className="text-sm text-ink-3">An AI podcast with Anil Bajpai</p>
          <h1 className="mt-3 font-display font-bold text-ink leading-[0.98] tracking-[-0.02em] text-6xl sm:text-7xl">
            AI, work and<br />the people<br />building it.
          </h1>
          <p className="mt-5 text-lg text-ink-2 max-w-[46ch] leading-snug">
            Anil Bajpai&rsquo;s podcast on what AI does to jobs, startups and the people doing the work.
          </p>
          <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3">
            <Link
              href="/conversations"
              className="inline-flex items-center min-h-[52px] px-6 rounded-control bg-ink text-paper text-base font-semibold hover:bg-ink-2 transition-colors duration-150"
            >
              Explore the archive
            </Link>
            <Link href="/meet-anil" className="text-base text-ink-2 underline underline-offset-4 decoration-ink/30 hover:decoration-ink hover:text-ink transition-[text-decoration-color,color] duration-150">
              Meet the host
            </Link>
          </div>
        </div>

        <Link
          href="/conversations"
          aria-label={`See the archive: ${LATEST.title}`}
          className="lg:col-span-6 block group"
        >
          <div className="rounded-card bg-ink text-paper p-6 sm:p-8 aspect-[4/3] flex flex-col justify-between transition-colors duration-200 group-hover:bg-ink-2">
            <div className="flex items-center justify-between gap-4 text-xs text-paper/60">
              <span>NEW EPISODE</span>
              <span className="tabular-nums">{LATEST.duration}</span>
            </div>
            <div>
              <p className="font-display font-semibold text-3xl sm:text-4xl leading-[1.08] tracking-[-0.015em]">{LATEST.title}</p>
              <p className="mt-3 text-sm text-paper/70">With Anil Bajpai, founder and host</p>
            </div>
            <span className="inline-flex items-center gap-2 text-sm font-medium text-paper/80 group-hover:text-paper transition-colors duration-150">
              See the archive
            </span>
          </div>
        </Link>
      </section>

      {/* Voices from the show */}
      <section className="border-t border-ink/10 bg-paper-2">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 py-14 sm:py-20">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-sm text-ink-3">Guests from the archive</p>
              <h2 className="mt-1 font-display font-semibold text-ink text-4xl sm:text-5xl leading-[1.02] tracking-[-0.015em]">Voices on the show</h2>
            </div>
            <Link href="/conversations" className="text-sm font-medium text-accent-ink underline underline-offset-4 decoration-accent-ink/40 hover:decoration-accent-ink">
              Explore all episodes
            </Link>
          </div>
          <ul className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {FEATURED_VOICES.map((p) => (
              <li key={p.name} className="border border-ink/10 rounded-card bg-paper p-5 text-center">
                <div className="flex justify-center"><Avatar name={p.name} size="md" /></div>
                <p className="mt-3 font-medium text-ink leading-tight text-sm">{p.name}</p>
                <p className="text-xs text-ink-3 leading-snug mt-1">{p.note}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Latest episode archive teaser */}
      <section className="border-t border-ink/10">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 py-14 sm:py-20 grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5">
            <h2 className="font-display font-bold text-ink text-4xl sm:text-6xl leading-[1.0] tracking-[-0.02em]">The archive<br />remembers.</h2>
          </div>
          <div className="lg:col-span-7">
            <p className="text-ink-2 text-lg max-w-[56ch] leading-relaxed">
              Every conversation stays on the record. Founders, investors, operators. Search the archive by guest, topic or question, and press play on the ones that matter to you.
            </p>
            <Link href="/conversations" className="mt-6 inline-flex items-center min-h-[52px] px-6 rounded-control bg-ink text-paper text-base font-semibold hover:bg-ink-2 transition-colors duration-150">
              Explore all episodes
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}
