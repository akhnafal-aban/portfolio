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
      <div className="aurora" aria-hidden />
      <div className="aurora-2" aria-hidden />
      <div className="aurora-veil" aria-hidden />
      <div className="aurora-grain" aria-hidden />
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
