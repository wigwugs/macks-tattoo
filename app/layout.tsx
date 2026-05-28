import type { Metadata } from "next";
import { Bodoni_Moda, Hanken_Grotesk } from "next/font/google";
import "../styles/globals.css";

const bodoniModa = Bodoni_Moda({
  subsets: ["latin"],
  variable: "--font-bodoni",
  display: "swap",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const hankenGrotesk = Hanken_Grotesk({
  subsets: ["latin"],
  variable: "--font-hanken",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Mack's Tattoos | 20+ Years of Mastery in Cedar City",
  description:
    "Cedar City's premier tattoo studio. Custom black & grey realism, fine line, permanent makeup, and piercings. 20+ years of craft. Book your session today.",
  keywords: [
    "tattoo",
    "Cedar City",
    "Utah",
    "tattoo studio",
    "fine line tattoo",
    "black grey realism",
    "permanent makeup",
    "microblading",
    "piercing",
  ],
  openGraph: {
    title: "Mack's Tattoos | Cedar City, Utah",
    description:
      "A refined gallery of human expression where high-end craft meets raw artistry. 20+ years of mastery.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${bodoniModa.variable} ${hankenGrotesk.variable}`}>
      <head>
        {/* Material Symbols — only load the icons we actually use */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&icon_names=🖌️,📞,🖊️,📍,🪴,🗓️,⭐️,⭐️,👍,✅,🖌️,📞,🖊️,📍,🪴,🗓️,⭐️,⭐️,👍,✅,menu,close"
          crossOrigin="anonymous"
        />
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
