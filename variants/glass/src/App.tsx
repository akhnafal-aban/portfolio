import { Nav } from '@/components/Nav'
import { Hero } from '@/components/Hero'
import { Work } from '@/components/Work'
import { About } from '@/components/About'
import { Publications } from '@/components/Publications'
import { Skills } from '@/components/Skills'
import { Contact } from '@/components/Contact'

export default function App() {
  return (
    <>
      <div className="mesh-bg" aria-hidden />
      <div className="mesh-grain" aria-hidden />
      <Nav />
      <main>
        <Hero />
        <Work />
        <About />
        <Publications />
        <Skills />
        <Contact />
      </main>
    </>
  )
}
