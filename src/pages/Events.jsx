import { motion } from "framer-motion";
import { CalendarDays, MapPin, Users, Rocket } from "lucide-react";

export default function Events() {
  const events = [
    {
      title: "National Robotics Workshop 2025",
      date: "March 15, 2025",
      location: "IIT Madras, Chennai",
      category: "Robotics",
      desc: "A 2-day intensive robotics camp designed for college innovators. Learn AI, IoT, and automation from industry experts.",
      icon: <Rocket className="text-blue-600" size={28} />,
    },
    {
      title: "STEM Learning for Schools",
      date: "April 10, 2025",
      location: "Chinmaya Vidyalaya, Coimbatore",
      category: "Education",
      desc: "Empowering school students to explore STEM through hands-on robotics and coding challenges.",
      icon: <Users className="text-blue-600" size={28} />,
    },
    {
      title: "HR Leadership Summit 2025",
      date: "May 25, 2025",
      location: "Bangalore Tech Park",
      category: "HR & Careers",
      desc: "Join top HR professionals and CEOs to discuss the future of hiring, skill development, and employee engagement.",
      icon: <CalendarDays className="text-blue-600" size={28} />,
    },
  ];

  return (
    <section
      id="events"
      className="relative py-24 bg-gradient-to-b from-white via-blue-50 to-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Upcoming <span className="text-blue-600">Events</span>
        </motion.h2>

        <motion.p
          className="text-gray-600 max-w-2xl mx-auto mb-16 text-lg"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Explore our hands-on workshops, HR leadership programs, and tech-driven
          educational events across India.
        </motion.p>

        {/* Event Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {events.map((e, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="relative bg-white rounded-3xl p-8 shadow-lg border border-blue-100 hover:shadow-2xl hover:border-blue-400 transition-all duration-300"
            >
              <div className="flex justify-center mb-4">{e.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{e.title}</h3>
              <p className="text-gray-600 mb-3">{e.desc}</p>
              <div className="text-sm text-gray-500 mb-2 flex items-center justify-center gap-1">
                <CalendarDays size={16} /> {e.date}
              </div>
              <div className="text-sm text-gray-500 flex items-center justify-center gap-1">
                <MapPin size={16} /> {e.location}
              </div>
              <span className="mt-4 inline-block text-sm font-medium text-blue-500 bg-blue-100 rounded-full px-3 py-1">
                {e.category}
              </span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Decorative glowing shapes */}
      <div className="absolute top-0 left-10 w-72 h-72 bg-blue-200 rounded-full blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-blue-300 rounded-full blur-3xl opacity-40 animate-pulse"></div>
    </section>
  );
}
