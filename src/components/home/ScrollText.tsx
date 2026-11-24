"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export function ScrollText() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const x1 = useTransform(scrollYProgress, [0, 1], ["5%", "-45%"]);
  const x2 = useTransform(scrollYProgress, [0, 1], ["-45%", "5%"]);

  return (
    <div ref={ref} className="overflow-hidden bg-ink py-16 md:py-24" aria-hidden>
      <motion.div
        style={{ x: x1 }}
        className="whitespace-nowrap font-display text-[16vw] font-black italic leading-[0.85] text-white"
      >
        CLEAN EAT <span className="text-volt">—</span> STAY FIT <span className="text-volt">—</span> CLEAN EAT
      </motion.div>
      <motion.div
        style={{ x: x2 }}
        className="text-stroke whitespace-nowrap font-display text-[16vw] font-black italic leading-[0.85] text-navy-400"
      >
        DİSİPLİN · GÜÇ · DEĞİŞİM · DİSİPLİN · GÜÇ
      </motion.div>
    </div>
  );
}
