import { Hero } from "@/components/home/Hero";
import { Services } from "@/components/home/Services";
import { ScrollText } from "@/components/home/ScrollText";
import { About } from "@/components/home/About";
import { FeaturedPrograms } from "@/components/home/FeaturedPrograms";
import { Transformations } from "@/components/home/Transformations";
import { CtaBanner } from "@/components/layout/CtaBanner";
import { Marquee } from "@/components/ui/Marquee";

export default function Home() {
  return (
    <>
      <Hero />
      <div className="relative z-10 -my-6 -rotate-2 scale-105 bg-volt py-4 text-ink shadow-2xl">
        <Marquee
          items={[
            "ANTRENMAN",
            "BESLENME",
            "KARDİYO",
            "SUPPLEMENT",
            "FORM KONTROLÜ",
            "NO EXCUSES",
          ]}
          className="font-display text-4xl font-black italic md:text-5xl"
        />
      </div>
      <Services />
      <ScrollText />
      <About />
      <FeaturedPrograms />
      <Transformations />
      <CtaBanner />
    </>
  );
}
