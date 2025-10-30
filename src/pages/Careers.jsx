import { motion } from "framer-motion";
import { Briefcase, Users, ChevronRight } from "lucide-react";

export default function Careers() {
  const openings = [
    {
      title: "HR SERVICES",
      type: "Full Time • Chennai / Remote",
      desc: "Comprehensive workforce solutions including placement, compliance, and international staffing support.",
      icon: <Users className="text-blue-500" size={28} />,
    },
    {
      title: "STEM Educator (Robotics)",
      type: "Full Time • On-site",
      desc: "Deliver hands-on STEM programs using robotics kits, Arduino, and AI tools for schools and training centers.",
      icon: <Users className="text-green-500" size={28} />,
    },
    {
      title: "Creative Designer",
      type: "Contract • Hybrid",
      desc: "Design digital campaigns, UI/UX components, and visual assets that reflect creativity and future learning.",
      icon: <Briefcase className="text-pink-500" size={28} />,
    },
  ];

  return (
    <section
      id="careers"
      className="relative py-24 bg-gradient-to-b from-white to-blue-50 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Heading */}
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Join Our <span className="text-blue-600">Innovators</span>
        </motion.h2>

        <motion.p
          className="text-gray-600 max-w-2xl mx-auto mb-16 text-lg"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          We're on a mission to shape the next generation of thinkers, creators,
          and problem solvers. At Balvion, innovation meets impact — join us and
          be part of the change.
        </motion.p>

        {/* Job Openings */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {openings.map((job, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="relative bg-white rounded-3xl p-8 shadow-lg border border-gray-100 hover:border-blue-400 hover:shadow-2xl transition-all duration-300 text-left"
            >
              <div className="mb-4">{job.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-1">
                {job.title}
              </h3>
              <p className="text-sm text-gray-500 mb-3">{job.type}</p>
              <p className="text-gray-600 mb-4">{job.desc}</p>
              <a
                href="#contact"
                className="inline-flex items-center text-blue-600 font-semibold hover:underline"
              >
                Apply Now <ChevronRight className="ml-1" size={18} />
              </a>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="mt-20 bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-12 px-6 rounded-3xl shadow-2xl"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-3">
            Can’t find the right role?
          </h3>
          <p className="text-lg mb-6">
            We’re always looking for passionate people to join our team. Drop us
            your CV and we’ll get in touch!
          </p>
          <a
            href="#contact"
            className="bg-white text-blue-700 px-6 py-3 rounded-full font-semibold hover:bg-blue-100 transition"
          >
            Send Your Resume
          </a>
        </motion.div>
      </div>

      {/* Background glow */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-300 opacity-30 blur-3xl rounded-full animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-indigo-300 opacity-40 blur-3xl animate-pulse"></div>
    </section>
  );
}
