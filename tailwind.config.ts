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
        primary: "#A72608",
        secondary: "#F5F5DC",
        "dark-charcoal": "#333333",
      },
    },
  },
  plugins: [],
};
export default config;
