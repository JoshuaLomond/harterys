import Image from "next/image";
import ScrollAnimation from "./ScrollAnimation";

export default function About() {
  return (
    <div id="about" className="bg-white py-24 sm:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-16 items-center">
          <ScrollAnimation>
            <div className="relative h-full min-h-[400px] w-full rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/about/entrance.jpg"
                alt="Hartery's Entrance"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>
          </ScrollAnimation>

          <ScrollAnimation>
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-dark-charcoal sm:text-5xl font-serif mb-6">
                Our Story
              </h2>
              <div className="w-20 h-1 bg-primary mb-8"></div>
              <div className="space-y-6 text-lg leading-8 text-gray-600">
                <p>
                  Hartery&apos;s has been a beloved establishment in
                  Stephenville since the 1950s, serving as a &apos;home away
                  from home&apos; for Americans stationed at the Ernest Harmon
                  Air Force base.
                </p>
                <p>
                  Opened and owned by Clayton Moraze, it temporarily closed in
                  August 2023 upon his retirement, only to be joyfully reopened
                  by Duane Lomond in September of the same year.
                </p>
                <p>
                  Today, Hartery&apos;s continues its legacy as a family-owned,
                  family-style restaurant, proudly serving classic home-style
                  dishes and traditional Newfoundland cuisine with a great staff
                  and a passionate owner.
                </p>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </div>
  );
}
