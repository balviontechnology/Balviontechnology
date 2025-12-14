import { motion } from "framer-motion";
import { Lightbulb, Newspaper, Brain } from "lucide-react";

export default function Insights() {
  const insights = [
    {
      title: "How Robotics is Transforming STEM Learning in Schools",
      date: "Oct 2025",
      desc: "Discover how hands-on robotics education is inspiring creativity, teamwork, and problem-solving among young learners.",
      icon: <Lightbulb className="text-yellow-500" size={28} />,
      category: "Education",
    },
    {
      title: "AI & HR: The Future of Intelligent Hiring",
      date: "Sep 2025",
      desc: "Learn how artificial intelligence and automation are reshaping talent acquisition and employee engagement.",
      icon: <Brain className="text-blue-500" size={28} />,
      category: "HR Tech",
    },
    {
      title: "Innovation Lab platforms",
      date: "Aug 2025",
      desc: (
  <div>
    <p>
      Center of Excellence (CoE)<br />
      Balvion Robotics Lab<br />
      Atal Tinkering Lab (ATL)<br />
      STEM Innovation & Learning Lab<br />
      AI, IoT & Automation Lab
    </p>
  </div>
),

      icon: <Newspaper className="text-green-500" size={28} />,
      category: "Innovation",
    },
  ];

  return (
    <section
      id="insights"
      className="relative py-24 bg-gradient-to-b from-blue-50 via-white to-blue-50 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Insights & <span className="text-blue-600">Innovation</span>
        </motion.h2>

        <motion.p
          className="text-gray-600 max-w-2xl mx-auto mb-16 text-lg"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Stay updated with trends, case studies, and thought leadership that
          drive the future of Robotics Education and Human Resource Innovation.
        </motion.p>

        {/* Insights Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {insights.map((i, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="relative bg-white rounded-3xl p-8 shadow-lg border border-gray-100 hover:border-blue-400 hover:shadow-2xl transition-all duration-300"
            >
              <div className="flex justify-center mb-4">{i.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{i.title}</h3>
              <p className="text-gray-600 mb-3">{i.desc}</p>
              {/* <div className="text-sm text-gray-500">{i.date}</div> */}
              <span className="mt-4 inline-block text-sm font-medium text-blue-500 bg-blue-100 rounded-full px-3 py-1">
                {i.category}
              </span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Soft glowing shapes */}
      <div className="absolute top-10 right-20 w-72 h-72 bg-blue-200 rounded-full blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-indigo-300 rounded-full blur-3xl opacity-40 animate-pulse"></div>
    </section>
  );
}
