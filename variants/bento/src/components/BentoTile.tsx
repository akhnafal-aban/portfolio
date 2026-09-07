import { motion, useReducedMotion } from 'motion/react'
import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

type BentoTileProps = {
  children: ReactNode
  className?: string
  /** index drives stagger delay */
  index?: number
  /** accent variant */
  variant?: 'default' | 'accent' | 'warm'
  as?: 'div' | 'a'
  href?: string
}

export function BentoTile({
  children,
  className,
  index = 0,
  variant = 'default',
  as = 'div',
  href,
}: BentoTileProps) {
  const reduce = useReducedMotion()

  const surface =
    variant === 'accent'
      ? 'bg-[radial-gradient(120%_120%_at_0%_0%,#1f3d28_0%,#2c2c2e_55%)] ring-1 ring-emerald-500/25'
      : variant === 'warm'
        ? 'bg-[radial-gradient(120%_120%_at_100%_0%,#3a2a14_0%,#2c2c2e_55%)] ring-1 ring-orange-500/20'
        : 'bg-[#2c2c2e] ring-1 ring-white/[0.06]'

  const Comp = as === 'a' ? motion.a : motion.div

  return (
    <Comp
      href={href}
      target={href ? '_blank' : undefined}
      rel={href ? 'noopener noreferrer' : undefined}
      initial={reduce ? false : { opacity: 0, scale: 0.96, y: 8 }}
      whileInView={reduce ? undefined : { opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={reduce ? undefined : { duration: 0.5, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
      whileHover={reduce ? undefined : { scale: 1.02 }}
      className={cn(
        'group relative flex flex-col overflow-hidden rounded-[22px] p-5 transition-shadow duration-300 hover:shadow-2xl hover:shadow-black/40 sm:p-6',
        surface,
        className,
      )}
    >
      {children}
    </Comp>
  )
}
