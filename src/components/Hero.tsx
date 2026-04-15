import { motion } from "motion/react";
import heroBg from "@/assets/hero-bg.jpg";

export default function Hero() {
  return (
    <section id="home" className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background */}
      <div className="absolute inset-0 bg-brand-bg">
        <div className="absolute inset-0 bg-gradient-to-t from-brand-bg via-brand-bg/20 to-brand-bg/60 z-10" />
        <img 
          src={heroBg}
          alt="The Green Restaurant Hero" 
          className="w-full h-full object-cover opacity-40"
          referrerPolicy="no-referrer"
        />
      </div>

      <div className="relative z-20 text-left px-10 w-full max-w-7xl mx-auto flex flex-col justify-end h-full pb-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="inline-block text-brand-accent uppercase tracking-[2px] text-[11px] font-bold mb-6">
            Sherborne, Dorset
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-[64px] text-brand-text font-serif leading-[1.1] font-normal mb-8 max-w-2xl">
            Seasonal British Dining
          </h1>
          <p className="text-brand-dim text-lg md:text-[18px] font-sans max-w-[450px] mb-10 leading-[1.6]">
            Michelin-recognised cuisine crafted from the finest local ingredients in a warm, welcoming neighborhood atmosphere.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <a
              href="#reservations"
              className="w-full sm:w-auto px-8 py-4 bg-brand-accent text-brand-bg text-[12px] uppercase tracking-[1px] font-bold hover:opacity-90 transition-all duration-300"
            >
              Book Now
            </a>
            <div className="flex items-center gap-2 text-brand-text font-sans text-[14px]">
              <span className="opacity-60">Call:</span> 01935 813 821
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-brand-cream/40 text-[10px] uppercase tracking-[0.2em]">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-brand-cream/40 to-transparent" />
      </motion.div>
    </section>
  );
}
