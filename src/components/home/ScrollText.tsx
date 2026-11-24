"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { Marquee } from "@/components/ui/Marquee";

export function ScrollText() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const x1 = useTransform(scrollYProgress, [0, 1], ["5%", "-45%"]);
  const x2 = useTransform(scrollYProgress, [0, 1], ["-45%", "5%"]);

  return (
    <>
    {/* phones: cheap CSS marquee instead of scroll-linked transforms */}
    <div className="overflow-hidden bg-ink py-12 md:hidden" aria-hidden>
      <Marquee
        items={["CLEAN EAT", "STAY FIT"]}
        separator="—"
        duration={14}
        className="font-display text-[22vw] font-black italic leading-[0.85] text-white"
      />
      <Marquee
        items={["DİSİPLİN", "GÜÇ", "DEĞİŞİM"]}
        separator="·"
        reverse
        duration={14}
        className="font-display text-[22vw] font-black italic leading-[0.85] text-navy-400"
      />
    </div>
    <div ref={ref} className="hidden overflow-hidden bg-ink py-24 md:block" aria-hidden>
      <motion.div
        style={{ x: x1 }}
        className="whitespace-nowrap font-display text-[16vw] will-change-transform font-black italic leading-[0.85] text-white"
      >
        CLEAN EAT <span className="text-volt">—</span> STAY FIT <span className="text-volt">—</span> CLEAN EAT
      </motion.div>
      <motion.div
        style={{ x: x2 }}
        className="text-stroke whitespace-nowrap will-change-transform font-display text-[16vw] font-black italic leading-[0.85] text-navy-400"
      >
        DİSİPLİN · GÜÇ · DEĞİŞİM · DİSİPLİN · GÜÇ
      </motion.div>
    </div>
    </>
  );
}
