"use client";

import { useRouter } from "next/navigation";
import { motion } from "motion/react";

const FEATURE_PILLS = [
  { icon: "📅", label: "Schedule" },
  { icon: "📝", label: "Assignments" },
  { icon: "👥", label: "Study Groups" },
  { icon: "🤖", label: "AI Tools" },
];

const SCHEDULE_ITEMS = [
  { color: "#10b981", title: "Math Analysis", time: "08:00 – 09:30", room: "Room 201", done: false },
  { color: "#4f46e5", title: "Physics Lab",   time: "10:00 – 11:30", room: "Lab A",    done: true  },
  { color: "#f59e0b", title: "CS Algorithms", time: "14:00 – 15:30", room: "B203",     done: false },
];

// ── App preview (desktop-only, decorative — motion is fine here) ─────────────

function AppPreview() {
  return (
    <section id="hero" className="relative w-full h-[500px] select-none">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 70% at 55% 45%, rgba(16,185,129,0.13) 0%, rgba(79,70,229,0.09) 50%, transparent 75%)",
        }}
      />

      {/* AI badge */}
      <motion.div
        className="absolute top-0 right-0 z-30"
        initial={{ opacity: 0, y: -12, scale: 0.88 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.55, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="rounded-2xl px-4 py-3 shadow-2xl border border-white/10" style={{ background: "#0f172a" }}>
          <div className="flex items-center gap-2 mb-0.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#10b981]" />
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#10b981]">AI Active</span>
          </div>
          <p className="text-[12px] font-semibold leading-snug text-white">Study plan generated ✨</p>
        </div>
      </motion.div>

      {/* Main schedule card */}
      <motion.div
        className="absolute top-12 left-0 right-14 z-10"
        initial={{ opacity: 0, y: 22 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
      >
        <div
          className="rounded-[22px] p-5 border"
          style={{ background: "#0f172a", borderColor: "rgba(255,255,255,0.07)", boxShadow: "0 8px 48px rgba(0,0,0,0.45)" }}
        >
          <div className="flex items-center justify-between mb-4">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[2px] text-slate-500">This Week</p>
              <p className="font-[family-name:var(--font-sora)] text-[15px] font-bold text-white mt-0.5">Monday, Apr 7</p>
            </div>
            <span
              className="text-[11px] font-bold px-2.5 py-1 rounded-xl"
              style={{ color: "#10b981", background: "rgba(16,185,129,0.12)", border: "1px solid rgba(16,185,129,0.2)" }}
            >
              3 classes
            </span>
          </div>
          <div className="space-y-0.5">
            {SCHEDULE_ITEMS.map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-3 px-3 py-2.5 rounded-xl transition-colors cursor-default"
                style={{ background: "rgba(255,255,255,0.03)" }}
                onMouseEnter={e => (e.currentTarget.style.background = "rgba(255,255,255,0.06)")}
                onMouseLeave={e => (e.currentTarget.style.background = "rgba(255,255,255,0.03)")}
              >
                <div className="w-[3px] h-8 rounded-full flex-shrink-0" style={{ background: item.color }} />
                <div className="flex-1 min-w-0">
                  <p className="text-[13px] font-semibold text-slate-200 truncate">{item.title}</p>
                  <p className="text-[11px] text-slate-500">{item.time} · {item.room}</p>
                </div>
                {item.done && (
                  <span
                    className="text-[10px] font-bold px-2 py-0.5 rounded-full flex-shrink-0"
                    style={{ color: "#10b981", background: "rgba(16,185,129,0.12)", border: "1px solid rgba(16,185,129,0.2)" }}
                  >
                    Done
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Assignment card */}
      <motion.div
        className="absolute bottom-14 left-0 w-[195px] z-20"
        initial={{ opacity: 0, x: -14 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.55, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <div
          className="rounded-2xl p-4 border"
          style={{ background: "#0f172a", borderColor: "rgba(245,158,11,0.18)", boxShadow: "0 4px 24px rgba(0,0,0,0.4)" }}
        >
          <div className="flex items-center gap-1.5 mb-2">
            <span className="text-sm">📝</span>
            <span className="text-[10px] font-bold text-amber-400 uppercase tracking-wider">Due Tomorrow</span>
          </div>
          <p className="text-[13px] font-semibold text-slate-200 mb-3">Physics Lab Report</p>
          <div className="w-full rounded-full h-1.5 mb-1" style={{ background: "rgba(255,255,255,0.08)" }}>
            <div className="bg-amber-400 h-1.5 rounded-full" style={{ width: "65%" }} />
          </div>
          <p className="text-[10px] text-slate-500">65% complete</p>
        </div>
      </motion.div>

      {/* Study group card */}
      <motion.div
        className="absolute bottom-0 right-4 w-[172px] z-20"
        initial={{ opacity: 0, x: 14 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.55, delay: 0.75, ease: [0.16, 1, 0.3, 1] }}
      >
        <div
          className="rounded-2xl p-4 border"
          style={{ background: "#0f172a", borderColor: "rgba(16,185,129,0.18)", boxShadow: "0 4px 24px rgba(0,0,0,0.4)" }}
        >
          <div className="flex items-center gap-1.5 mb-2.5">
            <span className="text-sm">👥</span>
            <span className="text-[12px] font-bold text-slate-200">CS Study Group</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex -space-x-2">
              {["#10b981", "#4f46e5", "#f59e0b", "#ef4444"].map((color, i) => (
                <div key={i} className="w-6 h-6 rounded-full border-2" style={{ background: color, borderColor: "#0f172a" }} />
              ))}
            </div>
            <div className="flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-[#10b981]" />
              <span className="text-[11px] text-slate-400">4 online</span>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

// ── Main HeroSection ──────────────────────────────────────────────────────────

export default function HeroSection() {
  const router = useRouter();

  return (
    <section className="relative min-h-[calc(100vh-68px)] lg:min-h-[calc(100vh-80px)] flex items-center overflow-hidden bg-[#f8fafc]">
      {/* Dot grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(16,185,129,0.15) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />
      {/* Orbs */}
      <div className="absolute pointer-events-none rounded-full" style={{ width: 640, height: 640, top: "-15%", right: "-8%", background: "rgba(16,185,129,0.15)", filter: "blur(110px)" }} />
      <div className="absolute pointer-events-none rounded-full" style={{ width: 520, height: 520, bottom: "5%", right: "8%", background: "rgba(79,70,229,0.1)", filter: "blur(100px)" }} />
      <div className="absolute pointer-events-none rounded-full" style={{ width: 420, height: 420, bottom: "-10%", left: "-6%", background: "rgba(16,185,129,0.08)", filter: "blur(90px)" }} />
      {/* Radial fade */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 55% 90% at 0% 50%, rgba(248,250,252,0.95) 0%, transparent 100%)" }}
      />

      <div className="relative z-10 max-w-[1160px] mx-auto px-4 sm:px-6 py-10 sm:py-14 lg:py-16 w-full grid lg:grid-cols-[1fr_1.15fr] gap-12 xl:gap-20 items-center">

        {/* ── LEFT: copy — CSS animations, visible immediately on any network ── */}
        <div>

          {/* Badge */}
          <div className="hero-fade-up mb-6" style={{ animationDelay: "0s" }}>
            <span className="inline-flex flex-wrap items-center gap-2 bg-white border border-black/8 shadow-sm px-3.5 py-1.5 rounded-full text-[12px] font-semibold text-slate-500">
              <span className="inline-flex items-center gap-1.5 bg-[#10b981] text-white text-[10px] font-bold uppercase tracking-wide px-2 py-0.5 rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-white/80 animate-pulse" />
                Free Forever
              </span>
              🇰🇭 Built for Cambodian Students
            </span>
          </div>

          {/* Headline */}
          <h1
            className="hero-fade-up font-[family-name:var(--font-sora)] text-[clamp(32px,4.5vw,60px)] font-extrabold text-[#0f172a] leading-[1.07] mb-5"
            style={{ letterSpacing: "-2px", animationDelay: "0.1s" }}
          >
            Your entire
            <br />
            university life,
            <br />
            <span className="text-[#10b981]">finally organized.</span>
          </h1>

          {/* Subtitle */}
          <p
            className="hero-fade-up text-[15px] sm:text-[16px] text-slate-500 leading-[1.8] mb-8 max-w-[420px]"
            style={{ animationDelay: "0.2s" }}
          >
            Schedule, assignments, study groups, and AI tools — all in one
            place. 100% free for every student, no credit card ever.
          </p>

          {/* Feature pills */}
          <div className="hero-fade-up flex flex-wrap gap-2 mb-9" style={{ animationDelay: "0.3s" }}>
            {FEATURE_PILLS.map((pill) => (
              <span
                key={pill.label}
                className="inline-flex items-center gap-1.5 bg-slate-50 hover:bg-emerald-50 border border-slate-200 hover:border-emerald-200 text-slate-600 hover:text-emerald-700 text-[13px] font-medium px-3.5 py-1.5 rounded-full transition-all duration-200 cursor-default"
              >
                {pill.icon} {pill.label}
              </span>
            ))}
          </div>

          {/* CTA row */}
          <div
            className="hero-fade-up flex flex-col sm:flex-row items-start sm:items-center gap-4"
            style={{ animationDelay: "0.42s" }}
          >
            <motion.button
              whileHover={{ y: -2, scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => router.push("/register")}
              className="font-[family-name:var(--font-sora)] group relative overflow-hidden inline-flex items-center gap-2.5 bg-[#10b981] hover:bg-[#059669] text-white px-6 sm:px-8 py-3.5 rounded-2xl font-semibold text-[15px] transition-all duration-200 shadow-xl shadow-emerald-900/20 w-full sm:w-auto justify-center sm:justify-start"
            >
              Get Started Free
              <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            </motion.button>

            <button
              onClick={() => router.push("/login")}
              className="text-[14px] font-medium text-slate-400 hover:text-[#0f172a] transition-colors duration-200"
            >
              Already have an account?{" "}
              <span className="underline underline-offset-2">Sign in</span>
            </button>
          </div>

          {/* Trust micro-copy */}
          <div className="hero-fade-in flex flex-wrap gap-5 mt-8 text-[12px] text-slate-400" style={{ animationDelay: "0.65s" }}>
            {["No credit card", "Free forever", "Made for Cambodia"].map((t) => (
              <span key={t} className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#10b981]" />
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* ── RIGHT: decorative app preview, desktop only ── */}
        <motion.div
          initial={{ opacity: 0, x: 32 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.18 }}
          className="hidden lg:block"
        >
          <AppPreview />
        </motion.div>
      </div>
    </section>
  );
}
