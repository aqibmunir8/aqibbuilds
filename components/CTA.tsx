export default function CTA() {
  return (
    <section id="contact" className="pt-24 pb-0 relative z-10">
      <div className="wrap">
        <div className="relative z-20 text-center rounded-[25px] border border-[var(--line)] bg-[#0c0c0c] py-24 px-8 sm:px-12 -mb-16 overflow-hidden shadow-2xl">
          {/* Subtle gold glow behind CTA */}
          <div
            className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(255,196,48,0.14),transparent_60%)] pointer-events-none"
            aria-hidden="true"
          />

          <div className="sec-kicker justify-center mb-4">Work With Us Today</div>

          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-normal tracking-tight text-[var(--ink)] max-w-4xl mx-auto my-5 leading-[1.05]">
            Ready to <span className="serif text-[var(--gold)]">upgrade?</span>
          </h2>

          <p className="max-w-xl mx-auto text-base sm:text-lg text-[var(--muted)] leading-relaxed mb-10 font-normal">
            Dive into the future with AqibBuilds. Get in touch and build out a smarter, more automated business — starting with a free homepage mockup.
          </p>

          <a
            href="mailto:hello@aqibbuilds.com"
            className="btn text-base sm:text-lg py-4 px-9 inline-flex items-center gap-3"
          >
            hello@aqibbuilds.com <span className="text-xl">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
