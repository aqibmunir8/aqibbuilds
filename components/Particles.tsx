"use client";

import { useEffect, useState } from "react";

export default function Particles() {
  const [particles, setParticles] = useState<
    Array<{ id: number; left: number; top: number; size: number; delay: number; duration: number }>
  >([]);

  useEffect(() => {
    // Generate static particle coordinates on mount to prevent SSR mismatch
    const pts = Array.from({ length: 18 }, (_, i) => ({
      id: i,
      left: Math.floor(Math.random() * 95),
      top: Math.floor(Math.random() * 95),
      size: Math.random() > 0.6 ? 4 : 2.5,
      delay: Math.random() * 10,
      duration: 15 + Math.random() * 15,
    }));
    setParticles(pts);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden" aria-hidden="true">
      {particles.map((p) => (
        <span
          key={p.id}
          className="absolute rounded-full bg-[var(--text-color)] opacity-20 transition-opacity"
          style={{
            left: `${p.left}%`,
            top: `${p.top}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            animation: `float-particle ${p.duration}s infinite ease-in-out ${p.delay}s`,
          }}
        />
      ))}
      <style jsx>{`
        @keyframes float-particle {
          0%, 100% {
            transform: translateY(0) translateX(0);
            opacity: 0.05;
          }
          50% {
            transform: translateY(-80px) translateX(25px);
            opacity: 0.35;
          }
        }
      `}</style>
    </div>
  );
}
