export type TokClass =
  | 'keyword'
  | 'string'
  | 'property'
  | 'value'
  | 'comment'
  | 'number'
  | 'punct'

export type Tok = { t: string; c: TokClass }

const KEYWORDS = new Set([
  'const',
  'let',
  'var',
  'return',
  'function',
  'import',
  'from',
  'export',
  'new',
  'type',
  'interface',
  'class',
  'extends',
  'implements',
  'await',
  'async',
])

const VALUES = new Set(['true', 'false', 'null', 'undefined'])

export function tokenizeLine(line: string): Tok[] {
  const tokens: Tok[] = []
  let i = 0
  while (i < line.length) {
    const rest = line.slice(i)

    const cm = rest.match(/^\/\/.*$/)
    if (cm) {
      tokens.push({ t: cm[0], c: 'comment' })
      break
    }

    const st = rest.match(/^"(?:[^"\\]|\\.)*"/)
    if (st) {
      tokens.push({ t: st[0], c: 'string' })
      i += st[0].length
      continue
    }

    const st2 = rest.match(/^'(?:[^'\\]|\\.)*'/)
    if (st2) {
      tokens.push({ t: st2[0], c: 'string' })
      i += st2[0].length
      continue
    }

    const kw = rest.match(/^[A-Za-z_$][\w$]*/)
    if (kw) {
      const word = kw[0]
      const after = line.slice(i + word.length)
      const isProperty = /^\s*:/.test(after)
      if (isProperty) {
        tokens.push({ t: word, c: 'property' })
        i += word.length
        continue
      }
      if (KEYWORDS.has(word)) {
        tokens.push({ t: word, c: 'keyword' })
        i += word.length
        continue
      }
      if (VALUES.has(word)) {
        tokens.push({ t: word, c: 'value' })
        i += word.length
        continue
      }
      tokens.push({ t: word, c: 'punct' })
      i += word.length
      continue
    }

    const nm = rest.match(/^\d+(?:\.\d+)?/)
    if (nm) {
      tokens.push({ t: nm[0], c: 'number' })
      i += nm[0].length
      continue
    }

    const ws = rest.match(/^\s+/)
    if (ws) {
      tokens.push({ t: ws[0], c: 'punct' })
      i += ws[0].length
      continue
    }

    tokens.push({ t: rest[0], c: 'punct' })
    i += 1
  }
  return tokens
}

export function tokenizeCode(code: string): Tok[] {
  const lines = code.split('\n')
  const out: Tok[] = []
  lines.forEach((line, i) => {
    out.push(...tokenizeLine(line))
    if (i < lines.length - 1) out.push({ t: '\n', c: 'punct' })
  })
  return out
}

export const TOKEN_CLASS: Record<TokClass, string> = {
  keyword: 'text-syn-keyword',
  string: 'text-syn-string',
  property: 'text-syn-property',
  value: 'text-syn-value',
  comment: 'text-syn-comment',
  number: 'text-syn-number',
  punct: 'text-syn-punct',
}
