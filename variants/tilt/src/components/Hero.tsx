import { motion } from "motion/react";
import { TiltCard, TiltLayer } from "@/components/TiltCard";
import { profile } from "@/data/profile";

export function Hero() {
  return (
    <header className="px-4 pt-16 pb-12 sm:pt-24">
      <div className="mx-auto max-w-5xl">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="font-mono text-sm text-ink-faint mb-6"
        >
          {profile.location}
        </motion.p>

        <TiltCard
          maxRotation={8}
          hoverScale={1.01}
          className="overflow-hidden p-8 sm:p-14"
        >
          <TiltLayer depth={60} className="relative z-30">
            <span className="inline-block h-2 w-2 rounded-full bg-accent mb-6 shadow-[0_0_12px_rgba(37,99,235,0.6)]" />
          </TiltLayer>

          <TiltLayer depth={40} className="relative z-20">
            <h1 className="text-5xl sm:text-7xl font-bold tracking-tight text-ink leading-[0.95]">
              {profile.name}
            </h1>
          </TiltLayer>

          <TiltLayer depth={20} className="relative z-10 mt-5">
            <p className="text-lg sm:text-xl text-ink-soft font-medium">
              {profile.role}
            </p>
          </TiltLayer>

          <TiltLayer depth={10} className="relative z-0 mt-6 max-w-2xl">
            <p className="text-base sm:text-lg text-ink-soft leading-relaxed">
              {profile.summary}
            </p>
          </TiltLayer>

          {/* hover glow rim — lives behind content, doesn't tilt */}
          <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-accent-soft/0 via-accent-soft/0 to-accent-soft/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        </TiltCard>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 font-mono text-sm"
        >
          <a className="text-ink-soft hover:text-accent transition-colors" href={profile.links.github} target="_blank" rel="noreferrer">
            github/akhnafal-aban ↗
          </a>
          <a className="text-ink-soft hover:text-accent transition-colors" href={profile.links.linkedin} target="_blank" rel="noreferrer">
            linkedin ↗
          </a>
          <a className="text-ink-soft hover:text-accent transition-colors" href={`mailto:${profile.email}`}>
            {profile.email}
          </a>
        </motion.div>
      </div>
    </header>
  );
}
