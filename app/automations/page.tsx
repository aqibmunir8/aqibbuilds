import Link from "next/link";
import SmoothScroll from "@/components/providers/SmoothScroll";
import Nebula from "@/components/ambient/Nebula";
import Grain from "@/components/ambient/Grain";
import CustomCursor from "@/components/CustomCursor";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import { projectsData } from "@/data/portfolio";

export const metadata = {
  title: "Automations — AqibBuilds",
  description: "Autonomous AI workflows, CRM pipelines, and backend sync systems.",
};

export default function AutomationsPage() {
  const autoProjects = projectsData.filter((p) => p.category === "automations");

  return (
    <SmoothScroll>
      <main className="min-h-screen relative bg-[var(--bg)] text-[var(--ink)] selection:bg-[var(--gold)] selection:text-black">
        <Nebula />
        <Grain />
        <CustomCursor />
        <Navbar />

        {/* Hero */}
        <section className="pt-36 pb-16 relative">
          <div className="wrap text-center max-w-2xl mx-auto">
            <div className="sec-kicker justify-center mb-3">Service</div>
            <h1 className="text-4xl sm:text-6xl font-normal tracking-tight mb-4">
              Autonomous <span className="serif text-[var(--gold)]">Workflows.</span>
            </h1>
            <p className="text-sm sm:text-base text-[var(--muted)] leading-relaxed mb-8">
              Eliminate busywork. We build AI integrations, CRM automations, and custom webhook pipelines that scale your output.
            </p>
            <div className="flex justify-center gap-3">
              <a href="#systems" className="btn text-xs py-2.5 px-6">
                View Systems ↓
              </a>
              <Link href="#contact" className="btn-ghost text-xs py-2.5 px-6">
                Book Audit
              </Link>
            </div>
          </div>
        </section>

        {/* Three simple points */}
        <section className="py-12 border-y border-[var(--line)] bg-[var(--panel)]/30">
          <div className="wrap grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
            <div>
              <span className="text-[var(--gold)] text-xs font-mono block mb-1">01 / INBOUND</span>
              <h3 className="text-base font-medium mb-1">AI Lead Qualification</h3>
              <p className="text-xs text-[var(--muted)]">Score and route high-value inquiries in seconds.</p>
            </div>
            <div>
              <span className="text-[var(--gold)] text-xs font-mono block mb-1">02 / OPERATIONS</span>
              <h3 className="text-base font-medium mb-1">CRM & Invoicing Sync</h3>
              <p className="text-xs text-[var(--muted)]">Connect Stripe, Shopify, and accounting seamlessly.</p>
            </div>
            <div>
              <span className="text-[var(--gold)] text-xs font-mono block mb-1">03 / SPEED</span>
              <h3 className="text-base font-medium mb-1">Hands-Free Handoff</h3>
              <p className="text-xs text-[var(--muted)]">Automatic onboarding sequences with zero human delay.</p>
            </div>
          </div>
        </section>

        {/* Systems */}
        <section id="systems" className="py-20">
          <div className="wrap grid grid-cols-1 md:grid-cols-2 gap-8">
            {autoProjects.map((p) => (
              <article
                key={p.id}
                className="rounded-2xl border border-[var(--line)] bg-[var(--panel)] p-7 sm:p-9 flex flex-col justify-between hover:border-[var(--gold)]/40 transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[11px] font-medium text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/20">
                      {p.badge}
                    </span>
                  </div>

                  <h2 className="text-2xl font-normal tracking-tight mb-1">{p.title}</h2>
                  <p className="serif text-sm text-[var(--gold)] mb-3">{p.tagline}</p>
                  <p className="text-xs sm:text-sm text-[var(--muted)] leading-relaxed mb-4">
                    {p.description}
                  </p>

                  <div className="text-xs text-[var(--ink)] bg-[var(--gold-soft)] border border-[var(--gold)]/20 p-2.5 rounded-lg mb-5">
                    <strong className="text-[var(--gold)]">Impact: </strong>
                    {p.clientImpact}
                  </div>
                </div>

                <div className="pt-4 border-t border-[var(--line)] flex items-center justify-between">
                  <span className="text-[11px] text-[var(--muted)]">{p.tags.slice(0, 2).join(" · ")}</span>
                  <Link
                    href="#contact"
                    className="text-xs font-semibold text-[var(--gold)] hover:underline"
                  >
                    Build System →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>

        <CTA />
        <Footer />
      </main>
    </SmoothScroll>
  );
}
