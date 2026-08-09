import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'ABTalks — 60-Day Coding Challenge',
  description: 'Build something every day. Share your proof of work. Get placed.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-[#0a0a0f] text-slate-100 antialiased">
        {children}
      </body>
    </html>
  )
}
