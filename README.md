# ABTalksOnAI — Redesign (unofficial)

> Problem Statement 1: Reimagine the ABTalks platform for the ABTalks Vibe Code Hackathon 2026.
>
> **Unofficial redesign concept. Not affiliated with, or endorsed by, ABTalksOnAI. Not deployed; not in any portfolio. All brand assets and marks belong to their owners.**

A (fictional-era) redesign concept of the ABTalksOnAI podcast rebuilt in "Workbench": warm paper, warm ink, one ember signal, Khand + Archivo, hairlines instead of cards and shadows.

## Routes

| Route | What it is |
|-------|------------|
| `/` | Home, type-led hero with a new-episode card, initials voices grid |
| `/the-show` | Why the show exists, four differences, host block |
| `/conversations` | Episode index, working search, topic filter, three-way sort (53 entries) |
| `/guests` | Guest directory (48 names derived from the dataset), familiar voices, suggest-a-guest form |
| `/meet-anil` | The host, initials avatar, bio, published stats |
| `/campus` | The story (podcast → 60-day challenge → campus), workshop brief, event notes |

## Tech

Next.js 16 (App Router, static prerender) · TypeScript · Tailwind CSS 3 · Lucide icons. No backend, no database. Episode data lives in `data/content.ts` (facts only: titles, guests, durations, topics).

## Quick start

```bash
npm install
npm run build
npx next start -p 8000    # serves http://localhost:8000
```

Dev: `npm run dev`

## IP position (2026-11-09)

- Episode **facts** (titles, guests, durations, topics) are not copyrightable and are kept as an index; the links were removed. Nothing here navigates to ABTalksOnAI's properties.
- No ABTalksOnAI assets are in this repository or referenced: no logo (wordmark is set in our type), no photographs (initials avatars), no copy of theirs (rewritten in our words), no thumbnails (text-only cards).
- Every button that referenced their properties is an inert placeholder labelled as such (subscribe, YouTube, LinkedIn, community, campus enquiry; the guest-suggestion form is a disabled demo that drafts but sends nothing).
- The footer notice and metadata mark this page as an unofficial redesign concept for the ABTalks Vibe Code Hackathon 2026. If ABTalksOnAI objects, this page comes down.

## Provenance

Built 2026-11-09 from a full reverse-engineering of the public abtalks.in site (now documented in git history; sponsor imagery exists only inside the single local branch commit dated 2026-11-09, never pushed). See PROMPTS.md for the complete log and the IP decision history.

## License

Built for the ABTalks Vibe Code Hackathon 2026.
