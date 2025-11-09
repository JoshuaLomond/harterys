export default function Footer() {
  return (
    <footer className="bg-white">
      <div className="mx-auto max-w-7xl overflow-hidden px-6 py-20 sm:py-24 lg:px-8">
        <nav
          className="-mb-6 columns-2 sm:flex sm:justify-center sm:space-x-12"
          aria-label="Footer"
        >
          <div className="pb-6">
            <a
              href="#menu"
              className="text-sm leading-6 text-dark-charcoal hover:text-dark-charcoal/80"
            >
              Menu
            </a>
          </div>
          <div className="pb-6">
            <a
              href="#about"
              className="text-sm leading-6 text-dark-charcoal hover:text-dark-charcoal/80"
            >
              About
            </a>
          </div>
          <div className="pb-6">
            <a
              href="#contact"
              className="text-sm leading-6 text-dark-charcoal hover:text-dark-charcoal/80"
            >
              Contact
            </a>
          </div>
        </nav>
        <p className="mt-10 text-center text-xs leading-5 text-dark-charcoal">
          &copy; 2025 Hartery's. Developed by{" "}
          <a
            href="https://joshlomond.dev/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:text-primary/80"
          >
            Joshua Lomond
          </a>
          . All rights reserved.
        </p>
      </div>
    </footer>
  );
}
