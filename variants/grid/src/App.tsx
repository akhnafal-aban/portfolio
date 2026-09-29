import GridBackground from '@/components/GridBackground'
import { projects, skills, experience, links } from '@/data'

const SECTION_RULE = 'h-px w-full bg-gradient-to-r from-emerald/40 via-emerald/10 to-transparent'

function SectionHead({ index, title }: { index: string; title: string }) {
  return (
    <div className="mb-8 flex items-baseline gap-4">
      <span className="font-mono text-sm text-emerald-bright/60">{index}</span>
      <h2 className="font-mono text-xl tracking-tight text-ink sm:text-2xl">
        {title}
      </h2>
      <div className="ml-2 h-px flex-1 bg-emerald/20" />
    </div>
  )
}

function Hero() {
  return (
    <section className="grid-rise flex min-h-[88vh] flex-col justify-center">
      <p className="font-mono text-xs tracking-[0.3em] text-emerald-bright/60 uppercase">
        portfolio // interactive grid
      </p>
      <h1 className="mt-6 font-mono text-5xl leading-[1.05] tracking-tight text-ink sm:text-7xl">
        Noor Akhnafal
        <br />
        <span className="text-emerald-bright">Aban</span>
      </h1>
      <p className="mt-6 max-w-2xl text-lg text-ink-soft sm:text-xl">
        Software Engineer · iOS · Backend Systems. Building maintainable
        products across SwiftUI, Laravel, and Linux infrastructure — from
        on-device AI to production deployment.
      </p>
      <p className="mt-4 font-mono text-sm text-muted">
        Jakarta, Indonesia · GPA 3.84/4.00 · Universitas Islam Indonesia
      </p>
      <div className="mt-10 flex flex-wrap items-center gap-3">
        <a
          href="#work"
          className="border border-emerald/40 bg-emerald/5 px-4 py-2 font-mono text-sm text-emerald-bright transition-colors hover:bg-emerald/15 hover:border-emerald/70"
        >
          ./view-work
        </a>
        <a
          href="#contact"
          className="border border-border px-4 py-2 font-mono text-sm text-ink-soft transition-colors hover:border-emerald/40 hover:text-emerald-bright"
        >
          ./contact
        </a>
        <span className="font-mono text-sm text-muted">
          move your cursor across the grid
        </span>
        <span className="grid-cursor ml-1 inline-block h-4 w-2.5 bg-emerald-bright" />
      </div>
    </section>
  )
}

function Work() {
  return (
    <section id="work" className="scroll-mt-20">
      <SectionHead index="01" title="WORK" />
      <div className="grid gap-5 sm:grid-cols-2">
        {projects.map((p, i) => (
          <article
            key={p.id}
            className="grid-rise group relative flex flex-col border border-border bg-card/80 p-6 backdrop-blur-sm transition-colors duration-300 hover:border-emerald/60 hover:bg-card"
            style={{ animationDelay: `${i * 60}ms` }}
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <h3 className="font-mono text-lg text-ink transition-colors group-hover:text-emerald-bright">
                  {p.name}
                </h3>
                <p className="font-mono text-xs tracking-wider text-muted uppercase">
                  {p.tagline}
                </p>
              </div>
              <span className="shrink-0 font-mono text-[10px] tracking-wider text-muted uppercase">
                {p.period}
              </span>
            </div>
            <p className="mt-4 flex-1 text-sm leading-relaxed text-ink-soft">
              {p.description}
            </p>
            <p className="mt-4 font-mono text-[11px] leading-relaxed text-emerald/70">
              {p.stack}
            </p>
            {p.repo && (
              <a
                href={p.url}
                target="_blank"
                rel="noreferrer"
                className="mt-3 inline-flex items-center gap-1 font-mono text-xs text-muted transition-colors hover:text-emerald-bright"
              >
                <span className="text-emerald/60">→</span> {p.repo}
              </a>
            )}
          </article>
        ))}
      </div>
    </section>
  )
}

