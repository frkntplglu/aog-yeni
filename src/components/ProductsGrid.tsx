"use client";

import { AnimatePresence, LayoutGroup, motion } from "motion/react";
import { useMemo, useState } from "react";
import { products, type ProductGroup } from "@/data/site";
import { ProductCard } from "@/components/ui/ProductCard";

type Filter = "Tümü" | ProductGroup;
type Sort = "default" | "asc" | "desc";

const filters: { value: Filter; label: string }[] = [
  { value: "Tümü", label: "Tümü" },
  { value: "CLEAN EAT STAY FIT", label: "CLEAN EAT STAY FIT" },
  { value: "İleri Seviye", label: "İleri Seviye" },
  { value: "Yarışmacı", label: "Yarışmacı" },
  { value: "Tekil", label: "Tekil Programlar" },
];

const sorts: { value: Sort; label: string }[] = [
  { value: "default", label: "Varsayılan" },
  { value: "asc", label: "Fiyat ↑" },
  { value: "desc", label: "Fiyat ↓" },
];

export function ProductsGrid() {
  const [filter, setFilter] = useState<Filter>("Tümü");
  const [sort, setSort] = useState<Sort>("default");

  const list = useMemo(() => {
    const l = products.filter((p) => filter === "Tümü" || p.group === filter);
    if (sort === "asc") return [...l].sort((a, b) => a.price - b.price);
    if (sort === "desc") return [...l].sort((a, b) => b.price - a.price);
    return l;
  }, [filter, sort]);

  return (
    <LayoutGroup>
      <div className="flex flex-col justify-between gap-6 border-b border-white/10 pb-8 lg:flex-row lg:items-center">
        <div className="flex flex-wrap gap-2" role="tablist" aria-label="Kategori">
          {filters.map((f) => (
            <button
              key={f.value}
              role="tab"
              aria-selected={filter === f.value}
              onClick={() => setFilter(f.value)}
              className={`relative px-5 py-2.5 font-display text-lg font-bold tracking-wide transition-colors ${
                filter === f.value ? "text-ink" : "text-white/70 hover:text-white"
              }`}
            >
              {filter === f.value && (
                <motion.span
                  layoutId="filter-pill"
                  className="absolute inset-0 -skew-x-12 bg-volt"
                  transition={{ type: "spring", stiffness: 400, damping: 32 }}
                />
              )}
              <span className="relative">{f.label}</span>
            </button>
          ))}
        </div>
        <div className="flex items-center gap-4">
          <span className="text-sm text-mist">{list.length} program</span>
          <div className="flex border border-white/15">
            {sorts.map((s) => (
              <button
                key={s.value}
                onClick={() => setSort(s.value)}
                aria-pressed={sort === s.value}
                className={`px-4 py-2 font-display text-base font-semibold transition-colors ${
                  sort === s.value ? "bg-white text-ink" : "text-white/70 hover:text-white"
                }`}
              >
                {s.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <motion.div
        layout
        className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        style={{ perspective: 1200 }}
      >
        <AnimatePresence mode="popLayout">
          {list.map((p, i) => (
            <ProductCard key={p.slug} product={p} index={i} layout />
          ))}
        </AnimatePresence>
      </motion.div>
    </LayoutGroup>
  );
}
