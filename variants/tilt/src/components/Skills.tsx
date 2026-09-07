import { motion } from "motion/react";
import { SectionHeading } from "@/components/SectionHeading";
import { skills } from "@/data/profile";

export function Skills() {
  return (
    <section className="px-4 py-16">
      <div className="mx-auto max-w-5xl">
        <SectionHeading index="04" title="Skills" />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
          {skills.map((group, i) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: (i % 2) * 0.06, ease: "easeOut" }}
            >
              <h3 className="font-mono text-xs uppercase tracking-wider text-ink-faint mb-2.5">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {group.skills.map((s) => (
                  <span
                    key={s}
                    className="font-mono text-xs text-ink bg-surface border border-line rounded-md px-2 py-1 transition-colors hover:border-accent hover:text-accent"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
