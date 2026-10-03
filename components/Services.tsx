const services = [
  {
    num: "01",
    title: "Website & WebApp Development",
    desc: "Blazing fast, conversion-engineered web apps and marketing sites built on Next.js 16, React 19, TypeScript, and Supabase.",
    tags: ["Next.js", "React", "Node.js", "Tailwind", "Supabase"],
  },
  {
    num: "02",
    title: "E-Commerce Solutions",
    desc: "Custom headless Shopify & Next Commerce stores with seamless checkout flows, subscription club mechanics, and instant search.",
    tags: ["Shopify Headless", "Next.js Commerce", "Stripe", "Klaviyo"],
  },
  {
    num: "03",
    title: "Workflow & AI Automations",
    desc: "Eliminating manual bottlenecks with custom n8n pipelines, AI customer agents, instant CRM sync, and SMS/WhatsApp lead workflows.",
    tags: ["n8n", "Make.com", "AI Agents", "Zapier", "Custom APIs"],
  },
  {
    num: "04",
    title: "Paid Advertising & Growth",
    desc: "Multi-channel paid acquisition across Meta, Google Search, and TikTok. Engineered for high ROAS, reliable attribution, and scale.",
    tags: ["Meta Ads", "Google Ads", "Conversion API", "TikTok Ads"],
  },
  {
    num: "05",
    title: "Brand Strategy & Campaigns",
    desc: "High-impact visual identity, tone of voice, copy frameworks, and launch creative that elevate your business above competitors.",
    tags: ["Brand Identity", "Visual Direction", "Copywriting", "Launch Sprints"],
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 md:py-32 px-6 md:px-12 border-t border-[var(--card-border)]">
      <div className="max-w-[1400px] mx-auto">
        <div className="max-w-[680px] mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-[var(--primary)] mb-3 block">
            What We Deliver
          </span>
          <h2 className="text-[clamp(2.2rem,5vw,4.25rem)] font-extrabold leading-[1.05] tracking-tight text-[var(--text-color)] mb-4">
            Five Pillars.<br />
            <em className="font-playfair font-bold italic text-[var(--primary)] not-italic">
              One Growth Engine.
            </em>
          </h2>
          <p className="text-base md:text-lg text-[var(--text-secondary)] leading-relaxed">
            Every service is engineered to compound with the others — driving qualified traffic, closing customers, and automating day-to-day operations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((svc) => (
            <article
              key={svc.num}
              className="p-8 md:p-10 rounded-2xl border border-[var(--card-border)] bg-[var(--card-bg)] backdrop-blur-md flex flex-col justify-between hover:border-[var(--primary)]/40 hover:-translate-y-1 transition-all duration-300 group relative"
            >
              <div>
                <span className="text-3xl font-bold text-[var(--primary)] opacity-40 group-hover:opacity-100 font-mono mb-4 block transition-opacity">
                  {svc.num}
                </span>
                <h3 className="text-xl md:text-2xl font-bold text-[var(--text-color)] mb-3 group-hover:text-[var(--primary)] transition-colors">
                  {svc.title}
                </h3>
                <p className="text-sm md:text-base text-[var(--text-secondary)] leading-relaxed mb-8">
                  {svc.desc}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 pt-4 border-t border-[var(--card-border)]">
                {svc.tags.map((t) => (
                  <span
                    key={t}
                    className="text-[0.7rem] font-medium uppercase tracking-wider px-2.5 py-1 rounded-md bg-[var(--bg-color)] border border-[var(--card-border)] text-[var(--text-secondary)] group-hover:border-[var(--primary)]/30 group-hover:text-[var(--text-color)] transition-colors"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
