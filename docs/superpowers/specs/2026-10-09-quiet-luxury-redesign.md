# Design Specification: AqibBuilds Quiet Luxury Portfolio & Labs Redesign

- **Date**: 2026-10-09
- **Project**: AqibBuilds Next.js Website (`aqibbuilds`)
- **Reference**: `public/reference/aqibbuilds-labs (2).html`
- **Target Tech Stack**: Next.js 16 (App Router), React 19, Tailwind CSS v4, `next/font/google`, Lenis Smooth Scroll

---

## 1. Executive Summary & Design Vision
Replace the existing default components with a high-end, quiet luxury editorial design mirroring `aqibbuilds-labs (2).html`. The design language pairs refined serif headlines (`Instrument Serif`) with a minimalist geometric sans (`Instrument Sans`), an ultra-dark obsidian foundation (`#080808`), warm gold accents (`#ffc430`), an ambient atmospheric nebula, subtle film grain noise, smooth inertial scrolling, and responsive physics-like micro-interactions.

---

## 2. Architecture & Design Tokens

### 2.1 CSS Custom Properties (`app/globals.css`)
```css
:root {
  --bg: #080808;
  --panel: #0f0f0f;
  --panel-2: #141414;
  --ink: #fffefc;
  --muted: rgba(255, 254, 252, 0.62);
  --faint: rgba(255, 254, 252, 0.38);
  --gold: #ffc430;
  --gold-soft: rgba(255, 196, 48, 0.12);
  --line: rgba(255, 254, 252, 0.1);
  --max: 1180px;
}
```

### 2.2 Typography System (`app/layout.tsx`)
- Headings & Editorial Accents: `Instrument_Serif` (italic) loaded via `next/font/google` assigned to `--font-serif`.
- Interface & Body Text: `Instrument_Sans` (weights: 400, 500, 600, 700) loaded via `next/font/google` assigned to `--font-sans`.

---

## 3. Component Hierarchy & Directory Structure

```
app/
├── globals.css              # Tokens, animations (spin, float, grain, rise), base styles
├── layout.tsx               # Next.js font setup, meta tags, and root wrappers
└── page.tsx                 # Composed layout matching reference sequence
components/
├── ambient/
│   ├── Nebula.tsx           # Multi-radial ambient gradient with breathing keyframe
│   └── Grain.tsx            # Animated SVG fractal noise overlay
├── providers/
│   └── SmoothScroll.tsx     # Lenis smooth scroll provider with reduced-motion support
├── Navbar.tsx               # Sticky glass nav + Fullscreen mobile/drawer menu
├── Hero.tsx                 # Headline letters stagger reveal, rotating SVG badge, shards
├── Marquee.tsx              # Continuous client logo ticker
├── Services.tsx             # Tabbed showcase with auto-timer and image carousel
├── ParallaxStatement.tsx    # Scroll-driven background parallax statement banner
├── Process.tsx              # Sticky stacked cards with dimming observer
├── CTA.tsx                  # Luxury contact panel with direct action
├── Footer.tsx               # Editorial footer, timestamp, large watermark branding
└── CustomCursor.tsx         # Lerp-smoothed cursor with hover expansion
```

---

## 4. Key Subsystems & Behaviors

### 4.1 Ambient Atmosphere & Visual FX
1. **Nebula**: Fixed backdrop featuring four distinct radial gradients with a 70px blur filter and subtle scale/opacity breathing animation (`nebPulse`).
2. **Film Grain**: Inline SVG `<feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="2" />` rendered via CSS `mix-blend-mode: overlay` at 0.05 opacity with step animation.
3. **Floating Shards**: Geometrically positioned polygon shards with sinusoidal floating keyframes (`floatA`, `floatB`).

### 4.2 Motion & Smooth Scroll
1. **Lenis Integration**: Client component wrapping layout or body to handle inertial scrolling, disabled automatically when `prefers-reduced-motion: reduce` is detected.
2. **Custom Invert Cursor**: Tracks pointer with lerp smoothing `cx += (mx - cx) * 0.2`, expanding from a 12px gold dot to a 48px difference-blend circle over interactive anchors and buttons.
3. **Hero Letter Stagger**: Title letters dynamically wrapped and delayed using CSS variable index for fluid upwards reveal.

### 4.3 Interactive Sections
1. **Services Showcase**:
   - 4 service tabs: Web Development, UI/UX & Brand Design, Automation, Paid Ads.
   - Synchronized stage cards with background images, editorial tags, and feature pills.
   - 5.2s auto-cycle timer pausing on hover; instant switch on manual tab click.
2. **Sticky Process Stacking**:
   - CSS `position: sticky` with incremental top offset `calc(84px + var(--i) * 22px)`.
   - IntersectionObserver and scroll listener toggling `.behind` class on cards beneath newer sticky cards.
3. **Parallax Banner**:
   - Image translated by `delta * 0.22` and text countered by `delta * -0.07` relative to viewport center.

---

## 5. Non-Functional & Quality Constraints
- **Performance**: Zero heavy external animation runtime; strictly native CSS transforms and `requestAnimationFrame`.
- **Accessibility**: Complete keyboard navigation for fullscreen menu and service tabs; `aria-expanded` and `aria-hidden` attributes managed. Full compliance with `prefers-reduced-motion`.
- **Responsive**: Mobile-first fluid scaling with responsive layouts across mobile (<768px), tablet (<1024px), and desktop.
