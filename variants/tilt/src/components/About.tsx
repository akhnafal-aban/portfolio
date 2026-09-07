import { motion } from "motion/react";
import { SectionHeading } from "@/components/SectionHeading";
import { TiltCard, TiltLayer } from "@/components/TiltCard";
import { experience, profile, awards } from "@/data/profile";

export function About() {
  return (
    <section className="px-4 py-16">
      <div className="mx-auto max-w-5xl">
        <SectionHeading index="02" title="About" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {/* Education tilt card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="md:col-span-1"
          >
            <TiltCard className="h-full p-6" maxRotation={10}>
              <TiltLayer depth={50} className="relative z-20">
                <p className="font-mono text-xs uppercase tracking-wider text-accent mb-3">Education</p>
                <h3 className="text-lg font-bold text-ink leading-tight">{profile.education.school}</h3>
                <p className="text-sm text-ink-soft mt-1">{profile.education.degree}</p>
                <p className="text-sm text-ink-faint mt-1">{profile.education.city}</p>
                <p className="font-mono text-xs text-ink-faint mt-3">{profile.education.period}</p>
                <p className="font-mono text-sm text-ink mt-2">GPA {profile.education.gpa}</p>
              </TiltLayer>
            </TiltCard>
          </motion.div>

          {/* Experience list */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
            className="md:col-span-2 space-y-6"
          >
            {experience.map((exp) => (
              <div key={`${exp.role}-${exp.org}`} className="border-l-2 border-line pl-4 relative">
                <span className="absolute -left-[5px] top-1.5 h-2 w-2 rounded-full bg-accent" />
                <div className="flex flex-wrap items-baseline justify-between gap-x-3">
                  <h3 className="text-base font-bold text-ink">{exp.role}</h3>
                  <span className="font-mono text-xs text-ink-faint">{exp.period}</span>
                </div>
                <p className="text-sm text-ink-soft font-medium">{exp.org}</p>
                <ul className="mt-2 space-y-1">
                  {exp.bullets.map((b) => (
                    <li key={b} className="text-sm text-ink-soft leading-relaxed">
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Awards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mt-6 flex flex-wrap gap-x-6 gap-y-2"
        >
          {awards.map((a) => (
            <span key={a} className="text-sm text-ink-soft">
              <span className="text-accent mr-1.5">★</span>
              {a}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
