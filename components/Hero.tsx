export default function Hero() {
  return (
    <section className="min-h-screen grid grid-cols-1 lg:grid-cols-12 items-center relative px-6 md:px-12 pt-28 pb-16 max-w-[1400px] mx-auto gap-12 lg:gap-8">
      {/* Left Typography & CTAs */}
      <div className="lg:col-span-7 flex flex-col justify-center animate-fade-in-up">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[var(--primary)]/30 bg-[var(--card-bg)] text-[var(--primary)] text-xs font-semibold uppercase tracking-widest w-fit mb-6 backdrop-blur-sm">
          <span className="w-2 h-2 rounded-full bg-[var(--primary)] animate-pulse" />
          Full-Stack Digital Agency
        </div>

        <h1 className="text-[clamp(2.75rem,6.5vw,5.5rem)] font-extrabold leading-[1.02] tracking-tight text-[var(--text-color)] mb-6">
          We Build.<br />
          <em className="font-playfair font-bold italic text-[var(--primary)] not-italic">
            We Automate.
          </em><br />
          We Scale.
        </h1>

        <p className="text-[clamp(1.05rem,1.5vw,1.25rem)] text-[var(--text-secondary)] font-normal max-w-[560px] leading-relaxed mb-8">
          From high-velocity Next.js web applications and autonomous AI pipelines to precision-targeted paid ads — we turn vision into compounding revenue.
        </p>

        <div className="flex flex-wrap gap-4 items-center">
          <a
            href="#contact"
            className="px-8 py-4 bg-[var(--primary)] text-white font-bold text-xs uppercase tracking-wider rounded-xl hover:opacity-90 hover:shadow-[0_0_24px_rgba(236,72,153,0.45)] transition-all duration-300 no-underline"
          >
            Start Your Project
          </a>
          <a
            href="#work"
            className="px-6 py-4 text-[var(--text-color)] font-semibold text-xs uppercase tracking-wider hover:text-[var(--primary)] transition-colors no-underline flex items-center gap-2 rounded-xl border border-[var(--card-border)] bg-[var(--card-bg)] backdrop-blur-sm hover:border-[var(--primary)]/50"
          >
            <span>Explore Work</span>
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>

      {/* Right Stats & Performance Grid */}
      <div className="lg:col-span-5 flex flex-col justify-center">
        <div className="grid grid-cols-2 rounded-2xl border border-[var(--card-border)] bg-[var(--card-bg)] backdrop-blur-md overflow-hidden divide-x divide-y divide-[var(--card-border)]">
          {[
            { num: "50+", label: "Delivered WebApps", sub: "Production Grade" },
            { num: "3.8×", label: "Average Client ROAS", sub: "Paid Growth" },
            { num: "24h", label: "Sprint Response", sub: "Agile Delivery" },
            { num: "100%", label: "System Uptime", sub: "Fault Tolerant" },
          ].map((s, i) => (
            <div
              key={i}
              className="p-6 md:p-8 flex flex-col justify-between hover:bg-[var(--primary-glow)] transition-colors"
            >
              <div className="text-3xl md:text-4xl font-bold text-[var(--primary)] mb-2 font-mono">
                {s.num}
              </div>
              <div>
                <div className="text-xs md:text-sm font-semibold uppercase tracking-wider text-[var(--text-color)]">
                  {s.label}
                </div>
                <div className="text-[0.7rem] text-[var(--text-secondary)] font-mono uppercase mt-0.5">
                  {s.sub}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll down indicator */}
      <div className="hidden lg:flex absolute bottom-4 left-1/2 -translate-x-1/2 flex-col items-center gap-2 text-[var(--text-secondary)] text-[0.7rem] uppercase tracking-widest font-mono">
        <span>Scroll</span>
        <div className="w-[1px] h-8 bg-gradient-to-b from-[var(--primary)] to-transparent animate-scroll-line" />
      </div>
    </section>
  );
}
