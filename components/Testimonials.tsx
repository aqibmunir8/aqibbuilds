const reviews = [
  {
    quote:
      "AqibBuilds rebuilt our web infrastructure and booking webapp in 3 weeks. Direct online memberships jumped by 180% in the first 60 days.",
    author: "Sarah Al-Mansoor",
    role: "Founder, Apex Fitness Studio",
    initials: "SA",
  },
  {
    quote:
      "The custom n8n automations between our CRM, lead forms, and messaging channels saved our operations team over 25 hours every single week.",
    author: "Marcus Vance",
    role: "COO, Apex Health Group",
    initials: "MV",
  },
  {
    quote:
      "Our paid ads ROAS skyrocketed from 1.3x to 4.7x. Coupled with the new headless e-commerce store, our monthly revenue doubled this quarter.",
    author: "Elena Rostova",
    role: "Marketing Director, Urban Roast Co.",
    initials: "ER",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 md:py-32 px-6 md:px-12 border-t border-[var(--card-border)]">
      <div className="max-w-[1400px] mx-auto">
        <div className="max-w-[640px] mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-[var(--primary)] mb-3 block">
            Social Proof
          </span>
          <h2 className="text-[clamp(2.2rem,5vw,4.25rem)] font-extrabold leading-[1.05] tracking-tight text-[var(--text-color)] mb-4">
            Client Stories.<br />
            <em className="font-playfair font-bold italic text-[var(--primary)] not-italic">
              Proven ROI.
            </em>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <div
              key={i}
              className="p-8 rounded-2xl border border-[var(--card-border)] bg-[var(--card-bg)] backdrop-blur-md flex flex-col justify-between hover:border-[var(--primary)]/40 hover:-translate-y-1 transition-all duration-300"
            >
              <div>
                <div className="text-4xl font-black text-[var(--primary)] font-playfair leading-none mb-4 select-none">
                  “
                </div>
                <p className="text-sm md:text-base text-[var(--text-secondary)] leading-relaxed mb-8">
                  {r.quote}
                </p>
              </div>

              <div className="flex items-center gap-3.5 border-t border-[var(--card-border)] pt-4">
                <div className="w-10 h-10 rounded-full bg-[var(--primary)] text-white font-bold flex items-center justify-center flex-shrink-0 text-sm shadow-md">
                  {r.initials}
                </div>
                <div>
                  <div className="text-sm font-bold text-[var(--text-color)]">{r.author}</div>
                  <div className="text-[0.7rem] font-medium text-[var(--text-secondary)] uppercase tracking-wider">{r.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
