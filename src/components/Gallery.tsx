"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { useCallback, useEffect, useState, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";
import { ChevronLeft, ChevronRight, X, Maximize2 } from "lucide-react";
import { transformations } from "@/data/site";

export function Gallery() {
  const [active, setActive] = useState<number | null>(null);
  const mounted = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false,
  );

  const go = useCallback(
    (dir: 1 | -1) =>
      setActive((a) =>
        a === null ? a : (a + dir + transformations.length) % transformations.length,
      ),
    [],
  );

  useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActive(null);
      if (e.key === "ArrowRight") go(1);
      if (e.key === "ArrowLeft") go(-1);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [active, go]);

  const current = active === null ? null : transformations[active];

  return (
    <>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {transformations.map((t, i) => (
          <motion.button
            key={t.id}
            type="button"
            onClick={() => setActive(i)}
            initial={{ opacity: 0, y: 60, rotate: i % 2 ? 2 : -2 }}
            whileInView={{ opacity: 1, y: 0, rotate: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, delay: (i % 3) * 0.1, ease: [0.16, 1, 0.3, 1] }}
            className={`group relative aspect-square overflow-hidden bg-ink-2 text-left ${
              i % 3 === 1 ? "lg:translate-y-16" : ""
            }`}
            aria-label={`${t.alt} — büyüt`}
          >
            <Image
              src={t.src}
              alt={t.alt}
              fill
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-navy/0 transition-colors duration-500 group-hover:bg-navy/40" />
            <span className="absolute left-4 top-4 bg-volt px-3 py-1 font-display text-xl font-black italic text-ink">
              #{String(i + 1).padStart(2, "0")}
            </span>
            <span className="absolute bottom-4 right-4 grid size-12 translate-y-4 place-items-center bg-white text-ink opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
              <Maximize2 className="size-5" />
            </span>
          </motion.button>
        ))}
      </div>

      {mounted &&
        createPortal(
          <AnimatePresence>
            {current && active !== null && (
              <motion.div
                key="lightbox"
                role="dialog"
                aria-modal="true"
                aria-label={current.alt}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-[70] flex items-center justify-center bg-ink/95 p-4 backdrop-blur-md"
                onClick={() => setActive(null)}
              >
                <button
                  type="button"
                  onClick={() => setActive(null)}
                  aria-label="Kapat"
                  className="absolute right-4 top-4 grid size-12 place-items-center bg-volt text-ink"
                >
                  <X />
                </button>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    go(-1);
                  }}
                  aria-label="Önceki"
                  className="absolute left-4 grid size-12 place-items-center border border-white/30 text-white hover:bg-white hover:text-ink"
                >
                  <ChevronLeft />
                </button>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    go(1);
                  }}
                  aria-label="Sonraki"
                  className="absolute right-4 grid size-12 place-items-center border border-white/30 text-white hover:bg-white hover:text-ink"
                >
                  <ChevronRight />
                </button>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={current.id}
                    initial={{ opacity: 0, scale: 0.9, x: 40 }}
                    animate={{ opacity: 1, scale: 1, x: 0 }}
                    exit={{ opacity: 0, scale: 0.95, x: -40 }}
                    transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    className="relative aspect-square w-full max-w-[min(85vh,750px)]"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Image src={current.src} alt={current.alt} fill sizes="750px" className="object-contain" />
                  </motion.div>
                </AnimatePresence>
                <div className="absolute bottom-6 font-display text-xl text-white/70">
                  {active + 1} / {transformations.length}
                </div>
              </motion.div>
            )}
          </AnimatePresence>,
          document.body,
        )}
    </>
  );
}
