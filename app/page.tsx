"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

export default function Home() {
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
    <div className="bg-white">
      {/* Header */}
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

      <main className="isolate">
        {/* Hero section */}
        <div
          className="relative h-screen bg-cover bg-center"
          style={{ backgroundImage: "url('/hero-background.jpg')" }}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl font-serif">
              Welcome to Hartery's
            </h1>
            <p className="mt-6 text-lg leading-8">
              A family-owned restaurant serving delicious food for generations.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#menu"
                className="rounded-md bg-primary px-3-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              >
                View Menu
              </a>
              <a href="#contact" className="text-sm font-semibold leading-6">
                Book a table <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>

        {/* Menu section */}
        <div id="menu" className="bg-gray-50 py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl font-serif">
                Our Menu
              </h2>
              <p className="mt-2 text-lg leading-8 text-gray-600">
                Delicious food for the whole family.
              </p>
            </div>
            <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
              <article className="flex flex-col items-start justify-between group">
                <div className="relative w-full">
                  <img
                    src="/placeholder.png"
                    alt=""
                    className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2] transition-transform duration-300 ease-in-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
                </div>
                <div className="max-w-xl">
                  <div className="group relative">
                    <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600 font-serif">
                      <a href="#">
                        <span className="absolute inset-0" />
                        Menu Item 1
                      </a>
                    </h3>
                    <p className="mt-5 text-sm leading-6 text-gray-600">
                      Item 1 Caption
                    </p>
                  </div>
                </div>
              </article>
              <article className="flex flex-col items-start justify-between group">
                <div className="relative w-full">
                  <img
                    src="/placeholder.png"
                    alt=""
                    className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2] transition-transform duration-300 ease-in-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
                </div>
                <div className="max-w-xl">
                  <div className="group relative">
                    <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600 font-serif">
                      <a href="#">
                        <span className="absolute inset-0" />
                        Menu Item 2
                      </a>
                    </h3>
                    <p className="mt-5 text-sm leading-6 text-gray-600">
                      Item 2 Caption
                    </p>
                  </div>
                </div>
              </article>
              <article className="flex flex-col items-start justify-between group">
                <div className="relative w-full">
                  <img
                    src="/placeholder.png"
                    alt=""
                    className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2] transition-transform duration-300 ease-in-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
                </div>
                <div className="max-w-xl">
                  <div className="group relative">
                    <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600 font-serif">
                      <a href="#">
                        <span className="absolute inset-0" />
                        Menu Item 3
                      </a>
                    </h3>
                    <p className="mt-5 text-sm leading-6 text-gray-600">
                      Item 3 Caption
                    </p>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>

        {/* About Us section */}
        <div id="about" className="py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl font-serif">
                About Us
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                We are a family-owned restaurant that has been serving our
                community for over 50 years. We are passionate about using
                fresh, local ingredients to create delicious and memorable
                meals.
              </p>
            </div>
          </div>
        </div>

        {/* Contact section */}
        <div id="contact" className="bg-gray-50 py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl font-serif">
                Contact Us
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                We would love to hear from you.
              </p>
              <div className="mt-10">
                <p className="text-lg leading-8 text-gray-60.0">
                  109 Main Street, Stephenville, NL A2N1J4
                </p>
                <p className="text-lg leading-8 text-gray-600">
                  (709) 643-6282
                </p>
                <p className="text-lg leading-8 text-gray-600">
                  <a
                    href="https://www.facebook.com/harterysfamilyrestaurant/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary/80"
                  >
                    Hartery's Facebook
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white">
        <div className="mx-auto max-w-7xl overflow-hidden px-6 py-20 sm:py-24 lg:px-8">
          <nav
            className="-mb-6 columns-2 sm:flex sm:justify-center sm:space-x-12"
            aria-label="Footer"
          >
            <div className="pb-6">
              <a
                href="#menu"
                className="text-sm leading-6 text-gray-600 hover:text-gray-900"
              >
                Menu
              </a>
            </div>
            <div className="pb-6">
              <a
                href="#about"
                className="text-sm leading-6 text-gray-600 hover:text-gray-900"
              >
                About
              </a>
            </div>
            <div className="pb-6">
              <a
                href="#contact"
                className="text-sm leading-6 text-gray-600 hover:text-gray-900"
              >
                Contact
              </a>
            </div>
          </nav>
          <p className="mt-10 text-center text-xs leading-5 text-gray-500">
            &copy; 2025 Hartery's. Developed by{" "}
            <a
              href="https://joshlomond.dev/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Joshua Lomond
            </a>
            . All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
