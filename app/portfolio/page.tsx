"use client";

import { useState, useId } from "react";
import Link from "next/link";
import SmoothScroll from "@/components/providers/SmoothScroll";
import Nebula from "@/components/ambient/Nebula";
import Grain from "@/components/ambient/Grain";
import CustomCursor from "@/components/CustomCursor";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import { projectsData, Project } from "@/data/portfolio";
import {
  ExternalLink,
  ArrowUpRight,
  Sparkles,
  TrendingUp,
  Cpu,
  Layers,
  CheckCircle2,
  ChevronRight,
  Filter,
  BarChart3,
  Flame,
  Globe2,
} from "lucide-react";

const categories = [
  { id: "all", label: "All Works", count: projectsData.length },
  {
    id: "web-development",
    label: "Web Development",
    count: projectsData.filter((p) => p.category === "web-development").length,
  },
  {
    id: "automations",
    label: "Automations",
    count: projectsData.filter((p) => p.category === "automations").length,
  },
  {
    id: "brand-design",
    label: "Brand Systems",
    count: projectsData.filter((p) => p.category === "brand-design").length,
  },
  {
    id: "ads",
    label: "Paid Ads & CRO",
    count: projectsData.filter((p) => p.category === "ads").length,
  },
] as const;

export default function PortfolioPage() {
  const [activeTab, setActiveTab] = useState<string>("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filtered =
    activeTab === "all"
      ? projectsData
      : projectsData.filter((p) => p.category === activeTab);

  // Studio cumulative achievements
  const studioStats = [
    { label: "Live Client Deployments", val: "100%", sub: "On-time delivery" },
    { label: "Client Conversion Lift", val: "+185%", sub: "Average cross-niche" },
    { label: "Core Web Vitals", val: "99/100", sub: "Sub-second speed" },
    { label: "Client Revenue Unlocked", val: "$2.8M+", sub: "Direct attribution" },
  ];

  return (
    <SmoothScroll>
      <main className="min-h-screen relative bg-[var(--bg)] text-[var(--ink)] selection:bg-[var(--gold)] selection:text-black">
        <Nebula />
        <Grain />
        <CustomCursor />
        <Navbar />

        {/* Hero Section */}
        <section className="pt-36 sm:pt-44 pb-16 relative overflow-hidden">
          {/* Subtle background glow */}
          <div
            className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[radial-gradient(ellipse_at_center,rgba(255,196,48,0.07),transparent_70%)] pointer-events-none"
            aria-hidden="true"
          />

          <div className="wrap relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[var(--line)] bg-[var(--panel)]/80 backdrop-blur-md mb-6">
                <span className="w-2 h-2 rounded-full bg-[var(--gold)] shadow-[0_0_8px_var(--gold)]" />
                <span className="text-[11px] font-mono tracking-widest uppercase text-[var(--muted)]">
                  Archive of Engineering & Craft
                </span>
              </div>

              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-normal tracking-tight leading-[1.05] mb-6">
                Engineered for <br className="hidden sm:inline" />
                <span className="serif text-[var(--gold)]">extraordinary</span> conversion.
              </h1>

              <p className="text-base sm:text-lg text-[var(--muted)] max-w-2xl mx-auto leading-relaxed mb-12">
                A showcase of bespoke digital flagships, autonomous workflows, and high-ROAS systems designed to outpace the competition.
              </p>

              {/* Studio Metrics Ribbon */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 rounded-2xl border border-[var(--line)] bg-[var(--panel)]/50 backdrop-blur-sm max-w-3xl mx-auto mb-14 text-left">
                {studioStats.map((stat, i) => (
                  <div key={i} className="p-3 border-r last:border-r-0 border-[var(--line)]/50">
                    <div className="text-xl sm:text-2xl font-bold tracking-tight text-[var(--gold)] mb-0.5">
                      {stat.val}
                    </div>
                    <div className="text-[12px] font-medium text-[var(--ink)] leading-tight">
                      {stat.label}
                    </div>
                    <div className="text-[10px] text-[var(--faint)] font-mono mt-0.5">
                      {stat.sub}
                    </div>
                  </div>
                ))}
              </div>

              {/* Interactive Category Filter Pills */}
              <div
                role="tablist"
                aria-label="Filter case studies by discipline"
                className="flex flex-wrap items-center justify-center gap-2 p-1.5 rounded-2xl sm:rounded-full bg-[var(--panel)] border border-[var(--line)] w-full sm:w-fit mx-auto shadow-lg"
              >
                {categories.map((c) => {
                  const isActive = activeTab === c.id;
                  return (
                    <button
                      key={c.id}
                      role="tab"
                      aria-selected={isActive}
                      onClick={() => setActiveTab(c.id)}
                      className={`relative px-4 py-2 rounded-full text-xs font-medium transition-all duration-200 cursor-pointer flex items-center gap-2 ${
                        isActive
                          ? "bg-[var(--gold)] text-[#080808] font-semibold shadow-md"
                          : "text-[var(--muted)] hover:text-[var(--ink)] hover:bg-white/5"
                      }`}
                    >
                      <span>{c.label}</span>
                      <span
                        className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono ${
                          isActive
                            ? "bg-black/20 text-[#080808]"
                            : "bg-white/10 text-[var(--muted)]"
                        }`}
                      >
                        {c.count}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Project Grid */}
        <section className="pb-32 relative z-10" aria-label="Selected Projects">
          <div className="wrap">
            <div className="flex items-center justify-between pb-6 mb-8 border-b border-[var(--line)]">
              <div className="text-xs font-mono uppercase tracking-widest text-[var(--muted)] flex items-center gap-2">
                <Layers className="w-3.5 h-3.5 text-[var(--gold)]" />
                Showing {filtered.length} {filtered.length === 1 ? "System" : "Systems"}
              </div>
              <div className="text-xs text-[var(--faint)] hidden sm:block">
                Click any project card to review architecture breakdown
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
              {filtered.map((item, index) => (
                <article
                  key={item.id}
                  className="group relative rounded-2xl border border-[var(--line)] bg-[var(--panel)] overflow-hidden flex flex-col justify-between transition-all duration-300 hover:border-[var(--gold)]/50 hover:shadow-[0_12px_40px_rgba(0,0,0,0.6)]"
                >
                  {/* Top Image & Badge Banner */}
                  <div className="relative h-64 sm:h-72 w-full bg-[#0a0a0a] overflow-hidden">
                    <div
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105 filter brightness-[0.75] group-hover:brightness-[0.9]"
                      style={{ backgroundImage: `url(${item.image})` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--panel)] via-transparent to-black/40" />

                    {/* Badge Pill */}
                    <div className="absolute top-4 right-4 z-10 px-3.5 py-1 rounded-full bg-[#080808]/85 backdrop-blur-md text-[11px] font-medium text-[var(--gold)] border border-[var(--gold)]/30 flex items-center gap-1.5 shadow-md">
                      <Sparkles className="w-3 h-3 text-[var(--gold)]" />
                      {item.badge}
                    </div>

                    {/* Discipline Pill */}
                    <div className="absolute top-4 left-4 z-10 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-[10px] font-mono uppercase tracking-wider text-[var(--muted)] border border-white/10">
                      {item.categoryLabel}
                    </div>

                    {/* Bottom overlay with quick stats */}
                    <div className="absolute bottom-3 left-4 right-4 z-10 flex flex-wrap gap-2">
                      {item.metrics.slice(0, 2).map((m, mIdx) => (
                        <div
                          key={mIdx}
                          className="px-2.5 py-1 rounded-lg bg-black/80 backdrop-blur-md border border-white/10 flex items-center gap-1.5 text-[11px]"
                        >
                          <TrendingUp className="w-3 h-3 text-[var(--gold)]" />
                          <span className="text-[var(--gold)] font-bold">{m.value}</span>
                          <span className="text-[var(--muted)] text-[10px]">{m.label}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Card Content Area */}
                  <div className="p-6 sm:p-8 flex flex-col justify-between flex-1">
                    <div>
                      <div className="flex items-baseline justify-between mb-2">
                        <h2 className="text-2xl sm:text-3xl font-normal tracking-tight text-[var(--ink)] group-hover:text-[var(--gold)] transition-colors">
                          {item.title}
                        </h2>
                        <span className="text-xs font-mono text-[var(--faint)]">
                          0{index + 1}
                        </span>
                      </div>

                      <p className="serif text-base text-[var(--gold)] mb-3 leading-snug">
                        {item.tagline}
                      </p>

                      <p className="text-xs sm:text-sm text-[var(--muted)] leading-relaxed mb-6">
                        {item.description}
                      </p>

                      {/* Key Features Bullet List */}
                      <div className="space-y-2 mb-6 pt-4 border-t border-[var(--line)]">
                        <div className="text-[11px] font-mono uppercase tracking-widest text-[var(--faint)] mb-2 flex items-center gap-1.5">
                          <CheckCircle2 className="w-3 h-3 text-[var(--gold)]" /> Key Highlights
                        </div>
                        {item.features.slice(0, 3).map((f, fIdx) => (
                          <div
                            key={fIdx}
                            className="text-xs text-[var(--muted)] flex items-start gap-2"
                          >
                            <span className="text-[var(--gold)] mt-1 text-[10px]">▪</span>
                            <span className="line-clamp-1">{f}</span>
                          </div>
                        ))}
                      </div>

                      {/* Architecture Note */}
                      <div className="p-3 rounded-xl bg-white/[0.02] border border-[var(--line)] mb-6 text-xs text-[var(--muted)] flex items-start gap-2.5">
                        <Cpu className="w-4 h-4 text-[var(--gold)] shrink-0 mt-0.5" />
                        <div>
                          <strong className="text-[var(--ink)] font-medium block text-[11px]">
                            Technical Architecture
                          </strong>
                          <span className="text-[11px] text-[var(--faint)] line-clamp-2">
                            {item.keyArchitecture}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Card Footer: Tech Tags & CTA Actions */}
                    <div className="pt-5 border-t border-[var(--line)] flex flex-wrap items-center justify-between gap-3">
                      <div className="flex flex-wrap gap-1.5 max-w-[65%]">
                        {item.tags.slice(0, 3).map((t, idx) => (
                          <span
                            key={idx}
                            className="text-[11px] font-mono px-2.5 py-0.5 rounded-md bg-white/5 text-[var(--muted)] border border-white/5"
                          >
                            {t}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center gap-2">
                        {item.url ? (
                          <a
                            href={item.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn text-xs py-2 px-4 inline-flex items-center gap-1.5"
                          >
                            <span>Live Flagship</span>
                            <ArrowUpRight className="w-3.5 h-3.5" />
                          </a>
                        ) : (
                          <Link
                            href="#contact"
                            className="btn-ghost text-xs py-2 px-4 inline-flex items-center gap-1.5"
                          >
                            <span>Request Architecture</span>
                            <ChevronRight className="w-3.5 h-3.5" />
                          </Link>
                        )}
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Specialized Service Deep-Dives Hub */}
        <section className="py-20 border-t border-[var(--line)] bg-[var(--panel)]/30 relative">
          <div className="wrap">
            <div className="max-w-2xl mx-auto text-center mb-14">
              <div className="sec-kicker justify-center mb-3">Capabilities</div>
              <h2 className="text-3xl sm:text-4xl font-normal tracking-tight text-[var(--ink)] mb-3">
                Explore by <span className="serif text-[var(--gold)]">specialization.</span>
              </h2>
              <p className="text-xs sm:text-sm text-[var(--muted)]">
                Dive deep into the dedicated methodologies, deliverables, and stacks powering each service line.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                {
                  title: "Web Development",
                  desc: "Next.js flagships, sub-second load times, and conversion-focused architectures.",
                  link: "/web-development",
                  badge: "React 19 / Edge",
                },
                {
                  title: "Autonomous Workflows",
                  desc: "AI scoring, CRM webhooks, and zero-touch executive operational pipelines.",
                  link: "/automations",
                  badge: "AI & Serverless",
                },
                {
                  title: "Brand Design Systems",
                  desc: "Figma design tokens, editorial serif aesthetics, and fluid micro-interactions.",
                  link: "/brand-design",
                  badge: "Design Tokens",
                },
                {
                  title: "Paid Ads & CRO",
                  desc: "Meta & Google algorithmic funnels, server-side CAPI, and A/B split testing.",
                  link: "/ads",
                  badge: "Growth Engine",
                },
              ].map((s, i) => (
                <Link
                  key={i}
                  href={s.link}
                  className="p-6 rounded-2xl border border-[var(--line)] bg-[var(--panel)] hover:border-[var(--gold)]/50 transition-all flex flex-col justify-between group"
                >
                  <div>
                    <div className="text-[10px] font-mono text-[var(--gold)] uppercase tracking-wider mb-2">
                      {s.badge}
                    </div>
                    <h3 className="text-lg font-medium text-[var(--ink)] group-hover:text-[var(--gold)] transition-colors mb-2">
                      {s.title}
                    </h3>
                    <p className="text-xs text-[var(--muted)] leading-relaxed">
                      {s.desc}
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-[var(--line)] flex items-center justify-between text-xs font-semibold text-[var(--gold)]">
                    <span>Learn Methodology</span>
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </Link>
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
