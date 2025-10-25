import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import About from "./components/About";
import Services from "./components/Services";
import Insights from "./components/Insights";
import Events from "./components/Events";
import Careers from "./components/Careers";
import Contact from "./components/Contact";

const App = () => {
  return (
    <div className="font-sans">
      <Navbar />
      <HeroSection />
      <About />
      <Services />
      <Insights />
      <Events />
      <Careers />
      <Contact />
      <footer className="bg-gray-950 text-gray-300 text-center py-6">
        <p>
          © {new Date().getFullYear()} Balvion Technologies | Empowering Innovators &
          Professionals
        </p>
      </footer>
    </div>
  );
};

export default App;
