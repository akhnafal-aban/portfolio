import { useSpotlight } from "@/hooks/useSpotlight";
import { SpotlightOverlay } from "@/components/SpotlightOverlay";
import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { ProjectCard } from "@/components/ProjectCard";
import {
  profile,
  projects,
  experience,
  publication,
  skills,
  education,
  awards,
} from "@/data/content";

function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="py-16 sm:py-24 border-t border-white/5">
      <h2 className="font-mono text-xs tracking-[0.2em] uppercase text-white/55 mb-8">
        {title}
      </h2>
      {children}
    </section>
  );
}

function App() {
  useSpotlight();

  return (
    <div className="relative min-h-screen">
      <SpotlightOverlay />
      <Nav />

      <main className="relative z-10 max-w-5xl mx-auto px-6">
        <Hero />

        <Section id="work" title="Work">
          <div className="flex flex-col gap-5">
            {projects.map((p, i) => (
              <ProjectCard key={p.title} index={i} {...p} />
            ))}
          </div>
        </Section>

        <Section id="about" title="About">
          <div className="space-y-6">
            <p className="text-base sm:text-lg leading-relaxed text-white/80 max-w-3xl">
              {profile.summary}
            </p>

            <div className="pt-4">
              <h3 className="font-mono text-xs tracking-wide uppercase text-white/55 mb-3">
                Experience
              </h3>
              <div className="space-y-5">
                {experience.map((e) => (
                  <div
                    key={e.role}
                    className="dim dim-hover border border-white/10 rounded-xl p-5 bg-white/[0.02]"
                  >
                    <div className="flex items-baseline justify-between gap-4 flex-wrap mb-1">
                      <h4 className="font-semibold text-white/90">{e.role}</h4>
                      <span className="font-mono text-xs text-white/55">
                        {e.period}
                      </span>
                    </div>
                    <p className="font-mono text-xs text-emerald-400/80 mb-3">
                      {e.org}
                    </p>
                    <ul className="space-y-1.5">
                      {e.bullets.map((b, i) => (
                        <li
                          key={i}
                          className="text-sm leading-relaxed text-white/70 list-none flex gap-2"
                        >
                          <span className="text-emerald-400/40 select-none">—</span>
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4">
              <h3 className="font-mono text-xs tracking-wide uppercase text-white/55 mb-3">
                Education
              </h3>
              <div className="dim dim-hover border border-white/10 rounded-xl p-5 bg-white/[0.02]">
                <div className="flex items-baseline justify-between gap-4 flex-wrap mb-1">
                  <h4 className="font-semibold text-white/90">
                    {education.school}
                  </h4>
                  <span className="font-mono text-xs text-white/55">
                    {education.period}
                  </span>
                </div>
                <p className="font-mono text-xs text-emerald-400/80 mb-2">
                  {education.location}
                </p>
                <p className="text-sm text-white/70">
                  {education.program}
                </p>
                <p className="text-sm text-white/70 mt-1">
                  GPA: <span className="font-mono">{education.gpa}</span>
                </p>
              </div>
            </div>

            <div className="pt-4">
              <h3 className="font-mono text-xs tracking-wide uppercase text-white/55 mb-3">
                Awards
              </h3>
              <ul className="space-y-2">
                {awards.map((a, i) => (
                  <li
                    key={i}
                    className="text-sm text-white/70 flex gap-2 leading-relaxed"
                  >
                    <span className="text-emerald-400/40 select-none">—</span>
                    <span>{a}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Section>

        <Section id="publications" title="Publications">
          <div className="dim dim-hover border border-white/10 rounded-xl p-5 sm:p-6 bg-white/[0.02]">
            <h3 className="font-semibold text-white/90 mb-2 leading-snug">
              {publication.title}
            </h3>
            <p className="font-mono text-xs text-white/55 mb-1">
              {publication.authors}
            </p>
            <p className="font-mono text-xs text-emerald-400/80 mb-3">
              {publication.journal}
            </p>
            <p className="text-sm text-white/70 leading-relaxed mb-1">
              {publication.topic}
            </p>
            <p className="font-mono text-xs text-white/50 mb-3">
              Indexed in {publication.indexed}
            </p>
            <a
              href={publication.pipeline}
              target="_blank"
              rel="noreferrer"
              className="font-mono text-xs text-emerald-400/80 hover:text-emerald-400 transition-colors duration-300"
            >
              Research pipeline → {publication.pipeline.replace("https://", "")}
            </a>
          </div>
        </Section>

        <Section id="skills" title="Skills">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-5">
            {skills.map((s) => (
              <div key={s.category} className="dim dim-hover py-1">
                <h3 className="font-mono text-xs uppercase tracking-wide text-emerald-400/80 mb-1.5">
                  {s.category}
                </h3>
                <p className="text-sm text-white/70 leading-relaxed">{s.items}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section id="contact" title="Contact">
          <div className="space-y-4">
            <p className="text-base text-white/80 max-w-2xl leading-relaxed">
              Open to iOS and backend opportunities. Reach out via email or any
              of the links below.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 flex-wrap pt-2">
              <a
                href={`mailto:${profile.email}`}
                className="font-mono text-sm text-emerald-400/80 hover:text-emerald-400 transition-colors duration-300 border border-emerald-400/20 hover:border-emerald-400/50 rounded-full px-5 py-2"
              >
                {profile.email}
              </a>
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="font-mono text-sm text-white/70 hover:text-white transition-colors duration-300 py-2"
              >
                GitHub — {profile.github.replace("https://", "")}
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="font-mono text-sm text-white/70 hover:text-white transition-colors duration-300 py-2"
              >
                LinkedIn — {profile.linkedin.replace("https://", "")}
              </a>
            </div>
          </div>
        </Section>

        <footer className="py-12 border-t border-white/5">
          <p className="font-mono text-xs text-white/45">
            © {new Date().getFullYear()} {profile.name}. Built with React, Vite, and Tailwind CSS.
          </p>
        </footer>
      </main>
    </div>
  );
}

export default App;
