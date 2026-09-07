import { HERO } from '@/data/content'

export function Hero() {
  return (
    <section className="border-b border-rule pt-10 md:pt-16 pb-16 md:pb-24">
      {/* masthead rule */}
      <div className="flex items-center justify-between pb-6 md:pb-8 border-b border-ink">
        <span className="label-caps text-ink-muted text-[10px] md:text-xs">Portfolio — Editorial</span>
        <span className="label-caps text-ink-muted text-[10px] md:text-xs tabular-nums">MMXXVI</span>
      </div>

      <div className="pt-12 md:pt-20">
        <p className="label-caps text-accent text-[11px] md:text-xs mb-6 md:mb-8">{HERO.location}</p>

        <h1 className="font-display text-ink leading-[0.92] tracking-tight">
          <span className="block text-[15vw] md:text-[9.5rem] lg:text-[11rem] font-medium">{HERO.name.split(' ')[0]}</span>
          <span className="block text-[15vw] md:text-[9.5rem] lg:text-[11rem] font-medium italic">
            {HERO.name.split(' ').slice(1).join(' ')}
          </span>
        </h1>

        <div className="mt-8 md:mt-12 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <p className="font-display text-2xl md:text-3xl text-ink-soft leading-snug">
            {HERO.roles.join(' · ')}
          </p>
          <p className="font-body text-ink-muted text-sm md:text-base max-w-md leading-relaxed">{HERO.hook}</p>
        </div>
      </div>
    </section>
  )
}
