import { cn } from '@/lib/utils'

/** The ONE marquee strip — tagline scrolling infinitely. Only one per page. */
export function Marquee({
  text,
  className,
}: {
  text: string
  className?: string
}) {
  const repeat = Array.from({ length: 8 })
  return (
    <div
      className={cn(
        'overflow-hidden border-y border-white/15 py-6 select-none',
        className,
      )}
    >
      <div className="marquee-track">
        {repeat.map((_, i) => (
          <span key={i} className="text-5xl md:text-7xl font-black tracking-tight">
            {text}
            <span className="text-accent mx-8">✦</span>
          </span>
        ))}
      </div>
    </div>
  )
}
