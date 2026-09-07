import { publications } from '@/data'
import { Section } from './Section'
import { Reveal } from './Reveal'

export function Publications() {
  return (
    <Section id="publications" index="03" label="Publications">
      <Reveal>
        {publications.map((pub) => (
          <article
            key={pub.title}
            className="grid grid-cols-12 gap-x-4 gap-y-6 sm:gap-x-6"
          >
            <div className="col-span-12 md:col-span-2">
              <div className="t-mono-num text-[12px] font-medium text-accent">
                01
              </div>
            </div>
            <div className="col-span-12 md:col-span-10">
              <h3
                className="font-medium tracking-tight text-ink"
                style={{ fontSize: 'clamp(24px, 3.2vw, 36px)', lineHeight: 1.1 }}
              >
                {pub.title}
              </h3>
              <div className="t-body mt-2 italic text-ink-mute">
                {pub.subtitle}
              </div>

              <dl className="mt-8 grid grid-cols-12 gap-x-4 gap-y-4 sm:gap-x-6">
                <Field label="Authors" value={pub.authors} span="md:col-span-6" />
                <Field label="Published" value={`${pub.volume} · ${pub.date}`} span="md:col-span-6" />
                <Field label="Journal" value={pub.venue} span="md:col-span-12" />
                <Field label="Indexed in" value={pub.indexed} span="md:col-span-6" />
                <div className="col-span-12 md:col-span-6">
                  <dt className="t-label mb-1">Pipeline</dt>
                  <dd>
                    <a
                      href="https://github.com/akhnafal-aban/Danantara-Research"
                      target="_blank"
                      rel="noreferrer"
                      className="border-b border-accent pb-0.5 text-accent transition-colors hover:text-ink"
                    >
                      {pub.pipeline} →
                    </a>
                  </dd>
                </div>
              </dl>
            </div>
          </article>
        ))}
      </Reveal>
    </Section>
  )
}

function Field({
  label,
  value,
  span,
}: {
  label: string
  value: string
  span: string
}) {
  return (
    <div className={`col-span-12 ${span}`}>
      <dt className="t-label mb-1">{label}</dt>
      <dd className="t-body">{value}</dd>
    </div>
  )
}
