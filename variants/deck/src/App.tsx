import { useCallback, useEffect, useRef, useState } from 'react'
import { projects } from '@/data/portfolio'
import { HeroSlide } from '@/components/slides/Hero'
import { AboutSlide } from '@/components/slides/About'
import { ProjectSlide } from '@/components/slides/Project'
import { PublicationsSlide } from '@/components/slides/Publications'
import { ContactSlide } from '@/components/slides/Contact'
import { Arrow } from '@/components/SlideShell'
import { cn } from '@/lib/cn'

const slides = [
  { id: 'hero', render: (i: number, t: number) => <HeroSlide index={i} total={t} /> },
  { id: 'about', render: (i: number, t: number) => <AboutSlide index={i} total={t} /> },
  ...projects.map((p) => ({
    id: p.id,
    render: (i: number, t: number) => <ProjectSlide project={p} index={i} total={t} />,
  })),
  { id: 'pubs', render: (i: number, t: number) => <PublicationsSlide index={i} total={t} /> },
  { id: 'contact', render: (i: number, t: number) => <ContactSlide index={i} total={t} /> },
]

const reduceMotion =
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

export default function App() {
  const total = slides.length
  const [current, setCurrent] = useState(0)
  const lockRef = useRef(false)
  const touchX = useRef<number | null>(null)
  const touchY = useRef<number | null>(null)

  const go = useCallback(
    (next: number) => {
      const clamped = Math.max(0, Math.min(total - 1, next))
      if (clamped === current) return
      lockRef.current = true
      setCurrent(clamped)
      window.setTimeout(() => {
        lockRef.current = false
      }, reduceMotion ? 120 : 520)
    },
    [current, total],
  )

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      switch (e.key) {
        case 'ArrowRight':
        case 'PageDown':
        case ' ':
          e.preventDefault()
          go(current + 1)
          break
        case 'ArrowLeft':
        case 'PageUp':
          e.preventDefault()
          go(current - 1)
          break
        case 'Home':
          go(0)
          break
        case 'End':
          go(total - 1)
          break
      }
    }
    const onWheel = (e: WheelEvent) => {
      if (lockRef.current) return
      if (Math.abs(e.deltaY) < 12) return
      go(current + (e.deltaY > 0 ? 1 : -1))
    }
    const onTouchStart = (e: TouchEvent) => {
      touchX.current = e.touches[0].clientX
      touchY.current = e.touches[0].clientY
    }
    const onTouchEnd = (e: TouchEvent) => {
      if (touchX.current === null || touchY.current === null) return
      const dx = e.changedTouches[0].clientX - touchX.current
      const dy = e.changedTouches[0].clientY - touchY.current
      touchX.current = null
      touchY.current = null
      if (Math.abs(dx) < 50 || Math.abs(dx) < Math.abs(dy)) return
      go(current + (dx < 0 ? 1 : -1))
    }
    window.addEventListener('keydown', onKey)
    window.addEventListener('wheel', onWheel, { passive: true })
    window.addEventListener('touchstart', onTouchStart, { passive: true })
    window.addEventListener('touchend', onTouchEnd, { passive: true })
    return () => {
      window.removeEventListener('keydown', onKey)
      window.removeEventListener('wheel', onWheel)
      window.removeEventListener('touchstart', onTouchStart)
      window.removeEventListener('touchend', onTouchEnd)
    }
  }, [current, go, total])

  return (
    <div className="relative h-[100dvh] w-screen overflow-hidden bg-ink">
      <div
        className="deck-track flex h-[100dvh] will-change-transform"
        style={{
          width: `${total * 100}vw`,
          transform: `translateX(-${current * 100}vw)`,
          transition: reduceMotion
            ? 'none'
            : 'transform 0.5s cubic-bezier(0.65, 0, 0.35, 1)',
        }}
      >
        {slides.map((s, i) => (
          <div key={s.id} className="h-[100dvh] w-screen shrink-0">
            {s.render(i, total)}
          </div>
        ))}
      </div>

      {/* Side arrow zones */}
      <button
        aria-label="Previous slide"
        onClick={() => go(current - 1)}
        disabled={current === 0}
        className={cn(
          'absolute left-0 top-0 z-20 flex h-[100dvh] w-12 cursor-pointer items-center justify-center sm:w-16',
          'transition-opacity',
          current === 0 ? 'pointer-events-none opacity-0' : 'opacity-60 hover:opacity-100',
        )}
      >
        <Arrow dir="left" />
      </button>
      <button
        aria-label="Next slide"
        onClick={() => go(current + 1)}
        disabled={current === total - 1}
        className={cn(
          'absolute right-0 top-0 z-20 flex h-[100dvh] w-12 cursor-pointer items-center justify-center sm:w-16',
          'transition-opacity',
          current === total - 1 ? 'pointer-events-none opacity-0' : 'opacity-60 hover:opacity-100',
        )}
      >
        <Arrow dir="right" />
      </button>

      {/* Dot navigation */}
      <div className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 items-center gap-2">
        {slides.map((s, i) => (
          <button
            key={s.id}
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => go(i)}
            className={cn(
              'h-1.5 rounded-full transition-all duration-300',
              i === current ? 'w-6 bg-amber' : 'w-1.5 bg-line hover:bg-mute',
            )}
          />
        ))}
      </div>

      {/* Bottom-left hint */}
      <div className="pointer-events-none absolute bottom-5 left-6 z-20 hidden font-mono text-[10px] tracking-widest text-mute-2 sm:left-12 sm:block">
        ← → / SCROLL / SWIPE
      </div>
    </div>
  )
}
