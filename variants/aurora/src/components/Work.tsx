import { motion, useReducedMotion } from 'motion/react'
import { projects, type Project } from '@/data/content'
import { SectionHeading } from './SectionHeading'
import { cn } from '@/lib/utils'

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const reduce = useReducedMotion()

  const links = [
    ...(project.live ? [{ label: 'Live', href: project.live }] : []),
    ...(project.link && !project.live ? [{ label: 'View', href: project.link }] : []),
    ...(project.repo ? [{ label: 'Repo', href: project.repo }] : []),
  ]

  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, y: 30, filter: 'blur(8px)' }}
      whileInView={reduce ? undefined : { opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
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

      {links.length > 0 && (
        <div className="mt-5 flex flex-wrap items-center gap-4 font-mono text-[11px]">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1 font-medium text-teal-300 transition-colors hover:text-teal-200"
            >
              {l.label} <span aria-hidden>↗</span>
            </a>
          ))}
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
