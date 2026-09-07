import { experiences, profile, achievements, type Experience } from '@/data'

function ExperienceItem({ item }: { item: Experience }) {
  return (
    <div className="grid grid-cols-1 gap-1 py-4 sm:grid-cols-[1fr_auto] sm:gap-6">
      <div className="min-w-0">
        <div className="flex flex-wrap items-baseline gap-x-2 gap-y-0.5">
          <h3 className="font-sans text-sm font-semibold text-text-primary">
            {item.role}
          </h3>
          <span className="font-mono text-xs text-accent-dim">
            {item.org}
          </span>
        </div>
        <ul className="mt-2 space-y-1">
          {item.bullets.map((b, i) => (
            <li
              key={i}
              className="flex gap-2 text-[13px] leading-relaxed text-text-secondary"
            >
              <span
                className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent/70"
                aria-hidden
              />
              <span>{b}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="font-mono text-xs text-text-tertiary sm:text-right sm:pt-1">
        {item.period}
      </div>
    </div>
  )
}

export function About() {
  return (
    <div className="space-y-10">
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="rounded-lg border border-border-subtle bg-canvas-soft p-4">
          <div className="font-mono text-[10px] uppercase tracking-wide text-text-tertiary">
            education
          </div>
          <div className="mt-1 text-sm text-text-primary">
            {profile.education}
          </div>
          <div className="mt-1 font-mono text-xs text-accent">
            GPA {profile.gpa}
          </div>
        </div>
        <div className="rounded-lg border border-border-subtle bg-canvas-soft p-4">
          <div className="font-mono text-[10px] uppercase tracking-wide text-text-tertiary">
            based in
          </div>
          <div className="mt-1 text-sm text-text-primary">
            {profile.location}
          </div>
          <div className="mt-1 font-mono text-xs text-text-secondary">
            iOS · Backend · Infrastructure
          </div>
        </div>
      </div>

      <div>
        <div className="mb-2 flex items-center gap-2">
          <span className="font-mono text-xs text-accent">// experience</span>
        </div>
        <div className="divide-y divide-border-subtle/60">
          {experiences.map((e) => (
            <ExperienceItem key={e.role + e.org} item={e} />
          ))}
        </div>
      </div>

      <div>
        <div className="mb-2 flex items-center gap-2">
          <span className="font-mono text-xs text-accent">// achievements</span>
        </div>
        <ul className="space-y-2">
          {achievements.map((a, i) => (
            <li
              key={i}
              className="flex gap-2 text-[13px] leading-relaxed text-text-secondary"
            >
              <span className="font-mono text-accent">★</span>
              <span>{a}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
