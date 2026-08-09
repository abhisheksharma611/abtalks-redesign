# ABTalks — 60-Day Coding Challenge (Redesign)

> Problem Statement 1: Reimagine the ABTalks platform for the ABTalks Vibe Code Hackathon 2026.

## 🚀 Live Demo

**[Add your Vercel/Netlify URL here after deployment]**

## 📱 Screens

| Route | Description |
|-------|-------------|
| `/` | Landing page — first experience for new students |
| `/dashboard` | Student dashboard — streak, today's task, progress |
| `/day/12` | Challenge day — read task, submit proof of work |

## 🛠️ Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Icons:** Lucide React
- **Deployment:** Vercel / Netlify

## 🏃 Quick Start

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Start production server
npm run start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
├── app/
│   ├── page.tsx              ← Landing Page (/)
│   ├── layout.tsx            ← Root layout
│   ├── globals.css           ← Global styles + animations
│   ├── loading.tsx           ← Loading state
│   ├── error.tsx             ← Error boundary
│   ├── not-found.tsx         ← 404 page
│   ├── dashboard/
│   │   └── page.tsx          ← Student Dashboard (/dashboard)
│   └── day/
│       └── [dayNumber]/
│           └── page.tsx      ← Challenge Day (/day/12)
├── data/
│   └── mockData.ts           ← All mocked JSON data
└── PROMPTS.md                ← AI usage log (required for hackathon)
```

## ✨ Key Features

- **Mobile-first design** — optimized for 390px viewport (judging width)
- **Streak Freeze** — thoughtful UX feature to protect streaks
- **Animated progress ring** — visual completion indicator
- **Weekly activity heatmap** — track consistency at a glance
- **Achievement system** — gamified progress tracking
- **Edge case handling** — first day, missed day, empty profile, 404
- **Glass morphism UI** — modern dark theme with purple accents
- **Smooth animations** — fade-in, slide-up, glow effects

## 📝 Route Map

Per hackathon requirements:

```
/
/dashboard
/day/12
```

## 🤖 AI Usage

This project was built using AI-assisted vibe coding. See [PROMPTS.md](./PROMPTS.md) for the complete AI usage log.

## 📄 License

Built for ABTalks Vibe Code Hackathon 2026.
