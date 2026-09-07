import { useEffect } from "react";

/**
 * Tracks the mouse position and writes it to CSS custom properties on :root.
 * Uses direct DOM writes (not React state) to avoid re-renders on every mousemove.
 */
export function useSpotlight() {
  useEffect(() => {
    const root = document.documentElement;

    const handleMove = (e: MouseEvent) => {
      root.style.setProperty("--mx", `${e.clientX}px`);
      root.style.setProperty("--my", `${e.clientY}px`);
    };

    window.addEventListener("mousemove", handleMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);
}
