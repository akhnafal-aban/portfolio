import { Section } from './Section'
import { Reveal } from './Reveal'
import { persona, experience, awards } from '@/data/persona'

export function About() {
  return (
    <Section id="about" label="02 — About" title="A working engineer">
      <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
        <div className="md:col-span-1">
          <Reveal>
            <p className="text-base leading-relaxed text-white/85">{persona.summary}</p>
            <dl className="mt-8 space-y-4">
              <div>
                <dt className="label">Education</dt>
                <dd className="mt-1.5 text-sm text-white/85">
                  {persona.education.school}
                  <br />
                  <span className="text-mist">
                    {persona.education.program} · {persona.education.period}
                  </span>
                  <br />
                  <span className="font-mono text-[0.72rem] text-emerald">
                    GPA {persona.education.gpa}
                  </span>
                </dd>
              </div>
              <div>
                <dt className="label">Based in</dt>
                <dd className="mt-1.5 text-sm text-white/85">{persona.location}</dd>
              </div>
            </dl>
          </Reveal>
        </div>

        <div className="md:col-span-2">
          <ol className="relative space-y-8 border-l border-line pl-7">
            {experience.map((e, i) => (
              <Reveal key={e.role + e.org} delay={i * 0.05}>
                <li className="relative">
                  <span className="absolute -left-[34px] top-1.5 h-2.5 w-2.5 rounded-full bg-emerald/70 ring-4 ring-ink" />
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                    <h3 className="text-base font-semibold text-white">{e.role}</h3>
                    <span className="font-mono text-[0.68rem] text-mist">{e.period}</span>
                  </div>
                  <p className="mt-0.5 text-sm text-emerald/80">{e.org}</p>
                  <ul className="mt-3 space-y-1.5">
                    {e.bullets.map((b) => (
                      <li key={b} className="text-sm leading-relaxed text-mist">
                        — {b}
                      </li>
                    ))}
                  </ul>
                </li>
              </Reveal>
            ))}
          </ol>

          <Reveal delay={0.1}>
            <div className="mt-10 rounded-2xl border border-line bg-ink-2/60 p-5">
              <p className="label mb-3">Recognition</p>
              <ul className="space-y-2">
                {awards.map((a) => (
                  <li key={a} className="text-sm leading-relaxed text-mist">
                    {a}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  )
}
