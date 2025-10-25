import React, { useState } from "react";
import { Link } from "react-scroll";
import assets from "../assets"
const Navbar = () => {
  const [open, setOpen] = useState(false);

  const links = [
    "Home",
    "About Us",
    "Services",
    "Insights",
    "Events",
    "Careers",
    "Contact Us",
  ];

  return (
    <nav className="fixed w-full z-50 bg-white/90 backdrop-blur shadow-sm">
        
      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
              {/* Logo + Brand Name */}
    <div className="flex items-center space-x-2">
      <img 
        src={assets.logo}
        alt="Balvion Logo"
        className="h-10 object-contain"
      />
      <h1 className="text-2xl font-bold text-blue-700">Balvion Technologies</h1>
    </div>




        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-gray-700 font-medium">
          {links.map((link) => (
            <li key={link}>
              <Link
                to={link.replace(/\s+/g, "").toLowerCase()}
                smooth={true}
                duration={700}
                className="cursor-pointer hover:text-blue-600 transition"
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setOpen(!open)}
        >
          {open ? "✖" : "☰"}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <ul className="md:hidden flex flex-col bg-white text-center text-gray-800 py-4 shadow">
          {links.map((link) => (
            <li key={link} className="py-2">
              <Link
                to={link.replace(/\s+/g, "").toLowerCase()}
                smooth={true}
                duration={700}
                onClick={() => setOpen(false)}
                className="cursor-pointer hover:text-blue-600 transition"
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
