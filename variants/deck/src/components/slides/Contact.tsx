import { profile } from '@/data/portfolio'
import { SlideShell, Kicker } from '@/components/SlideShell'

export function ContactSlide({ index, total }: { index: number; total: number }) {
  const links = [
    { label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
    { label: 'GitHub', value: 'akhnafal-aban', href: profile.github },
    { label: 'LinkedIn', value: 'akhnaf-aban', href: profile.linkedin },
    { label: 'YouTube', value: '@noorakhnafalaban-9917', href: profile.youtube },
  ]
  return (
    <SlideShell index={index} total={total} label="Contact">
      <Kicker>Let's talk</Kicker>
      <h2 className="text-4xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
        Build something
        <br />
        <span className="text-amber">that ships.</span>
      </h2>
      <p className="mt-5 max-w-md text-base text-paper/75">
        Open to iOS and backend work. Currently at {profile.currentRole.split('·')[0].trim()}.
      </p>

      <div className="mt-10 grid gap-3 sm:grid-cols-2">
        {links.map((l) => (
          <a
            key={l.label}
            href={l.href}
            target={l.href.startsWith('mailto:') ? undefined : '_blank'}
            rel="noreferrer"
            className="group flex items-center justify-between rounded-lg border border-line bg-ink-2 px-5 py-4 transition-colors hover:border-amber/50 hover:bg-ink-3"
          >
            <div className="flex flex-col">
              <span className="font-mono text-xs uppercase tracking-widest text-mute-2">
                {l.label}
              </span>
              <span className="mt-1 text-base text-paper/90">{l.value}</span>
            </div>
            <span className="font-mono text-lg text-mute transition-colors group-hover:text-amber">
              →
            </span>
          </a>
        ))}
      </div>

      <div className="mt-10 font-mono text-xs text-mute-2">
        {profile.based} · {profile.phone}
      </div>
    </SlideShell>
  )
}
