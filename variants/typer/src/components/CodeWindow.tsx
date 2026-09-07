import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

type CodeWindowProps = {
  filename: string
  lang?: string
  children: ReactNode
  className?: string
  bodyClassName?: string
  showGutter?: boolean
  lineCount?: number
  /** Top accent dots: default true */
  dots?: boolean
}

export function CodeWindow({
  filename,
  lang = 'ts',
  children,
  className,
  bodyClassName,
  showGutter = false,
  lineCount = 0,
  dots = true,
}: CodeWindowProps) {
  return (
    <div
      className={cn(
        'overflow-hidden rounded-xl border border-border-subtle bg-canvas-soft shadow-2xl shadow-black/40',
        'ring-1 ring-white/[0.03]',
        className,
      )}
    >
      <div className="flex items-center gap-3 border-b border-border-subtle bg-canvas-elevated/60 px-4 py-2.5">
        {dots && (
          <div className="flex shrink-0 items-center gap-1.5">
            <span className="h-3 w-3 rounded-full bg-dot-red" />
            <span className="h-3 w-3 rounded-full bg-dot-amber" />
            <span className="h-3 w-3 rounded-full bg-dot-green" />
          </div>
        )}
        <div className="flex min-w-0 flex-1 items-center gap-2">
          <span className="truncate font-mono text-xs text-text-secondary">
            {filename}
          </span>
        </div>
        <span className="shrink-0 rounded border border-border-subtle px-1.5 py-0.5 font-mono text-[10px] uppercase tracking-wide text-text-tertiary">
          {lang}
        </span>
      </div>
      <div
        className={cn(
          'relative flex min-w-0',
          bodyClassName,
        )}
      >
        {showGutter && lineCount > 0 && (
          <div
            aria-hidden
            className="select-none border-r border-border-subtle/60 px-3 py-4 text-right font-mono text-xs leading-relaxed text-text-tertiary/70"
          >
            {Array.from({ length: lineCount }, (_, i) => (
              <div key={i}>{i + 1}</div>
            ))}
          </div>
        )}
        <div className="min-w-0 flex-1 overflow-x-auto">{children}</div>
      </div>
    </div>
  )
}
