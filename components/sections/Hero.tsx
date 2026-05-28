import Button from "@/components/ui/Button";
import { SITE } from "@/lib/data";

const HERO_CENTER = {
  src: "/images/hero/illustration-landscape.png",
  alt: "Featured tattoo illustration – landscape",
};

const HERO_FLOATING = [
  {
    src: "/images/hero/illustration-leaves.png",
    alt: "",
    className:
      "absolute top-[8%] left-[4%] w-28 -rotate-12 z-20 opacity-70 grayscale",
  },
  {
    src: "/images/hero/illustration-butterfly.png",
    alt: "",
    className:
      "absolute top-[4%] right-[8%] w-36 rotate-6 z-20 opacity-70 grayscale",
  },
  {
    src: "/images/hero/illustration-sword.png",
    alt: "",
    className:
      "absolute top-1/2 -translate-y-1/2 right-0 w-24 z-30 drop-shadow-2xl",
  },
  {
    src: "/images/hero/illustration-shark.png",
    alt: "",
    className: "absolute bottom-[12%] left-[4%] w-44 -rotate-6 z-20",
  },
  {
    src: "/images/hero/illustration-spider.png",
    alt: "",
    className: "absolute bottom-[8%] right-[14%] w-28 rotate-12 z-20",
  },
];

export default function Hero() {
  return (
    <header
      className="relative min-h-screen flex items-center pt-16 overflow-hidden bg-background px-5 md:px-16"
      aria-label="Hero"
    >
      <div className="max-w-site mx-auto w-full py-24 md:py-32 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-6 items-center">
          {/* — Left: copy — */}
          <div className="lg:col-span-5 space-y-10">
            {/* Location badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-gold/10 border border-gold/20 text-gold text-xs font-semibold tracking-[0.2em] uppercase">
              <span className="w-1.5 h-1.5 bg-gold rounded-full" aria-hidden="true" />
              Cedar City, Utah
            </div>

            {/* Headline */}
            <div>
              <h1 className="font-serif text-[clamp(64px,10vw,100px)] leading-[0.9] tracking-tighter font-normal text-on-surface">
                Mack&apos;s
                <br />
                <em className="text-gold not-italic ml-8">Tattoos</em>
              </h1>
            </div>

            {/* Sub-tagline */}
            <div className="flex items-start gap-6 border-l border-white/10 pl-6">
              <span
                className="font-serif text-4xl leading-none text-gold shrink-0"
                aria-label="20 plus"
              >
                20+
              </span>
              <p className="text-[18px] leading-relaxed text-on-surface-muted max-w-xs">
                {SITE.description}
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Button as="a" href={SITE.bookingUrl} size="lg">
                Book a Session
              </Button>
              <Button as="a" href="#gallery" size="lg" variant="ghost">
                View Portfolio
              </Button>
            </div>
          </div>

          {/* — Right: image collage — */}
          <div
            className="lg:col-span-7 relative h-[520px] md:h-[640px]"
            aria-hidden="true"
          >
            {/* Central circular image */}
            <div
              className="absolute z-10 w-[78%] max-w-480px"
              style={{ top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={HERO_CENTER.src}
                alt={HERO_CENTER.alt}
                className="w-full h-full object-cover brightness-90 contrast-110"
                loading="eager"
              />
            </div>

            {/* Floating accent illustrations */}
            {HERO_FLOATING.map((img) => (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                key={img.src}
                src={img.src}
                alt={img.alt}
                className={img.className}
                loading="lazy"
              />
            ))}

            {/* Subtle ambient glow */}
            <div
              className="absolute inset-0 rounded-full blur-[160px] -z-10 opacity-10 bg-gold"
              aria-hidden="true"
            />
          </div>
        </div>
      </div>

      {/* Watermark typography */}
      <div
        className="absolute bottom-0 right-0 opacity-[0.02] pointer-events-none select-none translate-y-1/4"
        aria-hidden="true"
      >

      </div>
    </header>
  );
}
