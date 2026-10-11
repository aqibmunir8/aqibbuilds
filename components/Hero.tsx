"use client";

import Link from "next/link";

export default function Hero() {
  const line1 = "We design & build";
  const line2 = "extraordinary digital experiences";

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-28 pb-20 overflow-hidden" id="top">
      {/* Decorative Shards */}
      <div
        className="absolute top-[22%] left-[10%] w-24 h-48 bg-gradient-to-br from-white/10 to-transparent border border-white/10 rounded-2xl backdrop-blur-md pointer-events-none hidden lg:block"
        style={{ animation: "floatA 9s ease-in-out infinite" }}
        aria-hidden="true"
      />
      <div
        className="absolute bottom-[20%] right-[12%] w-32 h-56 bg-gradient-to-tr from-[var(--gold)]/10 to-transparent border border-[var(--gold)]/20 rounded-2xl backdrop-blur-md pointer-events-none hidden lg:block"
        style={{ animation: "floatB 11s ease-in-out infinite" }}
        aria-hidden="true"
      />

      <div className="wrap relative z-10 flex flex-col items-center text-center">
        {/* Kicker */}
        <div className="sec-kicker sec-kicker-dot">
          AQIBBUILDS LABS · DIGITAL STUDIO
        </div>

        {/* Hero Title with letter stagger */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight max-w-6xl my-6 font-normal leading-[1.08]">
          <span className="block">
            {line1.split("").map((char, i) => (
              <span
                key={i}
                className="char-rise"
                style={{ animationDelay: `${0.1 + i * 0.025}s` }}
              >
                {char === " " ? " " : char}
              </span>
            ))}
          </span>
          <span className="serif text-[var(--gold)] block mt-2 text-2xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight whitespace-nowrap">
            {line2.split("").map((char, i) => (
              <span
                key={i}
                className="char-rise"
                style={{ animationDelay: `${0.6 + i * 0.02}s` }}
              >
                {char === " " ? " " : char}
              </span>
            ))}
          </span>
        </h1>

        {/* Subtitle */}
        <p className="max-w-2xl text-base sm:text-lg text-[var(--muted)] font-normal leading-relaxed mb-10">
          A bespoke digital studio designing high-converting websites, web apps, and modern automated systems for ambitious brands.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link href="#services" className="btn">
            Explore our craft →
          </Link>
          <Link href="#contact" className="btn-ghost">
            Let&apos;s talk
          </Link>
        </div>
      </div>

      {/* Rotating SVG Badge */}
      <div className="absolute bottom-6 right-8 hidden sm:block pointer-events-none" aria-hidden="true">
        <div className="relative w-28 h-28 flex items-center justify-center spin-badge">
          <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible">
            <path
              id="circlePath"
              d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
              fill="none"
            />
            <text className="text-[10.5px] fill-[var(--muted)] uppercase tracking-[0.22em] font-medium">
              <textPath href="#circlePath" startOffset="0%">
                AVAILABLE FOR NEW PROJECTS ✦ 2026 ✦
              </textPath>
            </text>
          </svg>
          <span className="absolute text-sm text-[var(--gold)]">✦</span>
        </div>
      </div>
    </section>
  );
}
