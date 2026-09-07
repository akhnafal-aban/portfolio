import { motion, useReducedMotion } from 'motion/react'
import { projects, type Project } from '@/data/content'
import { SectionHeading } from './SectionHeading'
import { cn } from '@/lib/utils'

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const reduce = useReducedMotion()

  return (
    <motion.a
      href={project.repo ?? project.link ?? '#work'}
      target={project.repo ?? project.link ? '_blank' : undefined}
      rel={project.repo ?? project.link ? 'noreferrer' : undefined}
      initial={reduce ? false : { opacity: 0, y: 30 }}
      whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.55, delay: (index % 2) * 0.08, ease: [0.22, 1, 0.36, 1] }}
      whileHover={reduce ? undefined : { scale: 1.015, y: -3 }}
      className={cn(
        'glass group flex h-full flex-col rounded-2xl p-6 transition-shadow duration-300 hover:shadow-[0_20px_60px_rgba(20,184,166,0.15)]',
      )}
    >
      <div className="flex items-start justify-between gap-3">
        <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-teal-300/70">
          {project.kind}
        </span>
        <span className="font-mono text-[10px] text-zinc-500">{project.period}</span>
      </div>

      <h3 className="mt-4 text-xl font-semibold tracking-tight text-white transition-colors group-hover:text-teal-100">
        {project.name}
      </h3>

      <p className="mt-3 flex-1 text-sm leading-relaxed text-zinc-400">{project.blurb}</p>

      <div className="mt-5 flex flex-wrap gap-1.5">
        {project.stack.map((tech) => (
          <span
            key={tech}
            className="rounded-md border border-white/10 bg-white/5 px-2 py-1 font-mono text-[10px] text-zinc-300"
          >
            {tech}
          </span>
        ))}
      </div>

      {(project.repo ?? project.link) && (
        <div className="mt-5 flex items-center gap-1.5 font-mono text-[11px] text-teal-300/70 transition-colors group-hover:text-teal-200">
          {project.repo ? 'github.com/akhnafal-aban' : 'view'}
          <span className="transition-transform group-hover:translate-x-0.5">→</span>
        </div>
      )}
    </motion.a>
  )
}

export function Work() {
  return (
    <section id="work" className="mx-auto max-w-5xl px-4 py-20 md:py-28">
      <SectionHeading index="01 / WORK" title="Selected projects" />
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        {projects.map((project, i) => (
          <ProjectCard key={project.id} project={project} index={i} />
        ))}
      </div>
    </section>
  )
}
