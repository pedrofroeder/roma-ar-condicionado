"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { useIsMobile } from "@/lib/useIsMobile";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  /** Skip scroll-triggering and animate in on mount. Use for above-the-fold content. */
  immediate?: boolean;
};

export default function Reveal({ children, className, delay = 0, y = 20, immediate = false }: RevealProps) {
  const isMobile = useIsMobile();
  const skipScrollAnimation = immediate || isMobile;

  const trigger = skipScrollAnimation
    ? { animate: { opacity: 1, y: 0 } }
    : { whileInView: { opacity: 1, y: 0 }, viewport: { once: true, margin: "-80px" } };

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      {...trigger}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
