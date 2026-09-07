import { motion, useScroll, useSpring } from 'motion/react'

export function ScrollRibbon() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 })
  const reduce = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches

  return (
    <div className="fixed top-0 left-0 right-0 h-[3px] z-50 bg-transparent">
      {reduce ? (
        <div className="h-full w-full bg-[#B91C1C]" />
      ) : (
        <motion.div
          className="h-full origin-left bg-[#B91C1C]"
          style={{ scaleX }}
        />
      )}
    </div>
  )
}
