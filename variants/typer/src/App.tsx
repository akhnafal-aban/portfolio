import { Hero } from './components/Hero'
import { Section } from './components/Section'
import { Projects } from './components/Projects'
import { About } from './components/About'
import { Publications } from './components/Publications'
import { Skills } from './components/Skills'
import { Contact } from './components/Contact'
import { profile } from './data'

function Footer() {
  return (
    <footer className="mx-auto max-w-4xl px-5 pb-12 pt-8">
      <div className="border-t border-border-subtle pt-6">
        <p className="font-mono text-xs text-text-tertiary">
          // built with vite · react · tailwind. typed out, not generated.
        </p>
        <p className="mt-2 font-mono text-xs text-text-tertiary">
          {profile.name} — {profile.location}
        </p>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <div className="min-h-screen bg-canvas text-text-primary">
      <Hero />

      <Section
        id="work"
        label="01 / work"
        title="Selected work, as code"
        blurb="Six projects typed out as objects — iOS, backend, and research. Each card is the project's own source-of-truth: stack, repo, and what it actually does."
      >
        <Projects />
      </Section>

      <Section
        id="about"
        label="02 / about"
        title="Background"
        blurb={profile.summary}
      >
        <About />
      </Section>

      <Section
        id="publications"
        label="03 / publications"
        title="Published work"
        blurb="Topic modeling research on Indonesian-language Twitter data, indexed in Garuda."
      >
        <Publications />
      </Section>

      <Section
        id="skills"
        label="04 / skills"
        title="Skills, as an object"
        blurb="The stack, grouped by layer. iOS through infrastructure, with the AI tooling currently in active use."
      >
        <Skills />
      </Section>

      <Section
        id="contact"
        label="05 / contact"
        title="Get in touch"
        blurb="Open to iOS and backend opportunities. Email is the fastest channel."
      >
        <Contact />
      </Section>

      <Footer />
    </div>
  )
}
