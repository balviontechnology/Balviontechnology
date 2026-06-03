import React, { useEffect, useRef, useState } from "react";

export default function LandingIntro({ onExplore }) {
  const canvasRef = useRef(null);
  const zoneRef = useRef(null);
  const rafRef = useRef(null);
  const particlesRef = useRef([]);
  const mouseRef = useRef({ x: -9999, y: -9999, radius: 100 });
  const readyRef = useRef(false);
  const [showTech, setShowTech] = useState(false);

  const pulseDotRef = useRef({
    active: false,
    x: 0,
    y: 0,
    progress: 0,
    startTime: 0,
    duration: 2600,
    pause: 10000,
    lastTrigger: 0,
    startX: 0,
    startY: 0,
    endX: 0,
    endY: 0,
    radius: 34,
    force: 1.35,
  });

  useEffect(() => {
    const techTimer = setTimeout(() => setShowTech(true), 850);
    return () => clearTimeout(techTimer);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let W = (canvas.width = window.innerWidth);
    let H = (canvas.height = window.innerHeight);

    // Logo-inspired blue → cyan → ice blue → aqua-green palette
    const gradColors = [
      [33, 99, 171],   // strong corporate blue
      [28, 154, 214],  // cyan-blue
      [132, 220, 255], // bright icy blue
      [67, 217, 196],  // soft aqua-green
    ];

    function lerp(a, b, t) {
      return a + (b - a) * t;
    }

    function easeInOutCubic(t) {
      return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
    }

    function getColor(px, py) {
      const t = (px / W + py / H) / 2;
      const i = Math.floor(t * (gradColors.length - 1));
      const frac = t * (gradColors.length - 1) - i;
      const c1 = gradColors[Math.min(i, gradColors.length - 1)];
      const c2 = gradColors[Math.min(i + 1, gradColors.length - 1)];

      return `rgb(${Math.round(lerp(c1[0], c2[0], frac))}, ${Math.round(
        lerp(c1[1], c2[1], frac)
      )}, ${Math.round(lerp(c1[2], c2[2], frac))})`;
    }

    function getTextMetrics() {
      const zone = zoneRef.current;
      if (!zone) return null;

      const rect = zone.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2 - 10;
      const fontSize = Math.min(W * 0.13, 146);
      const text = "BALVION";

      const off = document.createElement("canvas");
      const offCtx = off.getContext("2d");
      offCtx.font = `800 ${fontSize}px Orbitron, Arial`;
      const metrics = offCtx.measureText(text);
      const textWidth = metrics.width;

      return {
        cx,
        cy,
        fontSize,
        text,
        textWidth,
        leftX: cx - textWidth / 2,
        rightX: cx + textWidth / 2,
      };
    }

    function buildParticles() {
      const metrics = getTextMetrics();
      if (!metrics) return;

      const off = document.createElement("canvas");
      off.width = W;
      off.height = H;
      const offCtx = off.getContext("2d");

      offCtx.clearRect(0, 0, W, H);
      offCtx.fillStyle = "#1d7cc3";
      offCtx.textAlign = "center";
      offCtx.textBaseline = "middle";
      offCtx.font = `800 ${metrics.fontSize}px Orbitron, Arial`;
      offCtx.fillText(metrics.text, metrics.cx, metrics.cy);

      const imageData = offCtx.getImageData(0, 0, W, H).data;
      const gap = Math.max(4, Math.round(W / 220));
      const pts = [];

      for (let y = 0; y < H; y += gap) {
        for (let x = 0; x < W; x += gap) {
          const idx = (y * W + x) * 4;
          if (imageData[idx + 3] > 128) {
            pts.push({
              x: Math.random() * W,
              y: Math.random() * H,
              baseX: x,
              baseY: y,
              vx: 0,
              vy: 0,
              size: gap * 0.48,
            });
          }
        }
      }

      particlesRef.current = pts;
      readyRef.current = true;

      const bX = metrics.leftX + metrics.textWidth * 0.045;
      const nX = metrics.rightX - metrics.textWidth * 0.04;
      const travelY = metrics.cy;

      Object.assign(pulseDotRef.current, {
        startX: bX,
        startY: travelY,
        endX: nX,
        endY: travelY,
        x: bX,
        y: travelY,
        lastTrigger: performance.now() + 1200,
      });
    }

    function updatePulseDot(now) {
      const pulse = pulseDotRef.current;

      if (!pulse.active && now - pulse.lastTrigger >= pulse.pause) {
        pulse.active = true;
        pulse.startTime = now;
        pulse.progress = 0;
        pulse.x = pulse.startX;
        pulse.y = pulse.startY;
      }

      if (pulse.active) {
        const raw = (now - pulse.startTime) / pulse.duration;
        const t = Math.min(raw, 1);
        const eased = easeInOutCubic(t);

        pulse.progress = eased;
        pulse.x = lerp(pulse.startX, pulse.endX, eased);
        pulse.y = lerp(pulse.startY, pulse.endY, eased);

        if (t >= 1) {
          pulse.active = false;
          pulse.lastTrigger = now;
        }
      }
    }

    function applyForce(sourceX, sourceY, radius, strength) {
      particlesRef.current.forEach((p) => {
        const dx = sourceX - p.x;
        const dy = sourceY - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < radius) {
          const angle = Math.atan2(dy, dx);
          const force = ((radius - dist) / radius) ** 2 * strength;
          p.vx -= Math.cos(angle) * force;
          p.vy -= Math.sin(angle) * force;
        }
      });
    }

    function drawPulseDot() {
      const pulse = pulseDotRef.current;
      if (!pulse.active) return;

      ctx.beginPath();
      ctx.arc(pulse.x, pulse.y, 4.5, 0, Math.PI * 2);
      ctx.fillStyle = "#aef7ff";
      ctx.shadowColor = "rgba(72, 214, 255, 0.9)";
      ctx.shadowBlur = 24;
      ctx.fill();

      ctx.beginPath();
      ctx.arc(pulse.x, pulse.y, 11, 0, Math.PI * 2);
      ctx.strokeStyle = "rgba(67, 217, 196, 0.28)";
      ctx.lineWidth = 1.2;
      ctx.stroke();

      ctx.shadowBlur = 0;
    }

    function animate(now = 0) {
      ctx.clearRect(0, 0, W, H);

      if (readyRef.current) {
        const { x: mx, y: my, radius } = mouseRef.current;

        if (mx > -9000 && my > -9000) {
          applyForce(mx, my, radius, 3.5);
        }

        updatePulseDot(now);

        const pulse = pulseDotRef.current;
        if (pulse.active) {
          applyForce(pulse.x, pulse.y, pulse.radius, pulse.force);
        }

        particlesRef.current.forEach((p) => {
          p.vx += (p.baseX - p.x) * 0.038;
          p.vy += (p.baseY - p.y) * 0.038;

          p.vx *= 0.88;
          p.vy *= 0.88;

          p.x += p.vx;
          p.y += p.vy;

          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
          ctx.fillStyle = getColor(p.x, p.y);
          ctx.fill();
        });

        drawPulseDot();
      }

      rafRef.current = requestAnimationFrame(animate);
    }

    const timer = setTimeout(() => {
      buildParticles();
      animate();
    }, 200);

    const onMouseMove = (e) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
    };

    const onMouseLeave = () => {
      mouseRef.current.x = -9999;
      mouseRef.current.y = -9999;
    };

    const onResize = () => {
      cancelAnimationFrame(rafRef.current);
      W = canvas.width = window.innerWidth;
      H = canvas.height = window.innerHeight;
      buildParticles();
      animate();
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseleave", onMouseLeave);
    window.addEventListener("resize", onResize);

    return () => {
      clearTimeout(timer);
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseleave", onMouseLeave);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <>
      <link
        rel="preconnect"
        href="https://fonts.googleapis.com"
      />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="true"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Orbitron:wght@500;700;800&family=Inter:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />

      <div
        className="relative min-h-screen overflow-hidden text-slate-800"
        style={{
          background:
            "linear-gradient(145deg, #eef7ff 0%, #e1f3ff 24%, #ffffff 58%, #f2fbff 100%)",
          fontFamily: "Inter, sans-serif",
        }}
      >
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div
            className="absolute rounded-full blur-3xl opacity-40"
            style={{
              width: "70vw",
              height: "70vw",
              top: "-20vw",
              left: "50%",
              transform: "translateX(-50%)",
              background:
                "radial-gradient(circle, rgba(88,197,255,0.45) 0%, rgba(157,245,255,0.28) 42%, rgba(86,214,188,0.16) 58%, transparent 72%)",
            }}
          />
          <div
            className="absolute rounded-full blur-2xl opacity-25"
            style={{
              width: "40vw",
              height: "40vw",
              bottom: "5vw",
              right: "-8vw",
              background:
                "radial-gradient(circle, rgba(125,211,252,0.38) 0%, transparent 65%)",
            }}
          />
          <div
            className="absolute rounded-full blur-2xl opacity-20"
            style={{
              width: "30vw",
              height: "30vw",
              bottom: "10vw",
              left: "-5vw",
              background:
                "radial-gradient(circle, rgba(125,255,229,0.26) 0%, transparent 65%)",
            }}
          />
        </div>

        <div
          className="absolute inset-0 pointer-events-none opacity-[0.10]"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(69,149,217,0.85) 1px, transparent 1px)",
            backgroundSize: "36px 36px",
          }}
        />

        <canvas
          ref={canvasRef}
          className="absolute inset-0 z-10 pointer-events-none"
        />

        <div className="relative z-20 flex flex-col items-center justify-center min-h-screen px-6 text-center">
          <div
            className="inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-[0.7rem] md:text-xs font-semibold uppercase tracking-[0.22em] mb-4"
            style={{
              borderColor: "rgba(56, 189, 248, 0.22)",
              background: "rgba(255,255,255,0.68)",
              color: "#0b76b7",
              backdropFilter: "blur(10px)",
              animation: "fadeUp 0.8s 0.2s both",
              boxShadow: "0 8px 30px rgba(56, 189, 248, 0.08)",
            }}
          >
            <span
              className="inline-block h-1.5 w-1.5 rounded-full"
              style={{
                background: "linear-gradient(135deg,#21a1d8,#6ee7f9,#43d9c4)",
              }}
            />
            Innovation · Education · Talent
          </div>

          <div
            ref={zoneRef}
            className="w-full"
            style={{ height: "clamp(140px, 20vw, 190px)" }}
          />

          <div
            className={`mt-[-4px] transition-all duration-1000 ${
              showTech ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
            }`}
            style={{
              fontFamily: "Orbitron, sans-serif",
              fontWeight: 700,
              fontSize: "clamp(0.95rem, 2vw, 1.55rem)",
              letterSpacing: showTech ? "0.42em" : "0.12em",
              textTransform: "uppercase",
              color: "#1678b8",
              textShadow: "0 1px 0 rgba(255,255,255,0.7)",
              transition:
                "letter-spacing 1.15s cubic-bezier(0.16,1,0.3,1), opacity 0.9s ease, transform 0.9s ease",
              paddingLeft: "0.42em",
            }}
          >
            Technologies
          </div>

          <p
            className="text-sm md:text-[1rem] font-normal max-w-lg leading-[1.85] mt-6"
            style={{
              color: "#334155",
              animation: "fadeUp 0.9s 0.5s both",
            }}
          >
            Building a modern bridge between robotics education,
            <br className="hidden md:block" />
            talent development, and career transformation.
          </p>

          <button
            onClick={onExplore}
            className="group mt-9 inline-flex items-center gap-2.5 rounded-full text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5"
            style={{
              background: "linear-gradient(135deg, #0e7fc1 0%, #17a3c8 58%, #27b89b 100%)",
              color: "#ffffff",
              padding: "14px 32px",
              boxShadow:
                "0 10px 34px rgba(28,154,214,0.28), 0 1px 0 rgba(255,255,255,0.18) inset",
              animation: "fadeUp 0.9s 0.75s both",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow =
                "0 14px 42px rgba(28,154,214,0.34), 0 1px 0 rgba(255,255,255,0.18) inset";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow =
                "0 10px 34px rgba(28,154,214,0.28), 0 1px 0 rgba(255,255,255,0.18) inset";
            }}
          >
            Get started
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="transition-transform duration-300 group-hover:translate-x-1"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>

          <div
            className="mt-10 flex items-center gap-6 flex-wrap justify-center"
            style={{ animation: "fadeUp 0.9s 0.95s both" }}
          >
            {["AIM Certified Partner", "500+ Schools", "Pan India"].map(
              (label) => (
                <span
                  key={label}
                  className="text-[0.72rem] font-medium tracking-wide"
                  style={{
                    color: "#64748b",
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                  }}
                >
                  <span
                    style={{
                      display: "inline-block",
                      width: 5,
                      height: 5,
                      borderRadius: "50%",
                      background:
                        "linear-gradient(135deg,#21a1d8,#6ee7f9,#43d9c4)",
                      flexShrink: 0,
                    }}
                  />
                  {label}
                </span>
              )
            )}
          </div>
        </div>

        <style>{`
          @keyframes fadeUp {
            from { opacity: 0; transform: translateY(16px); }
            to { opacity: 1; transform: translateY(0); }
          }
        `}</style>
      </div>
    </>
  );
}