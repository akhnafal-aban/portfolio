import { PUBLICATIONS } from '@/data/content'
import { SectionHeader } from './SectionHeader'

export function Publications() {
  return (
    <section className="border-b border-rule py-16 md:py-24">
      <SectionHeader number="03" label="Publications" title="In print." />

      <div className="border-t border-rule">
        {PUBLICATIONS.map((pub) => (
          <article key={pub.title} className="reveal py-10 md:py-14 border-b border-rule grid grid-cols-1 md:grid-cols-12 gap-x-8 gap-y-6">
            <div className="md:col-span-2 label-caps text-ink-muted text-[10px]">Paper</div>

            <div className="md:col-span-7">
              <h3 className="font-display text-2xl md:text-4xl leading-tight text-ink">{pub.title}</h3>
              <p className="font-display italic text-ink-muted text-lg md:text-xl mt-2">{pub.subtitle}</p>
              <p className="text-ink-soft mt-4">{pub.authors}</p>
              <p className="text-ink-muted text-sm mt-2">{pub.venue}</p>
              <p className="text-ink-muted text-sm">{pub.volume}</p>
              <p className="text-ink-muted text-sm mt-2">{pub.indexed}</p>
            </div>

            <div className="md:col-span-3 md:text-right flex md:justify-end">
              <a
                href={pub.pipeline.href}
                target="_blank"
                rel="noreferrer noopener"
                className="font-body text-sm text-accent hover:underline underline-offset-4 decoration-accent/40 self-start md:self-end"
              >
                {pub.pipeline.label}
                <span aria-hidden className="ml-1">↗</span>
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
