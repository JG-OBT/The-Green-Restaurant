import { motion } from "motion/react";

const images = [
  { id: 1, title: "Seasonal Dish", category: "Food", span: "col-span-2 row-span-2" },
  { id: 2, title: "The Dining Room", category: "Interior", span: "col-span-1 row-span-1" },
  { id: 3, title: "Chef at Work", category: "Team", span: "col-span-1 row-span-1" },
  { id: 4, title: "Local Ingredients", category: "Food", span: "col-span-1 row-span-2" },
  { id: 5, title: "Evening Ambience", category: "Interior", span: "col-span-1 row-span-1" },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 px-10 bg-brand-bg border-t border-brand-border overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-brand-accent uppercase tracking-[2px] text-[11px] font-bold mb-6 block">
              Visual Story
            </span>
            <h2 className="text-4xl md:text-6xl font-serif text-brand-text font-normal">
              The <span className="italic">Experience</span>
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-brand-dim max-w-md text-right font-serif italic text-[15px]"
          >
            A glimpse into our kitchen, our dining room, and the beautiful Dorset landscape that inspires us.
          </motion.p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 grid-rows-3 gap-1 h-[600px] md:h-[800px] border border-brand-border bg-brand-border">
          {images.map((img, index) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={cn(
                "relative group overflow-hidden bg-brand-surface",
                img.span
              )}
            >
              <div className="absolute inset-0 bg-brand-bg/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 flex items-center justify-center p-6">
                <span className="text-brand-text font-serif italic text-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  {img.title}
                </span>
              </div>
              
              <img 
                src={`/gallery-${img.id}.jpg`} 
                alt={img.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale hover:grayscale-0"
                referrerPolicy="no-referrer"
              />

              <div className="absolute bottom-6 left-6 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="px-4 py-2 bg-brand-accent text-brand-bg text-[9px] uppercase tracking-[2px] font-bold">
                  {img.category}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { cn } from "../lib/utils";
