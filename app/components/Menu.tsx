import Image from "next/image";
import ScrollAnimation from "./ScrollAnimation";
import FullMenu from "./menus/FullMenu";

export default function Menu() {
  return (
    <div id="menu" className="bg-off-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <ScrollAnimation>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-dark-charcoal sm:text-5xl font-serif mb-4">
              Our Menu
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-8"></div>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Explore our diverse menu, featuring a delightful array of classic
              home-style dishes and traditional Newfoundland favorites. From
              hearty breakfasts to satisfying main courses and delectable
              desserts, there&apos;s something to please every palate.
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-12 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {[
              {
                src: "/food/breakfast.jpg",
                alt: "Breakfast",
                title: "Breakfast",
              },
              {
                src: "/food/cold.jpg",
                alt: "Cold Plate",
                title: "Cold Plate",
              },
              { src: "/food/wings.jpg", alt: "Wings", title: "Wings & Things" },
            ].map((item, index) => (
              <article
                key={index}
                className="flex flex-col items-start justify-between group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className="relative w-full h-64 overflow-hidden">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    width={500}
                    height={500}
                    className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-80 group-hover:opacity-70 transition-opacity duration-300" />
                  <h3 className="absolute bottom-4 left-4 text-2xl font-bold text-white font-serif z-10">
                    {item.title}
                  </h3>
                </div>
              </article>
            ))}
          </div>
        </ScrollAnimation>
        <ScrollAnimation>
          <div className="mt-16 w-full">
            <FullMenu />
          </div>
        </ScrollAnimation>
      </div>
    </div>
  );
}
