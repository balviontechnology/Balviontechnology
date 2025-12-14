import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import hero1 from "../assets/hero1.jpg";
import hero2 from "../assets/hero2.webp";
import hero3 from "../assets/hero3.jpg";
import videoBg from "../assets/robotics-video.mp4"; // add a short robotics or tech video here

const slides = [videoBg,hero1, hero2, hero3];

const HeroSlider = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="relative w-full h-screen overflow-hidden">
      {/* 🎥 Background video */}
      <video
        className="absolute w-full h-full object-cover"
        src={videoBg}
        autoPlay
        loop
        muted
      />

      {/* 🖼️ Image Overlay Slides */}
      <AnimatePresence>
        <motion.img
          key={index}
          src={slides[index]}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5 }}
          className="absolute w-full h-full object-cover opacity-70"
        />
      </AnimatePresence>

      {/* ✨ Overlay Text */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white bg-black/40">
        <motion.h1
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="text-5xl md:text-7xl font-extrabold drop-shadow-lg"
        >
          Innovating Education with Robotics
        </motion.h1>
        <motion.p
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="mt-6 text-xl md:text-2xl max-w-3xl text-gray-200"
        >
          Empowering Schools & Colleges with hands-on technology learning.
        </motion.p>
      </div>
    </section>
  );
};

export default HeroSlider;
