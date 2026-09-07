import { useRef } from 'react'
import { gsap, useGSAP, prefersReducedMotion } from '@/lib/gsap'
import { cn } from '@/lib/utils'

/**
 * Hero name — animates letter-by-letter on load (no scroll).
 * Each letter in a clip-y wrapper, rises from 110% → 0 with stagger.
 */
export function HeroName({ text, className }: { text: string; className?: string }) {
  const ref = useRef<HTMLHeadingElement>(null)
  const letters = text.split('')

  useGSAP(
    () => {
      if (prefersReducedMotion() || !ref.current) return
      const targets = ref.current.querySelectorAll<HTMLElement>('.gsap-letter')
      if (!targets.length) return
      gsap.from(targets, {
        yPercent: 120,
        duration: 0.8,
        ease: 'power4.out',
        stagger: 0.045,
        delay: 0.15,
      })
    },
    { scope: ref },
  )

  return (
    <h1 ref={ref} className={cn(className)}>
      {letters.map((c, i) => (
        <span key={i} className="clip-y">
          <span className="gsap-letter inline-block">{c === ' ' ? '\u00A0' : c}</span>
        </span>
      ))}
    </h1>
  )
}
