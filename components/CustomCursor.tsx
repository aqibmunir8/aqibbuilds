"use client";

import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const [isHovered, setIsHovered] = useState(false);
  const [isIdle, setIsIdle] = useState(false);
  const [mounted, setMounted] = useState(false);

  const mousePos = useRef({ x: -100, y: -100 });
  const circlePos = useRef({ x: -100, y: -100 });
  const dotPos = useRef({ x: -100, y: -100 });
  const circleRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const idleTimer = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    // Disable on touch devices
    if (window.matchMedia("(pointer: coarse)").matches) return;
    setMounted(true);

    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      setIsIdle(false);

      if (idleTimer.current) clearTimeout(idleTimer.current);
      idleTimer.current = setTimeout(() => {
        setIsIdle(true);
      }, 2500);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (
        target?.closest("a") ||
        target?.closest("button") ||
        target?.closest(".skill-tag") ||
        target?.closest("article") ||
        target?.closest(".interactive")
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseover", handleMouseOver);

    let animationFrameId: number;

    const render = () => {
      // Lerp smooth follow physics
      const circleSpeed = 0.16;
      const dotSpeed = 0.32;

      circlePos.current.x += (mousePos.current.x - circlePos.current.x) * circleSpeed;
      circlePos.current.y += (mousePos.current.y - circlePos.current.y) * circleSpeed;

      dotPos.current.x += (mousePos.current.x - dotPos.current.x) * dotSpeed;
      dotPos.current.y += (mousePos.current.y - dotPos.current.y) * dotSpeed;

      if (circleRef.current) {
        circleRef.current.style.left = `${circlePos.current.x}px`;
        circleRef.current.style.top = `${circlePos.current.y}px`;
      }
      if (dotRef.current) {
        dotRef.current.style.left = `${dotPos.current.x}px`;
        dotRef.current.style.top = `${dotPos.current.y}px`;
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
      if (idleTimer.current) clearTimeout(idleTimer.current);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  if (!mounted) return null;

  return (
    <>
      <div
        ref={circleRef}
        className={`custom-cursor hidden md:block ${isHovered ? "cursor-hover" : ""} ${
          isIdle ? "cursor-idle" : ""
        }`}
      />
      <div
        ref={dotRef}
        className={`cursor-dot hidden md:block ${isHovered ? "cursor-dot-hover" : ""} ${
          isIdle ? "cursor-idle" : ""
        }`}
      />
    </>
  );
}
