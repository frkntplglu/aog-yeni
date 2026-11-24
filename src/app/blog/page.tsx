import type { Metadata } from "next";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { posts } from "@/data/site";

export const metadata: Metadata = {
  title: "Blog",
  description: "Antrenman, beslenme ve supplement üzerine yazılar.",
};

export default function BlogPage() {
  const [lead, ...rest] = posts;
  return (
    <>
      <PageHero
        eyebrow="BLOG"
        title="Bilgi = Güç"
        subtitle="Antrenman, beslenme ve supplement üzerine pratik yazılar."
      />
      <section className="bg-ink py-20 md:py-28">
        <div className="mx-auto max-w-[1500px] space-y-6 px-5 md:px-10">
          <Reveal>
            <a
              href={lead.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group grid overflow-hidden border border-white/10 bg-ink-2 lg:grid-cols-2"
            >
              <div className="relative aspect-[16/10] overflow-hidden lg:aspect-auto">
                <Image
                  src={lead.image}
                  alt={lead.title}
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-col justify-between gap-10 p-8 md:p-12">
                <div className="flex items-center gap-3 text-sm uppercase tracking-[0.2em] text-mist">
                  <span className="bg-volt px-2 py-0.5 font-semibold text-ink">{lead.tag}</span>
                  {lead.date}
                </div>
                <h2 className="font-display text-[clamp(3rem,6vw,6rem)] font-black italic text-white transition-colors group-hover:text-volt">
                  {lead.title}
                </h2>
                <span className="inline-flex items-center gap-2 font-display text-xl font-bold text-volt">
                  Yazıyı Oku <ArrowUpRight className="size-5" />
                </span>
              </div>
            </a>
          </Reveal>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {rest.map((p, i) => (
              <Reveal key={p.url} delay={i * 0.08}>
                <a
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex h-full flex-col overflow-hidden border border-white/10 bg-ink-2"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={p.image}
                      alt={p.title}
                      fill
                      sizes="(min-width: 1280px) 25vw, (min-width: 768px) 50vw, 100vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  <div className="flex flex-1 flex-col gap-4 p-6">
                    <div className="flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-mist">
                      <span className="bg-white/10 px-2 py-0.5 font-semibold text-white">{p.tag}</span>
                      {p.date}
                    </div>
                    <h3 className="font-display text-3xl font-extrabold italic leading-[0.95] text-white transition-colors group-hover:text-volt">
                      {p.title}
                    </h3>
                    <ArrowUpRight className="mt-auto size-6 text-volt transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
