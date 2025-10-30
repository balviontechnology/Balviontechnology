import { motion } from "framer-motion";
import about1 from "../assets/hero1.jpg";
import about2 from "../assets/hero2.webp";
import about3 from "../assets/hero3.jpg";

export default function About() {
  return (
    <section id="about" className="relative bg-gray-50 py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        {/* Left: Animated image collage */}
        <div className="relative flex justify-center items-center">
          {/* Base image */}
          <motion.img
            src={about1}
            alt="Robotics Education"
            className="w-72 md:w-80 rounded-2xl shadow-xl z-30"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          />

          {/* Top overlapping image */}
          <motion.img
            src={about2}
            alt="STEM Learning"
            className="w-60 md:w-72 rounded-2xl shadow-lg absolute top-10 right-0 md:-right-10 z-20 opacity-90"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          />

          {/* Bottom background image */}
          <motion.img
            src={about3}
            alt="HR Services"
            className="w-52 md:w-64 rounded-2xl shadow-md absolute bottom-0 left-0 md:-left-10 z-10 opacity-80"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
        </div>

        {/* Right: Text content */}
        <div className="relative z-20">
          <motion.h2
            className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            About <span className="text-blue-600">Balvion</span>
          </motion.h2>

          <motion.p
            className="text-lg text-gray-700 leading-relaxed mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <strong>Balvion</strong> is a pioneering initiative blending{" "}
            <span className="text-blue-600 font-medium">Robotics Education</span> and{" "}
            <span className="text-blue-600 font-medium">HR Solutions</span> —
            empowering schools, colleges, and industries to embrace technology-driven learning
            and human capital growth.
          </motion.p>

          <motion.div
            className="space-y-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                🎓 Robotics & STEM Education
              </h3>
              <p className="text-gray-700 leading-relaxed">
                We inspire young minds by introducing STEM-based robotics learning in schools
                and colleges. Our programs focus on hands-on innovation, coding, AI, and
                problem-solving—preparing students for a technology-driven future.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                💼 Global HR & Workforce Solutions
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Our HR division connects skilled talent with growing organizations worldwide.
                We specialize in training, recruitment, and workforce development — building
                bridges between education and employability.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">🌍 Our Vision</h3>
              <p className="text-gray-700 leading-relaxed">
                To create a future where technology and talent work together — building smarter,
                sustainable, and inclusive societies through education + employment synergy.
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50 via-white to-blue-100 opacity-40 -z-10"></div>
    </section>
  );
}
