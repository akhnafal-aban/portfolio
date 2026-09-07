import { motion } from 'motion/react'
import { publication } from '../data/content'

export function Publications() {
  return (
    <section id="publications" className="relative py-32 px-6">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <span className="text-xs uppercase tracking-[0.4em] text-gold/80">Research</span>
          <h2 className="mt-3 font-serif text-4xl font-medium tracking-tight md:text-5xl">
            Publications
          </h2>
        </motion.div>

        <motion.article
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative overflow-hidden rounded-2xl border border-gold/15 bg-navy-card p-8 md:p-12"
        >
          <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-gold/[0.05] blur-[80px]" />
          <div className="relative z-10">
            <span className="text-[10px] uppercase tracking-[0.3em] text-gold/80">Journal Article · 2026</span>
            <h3 className="mt-4 max-w-2xl font-serif text-3xl font-medium leading-tight tracking-tight md:text-4xl">
              {publication.title}
            </h3>
            <p className="mt-2 text-sm font-light italic text-ink-soft">
              {publication.subtitle}
            </p>
            <div className="mt-8 flex flex-col gap-3 border-t border-white/5 pt-6">
              <div className="flex gap-4">
                <span className="w-24 shrink-0 text-[10px] uppercase tracking-[0.2em] text-ink-soft/50">
                  Authors
                </span>
                <span className="text-sm text-ink-soft">{publication.authors}</span>
              </div>
              <div className="flex gap-4">
                <span className="w-24 shrink-0 text-[10px] uppercase tracking-[0.2em] text-ink-soft/50">
                  Journal
                </span>
                <span className="text-sm text-ink-soft">{publication.journal}</span>
              </div>
              <div className="flex gap-4">
                <span className="w-24 shrink-0 text-[10px] uppercase tracking-[0.2em] text-ink-soft/50">
                  Volume
                </span>
                <span className="text-sm text-gold">{publication.volume}</span>
              </div>
              <div className="flex gap-4">
                <span className="w-24 shrink-0 text-[10px] uppercase tracking-[0.2em] text-ink-soft/50">
                  Indexed
                </span>
                <span className="text-sm text-ink-soft">{publication.indexed}</span>
              </div>
            </div>
          </div>
        </motion.article>
      </div>
    </section>
  )
}
