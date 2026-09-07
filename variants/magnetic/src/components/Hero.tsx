import { motion } from 'motion/react'
import { Magnetic } from './Magnetic'
import { profile } from '../data/content'

export function Hero() {
  return (
    <section id="top" className="relative flex min-h-screen items-center justify-center overflow-hidden px-6">
      {/* ambient glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/[0.06] blur-[120px]" />

      <div className="relative z-10 flex flex-col items-center text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mb-8 text-xs uppercase tracking-[0.4em] text-ink-soft"
        >
          {profile.basedIn}
        </motion.p>

        <Magnetic strength={0.15} radius={200} className="inline-block">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif text-6xl font-medium leading-none tracking-tight sm:text-7xl md:text-8xl lg:text-9xl"
          >
            Noor
            <span className="text-gold italic"> Akhnafal</span>
          </motion.h1>
        </Magnetic>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-6 max-w-md text-sm font-light tracking-[0.15em] text-ink-soft sm:text-base"
        >
          {profile.headline}
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-12 flex flex-col items-center gap-5 sm:flex-row sm:gap-6"
        >
          <Magnetic as="a" href="#work" strength={0.4} radius={100}>
            <span className="inline-flex items-center gap-3 rounded-full border border-gold/50 px-7 py-3 text-sm tracking-wide text-gold transition-colors hover:bg-gold hover:text-navy">
              View Work
            </span>
          </Magnetic>
          <Magnetic as="a" href="#contact" strength={0.4} radius={100}>
            <span className="text-sm tracking-wide text-ink-soft transition-colors hover:text-gold">
              Get in touch
            </span>
          </Magnetic>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2 text-ink-soft/50">
          <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="h-10 w-px bg-gradient-to-b from-gold/40 to-transparent"
          />
        </div>
      </motion.div>
    </section>
  )
}
