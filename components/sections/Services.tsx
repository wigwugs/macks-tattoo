import Section from "@/components/ui/Section";
import { SERVICES } from "@/lib/data";

export default function Services() {
  return (
    <Section id="services">
      {/* Heading */}
      <div className="mb-16 text-center">
        <h2 className="font-serif text-[clamp(32px,5vw,48px)] font-normal text-on-surface mb-4">
          Services
        </h2>
        <div className="w-20 h-px bg-gold mx-auto" aria-hidden="true" />
      </div>

      {/* Cards */}
      <div className="grid md:grid-cols-3 gap-6">
        {SERVICES.map((service) => (
          <article
            key={service.name}
            className="bg-surface-low thin-border p-10 md:p-12 group hover:border-gold/40 transition-colors duration-500"
          >
            <span className="text-gold text-4xl mb-6 block" aria-hidden="true">
              {service.icon}
            </span>
            <h3 className="font-serif text-[32px] font-normal text-on-surface mb-4">
              {service.name}
            </h3>
            <p className="text-[16px] leading-relaxed text-on-surface-muted mb-8">
              {service.description}
            </p>
            <ul className="space-y-3" aria-label={`${service.name} offerings`}>
              {service.items.map((item) => (
                <li
                  key={item}
                  className="border-b border-white/5 pb-2 text-[16px] text-on-surface-muted"
                >
                  {item}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </Section>
  );
}
