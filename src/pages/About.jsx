import { motion } from "framer-motion";
import about1 from "../assets/hero1.jpg";
import about2 from "../assets/hero2.webp";
import about3 from "../assets/hero3.jpg";

export default function About() {
  return (
    <section id="about" className="relative bg-gray-50 py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-start">

        {/* LEFT — Vertical Images with Effects */}
        <div className="flex flex-col items-center gap-10">

          {/* IMAGE 1 */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="group"
          >
            <img
              src={about1}
              alt="Robotics"
              className="w-64 md:w-72 rounded-2xl shadow-xl
              transition-all duration-500 ease-in-out
              group-hover:scale-105 group-hover:-rotate-1
              animate-float 
              group-hover:shadow-[0_0_25px_rgba(56,189,248,0.5)]
              "
            />
          </motion.div>

          {/* IMAGE 2 */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="group"
          >
            <img
              src={about2}
              alt="STEM"
              className="w-64 md:w-72 rounded-2xl shadow-xl
              transition-all duration-500
              group-hover:scale-105 group-hover:rotate-1
              animate-float
              group-hover:shadow-[0_0_25px_rgba(56,189,248,0.5)]
              "
            />
          </motion.div>

          {/* IMAGE 3 */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="group"
          >
            <img
              src={about3}
              alt="HR Services"
              className="w-64 md:w-72 rounded-2xl shadow-xl
              transition-all duration-500
              group-hover:scale-105 group-hover:-rotate-1
              animate-float
              group-hover:shadow-[0_0_25px_rgba(56,189,248,0.5)]
              "
            />
          </motion.div>
        </div>

        {/* RIGHT — Text Content */}
        <div>
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
            transition={{ duration: 0.8 }}
          >
            <strong>Balvion</strong> is a pioneering initiative blending 
            <span className="text-blue-600 font-medium"> Robotics Education</span> and 
            <span className="text-blue-600 font-medium"> HR Solutions</span>,
            empowering schools, colleges, and industries to embrace technology-driven learning and human capital growth.
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
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                🌍 Our Vision
              </h3>
              <p className="text-gray-700 leading-relaxed">
                To create a future where technology and talent work together — building smarter,
                sustainable, and inclusive societies through education + employment synergy.
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Soft Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50 via-white to-blue-100 opacity-40 -z-10"></div>
    </section>
  );
}
