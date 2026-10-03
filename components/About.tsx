export default function About() {
  const skills = [
    "Next.js",
    "React",
    "Node.js",
    "TypeScript",
    "Tailwind CSS",
    "Express",
    "MongoDB",
    "PostgreSQL",
    "Supabase",
    "Shopify",
    "n8n / Automations",
    "REST & GraphQL APIs",
    "Meta & Google Ads",
    "Git & CI/CD",
  ];

  return (
    <section id="about" className="py-24 md:py-32 border-t border-[var(--card-border)] px-6 md:px-12">
      <div className="max-w-[1400px] mx-auto">
        <div className="max-w-[640px] mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-[var(--primary)] mb-3 block">
            Who We Are
          </span>
          <h2 className="text-[clamp(2.2rem,5vw,4.25rem)] font-extrabold leading-[1.05] tracking-tight text-[var(--text-color)] mb-4">
            Engineering Power.<br />
            <em className="font-playfair font-bold italic text-[var(--primary)] not-italic">
              Pure Execution.
            </em>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 rounded-2xl border border-[var(--card-border)] bg-[var(--card-bg)] backdrop-blur-md p-8 md:p-12">
          <div className="lg:col-span-5 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-[var(--card-border)] pb-8 lg:pb-0 lg:pr-10">
            <div>
              <div className="w-16 h-16 rounded-2xl bg-[var(--primary)] text-white font-bold text-xl flex items-center justify-center mb-6 shadow-md">
                AB
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-[var(--text-color)] mb-2">
                Aqib Munir &amp; Team
              </h3>
              <p className="text-xs font-semibold uppercase tracking-widest text-[var(--primary)] mb-6">
                Full-Stack Engineers &amp; Growth Architects
              </p>
              <p className="text-sm md:text-base text-[var(--text-secondary)] leading-relaxed mb-6">
                We combine modern software engineering with performance marketing to solve real operational bottlenecks and drive measurable revenue for businesses worldwide.
              </p>
            </div>

            <div className="pt-6 border-t border-[var(--card-border)]">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest bg-[var(--primary)] text-white px-6 py-3 rounded-xl hover:opacity-90 hover:shadow-[0_0_20px_rgba(236,72,153,0.4)] transition-all"
              >
                <span>Work With Us</span>
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>

          <div className="lg:col-span-7 flex flex-col justify-center">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-[var(--primary)] mb-6">
              Verified Technical Stack &amp; Tooling
            </h4>
            <div className="flex flex-wrap gap-2.5">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="skill-tag px-3.5 py-2 rounded-xl border border-[var(--card-border)] bg-[var(--card-bg)] text-xs md:text-sm font-medium text-[var(--text-color)] hover:border-[var(--primary)]/50 hover:text-[var(--primary)] transition-colors cursor-default select-none"
                >
                  <span className="relative z-10">{skill}</span>
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
