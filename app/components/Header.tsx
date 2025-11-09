"use client";

import { useState, useEffect } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "bg-white shadow-md text-gray-900"
          : "bg-transparent text-white"
      }`}
    >
      <nav
        className="flex items-center justify-start p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="hidden lg:flex lg:gap-x-12 mx-auto">
          <a href="#menu" className="text-sm font-semibold leading-6">
            Menu
          </a>
          <a href="#about" className="text-sm font-semibold leading-6">
            About
          </a>
          <a href="#contact" className="text-sm font-semibold leading-6">
            Contact
          </a>
        </div>
      </nav>
    </header>
  );
}
