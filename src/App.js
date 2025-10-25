import React from "react";
import logo from "./assets/logo-small.jpeg"; // first image
import banner from "./assets/logo-wide.jpeg"; // second image
import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline';

function App() {
  return (
    <div className="bg-black text-white min-h-screen font-sans">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-8 py-4 border-b border-gray-800">
        <div className="flex items-center space-x-3">
          <img src={logo} alt="Balvion Logo" className="h-10" />
          <h1 className="text-2xl font-bold text-cyan-400">Balvion</h1>
        </div>
        <div className="space-x-6 hidden md:flex">
          <a href="#about" className="hover:text-cyan-400">About</a>
          <a href="#services" className="hover:text-cyan-400">Services</a>
          <a href="#contact" className="hover:text-cyan-400">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col items-center text-center mt-20 px-6">
        <img src={banner} alt="Balvion Banner" className="w-2/3 md:w-1/2 mb-10" />
        <h2 className="text-4xl md:text-6xl font-bold text-cyan-400 mb-6">
          Empowering Innovation Through Technology
        </h2>
        <p className="text-gray-300 max-w-2xl mb-8">
          Balvion Technologies specializes in delivering cutting-edge software solutions,
          transforming ideas into digital success stories.
        </p>
        <button className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-3 rounded-full font-semibold">
          Get Started
        </button>
      </section>

      {/* About Section */}
      <section id="about" className="mt-32 px-8 md:px-20 text-center">
        <h3 className="text-3xl font-bold text-cyan-400 mb-4">About Us</h3>
        <p className="text-gray-400 max-w-2xl mx-auto">
          At Balvion Technologies, we combine creativity and technology to build
          digital products that make an impact. Our mission is to empower
          businesses with scalable, intelligent, and innovative tech solutions.
        </p>
      </section>

      {/* Services Section */}
      <section id="services" className="mt-32 px-8 md:px-20 text-center">
        <h3 className="text-3xl font-bold text-cyan-400 mb-10">Our Services</h3>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { title: "Web Development", desc: "Modern, scalable, and fast websites using React and Node.js." },
            { title: "Cloud Solutions", desc: "Deploy, manage, and scale applications on cloud platforms." },
            { title: "Data Analytics", desc: "Turn your data into actionable insights using AI and ML." },
          ].map((s) => (
            <div key={s.title} className="bg-gray-900 p-6 rounded-2xl shadow-lg hover:shadow-cyan-500/30 transition">
              <h4 className="text-xl font-semibold text-cyan-400 mb-2">{s.title}</h4>
              <p className="text-gray-400">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
<section id="contact" className="mt-32 px-8 md:px-20 text-center mb-20">
  <h3 className="text-3xl font-bold text-cyan-400 mb-4">Contact Us</h3>
  <p className="text-gray-400 mb-8">
    Let’s collaborate! Reach out to us for your next big idea.
  </p>
  <div className="flex flex-col items-center gap-4">
    <a 
      href="mailto:balvion.tech@gmail.com" 
       className="flex items-center justify-center gap-2 bg-cyan-500 hover:bg-cyan-600 px-6 py-3 rounded-full transition w-full max-w-xs"
    >
      <EnvelopeIcon className="h-5 w-5 text-white" />
      balvion.tech@gmail.com
    </a>
    <a 
      href="tel:+91 8110054916" 
      className="flex items-center justify-center gap-2 bg-cyan-500 hover:bg-cyan-600 px-6 py-3 rounded-full transition w-full max-w-xs"
    >
      <PhoneIcon className="h-5 w-5 text-white" />
      +918110054916
    </a>
  </div>
</section>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-6 text-center text-gray-500">
        © {new Date().getFullYear()} Balvion Technologies. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
