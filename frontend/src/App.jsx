import React from "react";
import Navbar from "./pages/Navbar";
import LandingIntro from "./pages/LandingIntro";
import Insights from "./pages/Insights";
import Careers from "./pages/Careers";
import Home from "./pages/Home";
import SocialFlowBar from "./pages/SocialFlowBar";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Footer from "./pages/Footer";
import ChatWidget from "./pages/ChatWidget";

export default function App() {
  const handleExplore = () => {
    const homeSection = document.getElementById("home-section");
    if (homeSection) {
      homeSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <div className="bg-[#030914] text-white">
      <Navbar />
      <LandingIntro onExplore={handleExplore} />
      <SocialFlowBar />
      <Home />
      <Services />
      <Insights />
      <Careers />
      <Contact />
      <Footer />
      <ChatWidget />
    </div>
  );
}