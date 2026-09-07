import { motion } from 'motion/react'
import { Magnetic } from './Magnetic'
import { profile } from '../data/content'

const socials = [
  { label: 'Email', value: 'akhnafal03@gmail.com', href: `mailto:${profile.email}` },
  { label: 'GitHub', value: 'akhnafal-aban', href: profile.github },
  { label: 'LinkedIn', value: 'akhnaf-aban', href: profile.linkedin },
  { label: 'YouTube', value: '@noorakhnafalaban', href: profile.youtube },
]

export function Contact() {
  return (
    <section id="contact" className="relative py-32 px-6">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-center text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-xs uppercase tracking-[0.4em] text-gold/80"
          >
            Get in touch
          </motion.span>

          <Magnetic strength={0.1} radius={200} className="inline-block">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="mt-6 max-w-3xl font-serif text-5xl font-medium leading-tight tracking-tight md:text-6xl"
            >
              Let's build something
              <span className="text-gold italic"> worth keeping</span>
            </motion.h2>
          </Magnetic>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-12"
          >
            <Magnetic as="a" href={`mailto:${profile.email}`} strength={0.4} radius={120}>
              <span className="inline-flex items-center gap-3 rounded-full border border-gold px-8 py-4 text-sm tracking-wide text-gold transition-all duration-300 hover:bg-gold hover:text-navy">
                Start a conversation
              </span>
            </Magnetic>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-20 grid w-full max-w-3xl gap-4 sm:grid-cols-2"
          >
            {socials.map((social) => (
              <Magnetic key={social.label} as="a" href={social.href} target="_blank" rel="noreferrer" strength={0.15} radius={80}>
                <div className="group flex items-center justify-between rounded-xl border border-white/5 bg-navy-card px-6 py-4 transition-colors hover:border-gold/30">
                  <div className="flex flex-col items-start">
                    <span className="text-[10px] uppercase tracking-[0.25em] text-ink-soft/50">
                      {social.label}
                    </span>
                    <span className="mt-1 text-sm font-light text-ink transition-colors group-hover:text-gold">
                      {social.value}
                    </span>
                  </div>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-ink-soft/40 transition-colors group-hover:text-gold">
                    <path d="M7 17L17 7M17 7H8M17 7V16" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </Magnetic>
            ))}
          </motion.div>
        </div>

        <motion.footer
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-32 flex flex-col items-center gap-3 border-t border-white/5 pt-12 text-center"
        >
          <p className="font-serif text-lg text-ink-soft">Noor Akhnafal Aban</p>
          <p className="text-[10px] uppercase tracking-[0.3em] text-ink-soft/40">
            {profile.basedIn} · {new Date().getFullYear()}
          </p>
        </motion.footer>
      </div>
    </section>
  )
}
