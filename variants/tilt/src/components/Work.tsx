import { motion } from "motion/react";
import { SectionHeading } from "@/components/SectionHeading";
import { TiltCard, TiltLayer } from "@/components/TiltCard";
import { projects, type Project } from "@/data/profile";

const kindLabel: Record<Project["kind"], string> = {
  ios: "iOS",
  backend: "Backend",
  research: "Research",
  academy: "Academy",
};

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: (index % 2) * 0.08, ease: "easeOut" }}
    >
      <TiltCard className="group h-full p-7 flex flex-col" maxRotation={14}>
        <TiltLayer depth={70} className="relative z-30 flex items-center justify-between mb-5">
          <span className="font-mono text-xs uppercase tracking-wider text-accent bg-accent-soft/60 px-2.5 py-1 rounded-full">
            {kindLabel[project.kind]}
          </span>
          <span className="font-mono text-xs text-ink-faint">{project.period}</span>
        </TiltLayer>

        <TiltLayer depth={50} className="relative z-20">
          <h3 className="text-2xl font-bold tracking-tight text-ink leading-tight">
            {project.title}
          </h3>
          <p className="text-sm text-ink-soft font-medium mt-1">{project.tagline}</p>
        </TiltLayer>

        <TiltLayer depth={30} className="relative z-10 mt-4 flex-1">
          <p className="text-sm text-ink-soft leading-relaxed">{project.description}</p>
        </TiltLayer>

        <TiltLayer depth={45} className="relative z-20 mt-5 flex flex-wrap gap-1.5">
          {project.stack.map((s) => (
            <span
              key={s}
              className="font-mono text-[11px] text-ink-soft bg-bg border border-line rounded-md px-1.5 py-0.5"
            >
              {s}
            </span>
          ))}
        </TiltLayer>

        {project.repo && (
          <TiltLayer depth={60} className="relative z-30 mt-5">
            <a
              href={project.repo}
              target="_blank"
              rel="noreferrer"
              className="font-mono text-xs font-medium text-ink hover:text-accent transition-colors inline-flex items-center gap-1"
            >
              view repo ↗
            </a>
          </TiltLayer>
        )}
      </TiltCard>
    </motion.div>
  );
}

export function Work() {
  return (
    <section className="px-4 py-16">
      <div className="mx-auto max-w-5xl">
        <SectionHeading index="01" title="Work" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {projects.map((p, i) => (
            <ProjectCard key={p.title} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
