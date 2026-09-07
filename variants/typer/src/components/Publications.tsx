import { publications, profile } from '@/data'

export function Publications() {
  return (
    <div className="space-y-4">
      {publications.map((p) => (
        <article
          key={p.title}
          className="rounded-lg border border-border-subtle bg-canvas-soft p-5"
        >
          <div className="flex items-baseline gap-2 font-mono text-xs">
            <span className="text-accent">// published</span>
            <span className="text-text-tertiary">{p.date}</span>
          </div>
          <h3 className="mt-2 font-sans text-base font-semibold leading-snug text-text-primary">
            {p.title}
          </h3>
          <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-xs">
            <span className="text-text-secondary">authors:</span>
            <span className="text-syn-string">
              {p.authors.join(' · ')}
            </span>
          </div>
          <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-xs">
            <span className="text-text-secondary">venue:</span>
            <span className="text-syn-property">{p.venue}</span>
          </div>
          {p.indexed.length > 0 && (
            <div className="mt-2 flex flex-wrap items-center gap-2 font-mono text-xs">
              <span className="text-text-secondary">indexed:</span>
              {p.indexed.map((idx) => (
                <span
                  key={idx}
                  className="rounded border border-border-subtle px-1.5 py-0.5 text-[10px] text-text-secondary"
                >
                  {idx}
                </span>
              ))}
            </div>
          )}
          {p.pipeline && (
            <a
              href={`${profile.githubUrl}/${p.pipeline.split('/').pop()}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center gap-1 font-mono text-xs text-accent-dim transition-colors hover:text-accent"
            >
              <span>→ pipeline repo</span>
            </a>
          )}
        </article>
      ))}
    </div>
  )
}
