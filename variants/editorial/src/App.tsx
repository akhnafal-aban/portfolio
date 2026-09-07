import { About } from '@/components/About'
import { Contact } from '@/components/Contact'
import { Hero } from '@/components/Hero'
import { Publications } from '@/components/Publications'
import { Skills } from '@/components/Skills'
import { Work } from '@/components/Work'

export default function App() {
  return (
    <div className="min-h-screen bg-paper text-ink">
      <main className="mx-auto max-w-[1200px] px-6 md:px-10 lg:px-16">
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
