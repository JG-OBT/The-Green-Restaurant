import { motion } from "motion/react";
import chefSasha from "@/assets/chef-sasha.png";

export default function About() {
  return (
    <section id="about" className="py-24 px-10 bg-brand-bg border-t border-brand-border">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/5] bg-brand-surface rounded-none overflow-hidden relative border border-brand-border">
              <img 
                src={chefSasha}
                alt="Chef Sasha Matkevich" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-brand-accent uppercase tracking-[2px] text-[11px] font-bold mb-6 block">
              Chef's Story
            </span>
            <h2 className="text-4xl md:text-5xl font-serif text-brand-text mb-8 leading-tight font-normal">
              A Passion for <span className="italic">Provenance</span>
            </h2>
            <div className="space-y-6 text-brand-dim leading-relaxed font-sans text-[15px]">
              <p>
                Led by Head Chef and Owner Sasha Matkevich, The Green is a family-run, neighbourhood restaurant that has become a cornerstone of the Sherborne dining scene. 
              </p>
              <p>
                With a background in some of London's most prestigious kitchens, Sasha brings a level of technical excellence and creative innovation to Dorset that has earned the restaurant a coveted Michelin Bib Gourmand.
              </p>
            </div>
            
            <div className="mt-12 grid grid-cols-2 gap-12 border-t border-brand-border pt-12">
              <div className="chef-section">
                <div className="w-20 h-20 border border-brand-accent rounded-full flex items-center justify-center text-center text-[9px] uppercase leading-none text-brand-accent mb-6">
                  Michelin<br/>Bib<br/>Gourmand
                </div>
                <h3 className="font-serif text-xl mb-3 text-brand-text">Chef Sasha Matkevich</h3>
                <p className="text-[13px] text-brand-dim leading-relaxed">Focused on local sourcing, seasonality, and the art of creative innovation in British cooking.</p>
              </div>
              <div className="chef-section">
                <span className="text-brand-accent uppercase tracking-[2px] text-[11px] font-bold mb-6 block">Private Events</span>
                <p className="text-[13px] text-brand-dim leading-relaxed mb-4">Our private dining room accommodates up to 20 guests for intimate celebrations and corporate gatherings.</p>
                <a href="#contact" className="text-brand-accent text-[12px] hover:underline">Enquire Now &rarr;</a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
