import Image from "next/image";
import Link from "next/link";

export function Logo({ className = "", size = 56 }: { className?: string; size?: number }) {
  return (
    <Link href="/" aria-label="Ali Osman Gürsoy — Anasayfa" className={`inline-flex ${className}`}>
      <Image
        src="/images/aog-logo.png"
        alt="AO Gürsoy logo"
        width={size}
        height={size}
        className="invert"
        loading="eager"
      />
    </Link>
  );
}
