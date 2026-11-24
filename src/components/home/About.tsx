"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { about } from "@/data/site";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Counter } from "@/components/ui/Counter";
import { useLiteMotion } from "@/hooks/useLiteMotion";

export function About() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  const lite = useLiteMotion();

  return (
    <section
      id="hakkimda"
      ref={ref}
      className="grain relative scroll-mt-20 overflow-hidden bg-ink py-24 md:py-36"
    >
      <div className="mx-auto grid max-w-[1500px] gap-16 px-5 md:px-10 lg:grid-cols-12">
        <div className="relative lg:col-span-5">
          <motion.div
            initial={{ clipPath: "inset(100% 0% 0% 0%)" }}
            whileInView={{ clipPath: "inset(0% 0% 0% 0%)" }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
            className="relative aspect-[4/5] overflow-hidden"
          >
            <motion.div
              style={lite ? undefined : { y: imgY }}
              className="absolute -inset-[12%] will-change-transform"
            >
              <Image
                src="/images/about.jpg"
                alt="Ali Osman Gürsoy yarışma sahnesinde"
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover grayscale-[30%]"
              />
            </motion.div>
            <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-transparent mix-blend-multiply" />
          </motion.div>
          <Reveal delay={0.4} className="absolute -bottom-6 -right-2 md:-right-8">
            <div className="-skew-x-6 bg-volt px-6 py-4 text-ink">
              <div className="skew-x-6">
                <div className="font-display text-5xl font-black italic leading-none">2019</div>
                <div className="font-display text-lg font-bold">MİLLİ SPORCU · BAE</div>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="lg:col-span-7 lg:pl-8">
          <SectionHeading eyebrow="HAKKIMDA" title="Ben Kimim?" />
          <div className="mt-8 space-y-5 text-lg leading-relaxed text-white/75">
            {about.bio.map((p, i) => (
              <Reveal key={i} delay={0.1 * i}>
                <p>{p}</p>
              </Reveal>
            ))}
          </div>

          <div className="mt-14 grid grid-cols-2 gap-px bg-white/10 md:grid-cols-4">
            {about.stats.map((s) => (
              <div key={s.label} className="bg-ink p-5">
                <Counter
                  to={s.value}
                  suffix={s.suffix}
                  className="font-display text-6xl font-black italic text-volt"
                />
                <div className="mt-2 text-sm font-semibold uppercase tracking-wider text-mist">
                  {s.label}
                </div>
              </div>
            ))}
          </div>

          <ol className="mt-14 space-y-0">
            {about.timeline.map((t, i) => (
              <Reveal
                key={i}
                delay={i * 0.08}
                x={-30}
                y={0}
                className="group flex items-baseline gap-6 border-b border-white/10 py-4"
              >
                <span className="w-28 shrink-0 font-display text-3xl font-black italic text-white transition-colors group-hover:text-volt">
                  {t.year}
                </span>
                <span className="text-lg text-white/75">{t.text}</span>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
