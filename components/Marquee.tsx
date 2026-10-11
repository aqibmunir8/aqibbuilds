"use client";

import React from "react";
import { CLIENT_LOGOS } from "./ClientLogos";

export default function Marquee() {
  return (
    <section
      id="work"
      aria-label="Clients we've worked with"
      className="w-full border-y border-[var(--line)] bg-[var(--bg)]/90 backdrop-blur-md py-4 sm:py-5 overflow-hidden relative z-10"
    >
      <div className="flex flex-col md:flex-row md:items-center w-full">
        {/* Left Badge: Anchored on the left */}
        <div className="flex items-center shrink-0 px-4 sm:px-6 md:pl-8 md:pr-6 border-b md:border-b-0 md:border-r border-white/10 pb-3 md:pb-0 mb-3 md:mb-0">
          <span className="w-0.5 h-3.5 bg-[var(--gold)] mr-2.5 rounded-full inline-block" />
          <span className="text-[11px] sm:text-xs font-semibold tracking-[0.2em] text-white/90 whitespace-nowrap select-none uppercase">
            CLIENTS WE&apos;VE WORKED WITH
          </span>
        </div>

        {/* Marquee ticker track */}
        <div className="relative w-full flex-1 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_4%,black_96%,transparent)]">
          <div className="flex w-max animate-marquee-smooth items-center">
            {/* Track 1 */}
            <div className="flex items-center gap-14 sm:gap-20 md:gap-24 pr-14 sm:pr-20 md:pr-24 shrink-0">
              {CLIENT_LOGOS.map((client, idx) => {
                const LogoComponent = client.render;
                return (
                  <div
                    key={`t1-${client.name}-${idx}`}
                    className="client-logo-item flex items-center justify-center text-white/45 hover:text-white transition-all duration-300 transform hover:scale-105 cursor-pointer shrink-0"
                    title={client.name}
                  >
                    <LogoComponent className="h-7 sm:h-8 w-auto max-w-[190px] transition-opacity" />
                  </div>
                );
              })}
            </div>

            {/* Track 2 (seamless duplication for infinite loop) */}
            <div className="flex items-center gap-14 sm:gap-20 md:gap-24 pr-14 sm:pr-20 md:pr-24 shrink-0" aria-hidden="true">
              {CLIENT_LOGOS.map((client, idx) => {
                const LogoComponent = client.render;
                return (
                  <div
                    key={`t2-${client.name}-${idx}`}
                    className="client-logo-item flex items-center justify-center text-white/45 hover:text-white transition-all duration-300 transform hover:scale-105 cursor-pointer shrink-0"
                    title={client.name}
                  >
                    <LogoComponent className="h-7 sm:h-8 w-auto max-w-[190px] transition-opacity" />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
