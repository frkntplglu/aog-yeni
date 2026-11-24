"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "motion/react";
import { useEffect, useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { nav, contact } from "@/data/site";
import { Logo } from "@/components/ui/Logo";

export function Header() {
  const pathname = usePathname();
  const { scrollY, scrollYProgress } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (y) => {
    const prev = scrollY.getPrevious() ?? 0;
    setScrolled(y > 40);
    setHidden(y > prev && y > 400 && !open);
  });

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <>
      <motion.header
        animate={{ y: hidden ? "-110%" : "0%" }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
          scrolled ? "bg-ink/80 backdrop-blur-xl" : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-20 max-w-[1500px] items-center justify-between px-5 md:px-10">
          <Logo size={52} />

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Ana menü">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="relative px-4 py-2 font-display text-lg font-semibold tracking-wider text-white/80 transition-colors hover:text-white"
              >
                {isActive(item.href) && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 -skew-x-12 bg-navy"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <span className={`relative ${isActive(item.href) ? "text-white" : ""}`}>
                  {item.label}
                </span>
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="/iletisim"
              className="hidden -skew-x-6 bg-volt px-5 py-2.5 font-display text-lg font-bold tracking-wide text-ink transition-colors hover:bg-white sm:inline-flex"
            >
              <span className="inline-flex skew-x-6 items-center gap-2">
                İletişime Geç <ArrowUpRight className="size-4" strokeWidth={2.5} />
              </span>
            </Link>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-label={open ? "Menüyü kapat" : "Menüyü aç"}
              className="grid size-12 place-items-center border border-white/20 text-white lg:hidden"
            >
              {open ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        <motion.div
          className="h-[2px] origin-left bg-volt"
          style={{ scaleX: scrollYProgress }}
        />
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-menu"
            initial={{ clipPath: "circle(0% at calc(100% - 44px) 40px)" }}
            animate={{ clipPath: "circle(150% at calc(100% - 44px) 40px)" }}
            exit={{ clipPath: "circle(0% at calc(100% - 44px) 40px)" }}
            transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-40 flex flex-col justify-between bg-navy px-6 pb-10 pt-28 lg:hidden"
          >
            <nav className="flex flex-col" aria-label="Mobil menü">
              {nav.map((item, i) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: -60 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + i * 0.07, ease: [0.16, 1, 0.3, 1], duration: 0.6 }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={`flex items-baseline gap-4 border-b border-white/10 py-3 font-display text-6xl font-black italic ${
                      isActive(item.href) ? "text-volt" : "text-white"
                    }`}
                  >
                    <span className="text-base font-semibold not-italic text-white/40">
                      0{i + 1}
                    </span>
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="space-y-1 text-mist"
            >
              <a href={contact.phoneHref} className="block font-display text-2xl text-white">
                {contact.phone}
              </a>
              <a href={contact.instagram} target="_blank" rel="noopener noreferrer">
                Instagram {contact.instagramHandle}
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
