import { RevealText } from "@/components/ui/RevealText";
import { Reveal } from "@/components/ui/Reveal";

export function PageHero({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <section className="grain relative overflow-hidden bg-navy pb-20 pt-40 md:pb-28 md:pt-48">
      <div className="bg-grid absolute inset-0 opacity-60" aria-hidden />
      <div
        aria-hidden
        className="text-stroke pointer-events-none absolute -right-10 bottom-0 select-none font-display text-[28vw] font-black italic leading-[0.75] text-white/10"
      >
        AOG
      </div>
      <div className="relative mx-auto max-w-[1500px] px-5 md:px-10">
        <Reveal y={20} className="mb-6 flex items-center gap-3">
          <span className="h-[3px] w-10 bg-volt" />
          <span className="font-display text-lg font-semibold tracking-[0.2em] text-volt">
            {eyebrow}
          </span>
        </Reveal>
        <RevealText
          as="h1"
          immediate
          text={title}
          className="font-display text-[clamp(4rem,13vw,12rem)] font-black italic text-white"
        />
        {subtitle && (
          <Reveal delay={0.3} className="mt-8 max-w-xl">
            <p className="text-xl text-white/75">{subtitle}</p>
          </Reveal>
        )}
      </div>
    </section>
  );
}
