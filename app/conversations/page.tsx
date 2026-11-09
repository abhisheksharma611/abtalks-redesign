import type { Metadata } from 'next'
import SiteHeader from '@/components/SiteHeader'
import SiteFooter from '@/components/SiteFooter'
import ConversationsBrowser from '@/components/ConversationsBrowser'

export const metadata: Metadata = {
  title: 'Conversations',
  description: 'Every ABTalksOnAI conversation in one place. Search by guest, topic or question.',
}

export default function ConversationsPage() {
  return (
    <main id="main">
      <SiteHeader />
      <section className="mx-auto max-w-6xl px-5 sm:px-8 pt-10 sm:pt-14 pb-16">
        <p className="text-sm text-ink-3">The conversations</p>
        <h1 className="mt-2 font-display font-bold text-ink leading-[1.0] tracking-[-0.02em] text-5xl sm:text-7xl">Find your next<br />conversation.</h1>
        <p className="mt-4 text-ink-2 text-lg max-w-[46ch]">Explore the video archive by guest, topic or question.</p>
        <div className="mt-8">
          <ConversationsBrowser />
        </div>
      </section>
      <SiteFooter />
    </main>
  )
}
