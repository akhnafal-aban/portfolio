import { CONTACT } from '@/data/content'
import { SectionHeader } from './SectionHeader'

export function Contact() {
  const year = new Date().getFullYear()
  return (
    <section className="py-16 md:py-24">
      <SectionHeader number="05" label="Contact" title="Get in touch." />

      <div className="border-t border-rule pt-10 md:pt-14">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-10">
          <a
            href={`mailto:${CONTACT.email}`}
            className="reveal group block border-b border-rule pb-8"
          >
            <span className="label-caps text-ink-muted text-[10px]">Email</span>
            <p className="font-display text-2xl md:text-4xl text-ink mt-2 leading-tight group-hover:text-accent transition-colors">
              {CONTACT.email}
            </p>
          </a>

          <a
            href={CONTACT.github.href}
            target="_blank"
            rel="noreferrer noopener"
            className="reveal group block border-b border-rule pb-8"
          >
            <span className="label-caps text-ink-muted text-[10px]">GitHub</span>
            <p className="font-display text-2xl md:text-4xl text-ink mt-2 leading-tight group-hover:text-accent transition-colors">
              {CONTACT.github.label}
              <span aria-hidden className="ml-2">↗</span>
            </p>
          </a>

          <a
            href={CONTACT.linkedin.href}
            target="_blank"
            rel="noreferrer noopener"
            className="reveal group block border-b border-rule pb-8"
          >
            <span className="label-caps text-ink-muted text-[10px]">LinkedIn</span>
            <p className="font-display text-2xl md:text-4xl text-ink mt-2 leading-tight group-hover:text-accent transition-colors">
              {CONTACT.linkedin.label}
              <span aria-hidden className="ml-2">↗</span>
            </p>
          </a>

          <div className="reveal block border-b border-rule pb-8">
            <span className="label-caps text-ink-muted text-[10px]">Located</span>
            <p className="font-display text-2xl md:text-4xl text-ink mt-2 leading-tight">Jakarta, Indonesia</p>
          </div>
        </div>

        <footer className="mt-16 md:mt-24 pt-6 border-t border-ink flex flex-col md:flex-row md:items-center md:justify-between gap-3">
          <p className="label-caps text-ink-muted text-[10px]">Noor Akhnafal Aban · Editorial Portfolio</p>
          <p className="label-caps text-ink-muted text-[10px] tabular-nums">{year} · Set in Playfair Display & Inter</p>
        </footer>
      </div>
    </section>
  )
}
