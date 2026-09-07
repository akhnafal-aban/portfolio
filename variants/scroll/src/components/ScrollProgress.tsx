import { useRef } from 'react'
import { gsap, ScrollTrigger, useGSAP } from '@/lib/motion'
import { prefersReducedMotion } from '@/lib/motion'

export function ScrollProgress() {
  const bar = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      if (prefersReducedMotion() || !bar.current) return
      gsap.set(bar.current, { scaleX: 0, transformOrigin: 'left center' })
      gsap.to(bar.current, {
        scaleX: 1,
        ease: 'none',
        scrollTrigger: {
          start: 0,
          end: () => ScrollTrigger.maxScroll(window),
          scrub: 0.3,
        },
      })
    },
    { scope: bar },
  )

  return (
    <div className="fixed top-0 left-0 right-0 z-[70] h-[2px] bg-ink-line/60">
      <div ref={bar} className="h-full w-full bg-accent" />
    </div>
  )
}
