import { motion } from 'motion/react'
import { Orb } from './Orb'
import { persona } from '@/data/persona'

export function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen flex items-center overflow-hidden pt-28 pb-20"
    >
      {/* faint base wash */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          background:
            'radial-gradient(60% 50% at 70% 38%, rgba(16,185,129,0.10), transparent 70%), radial-gradient(40% 30% at 20% 80%, rgba(20,184,166,0.06), transparent 70%)',
        }}
      />
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-12 px-6 md:grid-cols-2 md:gap-8">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="order-2 md:order-1"
        >
          <p className="label mb-5">Portfolio · 2026</p>
          <h1 className="text-5xl font-semibold leading-[1.04] tracking-tight text-white sm:text-6xl md:text-7xl">
            Noor Akhnafal
            <br />
            <span className="bg-gradient-to-r from-teal via-emerald to-emerald-deep bg-clip-text text-transparent">
              Aban
            </span>
          </h1>
          <p className="mt-6 max-w-md text-base leading-relaxed text-mist">
            {persona.headline}. Currently in {persona.location}, building across iOS, backend
            systems, and the infrastructure that carries them.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#work"
              className="rounded-full border border-emerald/40 bg-emerald/10 px-5 py-2.5 text-sm font-medium text-emerald hover:bg-emerald/20 transition-colors"
            >
              View work
            </a>
            <a
              href="#contact"
              className="rounded-full border border-line px-5 py-2.5 text-sm font-medium text-mist hover:border-mist/60 hover:text-white transition-colors"
            >
              Get in touch
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="order-1 flex justify-center md:order-2 md:justify-end"
        >
          <Orb />
        </motion.div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <span className="label text-[0.62rem] opacity-60">scroll</span>
      </div>
    </section>
  )
}
