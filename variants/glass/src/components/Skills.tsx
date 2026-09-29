import { skills } from '@/data/content'
import { SectionHeading } from './SectionHeading'
import { Reveal } from './Reveal'

export function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-5xl px-4 py-20 md:py-28">
      <SectionHeading index="04 / SKILLS" title="Technical stack" />
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {skills.map((group, i) => (
          <Reveal key={group.category} delay={(i % 2) * 0.08}>
            <div className="glass h-full rounded-2xl p-5">
              <h3 className="font-mono text-[11px] uppercase tracking-[0.18em] text-teal-300/70">
                {group.category}
              </h3>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-lg border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-zinc-300 transition-colors hover:border-teal-400/30 hover:text-teal-100"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
