import { useEffect, useRef } from 'react'
import { gsap, ScrollTrigger, useGSAP, prefersReducedMotion } from '@/lib/gsap'
import { cn } from '@/lib/utils'
import { KineticWords } from '@/components/KineticWords'
import { HeroName } from '@/components/HeroName'
import { Marquee } from '@/components/Marquee'
import {
  ABOUT,
  EMAIL,
  GITHUB,
  LINKEDIN,
  LOCATION,
  NAME,
  PROJECTS,
  PUBLICATION,
  ROLE,
  SKILLS,
  TAGLINE,
} from '@/data/content'

function Section({
  id,
  label,
  children,
  className,
}: {
  id: string
  label: string
  children: React.ReactNode
  className?: string
}) {
  return (
    <section
      id={id}
      className={cn(
        'min-h-screen w-full flex flex-col justify-center px-6 md:px-12 lg:px-20 py-24',
        className,
      )}
    >
      <div className="label text-xs text-mute mb-10">{label}</div>
      {children}
    </section>
  )
}

function ProjectRow({ name, line, stack, url }: (typeof PROJECTS)[number]) {
  const ref = useRef<HTMLAnchorElement>(null)
  useGSAP(
    () => {
      if (prefersReducedMotion() || !ref.current) return
      const word = ref.current.querySelector('.proj-name')
      const meta = ref.current.querySelector('.proj-meta')
      if (word) {
        gsap.from(word, {
          yPercent: 110,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: { trigger: ref.current, start: 'top 85%' },
        })
      }
      if (meta) {
        gsap.from(meta, {
          opacity: 0,
          y: 30,
          duration: 0.8,
          ease: 'power2.out',
          delay: 0.1,
          scrollTrigger: { trigger: ref.current, start: 'top 85%' },
        })
      }
    },
    { scope: ref },
  )
  const Tag = url ? 'a' : 'div'
  return (
    <Tag
      ref={ref as never}
      href={url}
      target={url ? '_blank' : undefined}
      rel={url ? 'noreferrer' : undefined}
      className="group block border-b border-white/15 py-10 md:py-14"
    >
      <div className="clip-y">
        <h3 className="proj-name gsap-word inline-block text-6xl md:text-8xl lg:text-9xl font-black tracking-tight leading-none transition-colors duration-300 group-hover:text-accent">
          {name}
        </h3>
      </div>
      <div className="proj-meta mt-4 flex flex-col md:flex-row md:items-baseline gap-2 md:gap-8">
        <p className="text-base md:text-lg text-mute max-w-xl">{line}</p>
        <p className="label text-xs text-faint">{stack}</p>
      </div>
    </Tag>
  )
}

export default function App() {
  const skillsRef = useRef<HTMLDivElement>(null)

  // refresh ScrollTrigger after fonts load
  useEffect(() => {
    if (prefersReducedMotion()) return
    const t = setTimeout(() => ScrollTrigger.refresh(), 300)
    return () => clearTimeout(t)
  }, [])

  return (
    <main className="bg-ink text-paper overflow-x-hidden">
      {/* HERO */}
      <section className="min-h-screen w-full flex flex-col justify-end px-6 md:px-12 lg:px-20 pb-20">
        <div className="label text-xs text-mute mb-8">{LOCATION}</div>
        <HeroName
          text={NAME}
          className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tight leading-[0.95]"
        />
        <KineticWords
          text={ROLE}
          as="p"
          variant="rise"
          start="top 90%"
          className="mt-6 text-lg md:text-xl text-mute font-medium"
        />
      </section>

      {/* MARQUEE — the one strip */}
      <Marquee text={TAGLINE} />

      {/* WORK */}
      <Section id="work" label="01 — Work">
        <div className="max-w-[1400px]">
          {PROJECTS.map((p) => (
            <ProjectRow key={p.name} {...p} />
          ))}
        </div>
      </Section>

      {/* ABOUT */}
      <Section id="about" label="02 — About">
        <KineticWords
          text={ABOUT}
          as="p"
          variant="rise"
          stagger={0.05}
          start="top 70%"
          accent={[2, 3, 11]}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1] max-w-5xl"
        />
      </Section>

      {/* PUBLICATIONS */}
      <Section id="publications" label="03 — Publications">
        <KineticWords
          text={PUBLICATION}
          as="p"
          variant="rotate"
          stagger={0.06}
          start="top 75%"
          accent={[7, 8, 18]}
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black tracking-tight leading-[1.15] max-w-5xl"
        />
      </Section>

      {/* SKILLS — flowing kinetic text */}
      <Section id="skills" label="04 — Skills">
        <div ref={skillsRef} className="max-w-[1400px]">
          <KineticWords
            text={SKILLS}
            as="p"
            variant="scale"
            stagger={0.03}
            start="top 80%"
            accent={[0, 5, 10, 25]}
            className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight leading-[1.3]"
          />
        </div>
      </Section>

      {/* CONTACT */}
      <Section id="contact" label="05 — Contact" className="min-h-screen">
        <KineticWords
          text="Let's build."
          as="h2"
          variant="rise"
          start="top 75%"
          accent={[1]}
          className="text-7xl sm:text-8xl md:text-9xl font-black tracking-tight leading-none mb-16"
        />
        <div className="flex flex-col gap-2 md:gap-3">
          <a
            href={`mailto:${EMAIL}`}
            className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight hover:text-accent transition-colors w-fit"
          >
            {EMAIL}
          </a>
          <a
            href={GITHUB}
            target="_blank"
            rel="noreferrer"
            className="text-xl md:text-2xl font-bold text-mute hover:text-accent transition-colors w-fit"
          >
            GitHub ↗
          </a>
          <a
            href={LINKEDIN}
            target="_blank"
            rel="noreferrer"
            className="text-xl md:text-2xl font-bold text-mute hover:text-accent transition-colors w-fit"
          >
            LinkedIn ↗
          </a>
        </div>
        <footer className="mt-24 label text-xs text-faint">
          © {new Date().getFullYear()} {NAME}
        </footer>
      </Section>
    </main>
  )
}
