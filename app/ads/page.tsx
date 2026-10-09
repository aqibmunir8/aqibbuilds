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
  title: "Paid Ads & CRO — AqibBuilds",
  description: "Scientific growth, Meta/Google ad bidding, and conversion funnels.",
};

export default function AdsPage() {
  const adsProjects = projectsData.filter((p) => p.category === "ads");

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
              Paid Ads & <span className="serif text-[var(--gold)]">CRO.</span>
            </h1>
            <p className="text-sm sm:text-base text-[var(--muted)] leading-relaxed mb-8">
              Data-driven media buying paired with fast landing pages and server-side tracking that compounds return on ad spend.
            </p>
            <div className="flex justify-center gap-3">
              <a href="#campaigns" className="btn text-xs py-2.5 px-6">
                View Funnels ↓
              </a>
              <Link href="#contact" className="btn-ghost text-xs py-2.5 px-6">
                Audit Funnel
              </Link>
            </div>
          </div>
        </section>

        {/* Three simple points */}
        <section className="py-12 border-y border-[var(--line)] bg-[var(--panel)]/30">
          <div className="wrap grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
            <div>
              <span className="text-[var(--gold)] text-xs font-mono block mb-1">01 / TRACKING</span>
              <h3 className="text-base font-medium mb-1">Server-Side CAPI</h3>
              <p className="text-xs text-[var(--muted)]">Recover 30%+ lost signal bypassed by ad-blockers.</p>
            </div>
            <div>
              <span className="text-[var(--gold)] text-xs font-mono block mb-1">02 / SPEED</span>
              <h3 className="text-base font-medium mb-1">Fast Landing Pages</h3>
              <p className="text-xs text-[var(--muted)]">Sub-400ms pages tuned to reduce paid traffic bounce.</p>
            </div>
            <div>
              <span className="text-[var(--gold)] text-xs font-mono block mb-1">03 / CREATIVE</span>
              <h3 className="text-base font-medium mb-1">Iterative Matrix</h3>
              <p className="text-xs text-[var(--muted)]">Weekly ad tests isolating hooks and visual angles.</p>
            </div>
          </div>
        </section>

        {/* Campaigns */}
        <section id="campaigns" className="py-20">
          <div className="wrap grid grid-cols-1 md:grid-cols-2 gap-8">
            {adsProjects.map((p) => (
              <article
                key={p.id}
                className="rounded-2xl border border-[var(--line)] bg-[var(--panel)] p-7 sm:p-9 flex flex-col justify-between hover:border-[var(--gold)]/40 transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[11px] font-medium text-rose-400 bg-rose-500/10 px-2.5 py-0.5 rounded-full border border-rose-500/20">
                      {p.badge}
                    </span>
                  </div>

                  <h2 className="text-2xl font-normal tracking-tight mb-1">{p.title}</h2>
                  <p className="serif text-sm text-[var(--gold)] mb-3">{p.tagline}</p>
                  <p className="text-xs sm:text-sm text-[var(--muted)] leading-relaxed mb-4">
                    {p.description}
                  </p>

                  <div className="text-xs text-[var(--ink)] bg-[var(--gold-soft)] border border-[var(--gold)]/20 p-2.5 rounded-lg mb-5">
                    <strong className="text-[var(--gold)]">Result: </strong>
                    {p.clientImpact}
                  </div>
                </div>

                <div className="pt-4 border-t border-[var(--line)] flex items-center justify-between">
                  <span className="text-[11px] text-[var(--muted)]">{p.tags.slice(0, 2).join(" · ")}</span>
                  <Link
                    href="#contact"
                    className="text-xs font-semibold text-[var(--gold)] hover:underline"
                  >
                    Scale Funnel →
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
