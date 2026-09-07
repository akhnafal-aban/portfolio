import { useEffect, useRef, useState } from 'react'

/**
 * Interactive grid background.
 * One rAF-throttled mousemove listener writes --mx/--my onto
 * document.documentElement. The CSS (index.css) drives the
 * spotlight purely via those vars + radial-gradient masks — no
 * per-cell React state, no re-render per move.
 *
 * On touch / pointer leave, the spotlight drifts off-screen so the
 * grid settles back to its resting dim state.
 */
export default function GridBackground() {
  const frame = useRef<number | null>(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce) return

    const root = document.documentElement
    const update = (x: number, y: number) => {
      if (frame.current != null) return
      frame.current = requestAnimationFrame(() => {
        frame.current = null
        root.style.setProperty('--mx', `${x}px`)
        root.style.setProperty('--my', `${y}px`)
      })
    }

    const onMove = (e: PointerEvent) => update(e.clientX, e.clientY)
    const onLeave = () => {
      root.style.setProperty('--mx', '-300px')
      root.style.setProperty('--my', '-300px')
    }

    window.addEventListener('pointermove', onMove, { passive: true })
    window.addEventListener('pointerleave', onLeave)
    return () => {
      window.removeEventListener('pointermove', onMove)
      window.removeEventListener('pointerleave', onLeave)
      if (frame.current != null) cancelAnimationFrame(frame.current)
    }
  }, [])

  if (!mounted) return null
  return (
    <>
      <div className="grid-bg" aria-hidden />
      <div className="grid-bg__glow" aria-hidden />
      <div className="grid-bg__bloom" aria-hidden />
    </>
  )
}
