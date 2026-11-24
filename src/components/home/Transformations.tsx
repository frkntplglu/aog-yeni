"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import { transformations } from "@/data/site";

export function Transformations() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-62%"]);

  return (
    <section ref={ref} className="relative h-[300vh] bg-bone text-ink">
      <div className="sticky top-0 flex h-[100svh] flex-col justify-center overflow-hidden">
        <div className="mx-auto mb-10 flex w-full max-w-[1500px] items-end justify-between gap-6 px-5 md:px-10">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <span className="h-[3px] w-10 bg-navy" />
              <span className="font-display text-lg font-semibold tracking-[0.2em] text-navy">
                ÖĞRENCİ DEĞİŞİMLERİ
              </span>
            </div>
            <h2 className="font-display text-[clamp(3rem,8vw,7.5rem)] font-black italic">
              Sonuçlar konuşur
            </h2>
          </div>
          <Link
            href="/donusumler"
            className="group hidden items-center gap-3 font-display text-2xl font-bold md:inline-flex"
          >
            <span className="border-b-2 border-navy">Tümünü İncele</span>
            <ArrowRight className="size-6 transition-transform group-hover:translate-x-2" />
          </Link>
        </div>

        <motion.div style={{ x }} className="flex gap-6 pl-5 md:pl-10">
          {transformations.map((t, i) => (
            <Link
              key={t.id}
              href="/donusumler"
              className="group relative aspect-square w-[78vw] shrink-0 overflow-hidden sm:w-[45vw] lg:w-[32vw]"
            >
              <Image
                src={t.src}
                alt={t.alt}
                fill
                sizes="(min-width: 1024px) 32vw, (min-width: 640px) 45vw, 78vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <span className="absolute left-4 top-4 bg-ink px-3 py-1 font-display text-xl font-black italic text-volt">
                #{String(i + 1).padStart(2, "0")}
              </span>
            </Link>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
