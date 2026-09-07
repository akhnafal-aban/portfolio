import { PROJECTS } from '@/data/content'
import { SectionHeader } from './SectionHeader'

export function Work() {
  return (
    <section className="border-b border-rule py-16 md:py-24">
      <SectionHeader number="01" label="Selected Work" title="Six things that run." />

      <div className="border-t border-rule">
        {PROJECTS.map((p) => (
          <article
            key={p.index}
            className="reveal py-9 md:py-14 border-b border-rule grid grid-cols-1 md:grid-cols-12 gap-x-8 gap-y-5"
          >
            <div className="md:col-span-2">
              <span className="font-display text-accent text-2xl md:text-3xl tabular-nums">{p.index}</span>
              <p className="label-caps text-ink-muted text-[10px] mt-3">{p.period}</p>
            </div>

            <div className="md:col-span-7">
              <h3 className="font-display text-2xl md:text-4xl leading-tight text-ink">{p.title}</h3>
              <p className="font-body text-ink-muted text-sm mt-1 mb-4">{p.meta}</p>
              <p className="text-ink-soft leading-relaxed">{p.blurb}</p>
              {p.detail ? <p className="text-ink-muted text-sm leading-relaxed mt-3 italic">{p.detail}</p> : null}

              <ul className="flex flex-wrap gap-x-3 gap-y-1.5 mt-5">
                {p.tags.map((t) => (
                  <li key={t} className="font-body text-[11px] text-ink-muted">
                    {t}
                  </li>
                ))}
              </ul>
            </div>

            <div className="md:col-span-3 md:text-right flex flex-col md:items-end justify-start">
              <a
                href={p.repo.href}
                target="_blank"
                rel="noreferrer noopener"
                className="font-body text-sm text-accent hover:underline underline-offset-4 decoration-accent/40"
              >
                {p.repo.label}
                <span aria-hidden className="ml-1">↗</span>
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
