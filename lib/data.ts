// lib/data.ts
// All editable site content lives here — easy for the client to update.

export const SITE = {
  name: "Mack's Tattoos",
  tagline: "20+ Years of Mastery in Cedar City",
  description:
    "A refined gallery of human expression where high-end craft meets raw artistry.",
  phone: "(435) 327-2165",
  address: "146 N 100 W, Cedar City, UT 84720",
  hours: [
    { label: "Tuesday – Saturday", time: "12pm – 8pm" },
    { label: "Sunday – Monday", time: "Closed" },
  ],
  googleMapsUrl:
    "https://maps.google.com/?q=146+N+100+W,+Cedar+City,+UT+84720",
  bookingUrl: "#contact", // Replace with actual booking URL (e.g., Vagaro, Square)
};

export const TRUST_BADGES = [
  { icon: "⭐️", text: "4.7 Stars on Google (297)" },
  { icon: "👍", text: "94% Recommend on Facebook (402)" },
  { icon: "✅", text: "Licensed & Certified Studio" },
];

export const SERVICES = [
  {
    icon: "🖋️",
    name: "Tattoos",
    description:
      "Custom black & grey realism, illustrative color, and fine-line work tailored to your story.",
    items: ["Black & Grey", "Full Color", "Consultation"],
  },
  {
    icon: "🪄",
    name: "Permanent Makeup",
    description:
      "Enhance your natural features with precision microblading, lip blushing, and eyeliner.",
    items: ["Microblading", "Lip Blush", "Touch-ups"],
  },
  {
    icon: "💎",
    name: "Piercings",
    description:
      "Professional body piercing using surgical-grade titanium and high-end jewelry.",
    items: ["Standard Body", "Surface/Dermal", "Custom Curation"],
  },
];

export const REVIEWS = [
  {
    initials: "KC",
    name: "Kaylee Covington",
    role: "Facebook Review",
    quote:
      "Mack does truly amazing work! I've seen the others and they are also amazing. But I've personally been under Mack's needle and he has a gentle touch, and the quality he puts into the detail is immaculate. 10 out of 10 recommend.",
  },
  {
    initials: "JS",
    name: "Jonathan Sterling",
    role: "Local Client",
    quote:
      "The attention to detail here is unparalleled. I've been to shops across the country, but Mack's in Cedar City is on a different level of professionalism. My black and grey sleeve is perfection.",
  },
  {
    initials: "AM",
    name: "Alicia Moore",
    role: "Regular Client",
    quote:
      "Got my microblading done by Precious and it changed my life. The studio is incredibly clean and the atmosphere is so welcoming yet sophisticated. Highly recommend for any PMU.",
  },
  {
    initials: "TH",
    name: "Tyler Henderson",
    role: "Collector",
    quote:
      "Professional, clean, and incredible artists. They took my rough idea and turned it into a masterpiece. Best shop in Utah hands down.",
  },
];

// Portfolio images — swap src for local /images/portfolio/01.jpg etc. once assets are added.
// Using the original Google-hosted URLs as placeholders.
export const PORTFOLIO_IMAGES = Array.from({ length: 16 }, (_, i) => ({
  id: i + 1,
  alt: `Tattoo portfolio piece ${i + 1}`,
  // Replace these with local paths: `/images/portfolio/${String(i + 1).padStart(2, "0")}.jpg`
  src: `https://lh3.googleusercontent.com/aida-public/AB6AXuD54yRTCuNLSwVVHuMIPOQBHK13-ZOWFbaHB0Jy3mlte9azWxDkOITcfyN5jcqqwkQTgFzmFjS9Hhwk0c0ZuyLhUysRjgf6bC6-x_hWa_Xxy66STGQ48lBfcPOlPidRDWdoyk3NygyV0jbgoxFuX-0mLIzkKyKoRBM_CwZfNXddW30XRBdxiSkOJ39aiy-1G7Uk47Q5hdNUkTobjpr04R86D31kjOEX4J6veoDybgBSV33vPYXzxhHOhmWhnjB_ZZOV6tyvFmAwDfjb`,
}));
