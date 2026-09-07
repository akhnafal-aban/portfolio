import {
  ENVELOPE,
  GITHUB,
  LINKEDIN,
  PHONE,
} from '@/data/links'
import { PROJECTS } from '@/data/projects'
import { PUBLICATIONS } from '@/data/publications'
import { SKILLS } from '@/data/skills'
import { WORK } from '@/data/work'
import { cn } from '@/lib/utils'

const NAME = 'NOOR AKHNAFAL ABAN'
const HEADLINE = 'SOFTWARE ENGINEER | iOS | BACKEND SYSTEMS'
const LOCATION = 'JAKARTA, INDONESIA'
const TAGLINE =
  'BUILDS SOFTWARE. SHIPS TO PRODUCTION. PUBLISHED RESEARCH. NO FLUFF.'

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
    <section id={id} className={cn('border-thk-t', className)}>
      <div className="border-thk-b accent-bg label px-4 py-2 text-sm">
        [{label}]
      </div>
      <div className="p-4">{children}</div>
    </section>
  )
}

function Marquee() {
  return (
    <div className="marquee border-thk-b accent-bg py-1 text-sm font-bold">
      <div className="marquee-track">
        {Array.from({ length: 6 }).map((_, i) => (
          <span key={i}>★ {TAGLINE} &nbsp;&nbsp;</span>
        ))}
      </div>
    </div>
  )
}

function Nav() {
  const items = [
    ['#work', 'WORK'],
    ['#about', 'ABOUT'],
    ['#pubs', 'PUBS'],
    ['#skills', 'SKILLS'],
    ['#contact', 'CONTACT'],
  ]
  return (
    <nav className="border-thk-b flex items-stretch overflow-x-auto">
      <a
        href="#top"
        className="accent-bg hover-acc label px-4 py-3 text-sm"
      >
        NAA//
      </a>
      {items.map(([href, txt]) => (
        <a
          key={href}
          href={href}
          className="label border-thk-l hover-acc px-4 py-3 text-sm whitespace-nowrap"
        >
          {txt}
        </a>
      ))}
    </nav>
  )
}

function Hero() {
  return (
    <header id="top" className="border-thk-b">
      <div className="grid grid-cols-1 md:grid-cols-3">
        <div className="border-thk-b md:border-thk-b-0 md:border-thk-r p-6 md:col-span-2">
          <p className="label accent text-xs mb-2">// IDENTITY</p>
          <h1 className="text-4xl md:text-6xl font-bold leading-none mb-3">
            {NAME}
          </h1>
          <p className="text-lg md:text-xl font-bold">{HEADLINE}</p>
          <p className="label text-xs mt-3">{LOCATION}</p>
        </div>
        <div className="p-6 text-sm">
          <p className="label mb-2">// STATUS</p>
          <ul className="space-y-1">
            <li>{'> iOS @ Apple Dev Academy UC Jakarta'}</li>
            <li>{'> Backend @ Really Sport Center'}</li>
            <li>{'> Informatics @ UII — GPA 3.87/4.00'}</li>
            <li>{'> Published: Rabit J. Vol 11 No 1 (2026)'}</li>
          </ul>
        </div>
      </div>
    </header>
  )
}

