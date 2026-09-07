import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

type SectionProps = {
  id: string
  index: string
  label: string
  children: ReactNode
  className?: string
}

export function Section({ id, index, label, children, className }: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        'border-t border-hairline px-6 py-24 sm:px-10 md:px-16 md:py-32',
        className,
      )}
    >
      <div className="mx-auto max-w-[1280px]">
        <div className="grid grid-cols-12 gap-x-4 sm:gap-x-6">
          <div className="col-span-12 mb-10 md:col-span-2 md:mb-0">
            <div className="flex items-baseline gap-3 md:flex-col md:items-start md:gap-1">
              <span className="t-mono-num text-[11px] font-medium text-accent">
                {index}
              </span>
              <span className="t-label">{label}</span>
            </div>
          </div>
          <div className="col-span-12 md:col-span-10">{children}</div>
        </div>
      </div>
    </section>
  )
}
