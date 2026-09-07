import { useEffect, useState } from 'react'
import { motion } from 'motion/react'
import { Magnetic } from './Magnetic'
import { cn } from '../lib/utils'
import { profile } from '../data/content'

const links = [
  { label: 'Work', href: '#work' },
  { label: 'About', href: '#about' },
  { label: 'Publications', href: '#publications' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
]

export function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
        scrolled ? 'bg-navy/85 backdrop-blur-lg border-b border-white/5' : 'bg-transparent',
      )}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <Magnetic as="a" href="#top" strength={0.25} className="font-serif text-xl tracking-wide">
          <span className="text-gold">N</span>AA
        </Magnetic>
        <ul className="hidden items-center gap-10 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <Magnetic as="a" href={link.href} strength={0.2} radius={80}>
                <span className="text-sm tracking-wide text-ink-soft transition-colors hover:text-gold">
                  {link.label}
                </span>
              </Magnetic>
            </li>
          ))}
        </ul>
        <Magnetic as="a" href={profile.github} strength={0.25} radius={90} target="_blank" rel="noreferrer">
          <span className="rounded-full border border-gold/40 px-4 py-1.5 text-xs tracking-wide text-gold transition-colors hover:border-gold hover:bg-gold/10">
            GitHub
          </span>
        </Magnetic>
      </nav>
    </motion.header>
  )
}
