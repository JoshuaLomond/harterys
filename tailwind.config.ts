import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-lato)"],
        serif: ["var(--font-playfair-display)"],
      },
      colors: {
        primary: "#8B0000", // Dark Red
        secondary: "#F5F5DC", // Beige/Cream (keeping as base but might use lighter shades in UI)
        "dark-charcoal": "#1A1A1A", // Darker, richer black/grey
        "gold-accent": "#D4AF37", // Adding a gold accent for premium feel
        "off-white": "#FAFAFA",
      },
    },
  },
  plugins: [],
};
export default config;
