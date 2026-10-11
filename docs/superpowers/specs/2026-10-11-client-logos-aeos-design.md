# Design Specification: Clients We've Worked With Section

**Date:** 2026-10-11  
**Target:** Recreating the client logo section matching `https://labs.aeoscompany.com/` and `public/reference/clients2.png`.

---

## 1. Overview
A high-tech, minimalist client trust bar positioned directly below the Hero section. It features an anchored section title tag on the left with an amber/gold indicator line and an edge-faded infinite marquee on the right displaying the vector logos seen on Aeos Labs.

---

## 2. Layout & Typography

### Layout Structure
- **Container**: `w-full border-y border-[var(--line)] bg-[var(--bg)]/90 backdrop-blur-md py-5 sm:py-6 overflow-hidden relative z-10`
- **Inner Wrapper**: 
  - On desktop (`md:` and above): A unified flex row where the left title badge sits static at the standard site margin, accompanied by a subtle vertical divider (`h-4 w-px bg-white/10 mx-6`).
  - On mobile: A stacked column where the title badge appears at the top left, followed by the marquee ticker occupying the full width underneath.
- **Edge Fades**: Linear gradient mask on marquee viewport:
  `[mask-image:linear-gradient(to_right,transparent,black_4%,black_96%,transparent)]`

### Left Header Element
- **Indicator**: Inline vertical bar `w-0.5 h-3.5 bg-[var(--gold)] mr-2.5 rounded-full`
- **Text**: `CLIENTS WE'VE WORKED WITH`
- **Font**: Sans uppercase, `text-xs font-semibold tracking-[0.22em] text-white/90`

---

## 3. Logo Assets (SVG Components)
Defined in `components/ClientLogos.tsx`:
1. **PULSE SYS**:
   - Icon: Medical / ECG waveform line with leading and trailing connector points.
   - Typography: Bold `PULSE` with smaller uppercase monospace `SYS`.
2. **APEX CORP**:
   - Icon: Split delta / layered triangle chevron.
   - Typography: Bold sans `APEX` with spaced uppercase `CORP`.
3. **NOVA STREAM**:
   - Icon: Aperture / dual concentric target ring with center optic dot.
   - Typography: Sans `NOVA` + styled italic `STREAM`.
4. **SYNAPSE AI**:
   - Icon: Tri-node interconnected synaptic network.
   - Typography: Bold sans `SYNAPSE` + boxed pill badge `[ AI ]`.
5. **VANGUARD**:
   - Icon: Double faceted forward chevrons (`>>`).
   - Typography: Bold condensed tracking `VANGUARD`.
6. **KINETIC LABS**:
   - Icon: Orbital atom / helix ring.
   - Typography: `KINETIC` + uppercase `LABS`.

All logos render as monochromatic SVGs (`text-white/45`) with hover brightness (`hover:text-white`), smooth transition, and scaling (`hover:scale-105`).

---

## 4. Animation & Interactivity
- **Animation**: CSS infinite smooth marquee using `@keyframes marquee-smooth`.
- **Duration**: ~35 seconds for effortless, non-distracting motion.
- **Hover behavior**: Pauses or slows on hover (`hover:[animation-play-state:paused]`).

---

## 5. Verification
- Validate visual alignment against `public/reference/clients2.png`.
- Check responsive behavior at mobile (<768px) and desktop (1280px+).
- Verify clean build (`npm run build` or Next.js linting).
