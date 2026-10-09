"use client";

import { useEffect, useRef } from "react";

export default function ParallaxStatement() {
  const sectionRef = useRef<HTMLElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;

    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(() => {
          ticking = false;
          if (!sectionRef.current || !bgRef.current || !innerRef.current) return;
          const r = sectionRef.current.getBoundingClientRect();
          const vh = window.innerHeight;
          if (r.bottom < 0 || r.top > vh) return;
          const d = vh / 2 - (r.top + r.height / 2);
          bgRef.current.style.transform = `translateY(${d * 0.18}px) scale(1.1)`;
          innerRef.current.style.transform = `translateY(${d * -0.06}px)`;
        });
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative my-20 py-32 overflow-hidden border-y border-[var(--line)]"
    >
      {/* Background with parallax translate */}
      <div
        ref={bgRef}
        className="absolute inset-0 bg-cover bg-center filter brightness-[0.22] contrast-125 transition-transform duration-100 ease-out pointer-events-none"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1800&q=80')",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#080808] via-transparent to-[#080808]" />

      <div ref={innerRef} className="wrap relative z-10 text-center max-w-4xl mx-auto">
        <div className="sec-kicker justify-center mb-6">A Note on the Craft</div>
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-normal leading-tight tracking-tight text-[var(--ink)]">
          The digital landscape evolves at breakneck speed —{" "}
          <span className="serif text-[var(--gold)]">
            we ensure your brand leads the curve.
          </span>
        </h2>
        <p className="mt-8 text-base sm:text-lg text-[var(--muted)] leading-relaxed max-w-2xl mx-auto">
          We don’t settle for cookie-cutter templates or bloated frameworks. Every line of code, interaction detail, and conversion journey is custom-engineered to command authority in your niche.
        </p>
      </div>
    </section>
  );
}
