# Design Spec: AI Landscape Statement Section

## Context & Objectives
Inspired by the section on `labs.aeoscompany.com` ("The AI landscape is changing fast - we'll stay on top of it for you"), update the existing `components/ParallaxStatement.tsx` on the AqibBuilds homepage. The section conveys authority, continuous AI experimentation, and reliable delivery while matching the high-end dark luxury aesthetic (`--gold`, `--panel`, `--line`, `--ink`, `--muted`).

## Component Details (`components/ParallaxStatement.tsx`)

### Layout & Composition
- **Container**: Preserves the parallax scroll effect (translate on background and inner text relative to viewport).
- **Badges / Kickers**:
  - Top Badge: `"YOU'RE IN GOOD HANDS"` styled with `sec-kicker` / mono capsule.
  - Secondary Micro-Badge: `"WE SHIP. ALL THE TIME."` with glowing dot indicator.
- **Heading**:
  - Primary text: `The AI landscape is changing fast —`
  - Accent text: `<span className="serif text-[var(--gold)]">we'll stay on top of it for you.</span>`
- **Subtext / Copy**:
  - Concise copy highlighting continuous R&D, evaluating the newest agent models, and deploying production-grade AI systems so clients never fall behind.

## Code Constraints & Ponytail Guidelines
- Single file modification: `components/ParallaxStatement.tsx`.
- Zero new runtime dependencies; uses existing Tailwind tokens and ambient theme vars.
- Respects `prefers-reduced-motion`.
