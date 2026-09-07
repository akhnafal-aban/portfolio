import { useRef } from 'react'
import { gsap, ScrollTrigger, useGSAP, prefersReducedMotion } from '@/lib/gsap'
import { cn } from '@/lib/utils'

interface KineticWordsProps {
  text: string
  className?: string
  /** which word indices (0-based) get the accent color */
  accent?: number[]
  /** stagger between words in seconds */
  stagger?: number
  /** animation variant */
  variant?: 'rise' | 'rotate' | 'scale'
  /** start position for ScrollTrigger */
  start?: string
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'div' | 'span'
}

const TAGS = { h1: 'h1', h2: 'h2', h3: 'h3', p: 'p', div: 'div', span: 'span' } as const

/**
 * Splits `text` into word spans inside clip-y (overflow-hidden) wrappers.
 * Each word animates on scroll: translateY mask reveal, rotate, or scale.
 * Reduced motion → static, words visible.
 */
export function KineticWords({
  text,
  className,
  accent = [],
  stagger = 0.08,
  variant = 'rise',
  start = 'top 80%',
  as = 'div',
}: KineticWordsProps) {
  const ref = useRef<HTMLDivElement>(null)
  const Tag = TAGS[as]
  const words = text.split(' ')

  useGSAP(
    () => {
      if (prefersReducedMotion() || !ref.current) return
      const targets = ref.current.querySelectorAll<HTMLElement>('.gsap-word')
      if (!targets.length) return

      const from: gsap.TweenVars =
        variant === 'rise'
          ? { yPercent: 110 }
          : variant === 'rotate'
            ? { yPercent: 110, rotate: 8 }
            : { yPercent: 110, scale: 1.4, opacity: 0 }

      gsap.from(targets, {
        ...from,
        duration: 0.9,
        ease: 'power3.out',
        stagger,
        scrollTrigger: {
          trigger: ref.current,
          start,
          toggleActions: 'play none none none',
        },
      })
    },
    { scope: ref, dependencies: [text, variant, stagger, start] },
  )

  return (
    <Tag ref={ref as never} className={cn(className)}>
      {words.map((w, i) => (
        <span key={i} className="clip-y">
          <span
            className={cn(
              'gsap-word inline-block',
              accent.includes(i) && 'text-accent',
            )}
          >
            {w}
          </span>
          {i < words.length - 1 ? '\u00A0' : ''}
        </span>
      ))}
    </Tag>
  )
}

export { ScrollTrigger }
