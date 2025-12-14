import { motion } from "framer-motion";
import { Brain, Users, Globe, Cpu, Briefcase, Rocket } from "lucide-react";

import roboed from "../assets/roboed.jpg";       // Add your images
import stemlab from "../assets/stem.jpg";
import hiring from "../assets/talent.jpeg";
import corporate from "../assets/corporate.webp";
import consulting from "../assets/consulting.jpg";
import innovation from "../assets/innovation.webp";

export default function Services() {
  const services = [
    {
      icon: <Cpu size={36} className="text-blue-600" />,
      title: "Robotics Education",
      desc: "Hands-on robotics programs for schools and colleges—empowering young minds with real-world innovation.",
      category: "Education",
      bg: roboed,
    },
    {
      icon: <Brain size={36} className="text-blue-600" />,
      title: "STEM Learning & AI Labs",
      desc: "Integrate AI, coding, and STEM tools into your curriculum through engaging practical sessions.",
      category: "Education",
      bg: stemlab,
    },
    {
      icon: <Users size={36} className="text-blue-600" />,
      title: "Talent Acquisition",
      desc: "Connecting the right people with the right opportunities through strategic hiring and HR partnerships.",
      category: "HR Services",
      bg: hiring,
    },
    {
      icon: <Briefcase size={36} className="text-blue-600" />,
      title: "Corporate Training",
      desc: "Upskill teams in leadership, communication, and emerging technologies to boost workplace efficiency.",
      category: "HR Services",
      bg: corporate,
    },
    {
      icon: <Globe size={36} className="text-blue-600" />,
      title: "Consulting & Global HR",
      desc: "Workforce solutions including placement, compliance, and international staffing support.",
      category: "Consulting",
      bg: consulting,
    },
    {
      icon: <Rocket size={36} className="text-blue-600" />,
      title: "Innovation & Research",
      desc: "Collaborate with us on robotics R&D, automation, and future-driven engineering innovations.",
      category: "Consulting",
      bg: innovation,
    },
  ];

  return (
    <section
      id="services"
      className="relative py-24 bg-gradient-to-b from-white via-blue-50 to-white"
    >
      <div className="max-w-7xl mx-auto px-6 text-center">
        
        {/* Title */}
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Our <span className="text-blue-600">Services</span>
        </motion.h2>

        <motion.p
          className="text-gray-600 max-w-2xl mx-auto mb-16 text-lg"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.7 }}
        >
          We deliver innovative education and workforce solutions that shape the next
          generation of thinkers, builders, and leaders.
        </motion.p>

        {/* Service Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((s, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="relative p-8 rounded-3xl shadow-lg hover:shadow-2xl 
                        border border-blue-100 hover:border-blue-400 
                        transition-all duration-300 overflow-hidden"
              style={{
                backgroundImage: `url(${s.bg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              {/* Overlay (light so image shows) */}
              <div className="absolute inset-0 bg-white/40 backdrop-blur-sm"></div>

              {/* Content */}
              <div className="relative z-10">
                <div className="flex justify-center mb-4">{s.icon}</div>

                <h3 className="text-xl font-bold text-gray-900 mb-2 drop-shadow-md">
                  {s.title}
                </h3>

                <p className="text-gray-700 text-base mb-3 drop-shadow-sm">
                  {s.desc}
                </p>

                <span className="inline-block text-sm text-blue-700 font-semibold">
                  {s.category}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Decorative Circles */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-blue-200 rounded-full blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-blue-300 rounded-full blur-3xl opacity-40 animate-pulse"></div>
    </section>
  );
}
