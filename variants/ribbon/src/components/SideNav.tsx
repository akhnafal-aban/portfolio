import { useEffect, useState } from 'react'

export type SectionId = 'work' | 'about' | 'publications' | 'skills' | 'contact'

const SECTIONS: { id: SectionId; label: string }[] = [
  { id: 'work', label: 'Work' },
  { id: 'about', label: 'About' },
  { id: 'publications', label: 'Publications' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
]

export function SideNav() {
  const [active, setActive] = useState<SectionId>('work')

  useEffect(() => {
    const observers: IntersectionObserver[] = []
    SECTIONS.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (!el) return
      const ob = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) setActive(id)
          })
        },
        { rootMargin: '-40% 0px -55% 0px', threshold: 0 }
      )
      ob.observe(el)
      observers.push(ob)
    })
    return () => observers.forEach((o) => o.disconnect())
  }, [])

  return (
    <nav className="hidden lg:block fixed left-8 top-1/2 -translate-y-1/2 z-40">
      <ul className="flex flex-col gap-4">
        {SECTIONS.map(({ id, label }, i) => {
          const num = String(i + 1).padStart(2, '0')
          const isActive = active === id
          return (
            <li key={id}>
              <a
                href={`#${id}`}
                className="group flex items-center gap-2 text-[11px] uppercase tracking-[0.12em] transition-colors"
              >
                <span
                  className={
                    'inline-block w-6 h-px transition-all ' +
                    (isActive ? 'w-8 bg-[#B91C1C]' : 'bg-[#1a1a1a]/30 group-hover:bg-[#1a1a1a]/60')
                  }
                />
                <span className={isActive ? 'text-[#B91C1C] font-medium' : 'text-[#6b6b6b] group-hover:text-[#1a1a1a]'}>
                  {num} {label}
                </span>
              </a>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
