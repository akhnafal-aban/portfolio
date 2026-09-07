import { useEffect, useState } from 'react'
import { cn } from '@/lib/cn'

const items = [
  { id: 'work', label: 'Work' },
  { id: 'about', label: 'About' },
  { id: 'publications', label: 'Publications' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
]

export function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed top-0 inset-x-0 z-50 transition-colors duration-300',
        scrolled ? 'bg-[#080c0b]/80 backdrop-blur-md border-b border-line' : 'bg-transparent',
      )}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" className="label text-emerald/90 hover:text-emerald transition-colors">
          NAA
        </a>
        <ul className="flex items-center gap-7">
          {items.map((it) => (
            <li key={it.id}>
              <a
                href={`#${it.id}`}
                className="text-[0.8rem] text-mist hover:text-white transition-colors"
              >
                {it.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
