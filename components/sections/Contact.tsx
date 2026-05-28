import Button from "@/components/ui/Button";
import { SITE } from "@/lib/data";

const MAP_PLACEHOLDER =
  "images/map.png";

const CONTACT_DETAILS = [
  {
    icon: "location_on",
    label: "Address",
    content: SITE.address,
    href: SITE.googleMapsUrl,
  },
  {
    icon: "call",
    label: "Phone",
    content: SITE.phone,
    href: `tel:${SITE.phone.replace(/\D/g, "")}`,
  },
  {
    icon: "schedule",
    label: "Hours",
    lines: SITE.hours.map((h) => `${h.label}: ${h.time}`),
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-24 md:py-32 bg-background border-t border-white/10 px-5 md:px-16"
      aria-label="Find the Studio"
    >
      <div className="max-w-site mx-auto grid md:grid-cols-2 gap-12 md:gap-20 items-center">
        {/* Map image */}
        <div className="relative overflow-hidden border border-white/10 group aspect-video md:aspect-auto md:h-[480px]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="images/map.png"
            alt="Studio map — 146 N 100 W, Cedar City, UT 84720"
            className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:translate-y-[-3px] transition-opacity transition-transform duration-500"
            loading="lazy"
          />
          <div
            className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none"
            aria-hidden="true"
          />
          {/* Overlay CTA to open real maps */}
          <a
            href={SITE.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute inset-0"
            aria-label="Open in Google Maps"
          />
        </div>

        {/* Details */}
        <div className="space-y-10">
          <div>
            <h2 className="font-serif text-[clamp(32px,5vw,48px)] font-normal text-on-surface mb-4">
              Find the Studio
            </h2>
            <p className="text-[18px] leading-relaxed text-on-surface-muted max-w-sm">
              Visit us in the heart of Cedar City for a consultation or to start
              your next piece.
            </p>
          </div>

          <address className="not-italic space-y-6">
            {CONTACT_DETAILS.map((detail) => (
              <div key={detail.label} className="flex items-start gap-4">
                <span
                  className="material-symbols-outlined text-gold mt-0.5 shrink-0"
                  aria-hidden="true"
                >
                  {detail.icon}
                </span>
                <div>
                  <p className="text-xs font-semibold tracking-widest uppercase text-gold mb-1">
                    {detail.label}
                  </p>
                  {detail.href ? (
                    <a
                      href={detail.href}
                      className="text-[18px] text-on-surface hover:text-gold transition-colors"
                      target={detail.icon === "location_on" ? "_blank" : undefined}
                      rel={detail.icon === "location_on" ? "noopener noreferrer" : undefined}
                    >
                      {detail.content}
                    </a>
                  ) : (
                    detail.lines?.map((line, i) => (
                      <p
                        key={i}
                        className={`text-[18px] ${
                          i === 0 ? "text-on-surface" : "text-on-surface-muted"
                        }`}
                      >
                        {line}
                      </p>
                    ))
                  )}
                </div>
              </div>
            ))}
          </address>

          <Button
            as="a"
            href={SITE.googleMapsUrl}
            size="lg"
            target="_blank"
            rel="noopener noreferrer"
          >
            Get Directions
          </Button>
        </div>
      </div>
    </section>
  );
}
