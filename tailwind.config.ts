import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0A0A0A",
        surface: {
          DEFAULT: "#121414",
          low: "#1a1c1c",
          mid: "#1e2020",
          high: "#282a2b",
          highest: "#333535",
          lowest: "#0c0f0f",
        },
        "on-surface": "#e2e2e2",
        "on-surface-muted": "#c4c7c7",
        "outline": "#8e9192",
        "outline-subtle": "#444748",
        gold: {
          DEFAULT: "#C5A059",
          light: "#e9c176",
          dark: "#604403",
        },
      },
      fontFamily: {
        serif: ["var(--font-bodoni)", "Georgia", "serif"],
        sans: ["var(--font-hanken)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        site: "1280px",
      },
      spacing: {
        "18": "4.5rem",
      },
    },
  },
  plugins: [],
};

export default config;
