import { motion } from "motion/react";
import { TiltCard, TiltLayer } from "@/components/TiltCard";
import { profile } from "@/data/profile";

export function Contact() {
  return (
    <section className="px-4 py-20">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <TiltCard maxRotation={6} hoverScale={1.01} className="p-10 sm:p-16 text-center overflow-hidden">
            <TiltLayer depth={60} className="relative z-30">
              <span className="inline-block h-2 w-2 rounded-full bg-accent mb-6 shadow-[0_0_12px_rgba(37,99,235,0.6)]" />
            </TiltLayer>
            <TiltLayer depth={40} className="relative z-20">
              <p className="font-mono text-xs uppercase tracking-wider text-accent mb-4">
                Contact
              </p>
              <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-ink leading-tight">
                Let's build something.
              </h2>
            </TiltLayer>
            <TiltLayer depth={20} className="relative z-10 mt-6">
              <p className="text-base text-ink-soft max-w-md mx-auto">
                Open to iOS and backend product work, collaboration, and conversation.
              </p>
            </TiltLayer>
            <TiltLayer depth={50} className="relative z-30 mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href={`mailto:${profile.email}`}
                className="font-medium text-sm text-white bg-accent rounded-full px-6 py-3 hover:opacity-90 transition-opacity"
              >
                {profile.email}
              </a>
              <a
                href={profile.links.github}
                target="_blank"
                rel="noreferrer"
                className="font-mono text-sm text-ink hover:text-accent transition-colors px-4 py-3"
              >
                github ↗
              </a>
              <a
                href={profile.links.linkedin}
                target="_blank"
                rel="noreferrer"
                className="font-mono text-sm text-ink hover:text-accent transition-colors px-4 py-3"
              >
                linkedin ↗
              </a>
            </TiltLayer>
          </TiltCard>
        </motion.div>
      </div>
    </section>
  );
}
