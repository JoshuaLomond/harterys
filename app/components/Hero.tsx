export default function Hero() {
  return (
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
            className="rounded-md bg-primary px-3-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary transition-transform hover:scale-105"
          >
            View Menu
          </a>
          <a
            href="#contact"
            className="text-sm font-semibold leading-6 transition-transform hover:scale-105"
          >
            Book a table <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </div>
  );
}
