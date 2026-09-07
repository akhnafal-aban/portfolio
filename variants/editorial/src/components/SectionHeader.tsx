import { cn } from '@/lib/utils'

type SectionHeaderProps = {
  number: string
  label: string
  title?: string
  className?: string
}

export function SectionHeader({ number, label, title, className }: SectionHeaderProps) {
  return (
    <header className={cn('mb-10 md:mb-14', className)}>
      <div className="flex items-baseline gap-4">
        <span className="font-display text-accent text-sm md:text-base tabular-nums">{number}</span>
        <span className="label-caps text-ink-muted text-[11px] md:text-xs">{label}</span>
      </div>
      {title ? (
        <h2 className="font-display mt-4 text-3xl md:text-5xl leading-[1.05] tracking-tight text-ink">{title}</h2>
      ) : null}
    </header>
  )
}
