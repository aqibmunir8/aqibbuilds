export default function Marquee() {
  const logos = [
    "TechCorp",
    "Lumina",
    "Vanguard",
    "Aura Labs",
    "Nexus AI",
    "Prism Studio",
    "Elevate",
    "Pulse",
  ];

  return (
    <div className="w-full border-y border-[var(--line)] py-6 overflow-hidden bg-[var(--panel)]/40 relative">
      <div className="flex w-max animate-[marquee_28s_linear_infinite] hover:[animation-play-state:paused]">
        <div className="flex items-center gap-16 px-8">
          {logos.map((name, i) => (
            <div
              key={i}
              className="text-sm font-semibold tracking-widest text-[var(--faint)] uppercase whitespace-nowrap hover:text-[var(--gold)] transition-colors cursor-default"
            >
              {name}
            </div>
          ))}
        </div>
        <div className="flex items-center gap-16 px-8" aria-hidden="true">
          {logos.map((name, i) => (
            <div
              key={`dup-${i}`}
              className="text-sm font-semibold tracking-widest text-[var(--faint)] uppercase whitespace-nowrap hover:text-[var(--gold)] transition-colors cursor-default"
            >
              {name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
