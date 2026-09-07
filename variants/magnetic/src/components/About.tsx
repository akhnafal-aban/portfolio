import { motion } from 'motion/react'
import { Magnetic } from './Magnetic'
import { profile, experience, awards } from '../data/content'

export function About() {
  return (
    <section id="about" className="relative py-32 px-6">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <span className="text-xs uppercase tracking-[0.4em] text-gold/80">Background</span>
          <h2 className="mt-3 font-serif text-4xl font-medium tracking-tight md:text-5xl">About</h2>
        </motion.div>

        <div className="grid gap-16 lg:grid-cols-[1fr_1.2fr]">
          {/* left: bio */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-8"
          >
            <Magnetic as="div" strength={0.08} radius={100}>
              <p className="font-serif text-2xl font-light leading-relaxed text-ink">
                Software engineer. iOS and backend. Jakarta.
              </p>
            </Magnetic>
            <p className="text-sm font-light leading-relaxed text-ink-soft">
              {profile.summary}
            </p>
            <div className="flex flex-col gap-3 border-t border-white/5 pt-6">
              <div className="flex gap-4">
                <span className="w-24 shrink-0 text-[10px] uppercase tracking-[0.2em] text-ink-soft/50">
                  Education
                </span>
                <span className="text-sm text-ink-soft">
                  {profile.education}
                </span>
              </div>
              <div className="flex gap-4">
                <span className="w-24 shrink-0 text-[10px] uppercase tracking-[0.2em] text-ink-soft/50">
                  GPA
                </span>
                <span className="text-sm text-gold">{profile.gpa}</span>
              </div>
              <div className="flex gap-4">
                <span className="w-24 shrink-0 text-[10px] uppercase tracking-[0.2em] text-ink-soft/50">
                  Awards
                </span>
                <div className="flex flex-col gap-1">
                  {awards.map((a) => (
                    <span key={a} className="text-sm text-ink-soft">{a}</span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* right: experience timeline */}
          <div className="flex flex-col gap-8">
            {experience.map((exp, i) => (
              <motion.div
                key={exp.org}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="relative border-l border-gold/20 pl-6"
              >
                <div className="absolute -left-[3px] top-1.5 h-1.5 w-1.5 rounded-full bg-gold/60" />
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="font-serif text-lg font-medium text-ink">{exp.role}</h3>
                  <span className="text-[11px] tracking-wide text-ink-soft/60">{exp.period}</span>
                </div>
                <p className="mb-3 text-xs tracking-wide text-gold/80">{exp.org}</p>
                <ul className="flex flex-col gap-2">
                  {exp.bullets.map((b, bi) => (
                    <li key={bi} className="text-sm font-light leading-relaxed text-ink-soft">
                      {b}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
