export default function Footer() {
  return (
    <footer className="bg-white">
      <div className="mx-auto max-w-7xl overflow-hidden px-6 py-20 sm:py-24 lg:px-8">
        <nav
          className="flex flex-col items-center space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-12"
          aria-label="Footer"
        >
          <a
            href="#menu"
            className="text-sm leading-6 text-dark-charcoal hover:text-dark-charcoal/80 transition-transform hover:scale-105"
          >
            Menu
          </a>
          <a
            href="#about"
            className="text-sm leading-6 text-dark-charcoal hover:text-dark-charcoal/80 transition-transform hover:scale-105"
          >
            About
          </a>
          <a
            href="#contact"
            className="text-sm leading-6 text-dark-charcoal hover:text-dark-charcoal/80 transition-transform hover:scale-105"
          >
            Contact
          </a>
        </nav>
        <p className="mt-10 text-center text-xs leading-5 text-dark-charcoal">
          &copy; 2025 Hartery's. Developed by{" "}
          <a
            href="https://joshlomond.dev/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:text-primary/80 transition-transform hover:scale-105"
          >
            Joshua Lomond
          </a>
          . All rights reserved.
        </p>
      </div>
    </footer>
  );
}
