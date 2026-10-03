const ticker = [
  "Website & WebApp Engineering",
  "Headless E-Commerce",
  "n8n & AI Automations",
  "Meta & Google Paid Acquisition",
  "Brand Identity & Creative Sprints",
  "Next.js Architecture",
  "Supabase & PostgreSQL Systems",
];

export default function Marquee() {
  const doubled = [...ticker, ...ticker];

  return (
    <div
      aria-hidden="true"
      className="bg-[var(--card-bg)] border-y-2 border-[var(--primary)] overflow-hidden py-3 select-none"
    >
      <div className="flex gap-10 w-max animate-marquee">
        {doubled.map((item, i) => (
          <span
            key={i}
            className="text-xs md:text-sm font-black uppercase tracking-widest text-[var(--text-color)] whitespace-nowrap flex items-center gap-4 after:content-['✦'] after:text-[var(--primary)] after:text-xs"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
