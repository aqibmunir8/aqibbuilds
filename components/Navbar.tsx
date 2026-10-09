"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled((window.scrollY || 0) > 40);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [menuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-5 ${
          scrolled
            ? "bg-[var(--bg)]/85 backdrop-blur-md border-b border-[var(--line)] py-4"
            : ""
        }`}
      >
        <div className="wrap flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2.5 font-semibold text-base tracking-tight text-[var(--ink)]"
          >
            <span className="w-2 h-2 rounded-full bg-[var(--gold)] shadow-[0_0_8px_var(--gold)]" />
            AqibBuilds
          </Link>

          <nav className="hidden md:flex items-center gap-7 text-[13px] tracking-wide text-[var(--muted)]">
            <Link href="/" className="hover:text-[var(--ink)] transition-colors">
              Home
            </Link>
            <Link href="/#services" className="hover:text-[var(--ink)] transition-colors">
              What We Do
            </Link>
            <Link href="/portfolio" className="hover:text-[var(--ink)] transition-colors">
              Portfolio
            </Link>
            <Link href="/#process" className="hover:text-[var(--ink)] transition-colors">
              Process
            </Link>
            <Link href="/#contact" className="hover:text-[var(--ink)] transition-colors">
              Contact
            </Link>
          </nav>

          <div className="flex items-center gap-4">
            <Link
              href="/#contact"
              className="hidden sm:inline-flex text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full border border-[var(--line)] text-[var(--ink)] hover:border-[var(--gold)] hover:text-[var(--gold)] transition-colors"
            >
              Start a project
            </Link>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="p-2 text-[var(--ink)] focus:outline-none md:hidden"
              aria-label="Toggle menu"
            >
              <div className="w-6 h-4 flex flex-col justify-between">
                <span
                  className={`w-full h-0.5 bg-current transition-transform duration-300 ${
                    menuOpen ? "rotate-45 translate-y-1.5" : ""
                  }`}
                />
                <span
                  className={`w-full h-0.5 bg-current transition-opacity duration-300 ${
                    menuOpen ? "opacity-0" : ""
                  }`}
                />
                <span
                  className={`w-full h-0.5 bg-current transition-transform duration-300 ${
                    menuOpen ? "-rotate-45 -translate-y-2" : ""
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Fullscreen Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-[var(--bg)] flex flex-col justify-between p-8 md:hidden transition-all duration-500 ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        aria-hidden={!menuOpen}
      >
        <div className="pt-20 flex flex-col gap-6">
          <Link
            href="/"
            onClick={() => setMenuOpen(false)}
            className="serif text-3xl sm:text-4xl text-[var(--ink)] hover:text-[var(--gold)] transition-colors"
          >
            Home
          </Link>
          <Link
            href="/#services"
            onClick={() => setMenuOpen(false)}
            className="serif text-3xl sm:text-4xl text-[var(--ink)] hover:text-[var(--gold)] transition-colors"
          >
            What We Do
          </Link>
          <Link
            href="/portfolio"
            onClick={() => setMenuOpen(false)}
            className="serif text-3xl sm:text-4xl text-[var(--ink)] hover:text-[var(--gold)] transition-colors"
          >
            Portfolio
          </Link>
          <Link
            href="/#process"
            onClick={() => setMenuOpen(false)}
            className="serif text-3xl sm:text-4xl text-[var(--ink)] hover:text-[var(--gold)] transition-colors"
          >
            Process
          </Link>
          <Link
            href="/#contact"
            onClick={() => setMenuOpen(false)}
            className="serif text-3xl sm:text-4xl text-[var(--ink)] hover:text-[var(--gold)] transition-colors"
          >
            Contact
          </Link>
        </div>

        <div className="pt-8 border-t border-[var(--line)]">
          <p className="text-xs uppercase tracking-widest text-[var(--muted)] mb-1">Inquiries</p>
          <a
            href="mailto:hello@aqibbuilds.com"
            className="text-base font-medium text-[var(--gold)] hover:underline"
          >
            hello@aqibbuilds.com
          </a>
        </div>
      </div>
    </>
  );
}
