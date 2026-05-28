import { SITE } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="bg-surface-lowest border-t border-white/10">
      <div className="max-w-site mx-auto px-5 md:px-16 py-12 flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
        {/* Brand */}
        <div>
          <p className="font-serif text-2xl text-on-surface font-normal mb-1">
            Mack&apos;s Tattoos
          </p>
          <address className="not-italic text-sm text-on-surface-muted leading-relaxed">
            {SITE.address}
            <br />
            <a
              href={`tel:${SITE.phone.replace(/\D/g, "")}`}
              className="hover:text-gold transition-colors"
            >
              {SITE.phone}
            </a>
          </address>
        </div>

        {/* Links */}
        <nav aria-label="Footer navigation">
          <ul className="flex gap-8">
            {[
              { label: "Privacy Policy", href: "#" },
              { label: "Artist Login", href: "#" },
              { label: "Studio Safety", href: "#" },
            ].map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-sm text-on-surface-muted hover:text-gold transition-colors duration-200"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Copyright */}
        <p className="text-xs text-on-surface-muted">
          © {new Date().getFullYear()} Mack&apos;s Tattoos.
          <br className="md:hidden" />
          <span className="hidden md:inline"> </span>
          20+ Years of Mastery in Cedar City.
        </p>
      </div>
    </footer>
  );
}
