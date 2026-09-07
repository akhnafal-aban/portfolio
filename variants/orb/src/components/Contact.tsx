import { Section } from './Section'
import { Reveal } from './Reveal'
import { persona } from '@/data/persona'

export function Contact() {
  return (
    <Section id="contact" label="05 — Contact" title="Let's talk">
      <Reveal>
        <div className="relative overflow-hidden rounded-3xl border border-line bg-ink-2/60 p-8 sm:p-12">
          <div
            aria-hidden
            className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full opacity-40 blur-3xl"
            style={{ background: 'radial-gradient(circle, rgba(16,185,129,0.5), transparent 70%)' }}
          />
          <p className="max-w-lg text-base leading-relaxed text-mist">
            Open to iOS and full-stack product work, collaborations, and conversations about
            engineering, design, or research. Email is the most reliable way to reach me.
          </p>
          <a
            href={`mailto:${persona.email}`}
            className="mt-7 inline-block text-2xl font-semibold text-white hover:text-emerald transition-colors sm:text-3xl"
          >
            {persona.email}
          </a>
          <div className="mt-8 flex flex-wrap gap-3">
            {[
              { label: 'GitHub', href: persona.links.github },
              { label: 'LinkedIn', href: persona.links.linkedin },
              { label: 'YouTube', href: persona.links.youtube },
            ].map((l) => (
              <a
                key={l.label}
                href={l.href}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-line px-4 py-2 text-sm text-mist hover:border-emerald/40 hover:text-white transition-colors"
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>
      </Reveal>
    </Section>
  )
}
