import { RevealText } from "./RevealText";
import { Reveal } from "./Reveal";

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  className = "",
  dark = true,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  className?: string;
  dark?: boolean;
}) {
  return (
    <div className={className}>
      <Reveal y={20} className="mb-5 flex items-center gap-3">
        <span className="h-[3px] w-10 bg-volt" />
        <span
          className={`font-display text-lg font-semibold tracking-[0.2em] ${dark ? "text-volt" : "text-navy"}`}
        >
          {eyebrow}
        </span>
      </Reveal>
      <RevealText
        text={title}
        className={`font-display text-[clamp(3rem,8vw,7.5rem)] font-black italic ${dark ? "text-white" : "text-ink"}`}
      />
      {subtitle && (
        <Reveal delay={0.2} className="mt-6 max-w-xl">
          <p className={`text-lg ${dark ? "text-mist" : "text-ink/70"}`}>{subtitle}</p>
        </Reveal>
      )}
    </div>
  );
}
