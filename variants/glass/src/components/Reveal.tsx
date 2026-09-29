import { motion, useReducedMotion } from 'motion/react'
import type { ReactNode } from 'react'
import { EASE_OUT } from '@/lib/motion'

type RevealProps = {
  children: ReactNode
  delay?: number
  y?: number
  className?: string
}

export function Reveal({ children, delay = 0, y = 24, className }: RevealProps) {
  const reduce = useReducedMotion()
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y }}
      whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{
        duration: 0.6,
        delay,
        ease: [...EASE_OUT],
      }}
    >
      {children}
    </motion.div>
  )
}
