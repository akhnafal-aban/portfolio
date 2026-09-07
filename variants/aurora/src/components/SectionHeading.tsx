import { cn } from '@/lib/utils'
import { Reveal } from './Reveal'

type SectionHeadingProps = {
  index: string
  title: string
  className?: string
}

export function SectionHeading({ index, title, className }: SectionHeadingProps) {
  return (
    <Reveal className={cn('mb-8 md:mb-12', className)}>
      <div className="flex items-baseline gap-4">
        <span className="font-mono text-xs tracking-widest text-teal-300/70">{index}</span>
        <h2 className="text-2xl font-semibold tracking-tight text-white md:text-3xl">{title}</h2>
      </div>
      <div className="mt-3 h-px w-full max-w-[120px] bg-gradient-to-r from-teal-400/40 to-transparent" />
    </Reveal>
  )
}
