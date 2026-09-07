import { CodeWindow } from './CodeWindow'
import { Typewriter } from './Typewriter'
import { profile } from '@/data'

const HERO_CODE = `const akhnaf = {
  name: "Noor Akhnafal Aban",
  role: "Software Engineer",
  focus: ["iOS", "Backend"],
  location: "Jakarta",
  published: true,
  gemastik: "national round 2025"
}`

export function Hero() {
  return (
    <header className="relative mx-auto flex min-h-[100svh] max-w-4xl flex-col items-center justify-center px-5 py-16">
      <div className="editor-grid pointer-events-none absolute inset-0 -z-10 opacity-60" />

      <div className="mb-6 flex items-center gap-2 font-mono text-xs text-text-tertiary">
        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent" />
        <span>~/portfolio/</span>
        <span className="text-text-secondary">akhnaf.ts</span>
      </div>

      <CodeWindow
        filename="akhnaf.ts"
        lang="ts"
        showGutter
        lineCount={HERO_CODE.split('\n').length}
        className="w-full"
        bodyClassName="bg-canvas"
      >
        <Typewriter code={HERO_CODE} speed={26} startDelay={350} />
      </CodeWindow>

      <div className="mt-10 max-w-xl text-center">
        <h1 className="font-sans text-2xl font-semibold tracking-tight text-text-primary sm:text-3xl">
          {profile.name}
        </h1>
        <p className="mt-2 font-mono text-sm text-accent">
          {profile.role} — {profile.headline}
        </p>
        <p className="mt-4 text-sm leading-relaxed text-text-secondary">
          {profile.summary}
        </p>
      </div>

      <a
        href="#work"
        className="mt-12 inline-flex items-center gap-2 font-mono text-xs text-text-tertiary transition-colors hover:text-accent"
        aria-label="Scroll to work"
      >
        <span>scroll</span>
        <span className="inline-block animate-bounce" aria-hidden>
          ↓
        </span>
      </a>
    </header>
  )
}
