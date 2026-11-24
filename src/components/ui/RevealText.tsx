"use client";

import { motion } from "motion/react";
import type { ElementType } from "react";

type Props = {
  text: string;
  as?: ElementType;
  className?: string;
  delay?: number;
  stagger?: number;
  /** animate immediately on mount instead of when scrolled into view */
  immediate?: boolean;
  wordClassName?: (word: string, index: number) => string | undefined;
};

export function RevealText({
  text,
  as: Tag = "h2",
  className,
  delay = 0,
  stagger = 0.06,
  immediate = false,
  wordClassName,
}: Props) {
  const words = text.split(" ");
  const animate = { y: "0%", rotate: 0 };
  return (
    <Tag className={className} aria-label={text}>
      {words.map((word, i) => (
        <span
          key={`${word}-${i}`}
          aria-hidden
          className="inline-block overflow-hidden pb-[0.08em] align-bottom"
        >
          <motion.span
            className={`inline-block ${wordClassName?.(word, i) ?? ""}`}
            initial={{ y: "110%", rotate: 6 }}
            {...(immediate
              ? { animate }
              : { whileInView: animate, viewport: { once: true, margin: "-60px" } })}
            transition={{
              duration: 0.9,
              delay: delay + i * stagger,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            {word}
            {i < words.length - 1 ? " " : ""}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}
