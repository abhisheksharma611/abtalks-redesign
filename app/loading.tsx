export default function Loading() {
  return (
    <main className="min-h-screen flex items-center justify-center px-4">
      <div role="status" aria-label="Loading" className="w-10 h-10 rounded-full border-2 border-ink/15 border-t-ink animate-spin" />
    </main>
  )
}
