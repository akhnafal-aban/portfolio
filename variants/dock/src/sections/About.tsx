import { experience } from '@/data/content'
import { SectionHeading } from '@/components/SectionHeading'

export function About() {
  return (
    <section id="about" className="scroll-mt-8 px-6 py-24">
      <div className="mx-auto w-full max-w-4xl">
        <SectionHeading index="02" title="About" sub="Experience & background" />

        <div className="relative border-l border-line pl-6">
          {experience.map((e) => (
            <article key={`${e.role}-${e.org}`} className="relative mb-9 last:mb-0">
              <span className="absolute -left-[1.68rem] top-1.5 h-2.5 w-2.5 rounded-full border-2 border-accent bg-bg" />
              <div className="flex flex-wrap items-baseline justify-between gap-x-3">
                <h3 className="text-base font-semibold text-ink">{e.role}</h3>
                <span className="font-mono text-[11px] text-ink-soft/60">
                  {e.period}
                  {e.type ? ` · ${e.type}` : ''}
                </span>
              </div>
              <p className="mt-0.5 text-sm font-medium text-accent">{e.org}</p>
              <ul className="mt-2.5 space-y-1.5">
                {e.points.map((pt, i) => (
                  <li
                    key={i}
                    className="text-sm leading-relaxed text-ink-soft/85"
                  >
                    {pt}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
