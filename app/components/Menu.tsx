import Image from "next/image";
import ScrollAnimation from "./ScrollAnimation";
import FullMenu from "./menus/FullMenu";
import BreakfastMenu from "./menus/BreakfastMenu";

export default function Menu() {
  return (
    <div id="menu" className="bg-secondary py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <ScrollAnimation>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-dark-charcoal sm:text-4xl font-serif">
              Our Menu
            </h2>
            <p className="mt-8 text-lg leading-8 text-dark-charcoal">
              Explore our diverse menu, featuring a delightful array of classic
              home-style dishes and traditional Newfoundland favorites. From
              hearty breakfasts to satisfying main courses and delectable
              desserts, there&apos;s something to please every palate.
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            <article className="flex flex-col items-start justify-between group">
              <div className="relative w-full">
                <Image
                  src="/food/breakfast.jpg"
                  alt="Breakfast"
                  width={500}
                  height={500}
                  className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2] transition-transform duration-300 ease-in-out group-hover:scale-105"
                />
                <div className="absolute inset-0 rounded-2xl" />
              </div>
            </article>
            <article className="flex flex-col items-start justify-between group">
              <div className="relative w-full">
                <Image
                  src="/food/cold.jpg"
                  alt="Cold Plate"
                  width={500}
                  height={500}
                  className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2] transition-transform duration-300 ease-in-out group-hover:scale-105"
                />
                <div className="absolute inset-0 rounded-2xl" />
              </div>
            </article>
            <article className="flex flex-col items-start justify-between group">
              <div className="relative w-full">
                <Image
                  src="/food/wings.jpg"
                  alt="Wings"
                  width={500}
                  height={500}
                  className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2] transition-transform duration-300 ease-in-out group-hover:scale-105"
                />
                <div className="absolute inset-0 rounded-2xl" />
              </div>
            </article>
          </div>
        </ScrollAnimation>
        <ScrollAnimation>
          <BreakfastMenu />
        </ScrollAnimation>
        <ScrollAnimation>
          <FullMenu />
        </ScrollAnimation>
      </div>
    </div>
  );
}
