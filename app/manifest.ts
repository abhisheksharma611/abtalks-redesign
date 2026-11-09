import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'ABTalksOnAI, a redesign concept',
    short_name: 'ABTalksOnAI',
    description: 'An unofficial redesign of the ABTalksOnAI podcast, built for the ABTalks Vibe Code Hackathon 2026.',
    start_url: '/',
    display: 'browser',
    background_color: '#f8f5ed',
    theme_color: '#1f1610',
    icons: [
      { src: '/icon.png', sizes: '512x512', type: 'image/png' },
      { src: '/apple-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  }
}
