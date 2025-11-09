import { FaPhone, FaMapMarkerAlt, FaFacebook, FaClock } from "react-icons/fa";

export default function Contact() {
  return (
    <div id="contact" className="bg-secondary py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-dark-charcoal sm:text-4xl font-serif">
            Contact Us
          </h2>
          <p className="mt-6 text-lg leading-8 text-dark-charcoal">
            Give us a call to make a reservation. We would love to hear from
            you!
          </p>
          <div className="mt-10 space-y-4">
            <p className="text-lg leading-8 text-dark-charcoal flex items-center justify-center gap-2">
              <FaMapMarkerAlt className="text-primary" />
              109 Main Street, Stephenville
            </p>
            <p className="text-lg leading-8 text-dark-charcoal flex items-center justify-center gap-2">
              <FaPhone className="text-primary" />
              (709) 643-6282
            </p>
            <p className="text-lg leading-8 text-dark-charcoal flex items-center justify-center gap-2">
              <FaFacebook className="text-primary" />
              <a
                href="https://www.facebook.com/harterysfamilyrestaurant/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-primary/80 transition-transform hover:scale-105"
              >
                Hartery&apos;s Facebook
              </a>
            </p>
            <p className="text-lg leading-8 text-dark-charcoal flex items-center justify-center gap-2">
              <FaClock className="text-primary" />
              8:00 AM - 7:00 PM Everyday
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
