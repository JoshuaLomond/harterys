import { FaPhone, FaMapMarkerAlt, FaFacebook, FaClock } from "react-icons/fa";
import ScrollAnimation from "./ScrollAnimation";

export default function Contact() {
  return (
    <div id="contact" className="bg-off-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <ScrollAnimation>
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-dark-charcoal sm:text-5xl font-serif mb-4">
              Contact Us
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-8"></div>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Give us a call to make a reservation. We would love to hear from
              you!
            </p>
          </div>
        </ScrollAnimation>

        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-8 sm:grid-cols-2">
          <ScrollAnimation>
            <div className="flex flex-col items-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 h-full">
              <div className="p-4 bg-primary/10 rounded-full mb-6">
                <FaMapMarkerAlt className="text-3xl text-primary" />
              </div>
              <h3 className="text-xl font-bold text-dark-charcoal mb-2">
                Visit Us
              </h3>
              <a
                href="https://maps.app.goo.gl/3f85xCmit8WJVfoY6"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-primary text-center transition-colors"
              >
                109 Main Street
                <br />
                Stephenville, NL
              </a>
            </div>
          </ScrollAnimation>

          <ScrollAnimation>
            <div className="flex flex-col items-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 h-full">
              <div className="p-4 bg-primary/10 rounded-full mb-6">
                <FaPhone className="text-3xl text-primary" />
              </div>
              <h3 className="text-xl font-bold text-dark-charcoal mb-2">
                Call Us
              </h3>
              <p className="text-gray-600 text-center">(709) 643-6282</p>
            </div>
          </ScrollAnimation>

          <ScrollAnimation>
            <div className="flex flex-col items-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 h-full">
              <div className="p-4 bg-primary/10 rounded-full mb-6">
                <FaClock className="text-3xl text-primary" />
              </div>
              <h3 className="text-xl font-bold text-dark-charcoal mb-2">
                Opening Hours
              </h3>
              <p className="text-gray-600 text-center">
                8:00 AM - 7:00 PM
                <br />
                Everyday
              </p>
            </div>
          </ScrollAnimation>

          <ScrollAnimation>
            <div className="flex flex-col items-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 h-full">
              <div className="p-4 bg-primary/10 rounded-full mb-6">
                <FaFacebook className="text-3xl text-primary" />
              </div>
              <h3 className="text-xl font-bold text-dark-charcoal mb-2">
                Follow Us
              </h3>
              <a
                href="https://www.facebook.com/harterysfamilyrestaurant/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-primary text-center transition-colors"
              >
                Hartery&apos;s Facebook
              </a>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </div>
  );
}
