import { motion } from "motion/react";
import { SectionHeading } from "@/components/SectionHeading";
import { TiltCard, TiltLayer } from "@/components/TiltCard";
import { publications } from "@/data/profile";

export function Publications() {
  return (
    <section className="px-4 py-16">
      <div className="mx-auto max-w-5xl">
        <SectionHeading index="03" title="Publications" />
        <div className="space-y-5">
          {publications.map((pub) => (
            <motion.div
              key={pub.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <TiltCard className="p-7" maxRotation={6}>
                <TiltLayer depth={50} className="relative z-20">
                  <p className="font-mono text-xs uppercase tracking-wider text-accent mb-2">
                    Journal Article
                  </p>
                  <h3 className="text-xl font-bold text-ink leading-tight">{pub.title}</h3>
                </TiltLayer>
                <TiltLayer depth={30} className="relative z-10 mt-4">
                  <p className="text-sm text-ink-soft">
                    <span className="text-ink font-medium">Authors:</span> {pub.authors.join(", ")}
                  </p>
                  <p className="text-sm text-ink-soft mt-1">
                    <span className="text-ink font-medium">Venue:</span> {pub.venue}
                  </p>
                  <p className="text-sm text-ink-soft mt-1">
                    <span className="text-ink font-medium">Indexed:</span> {pub.indexed}
                  </p>
                  <p className="text-sm text-ink-soft mt-3 leading-relaxed">{pub.topic}</p>
                </TiltLayer>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
