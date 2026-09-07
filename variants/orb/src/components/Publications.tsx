import { Section } from './Section'
import { Reveal } from './Reveal'
import { publications } from '@/data/persona'

export function Publications() {
  return (
    <Section id="publications" label="03 — Publications" title="Published research">
      <div className="space-y-4">
        {publications.map((p, i) => (
          <Reveal key={p.title} delay={i * 0.05}>
            <article className="rounded-2xl border border-line bg-ink-2/60 p-6">
              <p className="label text-emerald/80">Journal article</p>
              <h3 className="mt-3 text-lg font-semibold leading-snug text-white">{p.title}</h3>
              <p className="mt-3 text-sm text-white/85">{p.authors}</p>
              <p className="mt-1 text-sm text-mist">{p.venue}</p>
              <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2 font-mono text-[0.7rem]">
                <span className="text-emerald">{p.date}</span>
                <span className="text-mist">Indexed in: {p.indexed}</span>
                {p.pipeline && <span className="text-mist">Pipeline: {p.pipeline}</span>}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
