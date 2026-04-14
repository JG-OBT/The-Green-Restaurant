import { motion, AnimatePresence } from "motion/react";
import { X } from "lucide-react";

interface LegalModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  content: string;
}

export default function LegalModal({ isOpen, onClose, title, content }: LegalModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-brand-bg/80 backdrop-blur-sm"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-2xl bg-brand-surface border border-brand-border shadow-2xl overflow-hidden flex flex-col max-h-[80vh]"
          >
            <div className="flex justify-between items-center p-6 border-b border-brand-border">
              <h2 className="text-xl font-serif text-brand-text">{title}</h2>
              <button onClick={onClose} className="text-brand-dim hover:text-brand-text transition-colors">
                <X size={24} />
              </button>
            </div>
            <div className="p-8 overflow-y-auto font-sans text-[14px] text-brand-dim leading-relaxed space-y-6">
              {content.split('\n\n').map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
            <div className="p-6 border-t border-brand-border bg-brand-bg/50 flex justify-end">
              <button
                onClick={onClose}
                className="px-8 py-3 bg-brand-accent text-brand-bg text-[10px] uppercase tracking-[2px] font-bold hover:opacity-90 transition-all"
              >
                Close
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
