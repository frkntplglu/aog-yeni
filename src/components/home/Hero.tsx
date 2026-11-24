"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { ChevronDown } from "lucide-react";
import { RevealText } from "@/components/ui/RevealText";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { hero } from "@/data/site";

const ease = [0.16, 1, 0.3, 1] as const;

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const portraitY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const bgX = useTransform(scrollYProgress, [0, 1], ["0%", "-25%"]);
  const fade = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      ref={ref}
      className="grain relative flex min-h-[100svh] items-end overflow-hidden bg-ink pt-28"
    >
      <div className="bg-grid absolute inset-0" aria-hidden />
      <div
        aria-hidden
        className="absolute -right-[20%] top-[10%] size-[80vw] max-w-[1100px] rounded-full bg-navy/70 blur-[140px]"
      />

      {/* giant outlined background word */}
      <motion.div
        aria-hidden
        style={{ x: bgX }}
        className="text-stroke pointer-events-none absolute left-0 top-[14%] select-none whitespace-nowrap font-display text-[34vw] font-black italic leading-none text-white/[0.07]"
      >
        NO LIMITS NO LIMITS
      </motion.div>

      {/* slanted volt block behind portrait */}
      <div
        aria-hidden
        className="absolute bottom-0 right-[6%] hidden h-[78%] w-[34%] -skew-x-12 md:block lg:right-[10%] lg:w-[26%]"
      >
        <motion.div
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 1, delay: 0.5, ease }}
          className="size-full origin-bottom bg-volt"
        />
      </div>
      <div
        aria-hidden
        className="absolute bottom-0 right-[2%] hidden h-[60%] w-[8%] -skew-x-12 md:block lg:right-[7%] lg:w-[4%]"
      >
        <motion.div
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 1, delay: 0.65, ease }}
          className="size-full origin-bottom bg-navy"
        />
      </div>

      <motion.div
        style={{ y: portraitY }}
        initial={{ opacity: 0, scale: 1.15 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, delay: 0.7, ease }}
        className="pointer-events-none absolute bottom-0 right-1/2 z-10 origin-bottom translate-x-1/2 md:right-[8%] md:translate-x-0 lg:right-[12%]"
      >
        <Image
          src="/images/aog-hero.png"
          alt="Ali Osman Gürsoy"
          width={360}
          height={750}
          preload
          sizes="(min-width: 768px) 400px, 70vw"
          className="h-[62svh] w-auto max-w-none opacity-40 drop-shadow-[0_30px_60px_rgba(0,0,0,0.6)] md:h-[86svh] md:max-h-[820px] md:opacity-100"
        />
      </motion.div>

      <motion.div
        style={{ y: textY, opacity: fade }}
        className="relative z-20 mx-auto w-full max-w-[1500px] px-5 pb-16 md:px-10 md:pb-24"
      >
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease }}
          className="mb-6 flex items-center gap-3"
        >
          <span className="h-[3px] w-12 bg-volt" />
          <span className="font-display text-lg font-semibold tracking-[0.25em] text-volt">
            ONLINE FITNESS KOÇU · CLEAN EAT STAY FIT
          </span>
        </motion.div>

        <h1 className="font-display font-black italic text-white">
          <RevealText
            as="span"
            immediate
            delay={0.5}
            text="Ali Osman"
            className="block text-[clamp(4.5rem,15vw,15rem)]"
          />
          <RevealText
            as="span"
            immediate
            delay={0.7}
            text="Gürsoy"
            className="text-stroke-volt block text-[clamp(4.5rem,15vw,15rem)]"
          />
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1, ease }}
          className="mt-8 max-w-md text-xl font-medium text-white/80 md:text-2xl"
        >
          {hero.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.3, ease }}
          className="mt-10 flex flex-wrap gap-4"
        >
          <MagneticButton href="/egitimler">Eğitimleri İncele</MagneticButton>
          <MagneticButton href="/#hakkimda" variant="outline" icon={false}>
            Hakkımda
          </MagneticButton>
        </motion.div>
      </motion.div>

      <motion.a
        href="#hizmetler"
        aria-label="Aşağı kaydır"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.8 }}
        className="absolute bottom-6 left-1/2 z-20 hidden -translate-x-1/2 text-white/60 md:block"
      >
        <ChevronDown className="size-8" />
      </motion.a>
    </section>
  );
}
