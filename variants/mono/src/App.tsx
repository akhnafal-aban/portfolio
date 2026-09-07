import { ABOUT } from '@/data/about'
import { EMAIL, GITHUB, LINKEDIN, LOCATION } from '@/data/links'
import { PROJECTS } from '@/data/projects'
import { PUBLICATION } from '@/data/publications'
import { SKILLS } from '@/data/skills'

const NAME = 'Noor Akhnafal Aban'
const ROLE = 'Software engineer'
const ONELINE = 'iOS and backend. Jakarta.'

function Label({ children }: { children: React.ReactNode }) {
  return (
    <span className="label text-xs text-faint">{children}</span>
  )
}

function App() {
  return (
    <main className="breathe mx-auto max-w-4xl px-6 py-32 sm:px-8 sm:py-40 md:py-48">
      {/* Hero */}
      <section className="flex flex-col gap-6">
        <h1 className="text-6xl font-black leading-[0.92] tracking-tight sm:text-7xl md:text-8xl lg:text-9xl">
          {NAME}
        </h1>
        <p className="text-xl font-medium text-ink sm:text-2xl">{ROLE}</p>
        <p className="text-base text-mute sm:text-lg">{ONELINE}</p>
      </section>

      {/* Work */}
      <section className="mt-32 sm:mt-40">
        <Label>Work</Label>
        <div className="mt-10 space-y-14 sm:space-y-16">
          {PROJECTS.map((p) => (
            <article key={p.name} className="flex flex-col gap-2">
              {p.url ? (
                <a
                  href={p.url}
                  className="text-2xl font-semibold tracking-tight no-underline transition-colors hover:underline sm:text-3xl"
                >
                  {p.name}
                </a>
              ) : (
                <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                  {p.name}
                </h2>
              )}
              <p className="max-w-2xl text-base text-mute">{p.line}</p>
              <p className="text-sm text-faint">{p.stack}</p>
            </article>
          ))}
        </div>
      </section>

      {/* About */}
      <section className="mt-32 sm:mt-40">
        <Label>About</Label>
        <p className="mt-10 max-w-2xl text-lg leading-relaxed text-ink sm:text-xl">
          {ABOUT}
        </p>
      </section>

      {/* Publications */}
      <section className="mt-32 sm:mt-40">
        <Label>Publications</Label>
        <p className="mt-10 max-w-2xl text-lg leading-relaxed text-ink sm:text-xl">
          {PUBLICATION}
        </p>
      </section>

      {/* Skills */}
      <section className="mt-32 sm:mt-40">
        <Label>Skills</Label>
        <p className="mt-10 max-w-2xl text-base leading-relaxed text-mute sm:text-lg">
          {SKILLS}
        </p>
      </section>

      {/* Contact */}
      <section className="mt-32 sm:mt-40">
        <Label>Contact</Label>
        <div className="mt-10 flex flex-col gap-3 text-lg sm:text-xl">
          <a
            href={`mailto:${EMAIL}`}
            className="w-fit font-medium text-accent no-underline hover:underline"
          >
            {EMAIL}
          </a>
          <a
            href={GITHUB}
            className="w-fit text-ink no-underline hover:underline"
          >
            GitHub
          </a>
          <a
            href={LINKEDIN}
            className="w-fit text-ink no-underline hover:underline"
          >
            LinkedIn
          </a>
        </div>
        <p className="mt-16 text-sm text-faint">{LOCATION}</p>
      </section>
    </main>
  )
}

export default App
