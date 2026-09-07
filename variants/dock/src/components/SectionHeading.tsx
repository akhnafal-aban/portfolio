import { cn } from '@/lib/utils'

export function SectionHeading({
  index,
  title,
  sub,
}: {
  index: string
  title: string
  sub: string
}) {
  return (
    <header className={cn('mb-10')}>
      <div className="mb-2 flex items-baseline gap-3">
        <span className="font-mono text-sm text-accent">{index}</span>
        <span className="h-px w-8 bg-line" />
        <span className="font-mono text-xs uppercase tracking-[0.16em] text-ink-soft/50">
          {sub}
        </span>
      </div>
      <h2 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">
        {title}
      </h2>
    </header>
  )
}
