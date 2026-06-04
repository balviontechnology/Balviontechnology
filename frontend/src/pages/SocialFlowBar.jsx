import { motion } from "framer-motion";
import { MessageCircle, Instagram, Linkedin } from "lucide-react";

export default function SocialFlowBar() {
  return (
    <div className="fixed left-1 bottom-6 z-50 flex md:left-0 md:top-1/2 md:bottom-auto md:-translate-y-1/2">
      <div className="flex flex-col gap-2 rounded-full border border-sky-100/80 bg-white/65 px-2 py-2 shadow-[0_12px_30px_rgba(14,116,144,0.08)] backdrop-blur-xl md:flex-col md:rounded-r-xl md:rounded-l-none md:px-1.5 md:py-2">
        <motion.a
          href="https://wa.me/918110054916"
          target="_blank"
          rel="noreferrer"
          whileHover={{ x: 4, scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          className="flex h-9 w-9 items-center justify-center rounded-full bg-sky-50 text-sky-700 transition-all duration-300 hover:bg-sky-100"
          aria-label="WhatsApp"
        >
          <MessageCircle size={18} />
        </motion.a>

        <motion.a
          href="https://www.instagram.com/balvion_tech?igsh=MXBycm9lMjNuZmY2dg=="
          target="_blank"
          rel="noreferrer"
          whileHover={{ x: 4, scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          className="flex h-9 w-9 items-center justify-center rounded-full bg-sky-50 text-sky-700 transition-all duration-300 hover:bg-sky-100"
          aria-label="Instagram"
        >
          <Instagram size={18} />
        </motion.a>

        <motion.a
          href="https://www.linkedin.com/company/balvion-technologies/?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAb21jcASKUSxleHRuA2FlbQIxMQBzcnRjBmFwcF9pZA81NjcwNjczNDMzNTI0MjcAAaex-kO17WvVD2iv-Rzq7LyqPOJ4ASj-uyjvNpHvtbSsOO6YMjzb48wJhBmcEg_aem_yH4315e1yDWmBZOhOhHPOQ"
          target="_blank"
          rel="noreferrer"
          whileHover={{ x: 4, scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          className="flex h-9 w-9 items-center justify-center rounded-full bg-sky-50 text-sky-700 transition-all duration-300 hover:bg-sky-100"
          aria-label="LinkedIn"
        >
          <Linkedin size={18} />
        </motion.a>
      </div>
    </div>
  );
}