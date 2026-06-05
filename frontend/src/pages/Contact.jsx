import { motion } from "framer-motion";
import { Send, FileText, Phone, Mail } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    company: "",
    resume: null,
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "resume") {
      setForm((prev) => ({ ...prev, resume: files?.[0] || null }));
      return;
    }
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    try {
      const data = new FormData();
      data.append("name", form.name);
      data.append("email", form.email);
      data.append("phone", form.phone);
      data.append("message", form.message);
      data.append("company", form.company);
      if (form.resume) data.append("resume", form.resume);

      // The API URL is hardcoded to the live backend server
      const res = await fetch("https://api.balviontech.com/api/contact", {
        method: "POST",
        body: data,
      });

      const result = await res.json();

      if (result.success) {
        setStatus("Application sent successfully.");
        setForm({
          name: "",
          email: "",
          phone: "",
          message: "",
          company: "",
          resume: null,
        });
        e.target.reset();
      } else {
        setStatus(result.message || "Something went wrong.");
      }
    } catch (err) {
      setStatus("Server error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[linear-gradient(180deg,#f8fbff_0%,#eef7ff_100%)] px-6 py-24"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[8%] top-16 h-44 w-44 rounded-full bg-sky-200/30 blur-3xl" />
        <div className="absolute right-[8%] bottom-10 h-52 w-52 rounded-full bg-cyan-200/30 blur-3xl" />
      </div>

      <div className="relative mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.95fr_1.05fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="rounded-[34px] border border-sky-100/80 bg-white/85 p-8 shadow-[0_24px_70px_rgba(15,23,42,0.08)] backdrop-blur-xl md:p-12"
        >
          <p className="mb-4 text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-sky-700">
            Contact
          </p>

          <h2 className="max-w-xl text-4xl font-black leading-tight tracking-[-0.05em] text-slate-900 md:text-5xl">
            Send your application through the contact form.
          </h2>

          <p className="mt-6 max-w-xl text-base leading-8 text-slate-600 md:text-lg">
            Share your details, resume, and message. Our team will review your
            submission and get back when there is a suitable opportunity.
          </p>

          <div className="mt-10 space-y-4 text-sm text-slate-600">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-sky-50 text-sky-700">
                <Phone size={18} />
              </span>
              <span>+91 81100 54916</span>
            </div>

            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-sky-50 text-sky-700">
                <Mail size={18} />
              </span>
              <span>hr@balviontech.com</span>
            </div>

            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-sky-50 text-sky-700">
                <FileText size={18} />
              </span>
              <span>PDF resume required</span>
            </div>
          </div>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          encType="multipart/form-data"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
          className="rounded-[34px] border border-sky-100/80 bg-white/88 p-8 shadow-[0_24px_70px_rgba(15,23,42,0.08)] backdrop-blur-xl md:p-12"
        >
          <div className="grid gap-5 md:grid-cols-2">
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              placeholder="Your name"
              className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-sky-400 placeholder:text-slate-400"
            />

            <input
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              required
              placeholder="Email address"
              className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-sky-400 placeholder:text-slate-400"
            />

            <input
              name="phone"
              value={form.phone}
              onChange={handleChange}
              required
              placeholder="Phone number"
              className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-sky-400 placeholder:text-slate-400"
            />

            <input
  name="resume"
  type="file"
  accept="application/pdf"
  onChange={handleChange}
  required
  className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none file:mr-4 file:rounded-full file:border-0 file:bg-sky-50 file:px-4 file:py-2 file:font-semibold file:text-sky-700"
/>
          </div>

          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            required
            rows={6}
            placeholder="Tell us about your background or the role you’re interested in"
            className="mt-5 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-sky-400 placeholder:text-slate-400"
          />

          <input
            type="text"
            name="company"
            value={form.company}
            onChange={handleChange}
            className="hidden"
            tabIndex={-1}
            autoComplete="off"
          />

          <div className="mt-6 flex items-center justify-between gap-4">
            <p className="text-sm text-slate-500">
              Upload PDF only. Max 5MB.
            </p>

            <button
              type="submit"
              disabled={loading}
              className="inline-flex items-center gap-2 rounded-full bg-sky-600 px-6 py-3 text-sm font-semibold text-white shadow-[0_14px_30px_rgba(2,132,199,0.20)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-sky-700 disabled:cursor-not-allowed disabled:opacity-70"
            >
              {loading ? "Sending..." : "Send Application"}
              <Send size={16} />
            </button>
          </div>

          {status && (
            <p className="mt-4 text-sm font-medium text-slate-600">{status}</p>
          )}
        </motion.form>
      </div>
    </section>
  );
}