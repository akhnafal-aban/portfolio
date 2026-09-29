import { motion, useReducedMotion } from 'motion/react'
import { profile, stats } from '@/data/content'
import { EASE_OUT } from '@/lib/motion'

export function Hero() {
  const reduce = useReducedMotion()

  return (
    <section id="top" className="relative flex min-h-[100svh] items-center justify-center px-4 pt-24 pb-16">
      <motion.div
        initial={reduce ? false : { opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [...EASE_OUT] }}
        className="glass-strong mx-auto w-full max-w-3xl rounded-3xl p-8 md:p-12"
      >
        <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-teal-300/80">
          <span className="inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-teal-400" />
          Available for iOS & backend work
        </div>

        <h1 className="mt-6 text-4xl font-bold leading-[1.05] tracking-tight text-white md:text-6xl">
          {profile.name.split(' ').slice(0, 2).join(' ')}{' '}
          <span className="text-accent-gradient">
            {profile.name.split(' ').slice(2).join(' ')}
          </span>
        </h1>

        <p className="mt-4 max-w-xl text-base text-zinc-300 md:text-lg">{profile.headline}</p>

        <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-xs text-zinc-400">
          <span>{profile.location}</span>
          <span className="text-teal-400/40">/</span>
          <a
            href={profile.links.github}
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-teal-300"
          >
            github
          </a>
          <span className="text-teal-400/40">/</span>
          <a
            href={profile.links.linkedin}
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-teal-300"
          >
            linkedin
          </a>
        </div>

        <p className="mt-6 max-w-2xl text-sm leading-relaxed text-zinc-400 md:text-[15px]">
          {profile.summary}
        </p>

        <div className="mt-8 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/5 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="bg-white/[0.02] px-4 py-4">
              <div className="font-mono text-lg font-semibold text-teal-200 md:text-xl">{s.value}</div>
              <div className="mt-1 text-[10px] uppercase tracking-wider text-zinc-500">{s.label}</div>
            </div>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="#work"
            className="glass-strong group inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium text-white transition-transform hover:scale-[1.03] active:scale-95"
          >
            View work
            <span className="transition-transform group-hover:translate-y-0.5">↓</span>
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-teal-400/30 bg-teal-400/10 px-5 py-2.5 text-sm font-medium text-teal-200 transition-all hover:scale-[1.03] hover:bg-teal-400/20 active:scale-95"
          >
            Get in touch
          </a>
        </div>
      </motion.div>
    </section>
  )
}
