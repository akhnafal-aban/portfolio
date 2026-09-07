import { useRef, type ReactNode } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useReducedMotion,
} from "motion/react";
import { cn } from "@/lib/cn";

type TiltCardProps = {
  children: ReactNode;
  className?: string;
  /** Max rotation in degrees. */
  maxRotation?: number;
  /** Perspective in px (distance to the virtual viewer). */
  perspective?: number;
  /** Scale applied on hover. */
  hoverScale?: number;
  /** Glow on hover. */
  glow?: boolean;
};

/**
 * 3D tilt card (Aceternity pattern).
 * Rotates in 3D toward the cursor with spring smoothing; inner layers use
 * `translateZ` for parallax depth. Respects prefers-reduced-motion (flat, no tilt).
 */
export function TiltCard({
  children,
  className,
  maxRotation = 12,
  perspective = 1000,
  hoverScale = 1.02,
  glow = true,
}: TiltCardProps) {
  const reduceMotion = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);

  // raw mouse position in range [-0.5, 0.5] across the card
  const mx = useMotionValue(0);
  const my = useMotionValue(0);

  // springed values for smooth tilt
  const rx = useSpring(useTransform(my, [-0.5, 0.5], [maxRotation, -maxRotation]), {
    stiffness: 200,
    damping: 18,
    mass: 0.4,
  });
  const ry = useSpring(useTransform(mx, [-0.5, 0.5], [-maxRotation, maxRotation]), {
    stiffness: 200,
    damping: 18,
    mass: 0.4,
  });

  function onMove(e: React.MouseEvent<HTMLDivElement>) {
    if (reduceMotion || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    mx.set(x - 0.5);
    my.set(y - 0.5);
  }

  function onLeave() {
    mx.set(0);
    my.set(0);
  }

    if (reduceMotion) {
    return (
      <div
        className={cn(
          "relative rounded-2xl bg-surface border border-line shadow-[0_1px_3px_rgba(0,0,0,0.04),0_8px_24px_-12px_rgba(0,0,0,0.08)]",
          className
        )}
      >
        {children}
      </div>
    );
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      whileHover={{ scale: hoverScale }}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
      style={{
        transformStyle: "preserve-3d",
        perspective,
        rotateX: rx,
        rotateY: ry,
      }}
      className={cn(
        "relative rounded-2xl bg-surface border border-line",
        "shadow-[0_1px_3px_rgba(0,0,0,0.04),0_8px_24px_-12px_rgba(0,0,0,0.08)]",
        "transition-shadow duration-300",
        glow && "hover:shadow-[0_2px_8px_rgba(37,99,235,0.08),0_20px_48px_-16px_rgba(37,99,235,0.22)]",
        className
      )}
    >
      {children}
    </motion.div>
  );
}

/**
 * Parallax depth layer inside a TiltCard. translateZ pops it forward.
 */
export function TiltLayer({
  children,
  depth = 50,
  className,
}: {
  children: ReactNode;
  depth?: number;
  className?: string;
}) {
  const reduceMotion = useReducedMotion();
  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }
  return (
    <div style={{ transform: `translateZ(${depth}px)` }} className={className}>
      {children}
    </div>
  );
}