function About() {
  return (
    <section id="about" className="scroll-mt-20">
      <SectionHead index="02" title="ABOUT" />
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="grid-rise border border-border bg-card/80 p-6 backdrop-blur-sm">
          <p className="text-sm leading-relaxed text-ink-soft">
            Software engineer with experience spanning iOS development, backend
            systems, production deployment, and server operations. Builds
            maintainable digital products across the application lifecycle —
            SwiftUI development with Laravel-based platforms, databases, APIs,
            and Linux infrastructure.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-ink-soft">
            Published author in topic modeling research (Rabit, 2026) and
            GEMASTIK 2025 national-round finalist. Current focus: expanding
            native iOS and product-development capabilities.
          </p>
        </div>
        <div className="grid-rise border border-border bg-card/80 p-6 backdrop-blur-sm">
          <h3 className="font-mono text-xs tracking-[0.2em] text-emerald-bright/70 uppercase">
            Experience
          </h3>
          <ul className="mt-4 space-y-4">
            {experience.map((e) => (
              <li key={e.role} className="border-l border-emerald/30 pl-3">
                <div className="flex items-baseline justify-between gap-2">
                  <p className="font-mono text-sm text-ink">{e.role}</p>
                  <span className="font-mono text-[10px] tracking-wider text-muted uppercase">
                    {e.period}
                  </span>
                </div>
                <p className="font-mono text-xs text-emerald/70">{e.org}</p>
                <p className="mt-1 text-xs leading-relaxed text-muted">{e.note}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

function Publications() {
  return (
    <section id="publications" className="scroll-mt-20">
      <SectionHead index="03" title="PUBLICATIONS" />
      <article className="grid-rise border border-border bg-card/80 p-6 backdrop-blur-sm transition-colors hover:border-emerald/50">
        <h3 className="font-mono text-lg text-ink">
          Pemodelan Topik Cuitan tentang Danantara
        </h3>
        <p className="mt-1 font-mono text-xs text-muted">
          Topic Modeling of Tweets about Danantara · BERTopic + indoSBERT
        </p>
        <dl className="mt-5 space-y-2 font-mono text-sm">
          <div className="flex gap-3">
            <dt className="w-24 shrink-0 text-muted">authors</dt>
            <dd className="text-ink-soft">
              Noor Akhnafal Aban, Chanifah Indah Ratnasari
            </dd>
          </div>
          <div className="flex gap-3">
            <dt className="w-24 shrink-0 text-muted">journal</dt>
            <dd className="text-ink-soft">
              Rabit : Jurnal Teknologi dan Sistem Informasi — LPPM Universitas
              Riau
            </dd>
          </div>
          <div className="flex gap-3">
            <dt className="w-24 shrink-0 text-muted">volume</dt>
            <dd className="text-ink-soft">Vol 11 No 1, January 2026</dd>
          </div>
          <div className="flex gap-3">
            <dt className="w-24 shrink-0 text-muted">indexed</dt>
            <dd className="text-ink-soft">
              Garuda (Garba Rujukan Digital, Kemdiktisaintek)
            </dd>
          </div>
        </dl>
        <a
          href="https://github.com/akhnafal-aban/Danantara-Research"
          target="_blank"
          rel="noreferrer"
          className="mt-4 inline-flex items-center gap-1 font-mono text-xs text-emerald/80 transition-colors hover:text-emerald-bright"
        >
          <span className="text-emerald/60">→</span> github.com/akhnafal-aban/Danantara-Research
        </a>
      </article>
    </section>
  )
}

function Skills() {
  return (
    <section id="skills" className="scroll-mt-20">
      <SectionHead index="04" title="SKILLS" />
      <div className="grid-rise border border-border bg-card/80 p-6 backdrop-blur-sm">
        <dl className="grid gap-x-8 gap-y-3 sm:grid-cols-2">
          {skills.map((s) => (
            <div key={s.label} className="flex flex-col gap-1 border-b border-line pb-3 sm:border-b-0 sm:pb-0">
              <dt className="font-mono text-xs tracking-[0.18em] text-emerald-bright/70 uppercase">
                {s.label}
              </dt>
              <dd className="text-sm leading-relaxed text-ink-soft">{s.items}</dd>
            </div>
          ))}
        </dl>
        <p className="mt-6 font-mono text-xs text-muted">
          notable: GEMASTIK 2025 national-round finalist · GitHub Pull Shark
          ×2 · Pair Extraordinaire
        </p>
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section id="contact" className="scroll-mt-20">
      <SectionHead index="05" title="CONTACT" />
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="grid-rise border border-border bg-card/80 p-6 backdrop-blur-sm">
          <p className="font-mono text-xs tracking-[0.2em] text-emerald-bright/70 uppercase">
            reach
          </p>
          <a
            href="mailto:akhnafal03@gmail.com"
            className="mt-3 block font-mono text-lg text-ink transition-colors hover:text-emerald-bright"
          >
            akhnafal03@gmail.com
          </a>
          <p className="mt-2 font-mono text-sm text-ink-soft">+62 857-9781-5215</p>
          <p className="font-mono text-sm text-muted">Jakarta, Indonesia</p>
        </div>
        <div className="grid-rise border border-border bg-card/80 p-6 backdrop-blur-sm">
          <p className="font-mono text-xs tracking-[0.2em] text-emerald-bright/70 uppercase">
            links
          </p>
          <ul className="mt-3 space-y-2">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  target={l.href.startsWith('http') ? '_blank' : undefined}
                  rel="noreferrer"
                  className="group flex items-baseline gap-2 font-mono text-sm text-ink-soft transition-colors hover:text-emerald-bright"
                >
                  <span className="text-emerald/50 group-hover:text-emerald-bright">→</span>
                  <span>{l.label}</span>
                  {l.note && <span className="text-muted">· {l.note}</span>}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="mt-24 border-t border-emerald/15 pt-6 pb-12">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <p className="font-mono text-xs text-muted">
          noor akhnafal aban · interactive grid variant
        </p>
        <p className="font-mono text-xs text-muted">
          built with react · vite · tailwind · {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <>
      <GridBackground />
      <div className="grid-content mx-auto max-w-5xl px-6 sm:px-8">
        <Hero />
        <div className="my-20">
          <div className={SECTION_RULE} />
        </div>
        <Work />
        <div className="my-20">
          <div className={SECTION_RULE} />
        </div>
        <About />
        <div className="my-20">
          <div className={SECTION_RULE} />
        </div>
        <Publications />
        <div className="my-20">
          <div className={SECTION_RULE} />
        </div>
        <Skills />
        <div className="my-20">
          <div className={SECTION_RULE} />
        </div>
        <Contact />
        <Footer />
      </div>
    </>
  )
}
