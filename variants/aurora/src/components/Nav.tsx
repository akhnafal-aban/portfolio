import { useEffect, useState } from 'react'
import { motion, useReducedMotion } from 'motion/react'
import { cn } from '@/lib/utils'

const links = [
  { id: 'work', label: 'Work' },
  { id: 'about', label: 'About' },
  { id: 'publications', label: 'Writing' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
]

export function Nav() {
  const reduce = useReducedMotion()
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState<string>('')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const ids = links.map((l) => l.id)
    const observer = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) setActive(e.target.id)
        }
      },
      { rootMargin: '-40% 0px -55% 0px' },
    )
    ids.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  return (
    <motion.nav
      initial={reduce ? false : { opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="fixed left-1/2 top-4 z-50 -translate-x-1/2 px-4"
    >
      <div
        className={cn(
          'glass-strong flex items-center gap-1 rounded-full p-1.5 transition-all duration-500',
          scrolled ? 'shadow-2xl' : 'shadow-lg',
        )}
      >
        <a
          href="#top"
          className="font-mono text-xs font-semibold tracking-tight text-teal-300 px-3 py-2 transition-colors hover:text-teal-200"
          aria-label="Top"
        >
          NAA
        </a>
        <div className="mx-1 h-5 w-px bg-white/10" />
        {links.map((link) => (
          <a
            key={link.id}
            href={`#${link.id}`}
            className={cn(
              'relative rounded-full px-3 py-2 text-xs font-medium transition-colors md:text-sm',
              active === link.id ? 'text-white' : 'text-zinc-400 hover:text-zinc-200',
            )}
          >
            {active === link.id && !reduce && (
              <motion.span
                layoutId="nav-active"
                className="absolute inset-0 -z-10 rounded-full bg-white/10"
                transition={{ type: 'spring', stiffness: 380, damping: 30 }}
              />
            )}
            {link.label}
          </a>
        ))}
      </div>
    </motion.nav>
  )
}
