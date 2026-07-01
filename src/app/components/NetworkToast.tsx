"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { WifiOff, Wifi } from "lucide-react";

export default function NetworkToast() {
  const [isOnline, setIsOnline] = useState(true);
  const [showBackOnline, setShowBackOnline] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Read real network state after mount (navigator is browser-only)
    setIsOnline(navigator.onLine);
    setMounted(true);

    const handleOffline = () => {
      setIsOnline(false);
      setShowBackOnline(false);
    };

    const handleOnline = () => {
      setIsOnline(true);
      setShowBackOnline(true);
      setTimeout(() => setShowBackOnline(false), 3000);
    };

    window.addEventListener("offline", handleOffline);
    window.addEventListener("online", handleOnline);
    return () => {
      window.removeEventListener("offline", handleOffline);
      window.removeEventListener("online", handleOnline);
    };
  }, []);

  // Don't render anything until client-side — avoids hydration mismatch
  if (!mounted) return null;

  return (
    <div className="fixed bottom-5 left-1/2 -translate-x-1/2 z-[9999] flex flex-col items-center gap-2 pointer-events-none px-4 w-full sm:w-auto">
      <AnimatePresence mode="wait">

        {/* Offline toast — stays until connection is restored */}
        {!isOnline && (
          <motion.div
            key="offline"
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="pointer-events-auto flex items-center gap-3 w-full sm:w-auto px-4 py-3 rounded-2xl shadow-2xl"
            style={{
              background: "#0f172a",
              border: "1px solid rgba(239,68,68,0.25)",
              boxShadow: "0 8px 32px rgba(0,0,0,0.4), 0 0 0 1px rgba(239,68,68,0.1)",
            }}
          >
            <div className="w-8 h-8 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center flex-shrink-0">
              <WifiOff size={15} className="text-red-400" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-[13px] font-semibold text-white leading-none mb-0.5">No internet connection</p>
              <p className="text-[11px] text-slate-500">Check your network and try again</p>
            </div>
            <span className="w-1.5 h-1.5 rounded-full bg-red-500 flex-shrink-0 animate-pulse" />
          </motion.div>
        )}

        {/* Back online toast — auto-dismisses after 3 s */}
        {isOnline && showBackOnline && (
          <motion.div
            key="online"
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="pointer-events-auto flex items-center gap-3 px-4 py-3 rounded-2xl shadow-2xl"
            style={{
              background: "#0f172a",
              border: "1px solid rgba(16,185,129,0.25)",
              boxShadow: "0 8px 32px rgba(0,0,0,0.4), 0 0 0 1px rgba(16,185,129,0.1)",
            }}
          >
            <div className="w-8 h-8 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center flex-shrink-0">
              <Wifi size={15} className="text-[#10b981]" />
            </div>
            <p className="text-[13px] font-semibold text-white">Back online</p>
            <span className="w-1.5 h-1.5 rounded-full bg-[#10b981] flex-shrink-0" />
          </motion.div>
        )}

      </AnimatePresence>
    </div>
  );
}
