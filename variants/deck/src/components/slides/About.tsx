import { profile, experience, skillGroups, awards } from '@/data/portfolio'
import { SlideShell, Kicker } from '@/components/SlideShell'

export function AboutSlide({ index, total }: { index: number; total: number }) {
  return (
    <SlideShell index={index} total={total} label="About">
      <Kicker>About</Kicker>
      <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:gap-14">
        <div className="flex flex-col gap-6">
          <p className="text-2xl font-medium leading-snug tracking-tight sm:text-3xl">
            Software engineer across iOS, backend, deployment, and server operations.
          </p>
          <p className="max-w-xl text-base leading-relaxed text-paper/75">
            {profile.summary}
          </p>
          <div className="mt-2 grid grid-cols-2 gap-4 font-mono text-xs">
            <div>
              <div className="text-mute-2">EDUCATION</div>
              <div className="mt-1 text-paper/90">Universitas Islam Indonesia</div>
              <div className="text-mute">Yogyakarta · 2022 - 2026 (Graduated)</div>
              <div className="text-amber">GPA {profile.gpa}</div>
            </div>
            <div>
              <div className="text-mute-2">BASED</div>
              <div className="mt-1 text-paper/90">{profile.based}</div>
              <div className="text-mute">From {profile.from}</div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <div>
            <div className="font-mono text-xs uppercase tracking-widest text-mute-2">Experience</div>
            <div className="mt-3 flex flex-col gap-3">
              {experience.map((e) => (
                <div key={e.role} className="border-l border-line pl-3">
                  <div className="text-sm font-semibold text-paper">{e.role}</div>
                  <div className="font-mono text-xs text-mute">
                    {e.org} · {e.meta}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="font-mono text-xs uppercase tracking-widest text-mute-2">Stack</div>
            <div className="mt-3 flex flex-col gap-2">
              {skillGroups.map((g) => (
                <div key={g.label} className="flex items-baseline gap-3">
                  <span className="w-20 shrink-0 font-mono text-xs text-amber">{g.label}</span>
                  <span className="font-mono text-xs text-paper/70">{g.items.join(' · ')}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="font-mono text-xs uppercase tracking-widest text-mute-2">Recognition</div>
            <div className="mt-3 flex flex-col gap-1.5 text-sm text-paper/80">
              {awards.map((a) => (
                <div key={a} className="flex items-center gap-2">
                  <span className="text-amber">›</span>
                  {a}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SlideShell>
  )
}
