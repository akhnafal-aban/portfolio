import { useEffect, useState } from 'react'
import { Dock } from '@/components/Dock'
import { Hero } from '@/sections/Hero'
import { Work } from '@/sections/Work'
import { About } from '@/sections/About'
import { Publications } from '@/sections/Publications'
import { Skills } from '@/sections/Skills'
import { Contact } from '@/sections/Contact'

const sectionIds = ['home', 'work', 'about', 'publications', 'skills', 'contact']

export default function App() {
  const [activeId, setActiveId] = useState('home')

  // Scroll spy: mark whichever section is most in view as active.
  useEffect(() => {
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null)

    const observer = new IntersectionObserver(
      (entries) => {
        // Pick the entry with the largest intersection ratio that is intersecting.
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)
        if (visible[0]) setActiveId(visible[0].target.id)
      },
      {
        // Bias toward the top portion of the viewport.
        rootMargin: '-30% 0px -55% 0px',
        threshold: [0, 0.25, 0.5, 0.75, 1],
      },
    )

    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  const handleSelect = (id: string) => {
    const el = document.getElementById(id)
    if (!el) return
    el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <div className="min-h-screen bg-bg text-ink">
      <main>
        <Hero />
        <Work />
        <About />
        <Publications />
        <Skills />
        <Contact />
      </main>
      <Dock activeId={activeId} onSelect={handleSelect} />
    </div>
  )
}
