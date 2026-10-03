export default function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 border-t border-[var(--card-border)] px-6 md:px-12">
      <div className="max-w-[1400px] mx-auto">
        <div className="max-w-[720px] mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-[var(--primary)] mb-3 block">
            Initiate Project
          </span>
          <h2 className="text-[clamp(2.2rem,5vw,4.25rem)] font-extrabold leading-[1.05] tracking-tight text-[var(--text-color)] mb-4">
            Let&apos;s Build Something.<br />
            <em className="font-playfair font-bold italic text-[var(--primary)] not-italic">
              Remarkable.
            </em>
          </h2>
          <p className="text-base text-[var(--text-secondary)] leading-relaxed">
            Have a project in mind, need to automate manual workflows, or scale qualified customer acquisition? Send a direct message and let&apos;s talk numbers.
          </p>
        </div>

        <div className="rounded-2xl border border-[var(--card-border)] bg-[var(--card-bg)] backdrop-blur-md p-8 md:p-14 max-w-[900px]">
          <div className="mb-10">
            <span className="text-xs font-semibold uppercase tracking-widest text-[var(--primary)] mb-3 block">
              Direct Inquiries
            </span>
            <a
              href="mailto:contactaqib7@gmail.com"
              data-hover="Send Email"
              className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-[var(--text-color)] hover:text-[var(--primary)] transition-colors underline underline-offset-8 decoration-2 break-all"
            >
              contactaqib7@gmail.com
            </a>
          </div>

          <div className="pt-8 border-t border-[var(--card-border)] flex flex-wrap items-center gap-6 md:gap-10">
            <a
              href="https://github.com/aqibmunir8"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs md:text-sm font-semibold uppercase tracking-wider text-[var(--text-color)] hover:text-[var(--primary)] transition-colors flex items-center gap-2"
            >
              <span>GitHub</span>
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M7 17l10-10M17 17V7H7" />
              </svg>
            </a>

            <a
              href="https://www.linkedin.com/in/aqibmunir/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs md:text-sm font-semibold uppercase tracking-wider text-[var(--text-color)] hover:text-[var(--primary)] transition-colors flex items-center gap-2"
            >
              <span>LinkedIn</span>
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M7 17l10-10M17 17V7H7" />
              </svg>
            </a>

            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs md:text-sm font-semibold uppercase tracking-wider text-[var(--text-color)] hover:text-[var(--primary)] transition-colors flex items-center gap-2"
            >
              <span>Twitter / X</span>
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M7 17l10-10M17 17V7H7" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
