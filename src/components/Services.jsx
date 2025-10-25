import React from "react";
import { motion } from "framer-motion";

const services = [
  {
    title: "Robotics Workshops",
    desc: "Hands-on STEM and robotics sessions designed for school and college students to explore engineering concepts creatively.",
    icon: "🤖",
  },
  {
    title: "AI & Automation Training",
    desc: "Practical AI, IoT, and automation bootcamps to prepare the next generation of innovators.",
    icon: "⚙️",
  },
  {
    title: "STEM Curriculum Design",
    desc: "We collaborate with schools to integrate robotics and STEM programs that enhance learning outcomes.",
    icon: "📚",
  },
  {
    title: "HR Services",
    desc: "End-to-end HR strategy, from talent acquisition to retention, helping companies build strong and motivated teams.",
    icon: "👥",
  },
  {
    title: "Recruitment Services",
    desc: "We connect skilled professionals with top organizations, streamlining hiring through technology-driven solutions.",
    icon: "💼",
  },
  {
    title: "Corporate Training",
    desc: "Custom learning programs that empower employees with leadership, technical, and soft skills for career growth.",
    icon: "🎓",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 px-6 md:px-20 bg-gradient-to-b from-white to-blue-50 text-gray-800">
      <h2 className="text-4xl font-bold text-center mb-12 text-blue-700">
        Our Services
      </h2>

      {/* Robotics Education */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition transform hover:-translate-y-2 p-8 text-center border border-gray-100"
          >
            <div className="text-5xl mb-4">{service.icon}</div>
            <h3 className="text-xl font-semibold text-blue-700 mb-3">
              {service.title}
            </h3>
            <p className="text-gray-600 leading-relaxed">{service.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;
