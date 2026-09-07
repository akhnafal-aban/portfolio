import { cn } from '@/lib/cn'

export function SlideShell({
  index,
  total,
  label,
  children,
  className,
}: {
  index: number
  total: number
  label: string
  children: React.ReactNode
  className?: string
}) {
  return (
    <section
      className={cn(
        'relative h-[100dvh] w-screen flex-shrink-0 overflow-hidden',
        'flex flex-col justify-center px-6 sm:px-12 lg:px-20',
        className,
      )}
    >
      <div className="pointer-events-none absolute left-6 top-6 sm:left-12 sm:top-10 lg:left-20 lg:top-12 font-mono text-xs tracking-widest text-mute-2">
        {label}
      </div>
      <div className="pointer-events-none absolute right-6 top-6 sm:right-12 sm:top-10 lg:right-20 lg:top-12 font-mono text-xs tracking-widest text-mute-2">
        {String(index + 1).padStart(2, '0')}
        <span className="text-line"> / </span>
        {String(total).padStart(2, '0')}
      </div>
      <div className="mx-auto w-full max-w-5xl">{children}</div>
    </section>
  )
}

export function Kicker({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-5 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.25em] text-amber">
      <span className="h-px w-8 bg-amber/60" />
      {children}
    </div>
  )
}

export function Arrow({ dir }: { dir: 'left' | 'right' }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-5 w-5"
    >
      {dir === 'left' ? <path d="M15 18l-6-6 6-6" /> : <path d="M9 18l6-6-6-6" />}
    </svg>
  )
}
