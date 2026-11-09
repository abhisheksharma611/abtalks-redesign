'use client'

import { useMemo, useState } from 'react'
import { Search, X } from 'lucide-react'
import { episodes, type Topic } from '@/data/content'

const CHIPS: Array<{ label: string; topic: Topic | 'all' }> = [
  { label: 'All', topic: 'all' },
  { label: 'Human stories', topic: 'Human stories' },
  { label: 'AI & work', topic: 'AI & work' },
  { label: 'Startups & investing', topic: 'Startups' },
  { label: 'Archive', topic: 'From the archive' },
  { label: 'New releases', topic: 'New releases' },
]

type Sort = 'latest' | 'shortest' | 'longest'

const SORT_LABELS: Record<Sort, string> = {
  latest: 'Latest first',
  shortest: 'Shortest first',
  longest: 'Longest first',
}

const TOPIC_LABELS: Record<Topic, string> = {
  'Human stories': 'Human stories',
  'AI & work': 'AI & work',
  'Startups': 'Startups',
  'From the archive': 'From the archive',
  'New releases': 'New releases',
}

export default function ConversationsBrowser() {
  const [query, setQuery] = useState('')
  const [topic, setTopic] = useState<Topic | 'all'>('all')
  const [sort, setSort] = useState<Sort>('latest')

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    let list = episodes.filter((e) => {
      if (topic !== 'all' && e.topic !== topic) return false
      if (!q) return true
      return [e.guest, e.title, TOPIC_LABELS[e.topic]].some((f) => f.toLowerCase().includes(q))
    })
    if (sort === 'shortest') list = [...list].sort((a, b) => (a.seconds || Infinity) - (b.seconds || Infinity))
    if (sort === 'longest') list = [...list].sort((a, b) => (b.seconds || 0) - (a.seconds || 0))
    return list
  }, [query, topic, sort])

  return (
    <div>
      <div className="flex flex-col sm:flex-row sm:items-center gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-ink-3" strokeWidth={1.5} aria-hidden="true" />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Guest, topic or question"
            aria-label="Search conversations"
            className="w-full pl-11 pr-10 py-3 rounded-control bg-paper-2 border border-ink/15 text-ink placeholder:text-ink-3 focus:border-ink/40"
          />
          {query && (
            <button onClick={() => setQuery('')} aria-label="Clear search" className="absolute right-2 top-1/2 -translate-y-1/2 min-w-11 min-h-11 flex items-center justify-center text-ink-3 hover:text-ink">
              <X className="w-4 h-4" strokeWidth={1.5} aria-hidden="true" />
            </button>
          )}
        </div>
        <label className="flex items-center gap-2 text-sm text-ink-2 shrink-0">
          <span className="sr-only">Sort conversations</span>
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value as Sort)}
            className="py-3 pl-3 pr-8 rounded-control bg-paper-2 border border-ink/15 text-sm text-ink focus:border-ink/40"
          >
            {(Object.keys(SORT_LABELS) as Sort[]).map((s) => (
              <option key={s} value={s}>{SORT_LABELS[s]}</option>
            ))}
          </select>
        </label>
      </div>

      <div className="mt-5 flex flex-wrap items-center gap-2" role="group" aria-label="Filter by topic">
        {CHIPS.map((chip) => {
          const active = topic === chip.topic
          return (
            <button
              key={chip.topic}
              aria-pressed={active}
              onClick={() => setTopic(chip.topic)}
              className={`min-h-11 px-4 rounded-control text-sm border transition-colors duration-150 ${active ? 'bg-ink text-paper border-ink' : 'bg-paper border-ink/15 text-ink-2 hover:text-ink hover:border-ink/30'}`}
            >
              {chip.label}
            </button>
          )
        })}
        <p aria-live="polite" className="ml-auto text-sm text-ink-3 tabular-nums">{filtered.length} conversation{filtered.length === 1 ? '' : 's'}</p>
      </div>

      {filtered.length === 0 ? (
        <div className="mt-14 text-center">
          <p className="font-display text-2xl font-semibold text-ink">Nothing matches “{query}”</p>
          <p className="mt-2 text-ink-3">Try a guest name, a topic, or a question you care about.</p>
          <button onClick={() => { setQuery(''); setTopic('all') }} className="mt-5 min-h-11 px-5 rounded-control bg-ink text-paper text-sm font-medium hover:bg-ink-2 transition-colors duration-150">
            Clear search and filters
          </button>
        </div>
      ) : (
        <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((e) => (
            <li key={e.id}>
              <article className="block border border-ink/10 rounded-card p-5 h-full">
                <p className="text-[11px] text-ink-3 tabular-nums">{TOPIC_LABELS[e.topic]}{e.duration ? `, ${e.duration}` : ''}</p>
                <h2 className="mt-1.5 font-display font-semibold text-ink leading-snug tracking-[-0.01em]">{e.title}</h2>
                <p className="mt-2 text-sm text-ink-3">{e.guest || 'With Anil Bajpai'}</p>
                <p className="mt-4 text-xs text-ink-3">Demo placeholder, video link removed</p>
              </article>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
