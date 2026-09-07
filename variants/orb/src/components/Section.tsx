import type { ReactNode } from 'react'
import { Reveal } from './Reveal'

export function Section({
  id,
  label,
  title,
  children,
}: {
  id: string
  label: string
  title: string
  children: ReactNode
}) {
  return (
    <section id={id} className="mx-auto max-w-6xl px-6 py-24">
      <Reveal>
        <div className="flex items-baseline gap-4">
          <span className="label text-emerald/80">{label}</span>
          <span className="ruler flex-1" />
        </div>
        <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          {title}
        </h2>
      </Reveal>
      <div className="mt-12">{children}</div>
    </section>
  )
}
