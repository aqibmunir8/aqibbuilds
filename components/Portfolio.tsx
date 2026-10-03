const projects = [
  {
    title: "Apex Fitness Studio & Booking Portal",
    client: "Local Health & Wellness",
    category: "Full Stack WebApp",
    description:
      "A complete member portal, online class booking system, and automated SMS reminder flow that reduced client no-shows by 42%.",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1000&h=750&fit=crop",
    tags: ["Next.js", "Supabase", "Stripe", "Twilio SMS"],
    metric: "+180% Online Bookings",
    link: "#",
  },
  {
    title: "Urban Roast Artisan Coffee Roasters",
    client: "Local F&B / E-Commerce",
    category: "Headless E-Commerce",
    description:
      "High-speed digital storefront featuring local curbside pickup selection, automated subscription renewals, and review generation.",
    image: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=1000&h=750&fit=crop",
    tags: ["Next.js Commerce", "Shopify Headless", "Klaviyo"],
    metric: "3.8× Conversion Rate",
    link: "#",
  },
  {
    title: "Vanguard Dental Care & Patient Portal",
    client: "Local Healthcare Practice",
    category: "Website & Local SEO",
    description:
      "Modern practice website with instant online appointment calendar booking, interactive smile quiz, and Google Map Pack #1 ranking.",
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=1000&h=750&fit=crop",
    tags: ["React", "TypeScript", "Google Ads", "Local SEO"],
    metric: "+95 Patients/mo",
    link: "#",
  },
  {
    title: "Luxe Auto Detailing & Fleet CRM",
    client: "Automotive Service Provider",
    category: "WebApp & Paid Ads",
    description:
      "Custom service booking flow paired with high-intent Meta Ads and automated quote follow-up sequences driving 4 weeks in advance full booking.",
    image: "https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?w=1000&h=750&fit=crop",
    tags: ["React", "Make.com", "Meta Ads", "PostgreSQL"],
    metric: "4.7× Meta ROAS",
    link: "#",
  },
];

export default function Portfolio() {
  return (
    <section id="work" className="py-24 md:py-32 px-6 md:px-12 border-t border-[var(--card-border)]">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-[var(--primary)] mb-3 block">
              Selected Work
            </span>
            <h2 className="text-[clamp(2.2rem,5vw,4.25rem)] font-extrabold leading-[1.05] tracking-tight text-[var(--text-color)]">
              Local Businesses.<br />
              <em className="font-playfair font-bold italic text-[var(--primary)] not-italic">
                Real Revenue.
              </em>
            </h2>
          </div>
          <p className="text-sm md:text-base text-[var(--text-secondary)] max-w-[420px]">
            Explore 4 of our production deployments engineered for local business growth, operations automation, and customer conversion.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
          {projects.map((item, idx) => (
            <article
              key={idx}
              className="rounded-2xl border border-[var(--card-border)] bg-[var(--card-bg)] backdrop-blur-md overflow-hidden hover:border-[var(--primary)]/40 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between p-6 md:p-8 group"
            >
              <div>
                {/* 4:3 Aspect Image */}
                <div className="w-full aspect-[4/3] overflow-hidden rounded-xl border border-[var(--card-border)] mb-6 relative bg-black/40">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-sm text-[var(--primary)] text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full border border-[var(--primary)]/30">
                    {item.category}
                  </div>
                  <div className="absolute bottom-4 right-4 bg-[var(--primary)] text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-lg">
                    {item.metric}
                  </div>
                </div>

                <h3 className="text-xl md:text-2xl font-bold text-[var(--text-color)] mb-1 group-hover:text-[var(--primary)] transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs font-semibold uppercase tracking-wider text-[var(--primary)] mb-3">
                  {item.client}
                </p>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-6">
                  {item.description}
                </p>
              </div>

              <div>
                <div className="flex flex-wrap gap-2 pt-4 border-t border-[var(--card-border)] mb-4">
                  {item.tags.map((t) => (
                    <span
                      key={t}
                      className="text-[0.7rem] font-medium px-2.5 py-1 rounded-md border border-[var(--card-border)] text-[var(--text-secondary)] bg-[var(--bg-color)]"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <a
                  href={item.link}
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[var(--text-color)] hover:text-[var(--primary)] transition-colors no-underline"
                >
                  <span>Explore Case Study</span>
                  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