function Work() {
  return (
    <Section id="work" label="WORK">
      <div className="grid grid-cols-1 md:grid-cols-2 border-thk">
        {WORK.map((w) => (
          <article
            key={w.role + w.org}
            className="border-thk p-4"
          >
            <div className="flex justify-between gap-2 mb-1">
              <h3 className="font-bold uppercase text-sm">{w.role}</h3>
              <span className="label text-xs whitespace-nowrap">{w.dates}</span>
            </div>
            <p className="text-sm mb-3 accent font-bold">{w.org}</p>
            <p className="text-xs">{w.type}</p>
            <ul className="mt-3 space-y-1 text-sm">
              {w.bullets.map((b) => (
                <li key={b} className="pl-3 border-thk-l">
                  {b}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </Section>
  )
}

function Projects() {
  return (
    <Section id="projects" label="PROJECTS">
      <div className="overflow-x-auto border-thk">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="accent-bg">
              {['NAME', 'STACK', 'PERIOD', 'NOTE'].map((h) => (
                <th
                  key={h}
                  className="border-thk label text-left p-2 align-top"
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {PROJECTS.map((p, i) => (
              <tr key={p.name} className={i % 2 === 1 ? 'bg-black/5' : ''}>
                <td className="border-thk p-2 align-top font-bold">
                  {p.url ? (
                    <a
                      href={p.url}
                      target="_blank"
                      rel="noreferrer"
                      className="hover-acc"
                    >
                      {p.name} ↗
                    </a>
                  ) : (
                    p.name
                  )}
                </td>
                <td className="border-thk p-2 align-top">{p.stack}</td>
                <td className="border-thk p-2 align-top whitespace-nowrap">
                  {p.period}
                </td>
                <td className="border-thk p-2 align-top">{p.note}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Section>
  )
}

function About() {
  return (
    <Section id="about" label="ABOUT">
      <div className="grid grid-cols-1 md:grid-cols-3 border-thk">
        <div className="border-thk p-4 md:col-span-2">
          <p className="text-sm leading-relaxed">
            Backend-leaning generalist. Laravel, Python, Swift. Building things
            that run. Current focus: native iOS at Apple Developer Academy UC
            Jakarta, backend + infra at Really Sport Center. Production
            deployment, Linux server admin, server ops. Published topic-modeling
            research in <span className="font-bold">Rabit: Jurnal Teknologi
            dan Sistem Informasi</span> (Vol 11 No 1, Jan 2026). GEMASTIK 2025
            national-round finalist.
          </p>
        </div>
        <div className="border-thk p-4 text-sm">
          <p className="label mb-2">// EDUCATION</p>
          <p className="font-bold">Universitas Islam Indonesia</p>
          <p>Bachelor of Informatics</p>
          <p>Faculty of Industrial Technology</p>
          <p>2022 - Present · GPA 3.87/4.00</p>
          <p className="label mt-4 mb-2">// AWARDS</p>
          <ul className="space-y-1">
            <li>- GEMASTIK 2025 national round finalist</li>
            <li>- GitHub: Pull Shark x2, Pair Extraordinaire, YOLO</li>
          </ul>
        </div>
      </div>
    </Section>
  )
}

function Pubs() {
  return (
    <Section id="pubs" label="PUBLICATIONS">
      <div className="border-thk">
        {PUBLICATIONS.map((p) => (
          <article key={p.title} className="border-thk-b p-4 last:border-0">
            <p className="label accent text-xs mb-1">// {p.kind}</p>
            <h3 className="font-bold text-sm mb-1">{p.title}</h3>
            <p className="text-sm">{p.authors}</p>
            <p className="text-sm italic">{p.venue}</p>
            <p className="text-xs mt-2">{p.note}</p>
          </article>
        ))}
      </div>
    </Section>
  )
}

function Skills() {
  return (
    <Section id="skills" label="SKILLS">
      <div className="grid grid-cols-1 md:grid-cols-2 border-thk">
        {SKILLS.map((s) => (
          <div key={s.cat} className="border-thk p-4">
            <p className="label accent text-xs mb-2">// {s.cat}</p>
            <p className="text-sm">{s.items}</p>
          </div>
        ))}
      </div>
    </Section>
  )
}

function Contact() {
  const links = [
    { href: GITHUB, label: 'GITHUB', sub: 'akhnafal-aban' },
    { href: LINKEDIN, label: 'LINKEDIN', sub: 'akhnaf-aban' },
    { href: `mailto:${ENVELOPE}`, label: 'EMAIL', sub: ENVELOPE },
    { href: `tel:${PHONE}`, label: 'PHONE', sub: PHONE },
  ]
  return (
    <Section id="contact" label="CONTACT">
      <div className="grid grid-cols-2 md:grid-cols-4 border-thk">
        {links.map((l) => (
          <a
            key={l.label}
            href={l.href}
            target={l.href.startsWith('http') ? '_blank' : undefined}
            rel="noreferrer"
            className="border-thk p-4 hover-acc block"
          >
            <p className="label text-xs mb-1">{l.label}</p>
            <p className="text-sm font-bold break-all">{l.sub}</p>
          </a>
        ))}
      </div>
    </Section>
  )
}

function Footer() {
  return (
    <footer className="border-thk-t accent-bg label px-4 py-2 text-xs flex justify-between">
      <span>// END OF FILE</span>
      <span>BUILT RAW · NO DECORATION · {new Date().getFullYear()}</span>
    </footer>
  )
}

export default function App() {
  return (
    <main className="min-h-screen border-thk max-w-[1100px] mx-auto my-0 md:my-6 bg-white">
      <Nav />
      <Hero />
      <Marquee />
      <Work />
      <Projects />
      <About />
      <Pubs />
      <Skills />
      <Contact />
      <Footer />
    </main>
  )
}
