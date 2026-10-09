"use client";

import { useState } from "react";
import Link from "next/link";
import SmoothScroll from "@/components/providers/SmoothScroll";
import Nebula from "@/components/ambient/Nebula";
import Grain from "@/components/ambient/Grain";
import CustomCursor from "@/components/CustomCursor";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import { projectsData } from "@/data/portfolio";

const categories = [
  { id: "all", label: "All" },
  { id: "web-development", label: "Web Dev" },
  { id: "automations", label: "Automations" },
  { id: "brand-design", label: "Brand Design" },
  { id: "ads", label: "Paid Ads" },
] as const;

export default function PortfolioPage() {
  const [activeTab, setActiveTab] = useState<string>("all");

  const filtered =
    activeTab === "all"
      ? projectsData
      : projectsData.filter((p) => p.category === activeTab);

  return (
    <SmoothScroll>
      <main className="min-h-screen relative bg-[var(--bg)] text-[var(--ink)] selection:bg-[var(--gold)] selection:text-black">
        <Nebula />
        <Grain />
        <CustomCursor />
        <Navbar />

        {/* Hero */}
        <section className="pt-36 pb-16 relative">
          <div className="wrap text-center max-w-3xl mx-auto">
            <div className="sec-kicker justify-center mb-4">Portfolio</div>
            <h1 className="text-4xl sm:text-6xl font-normal tracking-tight text-[var(--ink)] mb-4">
              Selected <span className="serif text-[var(--gold)]">works.</span>
            </h1>
            <p className="text-sm sm:text-base text-[var(--muted)] max-w-lg mx-auto mb-10">
              A curation of digital products, systems, and growth engines built for ambitious clients.
            </p>

            {/* Filters */}
            <div className="flex flex-wrap items-center justify-center gap-1.5 p-1 rounded-full bg-[var(--panel)] border border-[var(--line)] w-fit mx-auto">
              {categories.map((c) => (
                <button
                  key={c.id}
                  onClick={() => setActiveTab(c.id)}
                  className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all ${
                    activeTab === c.id
                      ? "bg-[var(--gold)] text-[#080808] font-semibold"
                      : "text-[var(--muted)] hover:text-[var(--ink)]"
                  }`}
                >
                  {c.label}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Grid */}
        <section className="pb-24">
          <div className="wrap">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {filtered.map((item) => (
                <article
                  key={item.id}
                  className="rounded-2xl border border-[var(--line)] bg-[var(--panel)] overflow-hidden flex flex-col justify-between group hover:border-[var(--gold)]/40 transition-all"
                >
                  <div className="relative h-60 sm:h-64 w-full bg-[#0c0c0c] overflow-hidden">
                    <div
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105 filter brightness-[0.8]"
                      style={{ backgroundImage: `url(${item.image})` }}
                    />
                    <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-black/75 backdrop-blur-md text-[11px] font-medium text-[var(--gold)] border border-white/10">
                      {item.badge}
                    </div>
                  </div>

                  <div className="p-7 flex flex-col justify-between flex-1">
                    <div>
                      <div className="text-[11px] font-mono uppercase tracking-widest text-[var(--faint)] mb-1">
                        {item.categoryLabel}
                      </div>
                      <h2 className="text-2xl font-normal tracking-tight text-[var(--ink)] mb-1">
                        {item.title}
                      </h2>
                      <p className="serif text-sm text-[var(--gold)] mb-3">
                        {item.tagline}
                      </p>
                      <p className="text-xs sm:text-sm text-[var(--muted)] leading-relaxed mb-5">
                        {item.clientImpact}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-[var(--line)] flex items-center justify-between">
                      <div className="flex gap-1.5">
                        {item.tags.slice(0, 2).map((t, idx) => (
                          <span
                            key={idx}
                            className="text-[10px] px-2 py-0.5 rounded bg-white/5 text-[var(--muted)]"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                      {item.url ? (
                        <a
                          href={item.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs font-semibold text-[var(--gold)] hover:underline"
                        >
                          View Site ↗
                        </a>
                      ) : (
                        <Link
                          href="#contact"
                          className="text-xs text-[var(--muted)] hover:text-[var(--gold)]"
                        >
                          Inquire →
                        </Link>
                      )}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <CTA />
        <Footer />
      </main>
    </SmoothScroll>
  );
}
