import { CodeWindow } from './CodeWindow'
import { CodeBlock } from './CodeBlock'
import { profile } from '@/data'

const CONTACT_CODE = `const contact = {
  email: "${profile.email}",
  github: "${profile.github}",
  linkedin: "${profile.linkedin}",
  youtube: "${profile.youtube}",
  location: "${profile.location}"
}`

const LINKS = [
  { label: 'email', href: `mailto:${profile.email}`, value: profile.email },
  { label: 'github', href: `https://${profile.github}`, value: profile.github },
  {
    label: 'linkedin',
    href: `https://${profile.linkedin}`,
    value: profile.linkedin,
  },
  {
    label: 'youtube',
    href: profile.youtubeUrl,
    value: profile.youtube,
  },
]

export function Contact() {
  return (
    <div className="space-y-6">
      <CodeWindow
        filename="contact.ts"
        lang="ts"
        showGutter
        lineCount={CONTACT_CODE.split('\n').length}
        className="w-full"
        bodyClassName="bg-canvas"
      >
        <CodeBlock code={CONTACT_CODE} />
      </CodeWindow>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        {LINKS.map((l) => (
          <a
            key={l.label}
            href={l.href}
            target={l.href.startsWith('mailto:') ? undefined : '_blank'}
            rel={
              l.href.startsWith('mailto:') ? undefined : 'noopener noreferrer'
            }
            className="group flex items-center justify-between gap-3 rounded-lg border border-border-subtle bg-canvas-soft px-4 py-3 transition-colors hover:border-accent-dim/60"
          >
            <span className="font-mono text-xs text-accent">{l.label}</span>
            <span className="truncate font-mono text-xs text-text-secondary group-hover:text-text-primary">
              {l.value}
            </span>
          </a>
        ))}
      </div>
    </div>
  )
}
