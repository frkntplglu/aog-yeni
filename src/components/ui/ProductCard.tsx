"use client";

import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import type { MouseEvent } from "react";
import { formatPrice, productUrl, type Product } from "@/data/site";

export function ProductCard({
  product,
  index = 0,
  layout = false,
}: {
  product: Product;
  index?: number;
  layout?: boolean;
}) {
  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);
  const rotateX = useSpring(useTransform(my, [0, 1], [8, -8]), { stiffness: 200, damping: 20 });
  const rotateY = useSpring(useTransform(mx, [0, 1], [-8, 8]), { stiffness: 200, damping: 20 });

  const onMove = (e: MouseEvent<HTMLElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width);
    my.set((e.clientY - r.top) / r.height);
  };
  const reset = () => {
    mx.set(0.5);
    my.set(0.5);
  };

  return (
    <motion.article
      layout={layout}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay: (index % 4) * 0.08, ease: [0.16, 1, 0.3, 1] }}
      style={{ rotateX, rotateY, transformPerspective: 1000 }}
      onMouseMove={onMove}
      onMouseLeave={reset}
      className="group relative flex flex-col overflow-hidden border border-white/10 bg-ink-2"
    >
      <a
        href={productUrl(product.slug)}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute inset-0 z-10"
        aria-label={`${product.title} — satın al`}
      />
      <div className="relative aspect-square overflow-hidden">
        <Image
          src={product.image}
          alt={product.title}
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-transparent opacity-80" />
        <span className="absolute left-4 top-4 -skew-x-12 bg-volt px-3 py-1 font-display text-base font-bold text-ink">
          <span className="inline-block skew-x-12">{product.duration}</span>
        </span>
        {product.oldPrice && (
          <span className="absolute right-4 top-4 -skew-x-12 bg-red-500 px-3 py-1 font-display text-base font-bold text-white">
            <span className="inline-block skew-x-12">İNDİRİM</span>
          </span>
        )}
      </div>
      <div className="flex flex-1 flex-col gap-4 p-5">
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-mist">
          {product.category}
        </span>
        <h3 className="font-display text-3xl font-extrabold italic leading-[0.95] text-white">
          {product.title}
        </h3>
        <div className="mt-auto flex items-end justify-between gap-3 border-t border-white/10 pt-4">
          <div>
            {product.oldPrice && (
              <div className="text-sm text-mist line-through">{formatPrice(product.oldPrice)}</div>
            )}
            <div className="font-display text-3xl font-black text-volt">
              {formatPrice(product.price)}
            </div>
          </div>
          <span className="grid size-12 place-items-center bg-white text-ink transition-all duration-300 group-hover:rotate-45 group-hover:bg-volt">
            <ArrowUpRight className="size-6" strokeWidth={2.5} />
          </span>
        </div>
      </div>
    </motion.article>
  );
}
