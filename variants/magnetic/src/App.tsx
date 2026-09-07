import { Nav } from './components/Nav'
import { Hero } from './components/Hero'
import { Work } from './components/Work'
import { About } from './components/About'
import { Publications } from './components/Publications'
import { Skills } from './components/Skills'
import { Contact } from './components/Contact'

function App() {
  return (
    <main className="relative min-h-screen bg-navy text-ink">
      <Nav />
      <Hero />
      <Work />
      <About />
      <Publications />
      <Skills />
      <Contact />
    </main>
  )
}

export default App
