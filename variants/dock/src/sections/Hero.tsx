import { profile } from '@/data/content'

export function Hero() {
  return (
    <section
      id="home"
      className="flex min-h-screen flex-col justify-center px-6 pt-16"
    >
      <div className="mx-auto w-full max-w-4xl">
        <p className="mb-3 font-mono text-xs uppercase tracking-[0.18em] text-ink-soft/70">
          {profile.location}
        </p>
        <h1 className="text-5xl font-bold leading-[1.05] tracking-tight text-ink sm:text-7xl">
          {profile.name}
        </h1>
        <p className="mt-4 text-xl font-medium text-ink-soft sm:text-2xl">
          {profile.headline}
        </p>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-soft/90">
          {profile.summary}
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-white transition-transform hover:scale-[1.03]"
          >
            GitHub
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-line bg-card px-5 py-2.5 text-sm font-medium text-ink transition-transform hover:scale-[1.03]"
          >
            LinkedIn
          </a>
          <a
            href="#work"
            className="rounded-full border border-line bg-card px-5 py-2.5 text-sm font-medium text-ink-soft transition-transform hover:scale-[1.03]"
          >
            See work
          </a>
        </div>
        <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-ink-soft/70">
          <span>{profile.education}</span>
          <span className="h-1 w-1 rounded-full bg-ink-soft/30" />
          <span className="text-accent">{profile.award}</span>
        </div>
      </div>
    </section>
  )
}
