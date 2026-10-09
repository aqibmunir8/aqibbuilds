"use client";

import { useEffect } from "react";
import Lenis from "lenis";

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;

    const lenis = new Lenis({
      duration: 1.0,
      smoothWheel: true,
      wheelMultiplier: 1.1,
      touchMultiplier: 1.5,
    });

    let rafId: number;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    // Scroll if arrived with a hash in URL (e.g., from another page /#services)
    if (window.location.hash) {
      setTimeout(() => {
        const targetEl = document.querySelector(window.location.hash);
        if (targetEl) {
          lenis.scrollTo(targetEl as HTMLElement, { offset: -70 });
        }
      }, 100);
    }

    const handleAnchorClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest('a[href*="#"]');
      if (!target) return;
      const href = target.getAttribute("href");
      if (!href || href === "#") return;

      const hashIndex = href.indexOf("#");
      if (hashIndex === -1) return;

      const path = href.substring(0, hashIndex);
      const hash = href.substring(hashIndex);

      // Check if this hash is on the current page
      const isCurrentPage =
        !path ||
        path === "/" ||
        path === window.location.pathname ||
        (path === "/" && window.location.pathname === "/");

      if (isCurrentPage && hash.length > 1) {
        const el = document.querySelector(hash);
        if (el) {
          e.preventDefault();
          // Update URL hash without jumping
          window.history.pushState(null, "", hash);
          lenis.scrollTo(el as HTMLElement, { offset: -70 });
        }
      }
    };

    document.addEventListener("click", handleAnchorClick);

    return () => {
      document.removeEventListener("click", handleAnchorClick);
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
