import type { Metadata } from "next";
import { Barlow, Barlow_Condensed } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

const barlowCondensed = Barlow_Condensed({
  variable: "--font-barlow-condensed",
  subsets: ["latin", "latin-ext"],
  weight: ["500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});

const barlow = Barlow({
  variable: "--font-barlow",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://cleaneatstayfit.com"),
  title: {
    default: "Ali Osman Gürsoy – Clean Eat Stay Fit",
    template: "%s – Ali Osman Gürsoy",
  },
  description:
    "Ali Osman Gürsoy ile kişiye özel antrenman, beslenme, kardiyo ve supplement planlaması. Değişim sende başlar.",
  openGraph: {
    title: "Ali Osman Gürsoy – Clean Eat Stay Fit",
    description: "Kişiye özel online fitness koçluğu ve vücut geliştirme programları.",
    images: ["/images/products/12-hafta-cleaneatstayfit-program.jpg"],
    locale: "tr_TR",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="tr" className={`${barlowCondensed.variable} ${barlow.variable}`}>
      <body className="min-h-dvh bg-ink text-bone">
        <a
          href="#main"
          className="sr-only z-[100] bg-volt px-4 py-2 text-ink focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
        >
          İçeriğe geç
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
