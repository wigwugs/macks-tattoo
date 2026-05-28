"use client";

import { useCallback, useEffect, useState } from "react";
import { createPortal } from "react-dom";

const IMAGES = [
  { src: "/images/portfolio/01.png", alt: "Black & grey realism tattoo" },
  { src: "/images/portfolio/02.png", alt: "Fine line back tattoo" },
  { src: "/images/portfolio/03.png", alt: "Illustrative color sleeve" },
  { src: "/images/portfolio/04.png", alt: "Illustrative colorful piece" },
  { src: "/images/portfolio/05.png", alt: "Shark tattoo" },
  { src: "/images/portfolio/06.png", alt: "Traditional bold tattoo" },
  { src: "/images/portfolio/07.png", alt: "Illustration tattoo" },
  { src: "/images/portfolio/08.png", alt: "Illustrative arm tattoo" },
  { src: "/images/portfolio/09.png", alt: "Fine line work" },
  { src: "/images/portfolio/10.png", alt: "Neo-traditional tattoo piece" },
  { src: "/images/portfolio/11.png", alt: "Piercing" },
  { src: "/images/portfolio/12.png", alt: "Black line tattoo" },
  { src: "/images/portfolio/13.png", alt: "Fine line" },
  { src: "/images/portfolio/14.png", alt: "Decorative floral tattoo" },
  { src: "/images/portfolio/15.png", alt: "Decorative floral tattoo" },
  { src: "/images/portfolio/16.png", alt: "Decorative floral tattoo" },
];

export default function PortfolioGallery() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [mounted, setMounted] = useState(false);

  const close = useCallback(() => setSelectedIndex(null), []);
  const selected = selectedIndex !== null ? IMAGES[selectedIndex] : null;

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (selectedIndex === null) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [selectedIndex, close]);

  return (
    <>
      <ul
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-1 md:gap-2"
        aria-label="Portfolio images"
      >
        {IMAGES.map((img, i) => (
          <li key={img.src} className="overflow-hidden aspect-square bg-surface-mid">
            <button
              type="button"
              onClick={() => setSelectedIndex(i)}
              className="group block w-full h-full cursor-zoom-in focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold focus-visible:outline-offset-[-2px]"
              aria-label={`View larger: ${img.alt}`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={img.src}
                alt={img.alt}
                className="portfolio-img w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
                decoding="async"
              />
            </button>
          </li>
        ))}
      </ul>

      {mounted &&
        selected &&
        createPortal(
          <div
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8 bg-black/50 backdrop-blur-md"
            role="dialog"
            aria-modal="true"
            aria-label={selected.alt}
            onClick={close}
          >
            <button
              type="button"
              onClick={close}
              className="absolute top-4 right-4 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-black/60 text-on-surface transition-colors hover:border-gold/40 hover:text-gold focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold"
              aria-label="Close image"
            >
              <span className="text-2xl leading-none" aria-hidden="true">
                &times;
              </span>
            </button>

            <figure
              className="relative flex max-h-full max-w-5xl flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={selected.src}
                alt={selected.alt}
                className="max-h-[min(85vh,900px)] w-auto max-w-full object-contain"
              />
              <figcaption className="mt-4 text-center text-sm text-on-surface-muted">
                {selected.alt}
              </figcaption>
            </figure>
          </div>,
          document.body
        )}
    </>
  );
}
