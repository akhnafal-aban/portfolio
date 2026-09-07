import { BentoTile } from '@/components/BentoTile'
import { profile, stats, projects, skillGroups, links } from '@/data'
import { motion, useReducedMotion } from 'motion/react'

export default function App() {
  const reduce = useReducedMotion()

  return (
    <main className="mx-auto w-full max-w-[1180px] px-4 py-8 sm:px-6 sm:py-12 lg:py-16">
      <motion.header
        initial={reduce ? false : { opacity: 0, y: -6 }}
        animate={reduce ? undefined : { opacity: 1, y: 0 }}
        transition={reduce ? undefined : { duration: 0.4 }}
        className="mb-6 flex items-center justify-between sm:mb-8"
      >
        <p className="font-mono text-xs tracking-[0.2em] text-white/40">PORTFOLIO — BENTO</p>
        <p className="font-mono text-xs text-white/40">{profile.location}</p>
      </motion.header>

      <div className="grid auto-rows-[minmax(168px,auto)] grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-4">
        {/* Hero — 2x2 on desktop */}
        <BentoTile index={0} variant="accent" className="sm:col-span-2 sm:row-span-2 lg:col-span-2 lg:row-span-2 justify-between">
          <div className="flex items-start justify-between">
            <span className="font-mono text-[11px] tracking-[0.2em] text-emerald-400/80">
              SOFTWARE ENGINEER
            </span>
            <span className="font-mono text-[11px] text-white/30">/01</span>
          </div>
          <div>
            <h1 className="mt-6 text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
              Noor Akhnafal
              <br />
              Aban
            </h1>
            <p className="mt-5 max-w-md text-base text-white/60 sm:text-lg">
              iOS · backend systems · deployment. Builds maintainable products across the
              application lifecycle.
            </p>
          </div>
          <div className="flex items-center gap-2 font-mono text-xs text-white/40">
            <span className="inline-block h-2 w-2 rounded-full bg-emerald-400" />
            open to work · Jakarta
          </div>
        </BentoTile>

        {/* Stats — 3 small */}
        {stats.map((s, i) => (
          <BentoTile
            key={s.label}
            index={i + 1}
            variant={s.label === 'GEMASTIK' ? 'accent' : 'default'}
            className="flex justify-between"
          >
            <span className="font-mono text-[10px] tracking-[0.18em] text-white/40">
              {s.label}
            </span>
            <div className="mt-auto">
              <p className="text-3xl font-bold tracking-tight sm:text-4xl">{s.value}</p>
              <p className="mt-1 font-mono text-[11px] leading-snug text-white/45">
                {s.sub}
              </p>
            </div>
          </BentoTile>
        ))}

        {/* About — medium, 1 col on desktop row 2 */}
        <BentoTile index={4} className="lg:col-span-1">
          <span className="font-mono text-[10px] tracking-[0.18em] text-white/40">ABOUT</span>
          <p className="mt-3 text-sm leading-relaxed text-white/70">{profile.bio}</p>
        </BentoTile>

        {/* Skills — wide, full row */}
        <BentoTile index={5} className="sm:col-span-2 lg:col-span-4">
          <div className="flex items-center justify-between">
            <span className="font-mono text-[10px] tracking-[0.18em] text-white/40">SKILLS</span>
            <span className="font-mono text-[10px] text-white/30">{skillGroups.length} groups</span>
          </div>
          <div className="mt-4 grid grid-cols-2 gap-x-6 gap-y-3 sm:grid-cols-3 lg:grid-cols-6">
            {skillGroups.map((g) => (
              <div key={g.label}>
                <p className="font-mono text-[10px] tracking-[0.16em] text-emerald-400/70">
                  {g.label}
                </p>
                <ul className="mt-1.5 space-y-0.5">
                  {g.items.map((it) => (
                    <li key={it} className="text-[13px] text-white/75">
                      {it}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </BentoTile>

        {/* Projects — 6 tiles */}
        {projects.map((p, i) => (
          <BentoTile
            key={p.name}
            as="a"
            href={p.href}
            index={6 + i}
            variant={p.name === 'AkhnaFin' ? 'accent' : 'default'}
            className={
              p.name === 'AkhnaFin'
                ? 'sm:col-span-2 lg:col-span-2'
                : 'lg:col-span-1'
            }
          >
            <div className="flex items-start justify-between gap-2">
              <span className="font-mono text-[10px] tracking-[0.16em] text-white/40">
                {p.tag}
              </span>
              <span className="font-mono text-[10px] text-white/30">{p.period}</span>
            </div>
            <h3 className="mt-2 text-lg font-semibold tracking-tight sm:text-xl">{p.name}</h3>
            <p className="mt-2 text-[13px] leading-relaxed text-white/65">{p.blurb}</p>
            <div className="mt-auto flex flex-wrap gap-1.5 pt-3">
              {p.stack.map((s) => (
                <span
                  key={s}
                  className="rounded-md bg-white/[0.06] px-2 py-0.5 font-mono text-[10px] text-white/60 ring-1 ring-white/[0.04]"
                >
                  {s}
                </span>
              ))}
            </div>
          </BentoTile>
        ))}

        {/* Contact — medium, 2 cols */}
        <BentoTile index={12} variant="warm" className="sm:col-span-2 lg:col-span-2">
          <div className="flex items-center justify-between">
            <span className="font-mono text-[10px] tracking-[0.18em] text-orange-400/80">
              CONTACT
            </span>
            <span className="font-mono text-[10px] text-white/30">/12</span>
          </div>
          <div className="mt-3 grid grid-cols-2 gap-x-4 gap-y-2">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                target={l.href.startsWith('mailto') ? undefined : '_blank'}
                rel="noopener noreferrer"
                className="group/link flex items-center justify-between rounded-lg bg-white/[0.04] px-3 py-2 ring-1 ring-white/[0.05] transition-colors hover:bg-white/[0.08]"
              >
                <span className="font-mono text-[10px] tracking-[0.14em] text-white/40">
                  {l.label}
                </span>
                <span className="text-[13px] text-white/80 transition-colors group-hover/link:text-orange-300">
                  {l.value}
                </span>
              </a>
            ))}
          </div>
          <p className="mt-3 font-mono text-[10px] text-white/30">
            Pull Shark ×2 · Pair Extraordinaire · available for iOS + backend roles
          </p>
        </BentoTile>
      </div>

      <footer className="mt-8 flex items-center justify-between font-mono text-[10px] text-white/25 sm:mt-12">
        <span>© {new Date().getFullYear()} Noor Akhnafal Aban</span>
        <span>Built with React · Tailwind v4 · Motion</span>
      </footer>
    </main>
  )
}
