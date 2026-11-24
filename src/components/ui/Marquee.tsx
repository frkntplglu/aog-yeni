import type { CSSProperties } from "react";

type Props = {
  items: string[];
  className?: string;
  reverse?: boolean;
  duration?: number;
  separator?: string;
};

export function Marquee({
  items,
  className = "",
  reverse,
  duration = 30,
  separator = "✦",
}: Props) {
  const row = (hidden: boolean) => (
    <div className="flex shrink-0 items-center" aria-hidden={hidden || undefined}>
      {items.map((t, i) => (
        <span key={i} className="flex items-center">
          <span className="px-6">{t}</span>
          <span className="text-[0.5em]">{separator}</span>
        </span>
      ))}
    </div>
  );
  return (
    <div className={`flex overflow-hidden whitespace-nowrap ${className}`}>
      <div
        className={`flex w-max ${reverse ? "animate-marquee-reverse" : "animate-marquee"}`}
        style={{ "--marquee-duration": `${duration}s` } as CSSProperties}
      >
        {row(false)}
        {row(true)}
      </div>
    </div>
  );
}
