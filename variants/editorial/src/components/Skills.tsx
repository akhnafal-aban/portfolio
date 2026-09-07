import { SKILLS } from '@/data/content'
import { SectionHeader } from './SectionHeader'

export function Skills() {
  return (
    <section className="border-b border-rule py-16 md:py-24">
      <SectionHeader number="04" label="Skills" title="The working surface." />

      <div className="border-t border-rule">
        <dl className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10">
          {SKILLS.map((s) => (
            <div key={s.group} className="reveal py-6 border-b border-rule">
              <dt className="font-display text-lg md:text-xl text-ink leading-snug">{s.group}</dt>
              <dd className="mt-2">
                <ul className="flex flex-wrap gap-x-3 gap-y-1.5">
                  {s.items.map((it) => (
                    <li key={it} className="text-ink-muted text-sm">
                      {it}
                    </li>
                  ))}
                </ul>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
