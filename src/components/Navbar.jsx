import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo2-r.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Insights", href: "#insights" },
    { name: "Careers", href: "#careers" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 bg-white ${
        isScrolled ? "shadow-md" : "shadow-none"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

       <a href="#hero" className="flex items-center gap-4">
  <div className="flex items-center gap-4 px-4 py-2 rounded-2xl transition-all duration-300">

    {/* Logo */}
    <div className="flex items-center justify-center rounded-xl bg-white w-16 h-16 md:w-20 md:h-20 shadow-md">
      <img
        src={logo}
        alt="Company Logo"
        className="w-1584 h-436 md:w-1584 md:h-436 object-contain drop-shadow-lg"
      />
    </div>

    {/* Text */}
    <div className="flex flex-col leading-none select-none">
      <span
        className="text-3xl md:text-4xl font-extrabold font-[Poppins]"
        style={{ color: "#3edaf0" }}
      >
        Balvion
      </span>

      <span
        className="text-3xl md:text-4xl font-extrabold font-[Poppins]"
        style={{ color: "#3edaf0" }}
      >
        Technologies
      </span>
    </div>
  </div>
</a>


        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-sm font-medium text-gray-800 hover:text-indigo-600`}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-800"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md py-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block px-6 py-2 text-gray-800 hover:bg-gray-100"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
