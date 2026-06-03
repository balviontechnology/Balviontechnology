import { motion } from "framer-motion";
import { Briefcase, ChevronRight } from "lucide-react";

export default function Careers() {
  return (
    <section
      id="careers"
      className="relative overflow-hidden bg-[linear-gradient(180deg,#ffffff_0%,#f4f8ff_100%)] px-6 py-24"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[8%] top-10 h-72 w-72 rounded-full bg-sky-200/30 blur-3xl" />
        <div className="absolute bottom-0 right-[8%] h-72 w-72 rounded-full bg-indigo-200/30 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="overflow-hidden rounded-[34px] border border-sky-100/80 bg-white/88 shadow-[0_24px_70px_rgba(15,23,42,0.08)] backdrop-blur-xl"
        >
          <div className="grid gap-0 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="p-8 md:p-12 lg:p-14">
              <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-sky-50 text-sky-700 shadow-[inset_0_1px_0_rgba(255,255,255,0.7)]">
                <Briefcase size={28} strokeWidth={1.9} />
              </div>

              <p className="mb-4 text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-sky-700">
                Careers
              </p>

              <h2 className="max-w-2xl text-4xl font-black leading-tight tracking-[-0.05em] text-slate-900 md:text-5xl">
                Build with us. Share your application through the contact page.
              </h2>

              <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 md:text-lg">
                Balvion Technologies works with schools, innovation platforms,
                STEM environments, and workforce solutions across India. If you
                want to contribute to robotics education, HR services, training,
                or innovation-led programs, send your profile through our contact
                page.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <span className="rounded-full border border-sky-100 bg-sky-50 px-4 py-2 text-sm text-slate-700">
                  Robotics Education
                </span>
                <span className="rounded-full border border-sky-100 bg-sky-50 px-4 py-2 text-sm text-slate-700">
                  HR Services
                </span>
                <span className="rounded-full border border-sky-100 bg-sky-50 px-4 py-2 text-sm text-slate-700">
                  Innovation Programs
                </span>
              </div>
            </div>

            <div className="flex items-center border-t border-sky-100/70 bg-[linear-gradient(180deg,#eff7ff_0%,#f8fbff_100%)] p-8 md:p-12 lg:border-l lg:border-t-0 lg:p-14">
              <div>
                <p className="text-sm font-medium uppercase tracking-[0.2em] text-slate-400">
                  Next step
                </p>

                <h3 className="mt-3 text-2xl font-bold tracking-[-0.04em] text-slate-900 md:text-3xl">
                  Go to the contact section and send your application.
                </h3>

                <p className="mt-4 max-w-md text-base leading-7 text-slate-600">
                  Share your details, experience, and area of interest through
                  the contact page. Our team will review your application and
                  connect when there is a suitable opportunity.
                </p>

                <a
                  href="#contact"
                  className="mt-8 inline-flex items-center gap-2 rounded-full bg-sky-600 px-6 py-3.5 text-sm font-semibold text-white shadow-[0_14px_30px_rgba(2,132,199,0.20)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-sky-700"
                >
                  Go to Contact
                  <ChevronRight size={18} />
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}