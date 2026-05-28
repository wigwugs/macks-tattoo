import { TRUST_BADGES } from "@/lib/data";

const ICON_MAP: Record<string, string> = {
  star: "⭐️",
  thumb_up: "👍",
  verified: "✅",
};

export default function TrustBar() {
  return (
    <div
      className="border-y border-white/10 py-7 bg-surface-lowest"
      aria-label="Trust indicators"
    >
      <ul className="max-w-site mx-auto px-5 md:px-16 flex flex-wrap justify-center md:justify-around gap-8 md:gap-12 items-center">
        {TRUST_BADGES.map((badge) => (
          <li key={badge.text} className="flex items-center gap-3 opacity-70">
            <span
              className="material-symbols-outlined text-gold text-xl"
              style={badge.icon === "star" ? { fontVariationSettings: "'FILL' 1" } : undefined}
              aria-hidden="true"
            >
              {ICON_MAP[badge.icon] ?? badge.icon}
            </span>
            <span className="text-xs font-semibold tracking-widest uppercase text-on-surface">
              {badge.text}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
