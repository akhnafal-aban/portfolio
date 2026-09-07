import { Section } from './Section'
import { Reveal } from './Reveal'
import { skillGroups } from '@/data/persona'

export function Skills() {
  return (
    <Section id="skills" label="04 — Skills" title="What I work with">
      <div className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((g, i) => (
          <Reveal key={g.label} delay={i * 0.03}>
            <div className="h-full bg-ink-2/70 p-6">
              <p className="label text-emerald/80">{g.label}</p>
              <ul className="mt-3 flex flex-wrap gap-2">
                {g.items.map((s) => (
                  <li
                    key={s}
                    className="rounded-md bg-white/[0.03] px-2.5 py-1 text-[0.78rem] text-white/85 ring-1 ring-inset ring-line"
                  >
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
