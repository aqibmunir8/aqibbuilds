"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("theme") as "dark" | "light" | null;
    if (saved) {
      setTheme(saved);
      document.documentElement.setAttribute("data-theme", saved);
    } else {
      document.documentElement.setAttribute("data-theme", "dark");
    }

    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    localStorage.setItem("theme", next);
    document.documentElement.setAttribute("data-theme", next);
  };

  const navLinks = [
    { name: "Services", href: "#services", hover: "What We Do" },
    { name: "Work", href: "#work", hover: "Portfolio" },
    { name: "Process", href: "#process", hover: "Workflow" },
    { name: "Why Us", href: "#why", hover: "Value" },
    { name: "Results", href: "#testimonials", hover: "Reviews" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[var(--bg-color)]/90 backdrop-blur-lg border-b border-[var(--card-border)] py-3.5 shadow-[0_4px_30px_rgba(0,0,0,0.2)]"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Brand Logo */}
        <Link
          href="/"
          className="text-xl md:text-2xl font-black tracking-tight text-[var(--text-color)] no-underline flex items-center gap-2 select-none group"
        >
          <div className="relative w-8 h-8 flex-shrink-0 transition-transform duration-300 group-hover:scale-105">
            <Image
              src="/aqibbuilds-icon-transparent.png"
              alt="AqibBuilds Logo"
              width={32}
              height={32}
              className="object-contain w-full h-full"
              priority
            />
          </div>
          <span>
            Aqib<span className="text-[var(--primary)] font-black">Builds</span>
          </span>
        </Link>

        {/* Desktop Links & Action CTA */}
        <div className="flex items-center gap-8">
          <nav aria-label="Main Navigation" className="hidden md:block">
            <ul className="flex items-center gap-8 list-none m-0 p-0">
              {navLinks.map((item) => (
                <li key={item.name} className="m-0 p-0">
                  <a
                    href={item.href}
                    data-hover={item.hover}
                    className="nav-link-roll text-[0.85rem] font-semibold uppercase tracking-wider text-[var(--text-color)] no-underline"
                  >
                    <span>{item.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-3">
            {/* Direct CTA */}
            <a
              href="#contact"
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[var(--primary)] text-white font-bold text-xs uppercase tracking-wider hover:opacity-90 hover:shadow-[0_0_20px_rgba(236,72,153,0.4)] transition-all no-underline"
            >
              Start a Project
            </a>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
              className="p-2 rounded-xl border border-[var(--card-border)] bg-[var(--card-bg)] text-[var(--text-color)] hover:border-[var(--primary)]/60 hover:text-[var(--primary)] transition-all cursor-pointer"
            >
              {theme === "dark" ? (
                <svg className="w-4 h-4 text-[var(--primary)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="5" />
                  <line x1="12" y1="1" x2="12" y2="3" />
                  <line x1="12" y1="21" x2="12" y2="23" />
                  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                  <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                  <line x1="1" y1="12" x2="3" y2="12" />
                  <line x1="21" y1="12" x2="23" y2="12" />
                  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                  <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                </svg>
              ) : (
                <svg className="w-4 h-4 text-[var(--primary)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                </svg>
              )}
            </button>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setOpen(!open)}
              aria-label="Toggle navigation"
              className="md:hidden flex flex-col justify-center gap-1.5 p-2 text-[var(--text-color)]"
            >
              <span className={`w-6 h-[2px] bg-[var(--text-color)] transition-transform duration-300 ${open ? "rotate-45 translate-y-2" : ""}`} />
              <span className={`w-6 h-[2px] bg-[var(--primary)] transition-opacity duration-300 ${open ? "opacity-0" : ""}`} />
              <span className={`w-6 h-[2px] bg-[var(--text-color)] transition-transform duration-300 ${open ? "-rotate-45 -translate-y-2" : ""}`} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out bg-[var(--card-bg)] backdrop-blur-xl border-b border-[var(--card-border)] ${
          open ? "max-h-96 opacity-100 py-6 px-6" : "max-h-0 opacity-0 py-0 px-6 pointer-events-none"
        }`}
      >
        <nav className="flex flex-col gap-3">
          {navLinks.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setOpen(false)}
              className="text-sm font-semibold uppercase tracking-wider text-[var(--text-color)] hover:text-[var(--primary)] transition-colors no-underline py-2 border-b border-[var(--card-border)]/50"
            >
              {item.name}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-3 text-center py-3 rounded-xl bg-[var(--primary)] text-white font-bold uppercase tracking-wider text-xs hover:opacity-90 transition-all no-underline shadow-[0_0_20px_rgba(236,72,153,0.3)]"
          >
            Start a Project
          </a>
        </nav>
      </div>
    </header>
  );
}
