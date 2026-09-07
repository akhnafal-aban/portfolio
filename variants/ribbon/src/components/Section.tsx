import { useEffect, useRef, useState, type ReactNode } from 'react'
import { cn } from '@/lib/utils'

export function Section({
  id,
  marker,
  title,
  children,
  className,
}: {
  id: string
  marker: string
  title: string
  children: ReactNode
  className?: string
}) {
  const ref = useRef<HTMLElement | null>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const ob = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setVisible(true)
          ob.disconnect()
        }
      },
      { rootMargin: '-10% 0px -10% 0px', threshold: 0 }
    )
    ob.observe(el)
    return () => ob.disconnect()
  }, [])

  return (
    <section
      id={id}
      ref={ref}
      className={cn('fade-in', visible && 'is-visible', 'scroll-mt-20', className)}
    >
      <header className="flex items-baseline gap-4 mb-8">
        <span className="text-[11px] uppercase tracking-[0.16em] text-[#B91C1C] font-medium tabular-nums">
          {marker}
        </span>
        <h2 className="text-[11px] uppercase tracking-[0.16em] text-[#6b6b6b] font-medium">
          {title}
        </h2>
        <span className="flex-1 h-px bg-[#e5e5e5] ml-2" />
      </header>
      {children}
    </section>
  )
}
