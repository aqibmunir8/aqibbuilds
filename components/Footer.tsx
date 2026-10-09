"use client";

import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <footer className="bg-[#fffefc] text-[#0a0a0a] pt-36 pb-12 relative z-[1]">
        <div className="wrap">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 flex-wrap">
            <Link
              href="#top"
              className="flex items-center gap-2.5 font-semibold text-lg tracking-tight text-[#0a0a0a]"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-[#0a0a0a]" />
              AqibBuilds
            </Link>

            <div className="text-[13.5px] text-[#0a0a0a]/60 flex items-center gap-4 sm:gap-5 flex-wrap">
              <span>® {currentYear} AqibBuilds</span>
              <span className="text-[#c9930a]">✦</span>
              <Link href="#top" className="hover:text-[#0a0a0a] transition-colors">
                Terms & Conditions
              </Link>
              <span className="text-[#c9930a]">✦</span>
              <Link href="#top" className="hover:text-[#0a0a0a] transition-colors">
                Privacy Policy
              </Link>
            </div>
          </div>

          {/* Giant Editorial Watermark */}
          <div className="serif text-center text-[#0a0a0a] text-[clamp(64px,13.5vw,180px)] leading-none mt-11 tracking-[-0.01em] select-none pointer-events-none">
            AqibBuilds
          </div>
        </div>
      </footer>

      {/* Rotating Orb: Talk To Us */}
      <a
        href="#contact"
        aria-label="Talk to us"
        className="orb fixed right-6 bottom-6 sm:right-7 sm:bottom-7 w-24 h-24 sm:w-28 sm:h-28 rounded-full z-50 bg-[#fff] mix-blend-difference flex items-center justify-center transition-transform duration-250 ease-out hover:scale-110 hover:rotate-6 group"
      >
        <div className="absolute inset-1.5 spin-badge pointer-events-none">
          <svg viewBox="0 0 120 120" className="w-full h-full overflow-visible">
            <defs>
              <path
                id="footerCirc"
                d="M60,60 m-45,0 a45,45 0 1,1 90,0 a45,45 0 1,1 -90,0"
              />
            </defs>
            <text className="text-[11.5px] font-bold tracking-[2.5px] fill-[#000] uppercase font-sans">
              <textPath href="#footerCirc">TALK TO US ✦ TALK TO US ✦ </textPath>
            </text>
          </svg>
        </div>
        <span className="text-2xl sm:text-3xl text-[#000] font-normal group-hover:scale-110 transition-transform">
          ↗
        </span>
      </a>
    </>
  );
}
