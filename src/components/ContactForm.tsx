"use client";

import { AnimatePresence, motion } from "motion/react";
import { useState, type FormEvent } from "react";
import { Send, CheckCircle2 } from "lucide-react";
import { contact } from "@/data/site";

type Errors = Partial<Record<"name" | "phone" | "message", string>>;

const field =
  "peer w-full border-0 border-b-2 border-white/20 bg-transparent px-0 pb-3 pt-6 text-lg text-white placeholder-transparent outline-none transition-colors focus:border-volt";
const label =
  "pointer-events-none absolute left-0 top-1 font-display text-sm font-semibold tracking-[0.15em] text-mist transition-all peer-placeholder-shown:top-6 peer-placeholder-shown:text-lg peer-focus:top-1 peer-focus:text-sm peer-focus:text-volt";

export function ContactForm() {
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const phone = String(data.get("phone") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    const next: Errors = {};
    if (name.length < 2) next.name = "Adını yaz.";
    if (phone.replace(/\D/g, "").length < 10) next.phone = "Geçerli bir telefon numarası gir.";
    if (message.length < 5) next.message = "Mesajını yaz.";
    setErrors(next);
    if (Object.keys(next).length) return;

    const text = [
      `Merhaba, ben ${name}.`,
      message,
      `Telefon: ${phone}`,
      email && `E-posta: ${email}`,
    ]
      .filter(Boolean)
      .join("\n");
    window.open(`${contact.whatsapp}?text=${encodeURIComponent(text)}`, "_blank", "noopener");
    setSent(true);
    e.currentTarget.reset();
  };

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-8">
      <div className="grid gap-8 md:grid-cols-2">
        <div className="relative">
          <input id="name" name="name" placeholder="Ad Soyad" className={field} autoComplete="name" />
          <label htmlFor="name" className={label}>AD SOYAD *</label>
          {errors.name && <p className="mt-2 text-sm text-red-400">{errors.name}</p>}
        </div>
        <div className="relative">
          <input id="phone" name="phone" type="tel" placeholder="Telefon" className={field} autoComplete="tel" />
          <label htmlFor="phone" className={label}>TELEFON *</label>
          {errors.phone && <p className="mt-2 text-sm text-red-400">{errors.phone}</p>}
        </div>
      </div>
      <div className="relative">
        <input id="email" name="email" type="email" placeholder="E-posta" className={field} autoComplete="email" />
        <label htmlFor="email" className={label}>E-POSTA</label>
      </div>
      <div className="relative">
        <textarea id="message" name="message" rows={4} placeholder="Mesaj" className={`${field} resize-none`} />
        <label htmlFor="message" className={label}>MESAJIN *</label>
        {errors.message && <p className="mt-2 text-sm text-red-400">{errors.message}</p>}
      </div>

      <div className="flex flex-wrap items-center gap-6">
        <motion.button
          type="submit"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.96 }}
          className="group inline-flex -skew-x-6 items-center gap-3 bg-volt px-8 py-4 font-display text-xl font-bold text-ink"
        >
          <span className="inline-flex skew-x-6 items-center gap-3">
            WhatsApp ile Gönder
            <Send className="size-5 transition-transform group-hover:translate-x-1" />
          </span>
        </motion.button>
        <AnimatePresence>
          {sent && (
            <motion.p
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0 }}
              className="flex items-center gap-2 text-volt"
            >
              <CheckCircle2 className="size-5" /> Mesajın WhatsApp&apos;ta hazır, gönder yeter.
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    </form>
  );
}
