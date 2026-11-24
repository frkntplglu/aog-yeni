"use client";

import Link from "next/link";
import { motion, useMotionValue, useSpring } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import type { ReactNode, MouseEvent } from "react";

type Props = {
  href: string;
  children: ReactNode;
  variant?: "volt" | "outline" | "navy";
  external?: boolean;
  className?: string;
  icon?: boolean;
};

const styles = {
  volt: "bg-volt text-ink hover:bg-white",
  outline: "border-2 border-white/80 text-white hover:bg-white hover:text-ink",
  navy: "bg-navy text-white hover:bg-ink",
};

export function MagneticButton({
  href,
  children,
  variant = "volt",
  external,
  className = "",
  icon = true,
}: Props) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 250, damping: 15, mass: 0.3 });
  const sy = useSpring(y, { stiffness: 250, damping: 15, mass: 0.3 });

  const onMove = (e: MouseEvent<HTMLElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - r.left - r.width / 2) * 0.3);
    y.set((e.clientY - r.top - r.height / 2) * 0.4);
  };
  const reset = () => {
    x.set(0);
    y.set(0);
  };

  const cls = `group relative inline-flex items-center gap-3 px-7 py-4 font-display text-xl font-bold tracking-wide transition-colors duration-300 -skew-x-6 ${styles[variant]} ${className}`;
  const inner = (
    <span className="inline-flex skew-x-6 items-center gap-3">
      {children}
      {icon && (
        <ArrowUpRight
          className="size-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
          strokeWidth={2.5}
        />
      )}
    </span>
  );

  return (
    <motion.div
      style={{ x: sx, y: sy }}
      onMouseMove={onMove}
      onMouseLeave={reset}
      className="inline-block"
      whileTap={{ scale: 0.95 }}
    >
      {external ? (
        <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
          {inner}
        </a>
      ) : (
        <Link href={href} className={cls}>
          {inner}
        </Link>
      )}
    </motion.div>
  );
}
