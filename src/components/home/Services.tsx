import { Dumbbell, Salad, HeartPulse, Pill, ScanEye, MessageCircle } from "lucide-react";
import { services, type ServiceIcon } from "@/data/site";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

const icons: Record<ServiceIcon, typeof Dumbbell> = {
  dumbbell: Dumbbell,
  salad: Salad,
  heart: HeartPulse,
  pill: Pill,
  scan: ScanEye,
  message: MessageCircle,
};

export function Services() {
  return (
    <section id="hizmetler" className="relative scroll-mt-20 bg-bone py-24 text-ink md:py-36">
      <div className="mx-auto max-w-[1500px] px-5 md:px-10">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <SectionHeading
            dark={false}
            eyebrow="CLEAN EAT STAY FIT"
            title="Seni forma sokan sistem"
          />
          <Reveal delay={0.2} className="max-w-sm md:pb-4">
            <p className="text-lg text-ink/70">
              Vücut geliştirme eğitimlerinin avantajlarını keşfet. Altı ayak, tek
              hedef: en iyi formun.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid border-l-2 border-t-2 border-ink sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => {
            const Icon = icons[s.icon];
            return (
              <Reveal
                key={s.title}
                delay={(i % 3) * 0.1}
                className="group relative overflow-hidden border-b-2 border-r-2 border-ink"
              >
                <span
                  aria-hidden
                  className="absolute inset-0 origin-bottom scale-y-0 bg-navy transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-y-100"
                />
                <div className="relative flex min-h-[300px] flex-col p-8 transition-colors duration-500 group-hover:text-white">
                  <div className="flex items-start justify-between">
                    <span className="font-display text-7xl font-black italic text-ink/10 transition-colors duration-500 group-hover:text-volt">
                      0{i + 1}
                    </span>
                    <span className="grid size-14 place-items-center bg-ink text-volt transition-all duration-500 group-hover:rotate-[-12deg] group-hover:bg-volt group-hover:text-ink">
                      <Icon className="size-7" strokeWidth={2} />
                    </span>
                  </div>
                  <h3 className="mt-auto font-display text-4xl font-extrabold italic">
                    {s.title}
                  </h3>
                  <p className="mt-3 text-ink/70 transition-colors duration-500 group-hover:text-white/75">
                    {s.text}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
