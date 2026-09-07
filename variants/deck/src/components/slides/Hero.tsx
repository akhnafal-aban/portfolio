import { profile } from '@/data/portfolio'
import { SlideShell } from '@/components/SlideShell'

export function HeroSlide({ index, total }: { index: number; total: number }) {
  return (
    <SlideShell index={index} total={total} label="Intro">
      <div className="flex flex-col gap-6">
        <div className="font-mono text-xs uppercase tracking-[0.3em] text-amber">
          {profile.currentRole.split('·')[0].trim()}
        </div>
        <h1 className="font-sans text-5xl font-extrabold leading-[0.95] tracking-tight sm:text-7xl lg:text-8xl">
          Noor
          <br />
          Akhnafal
          <br />
          <span className="text-amber">Aban.</span>
        </h1>
        <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-sm text-mute">
          <span>{profile.headline}</span>
          <span className="text-line">·</span>
          <span>{profile.based}</span>
        </div>
        <p className="mt-4 max-w-xl text-base leading-relaxed text-paper/80 sm:text-lg">
          {profile.summary}
        </p>
        <div className="mt-6 flex items-center gap-4 font-mono text-xs text-mute-2">
          <span className="hidden sm:inline">Press</span>
          <kbd className="rounded border border-line bg-ink-2 px-2 py-1 text-paper/70">→</kbd>
          <span className="hidden sm:inline">to begin</span>
        </div>
      </div>
    </SlideShell>
  )
}
