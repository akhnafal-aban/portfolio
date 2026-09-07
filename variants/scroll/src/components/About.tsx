import { useRef } from 'react'
import { gsap, useGSAP } from '@/lib/motion'
import { prefersReducedMotion } from '@/lib/motion'
import { profile, education } from '@/data'

export function About() {
  const root = useRef<HTMLElement>(null)
  const bioWords = useRef<HTMLSpanElement[]>([])
  const heading = useRef<HTMLHeadingElement>(null)
  const extras = useRef<HTMLDivElement>(null)

  const summaryWords = profile.summary.split(' ')

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

      gsap.fromTo(
        bioWords.current,
        { opacity: 0.12 },
        {
          opacity: 1,
          ease: 'none',
          stagger: 0.5,
          scrollTrigger: {
            trigger: root.current,
            start: 'top top',
            end: '+=120%',
            scrub: 1,
            pin: true,
            pinSpacing: true,
            anticipatePin: 1,
          },
        },
      )

      gsap.from(extras.current, {
        opacity: 0,
        y: 40,
        duration: 0.8,
        scrollTrigger: {
          trigger: root.current,
          start: 'top top',
          end: '+=120%',
          scrub: 1,
        },
      })
    },
    { scope: root },
  )

  return (
    <section
      ref={root}
      className="relative w-full overflow-hidden bg-ink-soft"
    >
      <div className="mx-auto flex min-h-[100dvh] max-w-[1100px] flex-col justify-center px-6 py-32 sm:px-10 md:px-16">
        <h2 ref={heading} className="t-eyebrow mb-10 text-accent">
          01 — About
        </h2>

        <p className="t-display text-[clamp(1.4rem,3.6vw,3.4rem)] leading-[1.25] text-bone">
          {summaryWords.map((w, i) => (
            <span
              key={i}
              ref={(el) => {
                if (el) bioWords.current[i] = el
              }}
              className="inline-block"
            >
              {w}
              {i < summaryWords.length - 1 ? '\u00A0' : ''}
            </span>
          ))}
        </p>

        <div ref={extras} className="mt-16 grid gap-10 sm:grid-cols-2">
          <div className="border-l border-ink-line pl-6">
            <p className="t-eyebrow mb-3">Origin</p>
            <p className="t-body-soft max-w-prose text-[15px]">{profile.origin}</p>
          </div>
          <div className="border-l border-ink-line pl-6">
            <p className="t-eyebrow mb-3">Education</p>
            <p className="text-[15px] text-bone">{education.institution}</p>
            <p className="t-body-soft text-[15px]">
              {education.degree} — {education.faculty}
            </p>
            <p className="t-mono mt-2 text-xs text-bone-mute">
              {education.period} · GPA {education.gpa}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
