import Link from "next/link";
import { Phone, MapPin } from "lucide-react";
import { InstagramIcon as Instagram, YoutubeIcon as Youtube } from "@/components/ui/BrandIcons";
import { contact, nav } from "@/data/site";
import { Logo } from "@/components/ui/Logo";

export function Footer() {
  return (
    <footer className="grain relative overflow-hidden bg-ink pt-24 text-white">
      <div className="mx-auto max-w-[1500px] px-5 md:px-10">
        <div className="grid gap-12 border-b border-white/10 pb-16 md:grid-cols-12">
          <div className="md:col-span-5">
            <Logo size={80} />
            <p className="mt-6 max-w-sm text-mist">
              Clean Eat Stay Fit — antrenman, beslenme ve supplement planlamasıyla
              hedefine birebir koçlukla ulaş.
            </p>
            <div className="mt-8 flex gap-3">
              <a
                href={contact.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="grid size-12 place-items-center border border-white/20 transition-colors hover:border-volt hover:bg-volt hover:text-ink"
              >
                <Instagram className="size-5" />
              </a>
              <a
                href={contact.youtube}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="grid size-12 place-items-center border border-white/20 transition-colors hover:border-volt hover:bg-volt hover:text-ink"
              >
                <Youtube className="size-5" />
              </a>
            </div>
          </div>

          <div className="md:col-span-3">
            <h3 className="font-display text-2xl font-bold text-volt">Menü</h3>
            <ul className="mt-5 space-y-2">
              {nav.map((n) => (
                <li key={n.href}>
                  <Link
                    href={n.href}
                    className="font-display text-xl tracking-wide text-white/80 transition-colors hover:text-volt"
                  >
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <h3 className="font-display text-2xl font-bold text-volt">İletişim</h3>
            <ul className="mt-5 space-y-4 text-white/80">
              <li className="flex gap-3">
                <Phone className="mt-0.5 size-5 shrink-0 text-volt" />
                <a href={contact.phoneHref} className="hover:text-white">
                  {contact.phone}
                </a>
              </li>
              <li className="flex gap-3">
                <MapPin className="mt-0.5 size-5 shrink-0 text-volt" />
                <span>{contact.address}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div
        aria-hidden
        className="select-none whitespace-nowrap text-center font-display text-[17vw] font-black italic leading-[0.8] text-navy"
      >
        STAY FIT
      </div>

      <div className="mx-auto flex max-w-[1500px] flex-col justify-between gap-2 px-5 py-6 text-sm text-white/50 md:flex-row md:px-10">
        <span>Ali Osman Gürsoy © 2026</span>
        <span>Clean Eat Stay Fit</span>
      </div>
    </footer>
  );
}
