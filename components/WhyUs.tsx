const reasons = [
  {
    title: "Engineering Speed + Quality",
    desc: "We build modern Next.js/React web apps and automations in rapid sprints, strictly following clean code practices.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
  },
  {
    title: "Full Funnel Synchronization",
    desc: "Dev, automations, e-commerce, and paid ads all work as one cohesive ecosystem to ensure traffic converts directly into paid revenue.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <rect x="2" y="3" width="20" height="14" rx="0" />
        <path d="M8 21h8M12 17v4" />
      </svg>
    ),
  },
  {
    title: "Guaranteed Accountability",
    desc: "Fixed-price project scopes with transparent milestones. We take total ownership of delivery timelines and uptime.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    title: "No Guesswork / Data-First",
    desc: "Full telemetry, conversion tracking, and session heatmaps verify every UX adjustment and ad optimization with hard data.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <circle cx="12" cy="12" r="10" />
        <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3M12 17h.01" />
      </svg>
    ),
  },
  {
    title: "Dedicated Technical Partner",
    desc: "Direct Slack communication and real-time collaboration. We embed into your workflow as your dedicated growth team.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    title: "Revenue-Driven Focus",
    desc: "We focus exclusively on metrics that move the bottom line: customer lifetime value, lead volume, and operational cost reduction.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
  },
];

export default function WhyUs() {
  return (
    <section id="why" className="py-24 md:py-32 px-6 md:px-12 border-t border-[var(--card-border)]">
      <div className="max-w-[1400px] mx-auto">
        <div className="max-w-[640px] mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-[var(--primary)] mb-3 block">
            The Advantage
          </span>
          <h2 className="text-[clamp(2.2rem,5vw,4.25rem)] font-extrabold leading-[1.05] tracking-tight text-[var(--text-color)] mb-4">
            Built Different.<br />
            <em className="font-playfair font-bold italic text-[var(--primary)] not-italic">
              Engineered to Win.
            </em>
          </h2>
          <p className="text-base text-[var(--text-secondary)] leading-relaxed">
            We bridge the gap between engineering and performance marketing to give local businesses and online brands an unfair competitive advantage.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((r, i) => (
            <div
              key={i}
              className="p-8 rounded-2xl border border-[var(--card-border)] bg-[var(--card-bg)] backdrop-blur-md flex flex-col justify-between hover:border-[var(--primary)]/40 hover:-translate-y-1 transition-all duration-300"
            >
              <div>
                <div className="text-[var(--primary)] mb-4">{r.icon}</div>
                <h3 className="text-lg font-bold text-[var(--text-color)] mb-2">{r.title}</h3>
                <p className="text-xs md:text-sm text-[var(--text-secondary)] leading-relaxed">{r.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
