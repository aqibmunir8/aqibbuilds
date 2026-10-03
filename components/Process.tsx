const steps = [
  {
    num: "01",
    title: "Discovery & Technical Audit",
    desc: "A focused 30-minute deep dive to evaluate your current sales funnel, tech stack bottlenecks, and operational overhead.",
  },
  {
    num: "02",
    title: "Roadmap & Fixed Scope",
    desc: "We deliver a comprehensive blueprint with transparent fixed pricing, exact sprint milestones, and zero hidden fees.",
  },
  {
    num: "03",
    title: "Rapid Build & Live Staging",
    desc: "Agile, high-velocity sprints with weekly staging previews so you test features and workflows live before launch.",
  },
  {
    num: "04",
    title: "Deployment & Growth Scale",
    desc: "Zero-downtime production launch, automated backups, conversion tracking activation, and ongoing optimization.",
  },
];

export default function Process() {
  return (
    <section id="process" className="py-24 md:py-32 px-6 md:px-12 border-t border-[var(--card-border)]">
      <div className="max-w-[1400px] mx-auto">
        <div className="max-w-[640px] mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-[var(--primary)] mb-3 block">
            Execution
          </span>
          <h2 className="text-[clamp(2.2rem,5vw,4.25rem)] font-extrabold leading-[1.05] tracking-tight text-[var(--text-color)] mb-4">
            Simple Process.<br />
            <em className="font-playfair font-bold italic text-[var(--primary)] not-italic">
              Serious Speed.
            </em>
          </h2>
          <p className="text-base text-[var(--text-secondary)] leading-relaxed">
            No bloated agency bureaucracy or endless meetings. You work directly with senior software &amp; growth engineers who ship quickly.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s) => (
            <div
              key={s.num}
              className="p-8 rounded-2xl border border-[var(--card-border)] bg-[var(--card-bg)] backdrop-blur-md flex flex-col justify-between hover:border-[var(--primary)]/40 hover:-translate-y-1 transition-all duration-300"
            >
              <span className="text-3xl font-bold text-[var(--primary)] font-mono mb-8 block opacity-60">
                {s.num}
              </span>
              <div>
                <h3 className="text-lg font-bold text-[var(--text-color)] mb-2">
                  {s.title}
                </h3>
                <p className="text-xs md:text-sm text-[var(--text-secondary)] leading-relaxed">
                  {s.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
