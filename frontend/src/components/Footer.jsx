import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-8">
        <div>
          <h2 className="text-xl font-semibold mb-4">About Us</h2>
          <p className="text-gray-400 text-sm">
            Empowering learning and innovation through robotics, HR consulting,
            and technical education.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">Quick Links</h2>
          <ul className="space-y-2 text-gray-400">
            <li><a href="#services" className="hover:text-white">Our Services</a></li>
            {/* <li><a href="#events" className="hover:text-white">Technical Workshops</a></li> */}
            <li><a href="#careers" className="hover:text-white">HR Services</a></li>
            <li><a href="#contact" className="hover:text-white">Career Consulting</a></li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">Contact</h2>
          <p className="text-gray-400 text-sm">
            📍no 11, 9/8, Poompukar Nagar Street, VKL Nagar, Thudiyalur, Coimbatore, Tamil Nadu 641034 <br />
            📧 balvion.tech@gmail.com <br />
            ☎️ +91  8110054916
          </p>
        </div>
      </div>

      <div className="text-center text-gray-500 mt-8 text-sm border-t border-gray-700 pt-4">
        © {new Date().getFullYear()} Balvion Technologies. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
