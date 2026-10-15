"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";

export function HeroEntrance({ children }: { children: ReactNode }) {
  const reduced = useReducedMotion();
  return (
    <motion.div className="hero-grid" initial="hidden" animate="visible" variants={{ hidden: {}, visible: { transition: { staggerChildren: reduced ? 0 : 0.1 } } }}>
      {children}
    </motion.div>
  );
}

export function HeroReveal({ children, className = "" }: { children: ReactNode; className?: string }) {
  const reduced = useReducedMotion();
  return <motion.div className={className} variants={{ hidden: { opacity: 0, y: reduced ? 0 : 12 }, visible: { opacity: 1, y: 0, transition: { duration: reduced ? 0 : 0.5 } } }}>{children}</motion.div>;
}
