"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";

// ── Floating decorator config ──────────────────────────────────────────────────
const FLOATERS = [
  { emoji: "📚", color: "rgba(79,70,229,0.13)",  border: "rgba(79,70,229,0.18)",  top: "11%",  left: "6%",   rotate: -10, delay: "0s",    duration: "5.2s", size: 64, font: 28 },
  { emoji: "✏️", color: "rgba(16,185,129,0.12)", border: "rgba(16,185,129,0.2)",  top: "9%",   right: "7%",  rotate: 8,  delay: "0.8s",  duration: "6.1s", size: 56, font: 24 },
  { emoji: "🎓", color: "rgba(245,158,11,0.12)", border: "rgba(245,158,11,0.18)", top: "38%",  left: "3%",   rotate: -6, delay: "1.4s",  duration: "5.7s", size: 60, font: 26 },
  { emoji: "🤖", color: "rgba(59,130,246,0.12)", border: "rgba(59,130,246,0.18)", top: "40%",  right: "4%",  rotate: 12, delay: "0.4s",  duration: "6.5s", size: 58, font: 25 },
  { emoji: "📅", color: "rgba(239,68,68,0.1)",   border: "rgba(239,68,68,0.15)",  bottom: "16%", left: "8%", rotate: -8, delay: "1.8s",  duration: "5.5s", size: 54, font: 23 },
  { emoji: "⭐", color: "rgba(168,85,247,0.12)", border: "rgba(168,85,247,0.18)", bottom: "14%", right: "6%",rotate: 7,  delay: "1.1s",  duration: "6.8s", size: 60, font: 26 },
];

