import { motion } from 'motion/react'
import { Magnetic } from './Magnetic'
import { projects, type Project } from '../data/content'

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <Magnetic
      as="div"
      strength={0.12}
      radius={80}
      className="group relative h-full"
    >
      <motion.article
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.7, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
        className="relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/5 bg-navy-card p-8 transition-colors duration-500 hover:border-gold/30"
      >
        {/* top row */}
        <div className="mb-6 flex items-start justify-between">
          <div className="flex flex-col">
            <span className="text-[10px] uppercase tracking-[0.25em] text-ink-soft/60">
              {project.year}
            </span>
            <span className="mt-1 text-[10px] uppercase tracking-[0.2em] text-gold/70">
              {project.tagline}
            </span>
          </div>
          {project.url && (
            <span className="text-ink-soft/40 transition-all duration-500 group-hover:translate-x-0.5 group-hover:text-gold">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M7 17L17 7M17 7H8M17 7V16" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          )}
        </div>

        {/* name */}
        <h3 className="mb-4 font-serif text-2xl font-medium tracking-tight text-ink">
          {project.name}
        </h3>

        {/* description */}
        <p className="mb-6 flex-1 text-sm font-light leading-relaxed text-ink-soft">
          {project.description}
        </p>

        {/* stack */}
        <div className="mt-auto pt-4 border-t border-white/5">
          <p className="text-[11px] tracking-wide text-ink-soft/70">{project.stack}</p>
        </div>

        {/* hover link */}
        {project.url && (
          <a
            href={project.url}
            target="_blank"
            rel="noreferrer"
            className="absolute inset-0"
            aria-label={`View ${project.name} on GitHub`}
          />
        )}
      </motion.article>
    </Magnetic>
  )
}

export function Work() {
  return (
    <section id="work" className="relative py-32 px-6">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <span className="text-xs uppercase tracking-[0.4em] text-gold/80">Selected</span>
          <h2 className="mt-3 font-serif text-4xl font-medium tracking-tight md:text-5xl">
            Work
          </h2>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <ProjectCard key={project.name} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
