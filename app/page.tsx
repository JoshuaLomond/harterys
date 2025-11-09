import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-white">
      {/* Header */}
      <header className="absolute inset-x-0 top-0 z-50">
        <nav
          className="flex items-center justify-start p-6 lg:px-8"
          aria-label="Global"
        >
          <div className="hidden lg:flex lg:gap-x-12 mx-auto">
            <a
              href="#menu"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Menu
            </a>
            <a
              href="#about"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              About
            </a>
            <a
              href="#contact"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Contact
            </a>
          </div>
        </nav>
      </header>

      <main className="isolate">
        {/* Hero section */}
        <div className="relative pt-14">
          <div
            className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
            aria-hidden="true"
          >
            <div
              className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
            />
          </div>
          <div className="py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="mx-auto max-w-2xl text-center">
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                  Welcome to Hartery's
                </h1>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  A family-owned restaurant serving delicious food for
                  generations.
                </p>
                <div className="mt-10 flex items-center justify-center gap-x-6">
                  <a
                    href="#menu"
                    className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    View Menu
                  </a>
                  <a
                    href="#contact"
                    className="text-sm font-semibold leading-6 text-gray-900"
                  >
                    Book a table <span aria-hidden="true">→</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Menu section */}
        <div id="menu" className="bg-gray-50 py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Our Menu
              </h2>
              <p className="mt-2 text-lg leading-8 text-gray-600">
                Delicious food for the whole family.
              </p>
            </div>
            <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
              <article className="flex flex-col items-start justify-between">
                <div className="relative w-full">
                  <img
                    src="/placeholder.png"
                    alt=""
                    className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
                  />
                  <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
                </div>
                <div className="max-w-xl">
                  <div className="group relative">
                    <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
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
              <article className="flex flex-col items-start justify-between">
                <div className="relative w-full">
                  <img
                    src="/placeholder.png"
                    alt=""
                    className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
                  />
                  <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
                </div>
                <div className="max-w-xl">
                  <div className="group relative">
                    <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
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
              <article className="flex flex-col items-start justify-between">
                <div className="relative w-full">
                  <img
                    src="/placeholder.png"
                    alt=""
                    className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
                  />
                  <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
                </div>
                <div className="max-w-xl">
                  <div className="group relative">
                    <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
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
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
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
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Contact Us
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                We would love to hear from you.
              </p>
              <div className="mt-10">
                <p className="text-lg leading-8 text-gray-600">
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
                    className="text-indigo-600 hover:text-indigo-500"
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
