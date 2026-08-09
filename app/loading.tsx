export default function Loading() {
  return (
    <main className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <div className="w-12 h-12 rounded-full border-2 border-primary-500/30 border-t-primary-500 animate-spin mx-auto mb-4" />
        <p className="text-slate-400 text-sm">Loading...</p>
      </div>
    </main>
  )
}
