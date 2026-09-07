import { profile } from '@/data/content'
import { SectionHeading } from './SectionHeading'
import { Reveal } from './Reveal'

export function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-3xl px-4 py-20 md:py-28">
      <SectionHeading index="05 / CONTACT" title="Let's build" />

      <Reveal>
        <div className="glass-strong rounded-3xl p-8 text-center md:p-12">
          <p className="mx-auto max-w-xl text-base leading-relaxed text-zinc-300 md:text-lg">
            Building iOS at the Apple Developer Academy, shipping backend systems in production, and
            open to opportunities where both halves meet.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href={`mailto:${profile.email}`}
              className="glass-strong inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-medium text-white transition-transform hover:scale-[1.04] active:scale-95"
            >
              <span aria-hidden>✉</span> {profile.email}
            </a>
            <a
              href={profile.links.github}
              target="_blank"
              rel="noreferrer"
              className="glass inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-medium text-zinc-200 transition-transform hover:scale-[1.04] active:scale-95"
            >
              GitHub
            </a>
            <a
              href={profile.links.linkedin}
              target="_blank"
              rel="noreferrer"
              className="glass inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-medium text-zinc-200 transition-transform hover:scale-[1.04] active:scale-95"
            >
              LinkedIn
            </a>
          </div>

          <p className="mt-8 font-mono text-xs text-zinc-500">{profile.location}</p>
        </div>
      </Reveal>

      <footer className="mt-16 flex flex-col items-center gap-2 text-center">
        <p className="font-mono text-[11px] text-zinc-600">
          © {new Date().getFullYear()} {profile.name}
        </p>
        <p className="font-mono text-[10px] text-zinc-700">
          Glassmorphism variant · built with React, Tailwind, Motion
        </p>
      </footer>
    </section>
  )
}
