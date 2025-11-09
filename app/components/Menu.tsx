export default function Menu() {
  return (
    <div id="menu" className="bg-secondary py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-dark-charcoal sm:text-4xl font-serif">
            Our Menu
          </h2>
          <p className="mt-2 text-lg leading-8 text-dark-charcoal">
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
                <h3 className="mt-3 text-lg font-semibold leading-6 text-dark-charcoal group-hover:text-dark-charcoal/80 font-serif">
                  <a href="#">
                    <span className="absolute inset-0" />
                    Menu Item 1
                  </a>
                </h3>
                <p className="mt-5 text-sm leading-6 text-dark-charcoal">
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
                <h3 className="mt-3 text-lg font-semibold leading-6 text-dark-charcoal group-hover:text-dark-charcoal/80 font-serif">
                  <a href="#">
                    <span className="absolute inset-0" />
                    Menu Item 2
                  </a>
                </h3>
                <p className="mt-5 text-sm leading-6 text-dark-charcoal">
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
                <h3 className="mt-3 text-lg font-semibold leading-6 text-dark-charcoal group-hover:text-dark-charcoal/80 font-serif">
                  <a href="#">
                    <span className="absolute inset-0" />
                    Menu Item 3
                  </a>
                </h3>
                <p className="mt-5 text-sm leading-6 text-dark-charcoal">
                  Item 3 Caption
                </p>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}
