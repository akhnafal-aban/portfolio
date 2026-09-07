import { profile, education, journey, recognition } from '@/data'
import { Section } from './Section'
import { Reveal } from './Reveal'

export function About() {
  return (
    <Section id="about" index="02" label="About">
      <Reveal>
        <div className="grid grid-cols-12 gap-x-4 gap-y-12 sm:gap-x-6 md:gap-y-16">
          {/* Bio */}
          <div className="col-span-12 md:col-span-7">
            <h2
              className="font-medium tracking-tight text-ink"
              style={{ fontSize: 'clamp(32px, 5vw, 56px)', lineHeight: 1.05 }}
            >
              {profile.role}.
              <br />
              {profile.location}.
            </h2>
            <p
              className="mt-8 text-ink-soft"
              style={{ fontSize: 'clamp(17px, 1.8vw, 20px)', lineHeight: 1.55 }}
            >
              {profile.summary}
            </p>
          </div>

          {/* Education + recognition */}
          <div className="col-span-12 md:col-span-5 md:pl-8 md:border-l md:border-hairline">
            <div className="t-label mb-4">Education</div>
            <div className="font-medium text-ink" style={{ fontSize: 18 }}>
              {education.institution}
            </div>
            <div className="t-body mt-1">{education.degree}</div>
            <div className="t-body text-ink-mute">
              {education.period} · {education.city}
            </div>
            <div className="t-mono-num mt-3 text-[14px] text-ink">
              GPA {education.gpa}
            </div>

            <div className="t-label mt-10 mb-4">Recognition</div>
            <ul className="space-y-3">
              {recognition.map((r) => (
                <li key={r.title} className="flex gap-3">
                  <span className="t-mono-num text-[10px] text-accent mt-1">●</span>
                  <div>
                    <div className="text-[14px] font-medium text-ink">
                      {r.title}
                    </div>
                    <div className="t-body text-[13px]">{r.detail}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Journey */}
          <div className="col-span-12">
            <div className="t-label mb-6">Journey</div>
            <div>
              {journey.map((j) => (
                <div
                  key={j.role + j.org}
                  className="border-t border-hairline py-5 grid grid-cols-12 gap-x-4 gap-y-2 sm:gap-x-6"
                >
                  <div className="col-span-12 md:col-span-3 t-mono-num text-[13px] text-ink-mute">
                    {j.period}
                  </div>
                  <div className="col-span-12 md:col-span-4">
                    <div className="text-[15px] font-medium text-ink">
                      {j.role}
                    </div>
                    <div className="t-body text-[13px]">{j.org}</div>
                  </div>
                  <div className="col-span-12 md:col-span-5 t-body text-[13px]">
                    {j.note}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Reveal>
    </Section>
  )
}
