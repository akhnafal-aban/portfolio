import { profile } from '@/data/content'
import { SectionHeading } from '@/components/SectionHeading'
import { Mail, MapPin } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '@/components/BrandIcons'

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-8 px-6 py-24 pb-44">
      <div className="mx-auto w-full max-w-4xl">
        <SectionHeading index="05" title="Contact" sub="Let's build something" />
        <div className="rounded-2xl border border-line bg-card p-8 shadow-sm">
          <p className="text-lg leading-relaxed text-ink-soft">
            Open to iOS and full-stack opportunities. Based in Jakarta, working
            remotely.
          </p>
          <a
            href={`mailto:${profile.email}`}
            className="mt-5 inline-block text-2xl font-semibold text-accent transition-transform hover:scale-[1.02]"
          >
            {profile.email}
          </a>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-white transition-transform hover:scale-[1.03]"
            >
              <Mail size={16} /> Email
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-line bg-card px-5 py-2.5 text-sm font-medium text-ink transition-transform hover:scale-[1.03]"
            >
              <GithubIcon size={16} /> GitHub
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-line bg-card px-5 py-2.5 text-sm font-medium text-ink transition-transform hover:scale-[1.03]"
            >
              <LinkedinIcon size={16} /> LinkedIn
            </a>
          </div>
          <p className="mt-6 inline-flex items-center gap-1.5 text-sm text-ink-soft/60">
            <MapPin size={14} /> {profile.location}
          </p>
        </div>
      </div>
    </section>
  )
}
