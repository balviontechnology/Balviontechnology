import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import About from "./pages/About";
import Services from "./pages/Services";
import Insights from "./pages/Insights";
import Careers from "./pages/Careers";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
// import ThankYou from "./pages/ThankYou";


// Smooth scroll for hash links
function ScrollToHashElement() {
  useEffect(() => {
    const handleHashChange = () => {
      const { hash } = window.location;
      if (hash) {
        const target = document.querySelector(hash);
        if (target) {
          target.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);
  return null;
}


function LandingPage() {
  return (
    <div className="font-sans text-gray-900 bg-white overflow-hidden scroll-smooth">

      <Navbar />

      <HeroSection />

      <section id="about" className="py-20 bg-gray-50">
        <About />
      </section>

      <section id="services" className="py-20 bg-white">
        <Services />
      </section>

      <section id="insights" className="py-20 bg-white">
        <Insights />
      </section>

      <section id="careers" className="py-20 bg-gray-50">
        <Careers />
      </section>

      <section id="contact" className="py-20 bg-white">
        <Contact />
      </section>

      <Footer />
    </div>
  );
}


export default function App() {
  return (
    <Router>
      <ScrollToHashElement />

      <Routes>
        {/* Main Website */}
        <Route path="/" element={<LandingPage />} />

        {/* Thank You Page */}
        {/* <Route path="/thank-you" element={<ThankYou />} /> */}
      </Routes>
    </Router>
  );
}

