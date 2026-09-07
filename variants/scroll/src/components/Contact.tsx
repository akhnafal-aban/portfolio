import { useRef } from 'react'
import { gsap, useGSAP } from '@/lib/motion'
import { prefersReducedMotion } from '@/lib/motion'
import { profile } from '@/data'

export function Contact() {
  const root = useRef<HTMLElement>(null)
  const heading = useRef<HTMLHeadingElement>(null)
  const links = useRef<HTMLDivElement>(null)
  const foot = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      if (prefersReducedMotion() || !root.current) return

      gsap.from(heading.current, {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: root.current,
          start: 'top 70%',
        },
      })

      gsap.from(links.current, {
        opacity: 0,
        y: 30,
        duration: 0.8,
        delay: 0.2,
        scrollTrigger: {
          trigger: root.current,
          start: 'top 70%',
        },
      })

      gsap.from(foot.current, {
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: root.current,
          start: 'top 50%',
        },
      })
    },
    { scope: root },
  )

  return (
    <section
      ref={root}
      className="relative flex min-h-[100dvh] w-full flex-col items-center justify-center overflow-hidden bg-ink px-6 text-center"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        aria-hidden
        style={{
          background:
            'radial-gradient(ellipse at center, rgba(16,185,129,0.12) 0%, transparent 60%)',
        }}
      />
      <div className="relative z-10">
        <h2 className="t-eyebrow mb-8 text-accent">05 — Contact</h2>
        <h3
          ref={heading}
          className="t-display text-[clamp(2.2rem,8vw,7rem)] text-bone"
        >
          Let&rsquo;s build
          <br />
          something solid.
        </h3>

        <div ref={links} className="mt-12 flex flex-col items-center gap-3">
          <a
            href={`mailto:${profile.email}`}
            className="t-mono text-base text-bone underline decoration-accent/40 underline-offset-4 transition-colors hover:text-accent"
          >
            {profile.email}
          </a>
          <div className="mt-4 flex flex-wrap justify-center gap-6">
            <a
              href={profile.githubUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="t-label text-bone-mute transition-colors hover:text-accent"
            >
              GitHub ↗
            </a>
            <a
              href={profile.linkedinUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="t-label text-bone-mute transition-colors hover:text-accent"
            >
              LinkedIn ↗
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="t-label text-bone-mute transition-colors hover:text-accent"
            >
              Email ↗
            </a>
          </div>
        </div>
      </div>

      <div
        ref={foot}
        className="absolute bottom-8 left-0 right-0 z-10 px-6"
      >
        <div className="mx-auto flex max-w-[1100px] flex-col items-center justify-between gap-2 border-t border-ink-line pt-6 text-center sm:flex-row sm:text-left">
          <p className="t-mono text-[10px] uppercase tracking-[0.2em] text-bone-mute">
            {profile.name}
          </p>
          <p className="t-mono text-[10px] uppercase tracking-[0.2em] text-bone-mute">
            {profile.location} · 2026
          </p>
        </div>
      </div>
    </section>
  )
}
