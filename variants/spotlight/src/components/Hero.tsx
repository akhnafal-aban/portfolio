import { profile } from "@/data/content";

export function Hero() {
  return (
    <header
      id="top"
      className="relative pt-32 pb-24 sm:pt-40 sm:pb-32 flex flex-col items-start"
    >
      <p className="font-mono text-xs text-white/55 mb-6 tracking-wide uppercase">
        {profile.basedIn}
      </p>
      <h1 className="hero-glow font-extrabold tracking-tighter text-5xl sm:text-7xl leading-[0.95] text-white/90 hover:text-white transition-colors duration-500">
        {profile.name}
      </h1>
      <p className="mt-5 font-mono text-base sm:text-lg text-white/75">
        {profile.headline}
      </p>
      <p className="mt-8 max-w-2xl text-base sm:text-lg leading-relaxed text-white/70">
        {profile.summary}
      </p>

      <div className="mt-10 flex items-center gap-6 flex-wrap">
        <a
          href="#work"
          className="font-mono text-sm text-emerald-400/80 hover:text-emerald-400 transition-colors duration-300 border border-emerald-400/20 hover:border-emerald-400/50 rounded-full px-5 py-2"
        >
          View work →
        </a>
        <a
          href={`mailto:${profile.email}`}
          className="font-mono text-sm text-white/50 hover:text-white transition-colors duration-300"
        >
          {profile.email}
        </a>
        <a
          href={profile.github}
          target="_blank"
          rel="noreferrer"
          className="font-mono text-sm text-white/50 hover:text-white transition-colors duration-300"
        >
          GitHub
        </a>
        <a
          href={profile.linkedin}
          target="_blank"
          rel="noreferrer"
          className="font-mono text-sm text-white/50 hover:text-white transition-colors duration-300"
        >
          LinkedIn
        </a>
      </div>
    </header>
  );
}
