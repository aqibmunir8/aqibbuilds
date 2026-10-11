import Link from "next/link";
import SmoothScroll from "@/components/providers/SmoothScroll";
import Nebula from "@/components/ambient/Nebula";
import Grain from "@/components/ambient/Grain";
import CustomCursor from "@/components/CustomCursor";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import { projectsData } from "@/data/portfolio";
import {
  Code2,
  Zap,
  Gauge,
  Layers,
  ShieldCheck,
  Smartphone,
  ArrowUpRight,
  TrendingUp,
  Cpu,
  CheckCircle2,
  Terminal,
} from "lucide-react";

export const metadata = {
  title: "Web Development — AqibBuilds",
  description:
    "High-performance digital flagships engineered with Next.js, React 19, and Tailwind CSS. Built for sub-second speeds and maximum conversion.",
};

export default function WebDevelopmentPage() {
  const webProjects = projectsData.filter((p) => p.category === "web-development");

  const pillars = [
    {
      num: "01",
      title: "Sub-Second Performance",
      subtitle: "Core Web Vitals 95+ Guarantee",
      desc: "Hardware-accelerated rendering, progressive image pipelines, and edge-computed routes. No lag, no layout jumps.",
      icon: Gauge,
    },
    {
      num: "02",
      title: "Bespoke Architecture",
      subtitle: "Zero Bloated Themes or Builders",
      desc: "Hand-engineered with Next.js 15, React 19, and Tailwind CSS. Clean, maintainable codebases built to scale.",
      icon: Code2,
    },
    {
      num: "03",
      title: "Conversion-First UX",
      subtitle: "Engineered for Revenue",
      desc: "Every interaction, typography hierarchy, and CTA flow is designed based on proven consumer psychology and heatmaps.",
      icon: TrendingUp,
    },
    {
      num: "04",
      title: "Full-Stack Security & SEO",
      subtitle: "Technical Domination",
      desc: "Semantic HTML5, automated JSON-LD schema, open graph assets, and enterprise-grade CDN caching worldwide.",
      icon: ShieldCheck,
    },
  ];

  const stack = [
    { name: "Next.js 15 / React 19", role: "Framework & Server Components" },
    { name: "Tailwind CSS v4", role: "Design Token Utility Engine" },
    { name: "TypeScript", role: "Type-Safe Robust Execution" },
    { name: "Framer Motion / Lenis", role: "60fps Smooth Physics & Motion" },
    { name: "Vercel Edge Network", role: "Sub-50ms Global Routing" },
    { name: "Custom API & Headless CMS", role: "Content & Webhook Architecture" },
  ];

  const processSteps = [
    {
      step: "01",
      title: "Technical Discovery & Wireframing",
      desc: "We analyze your audience, audit conversion bottlenecks, and draft high-fidelity wireframes mapped directly to user intents.",
    },
    {
      step: "02",
      title: "Art Direction & Interactive Prototyping",
      desc: "Custom typography systems, dark/light token architecture, and tactile micro-interaction prototyping in Figma.",
    },
    {
      step: "03",
      title: "Next.js Production Engineering",
      desc: "Translating approved systems into clean, modular React components with strict accessibility, semantic HTML, and zero bloat.",
    },
    {
      step: "04",
      title: "Lighthouse Optimization & QA",
      desc: "Rigorous stress tests across mobile viewports, network throttle conditions, and accessibility screen reader audits.",
    },
  ];

  return (
    <SmoothScroll>
      <main className="min-h-screen relative bg-[var(--bg)] text-[var(--ink)] selection:bg-[var(--gold)] selection:text-black">
        <Nebula />
        <Grain />
        <CustomCursor />
        <Navbar />

        {/* Hero */}
        <section className="pt-36 sm:pt-44 pb-20 relative overflow-hidden">
          <div
            className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[radial-gradient(ellipse_at_center,rgba(255,196,48,0.08),transparent_70%)] pointer-events-none"
            aria-hidden="true"
          />

          <div className="wrap text-center max-w-3xl mx-auto relative z-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[var(--line)] bg-[var(--panel)]/80 backdrop-blur-md mb-6">
              <span className="w-2 h-2 rounded-full bg-[var(--gold)] shadow-[0_0_8px_var(--gold)]" />
              <span className="text-[11px] font-mono tracking-widest uppercase text-[var(--muted)]">
                Next.js Digital Flagships
              </span>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-normal tracking-tight mb-6 leading-[1.05]">
              Web <span className="serif text-[var(--gold)]">Development.</span>
            </h1>

            <p className="text-base sm:text-lg text-[var(--muted)] leading-relaxed mb-10 max-w-2xl mx-auto">
              We design and engineer bespoke web flagships that load under 1 second, tell an unforgettable brand story, and turn casual visitors into loyal clients.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <a href="#flagships" className="btn text-xs sm:text-sm py-3 px-7">
                Featured Flagships ↓
              </a>
              <Link href="#contact" className="btn-ghost text-xs sm:text-sm py-3 px-7">
                Start a Build →
              </Link>
            </div>
          </div>
        </section>

        {/* Pillars / Principles */}
        <section className="py-20 border-y border-[var(--line)] bg-[var(--panel)]/40 relative">
          <div className="wrap">
            <div className="max-w-2xl mx-auto text-center mb-14">
              <div className="sec-kicker justify-center mb-2">Engineering Standards</div>
              <h2 className="text-3xl sm:text-4xl font-normal tracking-tight text-[var(--ink)]">
                No templates. <span className="serif text-[var(--gold)]">Pure performance.</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {pillars.map((p, idx) => {
                const IconComponent = p.icon;
                return (
                  <div
                    key={idx}
                    className="p-7 rounded-2xl border border-[var(--line)] bg-[var(--panel)] hover:border-[var(--gold)]/40 transition-all flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-[11px] font-mono text-[var(--gold)] font-bold">
                          {p.num}
                        </span>
                        <IconComponent className="w-5 h-5 text-[var(--gold)]" />
                      </div>
                      <h3 className="text-lg font-medium text-[var(--ink)] mb-1">
                        {p.title}
                      </h3>
                      <div className="text-[11px] font-mono text-[var(--faint)] mb-3">
                        {p.subtitle}
                      </div>
                      <p className="text-xs text-[var(--muted)] leading-relaxed">
                        {p.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Selected Work Grid */}
        <section id="flagships" className="py-24 relative">
          <div className="wrap">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 pb-6 border-b border-[var(--line)] gap-4">
              <div>
                <div className="sec-kicker mb-2">Case Studies</div>
                <h2 className="text-3xl sm:text-5xl font-normal tracking-tight text-[var(--ink)]">
                  Selected <span className="serif text-[var(--gold)]">Flagships.</span>
                </h2>
              </div>
              <Link
                href="/portfolio"
                className="text-xs font-mono text-[var(--gold)] hover:underline flex items-center gap-1.5"
              >
                <span>View Full Portfolio Archive</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
              {webProjects.map((item, index) => (
                <article
                  key={item.id}
                  className="group rounded-2xl border border-[var(--line)] bg-[var(--panel)] overflow-hidden flex flex-col justify-between hover:border-[var(--gold)]/50 transition-all duration-300 hover:shadow-[0_12px_40px_rgba(0,0,0,0.6)]"
                >
                  <div className="relative h-64 sm:h-72 w-full bg-[#0a0a0a] overflow-hidden">
                    <div
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105 filter brightness-[0.75] group-hover:brightness-[0.9]"
                      style={{ backgroundImage: `url(${item.image})` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--panel)] via-transparent to-black/40" />

                    <div className="absolute top-4 right-4 z-10 px-3.5 py-1 rounded-full bg-[#080808]/85 backdrop-blur-md text-[11px] font-medium text-[var(--gold)] border border-[var(--gold)]/30 shadow-md">
                      {item.badge}
                    </div>

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

                  <div className="p-7 sm:p-8 flex flex-col justify-between flex-1">
                    <div>
                      <div className="flex items-baseline justify-between mb-2">
                        <h3 className="text-2xl sm:text-3xl font-normal tracking-tight text-[var(--ink)] group-hover:text-[var(--gold)] transition-colors">
                          {item.title}
                        </h3>
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

                      <div className="p-3.5 rounded-xl bg-white/[0.02] border border-[var(--line)] mb-6 text-xs flex items-start gap-2.5">
                        <Cpu className="w-4 h-4 text-[var(--gold)] shrink-0 mt-0.5" />
                        <div>
                          <strong className="text-[var(--ink)] font-medium block text-[11px]">
                            Architecture Highlights
                          </strong>
                          <span className="text-[11px] text-[var(--faint)]">
                            {item.keyArchitecture}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="pt-5 border-t border-[var(--line)] flex flex-wrap items-center justify-between gap-3">
                      <div className="flex flex-wrap gap-1.5">
                        {item.tags.slice(0, 3).map((t, idx) => (
                          <span
                            key={idx}
                            className="text-[11px] font-mono px-2.5 py-0.5 rounded-md bg-white/5 text-[var(--muted)]"
                          >
                            {t}
                          </span>
                        ))}
                      </div>

                      {item.url && (
                        <a
                          href={item.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn text-xs py-2 px-4 inline-flex items-center gap-1.5"
                        >
                          <span>Live Flagship</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </a>
                      )}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Tech Stack Matrix */}
        <section className="py-20 border-t border-[var(--line)] bg-[var(--panel)]/20">
          <div className="wrap">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
              <div>
                <div className="sec-kicker mb-2">Modern Tooling</div>
                <h2 className="text-3xl font-normal tracking-tight text-[var(--ink)] mb-4">
                  The <span className="serif text-[var(--gold)]">Tech Stack.</span>
                </h2>
                <p className="text-xs sm:text-sm text-[var(--muted)] leading-relaxed">
                  We leverage bleeding-edge tools that provide enterprise security, lightning load speeds, and friction-free maintenance.
                </p>
              </div>

              <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {stack.map((s, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-xl border border-[var(--line)] bg-[var(--panel)] flex items-start gap-3.5"
                  >
                    <Terminal className="w-4 h-4 text-[var(--gold)] shrink-0 mt-0.5" />
                    <div>
                      <div className="text-sm font-medium text-[var(--ink)] mb-0.5">
                        {s.name}
                      </div>
                      <div className="text-xs text-[var(--faint)] font-mono">
                        {s.role}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 4-Step Process */}
        <section className="py-24 border-t border-[var(--line)]">
          <div className="wrap">
            <div className="max-w-2xl mx-auto text-center mb-16">
              <div className="sec-kicker justify-center mb-2">Lifecycle</div>
              <h2 className="text-3xl sm:text-4xl font-normal tracking-tight text-[var(--ink)] mb-3">
                How we build your <span className="serif text-[var(--gold)]">flagship.</span>
              </h2>
              <p className="text-xs sm:text-sm text-[var(--muted)]">
                From initial wireframes to production DNS cutover in 2-4 weeks.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {processSteps.map((p, i) => (
                <div
                  key={i}
                  className="p-6 rounded-2xl border border-[var(--line)] bg-[var(--panel)]/60 relative flex flex-col justify-between"
                >
                  <div>
                    <div className="text-2xl font-mono font-bold text-[var(--gold)] mb-3">
                      {p.step}
                    </div>
                    <h3 className="text-base font-medium text-[var(--ink)] mb-2">
                      {p.title}
                    </h3>
                    <p className="text-xs text-[var(--muted)] leading-relaxed">
                      {p.desc}
                    </p>
                  </div>
                </div>
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
