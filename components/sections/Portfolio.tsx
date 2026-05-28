import PortfolioGallery from "@/components/sections/PortfolioGallery";

export default function Portfolio() {
  return (
    <section
      id="gallery"
      className="py-24 md:py-32 bg-black overflow-hidden relative"
      aria-label="Artist Portfolio"
    >
      <div className="max-w-site mx-auto px-5 md:px-16 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 md:mb-24 gap-6">
          <div className="max-w-xl">
            <h2 className="font-serif text-[clamp(32px,5vw,48px)] font-normal text-on-surface">
              Past Work
            </h2>
            <p className="text-[18px] leading-relaxed text-on-surface-muted mt-3">
              A curated collection of masterful applications across realism,
              fine line, and neo-traditional styles.
            </p>
          </div>
          <div className="flex gap-3" aria-label="Style filters">
            {["Realism", "Minimalist"].map((tag) => (
              <span
                key={tag}
                className="px-4 py-1.5 bg-white/5 border border-white/10 text-xs font-semibold tracking-widest uppercase text-on-surface-muted rounded-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <PortfolioGallery />
      </div>

      {/* Fade edges */}
      <div
        className="absolute inset-0 pointer-events-none bg-gradient-to-b from-black/30 via-transparent to-black/30"
        aria-hidden="true"
      />
    </section>
  );
}
