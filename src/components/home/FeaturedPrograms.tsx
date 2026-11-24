import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { products } from "@/data/site";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProductCard } from "@/components/ui/ProductCard";

export function FeaturedPrograms() {
  const featured = products.filter((p) => p.featured);
  return (
    <section className="grain relative overflow-hidden bg-navy py-24 md:py-36">
      <div className="bg-grid absolute inset-0 opacity-50" aria-hidden />
      <div className="relative mx-auto max-w-[1500px] px-5 md:px-10">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="EĞİTİMLER"
            title="Programını seç"
            subtitle="Eğitim paketlerimizi incele, hedefine uygun programla bugün başla."
          />
          <Link
            href="/egitimler"
            className="group inline-flex items-center gap-3 font-display text-2xl font-bold text-white md:pb-4"
          >
            <span className="border-b-2 border-volt">Tümünü Gör</span>
            <ArrowRight className="size-6 text-volt transition-transform group-hover:translate-x-2" />
          </Link>
        </div>
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4" style={{ perspective: 1200 }}>
          {featured.map((p, i) => (
            <ProductCard key={p.slug} product={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
