import { publications, awards } from '@/data/portfolio'
import { SlideShell, Kicker } from '@/components/SlideShell'

export function PublicationsSlide({ index, total }: { index: number; total: number }) {
  return (
    <SlideShell index={index} total={total} label="Publications">
      <Kicker>Publications & Recognition</Kicker>
      <div className="flex flex-col gap-10">
        <div>
          <div className="font-mono text-xs uppercase tracking-widest text-mute-2">
            Journal Article
          </div>
          <div className="mt-4 flex flex-col gap-4">
            {publications.map((p) => (
              <div
                key={p.title}
                className="max-w-3xl border-l-2 border-amber/60 pl-5"
              >
                <h3 className="text-2xl font-semibold leading-snug sm:text-3xl">
                  {p.title}
                </h3>
                <div className="mt-2 font-mono text-sm text-mute">{p.authors}</div>
                <div className="mt-1 text-sm text-paper/80">{p.venue}</div>
                <div className="mt-3 flex flex-wrap gap-x-5 gap-y-1 font-mono text-xs text-mute-2">
                  <span>
                    <span className="text-amber">Date:</span> {p.date}
                  </span>
                  <span>
                    <span className="text-amber">Indexed:</span> {p.indexed}
                  </span>
                </div>
                {p.repo && (
                  <a
                    href={p.repo}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-3 inline-flex items-center gap-2 font-mono text-xs text-mute transition-colors hover:text-amber"
                  >
                    <span className="text-amber">↗</span>
                    Companion pipeline · {p.repo.replace('https://', '')}
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>

        <div>
          <div className="font-mono text-xs uppercase tracking-widest text-mute-2">Awards</div>
          <div className="mt-4 flex flex-col gap-2">
            {awards.map((a) => (
              <div
                key={a}
                className="flex max-w-md items-center gap-3 text-base text-paper/85"
              >
                <span className="font-mono text-amber">★</span>
                {a}
              </div>
            ))}
          </div>
        </div>
      </div>
    </SlideShell>
  )
}
