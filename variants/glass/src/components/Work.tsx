import { motion, useReducedMotion } from 'motion/react'
import { projects, type Project } from '@/data/content'
import { SectionHeading } from './SectionHeading'
import { cn } from '@/lib/utils'
import { EASE_OUT, STAGGER } from '@/lib/motion'

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const reduce = useReducedMotion()

  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, y: 30 }}
      whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay: (index % 2) * STAGGER, ease: [...EASE_OUT] }}
      whileHover={reduce ? undefined : { scale: 1.02, transition: { duration: 0.4, ease: 'easeOut' } }}
      className={cn(
        'glass group flex h-full flex-col rounded-2xl p-6',
        'transition-[border-color,box-shadow] duration-[400ms] ease-out',
        'hover:border-teal-400/40 hover:shadow-[0_20px_60px_rgba(20,184,166,0.18)]',
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

      {(project.repo ?? project.live ?? project.link ?? project.admin) && (
        <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-1.5 font-mono text-[11px]">
          {project.repo && (
            <a
              href={project.repo}
              target="_blank"
              rel="noreferrer"
              className="text-zinc-400 transition-colors hover:text-teal-200"
            >
              Repo <span aria-hidden>↗</span>
            </a>
          )}
          {project.link && !project.repo && !project.live && (
            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="text-zinc-400 transition-colors hover:text-teal-200"
            >
              Link <span aria-hidden>↗</span>
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              className="font-medium text-teal-300 transition-colors hover:text-teal-200"
            >
              Live <span aria-hidden>↗</span>
            </a>
          )}
          {project.admin && (
            <a
              href={project.admin}
              target="_blank"
              rel="noreferrer"
              className="text-zinc-500 transition-colors hover:text-teal-300/80"
            >
              Admin <span aria-hidden>↗</span>
            </a>
          )}
        </div>
      )}
    </motion.div>
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
