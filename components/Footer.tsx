"use client";

import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <footer className="bg-[#fffefc] text-[#0a0a0a] pt-28 pb-12 relative z-[1]">
        <div className="wrap">
          {/* Upper Nav Links Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pb-16 border-b border-black/10">
            <div>
              <h4 className="text-xs uppercase tracking-widest text-[#0a0a0a]/50 font-semibold mb-4">
                Services
              </h4>
              <ul className="space-y-2.5 text-sm font-medium">
                <li>
                  <Link href="/web-development" className="hover:text-[#c9930a] transition-colors">
                    Web Development
                  </Link>
                </li>
                <li>
                  <Link href="/automations" className="hover:text-[#c9930a] transition-colors">
                    Automations
                  </Link>
                </li>
                <li>
                  <Link href="/brand-design" className="hover:text-[#c9930a] transition-colors">
                    Brand Design
                  </Link>
                </li>
                <li>
                  <Link href="/ads" className="hover:text-[#c9930a] transition-colors">
                    Paid Ads & Growth
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-xs uppercase tracking-widest text-[#0a0a0a]/50 font-semibold mb-4">
                Showcase
              </h4>
              <ul className="space-y-2.5 text-sm font-medium">
                <li>
                  <Link href="/portfolio" className="hover:text-[#c9930a] transition-colors">
                    Master Portfolio Hub
                  </Link>
                </li>
                <li>
                  <Link href="/web-development#projects" className="hover:text-[#c9930a] transition-colors">
                    Featured Web Works
                  </Link>
                </li>
                <li>
                  <Link href="/automations#workflows" className="hover:text-[#c9930a] transition-colors">
                    Automation Systems
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-xs uppercase tracking-widest text-[#0a0a0a]/50 font-semibold mb-4">
                Studio
              </h4>
              <ul className="space-y-2.5 text-sm font-medium">
                <li>
                  <Link href="/#about" className="hover:text-[#c9930a] transition-colors">
                    Philosophy
                  </Link>
                </li>
                <li>
                  <Link href="/#process" className="hover:text-[#c9930a] transition-colors">
                    Working Process
                  </Link>
                </li>
                <li>
                  <Link href="/#contact" className="hover:text-[#c9930a] transition-colors">
                    Start a Project
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-xs uppercase tracking-widest text-[#0a0a0a]/50 font-semibold mb-4">
                Inquiries
              </h4>
              <p className="text-xs text-[#0a0a0a]/60 leading-relaxed mb-3">
                Direct booking for high-impact founders & ambitious brands.
              </p>
              <a
                href="mailto:hello@aqibbuilds.com"
                className="text-sm font-semibold text-[#0a0a0a] hover:text-[#c9930a] transition-colors block"
              >
                hello@aqibbuilds.com →
              </a>
            </div>
          </div>

          {/* Lower Row */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 flex-wrap pt-10">
            <Link
              href="/"
              className="flex items-center gap-2.5 font-semibold text-lg tracking-tight text-[#0a0a0a]"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-[var(--gold)] shadow-[0_0_8px_var(--gold)]" />
              AqibBuilds
            </Link>

            <div className="text-[13.5px] text-[#0a0a0a]/60 flex items-center gap-4 sm:gap-5 flex-wrap">
              <span>® {currentYear} AqibBuilds</span>
              <span className="text-[#c9930a]">✦</span>
              <Link href="/" className="hover:text-[#0a0a0a] transition-colors">
                Terms & Conditions
              </Link>
              <span className="text-[#c9930a]">✦</span>
              <Link href="/" className="hover:text-[#0a0a0a] transition-colors">
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
