import { motion } from "framer-motion";
import {
  ArrowRight,
  Cpu,
  Brain,
  Users,
} from "lucide-react";

import roboed from "../assets/roboed.jpg";
import hiring from "../assets/stem.jpg";
import stemlab from "../assets/talent.jpeg";

const products = [
  {
    id: 0,
    icon: Cpu,
    title: "Robotics Education Kit",
    desc: "A practical robotics learning product for schools, colleges, and training environments.",
    tag: "Education Product",
    image: roboed,
    accent: "from-sky-700/80 via-cyan-700/50 to-slate-950/85",
    points: ["Hands-on learning", "College ready", "Friendly setup"],
  },
  {
    id: 1,
    icon: Brain,
    title: "STEM & AI Lab Program",
    desc: "An interactive learning product designed for coding, STEM, and AI classroom experiences.",
    tag: "STEM Product",
    image: stemlab,
    accent: "from-blue-700/80 via-sky-700/50 to-slate-950/85",
    points: ["STEM modules", "AI exposure", "School integration"],
  },
  {
    id: 2,
    icon: Users,
    title: "Custom Robotics Manufacturing",
    desc: "A tailored robotics manufacturing solution for custom-built robots, product development, and real-world deployment.",
    tag: "Manufacturing Product",
    image: hiring,
    accent: "from-cyan-700/80 via-teal-700/50 to-slate-950/85",
    points: ["Custom builds", "Prototype to production", "Deployment ready"],
  },
];

export default function Products() {
  return (
    <section
      id="products"
      className="relative z-10 overflow-hidden bg-[linear-gradient(180deg,#f8fbff_0%,#eef7ff_30%,#ffffff_100%)] px-6 py-24"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[8%] top-20 h-44 w-44 rounded-full bg-sky-200/40 blur-3xl" />
        <div className="absolute right-[10%] bottom-10 h-52 w-52 rounded-full bg-cyan-200/40 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        <div className="mb-14 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="mb-4 text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-sky-700">
              Products
            </p>

            <h2 className="max-w-2xl text-4xl font-black leading-tight tracking-[-0.05em] text-slate-900 md:text-5xl">
              Balvion's product experiences.
            </h2>
          </div>

        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {products.map((product, index) => {
            const Icon = product.icon;

            return (
              <motion.article
                key={product.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="group relative overflow-hidden rounded-[34px] border border-white/60 bg-white/50 shadow-[0_28px_70px_rgba(14,116,144,0.10)] backdrop-blur-xl"
              >
                <div className="relative h-[320px] overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
                  />

                  <div className={`absolute inset-0 bg-gradient-to-t ${product.accent}`} />
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_15%,rgba(255,255,255,0.16),transparent_30%)]" />

                  <div className="absolute inset-x-0 top-0 flex items-start justify-between p-6">
                    <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-2 text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-white backdrop-blur-md">
                      {product.tag}
                    </div>

                    <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-white/20 bg-white/12 text-white backdrop-blur-md shadow-[0_10px_30px_rgba(15,23,42,0.16)]">
                      <Icon size={24} strokeWidth={1.9} />
                    </div>
                  </div>

                  <div className="absolute inset-x-0 bottom-0 p-6 md:p-7">
                    <h3 className="max-w-[12ch] text-[1.8rem] font-light leading-[1.02] tracking-[-0.05em] text-white md:text-[2rem]">
                      {product.title}
                    </h3>

                    <p className="mt-4 max-w-[28ch] text-sm leading-7 text-white/88 md:text-[0.98rem]">
                      {product.desc}
                    </p>
                  </div>
                </div>

                <div className="space-y-5 p-6 md:p-7">
                  <div className="flex flex-wrap gap-2">
                    {product.points.map((point) => (
                      <span
                        key={point}
                        className="rounded-full border border-sky-100 bg-sky-50/80 px-3 py-2 text-xs text-slate-700 backdrop-blur-sm"
                      >
                        {point}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                        Product View
                      </p>
                      <p className="mt-1 text-sm text-slate-500">
                        Designed for modern delivery and presentation.
                      </p>
                    </div>

                    <a
                      href="#contact"
                      className="inline-flex items-center gap-2 rounded-full bg-sky-600 px-5 py-3 text-sm font-bold text-white shadow-[0_14px_30px_rgba(2,132,199,0.22)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-sky-700"
                    >
                      For more Details
                      <ArrowRight size={16} />
                    </a>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
} 