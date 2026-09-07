import { projects, type Project } from '@/data/content'
import { SectionHeading } from '@/components/SectionHeading'
import { ArrowUpRight } from 'lucide-react'

const kindColor: Record<Project['kind'], string> = {
  iOS: 'bg-[#e8f1ff] text-accent',
  Web: 'bg-[#f0ece6] text-[#8a6d3b]',
  Research: 'bg-[#e9e8f7] text-[#4b46b0]',
  Desktop: 'bg-[#e6f4ec] text-[#1a7a45]',
}

export function Work() {
  return (
    <section id="work" className="scroll-mt-8 px-6 py-24">
      <div className="mx-auto w-full max-w-4xl">
        <SectionHeading index="01" title="Work" sub="Selected projects" />
        <div className="grid gap-4 sm:grid-cols-2">
          {projects.map((p) => (
            <article
              key={p.name}
              className="group rounded-2xl border border-line bg-card p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
            >
              <div className="flex items-start justify-between gap-3">
                <span
                  className={`rounded-full px-2.5 py-0.5 font-mono text-[10px] font-medium uppercase tracking-wide ${kindColor[p.kind]}`}
                >
                  {p.kind}
                </span>
                {p.repo && (
                  <a
                    href={p.repo}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${p.name} repository`}
                    className="text-ink-soft/40 transition-colors hover:text-accent"
                  >
                    <ArrowUpRight size={18} />
                  </a>
                )}
              </div>
              <h3 className="mt-3 text-lg font-semibold text-ink">{p.name}</h3>
              <p className="mt-1 font-mono text-[11px] text-ink-soft/60">
                {p.period}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft/90">
                {p.blurb}
              </p>
              <p className="mt-4 text-[11px] leading-relaxed text-ink-soft/60">
                {p.stack}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
