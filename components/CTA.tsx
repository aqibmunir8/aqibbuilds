export default function CTA() {
  return (
    <section id="cta" className="bg-[#EC4899] border-b-2 border-black text-center py-[clamp(5rem,10vw,8rem)] px-[clamp(1.5rem,6vw,4rem)]">
      <div className="max-w-[700px] mx-auto">
        <h2 className="text-[clamp(2.25rem,5vw,4rem)] font-black leading-[1.05] tracking-[-0.03em] text-black mb-4">
          Ready to Scale Your<br />
          <em className="font-[family-name:var(--font-playfair)] font-bold italic text-white not-italic drop-shadow-[2px_2px_0px_#000]">
            Business Online?
          </em>
        </h2>
        <p className="text-[1.125rem] text-black/85 max-w-[540px] mx-auto mb-10 leading-[1.7]">
          Schedule a direct 30-minute discovery call with our lead technical &amp; growth engineers. Let&apos;s map out your exact growth roadmap.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <a
            href="mailto:hello@aqibbuilds.com"
            className="bg-black text-white font-black text-[0.875rem] uppercase tracking-[0.08em] px-8 py-4 border-2 border-black hover:bg-white hover:text-black transition-colors duration-150 no-underline shadow-[4px_4px_0px_rgba(0,0,0,0.2)]"
          >
            Book a Discovery Call
          </a>
          <a
            href="#portfolio"
            className="bg-transparent text-black font-extrabold text-[0.875rem] uppercase tracking-[0.08em] px-8 py-4 border-2 border-black hover:bg-black hover:text-white transition-colors duration-150 no-underline"
          >
            Explore Case Studies
          </a>
        </div>
      </div>
    </section>
  );
}
