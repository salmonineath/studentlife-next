"use client";

import { useState } from "react";
import Image from "next/image";

// ── Floating decorator config ──────────────────────────────────────────────────
const FLOATERS = [
  { emoji: "📚", color: "rgba(79,70,229,0.13)",  border: "rgba(79,70,229,0.18)",  top: "11%",  left: "6%",   rotate: -10, delay: "0s",    duration: "5.2s", size: 64, font: 28 },
  { emoji: "✏️", color: "rgba(16,185,129,0.12)", border: "rgba(16,185,129,0.2)",  top: "9%",   right: "7%",  rotate: 8,  delay: "0.8s",  duration: "6.1s", size: 56, font: 24 },
  { emoji: "🎓", color: "rgba(245,158,11,0.12)", border: "rgba(245,158,11,0.18)", top: "38%",  left: "3%",   rotate: -6, delay: "1.4s",  duration: "5.7s", size: 60, font: 26 },
  { emoji: "🤖", color: "rgba(59,130,246,0.12)", border: "rgba(59,130,246,0.18)", top: "40%",  right: "4%",  rotate: 12, delay: "0.4s",  duration: "6.5s", size: 58, font: 25 },
  { emoji: "📅", color: "rgba(239,68,68,0.1)",   border: "rgba(239,68,68,0.15)",  bottom: "16%", left: "8%", rotate: -8, delay: "1.8s",  duration: "5.5s", size: 54, font: 23 },
  { emoji: "⭐", color: "rgba(168,85,247,0.12)", border: "rgba(168,85,247,0.18)", bottom: "14%", right: "6%",rotate: 7,  delay: "1.1s",  duration: "6.8s", size: 60, font: 26 },
];

// ── Social icon SVGs ───────────────────────────────────────────────────────────
function TelegramIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
    </svg>
  );
}
function FacebookIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
    </svg>
  );
}
function XIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.253 5.622 5.91-5.622Zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
    </svg>
  );
}

// ── Component ──────────────────────────────────────────────────────────────────
export default function ComingSoon() {
  const [email, setEmail]         = useState("");
  const [focused, setFocused]     = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSubmitted(true);
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

      {/* ── Floating academic emoji decorators (hidden on mobile) ── */}
      {FLOATERS.map((f) => {
        const pos: React.CSSProperties = {};
        if (f.top)    pos.top    = f.top;
        if (f.bottom) pos.bottom = f.bottom;
        if (f.left)   pos.left   = f.left;
        if (f.right)  pos.right  = f.right;

        return (
          <div
            key={f.emoji}
            aria-hidden
            className="cs-floater"
            style={{
              position: "absolute",
              ...pos,
              "--rot":   `rotate(${f.rotate}deg)`,
              "--dur":   f.duration,
              "--delay": f.delay,
              display:   "none",
              ...({ "@media(min-width:768px)": { display: "block" } }),
            } as React.CSSProperties}
          >
            {/* We use a simple media-query class trick via Tailwind on the wrapper */}
          </div>
        );
      })}

      {/* ── Floaters rendered via Tailwind md: visibility ── */}
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

        {/* Email form */}
        <div
          style={{
            width: "100%", maxWidth: 440,
            animation: "cs-fade-up 0.6s cubic-bezier(0.16,1,0.3,1) both",
            animationDelay: "0.25s",
          }}
        >
          {!submitted ? (
            <>
              <form
                onSubmit={handleSubmit}
                style={{
                  display: "flex", gap: 8, flexWrap: "wrap",
                  background: "#fff",
                  border: `1.5px solid ${focused ? "rgba(16,185,129,0.5)" : "#d7dce3"}`,
                  borderRadius: 16,
                  padding: "6px 6px 6px 16px",
                  boxShadow: focused
                    ? "0 0 0 3px rgba(16,185,129,0.1), 0 4px 16px rgba(0,0,0,0.06)"
                    : "0 4px 16px rgba(0,0,0,0.05)",
                  transition: "border-color 0.2s, box-shadow 0.2s",
                }}
              >
                <input
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  onFocus={() => setFocused(true)}
                  onBlur={() => setFocused(false)}
                  placeholder="your@university.edu.kh"
                  required
                  style={{
                    flex: 1, minWidth: 160,
                    background: "transparent",
                    border: "none", outline: "none",
                    fontSize: "0.9rem", color: "#0f172a",
                    fontFamily: "var(--font-geist, sans-serif)",
                    padding: "8px 0",
                  }}
                />
                <button
                  type="submit"
                  className="cs-btn"
                  style={{
                    background: "#10b981",
                    color: "#fff", border: "none",
                    borderRadius: 11,
                    padding: "10px 20px",
                    fontFamily: "var(--font-sora, sans-serif)",
                    fontWeight: 600, fontSize: "0.875rem",
                    cursor: "pointer", whiteSpace: "nowrap",
                    transition: "background 0.2s, transform 0.15s, box-shadow 0.2s",
                    flexShrink: 0,
                  }}
                >
                  Notify me →
                </button>
              </form>
              <p
                style={{
                  marginTop: 10, fontSize: "0.6875rem",
                  color: "#9ca3af", letterSpacing: "0.02em",
                  fontFamily: "var(--font-geist, sans-serif)",
                }}
              >
                No spam. One email on launch day.
              </p>
            </>
          ) : (
            <div
              style={{
                display: "inline-flex", alignItems: "center", gap: 10,
                background: "rgba(16,185,129,0.07)",
                border: "1.5px solid rgba(16,185,129,0.25)",
                borderRadius: 14, padding: "14px 24px",
                animation: "cs-scale-in 0.4s cubic-bezier(0.16,1,0.3,1) both",
              }}
            >
              <span style={{ fontSize: 18 }}>🎉</span>
              <span
                style={{
                  fontSize: "0.9rem", color: "#0f172a",
                  fontFamily: "var(--font-geist, sans-serif)", fontWeight: 500,
                }}
              >
                You&apos;re on the list! We&apos;ll let you know first.
              </span>
            </div>
          )}
        </div>

        {/* Divider */}
        <div
          style={{
            width: "100%", maxWidth: 260, height: 1,
            background: "linear-gradient(90deg, transparent, #d7dce3, transparent)",
            margin: "44px auto 28px",
            animation: "cs-fade-up 0.6s cubic-bezier(0.16,1,0.3,1) both",
            animationDelay: "0.3s",
          }}
        />

        {/* Social icons */}
        <div
          style={{
            display: "flex", alignItems: "center", gap: 10,
            animation: "cs-fade-up 0.6s cubic-bezier(0.16,1,0.3,1) both",
            animationDelay: "0.35s",
          }}
        >
          {[
            { label: "Telegram", Icon: TelegramIcon },
            { label: "Facebook", Icon: FacebookIcon },
            { label: "X / Twitter", Icon: XIcon },
          ].map(({ label, Icon }) => (
            <a
              key={label}
              href="#"
              aria-label={label}
              className="cs-social"
              style={{
                width: 40, height: 40, borderRadius: 12,
                background: "#fff",
                border: "1.5px solid #d7dce3",
                display: "flex", alignItems: "center", justifyContent: "center",
                color: "#6b7280",
                cursor: "pointer",
                textDecoration: "none",
                transition: "all 0.2s",
              }}
            >
              <Icon />
            </a>
          ))}
        </div>

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
