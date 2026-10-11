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
  title: "Brand Design — AqibBuilds",
  description: "Art direction, design systems, and fluid micro-interactions.",
};

export default function BrandDesignPage() {
  const brandProjects = projectsData.filter((p) => p.category === "brand-design");

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
              Brand & <span className="serif text-[var(--gold)]">UI Systems.</span>
            </h1>
            <p className="text-sm sm:text-base text-[var(--muted)] leading-relaxed mb-8">
              Refined aesthetics that command premium positioning. Figma design systems, art direction, and micro-interactions.
            </p>
            <div className="flex justify-center gap-3">
              <a href="#designs" className="btn text-xs py-2.5 px-6">
                View Systems ↓
              </a>
              <Link href="#contact" className="btn-ghost text-xs py-2.5 px-6">
                Consultation
              </Link>
            </div>
          </div>
        </section>

        {/* Three simple points */}
        <section className="py-12 border-y border-[var(--line)] bg-[var(--panel)]/30">
          <div className="wrap grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
            <div>
              <span className="text-[var(--gold)] text-xs font-mono block mb-1">01 / TYPOGRAPHY</span>
              <h3 className="text-base font-medium mb-1">Editorial Hierarchy</h3>
              <p className="text-xs text-[var(--muted)]">Harmonious serif & sans pairings that look timeless.</p>
            </div>
            <div>
              <span className="text-[var(--gold)] text-xs font-mono block mb-1">02 / TOKEN SYSTEM</span>
              <h3 className="text-base font-medium mb-1">Modular Figma Kits</h3>
              <p className="text-xs text-[var(--muted)]">Consistent colors, spacing, and responsive components.</p>
            </div>
            <div>
              <span className="text-[var(--gold)] text-xs font-mono block mb-1">03 / MOTION</span>
              <h3 className="text-base font-medium mb-1">Tactile Feel</h3>
              <p className="text-xs text-[var(--muted)]">Subtle physics that make digital products feel physical.</p>
            </div>
          </div>
        </section>

        {/* Showcase */}
        <section id="designs" className="py-20">
          <div className="wrap grid grid-cols-1 md:grid-cols-2 gap-8">
            {brandProjects.map((p) => (
              <article
                key={p.id}
                className="rounded-2xl border border-[var(--line)] bg-[var(--panel)] overflow-hidden flex flex-col justify-between hover:border-[var(--gold)]/40 transition-all"
              >
                <div className="relative h-56 sm:h-64 bg-[#0c0c0c] overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center filter brightness-[0.8] hover:scale-105 transition-transform duration-500"
                    style={{ backgroundImage: `url(${p.image})` }}
                  />
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/80 text-[11px] font-medium text-[var(--gold)] border border-white/10">
                    {p.badge}
                  </div>
                </div>

                <div className="p-7 flex flex-col justify-between flex-1">
                  <div>
                    <h2 className="text-2xl font-normal tracking-tight mb-1">{p.title}</h2>
                    <p className="serif text-sm text-[var(--gold)] mb-3">{p.tagline}</p>
                    <p className="text-xs sm:text-sm text-[var(--muted)] leading-relaxed mb-4">
                      {p.description}
                    </p>
                    <div className="text-xs text-[var(--ink)] bg-[var(--gold-soft)] border border-[var(--gold)]/20 p-2.5 rounded-lg mb-4">
                      <strong className="text-[var(--gold)]">Result: </strong>
                      {p.clientImpact}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-[var(--line)] flex items-center justify-between">
                    <span className="text-[11px] text-[var(--muted)]">{p.tags.slice(0, 2).join(" · ")}</span>
                    {p.url ? (
                      <a
                        href={p.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-semibold text-[var(--gold)] hover:underline"
                      >
                        Live Experience ↗
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
        </section>

        <CTA />
        <Footer />
      </main>
    </SmoothScroll>
  );
}
