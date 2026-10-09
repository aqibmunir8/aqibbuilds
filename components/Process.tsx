"use client";

import { useEffect, useRef } from "react";

interface StepCard {
  step: string;
  headline: string;
  italicWord: string;
  desc: string;
  bullets: { title: string; subtitle: string }[];
}

const stepsData: StepCard[] = [
  {
    step: "Step 1 · Discovery & Strategy",
    headline: "Together, we dive into",
    italicWord: "your world.",
    desc: "We dissect your business goals, target audience, competitive advantages, and bottleneck points to construct an airtight engineering blueprint.",
    bullets: [
      { title: "Deep Audit", subtitle: "Full diagnostic of existing assets, UX friction, and traffic flows" },
      { title: "Strategic Roadmap", subtitle: "Definitive milestones, architectural scope, and KPI targets" },
      { title: "Brand Alignment", subtitle: "Clarifying voice, tone, and luxury positioning benchmarks" },
    ],
  },
  {
    step: "Step 2 · Design & Engineering",
    headline: "We craft your tailored",
    italicWord: "digital engine.",
    desc: "From bespoke high-fidelity wireframes to pixel-perfect React implementation, we engineer every interaction with surgical precision.",
    bullets: [
      { title: "Interactive Prototyping", subtitle: "Figma design systems and micro-interaction exploration" },
      { title: "Modern Tech Stack", subtitle: "Next.js App Router, Tailwind CSS, high-speed edge deployment" },
      { title: "Conversion Architecture", subtitle: "Strategically placed conversion hooks and frictionless checkout" },
    ],
  },
  {
    step: "Step 3 · Launch & Autonomous Scale",
    headline: "Launch day is just",
    italicWord: "Day One.",
    desc: "We rigorously QA across all devices, optimize Core Web Vitals to 100%, and establish automated monitoring pipelines so you scale hands-free.",
    bullets: [
      { title: "Zero-Downtime Deployment", subtitle: "Global CDN delivery with instant edge caching" },
      { title: "Automated Workflows", subtitle: "Lead enrichment, CRM sync, and transaction webhooks" },
      { title: "Continuous Support", subtitle: "Direct line of communication and ongoing performance monitoring" },
    ],
  },
];

export default function Process() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const cards = Array.from(containerRef.current.querySelectorAll<HTMLElement>(".scard"));

    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(() => {
          ticking = false;
          cards.forEach((card, i) => {
            const covered = cards.slice(i + 1).some((nextCard) => {
              const r = nextCard.getBoundingClientRect();
              return r.top < window.innerHeight * 0.6 && r.bottom > window.innerHeight * 0.3;
            });
            card.classList.toggle("behind", covered);
          });
        });
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="process" className="py-24 relative">
      <div className="wrap">
        <div className="sec-kicker">How We Work</div>
        <h2 className="text-3xl sm:text-5xl font-normal tracking-tight mb-16 max-w-2xl">
          A proven sequence designed for{" "}
          <span className="serif text-[var(--gold)]">maximum impact.</span>
        </h2>

        <div ref={containerRef} className="relative flex flex-col">
          {stepsData.map((step, idx) => (
            <div
              key={idx}
              className="scard"
              style={{ "--i": idx } as React.CSSProperties}
            >
              <div className="text-xs font-mono uppercase tracking-widest text-[var(--gold)] mb-3">
                {step.step}
              </div>

              <h3 className="text-2xl sm:text-4xl font-normal tracking-tight mb-4 text-[var(--ink)]">
                {step.headline} <span className="serif text-[var(--gold)]">{step.italicWord}</span>
              </h3>

              <p className="text-sm sm:text-base text-[var(--muted)] leading-relaxed max-w-3xl mb-8">
                {step.desc}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t border-[var(--line)]">
                {step.bullets.map((b, bIdx) => (
                  <div key={bIdx} className="flex flex-col gap-1">
                    <span className="text-sm font-semibold text-[var(--ink)] flex items-center gap-2">
                      <span className="text-[var(--gold)]">✦</span> {b.title}
                    </span>
                    <span className="text-xs text-[var(--muted)] leading-relaxed">
                      {b.subtitle}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
