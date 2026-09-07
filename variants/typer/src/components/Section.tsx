import type { ReactNode } from 'react'
import { useReveal } from '@/lib/useReveal'
import { cn } from '@/lib/utils'

type SectionProps = {
  id: string
  label: string
  title: string
  blurb?: string
  children: ReactNode
  className?: string
}

export function Section({
  id,
  label,
  title,
  blurb,
  children,
  className,
}: SectionProps) {
  const ref = useReveal<HTMLDivElement>()

  return (
    <section
      id={id}
      className="mx-auto max-w-4xl scroll-mt-20 px-5 py-20"
    >
      <div ref={ref} className={cn('reveal', className)}>
        <div className="mb-8 flex items-baseline gap-3">
          <span className="font-mono text-xs text-accent">{label}</span>
          <span className="h-px flex-1 bg-border-subtle" />
        </div>
        <h2 className="font-sans text-2xl font-semibold tracking-tight text-text-primary sm:text-3xl">
          {title}
        </h2>
        {blurb && (
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-text-secondary">
            {blurb}
          </p>
        )}
        <div className="mt-8">{children}</div>
      </div>
    </section>
  )
}
