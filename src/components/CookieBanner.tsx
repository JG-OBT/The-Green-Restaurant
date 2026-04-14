import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X } from "lucide-react";

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      const timer = setTimeout(() => setIsVisible(true), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setIsVisible(false);
  };

  const declineCookies = () => {
    localStorage.setItem("cookie-consent", "declined");
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-6 right-6 left-6 md:left-auto md:w-96 z-50"
        >
          <div className="bg-brand-surface border border-brand-border p-6 shadow-2xl backdrop-blur-md">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-[11px] uppercase tracking-[2px] font-bold text-brand-accent">Cookie Policy</h3>
              <button onClick={() => setIsVisible(false)} className="text-brand-dim hover:text-brand-text transition-colors">
                <X size={16} />
              </button>
            </div>
            <p className="text-[13px] text-brand-dim font-sans leading-relaxed mb-6">
              We use cookies to enhance your experience and analyze our traffic. By clicking "Accept", you consent to our use of cookies.
            </p>
            <div className="flex gap-3">
              <button
                onClick={acceptCookies}
                className="flex-1 py-3 bg-brand-accent text-brand-bg text-[10px] uppercase tracking-[2px] font-bold hover:opacity-90 transition-all"
              >
                Accept
              </button>
              <button
                onClick={declineCookies}
                className="flex-1 py-3 border border-brand-border text-brand-text text-[10px] uppercase tracking-[2px] font-bold hover:bg-brand-bg transition-all"
              >
                Decline
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
