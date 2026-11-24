import type { Metadata } from "next";
import { Phone, MapPin, MessageCircle } from "lucide-react";
import { InstagramIcon as Instagram, YoutubeIcon as Youtube } from "@/components/ui/BrandIcons";
import { PageHero } from "@/components/layout/PageHero";
import { ContactForm } from "@/components/ContactForm";
import { Reveal } from "@/components/ui/Reveal";
import { contact } from "@/data/site";

export const metadata: Metadata = {
  title: "İletişim",
  description: "Ali Osman Gürsoy ile iletişime geç: telefon, WhatsApp, Instagram ve adres bilgileri.",
};

const cards = [
  { icon: Phone, label: "TELEFON", value: contact.phone, href: contact.phoneHref },
  { icon: MessageCircle, label: "WHATSAPP", value: "Birebir yaz", href: contact.whatsapp, external: true },
  { icon: Instagram, label: "INSTAGRAM", value: contact.instagramHandle, href: contact.instagram, external: true },
  { icon: Youtube, label: "YOUTUBE", value: "Ali Osman Gürsoy", href: contact.youtube, external: true },
];

export default function IletisimPage() {
  return (
    <>
      <PageHero
        eyebrow="BİZE ULAŞIN"
        title="İletişim"
        subtitle="Aklına takılan her şeyi sorabilirsin. Yardımcı olmaktan memnuniyet duyarız."
      />
      <section className="bg-ink py-20 md:py-28">
        <div className="mx-auto grid max-w-[1500px] gap-16 px-5 md:px-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="grid gap-px bg-white/10 sm:grid-cols-2 lg:grid-cols-1">
              {cards.map((c, i) => (
                <Reveal key={c.label} delay={i * 0.07}>
                  <a
                    href={c.href}
                    {...(c.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    className="group flex items-center gap-5 bg-ink p-6 transition-colors hover:bg-navy"
                  >
                    <span className="grid size-14 shrink-0 place-items-center bg-volt text-ink transition-transform group-hover:-rotate-12">
                      <c.icon className="size-6" />
                    </span>
                    <span>
                      <span className="block font-display text-sm font-semibold tracking-[0.2em] text-mist">
                        {c.label}
                      </span>
                      <span className="block font-display text-2xl font-bold text-white">{c.value}</span>
                    </span>
                  </a>
                </Reveal>
              ))}
            </div>
            <Reveal delay={0.3} className="mt-8 flex gap-4 text-white/80">
              <MapPin className="mt-1 size-5 shrink-0 text-volt" />
              <span>{contact.address}</span>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <Reveal>
              <h2 className="font-display text-[clamp(2.75rem,6vw,5rem)] font-black italic text-white">
                Hedefini yaz, <span className="text-volt">başlayalım.</span>
              </h2>
            </Reveal>
            <div className="mt-10">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
      <section className="relative h-[420px] bg-navy">
        <iframe
          title="Konum — Fethiye"
          src={`https://www.google.com/maps?q=${encodeURIComponent(contact.mapsQuery)}&output=embed`}
          className="size-full md:grayscale md:invert-[0.9] md:hue-rotate-180"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>
    </>
  );
}
