import { useRef } from 'react'
import { gsap, useGSAP } from '@/lib/motion'
import { prefersReducedMotion } from '@/lib/motion'
import { publications } from '@/data'

export function Publications() {
  const root = useRef<HTMLElement>(null)
  const heading = useRef<HTMLHeadingElement>(null)
  const card = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      if (prefersReducedMotion() || !root.current) return

      gsap.from(heading.current, {
        opacity: 0,
        y: 30,
        duration: 0.6,
        scrollTrigger: {
          trigger: root.current,
          start: 'top 80%',
        },
      })

      gsap.from(card.current, {
        opacity: 0,
        y: 60,
        duration: 0.9,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: root.current,
          start: 'top 60%',
        },
      })
    },
    { scope: root },
  )

  const pub = publications[0]

  return (
    <section
      ref={root}
      className="relative w-full overflow-hidden bg-ink-soft"
    >
      <div className="mx-auto flex min-h-[100dvh] max-w-[1100px] flex-col justify-center px-6 py-32 sm:px-10 md:px-16">
        <h2 ref={heading} className="t-eyebrow mb-10 text-accent">
          03 — Publications
        </h2>

        <div
          ref={card}
          className="border border-ink-line bg-ink p-8 sm:p-12"
        >
          <p className="t-mono text-xs text-accent">{pub.volume} · {pub.date}</p>
          <h3 className="t-display mt-6 text-[clamp(1.4rem,4vw,3rem)] text-bone">
            {pub.title}
          </h3>
          <p className="t-body-soft mt-2 text-[15px] italic">{pub.subtitle}</p>

          <dl className="mt-8 grid gap-6 sm:grid-cols-2">
            <div>
              <dt className="t-eyebrow mb-1">Authors</dt>
              <dd className="text-[15px] text-bone">{pub.authors}</dd>
            </div>
            <div>
              <dt className="t-eyebrow mb-1">Venue</dt>
              <dd className="t-body-soft text-[15px]">{pub.venue}</dd>
            </div>
            <div>
              <dt className="t-eyebrow mb-1">Indexed</dt>
              <dd className="t-body-soft text-[15px]">{pub.indexed}</dd>
            </div>
            <div>
              <dt className="t-eyebrow mb-1">Pipeline</dt>
              <dd className="t-mono text-xs text-accent">{pub.pipeline}</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  )
}
