"use client";

import { useState, useEffect, useRef } from "react";

interface ServiceSlide {
  id: string;
  num: string;
  label: string;
  headline: string;
  italicWord: string;
  desc: string;
  pills: string[];
  imageUrl: string;
}

const servicesData: ServiceSlide[] = [
  {
    id: "web-dev",
    num: "01",
    label: "Web Development",
    headline: "Websites that win",
    italicWord: "customers",
    desc: "Blazing-fast pages, persuasive copy, and editorial design that turns cold visitors into booked clients.",
    pills: ["Next.js & React", "Headless CMS", "Performance 100", "Custom UI"],
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "brand-design",
    num: "02",
    label: "UI/UX & Brand Design",
    headline: "Design that looks and feels",
    italicWord: "priceless",
    desc: "Uncompromising art direction, tailored design systems, and fluid micro-interactions designed to make your brand unforgettable.",
    pills: ["Design Systems", "Prototyping", "Art Direction", "User Research"],
    imageUrl: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "automation",
    num: "03",
    label: "Automation",
    headline: "Scale without scaling",
    italicWord: "headcount",
    desc: "Autonomous AI workflows, CRM automations, and bespoke internal tooling that eliminate busywork and accelerate delivery.",
    pills: ["AI Integrations", "Workflow Pipelines", "Webhook Systems", "Custom API"],
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "paid-ads",
    num: "04",
    label: "Paid Ads & Growth",
    headline: "Scientific acquisition that actually",
    italicWord: "compounds",
    desc: "Data-driven creative testing, conversion rate optimization, and high-yield paid acquisition strategies built for profitable scale.",
    pills: ["Meta & Google Ads", "CRO Funnels", "Attribution Modeling", "Ad Creatives"],
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
  },
];

export default function Services() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (isPaused) {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }
    timerRef.current = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % servicesData.length);
    }, 5200);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused]);

  const activeService = servicesData[activeIdx];

  return (
    <section id="services" className="py-24 relative">
      <div className="wrap">
        <div className="sec-kicker">What We Do</div>
        <h2 className="text-3xl sm:text-5xl font-normal tracking-tight mb-12">
          Engineering digital supremacy with <span className="serif text-[var(--gold)]">tailored precision.</span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Tab selectors */}
          <div className="lg:col-span-4 flex flex-col gap-2">
            {servicesData.map((svc, i) => {
              const active = i === activeIdx;
              return (
                <button
                  key={svc.id}
                  onClick={() => setActiveIdx(i)}
                  className={`svc-item w-full text-left p-5 rounded-xl border transition-all duration-300 flex items-center justify-between group ${
                    active
                      ? "bg-[var(--panel)] border-[var(--gold)] text-[var(--ink)] shadow-[0_4px_20px_rgba(255,196,48,0.1)]"
                      : "bg-transparent border-[var(--line)] text-[var(--muted)] hover:border-[var(--faint)] hover:text-[var(--ink)]"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <span
                      className={`text-xs font-mono transition-colors ${
                        active ? "text-[var(--gold)] font-bold" : "text-[var(--faint)]"
                      }`}
                    >
                      {svc.num}
                    </span>
                    <span className="text-base font-medium tracking-wide">{svc.label}</span>
                  </div>
                  <span
                    className={`text-sm transition-transform duration-300 ${
                      active ? "text-[var(--gold)] translate-x-1" : "text-transparent"
                    }`}
                  >
                    →
                  </span>
                </button>
              );
            })}
          </div>

          {/* Right: Stage Slide */}
          <div
            className="lg:col-span-8 rounded-2xl overflow-hidden border border-[var(--line)] bg-[var(--panel)] min-h-[440px] relative flex flex-col justify-end p-8 sm:p-12 transition-all duration-500"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {/* Background image with overlay */}
            <div
              className="absolute inset-0 bg-cover bg-center transition-all duration-700 filter brightness-[0.25] scale-105"
              style={{ backgroundImage: `url(${activeService.imageUrl})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-[#080808]/70 to-transparent" />

            {/* Slide Content */}
            <div className="relative z-10 max-w-xl">
              <div className="text-xs uppercase font-mono tracking-widest text-[var(--gold)] mb-3">
                {activeService.num} / 04 · {activeService.label}
              </div>
              <h3 className="text-2xl sm:text-4xl font-normal tracking-tight mb-4 text-[var(--ink)]">
                {activeService.headline}{" "}
                <span className="serif text-[var(--gold)]">{activeService.italicWord}</span>
              </h3>
              <p className="text-sm sm:text-base text-[var(--muted)] leading-relaxed mb-6 font-normal">
                {activeService.desc}
              </p>

              {/* Pills */}
              <div className="flex flex-wrap gap-2 pt-2 border-t border-[var(--line)]">
                {activeService.pills.map((pill, idx) => (
                  <span
                    key={idx}
                    className="text-xs font-medium px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[var(--ink)]"
                  >
                    {pill}
                  </span>
                ))}
              </div>
            </div>

            {/* Stage Progress indicators */}
            <div className="absolute top-6 right-6 flex items-center gap-2 z-10">
              {servicesData.map((_, dotIdx) => (
                <div
                  key={dotIdx}
                  onClick={() => setActiveIdx(dotIdx)}
                  className={`h-1.5 rounded-full cursor-pointer transition-all duration-300 ${
                    dotIdx === activeIdx
                      ? "w-8 bg-[var(--gold)]"
                      : "w-2 bg-[var(--line)] hover:bg-[var(--faint)]"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
