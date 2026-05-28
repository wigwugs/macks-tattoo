"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Button from "@/components/ui/Button";
import { SITE } from "@/lib/data";

const NAV_LINKS = [
  { label: "Gallery", href: "#gallery" },
  { label: "Services", href: "#services" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

export default function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setMobileOpen(false);

  return (
    <>
      <nav
        className={[
          "fixed top-0 inset-x-0 z-50 glass-nav transition-colors duration-300",
          scrolled
            ? "bg-surface-lowest/90 border-b border-white/10"
            : "bg-transparent",
        ].join(" ")}
        aria-label="Main navigation"
      >
        <div className="max-w-site mx-auto px-5 md:px-16 h-16 md:h-18 flex items-center justify-between gap-8">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 shrink-0"
            aria-label={SITE.name}
          >
            {/* Text-based logo — replace with <Image> if a logo file is provided */}
            <span className="font-serif text-xl font-normal text-on-surface tracking-tight">
              Mack&apos;s{" "}
              <span className="text-gold italic">Tattoos</span>
            </span>
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8" role="list">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-xs font-semibold tracking-widest uppercase text-on-surface-muted hover:text-on-surface transition-colors duration-200"
                role="listitem"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA + mobile toggle */}
          <div className="flex items-center gap-4">
            <Button
              as="a"
              href={SITE.bookingUrl}
              size="sm"
              className="hidden sm:inline-flex"
            >
              Book Session
            </Button>

            <button
              className="md:hidden p-2 text-on-surface-muted hover:text-on-surface transition-colors"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
            >
              <span className="material-symbols-outlined">
                {mobileOpen ? "close" : "menu"}
              </span>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 flex flex-col pt-16 bg-surface-lowest/95 backdrop-blur-xl md:hidden"
          role="dialog"
          aria-label="Mobile navigation"
        >
          <nav className="flex flex-col px-8 py-12 gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="font-serif text-3xl font-normal text-on-surface hover:text-gold transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
            <Button as="a" href={SITE.bookingUrl} size="lg" className="mt-4 self-start">
              Book Session
            </Button>
          </nav>
        </div>
      )}
    </>
  );
}
