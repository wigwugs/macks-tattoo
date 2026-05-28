# Mack's Tattoos — Production Website

Premium tattoo studio website for Mack's Tattoos, Cedar City, Utah.  
Built with Next.js 14 (App Router), Tailwind CSS, and TypeScript.

---

## Quick Start

```bash
npm install
npm run dev
# Open http://localhost:3000
```

## Build & Deploy

```bash
npm run build   # production build
npm start       # serve production build locally
```

---

## Deploying to Vercel (Recommended)

1. Push this project to a GitHub repository.
2. Go to https://vercel.com/new and import the repo.
3. Vercel auto-detects Next.js — click **Deploy**.
4. Your site is live. Vercel automatically handles builds on every push.

> No environment variables are required for the base site.

---

## Updating Content

All site text, phone number, address, hours, reviews, and services live in one file:

```
lib/data.ts
```

Edit that file to update any site copy — no code changes needed elsewhere.

---

## Replacing Placeholder Images

The portfolio and hero images currently use temporary Google-hosted URLs from the original design export. **Before launch**, replace them with real client-owned photos:

1. Add images to `public/images/portfolio/` and `public/images/hero/`  
   (name them semantically, e.g. `01-black-grey-sleeve.jpg`)
2. Update the `src` values in:
   - `components/sections/Portfolio.tsx` → `IMAGES` array
   - `components/sections/Hero.tsx` → image `src` props
3. Switch to Next.js `<Image>` for automatic WebP conversion and lazy loading:
   ```tsx
   import Image from "next/image";
   <Image src="/images/portfolio/01.jpg" alt="..." width={600} height={600} />
   ```

---

## Updating the Booking Link

In `lib/data.ts`, change:
```ts
bookingUrl: "#contact",
```
to your real booking URL (Vagaro, Square, etc.):
```ts
bookingUrl: "https://vagaro.com/mackstattoos",
```

---

## Project Structure

```
macks-tattoos/
├── app/
│   ├── layout.tsx          # Root layout, fonts, metadata
│   └── page.tsx            # Main page (composes sections)
├── components/
│   ├── layout/
│   │   ├── Nav.tsx         # Responsive navigation + mobile drawer
│   │   └── Footer.tsx      # Footer with links and contact info
│   ├── sections/
│   │   ├── Hero.tsx        # Full-screen hero with image collage
│   │   ├── TrustBar.tsx    # Social proof bar (Google stars, etc.)
│   │   ├── Services.tsx    # 3-column services cards
│   │   ├── Portfolio.tsx   # 4-column image grid gallery
│   │   ├── Reviews.tsx     # Horizontal scroll review carousel
│   │   └── Contact.tsx     # Address, hours, map, directions CTA
│   └── ui/
│       ├── Button.tsx      # Reusable button (primary / ghost)
│       ├── Section.tsx     # Section wrapper with consistent spacing
│       └── StarRating.tsx  # Star rating display
├── lib/
│   └── data.ts             # ALL site content (edit here)
├── public/
│   └── images/             # Add client photos here
├── styles/
│   └── globals.css         # Tailwind base + custom utilities
├── tailwind.config.ts
├── next.config.ts
└── vercel.json
```

---

## Tech Stack

- **Next.js 14** — App Router, server components
- **Tailwind CSS** — utility-first styling
- **TypeScript** — type safety
- **Google Fonts** — Bodoni Moda (serif headings) + Hanken Grotesk (body)
- **Material Symbols** — icon set (loaded with specific icon subset)

---

## Notes for Future Developers

- The `font-serif` class uses Bodoni Moda; `font-sans` uses Hanken Grotesk.
- The gold brand color is `text-gold` / `bg-gold` / `border-gold`.
- All section padding/spacing follows an 8px grid via Tailwind spacing.
- The `thin-border` utility class (`border border-white/12`) creates the subtle architectural card borders from the design spec.
