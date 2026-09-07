import { Hero } from '@/components/Hero'
import { Work } from '@/components/Work'
import { About } from '@/components/About'
import { Publications } from '@/components/Publications'
import { Skills } from '@/components/Skills'
import { Contact } from '@/components/Contact'

export default function App() {
  return (
    <div className="min-h-screen bg-paper text-ink antialiased">
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-hairline bg-paper/85 backdrop-blur-sm">
        <div className="mx-auto max-w-[1280px] px-6 sm:px-10 md:px-16 py-4 flex items-center justify-between">
          <a href="#top" className="flex items-baseline gap-2">
            <span className="t-mono-num text-[14px] font-medium text-accent">N</span>
            <span className="text-[14px] font-medium tracking-tight text-ink">
              Noor Akhnafal Aban
            </span>
          </a>
          <div className="hidden md:flex items-center gap-7">
            {[
              ['01', 'Work', '#work'],
              ['02', 'About', '#about'],
              ['03', 'Publications', '#publications'],
              ['04', 'Capabilities', '#skills'],
              ['05', 'Contact', '#contact'],
            ].map(([idx, name, href]) => (
              <a
                key={href}
                href={href}
                className="flex items-baseline gap-1.5 transition-colors hover:text-accent"
              >
                <span className="t-mono-num text-[10px] text-ink-mute">{idx}</span>
                <span className="t-label">{name}</span>
              </a>
            ))}
          </div>
        </div>
      </nav>

      <main id="top">
        <Hero />
        <Work />
        <About />
        <Publications />
        <Skills />
        <Contact />
      </main>
    </div>
  )
}
