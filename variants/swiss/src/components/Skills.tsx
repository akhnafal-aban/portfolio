import { skills } from '@/data'
import { Section } from './Section'
import { Reveal } from './Reveal'

export function Skills() {
  return (
    <Section id="skills" index="04" label="Capabilities">
      <Reveal>
        <div className="grid grid-cols-12 gap-x-4 gap-y-px sm:gap-x-6">
          {skills.map((s, i) => (
            <div
              key={s.group}
              className="col-span-12 border-t border-hairline py-6 grid grid-cols-12 gap-x-4 gap-y-2 sm:gap-x-6"
            >
              <div className="col-span-12 md:col-span-3">
                <span className="t-mono-num text-[11px] text-accent mr-3">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="text-[14px] font-medium text-ink">
                  {s.group}
                </span>
              </div>
              <div className="col-span-12 md:col-span-9">
                <ul className="flex flex-wrap gap-x-6 gap-y-2">
                  {s.items.map((item) => (
                    <li
                      key={item}
                      className="text-[15px] text-ink-soft"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </Reveal>
    </Section>
  )
}
