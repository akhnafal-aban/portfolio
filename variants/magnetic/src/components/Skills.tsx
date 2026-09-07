import { motion } from 'motion/react'
import { skillGroups } from '../data/content'

export function Skills() {
  return (
    <section id="skills" className="relative py-32 px-6">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <span className="text-xs uppercase tracking-[0.4em] text-gold/80">Toolkit</span>
          <h2 className="mt-3 font-serif text-4xl font-medium tracking-tight md:text-5xl">
            Skills
          </h2>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, i) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              className="rounded-xl border border-white/5 bg-navy-card p-6 transition-colors hover:border-gold/20"
            >
              <h3 className="mb-4 font-serif text-lg font-medium text-gold">{group.category}</h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-white/10 px-3 py-1 text-xs font-light tracking-wide text-ink-soft transition-colors hover:border-gold/40 hover:text-ink"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
