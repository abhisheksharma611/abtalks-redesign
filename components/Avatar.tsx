const initials = (name: string) =>
  name
    .split(' ')
    .filter((p) => /^[A-Za-z]/.test(p))
    .slice(0, 2)
    .map((p) => p[0].toUpperCase())
    .join('')

/** Initials avatar — neutral, ours, no photography. */
export default function Avatar({ name, size = 'md' }: { name: string; size?: 'sm' | 'md' | 'lg' }) {
  const cls =
    size === 'lg'
      ? 'w-28 h-28 text-2xl'
      : size === 'sm'
        ? 'w-11 h-11 text-[11px]'
        : 'w-16 h-16 text-base'
  return (
    <span
      aria-hidden="true"
      className={`${cls} shrink-0 rounded-full bg-ink text-paper font-display font-semibold flex items-center justify-center`}
    >
      {initials(name)}
    </span>
  )
}
