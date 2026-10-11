# Client Logos (Aeos Labs Style) Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Recreate the "Clients We've Worked With" section with the exact vector logos (`PULSE SYS`, `APEX CORP`, `NOVA STREAM`, `SYNAPSE AI`, `VANGUARD`, `KINETIC LABS`) and the anchored header badge layout matching `https://labs.aeoscompany.com/` and `public/reference/clients2.png`.

**Architecture:** 
- `components/ClientLogos.tsx`: Provides strongly-typed SVG logo components matching the Aeos Labs clients.
- `components/Marquee.tsx`: Renders the full-width strip with the fixed left badge (`| CLIENTS WE'VE WORKED WITH |`) and smooth infinite dual-track marquee with edge-gradient masking.
- `app/globals.css`: Ensures smooth infinite marquee keyframes and classes are defined.

**Tech Stack:** Next.js 15, React 19, Tailwind CSS, TypeScript.

---

### Task 1: Recreate Exact Vector Logos in `components/ClientLogos.tsx`

**Files:**
- Modify: `components/ClientLogos.tsx`

**Interfaces:**
- Produces: `CLIENT_LOGOS` array with objects conforming to `{ name: string, render: (props: { className?: string }) => React.JSX.Element }`.
  - Logos: `PULSE SYS`, `APEX CORP`, `NOVA STREAM`, `SYNAPSE AI`, `VANGUARD`, `KINETIC LABS`.

- [ ] **Step 1: Write the updated ClientLogos component**

Update `components/ClientLogos.tsx` with high-fidelity vector representations of each client logo from the reference:
- `PULSE SYS`: ECG waveform leading into uppercase bold `PULSE` with mono `SYS`.
- `APEX CORP`: Geometric delta chevron mark + bold `APEX` + tracked `CORP`.
- `NOVA STREAM`: Concentric dual-ring aperture icon + bold `NOVA` + italic `STREAM`.
- `SYNAPSE AI`: Connected 3-node synaptic mark + sans `SYNAPSE` + bordered `[ AI ]` badge.
- `VANGUARD`: Double chevrons + bold condensed tracking `VANGUARD`.
- `KINETIC LABS`: Orbital ring mark + sans `KINETIC` + uppercase `LABS`.

- [ ] **Step 2: Verify type correctness & linting**

Run `npm run build` or `npx tsc --noEmit` to verify type checking.

- [ ] **Step 3: Commit**

```bash
git add components/ClientLogos.tsx
git commit -m "feat(marquee): add exact vector client logos matching aeos labs reference"
```

---

### Task 2: Redesign `components/Marquee.tsx` Layout

**Files:**
- Modify: `components/Marquee.tsx`

**Interfaces:**
- Consumes: `CLIENT_LOGOS` from `components/ClientLogos.tsx`
- Produces: Default export `Marquee` component

- [ ] **Step 1: Implement the Aeos layout in Marquee.tsx**

Update `components/Marquee.tsx`:
- Wrap in full-width border strip: `w-full border-y border-[var(--line)] bg-[var(--bg)]/90 backdrop-blur-md py-4 sm:py-5 overflow-hidden relative z-10`.
- Left Badge:
  - Container with `flex items-center shrink-0 pl-4 sm:pl-6 lg:pl-10 pr-4 sm:pr-6 border-r border-white/10`.
  - Gold accent bar: `w-0.5 h-3.5 bg-[var(--gold)] mr-2.5 rounded-full inline-block`.
  - Text: `CLIENTS WE'VE WORKED WITH` (`text-[10px] sm:text-xs font-semibold tracking-[0.2em] text-white/90 whitespace-nowrap select-none`).
- Marquee viewport:
  - Flex-1 with horizontal gradient mask `[mask-image:linear-gradient(to_right,transparent,black_4%,black_96%,transparent)]`.
  - Dual duplicate tracks with `animate-marquee-smooth hover:[animation-play-state:paused]`.
  - Logo items spaced with `gap-14 sm:gap-20 md:gap-24`.
  - Logo hover state: `text-white/45 hover:text-white transition-all duration-300 transform hover:scale-105 cursor-pointer`.

- [ ] **Step 2: Verify build and runtime styles**

Run `npm run build` to verify Next.js builds with no errors.

- [ ] **Step 3: Commit**

```bash
git add components/Marquee.tsx
git commit -m "feat(marquee): implement anchored badge and continuous logo stream layout"
```

---

### Task 3: Visual & Build Verification

**Files:**
- Verify: `app/page.tsx`, `components/Marquee.tsx`, `components/ClientLogos.tsx`

- [ ] **Step 1: Run Next.js lint & build**

Run: `npm run build`
Expected: Build succeeds with 0 errors.

- [ ] **Step 2: Visual verification against reference screenshot**

Confirm that:
- Header pill badge `| CLIENTS WE'VE WORKED WITH |` aligns with the look in `public/reference/clients2.png`.
- Marquee smoothly scrolls without jitter.
- Logos look crisp and match the exact brand marks.
