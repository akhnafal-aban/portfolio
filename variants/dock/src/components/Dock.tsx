import {
  useRef,
  useState,
  useCallback,
  type MouseEvent,
} from 'react'
import {
  Home,
  Folder,
  User,
  Book,
  Wrench,
  Mail,
  type LucideIcon,
} from 'lucide-react'
import { cn } from '@/lib/utils'

type DockItem = {
  id: string
  label: string
  Icon: LucideIcon
}

const items: DockItem[] = [
  { id: 'home', label: 'Home', Icon: Home },
  { id: 'work', label: 'Work', Icon: Folder },
  { id: 'about', label: 'About', Icon: User },
  { id: 'publications', label: 'Pubs', Icon: Book },
  { id: 'skills', label: 'Skills', Icon: Wrench },
  { id: 'contact', label: 'Contact', Icon: Mail },
]

const MAX_SCALE = 1.55
const MAGNIFY_RANGE = 150

export function Dock({
  activeId,
  onSelect,
}: {
  activeId: string
  onSelect: (id: string) => void
}) {
  const dockRef = useRef<HTMLDivElement>(null)
  const btnRefs = useRef<(HTMLButtonElement | null)[]>([])
  const [mouseX, setMouseX] = useState<number | null>(null)
  const [pressed, setPressed] = useState<string | null>(null)

  const handleMove = useCallback((e: MouseEvent<HTMLDivElement>) => {
    const rect = dockRef.current?.getBoundingClientRect()
    if (!rect) return
    setMouseX(e.clientX - rect.left)
  }, [])

  const handleLeave = useCallback(() => setMouseX(null), [])

  const scaleForIndex = (i: number): number => {
    if (mouseX === null) return 1
    const btn = btnRefs.current[i]
    if (!btn) return 1
    // Center in the dock's coordinate space (offsetLeft is relative to dock,
    // the positioned offsetParent). Transforms don't reflow, so this is stable.
    const center = btn.offsetLeft + btn.offsetWidth / 2
    const dist = Math.abs(mouseX - center)
    if (dist > MAGNIFY_RANGE) return 1
    const t = 1 - dist / MAGNIFY_RANGE
    const eased = 1 - Math.pow(1 - t, 3) // ease-out cubic
    return 1 + (MAX_SCALE - 1) * eased
  }

  return (
    <div className="fixed bottom-5 left-1/2 z-50 -translate-x-1/2">
      <div
        ref={dockRef}
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
        className="motion-reduce:transform-none flex items-end gap-3 rounded-2xl border border-black/5 bg-white/70 px-4 py-2.5 shadow-[0_8px_30px_rgba(0,0,0,0.10),0_2px_8px_rgba(0,0,0,0.06)] backdrop-blur-xl"
      >
        {items.map(({ id, label, Icon }, i) => {
          const isActive = activeId === id
          const scale = scaleForIndex(i)
          const isPressed = pressed === id
          return (
            <div key={id} className="flex flex-col items-center gap-1">
              <button
                ref={(el) => {
                  btnRefs.current[i] = el
                }}
                onClick={() => {
                  setPressed(id)
                  window.setTimeout(() => setPressed((p) => (p === id ? null : p)), 320)
                  onSelect(id)
                }}
                aria-label={label}
                aria-current={isActive ? 'true' : undefined}
                style={{
                  transform: `scale(${scale})${isPressed ? ' translateY(-12px)' : ''}`,
                  transition: isPressed
                    ? 'transform 0.32s cubic-bezier(0.34,1.56,0.64,1)'
                    : 'transform 0.2s cubic-bezier(0.34,1.56,0.64,1)',
                }}
                className={cn(
                  'flex h-[52px] w-[52px] origin-bottom items-center justify-center rounded-xl',
                  'border border-black/5 bg-gradient-to-b from-white to-[#f0f0f3] shadow-sm transition-colors',
                  'hover:from-white hover:to-[#eaeaf0]',
                  isActive &&
                    'from-[#e8f1ff] to-[#d4e7ff] ring-2 ring-accent/30',
                )}
              >
                <Icon
                  size={26}
                  strokeWidth={1.9}
                  className={cn(isActive ? 'text-accent' : 'text-ink-soft')}
                />
              </button>
              <span
                className={cn(
                  'font-mono text-[9px] leading-none tracking-wide',
                  isActive ? 'text-accent' : 'text-ink-soft/60',
                )}
              >
                {label}
              </span>
              <span
                className={cn(
                  'h-1 w-1 rounded-full transition-opacity',
                  isActive ? 'bg-accent opacity-100' : 'opacity-0',
                )}
              />
            </div>
          )
        })}
      </div>
    </div>
  )
}
