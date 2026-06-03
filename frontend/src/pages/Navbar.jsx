import React, { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo2-r.png";
import logoName from "../assets/logoname.png";
import logoNameMobile from "../assets/logoname.png";

const navLinks = [
  { name: "Home", href: "#hero" },
  { name: "Services", href: "#products" },
  { name: "Insights", href: "#insights" },
  { name: "Careers", href: "#careers" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("#hero");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);

      const sections = navLinks
        .map((link) => document.querySelector(link.href))
        .filter(Boolean);

      let current = "#hero";

      sections.forEach((section) => {
        const top = section.offsetTop - 120;
        if (window.scrollY >= top) {
          current = `#${section.id}`;
        }
      });

      setActiveSection(current);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href) => (e) => {
    e.preventDefault();
    const target = document.querySelector(href);

    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveSection(href);
      setIsOpen(false);
    }
  };

  return (
    <div className="fixed left-0 right-0 top-4 z-50 px-4 md:px-4">
      <nav
        className={`mx-auto max-w-6xl rounded-full border transition-all duration-500 ${
          isScrolled
            ? "border-sky-200/70 bg-white/72 shadow-[0_12px_36px_rgba(14,116,144,0.12)] backdrop-blur-xl"
            : "border-white/70 bg-white/58 shadow-[0_8px_28px_rgba(14,116,144,0.08)] backdrop-blur-lg"
        }`}
      >
        <div className="flex items-center justify-between px-4 py-2 md:px-5">
          <a
            href="#hero"
            onClick={handleNavClick("#hero")}
            className="flex min-w-0 items-center gap-2.5 pl-1 sm:pl-0"
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border border-sky-100/80 shadow-[0_6px_18px_rgba(14,116,144,0.08)] md:h-11 md:w-11">
              <img
                src={logo}
                alt="Balvion logo"
                className="h-8 w-8 object-contain md:h-9 md:w-9"
              />
            </div>

            <img
              src={logoNameMobile}
              alt="Balvion Technologies"
              className="block h-6 w-auto object-contain sm:hidden scale-105 ml-1"
            />

            <img
              src={logoName}
              alt="Balvion Technologies"
              className="hidden h-6 w-auto object-contain sm:block md:h-7"
            />
          </a>

          <div className="hidden items-center gap-1 rounded-full border border-sky-100/80 bg-sky-50/70 p-1 lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={handleNavClick(link.href)}
                className={`rounded-full px-4 py-1.5 text-sm font-medium transition-all duration-300 ${
                  activeSection === link.href
                    ? "bg-white text-sky-700 shadow-[0_4px_14px_rgba(14,116,144,0.08)]"
                    : "text-slate-700 hover:bg-white hover:text-sky-700 hover:shadow-[0_4px_14px_rgba(14,116,144,0.08)]"
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="hidden items-center lg:flex">
            <a
              href="#contact"
              onClick={handleNavClick("#contact")}
              className="rounded-full border border-sky-200 bg-gradient-to-r from-sky-600 to-cyan-600 px-5 py-2 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_10px_24px_rgba(14,116,144,0.20)]"
            >
              Explore More
            </a>
          </div>

          <button
            onClick={() => setIsOpen((prev) => !prev)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-sky-200/80 bg-white/70 text-slate-700 transition hover:bg-white lg:hidden"
            aria-label="Toggle menu"
            type="button"
          >
            {isOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>

        {isOpen && (
          <div className="border-t border-sky-100/80 px-4 pb-4 pt-2 lg:hidden">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={handleNavClick(link.href)}
                  className={`rounded-2xl px-4 py-3 text-sm font-medium transition-all duration-300 ${
                    activeSection === link.href
                      ? "bg-sky-100 text-sky-700"
                      : "bg-white/70 text-slate-700 hover:bg-sky-50 hover:text-sky-700"
                  }`}
                >
                  {link.name}
                </a>
              ))}

              <a
                href="#contact"
                onClick={handleNavClick("#contact")}
                className="mt-2 rounded-2xl bg-gradient-to-r from-sky-600 to-cyan-600 px-4 py-3 text-center text-sm font-semibold text-white"
              >
                Explore More
              </a>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
}