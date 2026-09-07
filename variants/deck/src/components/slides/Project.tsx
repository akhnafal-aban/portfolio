import type { Project } from '@/data/portfolio'
import { SlideShell, Kicker } from '@/components/SlideShell'

export function ProjectSlide({
  project,
  index,
  total,
}: {
  project: Project
  index: number
  total: number
}) {
  return (
    <SlideShell index={index} total={total} label={`Project ${project.index}`}>
      <Kicker>
        Project {project.index} · {project.year}
      </Kicker>
      <div className="grid gap-8 lg:grid-cols-[1fr_1fr] lg:gap-14">
        <div className="flex flex-col gap-5">
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            {project.title}
          </h2>
          {project.status && (
            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-amber/40 bg-amber/10 px-3 py-1 font-mono text-xs text-amber">
              <span className="h-1.5 w-1.5 rounded-full bg-amber" />
              {project.status}
            </div>
          )}
          <p className="max-w-md text-lg leading-snug text-paper/85">{project.tagline}</p>
          {project.repo && (
            <a
              href={project.repo}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex w-fit items-center gap-2 font-mono text-sm text-mute transition-colors hover:text-amber"
            >
              <span className="text-amber group-hover:text-amber-2">↗</span>
              {project.repo.replace('https://', '')}
            </a>
          )}
        </div>

        <div className="flex flex-col gap-6">
          <div>
            <div className="font-mono text-xs uppercase tracking-widest text-mute-2">Stack</div>
            <div className="mt-3 flex flex-wrap gap-2">
              {project.stack.map((s) => (
                <span
                  key={s}
                  className="rounded border border-line bg-ink-2 px-2.5 py-1 font-mono text-xs text-paper/80"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
          <div>
            <div className="font-mono text-xs uppercase tracking-widest text-mute-2">Notes</div>
            <ul className="mt-3 flex flex-col gap-2.5">
              {project.bullets.map((b) => (
                <li key={b} className="flex gap-2.5 text-sm leading-relaxed text-paper/80">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-amber" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </SlideShell>
  )
}
