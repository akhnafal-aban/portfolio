import { projects } from '@/data'
import { Section } from './Section'
import { Reveal } from './Reveal'

export function Work() {
  return (
    <Section id="work" index="01" label="Selected Work">
      <Reveal>
        <div className="grid grid-cols-12 gap-x-4 gap-y-px sm:gap-x-6">
          <div className="col-span-12 mb-10 grid grid-cols-12 gap-x-4 sm:gap-x-6">
            <h2 className="col-span-12 font-medium tracking-tight text-ink md:col-span-8"
              style={{ fontSize: 'clamp(32px, 5vw, 56px)', lineHeight: 1.02 }}
            >
              Six projects. iOS,
              <br className="hidden sm:block" /> backend, and research.
            </h2>
            <p className="col-span-12 mt-6 t-body md:col-span-4 md:mt-1 md:text-right md:self-end">
              2025 — 2026. Production and academic.
            </p>
          </div>

          <div className="col-span-12">
            {projects.map((p) => (
              <ProjectRow key={p.index} project={p} />
            ))}
          </div>
        </div>
      </Reveal>
    </Section>
  )
}

function ProjectRow({ project }: { project: (typeof projects)[number] }) {
  return (
    <Reveal>
      <article className="border-t border-hairline py-8 grid grid-cols-12 gap-x-4 gap-y-3 sm:gap-x-6 md:py-10">
        <div className="col-span-12 md:col-span-1">
          <span className="t-mono-num text-[12px] font-medium text-accent">
            {project.index}
          </span>
        </div>

        <div className="col-span-12 md:col-span-4">
          <h3
            className="font-medium tracking-tight text-ink"
            style={{ fontSize: 'clamp(20px, 2vw, 24px)', lineHeight: 1.15 }}
          >
            {project.name}
          </h3>
          <div className="t-label mt-1.5">{project.type}</div>
        </div>

        <div className="col-span-12 md:col-span-5">
          <p className="t-body">{project.description}</p>
          <div className="t-label mt-3" style={{ letterSpacing: '0.08em' }}>
            {project.stack}
          </div>
        </div>

        <div className="col-span-12 md:col-span-2 md:text-right">
          <div className="t-mono-num text-[14px] font-medium text-ink">
            {project.year}
          </div>
          {project.url && (
            <a
              href={project.url}
              target="_blank"
              rel="noreferrer"
              className="t-label mt-2 inline-block border-b border-accent pb-0.5 text-accent transition-colors hover:text-ink"
            >
              Repository →
            </a>
          )}
        </div>
      </article>
    </Reveal>
  )
}
