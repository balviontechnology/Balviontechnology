import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// 🖼️ Replace these paths with your actual images/videos in `src/assets`
import roboticsImg from "../assets/roboimage.png";
import hrImg from "../assets/hrimage.jpg";
import consultingImg from "../assets/hrimage.jpg";
// import heroVideo from "../assets/robotics-video.mp4";

const slides = [
  {
    id: 1,
    title: "Empowering Future Innovators",
    subtitle: "Explore the world of Robotics Education",
    image: roboticsImg,
  },
  {
    id: 2,
    title: "Building Stronger Teams",
    subtitle: "Expert HR & Staffing Solutions",
    image: hrImg,
  },
  {
    id: 3,
    title: "Shaping Career Growth",
    subtitle: "Professional Career Consulting",
    image: consultingImg,
  },
];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="hero" className="relative h-screen w-full overflow-hidden">
      {/* Background Video */}
      {/* <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover opacity-40"
      >
        <source src={heroVideo} type="video/mp4" />
      </video> */}

      {/* Fallback background image for devices that block autoplay */}
      <img
        src={slides[current].image}
        alt="background"
        className="absolute top-0 left-0 w-full h-full object-cover opacity-50"
      />

      {/* Animated Text */}
      <div className="relative z-10 flex flex-col justify-center items-center h-full text-center px-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={slides[current].id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <h1 className="text-4xl md:text-6xl font-bold drop-shadow-lg mb-4">
              {slides[current].title}
            </h1>
            <p className="text-lg md:text-2xl drop-shadow-md mb-8">
              {slides[current].subtitle}
            </p>
            <a
              href="#services"
              className="px-6 py-3 bg-indigo-600 text-white rounded-full text-lg font-semibold hover:bg-indigo-700 transition-all"
            >
              Learn More
            </a>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/70"></div>
    </section>
  );
};

export default HeroSection;
