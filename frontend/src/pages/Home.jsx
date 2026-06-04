import React, { useEffect, useState } from "react";
import {
  ArrowRight,
  Cpu,
  Sparkles,
  Bot,
  CircuitBoard,
  BriefcaseBusiness,
  GraduationCap,
  Radar,
  Zap,
  Workflow,
} from "lucide-react";

import img1 from "../assets/img1.jpg";
import roboEd from "../assets/roboed.jpg";
import hrImage from "../assets/hrimage.jpg";

const cards = [
  {
    id: 0,
    image: img1,
    eyebrow: "Custom Robots",
    title: "Robotic solutions built for real-world engagement.",
    points: ["Edtech robots", "Dining & serving robots", "Reception"],
    badges: [Bot, CircuitBoard, Zap],
    theme: "from-sky-700/70 via-cyan-700/45 to-slate-950/80",
  },
  {
    id: 1,
    image: roboEd,
    eyebrow: "Robotics Edtech",
    title: "Learning experiences that turn curiosity into practical skills.",
    points: ["Seminar", "College", "Internship", "After school"],
    badges: [GraduationCap, Cpu, Workflow],
    theme: "from-blue-700/70 via-sky-700/45 to-slate-950/80",
  },
  {
    id: 2,
    image: hrImage,
    eyebrow: "HR Services",
    title: "Workforce support for growing organizations and careers.",
    points: ["IT", "Non-IT", "Core", "Recruitment"],
    badges: [BriefcaseBusiness, Sparkles, Radar],
    theme: "from-cyan-700/70 via-teal-700/45 to-slate-950/80",
  },
];

const flowItems = [
  { icon: Bot, label: "Robotics" },
  { icon: Cpu, label: "Automation" },
  { icon: CircuitBoard, label: "STEM Labs" },
  { icon: GraduationCap, label: "Edtech" },
  { icon: BriefcaseBusiness, label: "HR Services" },
  { icon: Sparkles, label: "Innovation" },
];

