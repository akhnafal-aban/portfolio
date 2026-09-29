import { cn } from "@/lib/utils";

interface ProjectCardProps {
  title: string;
  period: string;
  stack: string;
  description: string;
  detail?: string;
  repo?: string;
  live?: string;
  admin?: string;
  index: number;
}

export function ProjectCard({
  title,
  period,
  stack,
  description,
  detail,
  repo,
  live,
  admin,
  index,
}: ProjectCardProps) {
  const handleCardMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--cx", `${e.clientX - rect.left}px`);
    e.currentTarget.style.setProperty("--cy", `${e.clientY - rect.top}px`);
  };

  return (
    <article
      onMouseMove={handleCardMove}
      className={cn(
        "spotlight-card dim dim-hover",
        "group relative border border-white/10 rounded-2xl p-6 sm:p-8 bg-white/[0.02]",
        "hover:bg-white/[0.04]",
      )}
    >
      <div className="flex flex-col gap-1 mb-4">
        <div className="flex items-baseline justify-between gap-4 flex-wrap">
          <h3 className="font-semibold text-lg sm:text-xl tracking-tight text-white/90 group-hover:text-white transition-colors duration-300">
            {title}
          </h3>
          <span className="font-mono text-xs text-white/55 group-hover:text-white/80 transition-colors duration-300">
            {period}
          </span>
        </div>
        <p className="font-mono text-xs text-white/55 group-hover:text-white/80 transition-colors duration-300">
          {stack}
        </p>
      </div>

      <p className="text-sm sm:text-base leading-relaxed text-white/80 group-hover:text-white/95 transition-colors duration-300 mb-3">
        {description}
      </p>
      {detail && (
        <p className="text-sm leading-relaxed text-white/70 group-hover:text-white/90 transition-colors duration-300">
          {detail}
        </p>
      )}

      <div className="mt-5 flex items-center gap-4 flex-wrap">
        <span className="font-mono text-xs text-white/40 group-hover:text-white/60 transition-colors duration-300">
          {String(index + 1).padStart(2, "0")}
        </span>
        {live && (
          <a
            href={live}
            target="_blank"
            rel="noreferrer"
            className="font-mono text-xs text-emerald-400/80 hover:text-emerald-400 transition-colors duration-300"
          >
            Live ↗
          </a>
        )}
        {admin && (
          <a
            href={admin}
            target="_blank"
            rel="noreferrer"
            className="font-mono text-xs text-emerald-400/60 hover:text-emerald-400 transition-colors duration-300"
          >
            Admin ↗
          </a>
        )}
        {repo && (
          <a
            href={repo}
            target="_blank"
            rel="noreferrer"
            className="font-mono text-xs text-white/50 hover:text-white/80 transition-colors duration-300"
          >
            {repo.replace("https://", "")} →
          </a>
        )}
      </div>
    </article>
  );
}
