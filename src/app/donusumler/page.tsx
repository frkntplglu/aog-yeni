import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { Gallery } from "@/components/Gallery";
import { CtaBanner } from "@/components/layout/CtaBanner";

export const metadata: Metadata = {
  title: "Öğrenci Değişimleri",
  description: "Clean Eat Stay Fit öğrencilerinin önce/sonra dönüşümleri.",
};

export default function DonusumlerPage() {
  return (
    <>
      <PageHero
        eyebrow="ÖĞRENCİ DEĞİŞİMLERİ"
        title="Dönüşümler"
        subtitle="Disiplin, doğru plan ve birebir takip. Sonuçlar kendini anlatıyor."
      />
      <section className="bg-ink pb-36 pt-20 md:pt-28">
        <div className="mx-auto max-w-[1500px] px-5 md:px-10">
          <Gallery />
        </div>
      </section>
      <CtaBanner />
    </>
  );
}
