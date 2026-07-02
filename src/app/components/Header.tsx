"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { label: "Features",     href: "#features"     },
  { label: "AI Tools",     href: "#ai"           },
  { label: "For Students", href: "#for-students" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const scrollToSection = (href: string) => {
    setOpen(false);
    if (href === "#hero") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const element = document.querySelector(href);
    if (!element) return;
    const navHeight = document.querySelector("nav")?.offsetHeight ?? 80;
    const top = element.getBoundingClientRect().top + window.scrollY - navHeight;
    window.scrollTo({ top, behavior: "smooth" });
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-xl shadow-sm border-b border-black/5"
            : "bg-white/70 backdrop-blur-sm"
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 h-[68px] lg:h-[80px] flex items-center justify-between">
          {/* Logo */}
          <button onClick={() => scrollToSection("#hero")} className="flex items-center gap-2.5 lg:gap-3 shrink-0 cursor-pointer">
            <Image src="/logo.png" alt="Student Life" width={36} height={36} className="rounded-[10px] lg:w-[42px] lg:h-[42px]" priority />
            <span className="font-[family-name:var(--font-sora)] font-bold text-base lg:text-lg text-[#0f172a] tracking-tight">
              Student Life
            </span>
          </button>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-9">
            {NAV_LINKS.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className="nav-link-underline text-sm lg:text-[15px] font-medium text-slate-500 hover:text-[#0f172a] transition-colors cursor-pointer"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-2">
            <button
              onClick={() => router.push("/login")}
              className="text-sm lg:text-[15px] font-medium text-slate-500 hover:text-[#0f172a] px-4 py-2 rounded-lg hover:bg-slate-100 transition-all"
            >
              Login
            </button>
            <button
              onClick={() => router.push("/register")}
              className="text-sm lg:text-[15px] font-semibold text-white bg-[#10b981] hover:bg-[#059669] px-5 lg:px-6 py-2.5 lg:py-3 rounded-xl transition-all duration-200 hover:-translate-y-px hover:shadow-lg hover:shadow-emerald-500/20"
            >
              Get Started Free
            </button>
          </div>

          {/* Hamburger */}
          <button
            onClick={() => setOpen((v) => !v)}
            className="md:hidden p-2 rounded-xl text-slate-600 hover:bg-slate-100 transition-colors"
            aria-label="Toggle menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      {open && (
        <>
          <div
            className="mobile-overlay fixed inset-0 z-40 bg-black/25 backdrop-blur-sm md:hidden"
            onClick={() => setOpen(false)}
          />
          <div className="mobile-drawer fixed top-0 right-0 bottom-0 z-50 w-[80%] max-w-[300px] bg-white shadow-2xl flex flex-col md:hidden">
            <div className="flex items-center justify-between px-5 py-4 border-b border-black/5">
              <button onClick={() => scrollToSection("#hero")} className="flex items-center gap-2.5">
                <Image src="/logo.png" alt="Student Life" width={32} height={32} className="rounded-[10px]" />
                <span className="font-bold text-[#0f172a]">Student Life</span>
              </button>
              <button
                onClick={() => setOpen(false)}
                className="p-2 rounded-xl hover:bg-slate-100 transition-colors"
              >
                <X size={20} className="text-slate-500" />
              </button>
            </div>

            <div className="flex-1 px-4 py-4 flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className="py-3 px-3 rounded-xl text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-[#0f172a] transition-colors text-left"
                >
                  {link.label}
                </button>
              ))}
            </div>

            <div className="px-4 pb-6 pt-3 border-t border-black/5 flex flex-col gap-2">
              <button
                onClick={() => { setOpen(false); router.push("/login"); }}
                className="w-full py-2.5 rounded-xl text-sm font-medium text-slate-600 hover:bg-slate-50 transition-colors"
              >
                Login
              </button>
              <button
                onClick={() => { setOpen(false); router.push("/register"); }}
                className="w-full bg-[#10b981] hover:bg-[#059669] text-white py-3 rounded-xl font-semibold text-sm transition-all duration-200"
              >
                Get Started Free
              </button>
            </div>
          </div>
        </>
      )}
    </>
  );
}
