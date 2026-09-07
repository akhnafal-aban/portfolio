import { useRef } from 'react'
import { gsap, useGSAP } from '@/lib/motion'
import { prefersReducedMotion } from '@/lib/motion'
import { profile } from '@/data'

export function Hero() {
  const root = useRef<HTMLElement>(null)
  const nameWords = useRef<HTMLSpanElement[]>([])
  const eyebrow = useRef<HTMLParagraphElement>(null)
  const meta = useRef<HTMLDivElement>(null)
  const cue = useRef<HTMLDivElement>(null)
  const layer = useRef<HTMLDivElement>(null)

  const nameParts = profile.name.split(' ')

  useGSAP(
    () => {
      if (prefersReducedMotion() || !root.current) return

      const tl = gsap.timeline({
        defaults: { ease: 'power3.out' },
      })

      tl.from(nameWords.current, {
        yPercent: 120,
        opacity: 0,
        stagger: 0.14,
        duration: 0.9,
      })
        .from(eyebrow.current, { y: 16, opacity: 0, duration: 0.6 }, '-=0.5')
        .from(meta.current, { y: 24, opacity: 0, duration: 0.7 }, '-=0.4')
        .from(cue.current, { y: 12, opacity: 0, duration: 0.6 }, '-=0.3')

      gsap.to([nameWords.current, meta.current], {
        yPercent: -35,
        opacity: 0.12,
        ease: 'none',
        scrollTrigger: {
          trigger: root.current,
          start: 'top top',
          end: '+=90%',
          scrub: 1,
          pin: true,
          pinSpacing: true,
          anticipatePin: 1,
        },
      })

      gsap.to(layer.current, {
        yPercent: 18,
        ease: 'none',
        scrollTrigger: {
          trigger: root.current,
          start: 'top top',
          end: '+=90%',
          scrub: 1,
        },
      })
    },
    { scope: root },
  )

  return (
    <section
      ref={root}
      className="relative h-[100dvh] w-full overflow-hidden bg-ink"
    >
      <div
        ref={layer}
        className="pointer-events-none absolute inset-0 opacity-60"
        aria-hidden
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)',
            backgroundSize: '80px 80px',
            maskImage:
              'radial-gradient(ellipse at center, black 30%, transparent 75%)',
          }}
        />
        <div className="absolute left-1/2 top-1/2 h-[60vmax] w-[60vmax] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/10 blur-[120px]" />
      </div>

      <div className="relative z-10 flex h-full flex-col justify-center px-6 sm:px-10 md:px-16">
        <p ref={eyebrow} className="t-eyebrow mb-6">
          <span className="text-accent">●</span> Portfolio — 2026
        </p>

        <h1 className="t-display text-[clamp(3rem,12vw,11rem)] text-bone">
          {nameParts.map((w, i) => (
            <span
              key={i}
              className="inline-block overflow-hidden align-bottom"
            >
              <span
                ref={(el) => {
                  if (el) nameWords.current[i] = el
                }}
                className="inline-block"
              >
                {w}
              </span>
              {i < nameParts.length - 1 ? '\u00A0' : ''}
            </span>
          ))}
        </h1>

        <div ref={meta} className="mt-8 flex flex-col gap-2">
          <p className="t-mono text-sm text-bone-soft">
            {profile.role} — {profile.disciplines}
          </p>
          <p className="t-mono text-xs text-bone-mute">{profile.location}</p>
        </div>
      </div>

      <div
        ref={cue}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
      >
        <span className="t-mono text-[10px] uppercase tracking-[0.3em] text-bone-mute">
          Scroll ↓
        </span>
      </div>
    </section>
  )
}
