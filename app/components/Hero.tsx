import ScrollAnimation from "./ScrollAnimation";

export default function Hero() {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Image with Parallax Effect */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed"
        style={{ backgroundImage: "url('/hero-background.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4 sm:px-6 lg:px-8">
        <ScrollAnimation>
          <h1 className="text-5xl font-bold tracking-tight sm:text-7xl font-serif mb-6 drop-shadow-lg">
            Welcome to Hartery&apos;s
          </h1>
        </ScrollAnimation>

        <ScrollAnimation>
          <p className="mt-4 text-xl leading-8 max-w-2xl mx-auto font-light drop-shadow-md">
            A family-owned restaurant in Stephenville, NL. Proudly serving
            traditional Newfie meals alongside classic home-style dishes.
          </p>
        </ScrollAnimation>

        <div className="mt-10 flex items-center justify-center gap-x-6">
          <ScrollAnimation>
            <a
              href="#menu"
              className="rounded-full bg-primary px-8 py-3.5 text-base font-semibold text-white shadow-lg hover:bg-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary transition-all hover:scale-105 inline-block border-2 border-transparent hover:border-white/20"
            >
              View Menu
            </a>
          </ScrollAnimation>
          <ScrollAnimation>
            <a
              href="#contact"
              className="text-base font-semibold leading-6 text-white transition-transform hover:scale-105 inline-block border-b-2 border-transparent hover:border-white pb-1"
            >
              Get in Touch <span aria-hidden="true">→</span>
            </a>
          </ScrollAnimation>
        </div>

        <ScrollAnimation>
          <a
            href="https://www.facebook.com/harterysfamilyrestaurant/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-block text-sm font-medium text-white/90 hover:text-white underline decoration-white/50 hover:decoration-white transition-all hover:scale-105"
          >
            Check out our Facebook page for daily specials and upcoming events!{" "}
            <span aria-hidden="true">→</span>
          </a>
        </ScrollAnimation>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-white">
        <a href="#menu" aria-label="Scroll down">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </a>
      </div>
    </div>
  );
}