// ── Component ──────────────────────────────────────────────────────────────────
export default function ComingSoon() {
  const router = useRouter();

  const handleGoBack = () => {
    if (typeof window !== "undefined" && window.history.length > 1) {
      router.back();
    } else {
      router.push("/");
    }
  };

  return (
    <div
      style={{
        minHeight: "100dvh",
        background: "#f8fafc",
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        fontFamily: "var(--font-geist, ui-sans-serif, sans-serif)",
      }}
    >
      {/* ── Keyframes ── */}
      <style>{`
        @keyframes cs-float {
          0%, 100% { transform: var(--rot) translateY(0px); }
          50%       { transform: var(--rot) translateY(-12px); }
        }
        @keyframes cs-fade-up {
          from { opacity: 0; transform: translateY(18px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes cs-scale-in {
          from { opacity: 0; transform: scale(0.92); }
          to   { opacity: 1; transform: scale(1); }
        }
        .cs-floater {
          animation: cs-float var(--dur) ease-in-out infinite;
          animation-delay: var(--delay);
        }
        .cs-social:hover {
          background: rgba(16,185,129,0.1) !important;
          border-color: rgba(16,185,129,0.35) !important;
          color: #10b981 !important;
          transform: translateY(-2px);
        }
        .cs-btn:hover {
          background: #059669 !important;
          transform: translateY(-1px);
          box-shadow: 0 8px 20px rgba(16,185,129,0.3) !important;
        }
        .cs-back:hover {
          background: #ffffff !important;
          border-color: rgba(16,185,129,0.35) !important;
          color: #059669 !important;
          transform: translateX(-2px);
          box-shadow: 0 6px 18px rgba(15,23,42,0.08) !important;
        }
        @media (prefers-reduced-motion: reduce) {
          * { animation: none !important; transition: none !important; }
        }
      `}</style>

      {/* ── Background blobs (pure CSS, very soft) ── */}
      <div aria-hidden style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
        {/* Emerald blob — bottom right */}
        <div style={{
          position: "absolute", bottom: "-10%", right: "-8%",
          width: "44vw", height: "44vw",
          background: "radial-gradient(circle, rgba(16,185,129,0.09) 0%, transparent 70%)",
          filter: "blur(60px)",
        }} />
        {/* Indigo blob — top left */}
        <div style={{
          position: "absolute", top: "-8%", left: "-6%",
          width: "40vw", height: "40vw",
          background: "radial-gradient(circle, rgba(79,70,229,0.08) 0%, transparent 70%)",
          filter: "blur(60px)",
        }} />
        {/* Dot grid */}
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: "radial-gradient(circle, rgba(15,23,42,0.055) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }} />
      </div>

      {/* ── Floating academic emoji decorators — desktop only ── */}
      <div aria-hidden className="hidden md:block">
        {FLOATERS.map((f) => {
          const pos: React.CSSProperties = {};
          if (f.top)    pos.top    = f.top;
          if (f.bottom) pos.bottom = f.bottom;
          if (f.left)   pos.left   = f.left;
          if (f.right)  pos.right  = f.right;

          return (
            <div
              key={f.emoji}
              className="cs-floater"
              style={{
                position: "absolute",
                ...pos,
                ["--rot" as string]:   `rotate(${f.rotate}deg)`,
                ["--dur" as string]:   f.duration,
                ["--delay" as string]: f.delay,
                zIndex: 5,
              }}
            >
              <div
                style={{
                  width:        f.size,
                  height:       f.size,
                  background:   f.color,
                  border:       `1.5px solid ${f.border}`,
                  borderRadius: "22px",
                  display:      "flex",
                  alignItems:   "center",
                  justifyContent: "center",
                  backdropFilter: "blur(4px)",
                  boxShadow:    "0 4px 24px rgba(0,0,0,0.06)",
                }}
              >
                <span style={{ fontSize: f.font, lineHeight: 1 }}>{f.emoji}</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* ── Main content ── */}
      <div
        style={{
          position: "relative", zIndex: 10,
          display: "flex", flexDirection: "column", alignItems: "center",
          textAlign: "center",
          padding: "48px 20px 56px",
          width: "100%", maxWidth: 620,
          animation: "cs-fade-up 0.65s cubic-bezier(0.16,1,0.3,1) both",
        }}
      >
        {/* Logo */}
        <div
          style={{
            display: "flex", alignItems: "center", gap: 10,
            marginBottom: 44,
            animation: "cs-fade-up 0.5s cubic-bezier(0.16,1,0.3,1) both",
            animationDelay: "0.05s",
          }}
        >
          <Image src="/logo.png" alt="Student Life" width={38} height={38} className="rounded-[11px]" priority />
          <span
            style={{
              fontFamily: "var(--font-sora, sans-serif)",
              fontWeight: 700, fontSize: "1rem",
              color: "#0f172a", letterSpacing: "-0.01em",
            }}
          >
            Student Life
          </span>
        </div>

        {/* Eyebrow pill */}
        <div
          style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            background: "rgba(16,185,129,0.08)",
            border: "1px solid rgba(16,185,129,0.22)",
            borderRadius: 999, padding: "6px 16px",
            marginBottom: 28,
            animation: "cs-fade-up 0.55s cubic-bezier(0.16,1,0.3,1) both",
            animationDelay: "0.1s",
          }}
        >
          <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#10b981", display: "inline-block", flexShrink: 0 }} />
          <span
            style={{
              fontFamily: "var(--font-geist, sans-serif)",
              fontSize: "0.6875rem", fontWeight: 600,
              letterSpacing: "0.12em", textTransform: "uppercase",
              color: "#10b981",
            }}
          >
            We&apos;re almost ready
          </span>
        </div>

        {/* Headline */}
        <h1
          style={{
            fontFamily: "var(--font-sora, sans-serif)",
            fontSize: "clamp(36px, 6.5vw, 68px)",
            fontWeight: 800, lineHeight: 1.1,
            letterSpacing: "-0.04em",
            color: "#0f172a",
            marginBottom: 20,
            animation: "cs-fade-up 0.6s cubic-bezier(0.16,1,0.3,1) both",
            animationDelay: "0.15s",
          }}
        >
          <span
            style={{
              background: "linear-gradient(135deg, #10b981 0%, #4f46e5 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            coming soon.
          </span>
        </h1>

        {/* Go back button */}
        <button
          type="button"
          onClick={handleGoBack}
          className="cs-back"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 6,
            background: "rgba(255,255,255,0.7)",
            border: "1px solid rgba(15,23,42,0.1)",
            borderRadius: 999,
            padding: "10px 20px 10px 16px",
            fontFamily: "var(--font-geist, sans-serif)",
            fontSize: "0.875rem",
            fontWeight: 600,
            color: "#475569",
            cursor: "pointer",
            backdropFilter: "blur(6px)",
            transition: "background 0.2s ease, border-color 0.2s ease, color 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease",
            animation: "cs-fade-up 0.6s cubic-bezier(0.16,1,0.3,1) both",
            animationDelay: "0.25s",
          }}
        >
          <ArrowLeft size={16} strokeWidth={2.25} />
          Go back
        </button>

        {/* Copyright */}
        <p
          style={{
            marginTop: 20, fontSize: "0.6875rem",
            color: "#cbd5e1", letterSpacing: "0.04em",
            fontFamily: "var(--font-geist, sans-serif)",
            animation: "cs-fade-up 0.6s cubic-bezier(0.16,1,0.3,1) both",
            animationDelay: "0.4s",
          }}
        >
          © 2026 Student Life · Free for all Cambodian students
        </p>
      </div>
    </div>
  );
}
