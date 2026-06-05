import {
  ArrowUpRight,
  Mail,
  MapPin,
  Phone,
  Linkedin,
  Instagram,
  MessageCircle,
} from "lucide-react";
import logo from "../assets/logo2-r.png";
import logoName from "../assets/logoname.png";

const footerLinks = {
  company: [
    { name: "About", href: "#about" },
    { name: "Services", href: "#products" },
    { name: "Insights", href: "#insights" },
    { name: "Careers", href: "#careers" },
  ],
  support: [
    { name: "Contact", href: "#contact" },
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Use", href: "#" },
    { name: "FAQ", href: "#" },
  ],
  social: [
    {
      name: "WhatsApp",
      href: "https://wa.me/918110054916",
      icon: MessageCircle,
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/balvion_tech?igsh=MXBycm9lMjNuZmY2dg==",
      icon: Instagram,
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/company/balvion-technologies/?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAb21jcASKUSxleHRuA2FlbQIxMQBzcnRjBmFwcF9pZA81NjcwNjczNDMzNTI0MjcAAaex-kO17WvVD2iv-Rzq7LyqPOJ4ASj-uyjvNpHvtbSsOO6YMjzb48wJhBmcEg_aem_yH4315e1yDWmBZOhOhHPOQ",
      icon: Linkedin,
    },
  ],
};

export default function Footer() {
  return (
    <footer
      id="footer"
      className="relative overflow-hidden border-t border-sky-100 bg-[linear-gradient(180deg,#f8fbff_0%,#eff6ff_100%)] px-6 py-16"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[8%] top-10 h-56 w-56 rounded-full bg-sky-200/30 blur-3xl" />
        <div className="absolute right-[10%] bottom-0 h-64 w-64 rounded-full bg-cyan-200/25 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_0.9fr_0.9fr_1fr]">
          <div>
            <a href="#hero" className="inline-flex items-center gap-3">
              <img src={logo} alt="Balvion logo" className="h-12 w-12 object-contain" />
              <img
                src={logoName}
                alt="Balvion Technologies"
                className="h-7 w-auto object-contain"
              />
            </a>

            <p className="mt-5 max-w-md text-sm leading-7 text-slate-600">
              Balvion Technologies builds robotics education, innovation
              platforms, HR services, and future-ready learning experiences.
            </p>

            <div className="mt-6 space-y-3 text-sm text-slate-600">
              <div className="flex items-center gap-3">
                <MapPin size={16} className="text-sky-600" />
                <span>India</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={16} className="text-sky-600" />
                <span>+91 88380 54916, +91 81100 54916</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={16} className="text-sky-600" />
                <a href="mailto:hr@balviontech.com" className="hover:text-sky-700">
                  hr@balviontech.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={16} className="text-sky-600" />
                <a href="mailto:admin@balviontech.com" className="hover:text-sky-700">
                  admin@balviontech.com
                </a>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-900">
              Company
            </h3>
            <ul className="mt-5 space-y-3 text-sm">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-slate-600 transition-colors hover:text-sky-700"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-900">
              Support
            </h3>
            <ul className="mt-5 space-y-3 text-sm">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-slate-600 transition-colors hover:text-sky-700"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-900">
              Connect
            </h3>

            <p className="mt-5 text-sm leading-7 text-slate-600">
              Follow updates, events, and innovation stories across our social channels.
            </p>

            <div className="mt-5 flex justify-center gap-3 lg:justify-start">
              {footerLinks.social.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-sky-100 bg-white text-slate-600 shadow-[0_8px_20px_rgba(15,23,42,0.05)] transition-all duration-300 hover:-translate-y-0.5 hover:text-sky-700"
                    aria-label={item.name}
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>

            <a
              href="#contact"
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-sky-600 px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-sky-700"
            >
              Send an inquiry
              <ArrowUpRight size={16} />
            </a>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-sky-100 pt-6 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
          <p>© 2026 Balvion Technologies. All rights reserved.</p>
          <p>Robotics • Education • HR Services • Innovation</p>
        </div>
      </div>
    </footer>
  );
}