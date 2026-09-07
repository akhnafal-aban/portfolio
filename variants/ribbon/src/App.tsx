import { ScrollRibbon } from '@/components/ScrollRibbon'
import { SideNav } from '@/components/SideNav'
import { Section } from '@/components/Section'
import {
  person,
  experience,
  projects,
  publications,
  skills,
  awards,
  education,
} from '@/content'

function ExternalLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="text-[#B91C1C] underline decoration-[#B91C1C]/30 underline-offset-2 hover:decoration-[#B91C1C] transition-colors"
    >
      {children}
    </a>
  )
}

export default function App() {
  return (
    <>
      <ScrollRibbon />
      <SideNav />

      <main className="max-w-3xl mx-auto px-6 lg:px-0 lg:ml-32">
        {/* Hero */}
        <header className="pt-32 pb-24">
          <p className="text-[11px] uppercase tracking-[0.2em] text-[#6b6b6b] mb-6">
            {person.location}
          </p>
          <h1 className="font-serif-accent text-6xl md:text-7xl leading-[1.05] text-[#1a1a1a] mb-8">
            Noor Akhnafal
            <br />
            Aban
          </h1>
          <p className="text-lg text-[#1a1a1a] max-w-xl leading-relaxed mb-3">
            {person.headline}
          </p>
          <p className="text-[15px] text-[#6b6b6b] max-w-xl leading-relaxed">
            {person.summary}
          </p>
          <div className="flex flex-wrap gap-x-6 gap-y-2 mt-8 text-[13px]">
            <ExternalLink href={person.github}>GitHub</ExternalLink>
            <ExternalLink href={person.linkedin}>LinkedIn</ExternalLink>
            <a
              href={`mailto:${person.email}`}
              className="text-[#B91C1C] underline decoration-[#B91C1C]/30 underline-offset-2 hover:decoration-[#B91C1C] transition-colors"
            >
              {person.email}
            </a>
          </div>
        </header>

        <div className="h-px bg-[#e5e5e5] mb-24" />

        {/* Work */}
        <Section id="work" marker="01" title="Selected Work" className="mb-32">
          <div className="flex flex-col gap-16">
            {projects.map((p) => (
              <article key={p.n} className="grid grid-cols-[auto_1fr] gap-x-6">
                <span className="font-serif-accent text-2xl text-[#B91C1C]/40 tabular-nums leading-none pt-1">
                  {p.n}
                </span>
                <div>
                  <h3 className="text-xl text-[#1a1a1a] font-medium leading-snug mb-1">
                    {p.href ? <ExternalLink href={p.href}>{p.title}</ExternalLink> : p.title}
                  </h3>
                  <p className="text-[13px] text-[#6b6b6b] mb-3 tracking-wide">{p.meta}</p>
                  <p className="text-[15px] text-[#1a1a1a] leading-relaxed max-w-2xl">
                    {p.body}
                  </p>
                  <p className="text-[12px] text-[#6b6b6b] mt-3 italic">{p.date}</p>
                </div>
              </article>
            ))}
          </div>
        </Section>

        <div className="h-px bg-[#e5e5e5] mb-24" />

        {/* About */}
        <Section id="about" marker="02" title="About" className="mb-32">
          <div className="flex flex-col gap-8">
            <p className="text-[16px] text-[#1a1a1a] leading-relaxed max-w-2xl">
              {person.summary}
            </p>

            <div className="mt-4">
              <h3 className="text-[11px] uppercase tracking-[0.14em] text-[#6b6b6b] mb-4">
                Education
              </h3>
              <p className="text-[15px] text-[#1a1a1a]">{education.school}</p>
              <p className="text-[13px] text-[#6b6b6b]">
                {education.degree} · {education.date} · GPA {education.gpa}
              </p>
            </div>

            <div className="mt-4">
              <h3 className="text-[11px] uppercase tracking-[0.14em] text-[#6b6b6b] mb-4">
                Experience
              </h3>
              <div className="flex flex-col gap-6">
                {experience.map((e) => (
                  <div key={e.role + e.org} className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-x-6 gap-y-1">
                    <div>
                      <p className="text-[15px] text-[#1a1a1a]">
                        <span className="font-medium">{e.role}</span>
                        <span className="text-[#6b6b6b]"> · {e.org}</span>
                      </p>
                      <ul className="list-none mt-2 space-y-1">
                        {e.points.map((pt, i) => (
                          <li key={i} className="text-[14px] text-[#6b6b6b] leading-relaxed pl-3 border-l border-[#e5e5e5]">
                            {pt}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <p className="text-[12px] text-[#6b6b6b] md:text-right whitespace-nowrap tabular-nums">
                      {e.date}
                      <br />
                      <span className="italic">{e.type}</span>
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-4">
              <h3 className="text-[11px] uppercase tracking-[0.14em] text-[#6b6b6b] mb-4">
                Recognition
              </h3>
              <ul className="list-none space-y-2">
                {awards.map((a, i) => (
                  <li key={i} className="text-[14px] text-[#1a1a1a] leading-relaxed flex gap-2">
                    <span className="text-[#B91C1C] mt-0.5">·</span>
                    <span>{a}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Section>

        <div className="h-px bg-[#e5e5e5] mb-24" />

        {/* Publications */}
        <Section id="publications" marker="03" title="Publications" className="mb-32">
          <div className="flex flex-col gap-6">
            {publications.map((p) => (
              <article key={p.title} className="border-l-2 border-[#B91C1C]/40 pl-5">
                <h3 className="font-serif-accent text-xl text-[#1a1a1a] italic mb-1">{p.title}</h3>
                <p className="text-[13px] text-[#6b6b6b] mb-2">{p.subtitle}</p>
                <p className="text-[14px] text-[#1a1a1a]">{p.authors}</p>
                <p className="text-[13px] text-[#6b6b6b] mt-1">{p.venue}</p>
                <p className="text-[13px] text-[#6b6b6b]">{p.vol}</p>
                <p className="text-[12px] text-[#B91C1C] mt-2 uppercase tracking-wide">
                  Indexed · {p.indexed}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <div className="h-px bg-[#e5e5e5] mb-24" />

        {/* Skills */}
        <Section id="skills" marker="04" title="Skills" className="mb-32">
          <dl className="flex flex-col gap-5">
            {skills.map((s) => (
              <div key={s.category} className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-x-6 gap-y-1">
                <dt className="text-[12px] uppercase tracking-[0.12em] text-[#B91C1C] font-medium pt-0.5">
                  {s.category}
                </dt>
                <dd className="text-[14px] text-[#1a1a1a] leading-relaxed">
                  {s.items.join(' · ')}
                </dd>
              </div>
            ))}
          </dl>
        </Section>

        <div className="h-px bg-[#e5e5e5] mb-24" />

        {/* Contact */}
        <Section id="contact" marker="05" title="Contact" className="mb-40">
          <p className="text-[16px] text-[#1a1a1a] leading-relaxed max-w-xl mb-8">
            Open to iOS, backend, and product engineering work. Reach out — email is best.
          </p>
          <div className="flex flex-col gap-2 text-[15px]">
            <a
              href={`mailto:${person.email}`}
              className="text-[#1a1a1a] hover:text-[#B91C1C] transition-colors w-fit"
            >
              {person.email}
            </a>
            <p className="text-[#6b6b6b] tabular-nums">{person.phone}</p>
            <p className="text-[#6b6b6b]">{person.location}</p>
            <div className="flex gap-6 mt-3">
              <ExternalLink href={person.github}>GitHub →</ExternalLink>
              <ExternalLink href={person.linkedin}>LinkedIn →</ExternalLink>
            </div>
          </div>
        </Section>

        <footer className="py-12 border-t border-[#e5e5e5]">
          <p className="text-[12px] text-[#6b6b6b]">
            © {new Date().getFullYear()} {person.name}. Editorial layout · scroll ribbon · sticky markers.
          </p>
        </footer>
      </main>
    </>
  )
}
