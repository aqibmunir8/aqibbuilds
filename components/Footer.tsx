import Image from "next/image";

export default function Footer() {
  return (
    <footer className="py-12 border-t border-[var(--card-border)] px-6 md:px-12 text-sm bg-[var(--card-bg)] backdrop-blur-md">
      <div className="max-w-[1400px] mx-auto flex flex-col sm:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-3">
          <div className="relative w-6 h-6 flex-shrink-0">
            <Image
              src="/aqibbuilds-icon-transparent.png"
              alt="AqibBuilds Logo"
              width={24}
              height={24}
              className="object-contain w-full h-full"
            />
          </div>
          <p className="text-xs md:text-sm font-medium text-[var(--text-secondary)]">
            © 2026 <strong className="text-[var(--text-color)] font-semibold">AqibBuilds</strong> / Aqib Munir. All rights reserved.
          </p>
        </div>

        <div className="flex items-center gap-6 text-xs font-semibold uppercase tracking-wider">
          <a href="#services" className="text-[var(--text-secondary)] hover:text-[var(--primary)] transition-colors">
            Services
          </a>
          <a href="#work" className="text-[var(--text-secondary)] hover:text-[var(--primary)] transition-colors">
            Work
          </a>
          <a href="#why" className="text-[var(--text-secondary)] hover:text-[var(--primary)] transition-colors">
            Why Us
          </a>
          <a href="#about" className="text-[var(--text-secondary)] hover:text-[var(--primary)] transition-colors">
            About
          </a>
          <a href="#contact" className="text-[var(--text-secondary)] hover:text-[var(--primary)] transition-colors">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}
