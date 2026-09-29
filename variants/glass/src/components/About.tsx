import { experience, awards } from '@/data/content'
import { SectionHeading } from './SectionHeading'
import { Reveal } from './Reveal'

export function About() {
  return (
    <section id="about" className="mx-auto max-w-5xl px-4 py-20 md:py-28">
      <SectionHeading index="02 / ABOUT" title="Experience" />

      <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <div className="glass rounded-2xl p-6 md:p-8">
            <div className="space-y-6">
              {experience.map((exp) => (
                <Reveal key={exp.role + exp.org}>
                  <div className="relative border-l border-white/10 pl-5 pb-1 last:pb-0">
                    <span className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full border border-teal-400/40 bg-teal-400/20" />
                    <div className="flex flex-col gap-1 md:flex-row md:items-baseline md:justify-between">
                      <h3 className="text-base font-semibold text-white">{exp.role}</h3>
                      <span className="font-mono text-[11px] text-zinc-500">{exp.period}</span>
                    </div>
                    <p className="mt-0.5 text-sm text-teal-300/80">{exp.org}</p>
                    <ul className="mt-3 space-y-1.5">
                      {exp.bullets.map((b) => (
                        <li key={b} className="text-sm leading-relaxed text-zinc-400">
                          <span className="mr-2 text-teal-400/50">·</span>
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-5">
          <Reveal>
            <div className="glass rounded-2xl p-6">
              <h3 className="font-mono text-[11px] uppercase tracking-[0.18em] text-teal-300/70">
                Education
              </h3>
              <p className="mt-3 text-sm font-medium text-white">Universitas Islam Indonesia</p>
              <p className="text-sm text-zinc-400">Bachelor of Informatics</p>
              <p className="mt-1 text-xs text-zinc-500">Faculty of Industrial Technology · 2022 - Present</p>
              <div className="mt-4 inline-flex items-baseline gap-1.5 rounded-lg border border-teal-400/20 bg-teal-400/5 px-3 py-1.5">
                <span className="font-mono text-lg font-semibold text-teal-200">3.87</span>
                <span className="text-xs text-zinc-500">/ 4.00 GPA</span>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="glass rounded-2xl p-6">
              <h3 className="font-mono text-[11px] uppercase tracking-[0.18em] text-teal-300/70">
                Awards
              </h3>
              <div className="mt-3 space-y-3">
                {awards.map((a) => (
                  <div key={a.title}>
                    <p className="text-sm font-medium text-white">{a.title}</p>
                    <p className="mt-0.5 text-xs leading-relaxed text-zinc-500">{a.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
