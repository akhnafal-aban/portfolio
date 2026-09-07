import { profile } from '@/data'
import { Reveal } from './Reveal'

export function Contact() {
  return (
    <footer
      id="contact"
      className="border-t border-hairline px-6 py-24 sm:px-10 md:px-16 md:py-40"
    >
      <Reveal>
        <div className="mx-auto max-w-[1280px]">
          <div className="grid grid-cols-12 gap-x-4 gap-y-10 sm:gap-x-6">
            <div className="col-span-12 md:col-span-2">
              <div className="flex items-baseline gap-3 md:flex-col md:items-start md:gap-1">
                <span className="t-mono-num text-[11px] font-medium text-accent">
                  05
                </span>
                <span className="t-label">Contact</span>
              </div>
            </div>

            <div className="col-span-12 md:col-span-10">
              <h2
                className="font-medium tracking-tighter text-ink"
                style={{ fontSize: 'clamp(40px, 8vw, 96px)', lineHeight: 0.95 }}
              >
                Begin a
                <br />
                <span className="text-accent">conversation.</span>
              </h2>

              <div className="mt-12 grid grid-cols-12 gap-x-4 gap-y-8 sm:gap-x-6">
                <ContactBlock label="Email">
                  <a
                    href={`mailto:${profile.email}`}
                    className="border-b border-accent pb-0.5 text-ink transition-colors hover:text-accent"
                  >
                    {profile.email}
                  </a>
                </ContactBlock>
                <ContactBlock label="GitHub">
                  <a
                    href={profile.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="border-b border-accent pb-0.5 text-ink transition-colors hover:text-accent"
                  >
                    {profile.github}
                  </a>
                </ContactBlock>
                <ContactBlock label="LinkedIn">
                  <a
                    href={profile.linkedinUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="border-b border-accent pb-0.5 text-ink transition-colors hover:text-accent"
                  >
                    {profile.linkedin}
                  </a>
                </ContactBlock>
                <ContactBlock label="Phone">
                  <span className="t-mono-num text-ink">{profile.phone}</span>
                </ContactBlock>
              </div>

              <div className="mt-20 pt-6 border-t border-hairline flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
                <div className="t-label">
                  {profile.name} · {profile.role}
                </div>
                <div className="t-label text-ink-mute">
                  {profile.location} — {new Date().getFullYear()}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </footer>
  )
}

function ContactBlock({
  label,
  children,
}: {
  label: string
  children: React.ReactNode
}) {
  return (
    <div className="col-span-12 sm:col-span-6 md:col-span-3">
      <div className="t-label mb-2">{label}</div>
      <div className="text-[16px] font-medium">{children}</div>
    </div>
  )
}
