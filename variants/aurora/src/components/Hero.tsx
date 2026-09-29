import { motion, useReducedMotion } from 'motion/react'
import { profile, stats } from '@/data/content'

export function Hero() {
  const reduce = useReducedMotion()

  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] flex-col items-center justify-center px-4 pt-28 pb-20 text-center"
    >
      <motion.div
        initial={reduce ? false : { opacity: 0, y: 30, filter: 'blur(8px)' }}
        animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="mx-auto w-full max-w-3xl"
      >
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 font-mono text-[11px] uppercase tracking-[0.2em] text-teal-200/90 backdrop-blur-md">
          <span className="inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-teal-300" />
          Available for iOS & backend work
        </div>

        <h1 className="hero-text mt-8 text-5xl font-bold leading-[1.02] tracking-tight md:text-7xl">
          {profile.name.split(' ').slice(0, 2).join(' ')}{' '}
          <span className="text-accent-gradient">
            {profile.name.split(' ').slice(2).join(' ')}
          </span>
        </h1>

        <p className="hero-text mt-5 text-lg text-zinc-200 md:text-2xl">{profile.headline}</p>

        <div className="mt-4 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 font-mono text-xs text-zinc-300/90">
          <span>{profile.location}</span>
          <span className="text-teal-300/40">/</span>
          <a
            href={profile.links.github}
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-teal-200"
          >
            github
          </a>
          <span className="text-teal-300/40">/</span>
          <a
            href={profile.links.linkedin}
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-teal-200"
          >
            linkedin
          </a>
        </div>

        <p className="hero-text mx-auto mt-7 max-w-xl text-sm leading-relaxed text-zinc-300/90 md:text-base">
          {profile.summary}
        </p>

        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="bg-white/[0.02] px-4 py-4">
              <div className="font-mono text-lg font-semibold text-teal-200 md:text-xl">{s.value}</div>
              <div className="mt-1 text-[10px] uppercase tracking-wider text-zinc-400">{s.label}</div>
            </div>
          ))}
        </div>

        <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#work"
            className="glass-strong group inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium text-white transition-transform hover:scale-[1.03] active:scale-95"
          >
            View work
            <span className="transition-transform group-hover:translate-y-0.5">↓</span>
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-teal-400/30 bg-teal-400/10 px-5 py-2.5 text-sm font-medium text-teal-100 backdrop-blur-md transition-all hover:scale-[1.03] hover:bg-teal-400/20 active:scale-95"
          >
            Get in touch
          </a>
        </div>
      </motion.div>

      <motion.div
        initial={reduce ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 font-mono text-[10px] uppercase tracking-[0.3em] text-zinc-400/70"
      >
        scroll
      </motion.div>
    </section>
  )
}
