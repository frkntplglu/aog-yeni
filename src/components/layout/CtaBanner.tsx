import { MagneticButton } from "@/components/ui/MagneticButton";
import { RevealText } from "@/components/ui/RevealText";
import { Marquee } from "@/components/ui/Marquee";
import { contact } from "@/data/site";

export function CtaBanner() {
  return (
    <section className="relative overflow-hidden bg-volt text-ink">
      <Marquee
        items={["NO EXCUSES", "JUST RESULTS", "CLEAN EAT", "STAY FIT"]}
        className="border-b-2 border-ink py-3 font-display text-3xl font-black italic"
        duration={25}
      />
      <div className="mx-auto max-w-[1500px] px-5 py-24 md:px-10 md:py-32">
        <RevealText
          text="Bahane yok. Sadece sonuç."
          className="font-display text-[clamp(3.5rem,11vw,11rem)] font-black italic"
        />
        <div className="mt-12 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <p className="max-w-lg text-xl font-medium">
            Hedefini söyle, planını birlikte kuralım. Antrenman, beslenme ve
            supplement — hepsi sana özel.
          </p>
          <div className="flex flex-wrap gap-4">
            <MagneticButton href="/egitimler" variant="navy">
              Programını Seç
            </MagneticButton>
            <MagneticButton href={contact.whatsapp} external variant="navy" className="!bg-ink">
              WhatsApp
            </MagneticButton>
          </div>
        </div>
      </div>
    </section>
  );
}
