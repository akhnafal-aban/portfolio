import { useMemo } from 'react'
import { tokenizeCode, TOKEN_CLASS } from '@/lib/tokenize'
import { cn } from '@/lib/utils'

type CodeBlockProps = {
  code: string
  className?: string
  /** wrap long lines instead of horizontal scroll */
  wrap?: boolean
}

export function CodeBlock({ code, className, wrap = false }: CodeBlockProps) {
  const tokens = useMemo(() => tokenizeCode(code), [code])
  return (
    <pre
      className={cn(
        'm-0 px-4 py-4 font-mono text-[13px] leading-relaxed',
        wrap ? 'whitespace-pre-wrap break-words' : 'whitespace-pre',
        className,
      )}
    >
      <code>
        {tokens.map((tok, i) => (
          <span key={i} className={TOKEN_CLASS[tok.c]}>
            {tok.t}
          </span>
        ))}
      </code>
    </pre>
  )
}
