import { publications } from '@/data/content'
import { SectionHeading } from './SectionHeading'
import { Reveal } from './Reveal'

export function Publications() {
  return (
    <section id="publications" className="mx-auto max-w-5xl px-4 py-20 md:py-28">
      <SectionHeading index="03 / WRITING" title="Publications" />
      <div className="grid grid-cols-1 gap-5">
        {publications.map((pub) => (
          <Reveal key={pub.title}>
            <article className="glass rounded-2xl p-6 md:p-8">
              <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-teal-300/70">
                    <span className="rounded bg-teal-400/15 px-1.5 py-0.5 text-teal-200">{pub.year}</span>
                    <span>Indexed: {pub.indexed}</span>
                  </div>
                  <h3 className="mt-4 text-xl font-semibold leading-snug tracking-tight text-white">
                    {pub.title}
                  </h3>
                  <p className="mt-2 text-sm text-zinc-400">{pub.authors}</p>
                  <p className="mt-1 font-mono text-xs text-zinc-500">{pub.venue}</p>
                  <p className="mt-4 max-w-2xl text-sm leading-relaxed text-zinc-400">{pub.abstract}</p>
                  {pub.repo && (
                    <a
                      href={pub.repo}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-5 inline-flex items-center gap-1.5 font-mono text-xs text-teal-300 transition-colors hover:text-teal-200"
                    >
                      Companion pipeline
                      <span aria-hidden>→</span>
                    </a>
                  )}
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