export default function Home() {
  const [active, setActive] = useState(0);
  const [cardsVisible, setCardsVisible] = useState(false);

  useEffect(() => {
    const target = document.getElementById("hero-cards-zone");
    if (!target) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setCardsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.28 }
    );

    observer.observe(target);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % cards.length);
    }, 3200);

    return () => clearInterval(timer);
  }, []);

  const getPosition = (index) => {
    if (index === active) return "center";
    if ((active + 1) % cards.length === index) return "right";
    return "left";
  };

  return (
    <>
      <div
        id="home-section"
        className="relative overflow-x-hidden bg-[linear-gradient(180deg,#f7fbff_0%,#eef8ff_28%,#ffffff_60%,#f8fbff_100%)] text-slate-800"
      >
        <div className="pointer-events-none absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_0%,rgba(125,211,252,0.22),transparent_65%),radial-gradient(ellipse_60%_40%_at_100%_100%,rgba(186,230,253,0.30),transparent_60%)]" />
        </div>

        <section id="hero" className="relative z-10 overflow-hidden pb-20 pt-28">
          <div className="hero-flow-bleed mb-12">
            <div className="hero-flow-viewport">
              <div className="hero-flow-track">
                <div className="hero-flow-group">
                  {flowItems.map((item, index) => {
                    const Icon = item.icon;
                    return (
                      <div key={`${item.label}-a-${index}`} className="hero-flow-pill">
                        <span className="hero-flow-icon">
                          <Icon size={18} strokeWidth={1.8} />
                        </span>
                        <span className="hero-flow-label">{item.label}</span>
                      </div>
                    );
                  })}
                </div>

                <div className="hero-flow-group" aria-hidden="true">
                  {flowItems.map((item, index) => {
                    const Icon = item.icon;
                    return (
                      <div key={`${item.label}-b-${index}`} className="hero-flow-pill">
                        <span className="hero-flow-icon">
                          <Icon size={18} strokeWidth={1.8} />
                        </span>
                        <span className="hero-flow-label">{item.label}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          <div className="px-6">
            <div className="mx-auto max-w-[1500px]">
              <p className="hero-eyebrow text-center">Balvion Technologies</p>

              <div className="hero-display-wrap">
                <h1 className="hero-display-line">A Smarter way to connect</h1>
              </div>

              <div className="hero-sub-wrap">
                <h2 className="hero-sub-line">
                  Robotics, Talent, and Transformation.
                </h2>
                <div className="hero-sub-underline" />
              </div>

              <p className="hero-copy hero-copy-wide">
                Work with Balvion through our core focus areas custom robots,
                robotics edtech, and HR services in a more immersive,
                interactive flow.
              </p>
            </div>
          </div>

          <div className="px-6">
            <div className="mx-auto max-w-7xl">
              <div
                id="hero-cards-zone"
                className={`relative mt-16 h-[520px] md:h-[560px] ${
                  cardsVisible ? "cards-visible" : ""
                }`}
                style={{ perspective: "1800px" }}
              >
                <div
                  className={`hero-side-note ${
                    cardsVisible ? "is-visible" : ""
                  }`}
                >
                  <div
                    className="hero-side-note-icon hero-side-note-robot"
                    aria-hidden="true"
                  >
                    <svg
                      viewBox="0 0 64 64"
                      className="robot-svg"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <defs>
                        <linearGradient
                          id="robotBody"
                          x1="12"
                          y1="10"
                          x2="52"
                          y2="54"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#f8fdff" />
                          <stop offset="1" stopColor="#d9f1ff" />
                        </linearGradient>
                        <linearGradient
                          id="robotAccent"
                          x1="20"
                          y1="20"
                          x2="46"
                          y2="46"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#39bdf8" />
                          <stop offset="1" stopColor="#1d4ed8" />
                        </linearGradient>
                        <filter
                          id="robotGlow"
                          x="-50%"
                          y="-50%"
                          width="200%"
                          height="200%"
                        >
                          <feGaussianBlur stdDeviation="2.5" result="blur" />
                          <feMerge>
                            <feMergeNode in="blur" />
                            <feMergeNode in="SourceGraphic" />
                          </feMerge>
                        </filter>
                      </defs>

                      <circle
                        cx="32"
                        cy="10"
                        r="3.2"
                        fill="url(#robotAccent)"
                        className="robot-antenna-dot"
                      />
                      <path
                        d="M32 13.5V19"
                        stroke="#2b6cb0"
                        strokeWidth="2.4"
                        strokeLinecap="round"
                        className="robot-antenna-line"
                      />

                      <rect
                        x="16"
                        y="18"
                        width="32"
                        height="24"
                        rx="10"
                        fill="url(#robotBody)"
                        stroke="rgba(29,78,216,0.18)"
                        strokeWidth="1.5"
                        className="robot-head"
                      />

                      <rect
                        x="20"
                        y="24"
                        width="24"
                        height="10"
                        rx="5"
                        fill="rgba(29,78,216,0.08)"
                        className="robot-face-panel"
                      />

                      <circle
                        cx="27"
                        cy="29"
                        r="2.4"
                        fill="url(#robotAccent)"
                        filter="url(#robotGlow)"
                        className="robot-eye robot-eye-left"
                      />
                      <circle
                        cx="37"
                        cy="29"
                        r="2.4"
                        fill="url(#robotAccent)"
                        filter="url(#robotGlow)"
                        className="robot-eye robot-eye-right"
                      />

                      <path
                        d="M27 36C28.8 37.6 35.2 37.6 37 36"
                        stroke="#2b6cb0"
                        strokeWidth="2"
                        strokeLinecap="round"
                        className="robot-mouth"
                      />
                      <path
                        d="M22 42V47"
                        stroke="#2b6cb0"
                        strokeWidth="2.4"
                        strokeLinecap="round"
                        className="robot-arm-left"
                      />
                      <path
                        d="M42 42V47"
                        stroke="#2b6cb0"
                        strokeWidth="2.4"
                        strokeLinecap="round"
                        className="robot-arm-right"
                      />
                      <path
                        d="M28 42V50"
                        stroke="#2b6cb0"
                        strokeWidth="2.4"
                        strokeLinecap="round"
                        className="robot-leg-left"
                      />
                      <path
                        d="M36 42V50"
                        stroke="#2b6cb0"
                        strokeWidth="2.4"
                        strokeLinecap="round"
                        className="robot-leg-right"
                      />
                    </svg>
                  </div>

                  <div className="hero-side-note-copy">
                    <span className="hero-side-note-label">Balvion</span>
                    <p className="hero-side-note-text">Built to explore.</p>
                  </div>
                </div>

                {cards.map((card, index) => {
                  const position = getPosition(index);
                  const positionClass =
                    position === "center"
                      ? "card-pos-center"
                      : position === "left"
                      ? "card-pos-left"
                      : "card-pos-right";

                  return (
                    <button
                      key={card.id}
                      type="button"
                      onClick={() => setActive(index)}
                      className={`hero-card absolute left-1/2 top-1/2 h-[420px] w-[290px] md:h-[470px] md:w-[360px] ${positionClass}`}
                    >
                      <div className="relative h-full w-full overflow-hidden rounded-[34px] border border-white/60 shadow-[0_30px_80px_rgba(14,116,144,0.16)]">
                        <img
                          src={card.image}
                          alt={card.eyebrow}
                          className="absolute inset-0 h-full w-full object-cover"
                        />

                        <div
                          className={`absolute inset-0 bg-gradient-to-t ${card.theme}`}
                        />
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_15%,rgba(255,255,255,0.18),transparent_28%)]" />

                        <div className="absolute inset-0 p-6 text-left md:p-7">
                          <div className="card-shell">
                            <div className="card-main">
                              <div>
                                <span className="card-eyebrow">
                                  {card.eyebrow}
                                </span>

                                <h2 className="card-title">{card.title}</h2>

                                <div className="mt-5 flex flex-wrap gap-2">
                                  {card.points.map((point) => (
                                    <span
                                      key={point}
                                      className="rounded-full border border-white/20 bg-white/10 px-3 py-2 text-xs text-white/95 backdrop-blur-sm md:text-sm"
                                    >
                                      {point}
                                    </span>
                                  ))}
                                </div>
                              </div>

                              <div className="mt-7 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-bold text-sky-700 shadow-[0_10px_24px_rgba(255,255,255,0.16)]">
                                Explore Area
                                <ArrowRight size={16} />
                              </div>
                            </div>

                            <div className="card-side">
                              <div className="card-icon-stack">
                                {card.badges.map((BadgeIcon, badgeIndex) => (
                                  <span
                                    key={badgeIndex}
                                    className="card-icon-badge"
                                    style={{
                                      transitionDelay: `${badgeIndex * 120}ms`,
                                    }}
                                  >
                                    <BadgeIcon size={18} strokeWidth={1.9} />
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>

              <div className="mt-8 flex justify-center gap-3">
                {cards.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setActive(i)}
                    className={`h-2.5 rounded-full transition-all duration-300 ${
                      i === active ? "w-10 bg-sky-600" : "w-2.5 bg-sky-200"
                    }`}
                    aria-label={`Go to card ${i + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>

      <style>{`
        .hero-flow-bleed {
          position: relative;
          left: 50%;
          right: 50%;
          width: 100vw;
          margin-left: -50vw;
          margin-right: -50vw;
        }

        .hero-flow-viewport {
        width: 100vw;
        overflow: hidden;
        padding: 0.35rem 0;
        /* mask-image removed */
      }

      .hero-flow-track {
        display: flex;
        align-items: center;
        width: max-content;
        min-width: max-content;
        animation: flowMarquee 16s linear infinite;
        will-change: transform;
      }

        .hero-flow-group {
          display: flex;
          align-items: center;
          gap: 1rem;
          flex-shrink: 0;
          padding-right: 1rem;
        }

        .hero-flow-pill {
          display: inline-flex;
          align-items: center;
          gap: 0.7rem;
          padding: 0.72rem 1rem;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.58);
          border: 1px solid rgba(148, 163, 184, 0.14);
          backdrop-filter: blur(10px);
          white-space: nowrap;
          flex: 0 0 auto;
          opacity: 1;
          transform: none;
          box-shadow: 0 10px 30px rgba(15, 23, 42, 0.035);
        }

        .hero-flow-icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 2.15rem;
          height: 2.15rem;
          border-radius: 999px;
          background: linear-gradient(135deg, rgba(219, 242, 255, 0.96), rgba(233, 250, 247, 0.96));
          color: #2166b2;
          flex: 0 0 auto;
        }

        .hero-flow-label {
          font-size: 0.92rem;
          font-weight: 500;
          color: #334155;
          letter-spacing: -0.01em;
        }

        .hero-eyebrow {
          color: #1d4f91;
          font-size: 0.9rem;
          font-weight: 600;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          margin-bottom: 1rem;
          opacity: 0;
          animation: heroFadeUp 0.9s cubic-bezier(0.16, 1, 0.3, 1) 0.15s forwards;
        }

        .hero-display-wrap {
          overflow: hidden;
        }

        .hero-display-line {
          font-size: clamp(3.8rem, 10vw, 8rem);
          line-height: 0.9;
          letter-spacing: -0.075em;
          color: #0b1020;
          font-weight: 300;
          text-align: center;
          white-space: nowrap;
          opacity: 0;
          transform: translateY(34px);
          animation: heroDisplayIn 1.05s cubic-bezier(0.16, 1, 0.3, 1) 0.24s forwards;
        }

        .hero-sub-wrap {
          margin-top: 0.8rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          opacity: 0;
          animation: heroFadeUp 0.95s cubic-bezier(0.16, 1, 0.3, 1) 0.42s forwards;
        }

        .hero-sub-line {
          font-size: clamp(1.45rem, 3.2vw, 2.4rem);
          line-height: 1.2;
          letter-spacing: -0.045em;
          text-align: center;
          font-weight: 400;
          background: linear-gradient(90deg, #1b5fae 0%, #1aa6d9 52%, #3abfa5 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .hero-sub-underline {
          width: min(240px, 28vw);
          height: 3px;
          border-radius: 999px;
          margin-top: 1rem;
          background: linear-gradient(90deg, rgba(27, 95, 174, 0.15), #1aa6d9, #3abfa5, rgba(58, 191, 165, 0.15));
          background-size: 200% 100%;
          animation: underlineShift 4.5s linear infinite;
          box-shadow: 0 0 24px rgba(26, 166, 217, 0.18);
        }

        .hero-copy {
          color: #526277;
          font-size: clamp(1rem, 1.4vw, 1.08rem);
          line-height: 1.9;
          font-weight: 400;
        }

        .hero-copy-wide {
          margin: 1.5rem auto 0;
          max-width: 47rem;
          text-align: center;
          opacity: 0;
          animation: heroFadeUp 0.95s cubic-bezier(0.16, 1, 0.3, 1) 0.56s forwards;
        }

        .hero-card {
          transform-style: preserve-3d;
          transition:
            transform 700ms cubic-bezier(0.16, 1, 0.3, 1),
            opacity 700ms cubic-bezier(0.16, 1, 0.3, 1),
            filter 700ms cubic-bezier(0.16, 1, 0.3, 1);
          will-change: transform, opacity, filter;
        }

        .card-pos-center {
          transform: translate(-50%, -50%) translateX(0) scale(1) rotateY(0deg);
          z-index: 30;
          opacity: 1;
          filter: blur(0);
        }

        .card-pos-left {
          transform: translate(-50%, -50%) translateX(-58%) scale(0.88) rotateY(-18deg);
          z-index: 10;
          opacity: 0.7;
          filter: blur(0);
        }

        .card-pos-right {
          transform: translate(-50%, -50%) translateX(58%) scale(0.88) rotateY(18deg);
          z-index: 10;
          opacity: 0.7;
          filter: blur(0);
        }

        .card-shell {
          height: 100%;
          display: grid;
          grid-template-columns: minmax(0, 1fr) 74px;
          align-items: stretch;
          gap: 0.9rem;
        }

        .card-main {
          min-width: 0;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .card-side {
          display: flex;
          justify-content: flex-end;
          align-items: flex-start;
          padding-top: 0.15rem;
        }

        .card-eyebrow {
          display: inline-flex;
          align-self: flex-start;
          width: fit-content;
          border-radius: 999px;
          border: 1px solid rgba(255, 255, 255, 0.25);
          background: rgba(255, 255, 255, 0.1);
          padding: 0.45rem 0.8rem;
          font-size: 0.68rem;
          font-weight: 600;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: white;
          backdrop-filter: blur(10px);
        }

        .card-title {
          margin-top: 1.15rem;
          font-size: clamp(1.45rem, 2.2vw, 2rem);
          font-weight: 300;
          line-height: 1.02;
          letter-spacing: -0.045em;
          color: white;
          max-width: 13.5rem;
          text-wrap: balance;
        }

        .card-icon-stack {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 0.7rem;
        }

        .card-icon-badge {
          width: 2.6rem;
          height: 2.6rem;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border-radius: 999px;
          color: white;
          background: rgba(255, 255, 255, 0.14);
          border: 1px solid rgba(255, 255, 255, 0.2);
          backdrop-filter: blur(14px);
          box-shadow: 0 10px 24px rgba(3, 7, 18, 0.16);
          opacity: 0;
          transform: translateY(16px) scale(0.92);
          transition:
            opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1),
            transform 0.7s cubic-bezier(0.16, 1, 0.3, 1),
            background 180ms ease;
        }

        .cards-visible .card-icon-badge {
          opacity: 1;
          transform: translateY(0) scale(1);
        }

        .card-icon-badge:nth-child(2) {
          margin-right: 0.65rem;
        }

        .card-icon-badge:nth-child(3) {
          margin-right: 0.2rem;
        }

        .hero-side-note {
          position: absolute;
          left: 0;
          top: 50%;
          width: min(280px, 24vw);
          transform: translateY(-50%) translateY(24px);
          display: flex;
          align-items: flex-start;
          gap: 0.9rem;
          padding: 1rem 1.05rem;
          border-radius: 1.4rem;
          background: rgba(255, 255, 255, 0.58);
          border: 1px solid rgba(148, 163, 184, 0.16);
          backdrop-filter: blur(14px);
          box-shadow: 0 18px 40px rgba(15, 23, 42, 0.06);
          opacity: 0;
          pointer-events: auto;
          transition:
            opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1),
            transform 0.7s cubic-bezier(0.16, 1, 0.3, 1);
          z-index: 40;
        }

        .hero-side-note.is-visible {
          opacity: 1;
          transform: translateY(-50%) translateY(0);
        }

        .hero-side-note-icon {
          width: 4.4rem;
          height: 4.4rem;
          border-radius: 999px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background: radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.95), rgba(219, 242, 255, 0.88));
          color: #1f6fb2;
          flex: 0 0 auto;
          box-shadow:
            inset 0 1px 0 rgba(255, 255, 255, 0.85),
            0 10px 24px rgba(29, 78, 216, 0.08);
          transition: transform 240ms cubic-bezier(0.16, 1, 0.3, 1), box-shadow 240ms ease;
        }

        .hero-side-note-robot {
          cursor: default;
        }

        .robot-svg {
          width: 5.2rem;
          height: 5.2rem;
          overflow: visible;
          display: block;
        }

        .hero-side-note:hover .hero-side-note-icon {
          transform: translateY(-2px) scale(1.04);
          box-shadow:
            inset 0 1px 0 rgba(255, 255, 255, 0.9),
            0 14px 28px rgba(29, 78, 216, 0.14);
        }

        .robot-head,
        .robot-face-panel,
        .robot-mouth,
        .robot-arm-left,
        .robot-arm-right,
        .robot-leg-left,
        .robot-leg-right,
        .robot-antenna-line,
        .robot-antenna-dot,
        .robot-eye {
          transition: transform 260ms cubic-bezier(0.16, 1, 0.3, 1), opacity 220ms ease;
          transform-origin: center;
        }

        .hero-side-note:hover .robot-head {
          transform: translateY(-1px);
        }

        .hero-side-note:hover .robot-eye-left {
          transform: translateX(-0.8px) scale(1.08);
        }

        .hero-side-note:hover .robot-eye-right {
          transform: translateX(0.8px) scale(1.08);
        }

        .hero-side-note:hover .robot-arm-left {
          transform: rotate(-8deg) translateY(-1px);
          transform-origin: 22px 42px;
        }

        .hero-side-note:hover .robot-arm-right {
          transform: rotate(8deg) translateY(-1px);
          transform-origin: 42px 42px;
        }

        .robot-antenna-dot {
          animation: robotPulse 2.4s ease-in-out infinite;
        }

        .hero-side-note:hover .robot-antenna-dot {
          animation-duration: 1.2s;
        }

        .hero-side-note-copy {
          min-width: 0;
        }

        .hero-side-note-label {
          display: inline-block;
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #1d4f91;
          margin-bottom: 0.45rem;
        }

        .hero-side-note-text {
          font-size: 0.95rem;
          line-height: 1.65;
          color: #475569;
          margin: 0;
          max-width: 24ch;
        }

        @keyframes heroFadeUp {
          from {
            opacity: 0;
            transform: translateY(16px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes heroDisplayIn {
          from {
            opacity: 0;
            transform: translateY(34px);
            letter-spacing: -0.11em;
          }
          to {
            opacity: 1;
            transform: translateY(0);
            letter-spacing: -0.075em;
          }
        }

        @keyframes flowItemIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes flowMarquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }

        @keyframes underlineShift {
          0% {
            background-position: 0% 50%;
            transform: scaleX(0.92);
          }
          50% {
            background-position: 100% 50%;
            transform: scaleX(1);
          }
          100% {
            background-position: 0% 50%;
            transform: scaleX(0.92);
          }
        }

        @keyframes robotPulse {
          0%,
          100% {
            transform: scale(1);
            opacity: 0.9;
          }
          50% {
            transform: scale(1.18);
            opacity: 1;
          }
        }

        @media (hover: hover) {
          .card-icon-badge:hover {
            background: rgba(255, 255, 255, 0.2);
          }
        }

        @media (min-width: 768px) {
          .card-pos-left {
            transform: translate(-50%, -50%) translateX(-68%) scale(0.88) rotateY(-18deg);
          }

          .card-pos-right {
            transform: translate(-50%, -50%) translateX(68%) scale(0.88) rotateY(18deg);
          }
        }

        @media (max-width: 1280px) {
          .hero-side-note {
            width: 240px;
            left: 1rem;
          }
        }

        @media (max-width: 1024px) {
          .hero-display-line {
            white-space: normal;
          }

          .hero-side-note {
            display: none;
          }
        }

        @media (max-width: 768px) {
          .hero-flow-track {
            animation-duration: 12s;
          }

          .hero-flow-group {
            gap: 0.8rem;
            padding-right: 0.8rem;
          }

          .hero-flow-pill {
            padding: 0.68rem 0.9rem;
            gap: 0.55rem;
          }

          .hero-flow-icon {
            width: 2rem;
            height: 2rem;
          }

          .hero-flow-label {
            font-size: 0.84rem;
          }

          .hero-sub-wrap {
            margin-top: 0.65rem;
          }

          .hero-sub-underline {
            width: 160px;
            margin-top: 0.8rem;
          }

          .card-shell {
            grid-template-columns: minmax(0, 1fr) 58px;
            gap: 0.7rem;
          }

          .card-title {
            font-size: 1.55rem;
            max-width: 11.5rem;
            margin-top: 0.95rem;
          }

          .card-icon-stack {
            gap: 0.5rem;
          }

          .card-icon-badge {
            width: 2.2rem;
            height: 2.2rem;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .hero-eyebrow,
          .hero-display-line,
          .hero-sub-wrap,
          .hero-copy-wide {
            animation: none;
            opacity: 1;
            transform: none;
          }

          .hero-flow-track,
          .hero-sub-underline,
          .robot-antenna-dot {
            animation: none;
          }

          .hero-card,
          .card-icon-badge,
          .hero-side-note {
            transition: none;
          }

          .hero-side-note:hover .hero-side-note-icon,
          .hero-side-note:hover .robot-head,
          .hero-side-note:hover .robot-eye-left,
          .hero-side-note:hover .robot-eye-right,
          .hero-side-note:hover .robot-arm-left,
          .hero-side-note:hover .robot-arm-right {
            transform: none;
          }
        }
      `}</style>
    </>
  );
}