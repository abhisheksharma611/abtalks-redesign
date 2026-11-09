import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://abtalks-redesign-five-tan.vercel.app'),
  title: {
    default: 'ABTalksOnAI Redesign | ViCoDathon 2026',
    template: '%s | ViCoDathon 2026',
  },
  description: 'AI, work and the people building it. An unofficial redesign of the ABTalksOnAI podcast, built for ViCoDathon 2026, India’s AI Vibe Coding Hackathon. Not affiliated with ABTalksOnAI.',
}

export const viewport: Viewport = {
  themeColor: 'oklch(97% 0.011 90)',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://api.fontshare.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://api.fontshare.com/v2/css?f[]=khand@500,600,700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://www.googleapis.com/css2?family=Archivo:wght@400..700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
