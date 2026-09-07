import { useEffect, useMemo, useRef, useState, type ReactNode } from 'react'
import { tokenizeCode, TOKEN_CLASS } from '@/lib/tokenize'
import { usePrefersReducedMotion } from '@/lib/usePrefersReducedMotion'
import { cn } from '@/lib/utils'

type TypewriterProps = {
  code: string
  /** ms per character */
  speed?: number
  className?: string
  /** start delay (ms) */
  startDelay?: number
}

export function Typewriter({
  code,
  speed = 28,
  className,
  startDelay = 250,
}: TypewriterProps) {
  const reduce = usePrefersReducedMotion()
  const tokens = useMemo(() => tokenizeCode(code), [code])
  const total = code.length
  const [typed, setTyped] = useState<number>(reduce ? total : 0)
  const [started, setStarted] = useState<boolean>(reduce)
  const tickRef = useRef<number | null>(null)
  const startRef = useRef<number | null>(null)

  useEffect(() => {
    if (reduce) {
      setTyped(total)
      setStarted(true)
      return
    }
    let cancelled = false
    startRef.current = window.setTimeout(() => {
      if (cancelled) return
      setStarted(true)
      let n = 0
      tickRef.current = window.setInterval(() => {
        n += 1
        setTyped(n)
        if (n >= total && tickRef.current) {
          window.clearInterval(tickRef.current)
          tickRef.current = null
        }
      }, speed)
    }, startDelay)

    return () => {
      cancelled = true
      if (startRef.current) window.clearTimeout(startRef.current)
      if (tickRef.current) window.clearInterval(tickRef.current)
    }
  }, [reduce, speed, startDelay, total])

  const done = typed >= total
  let budget = typed
  const spans: ReactNode[] = []

  for (let i = 0; i < tokens.length; i += 1) {
    if (budget <= 0) break
    const tok = tokens[i]
    const text = budget >= tok.t.length ? tok.t : tok.t.slice(0, budget)
    budget -= text.length
    spans.push(
      <span key={i} className={TOKEN_CLASS[tok.c]}>
        {text}
      </span>,
    )
  }

  return (
    <pre
      className={cn(
        'm-0 px-4 py-4 font-mono text-[13px] leading-relaxed whitespace-pre',
        className,
      )}
      aria-label={code}
    >
      <code>
        {started ? spans : null}
        <span className="tw-cursor" aria-hidden />
        {done ? <span className="sr-only">.</span> : null}
      </code>
    </pre>
  )
}
