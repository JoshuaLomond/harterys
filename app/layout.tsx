import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import { Playfair_Display, Lato } from "next/font/google";
import "./globals.css";
import ScrollToTopButton from "./components/ScrollToTopButton";

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair-display",
  display: "swap",
  preload: false,
});

const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-lato",
  display: "swap",
  preload: false,
});

export const metadata: Metadata = {
  title: "Hartery's",
  description: "Hartery's Family Restaurant",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${playfairDisplay.variable} ${lato.variable} font-sans antialiased`}
      >
        {children}
        <ScrollToTopButton />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
