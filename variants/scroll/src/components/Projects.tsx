import { useRef } from 'react'
import { gsap, useGSAP } from '@/lib/motion'
import { prefersReducedMotion } from '@/lib/motion'
import { projects } from '@/data'

export function Projects() {
  const root = useRef<HTMLElement>(null)
  const track = useRef<HTMLDivElement>(null)
  const heading = useRef<HTMLDivElement>(null)
  const counter = useRef<HTMLSpanElement>(null)
  const slides = useRef<HTMLDivElement[]>([])

  useGSAP(
    () => {
      if (prefersReducedMotion() || !root.current || !track.current) return

      const trackEl = track.current
      const total = trackEl.scrollWidth - window.innerWidth

      const horizontalTween = gsap.to(trackEl, {
        x: -total,
        ease: 'none',
        scrollTrigger: {
          trigger: root.current,
          start: 'top top',
          end: `+=${total}`,
          scrub: 1,
          pin: true,
          pinSpacing: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            if (counter.current) {
              const idx = Math.min(
                projects.length,
                Math.floor(self.progress * projects.length) + 1,
              )
              counter.current.textContent = String(idx).padStart(2, '0')
            }
          },
        },
      })

      slides.current.forEach((slide) => {
        if (!slide) return
        const inner = slide.querySelector<HTMLElement>('[data-slide-inner]')
        if (!inner) return
        gsap.fromTo(
          inner,
          { opacity: 0, y: 60 },
          {
            opacity: 1,
            y: 0,
            ease: 'power2.out',
            duration: 0.8,
            scrollTrigger: {
              trigger: slide,
              containerAnimation: horizontalTween,
              start: 'left 80%',
            },
          },
        )
      })
    },
    { scope: root },
  )

  return (
    <section
      ref={root}
      className="relative w-full overflow-hidden bg-ink"
    >
      <div
        ref={heading}
        className="pointer-events-none absolute left-0 right-0 top-0 z-20 flex items-center justify-between px-6 py-6 sm:px-10 md:px-16"
      >
        <span className="t-eyebrow text-accent">02 — Projects</span>
        <span className="t-mono text-xs text-bone-mute">
          <span ref={counter}>01</span> / {String(projects.length).padStart(2, '0')}
        </span>
      </div>

      <div ref={track} className="flex h-[100dvh] w-max">
        {projects.map((p, i) => (
          <div
            key={p.index}
            ref={(el) => {
              if (el) slides.current[i] = el
            }}
            className="flex h-[100dvh] w-[100vw] shrink-0 items-center px-6 sm:px-10 md:px-16"
          >
            <div
              data-slide-inner
              className="grid w-full max-w-[1200px] gap-8 md:grid-cols-12"
            >
              <div className="md:col-span-4">
                <span className="t-mono-num text-[clamp(4rem,12vw,9rem)] font-bold leading-none text-ink-line">
                  {p.index}
                </span>
              </div>
              <div className="md:col-span-8">
                <p className="t-label mb-3 text-accent">{p.type}</p>
                <h3 className="t-display text-[clamp(1.8rem,5vw,4rem)] text-bone">
                  {p.name}
                </h3>
                <p className="t-mono mt-3 text-xs text-bone-mute">
                  {p.year} · {p.stack}
                </p>
                <p className="t-body-soft mt-6 max-w-prose text-[15px]">
                  {p.description}
                </p>
                {p.url && (
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="t-mono mt-6 inline-flex items-center gap-2 border-b border-accent/50 pb-1 text-xs uppercase tracking-[0.2em] text-bone transition-colors hover:text-accent"
                  >
                    View repository →
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
