import Link from "next/link";

export default function CTA() {
  return (
    <section id="contact" className="py-24 relative">
      <div className="wrap">
        <div className="rounded-3xl border border-[var(--line)] bg-[var(--panel)] p-10 sm:p-16 lg:p-20 relative overflow-hidden text-center flex flex-col items-center">
          {/* Subtle gold glow behind CTA */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[var(--gold)]/10 rounded-full blur-[100px] pointer-events-none"
            aria-hidden="true"
          />

          <div className="sec-kicker justify-center mb-6">Work With Us Today</div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-[var(--ink)] max-w-3xl mb-6">
            Ready to <span className="serif text-[var(--gold)]">upgrade your digital presence?</span>
          </h2>

          <p className="max-w-2xl text-sm sm:text-base text-[var(--muted)] leading-relaxed mb-10">
            Partner with AqibBuilds to build out a sharper, automated, high-converting digital footprint — starting with a complimentary concept review.
          </p>

          <a
            href="mailto:hello@aqibbuilds.com"
            className="btn text-base py-4 px-8 inline-flex items-center gap-3"
          >
            hello@aqibbuilds.com <span className="text-lg">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
