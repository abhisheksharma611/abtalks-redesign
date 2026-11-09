import type { Metadata } from 'next'
import SiteHeader from '@/components/SiteHeader'
import SiteFooter from '@/components/SiteFooter'

export const metadata: Metadata = {
  title: 'Campus',
  description: 'Workshops, ViCodathon and the 60-day challenge. What the show learned from industry, pointed at students.',
}

const CHAPTERS = [
  { n: '01', label: 'The beginning', title: 'It started on the mic.', body: 'Anil brought CIOs, CTOs and AI leaders on the show to talk about what transformation actually looks like inside real companies.', beat: 'Start listening.' },
  { n: '02', label: 'The question', title: 'What does proof look like?', body: 'Industry wanted AI talent it could verify. Students wanted to know what to build to become that talent.', beat: 'Need meets ambition.' },
  { n: '03', label: 'The response', title: 'Ship it. Post it.', body: 'A 60-day challenge turned learning into visible evidence: public projects, daily commits, progress posted where employers look.', beat: 'Proof you can audit.' },
  { n: '04', label: 'Beyond the show', title: 'Take the room to campus.', body: 'Workshops, challenges and ViCodathon carry that proof instinct into colleges, placement cells and student clubs.', beat: 'From questions to reps.' },
]

const TAKEAWAYS = [
  { n: '01', title: 'Industry reality', line: 'What changed in AI hiring, and what employers actually value now.' },
  { n: '02', title: 'A useful project', line: 'A selection checklist for picking a project worth showing.' },
  { n: '03', title: 'AI in action', line: 'A live workflow, from information to decision to action.' },
  { n: '04', title: 'Proof you can show', line: 'Projects, documentation and public work as evidence.' },
  { n: '05', title: 'A next step', line: 'A target role, a project to build, a plan for the gap.' },
]

const SCENES = [
  { n: '01', tag: 'In the room', caption: 'Students at ABES Engineering College in the audience for an ABTalksOnAI session.' },
  { n: '02', tag: 'On stage', caption: 'Anil on the podium, bringing the industry conversation onto campus.' },
  { n: '03', tag: 'ViCodathon', caption: 'Students presenting their work on stage at ViCodathon.' },
]

export default function CampusPage() {
  return (
    <main id="main">
      <SiteHeader />

      <section className="mx-auto max-w-6xl px-5 sm:px-8 pt-10 sm:pt-14 pb-12">
        <p className="text-sm text-ink-3">Campus</p>
        <h1 className="mt-2 font-display font-bold text-ink leading-[1.0] tracking-[-0.02em] text-5xl sm:text-7xl">Workshops.<br />ViCodathon.<br />The 60-day challenge.</h1>
        <p className="mt-5 text-lg text-ink-2 max-w-[56ch] leading-snug">
          The show asks hard questions about AI. Campus turns them into work students can show: a workshop run by the host, a challenge with public commits, a stage in front of an audience.
        </p>
        <span aria-disabled="true" className="mt-6 inline-flex items-center min-h-[52px] px-6 rounded-control bg-ink text-paper text-base font-semibold opacity-85 cursor-default" title="Placeholder action in this unofficial redesign — wire to team@abtalks.in before going live">
          Plan a campus workshop (placeholder)
        </span>
      </section>

      <section className="border-t border-ink/10">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 py-14 sm:py-20">
          <p className="text-sm text-ink-3">How it got here</p>
          <h2 className="mt-2 font-display font-semibold text-ink text-4xl sm:text-6xl leading-[1.0] tracking-[-0.015em]">One conversation.<br />Four moves.</h2>
          <div className="mt-10 border-t border-ink/10">
            {CHAPTERS.map((c) => (
              <div key={c.n} className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-10 py-6 border-b border-ink/10">
                <div className="lg:col-span-3 flex items-baseline gap-4">
                  <span className="font-display text-2xl font-medium text-ink-3 tabular-nums">{c.n}</span>
                  <span className="text-xs text-ink-3">{c.label}</span>
                </div>
                <div className="lg:col-span-9 grid grid-cols-1 md:grid-cols-12 gap-3">
                  <h3 className="md:col-span-4 font-display text-2xl font-semibold text-ink leading-snug tracking-[-0.01em]">{c.title}</h3>
                  <div className="md:col-span-5">
                    <p className="text-ink-2 leading-relaxed">{c.body}</p>
                    <p className="mt-2 text-sm text-ink-3">{c.beat}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-ink-3 cursor-default" title="Placeholder link in this unofficial redesign">
            Browse the community (placeholder)
          </span>
        </div>
      </section>

      <section className="border-t border-ink/10 bg-paper-2">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 py-14 sm:py-20 grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-6">
            <p className="text-sm text-ink-3">From the archive to the classroom</p>
            <h2 className="mt-2 font-display font-bold text-ink text-4xl sm:text-6xl leading-[1.0] tracking-[-0.02em]">Why this<br />workshop?</h2>
            <p className="mt-4 text-ink-2 max-w-[46ch] leading-relaxed">
              Employers hire what they can verify: projects with names on them. This session connects what hiring teams ask for with the work students can put in their folder before the interview.
            </p>
            <p className="mt-6 text-sm text-ink-3 tabular-nums">60 to 90 minutes. Tailored to branch, year and AI exposure.</p>
            <span aria-disabled="true" className="mt-6 inline-flex items-center min-h-[52px] px-6 rounded-control bg-ink text-paper text-base font-semibold opacity-85 cursor-default" title="Placeholder action in this unofficial redesign — wire to team@abtalks.in before going live">
              Plan a campus workshop (placeholder)
            </span>
            <p className="mt-3 text-xs text-ink-3">Share your preferred date, student profile and audience size.</p>
          </div>
          <div className="lg:col-span-6">
            <h3 className="text-sm font-semibold text-ink">What students walk away with</h3>
            <ol className="mt-4 border-t border-ink/10">
              {TAKEAWAYS.map((t) => (
                <li key={t.n} className="grid grid-cols-[auto_1fr] gap-x-4 items-baseline py-3.5 border-b border-ink/10">
                  <span className="font-display text-lg font-medium text-ink-3 tabular-nums">{t.n}</span>
                  <span>
                    <span className="block font-semibold text-ink leading-snug">{t.title}</span>
                    <span className="block text-sm text-ink-2 leading-snug mt-0.5">{t.line}</span>
                  </span>
                </li>
              ))}
            </ol>
            <p className="mt-4 text-xs text-ink-3 leading-relaxed">
              Built for colleges, universities, placement cells and technical societies. An auditorium or seminar hall, projector, audio, internet and a campus coordinator are all it takes.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-ink/10">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 py-14 sm:py-20">
          <p className="text-sm text-ink-3">From our campus events</p>
          <h2 className="mt-2 font-display font-semibold text-ink text-4xl sm:text-6xl leading-[1.0] tracking-[-0.015em]">Ideas become real<br />when the room fills up.</h2>
          <p className="mt-3 text-ink-3 max-w-[52ch]">At ABES Engineering College, as shared in the campus invitation.</p>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6">
            {SCENES.map((s) => (
              <figure key={s.n} className="border border-ink/10 rounded-card bg-paper-2 p-6">
                <p className="font-display text-4xl font-semibold text-ink-3 tabular-nums">{s.n}</p>
                <p className="mt-1 text-xs text-ink-3">{s.tag}</p>
                <figcaption className="mt-4 text-sm text-ink-2 leading-relaxed">{s.caption}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}
