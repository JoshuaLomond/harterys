export default function Footer() {
  return (
    <footer className="bg-dark-charcoal py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center gap-y-6">
          <h2 className="text-3xl font-serif font-bold text-black">
            Hartery&apos;s
          </h2>
          <nav className="flex gap-x-8">
            {["Menu", "About", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm font-semibold leading-6 text-gray-300 hover:text-white transition-colors"
              >
                {item}
              </a>
            ))}
          </nav>
          <p className="text-xs leading-5 text-gray-400 text-center">
            &copy; {new Date().getFullYear()} Hartery&apos;s Family Restaurant.
            All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
