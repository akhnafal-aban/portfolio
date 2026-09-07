import { useRef } from 'react'
import { gsap, useGSAP } from '@/lib/motion'
import { prefersReducedMotion } from '@/lib/motion'
import { skills, recognition } from '@/data'

export function Skills() {
  const root = useRef<HTMLElement>(null)
  const heading = useRef<HTMLHeadingElement>(null)
  const groups = useRef<HTMLDivElement[]>([])
  const awards = useRef<HTMLDivElement>(null)

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

      groups.current.forEach((g, i) => {
        if (!g) return
        gsap.from(g, {
          opacity: 0,
          x: i % 2 === 0 ? -40 : 40,
          duration: 0.7,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: g,
            start: 'top 85%',
          },
        })
      })

      gsap.from(awards.current, {
        opacity: 0,
        y: 40,
        duration: 0.8,
        scrollTrigger: {
          trigger: awards.current,
          start: 'top 85%',
        },
      })
    },
    { scope: root },
  )

  return (
    <section
      ref={root}
      className="relative w-full overflow-hidden bg-ink"
    >
      <div className="mx-auto max-w-[1100px] px-6 py-32 sm:px-10 md:px-16">
        <h2 ref={heading} className="t-eyebrow mb-12 text-accent">
          04 — Capabilities
        </h2>

        <div className="grid gap-px bg-ink-line sm:grid-cols-2">
          {skills.map((s, i) => (
            <div
              key={s.group}
              ref={(el) => {
                if (el) groups.current[i] = el
              }}
              className="bg-ink p-8"
            >
              <p className="t-label mb-4 text-bone-mute">{s.group}</p>
              <ul className="flex flex-wrap gap-2">
                {s.items.map((item) => (
                  <li
                    key={item}
                    className="t-mono border border-ink-line px-3 py-1.5 text-xs text-bone-soft transition-colors hover:border-accent hover:text-accent"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div ref={awards} className="mt-16 border-t border-ink-line pt-10">
          <p className="t-eyebrow mb-6">Recognition</p>
          <ul className="grid gap-4 sm:grid-cols-3">
            {recognition.map((r) => (
              <li key={r.title} className="border-l border-accent/40 pl-4">
                <p className="text-[15px] text-bone">{r.title}</p>
                <p className="t-body-soft mt-1 text-xs">{r.detail}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
