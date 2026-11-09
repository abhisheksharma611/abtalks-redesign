'use client'

import { useState } from 'react'
import { Send, Copy, Check } from 'lucide-react'

const DEMO_NOTICE = 'Unofficial redesign concept, sending is disabled here. When this goes live, wire the form to the team address.'

export default function SuggestGuest() {
  const [yourName, setYourName] = useState('')
  const [guest, setGuest] = useState('')
  const [reason, setReason] = useState('')
  const [prepared, setPrepared] = useState<string | null>(null)
  const [copied, setCopied] = useState(false)

  const draftBody = (name: string, g: string, why: string) =>
    `Hi ABTalksOnAI,\n\n${name} here. I’d like to suggest ${g} for the show.\n\n${why}\n\nBest,\n${name}`

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setPrepared(draftBody(yourName.trim(), guest.trim(), reason.trim()))
  }

  const preparedDraft = prepared ?? ''
  const copyFallback = async () => {
    try {
      await navigator.clipboard.writeText(preparedDraft)
      setCopied(true)
    } catch {
      setCopied(false)
    }
  }

  const inputClass = 'w-full px-4 py-2.5 rounded-control bg-paper-2 border border-ink/15 text-sm text-ink placeholder:text-ink-3 focus:border-ink/40 transition-[border-color] duration-150'

  if (prepared) {
    return (
      <div role="status" className="border border-ink/10 rounded-card p-6 max-w-xl">
        <p className="font-display font-semibold text-ink">Your email draft is ready</p>
        <p className="mt-1 text-sm text-ink-2">{DEMO_NOTICE} Here is the exact text your email would carry:</p>
        <pre className="mt-3 whitespace-pre-wrap rounded-control bg-paper-2 border border-ink/10 p-4 text-xs text-ink-2">{prepared}</pre>
        <div className="mt-3 flex items-center gap-3">
          <button onClick={copyFallback} className="inline-flex items-center gap-2 min-h-11 px-4 rounded-control border border-ink/20 text-sm font-medium text-ink hover:border-ink/40 transition-colors duration-150">
            {copied ? <Check className="w-4 h-4" strokeWidth={1.5} aria-hidden="true" /> : <Copy className="w-4 h-4" strokeWidth={1.5} aria-hidden="true" />}
            {copied ? 'Copied' : 'Copy draft'}
          </button>
        </div>
      </div>
    )
  }

  return (
    <form onSubmit={onSubmit} className="border border-ink/10 rounded-card p-6 max-w-xl space-y-4">
      <div>
        <label htmlFor="your-name" className="block text-sm font-medium text-ink-2 mb-1.5">Your name</label>
        <input id="your-name" name="name" required maxLength={100} autoComplete="name" value={yourName} onChange={(e) => setYourName(e.target.value)} placeholder="Priya Sharma" className={inputClass} />
      </div>
      <div>
        <label htmlFor="guest-name" className="block text-sm font-medium text-ink-2 mb-1.5">Guest name</label>
        <input id="guest-name" name="guest" required maxLength={100} value={guest} onChange={(e) => setGuest(e.target.value)} placeholder="The person you want to hear on the show" className={inputClass} />
      </div>
      <div>
        <label htmlFor="guest-reason" className="block text-sm font-medium text-ink-2 mb-1.5">What should we explore?</label>
        <textarea id="guest-reason" name="reason" required rows={4} maxLength={2000} value={reason} onChange={(e) => setReason(e.target.value)} placeholder="The question, the work, the reason they belong on ABTalksOnAI" className={inputClass} />
      </div>
      <button type="submit" className="w-full min-h-[52px] bg-ink text-paper rounded-control text-base font-semibold hover:bg-ink-2 transition-colors duration-150 flex items-center justify-center gap-2">
        <Send className="w-4 h-4" strokeWidth={1.5} aria-hidden="true" />
        Prepare the draft
      </button>
      <p className="text-xs text-ink-3">{DEMO_NOTICE}</p>
    </form>
  )
}
