import type { Metadata } from 'next'
import SiteHeader from '@/components/SiteHeader'
import SiteFooter from '@/components/SiteFooter'
import GuestDirectory from '@/components/GuestDirectory'
import SuggestGuest from '@/components/SuggestGuest'
import Avatar from '@/components/Avatar'
import { FAMILIAR_VOICES } from '@/data/content'

export const metadata: Metadata = {
  title: 'Our Guests',
  description: 'Every voice on the show, with the episode that introduced them.',
}

export default function GuestsPage() {
  return (
    <main id="main">
      <SiteHeader />

      <section className="mx-auto max-w-6xl px-5 sm:px-8 pt-10 sm:pt-14">
        <p className="text-sm text-ink-3">Our guests</p>
        <h1 className="mt-2 font-display font-bold text-ink leading-[1.0] tracking-[-0.02em] text-5xl sm:text-7xl">Every voice<br />on the show.</h1>
        <p className="mt-4 text-lg text-ink-2 max-w-[46ch]">Founders, investors and operators, in their own words.</p>
      </section>

      <section className="border-t border-ink/10 mt-10 sm:mt-14">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 py-10 sm:py-12">
          <h2 className="font-display font-semibold text-ink text-3xl sm:text-4xl tracking-[-0.015em]">The directory</h2>
          <p className="mt-1 text-ink-3">Every guest in the archive, and the conversation they had.</p>
          <div className="mt-6">
            <GuestDirectory />
          </div>
        </div>
      </section>

      <section className="border-t border-ink/10 bg-paper-2">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 py-12 sm:py-16">
          <h2 className="font-display font-semibold text-ink text-4xl sm:text-5xl tracking-[-0.015em]">Familiar voices</h2>
          <ul className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {FAMILIAR_VOICES.map((p) => (
              <li key={p.name} className="border border-ink/10 rounded-card bg-paper p-5 text-center">
                <div className="flex justify-center"><Avatar name={p.name} size="md" /></div>
                <p className="mt-3 font-medium text-ink leading-tight text-sm">{p.name}</p>
                <p className="text-xs text-ink-3 leading-snug mt-1">{p.note}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="suggest" className="border-t border-ink/10">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 py-14 sm:py-20 grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5">
            <p className="text-sm text-ink-3">The shortlist</p>
            <h2 className="mt-2 font-display font-bold text-ink text-4xl sm:text-6xl leading-[1.0] tracking-[-0.02em]">Your guest<br />pick.</h2>
            <p className="mt-4 text-ink-2">A name, a reason, the question you want answered.</p>
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <SuggestGuest />
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}
