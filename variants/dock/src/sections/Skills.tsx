import { skillGroups } from '@/data/content'
import { SectionHeading } from '@/components/SectionHeading'

export function Skills() {
  return (
    <section id="skills" className="scroll-mt-8 px-6 py-24">
      <div className="mx-auto w-full max-w-4xl">
        <SectionHeading index="04" title="Skills" sub="Toolkit across the stack" />
        <div className="grid gap-5 sm:grid-cols-2">
          {skillGroups.map((g) => (
            <div key={g.label} className="rounded-2xl border border-line bg-card p-5 shadow-sm">
              <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-ink">
                {g.label}
              </h3>
              <div className="flex flex-wrap gap-2">
                {g.skills.map((s) => (
                  <span
                    key={s}
                    className="rounded-lg bg-bg px-2.5 py-1 text-sm text-ink-soft transition-colors hover:bg-accent-soft hover:text-accent"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
