import StarRating from "@/components/ui/StarRating";
import { REVIEWS } from "@/lib/data";

export default function Reviews() {
  return (
    <section
      id="reviews"
      className="py-24 md:py-32 bg-surface-lowest"
      aria-label="Client Reviews"
    >
      <div className="max-w-site mx-auto px-5 md:px-16">
        <h2 className="font-serif text-[clamp(32px,5vw,48px)] font-normal text-on-surface text-center mb-16">
          Reviews
        </h2>

        {/* Horizontal scroll carousel */}
        <div
          className="flex overflow-x-auto gap-6 pb-8 snap-x hide-scrollbar -mx-5 px-5 md:-mx-16 md:px-16"
          role="list"
          aria-label="Customer reviews"
        >
          {REVIEWS.map((review) => (
            <article
              key={review.name}
              className="w-[85vw] min-w-[250px] max-w-[400px] sm:w-[400px] snap-center bg-background thin-border p-8 md:p-10 flex-shrink-0"
              role="listitem"
            >
              <StarRating />

              <blockquote className="mt-6 mb-8">
                <p className="text-[18px] leading-relaxed font-serif italic text-on-surface">
                  &ldquo;{review.quote}&rdquo;
                </p>
              </blockquote>

              <footer className="flex items-center gap-4">
                <div
                  className="w-11 h-11 bg-white/10 rounded-full flex items-center justify-center text-sm font-bold text-gold shrink-0"
                  aria-hidden="true"
                >
                  {review.initials}
                </div>
                <div>
                  <cite className="not-italic font-serif text-lg font-normal text-on-surface block">
                    {review.name}
                  </cite>
                  <p className="text-xs font-semibold tracking-widest uppercase text-on-surface-muted mt-0.5">
                    {review.role}
                  </p>
                </div>
              </footer>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
