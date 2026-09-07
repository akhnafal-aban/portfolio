import { ABOUT, EXPERIENCE, RECOGNITION } from '@/data/content'
import { SectionHeader } from './SectionHeader'

export function About() {
  return (
    <section className="border-b border-rule py-16 md:py-24">
      <SectionHeader number="02" label="About" title="A working profile." />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-10 gap-y-10">
        {/* Columnar lead */}
        <div className="lg:col-span-8">
          <p className="font-display text-2xl md:text-3xl leading-snug text-ink mb-8">{ABOUT.lead}</p>

          <div className="columns-prose text-ink-soft leading-relaxed text-[15px] md:text-base">
            <p className="mb-4">{ABOUT.currently}</p>
            <p className="mb-4">
              The work spans SwiftUI apps and Laravel platforms, REST APIs and databases, Linux servers and deployment —
              whatever a product needs to actually run, end to end. LLM integration shows up in three places so far:
              personalized guidance in the academic test platform, LLM-assisted features in the village system, and
              on-device Apple Intelligence for multi-modal transaction parsing in AkhnaFin.
            </p>
            <p className="mb-4">
              Research side: a published topic-modeling paper on Twitter conversations about Danantara, using BERTopic with
              indoSBERT embeddings. The pipeline lives in a public repo alongside the article.
            </p>
          </div>

          {/* Pull quote */}
          <blockquote className="reveal mt-10 md:mt-12 border-l-2 border-accent pl-6 md:pl-8 max-w-2xl">
            <p className="font-display text-2xl md:text-3xl italic leading-snug text-ink">{ABOUT.pull}</p>
          </blockquote>
        </div>

        {/* Journey sidebar */}
        <aside className="lg:col-span-4 lg:border-l lg:border-rule lg:pl-10">
          <h3 className="label-caps text-ink-muted text-[11px] mb-5">Journey</h3>
          <p className="font-display text-xl md:text-2xl text-ink mb-6 leading-tight">{ABOUT.journeyTitle}</p>
          <ol className="space-y-6">
            {ABOUT.journey.map((j) => (
              <li key={j.place} className="border-t border-rule pt-4">
                <p className="font-display text-lg text-ink leading-snug">{j.place}</p>
                <p className="text-ink-muted text-sm leading-relaxed mt-1">{j.note}</p>
              </li>
            ))}
          </ol>

          <h3 className="label-caps text-ink-muted text-[11px] mb-5 mt-12">Experience</h3>
          <ol className="space-y-5">
            {EXPERIENCE.map((e) => (
              <li key={e.role} className="border-t border-rule pt-4">
                <p className="font-display text-base text-ink leading-snug">{e.role}</p>
                <p className="text-ink-muted text-sm">{e.org}</p>
                <p className="label-caps text-ink-muted text-[10px] mt-1">{e.period}</p>
                <p className="text-ink-soft text-sm leading-relaxed mt-2">{e.note}</p>
              </li>
            ))}
          </ol>
        </aside>
      </div>

      {/* Recognition hairline */}
      <div className="mt-14 md:mt-20 pt-8 border-t border-rule grid grid-cols-1 md:grid-cols-3 gap-6">
        {RECOGNITION.map((r) => (
          <p key={r} className="font-display text-lg text-ink-soft leading-snug">
            <span className="text-accent mr-2">✦</span>
            {r}
          </p>
        ))}
      </div>
    </section>
  )
}
