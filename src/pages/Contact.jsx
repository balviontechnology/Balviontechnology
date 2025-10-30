import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative bg-gradient-to-b from-blue-50 via-white to-blue-100 py-24 overflow-hidden"
    >
      {/* Decorative glow */}
      <div className="absolute -top-20 -left-20 w-96 h-96 bg-blue-200 opacity-40 blur-3xl rounded-full animate-pulse"></div>
      <div className="absolute -bottom-24 -right-20 w-80 h-80 bg-indigo-200 opacity-40 blur-3xl animate-pulse"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold text-gray-900 text-center mb-8"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Get in <span className="text-blue-600">Touch</span>
        </motion.h2>

        <motion.p
          className="text-gray-600 text-center max-w-2xl mx-auto mb-16 text-lg"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Whether you’re a school looking for robotics education or a company
          seeking HR services — we’d love to connect and collaborate.
        </motion.p>

        {/* Contact grid */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* Left - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100"
          >
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">
              Send us a message
            </h3>
            <form
              className="flex flex-col gap-5"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="text"
                placeholder="Your Name"
                className="border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
                required
              />
              <input
                type="email"
                placeholder="Your Email"
                className="border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
                required
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
              />
              <textarea
                placeholder="Your Message"
                rows="4"
                className="border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
              ></textarea>
              <button
                type="submit"
                className="bg-blue-600 text-white rounded-xl px-6 py-3 font-semibold hover:bg-blue-700 transition"
              >
                Send Message
              </button>
            </form>
          </motion.div>

          {/* Right - Contact Info + Map */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-between"
          >
            <div className="space-y-6 mb-8">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Contact Information
              </h3>
              <div className="flex items-center gap-3 text-gray-700">
                <Phone className="text-blue-600" />
                <span>+91  8110054916</span>
              </div>
              <div className="flex items-center gap-3 text-gray-700">
                <Mail className="text-blue-600" />
                <span>balvion.tech@gmail.com</span>
              </div>
              <div className="flex items-center gap-3 text-gray-700">
                <MapPin className="text-blue-600" />
                <span>
                  Balvion Technologies, No 106,Dayal street ,Kovundampalayam Coimbatore - 641030, Tamil Nadu, India
                </span>
              </div>
              <div className="flex items-center gap-3 text-gray-700">
                <Clock className="text-blue-600" />
                <span>Mon – Sat: 9:00 AM – 6:00 PM</span>
              </div>
            </div>

            {/* Map */}
            <div className="rounded-3xl overflow-hidden shadow-xl border border-gray-100 h-64">
              <iframe
                title="Balvion Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3915.9784960402685!2d76.9478074750457!3d11.040238989125008!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba858922e250141%3A0xdb9e52acf628fc0f!2s106e%2C%20Dayal%20St%2C%20Themaiyan%20Street%2C%20Koundampalayam%2C%20Coimbatore%2C%20Tamil%20Nadu%20641030!5e0!3m2!1sen!2sin!4v1761841950308!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
