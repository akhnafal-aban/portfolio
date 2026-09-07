import { Section } from './Section'
import { Reveal } from './Reveal'
import { works, type Work as WorkItem } from '@/data/persona'

const kindColor: Record<WorkItem['kind'], string> = {
  iOS: 'text-teal border-teal/30 bg-teal/5',
  Academy: 'text-emerald border-emerald/30 bg-emerald/5',
  Web: 'text-amber border-amber/30 bg-amber/5',
  Research: 'text-mist border-line bg-white/0',
  Backend: 'text-emerald-deep border-emerald-deep/30 bg-emerald-deep/5',
}

export function Work() {
  return (
    <Section id="work" label="01 — Selected Work" title="Things I have built">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {works.map((w, i) => (
          <Reveal key={w.title} delay={i * 0.05}>
            <article className="group relative h-full rounded-2xl border border-line bg-ink-2/60 p-6 transition-colors hover:border-emerald/30 hover:bg-ink-3/60">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <span
                    className={`inline-block rounded-full border px-2.5 py-0.5 text-[0.62rem] font-medium ${kindColor[w.kind]}`}
                  >
                    {w.kind}
                  </span>
                  <h3 className="mt-3 text-xl font-semibold text-white">{w.title}</h3>
                  <p className="mt-1 font-mono text-[0.7rem] text-mist">{w.period}</p>
                </div>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-mist">{w.blurb}</p>
              <div className="mt-5 flex flex-wrap gap-1.5">
                {w.stack.map((s) => (
                  <span
                    key={s}
                    className="rounded-md bg-white/[0.03] px-2 py-1 font-mono text-[0.66rem] text-mist/90 ring-1 ring-inset ring-line"
                  >
                    {s}
                  </span>
                ))}
              </div>
              {w.repo && (
                <a
                  href={w.repo}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5 inline-flex items-center gap-1.5 text-[0.78rem] font-medium text-emerald opacity-0 transition-opacity group-hover:opacity-100"
                >
                  View repository →
                </a>
              )}
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
