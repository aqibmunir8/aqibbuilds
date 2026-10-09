"use client";

import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const curRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const fine = window.matchMedia("(hover:hover) and (pointer:fine)").matches;
    if (!fine || reduced || !curRef.current) return;

    const cur = curRef.current;
    let mx = window.innerWidth / 2;
    let my = window.innerHeight / 2;
    let cx = mx;
    let cy = my;
    let animId: number;

    const onMouseMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });

    const loop = () => {
      cx += (mx - cx) * 0.25;
      cy += (my - cy) * 0.25;
      cur.style.transform = `translate3d(${cx}px, ${cy}px, 0) translate(-50%, -50%)`;
      animId = requestAnimationFrame(loop);
    };
    animId = requestAnimationFrame(loop);

    const onMouseOver = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest("a, button, .svc-item, .tlogo");
      if (target) cur.classList.add("big");
    };

    const onMouseOut = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest("a, button, .svc-item, .tlogo");
      if (target) cur.classList.remove("big");
    };

    document.addEventListener("mouseover", onMouseOver);
    document.addEventListener("mouseout", onMouseOut);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseover", onMouseOver);
      document.removeEventListener("mouseout", onMouseOut);
      cancelAnimationFrame(animId);
    };
  }, []);

  return <div ref={curRef} className="cur hidden md:block" aria-hidden="true" />;
}
