import { motion } from "motion/react";
import { cn } from "@/lib/cn";

export function SectionHeading({
  index,
  title,
  className,
}: {
  index: string;
  title: string;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={cn("flex items-baseline gap-4 mb-10", className)}
    >
      <span className="font-mono text-sm text-accent tabular-nums">{index}</span>
      <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-ink">{title}</h2>
      <span className="flex-1 h-px bg-line" />
    </motion.div>
  );
}
