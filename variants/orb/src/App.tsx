import { Nav } from './components/Nav'
import { Hero } from './components/Hero'
import { Work } from './components/Work'
import { About } from './components/About'
import { Publications } from './components/Publications'
import { Skills } from './components/Skills'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-ink">
      <Nav />
      <main>
        <Hero />
        <Work />
        <About />
        <Publications />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
