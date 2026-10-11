"use client";

import { useEffect, useRef, useState } from "react";

const VIDEO_URL =
  "https://framerusercontent.com/assets/ir0Q7oyoAanvmk1VkOuq6WC7Y.mp4";

export default function ParallaxStatement() {
  const sectionRef = useRef<HTMLElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let destroyed = false;
    let stepTimer: ReturnType<typeof setInterval> | null = null;

    // Frame-by-frame stepping while buffering/delayed
    const stepFrames = () => {
      if (destroyed || !video.duration) return;
      const buffered = video.buffered;
      const bufferEnd = buffered.length > 0 ? buffered.end(buffered.length - 1) : 0;

      // Step forward slowly through available buffered frames (6fps slow stepping)
      if (video.currentTime + 0.16 <= bufferEnd) {
        video.currentTime += 0.16;
      } else if (bufferEnd > 0 && video.currentTime >= bufferEnd - 0.2) {
        // Loop back to start of buffer if waiting for more data
        video.currentTime = 0;
      }
    };

    const handleCanPlayThrough = () => {
      if (destroyed) return;
      if (stepTimer) {
        clearInterval(stepTimer);
        stepTimer = null;
      }
      setIsLoaded(true);
      video.play().catch(() => {});
    };

    const handleLoadedMetadata = () => {
      if (destroyed) return;
      // Start stepping frames as chunks arrive
      if (!stepTimer && !isLoaded) {
        stepTimer = setInterval(stepFrames, 160);
      }
    };

    video.addEventListener("loadedmetadata", handleLoadedMetadata);
    video.addEventListener("canplaythrough", handleCanPlayThrough);

    // Initial check in case it's already cached/ready
    if (video.readyState >= 4) {
      handleCanPlayThrough();
    } else {
      stepTimer = setInterval(stepFrames, 160);
    }

    return () => {
      destroyed = true;
      if (stepTimer) clearInterval(stepTimer);
      video.removeEventListener("loadedmetadata", handleLoadedMetadata);
      video.removeEventListener("canplaythrough", handleCanPlayThrough);
    };
  }, [isLoaded]);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;

    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(() => {
          ticking = false;
          if (!sectionRef.current || !bgRef.current || !innerRef.current) return;
          const r = sectionRef.current.getBoundingClientRect();
          const vh = window.innerHeight;
          if (r.bottom < 0 || r.top > vh) return;
          const d = vh / 2 - (r.top + r.height / 2);
          bgRef.current.style.transform = `translateY(${d * 0.18}px) scale(1.1)`;
          innerRef.current.style.transform = `translateY(${d * -0.06}px)`;
        });
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative my-20 py-32 overflow-hidden border-y border-[var(--line)]"
    >
      {/* Background with video and parallax translate */}
      <div
        ref={bgRef}
        className="absolute inset-0 transition-transform duration-100 ease-out pointer-events-none"
      >
        <video
          ref={videoRef}
          src={VIDEO_URL}
          playsInline
          muted
          loop
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover filter brightness-[0.25] contrast-125"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-[#080808] via-transparent to-[#080808]" />

      <div ref={innerRef} className="wrap relative z-10 text-center max-w-4xl mx-auto flex flex-col items-center">
        {/* Badge Pills */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
          <span className="inline-flex items-center px-3.5 py-1.5 rounded-full text-[11px] font-semibold uppercase tracking-[0.2em] border border-[var(--gold)]/30 bg-[var(--gold-soft)] text-[var(--gold)]">
            YOU&apos;RE IN GOOD HANDS
          </span>
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[11px] font-semibold uppercase tracking-[0.18em] border border-[var(--line)] bg-[var(--panel)]/80 text-[var(--ink)] backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)]" />
            </span>
            WE SHIP. ALL THE TIME.
          </span>
        </div>

        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-normal leading-tight tracking-tight text-[var(--ink)]">
          The AI landscape is changing fast —{" "}
          <span className="serif text-[var(--gold)]">
            we&apos;ll stay on top of it for you.
          </span>
        </h2>
        <p className="mt-8 text-base sm:text-lg text-[var(--muted)] leading-relaxed max-w-2xl mx-auto">
          Autonomous agent workflows, proprietary model tuning, and real-time integration pipelines. We run continuous experiments and ship production-ready intelligence directly into your stack.
        </p>
      </div>
    </section>
  );
}
