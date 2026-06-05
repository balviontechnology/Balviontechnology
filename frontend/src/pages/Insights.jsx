import { motion } from "framer-motion";
import { Lightbulb, Newspaper, Brain, ArrowRight } from "lucide-react";

const insights = [
  {
    title: "How Robotics is Transforming STEM Learning in Schools",
    desc: "Discover how hands-on robotics education is inspiring creativity, teamwork, and practical problem-solving among young learners.",
    icon: Lightbulb,
    iconClass: "text-amber-500",
    category: "Education",
  },
  {
    title: "AI & HR: The Future of Intelligent Hiring",
    desc: "See how automation, AI-assisted screening, and smarter workflows are reshaping talent acquisition and employee engagement.",
    icon: Brain,
    iconClass: "text-sky-600",
    category: "HR Tech",
  },
  {
    title: "Innovation Lab Platforms for Future-Ready Institutions",
    desc: "Explore CoE, Balvion Robotics Lab, ATL, STEM Innovation Lab, and AI, IoT & Automation Lab models for modern campuses.",
    icon: Newspaper,
    iconClass: "text-emerald-500",
    category: "Innovation",
  },
];

export default function Insights() {
  return (
    <section
      id="insights"
      className="relative overflow-hidden bg-[linear-gradient(180deg,#f8fbff_0%,#ffffff_45%,#f5f9ff_100%)] px-6 py-24"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[8%] top-16 h-40 w-40 rounded-full bg-sky-200/30 blur-3xl" />
        <div className="absolute right-[10%] bottom-10 h-48 w-48 rounded-full bg-cyan-200/30 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        <div className="mb-14 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <motion.p
              className="mb-4 text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-sky-700"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5 }}
            >
              Insights
            </motion.p>

            <motion.h2
              className="max-w-2xl text-4xl font-black leading-tight tracking-[-0.05em] text-slate-900 md:text-5xl"
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, delay: 0.05 }}
            >
              Thought leadership shaped by learning, hiring, and innovation.
            </motion.h2>
          </div>

          <motion.p
            className="max-w-xl text-base leading-8 text-slate-500 md:text-lg"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, delay: 0.12 }}
          >
            Explore selected perspectives from Balvion across robotics education,
            HR transformation, and innovation-driven learning environments.
          </motion.p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {insights.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="group relative rounded-[30px] border border-sky-100/80 bg-white/88 p-7 shadow-[0_18px_50px_rgba(15,23,42,0.06)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1.5 hover:border-sky-200 hover:shadow-[0_28px_70px_rgba(14,116,144,0.10)]"
              >
                <div className="mb-6 flex items-start justify-between gap-4">
                  <div
                    className={`inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-50 ${item.iconClass} shadow-[inset_0_1px_0_rgba(255,255,255,0.7)]`}
                  >
                    <Icon size={24} strokeWidth={1.9} />
                  </div>

                  <div className="flex flex-col items-end gap-2">
                    <span className="rounded-full bg-sky-50 px-3 py-1 text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-sky-700">
                      {item.category}
                    </span>
                    <span className="text-sm text-slate-400">{item.date}</span>
                  </div>
                </div>

                <h3 className="max-w-[18ch] text-[1.5rem] font-semibold leading-[1.1] tracking-[-0.04em] text-slate-900">
                  {item.title}
                </h3>

                <p className="mt-4 text-[0.98rem] leading-7 text-slate-600">
                  {item.desc}
                </p>

                <div className="mt-8 flex items-center justify-between">
                  <span className="text-sm font-medium text-slate-400">
                    Balvion perspective
                  </span>

                  <a
  href="#contact"
  className="inline-flex items-center gap-2 rounded-full bg-sky-600 px-5 py-3 text-sm font-bold text-white shadow-[0_14px_30px_rgba(2,132,199,0.22)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-sky-700"
>
  Contact
  <ArrowRight size={16} />
</a>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}