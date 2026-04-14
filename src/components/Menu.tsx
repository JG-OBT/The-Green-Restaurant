import { motion } from "motion/react";

const lunchMenu = [
  { name: "Cornish Mackerel", description: "Pickled cucumber, horseradish cream, dill oil", price: "£14" },
  { name: "Dorset Lamb Rump", description: "Wild garlic, jersey royals, spring greens", price: "£28" },
  { name: "Rhubarb Soufflé", description: "Ginger ice cream, toasted pistachios", price: "£12" },
];

const dinnerMenu = [
  { name: "Hand-Dived Scallops", description: "Cauliflower purée, pancetta, apple", price: "£18" },
  { name: "Dry-Aged Beef Fillet", description: "Bone marrow jus, truffle mash, roasted shallots", price: "£36" },
  { name: "Dark Chocolate Fondant", description: "Salted caramel, honeycomb, vanilla bean", price: "£14" },
];

export default function Menu() {
  return (
    <section id="menu" className="py-24 px-10 bg-brand-bg border-t border-brand-border">
      <div className="max-w-5xl mx-auto text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-brand-accent uppercase tracking-[2px] text-[11px] font-bold mb-6 block">
            The Offering
          </span>
          <h2 className="text-4xl md:text-6xl font-serif text-brand-text mb-6 font-normal">
            Seasonal <span className="italic">Menus</span>
          </h2>
          <p className="text-brand-dim max-w-2xl mx-auto italic font-serif">
            "Our menus change regularly based on seasonal availability, ensuring we only serve the freshest local produce."
          </p>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-1">
        {/* Lunch Menu */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="p-12 bg-brand-surface border border-brand-border"
        >
          <div className="flex justify-between items-end mb-12 border-b border-brand-border pb-6">
            <h3 className="text-3xl font-serif text-brand-text">Lunch</h3>
            <span className="text-[11px] uppercase tracking-[2px] text-brand-accent">Tue – Sat | 12:00 – 14:00</span>
          </div>
          <div className="space-y-8">
            {lunchMenu.map((item) => (
              <div key={item.name} className="group cursor-default">
                <div className="flex justify-between items-baseline mb-2 border-b border-dashed border-brand-border pb-2">
                  <h4 className="text-xl font-serif italic text-brand-text group-hover:text-brand-accent transition-colors">{item.name}</h4>
                  <span className="text-sm font-medium text-brand-text">{item.price}</span>
                </div>
                <p className="text-[13px] text-brand-dim font-sans leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 pt-8 border-t border-brand-border text-center">
            <p className="text-[11px] uppercase tracking-[2px] font-bold text-brand-accent">2 Courses £41 | 3 Courses £49</p>
          </div>
        </motion.div>

        {/* Dinner Menu */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="p-12 bg-brand-surface border border-brand-border"
        >
          <div className="flex justify-between items-end mb-12 border-b border-brand-border pb-6">
            <h3 className="text-3xl font-serif text-brand-text">Dinner</h3>
            <span className="text-[11px] uppercase tracking-[2px] text-brand-accent">Tue – Sat | 18:00 – 21:00</span>
          </div>
          <div className="space-y-8">
            {dinnerMenu.map((item) => (
              <div key={item.name} className="group cursor-default">
                <div className="flex justify-between items-baseline mb-2 border-b border-dashed border-brand-border pb-2">
                  <h4 className="text-xl font-serif italic text-brand-text group-hover:text-brand-accent transition-colors">{item.name}</h4>
                  <span className="text-sm font-medium text-brand-text">{item.price}</span>
                </div>
                <p className="text-[13px] text-brand-dim font-sans leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 pt-8 border-t border-brand-border text-center">
            <p className="text-[11px] uppercase tracking-[2px] font-bold text-brand-accent">Sample A La Carte Menu</p>
          </div>
        </motion.div>
      </div>

      <div className="mt-16 text-center">
        <a
          href="#reservations"
          className="inline-flex items-center gap-2 text-sm uppercase tracking-widest font-bold border-b-2 border-brand-dark pb-1 hover:text-brand-olive hover:border-brand-olive transition-all"
        >
          Book Your Table
        </a>
      </div>
    </section>
  );
}
