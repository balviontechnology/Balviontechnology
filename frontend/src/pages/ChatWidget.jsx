import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles } from "lucide-react";

import chatGif from "../assets/chat.gif";
import logo from "../assets/logo2.png";

const quickReplies = [
  {
    id: 1,
    question: "What does Balvion do?",
    answer:
      "Balvion Technologies works in robotics education, STEM learning, HR services, and innovation programs. We also offer custom robot manufacturing and import robotics based on specific requirements.",
  },
  {
    id: 2,
    question: "Do you offer school & colleges robotics programs?",
    answer:
      "Yes. We support schools and colleges with STEM education, lab setup, internship programs, certificate courses, project building, and curriculum support in AI and robotics.",
  },
  {
    id: 3,
    question: "What kinds of robots do you manufacture/provide?",
    answer:
      "We provide custom robots, imported robots based on requirements, serving robots, dining robots, and edtech robots for learning and demonstration use.",
  },
  {
    id: 4,
    question: "What services are available?",
    answer:
      "Our core services include custom robot manufacturing, robotics education, STEM and AI programs, and HR services. We also support training, hiring, and innovation-focused project development.",
  },
];

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [activeReply, setActiveReply] = useState(quickReplies[0]);

  return (
    <>
      <motion.button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.98 }}
        className="fixed bottom-6 right-6 z-50 flex h-16 w-16 items-center justify-center overflow-hidden rounded-full bg-white shadow-[0_14px_30px_rgba(2,132,199,0.25)] ring-1 ring-sky-100"
        aria-label="Open chat"
      >
        <img
          src={chatGif}
          alt="Chat"
          className="h-full w-full object-cover"
        />
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.96 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="fixed bottom-24 right-6 z-50 w-[92vw] max-w-[380px] overflow-hidden rounded-[28px] border border-sky-100 bg-white shadow-[0_30px_80px_rgba(15,23,42,0.18)]"
          >
            <div className="flex items-center justify-between bg-[linear-gradient(135deg,#eff8ff_0%,#f6fcff_100%)] px-5 py-4">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center overflow-hidden rounded-2xl bg-white shadow-[0_8px_18px_rgba(15,23,42,0.06)] ring-1 ring-sky-100">
                  <img
                    src={logo}
                    alt="Balvion logo"
                    className="h-8 w-8 object-contain"
                  />
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-900">
                    Balvion Assistant
                  </p>
                  <p className="text-xs text-slate-500">
                    Quick answers and guidance
                  </p>
                </div>
              </div>

              <Sparkles className="text-sky-500" size={18} />
            </div>

            <div className="max-h-[360px] space-y-3 overflow-y-auto px-5 py-4">
              <div className="rounded-2xl bg-slate-50 px-4 py-3 text-sm leading-6 text-slate-700">
                Hi, I’m the Balvion assistant. Choose a question below to get a quick answer.
              </div>

              <div className="flex flex-wrap gap-2">
                {quickReplies.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setActiveReply(item)}
                    className={`rounded-full px-3 py-2 text-xs font-medium transition ${
                      activeReply.id === item.id
                        ? "bg-sky-600 text-white"
                        : "bg-sky-50 text-slate-700 hover:bg-sky-100"
                    }`}
                  >
                    {item.question}
                  </button>
                ))}
              </div>

              <div className="rounded-2xl border border-sky-100 bg-white px-4 py-3 shadow-[0_8px_20px_rgba(15,23,42,0.04)]">
                <p className="text-sm font-semibold text-slate-900">
                  {activeReply.question}
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {activeReply.answer}
                </p>
              </div>
            </div>

            <div className="border-t border-sky-100 bg-slate-50 px-5 py-3 text-xs text-slate-500">
              For detailed help, use the Contact section below.
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}