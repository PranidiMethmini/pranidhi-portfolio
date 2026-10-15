"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";

export function ScrollReveal({ children, className, hover = false, delay = 0 }: {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  delay?: number;
}) {
  const reduced = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: reduced ? 0 : 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      whileHover={hover && !reduced ? { y: -3 } : undefined}
      transition={{ duration: reduced ? 0 : 0.4, delay: reduced ? 0 : delay }}
    >
      {children}
    </motion.div>
  );
}
