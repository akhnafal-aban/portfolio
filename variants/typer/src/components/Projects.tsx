import { CodeWindow } from './CodeWindow'
import { CodeBlock } from './CodeBlock'
import { projects, type Project } from '@/data'

const FEATURED = [
  'AkhnaFin',
  'GayaGerakSeru',
  'BiteBeat',
  'Really Sport Center Platform',
  'TPA FTI — Academic Potential Test Platform',
  'Danantara-Research',
]

function shortUrl(url: string): string {
  return url.replace(/^https?:\/\//, '').replace(/\/$/, '')
}

function slug(name: string): string {
  return (
    name
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '') + '.ts'
  )
}

function snippet(p: Project): string {
  const stack = p.stack.map((s) => `"${s}"`).join(', ')
  const lines: string[] = []
  lines.push(`// ${p.name} — ${p.period}`)
  lines.push('const project = {')
  lines.push(`  stack: [${stack}],`)
  if (p.url) lines.push(`  repo: "${shortUrl(p.url)}"`)
  lines.push('}')
  lines.push(`// ${p.description}`)
  return lines.join('\n')
}

export function Projects() {
  const featured = FEATURED.map((n) =>
    projects.find((p) => p.name === n),
  ).filter((p): p is Project => Boolean(p))

  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
      {featured.map((p) => (
        <a
          key={p.name}
          href={p.url ?? undefined}
          target={p.url ? '_blank' : undefined}
          rel={p.url ? 'noopener noreferrer' : undefined}
          className={
            'group block ' +
            (p.url
              ? 'transition-transform duration-200 hover:-translate-y-0.5'
              : 'cursor-default')
          }
        >
          <CodeWindow
            filename={slug(p.name)}
            lang="ts"
            className={
              'h-full transition-colors duration-200 ' +
              (p.url ? 'group-hover:border-accent-dim/60' : '')
            }
            bodyClassName="bg-canvas"
          >
            <CodeBlock code={snippet(p)} wrap />
          </CodeWindow>
        </a>
      ))}
    </div>
  )
}
