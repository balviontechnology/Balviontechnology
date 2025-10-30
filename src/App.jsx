import React, { useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";

// 🌟 Components
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Footer from "./components/Footer";

// 🌍 Pages
import About from "./pages/About";
import Services from "./pages/Services";
import Events from "./pages/Events";
import Insights from "./pages/Insights";
import Careers from "./pages/Careers";
import Contact from "./pages/Contact";

// 🌀 Smooth scroll to hash elements
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

// 🚀 Main App Component
function App() {
  return (
    <Router>
      <ScrollToHashElement />
      <div className="font-sans text-gray-900 bg-white overflow-hidden scroll-smooth">
        {/* Navbar */}
        <Navbar />

        {/* Hero Section with dynamic slides / video */}
        <HeroSection />

        {/* About Section */}
        <section id="about" className="py-20 bg-gray-50">
          <About />
        </section>

        {/* Services Section */}
        <section id="services" className="py-20 bg-white">
          <Services />
        </section>

        {/* Events Section */}
        <section id="events" className="py-20 bg-gray-50">
          <Events />
        </section>

        {/* Insights Section */}
        <section id="insights" className="py-20 bg-white">
          <Insights />
        </section>

        {/* Careers Section */}
        <section id="careers" className="py-20 bg-gray-50">
          <Careers />
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-white">
          <Contact />
        </section>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
