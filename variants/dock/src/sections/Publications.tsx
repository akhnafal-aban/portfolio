import { publications } from '@/data/content'
import { SectionHeading } from '@/components/SectionHeading'
import { FileText } from 'lucide-react'

export function Publications() {
  return (
    <section id="publications" className="scroll-mt-8 px-6 py-24">
      <div className="mx-auto w-full max-w-4xl">
        <SectionHeading index="03" title="Publications" sub="Peer-reviewed work" />
        <div className="space-y-4">
          {publications.map((pub) => (
            <article
              key={pub.title}
              className="flex gap-4 rounded-2xl border border-line bg-card p-6 shadow-sm"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#e9e8f7] text-[#4b46b0]">
                <FileText size={20} strokeWidth={1.8} />
              </div>
              <div className="min-w-0">
                <h3 className="text-lg font-semibold leading-snug text-ink">
                  {pub.title}
                </h3>
                <p className="mt-1 text-sm text-ink-soft/85">{pub.authors}</p>
                <p className="mt-2 text-sm font-medium text-ink">
                  {pub.venue}
                </p>
                <p className="mt-0.5 font-mono text-[11px] text-ink-soft/60">
                  {pub.date}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft/85">
                  {pub.detail}
                </p>
                {pub.indexed && (
                  <p className="mt-2 inline-block rounded-full bg-bg px-2.5 py-0.5 text-[11px] text-ink-soft/70">
                    Indexed: {pub.indexed}
                  </p>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
