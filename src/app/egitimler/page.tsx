import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { ProductsGrid } from "@/components/ProductsGrid";
import { CtaBanner } from "@/components/layout/CtaBanner";

export const metadata: Metadata = {
  title: "Eğitimler",
  description:
    "CLEAN EAT STAY FIT programları, ileri seviye kür destekli programlar, yarışmacı paketleri ve tekil antrenman/beslenme programları.",
};

export default function EgitimlerPage() {
  return (
    <>
      <PageHero
        eyebrow="EĞİTİM PAKETLERİ"
        title="Eğitimler"
        subtitle="Başlangıçtan sahneye: hedefine uygun programı seç, planını hemen al."
      />
      <section className="bg-ink py-20 md:py-28">
        <div className="mx-auto max-w-[1500px] px-5 md:px-10">
          <ProductsGrid />
        </div>
      </section>
      <CtaBanner />
    </>
  );
}
