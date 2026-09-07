import { profile } from '@/data'
import { Reveal } from './Reveal'

export function Hero() {
  return (
    <header className="px-6 pt-20 pb-24 sm:px-10 sm:pt-28 md:px-16 md:pt-40 md:pb-32">
      <div className="mx-auto max-w-[1280px]">
        <Reveal>
          <div className="t-eyebrow mb-10 md:mb-16">Portfolio — 2026</div>
        </Reveal>

        <Reveal delay={60}>
          <h1
            className="font-medium leading-[0.92] tracking-tighter text-ink"
            style={{ fontSize: 'clamp(56px, 13vw, 168px)' }}
          >
            <span className="text-accent">N</span>
            oor Akhnafal
            <br />
            Aban
          </h1>
        </Reveal>

        <div className="mt-12 grid grid-cols-12 gap-x-4 gap-y-6 sm:gap-x-6 md:mt-16">
          <Reveal className="col-span-12 md:col-span-6" delay={120}>
            <p
              className="text-ink-soft"
              style={{ fontSize: 'clamp(20px, 2.4vw, 28px)', lineHeight: 1.3 }}
            >
              {profile.role}. {profile.disciplines}. {profile.location}.
            </p>
          </Reveal>
          <Reveal
            className="col-span-12 flex flex-col gap-1 md:col-span-4 md:col-start-9 md:items-end md:text-right"
            delay={180}
          >
            <span className="t-label">Currently</span>
            <span className="t-body">Junior Developer, iOS</span>
            <span className="t-body text-ink-mute">Apple Developer Academy</span>
          </Reveal>
        </div>
      </div>
    </header>
  )
}
