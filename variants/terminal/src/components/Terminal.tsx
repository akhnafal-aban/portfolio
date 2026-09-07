import { useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react'
import { cn } from '@/lib/utils'
import { runCommand, commandList } from '@/commands'
import type { Color, Entry, Line, Seg } from '@/types'

const PROMPT = 'akhnaf@portfolio:~$'

const colorClass: Record<Color, string> = {
  d: 'text-term-green-dim',
  b: 'text-term-green-bright',
  a: 'text-term-green',
  am: 'text-term-amber',
  cy: 'text-term-cyan',
  r: 'text-term-red',
  mg: 'text-term-magenta',
  m: 'text-term-muted',
}

function prefersReduced() {
  return (
    typeof window !== 'undefined' &&
    window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
  )
}

const WELCOME: Line[] = [
  [{ t: 'Last login: ', c: 'm' }, { t: new Date().toUTCString(), c: 'm' }],
  [{ t: '', c: 'd' }],
  [{ t: 'akhnaf@portfolio:~$ ', c: 'a' }, { t: 'whoami', c: 'b' }],
  [{ t: 'noor-akhnafal-aban  ·  Software Engineer  ·  iOS · Backend · Infrastructure', c: 'd' }],
  [{ t: '', c: 'd' }],
  [
    { t: 'Welcome. This terminal IS the portfolio. ', c: 'd' },
    { t: 'Type `help`', c: 'b' },
    { t: ' or click a command below.', c: 'd' },
  ],
  [{ t: '', c: 'd' }],
]

function Segments({ segs }: { segs: Seg[] }) {
  return (
    <>
      {segs.map((s, i) =>
        s.href ? (
          <a
            key={i}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            className={cn('t-link', s.c && colorClass[s.c])}
          >
            {s.t}
          </a>
        ) : (
          <span key={i} className={cn(s.c ? colorClass[s.c] : 'text-term-green-dim')}>
            {s.t}
          </span>
        ),
      )}
    </>
  )
}

function LineView({ line }: { line: Line }) {
  return (
    <div className="tw-line whitespace-pre-wrap break-words leading-snug">
      <Segments segs={line} />
    </div>
  )
}

export default function Terminal() {
  const [entries, setEntries] = useState<Entry[]>(() => [
    { id: 0, cmd: '', output: WELCOME, revealed: prefersReduced() ? WELCOME.length : 0 },
  ])
  const [input, setInput] = useState('')
  const [history, setHistory] = useState<string[]>([])
  const [histIdx, setHistIdx] = useState<number | null>(null)
  const [reduced] = useState(prefersReduced)

  const scrollRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const idRef = useRef(1)

  // auto-scroll to bottom when buffer grows
  useLayoutEffect(() => {
    const el = scrollRef.current
    if (el) el.scrollTop = el.scrollHeight
  }, [entries])

  // typewriter reveal: advance the last entry's revealed count
  const last = entries[entries.length - 1]
  useEffect(() => {
    if (!last) return
    if (last.revealed >= last.output.length) return
    if (reduced) {
      setEntries((prev) =>
        prev.map((e, i) =>
          i === prev.length - 1 ? { ...e, revealed: e.output.length } : e,
        ),
      )
      return
    }
    const id = setTimeout(() => {
      setEntries((prev) =>
        prev.map((e, i) =>
          i === prev.length - 1 && e.revealed < e.output.length
            ? { ...e, revealed: e.revealed + 1 }
            : e,
        ),
      )
    }, 22)
    return () => clearTimeout(id)
  }, [last?.id, last?.revealed, last?.output.length, reduced])

  const focusInput = useCallback(() => inputRef.current?.focus(), [])

  const submit = useCallback(
    (raw: string) => {
      const trimmed = raw.trim()
      const result = runCommand(trimmed)
      const nextId = idRef.current++

      if (result.clear) {
        setEntries([{ id: nextId, cmd: trimmed, output: [], revealed: 0 }])
        if (trimmed) setHistory((h) => [...h, trimmed])
        setHistIdx(null)
        setInput('')
        return
      }

      const newEntry: Entry = {
        id: nextId,
        cmd: trimmed,
        output: result.output,
        revealed: reduced ? result.output.length : 0,
      }
      setEntries((prev) => [
        ...prev.map((e, i) =>
          i === prev.length - 1 ? { ...e, revealed: e.output.length } : e,
        ),
        newEntry,
      ])
      if (trimmed) setHistory((h) => [...h, trimmed])
      setHistIdx(null)
      setInput('')
    },
    [reduced],
  )

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    submit(input)
  }

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'ArrowUp') {
      e.preventDefault()
      if (history.length === 0) return
      const idx = histIdx === null ? history.length - 1 : Math.max(0, histIdx - 1)
      setHistIdx(idx)
      setInput(history[idx] ?? '')
    } else if (e.key === 'ArrowDown') {
      e.preventDefault()
      if (histIdx === null) return
      const idx = histIdx + 1
      if (idx >= history.length) {
        setHistIdx(null)
        setInput('')
      } else {
        setHistIdx(idx)
        setInput(history[idx] ?? '')
      }
    } else if (e.key === 'l' && (e.ctrlKey || e.metaKey)) {
      e.preventDefault()
      submit('clear')
    } else if (e.key === 'Tab') {
      e.preventDefault()
      const prefix = input.trim().toLowerCase()
      if (!prefix) return
      const match = commandList.find((c) => c.startsWith(prefix))
      if (match) setInput(match)
    }
  }

  const quickCommands = useMemo(
    () => ['about', 'projects', 'skills', 'publications', 'contact', 'social', 'help'],
    [],
  )

  return (
    <div
      className="relative h-screen w-screen overflow-hidden bg-term-bg text-term-green-dim"
      onClick={focusInput}
      role="application"
      aria-label="Terminal portfolio of Noor Akhnafal Aban"
    >
      {/* Title bar */}
      <div className="flex items-center gap-2 border-b border-term-border bg-term-bg-soft px-3 py-2 select-none">
        <span className="h-3 w-3 rounded-full bg-term-red/80" />
        <span className="h-3 w-3 rounded-full bg-term-amber/80" />
        <span className="h-3 w-3 rounded-full bg-term-green-dim/80" />
        <span className="ml-3 text-xs text-term-muted">
          akhnaf@portfolio: ~ — zsh — 120x40
        </span>
        <span className="ml-auto text-xs text-term-muted">
          {PROMPT}
        </span>
      </div>

      {/* Scroll buffer */}
      <div
        ref={scrollRef}
        className="h-[calc(100vh-6.5rem)] overflow-y-auto px-3 py-3 text-[13px] sm:text-sm md:text-[15px]"
      >
        {entries.map((entry) => {
          const showPrompt = entry.id !== 0 || entry.cmd !== ''
          return (
            <div key={entry.id} className="mb-1">
              {showPrompt && (
                <div className="whitespace-pre-wrap">
                  <span className="text-term-green">{PROMPT} </span>
                  <span className="text-term-green-bright">{entry.cmd}</span>
                </div>
              )}
              <div className="mt-0.5">
                {entry.output.slice(0, entry.revealed).map((line, i) => (
                  <LineView key={i} line={line} />
                ))}
              </div>
            </div>
          )
        })}

        {/* Active input line */}
        <form onSubmit={onSubmit} className="mt-1 flex items-center">
          <span className="text-term-green">{PROMPT}&nbsp;</span>
          <input
            ref={inputRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={onKeyDown}
            spellCheck={false}
            autoCapitalize="off"
            autoCorrect="off"
            autoComplete="off"
            aria-label="terminal command input"
            className="ml-1 flex-1 bg-transparent text-term-green-bright caret-transparent outline-none"
            // caret-transparent: we draw the block cursor below
          />
          <span className="cursor-block -ml-[0.6em]" aria-hidden />
        </form>

        {/* Quick command chips */}
        <div className="mt-3 flex flex-wrap gap-2">
          {quickCommands.map((c) => (
            <button
              key={c}
              type="button"
              onClick={(e) => {
                e.stopPropagation()
                submit(c)
              }}
              className="border border-term-border px-2 py-0.5 text-xs text-term-green transition-colors hover:border-term-green hover:bg-term-green/10 hover:text-term-green-bright"
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      {/* CRT overlays */}
      {!reduced && <div className="crt-overlay" aria-hidden />}
      <div className="crt-vignette" aria-hidden />
    </div>
  )
}
