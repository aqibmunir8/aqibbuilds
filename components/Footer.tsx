"use client";

import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="pt-20 pb-12 border-t border-[var(--line)] relative bg-[#080808] overflow-hidden">
      <div className="wrap flex flex-col justify-between">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-16">
          <Link
            href="#top"
            className="flex items-center gap-2.5 font-semibold text-lg tracking-tight text-[var(--ink)]"
          >
            <span className="w-2 h-2 rounded-full bg-[var(--gold)] shadow-[0_0_8px_var(--gold)]" />
            AqibBuilds
          </Link>

          <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-xs text-[var(--muted)]">
            <span>® {currentYear} AqibBuilds</span>
            <span className="text-[var(--gold)]">✦</span>
            <Link href="#top" className="hover:text-[var(--ink)] transition-colors">
              Terms & Conditions
            </Link>
            <span className="text-[var(--gold)]">✦</span>
            <Link href="#top" className="hover:text-[var(--ink)] transition-colors">
              Privacy Policy
            </Link>
          </div>
        </div>

        {/* Large Watermark Brand */}
        <div className="select-none text-center font-bold tracking-tighter text-[15vw] leading-none text-white/[0.03] uppercase pointer-events-none -mb-8">
          AqibBuilds
        </div>
      </div>

      {/* Floating Orb: Talk To Us */}
      <a
        href="#contact"
        aria-label="Talk to us"
        className="fixed bottom-6 right-6 z-40 w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[var(--panel)] border border-[var(--line)] shadow-2xl flex items-center justify-center group hover:border-[var(--gold)] transition-colors"
      >
        <div className="absolute inset-0 flex items-center justify-center spin-badge pointer-events-none">
          <svg viewBox="0 0 120 120" className="w-full h-full p-1 overflow-visible">
            <path
              id="footerCirc"
              d="M60,60 m-45,0 a45,45 0 1,1 90,0 a45,45 0 1,1 -90,0"
              fill="none"
            />
            <text className="text-[9.5px] fill-[var(--muted)] uppercase tracking-[0.2em] font-medium group-hover:fill-[var(--gold)] transition-colors">
              <textPath href="#footerCirc">TALK TO US ✦ TALK TO US ✦ </textPath>
            </text>
          </svg>
        </div>
        <span className="text-base text-[var(--gold)] group-hover:scale-125 transition-transform">
          ↗
        </span>
      </a>
    </footer>
  );
}
