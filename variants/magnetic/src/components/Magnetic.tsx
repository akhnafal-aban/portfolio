import { useRef, type ReactNode } from 'react'
import { motion, useMotionValue, useSpring, useReducedMotion } from 'motion/react'

type MagneticProps = {
  children: ReactNode
  strength?: number
  radius?: number
  className?: string
  as?: 'div' | 'span' | 'a' | 'button'
  href?: string
  target?: string
  rel?: string
  onClick?: () => void
}

export function Magnetic({
  children,
  strength = 0.35,
  radius = 120,
  className,
  as = 'div',
  href,
  target,
  rel,
  onClick,
}: MagneticProps) {
  const ref = useRef<HTMLElement>(null)
  const prefersReducedMotion = useReducedMotion()

  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const springConfig = { stiffness: 150, damping: 15, mass: 0.5 }
  const springX = useSpring(x, springConfig)
  const springY = useSpring(y, springConfig)

  function handleMouseMove(e: React.MouseEvent) {
    if (prefersReducedMotion) return
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const cx = rect.left + rect.width / 2
    const cy = rect.top + rect.height / 2
    const dx = e.clientX - cx
    const dy = e.clientY - cy
    const dist = Math.sqrt(dx * dx + dy * dy)
    if (dist > radius + Math.max(rect.width, rect.height) / 2) {
      x.set(0)
      y.set(0)
      return
    }
    x.set(dx * strength)
    y.set(dy * strength)
  }

  function handleMouseLeave() {
    x.set(0)
    y.set(0)
  }

  const style = { x: prefersReducedMotion ? 0 : springX, y: prefersReducedMotion ? 0 : springY }

  if (as === 'a') {
    return (
      <motion.a
        ref={ref as never}
        style={style}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className={className}
        href={href}
        target={target}
        rel={rel}
        onClick={onClick}
      >
        {children}
      </motion.a>
    )
  }

  if (as === 'button') {
    return (
      <motion.button
        ref={ref as never}
        style={style}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className={className}
        onClick={onClick}
      >
        {children}
      </motion.button>
    )
  }

  if (as === 'span') {
    return (
      <motion.span
        ref={ref as never}
        style={style}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className={className}
      >
        {children}
      </motion.span>
    )
  }

  return (
    <motion.div
      ref={ref as never}
      style={style}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={className}
    >
      {children}
    </motion.div>
  )
}
