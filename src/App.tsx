import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Menu from "./components/Menu";
import Gallery from "./components/Gallery";
import BookingForm from "./components/BookingForm";
import Footer from "./components/Footer";
import CookieBanner from "./components/CookieBanner";
import LegalModal from "./components/LegalModal";
import { useState } from "react";
import { motion, useScroll, useSpring } from "motion/react";

const LEGAL_CONTENT = {
  privacy: {
    title: "Privacy Policy",
    content: `At The Green Restaurant, we are committed to protecting your privacy. This policy outlines how we handle your personal information.\n\nWe collect information when you make a reservation, including your name, email address, and phone number. This data is used solely to manage your booking and provide you with the best possible service.\n\nWe do not sell or share your personal information with third parties for marketing purposes. Your data is stored securely and accessed only by authorized staff.\n\nYou have the right to request access to the personal data we hold about you, or to request that it be deleted. For any privacy-related inquiries, please contact us at info@greenrestaurant.co.uk.`
  },
  terms: {
    title: "Terms of Service",
    content: `By using our website and making a reservation, you agree to the following terms and conditions.\n\nReservations: We recommend booking in advance. For parties larger than 6, a deposit may be required. Please inform us of any dietary requirements or allergies at the time of booking.\n\nCancellations: We kindly ask for at least 24 hours' notice for cancellations. Failure to show up for a reservation may result in a charge for certain bookings.\n\nConduct: We strive to provide a relaxed and refined atmosphere for all our guests. We reserve the right to refuse service to anyone acting in a disruptive or inappropriate manner.\n\nLiability: The Green Restaurant is not responsible for any loss or damage to personal property while on our premises.`
  },
  cookies: {
    title: "Cookie Policy",
    content: `This website uses cookies to improve your browsing experience and analyze our traffic.\n\nWhat are cookies? Cookies are small text files that are stored on your device when you visit a website. They help us remember your preferences and understand how you interact with our site.\n\nTypes of cookies we use: We use essential cookies for the website to function correctly, and analytical cookies to help us improve our services. These analytical cookies do not collect personally identifiable information.\n\nManaging cookies: You can choose to accept or decline cookies through our cookie banner or by adjusting your browser settings. Declining cookies may affect the functionality of certain parts of the website.`
  }
};

export default function App() {
  const [legalModal, setLegalModal] = useState<{ isOpen: boolean; type: keyof typeof LEGAL_CONTENT | null }>({
    isOpen: false,
    type: null
  });

  const openLegal = (type: keyof typeof LEGAL_CONTENT) => {
    setLegalModal({ isOpen: true, type });
  };
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="relative min-h-screen selection:bg-brand-olive selection:text-white">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-brand-olive z-[60] origin-left"
        style={{ scaleX }}
      />

      <Navbar />
      
      <main className="bg-brand-border gap-[1px] grid">
        <Hero />
        
        {/* Seasonal Banner Bonus */}
        <div className="bg-brand-bg text-brand-text py-4 overflow-hidden whitespace-nowrap border-y border-brand-border">
          <motion.div
            animate={{ x: [0, -1000] }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="inline-block"
          >
            {[...Array(10)].map((_, i) => (
              <span key={i} className="mx-12 text-[10px] uppercase tracking-[0.4em] font-bold text-brand-accent">
                Spring Menu Now Available • Locally Sourced • Michelin Bib Gourmand • Sherborne, Dorset • 
              </span>
            ))}
          </motion.div>
        </div>

        <About />
        
        {/* Experience Highlights Section */}
        <section className="py-24 bg-brand-surface text-brand-text overflow-hidden border-t border-brand-border">
          <div className="max-w-7xl mx-auto px-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center space-y-4"
              >
                <div className="text-4xl font-serif italic mb-2 text-brand-accent">Michelin</div>
                <p className="text-[13px] font-sans text-brand-dim leading-relaxed">Bib Gourmand winner for high-quality, seasonal British cuisine.</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-center space-y-4"
              >
                <div className="text-4xl font-serif italic mb-2 text-brand-accent">Seasonal</div>
                <p className="text-[13px] font-sans text-brand-dim leading-relaxed">Menus that evolve with the landscape of Dorset and Somerset.</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-center space-y-4"
              >
                <div className="text-4xl font-serif italic mb-2 text-brand-accent">Atmosphere</div>
                <p className="text-[13px] font-sans text-brand-dim leading-relaxed">A relaxed but refined neighbourhood dining experience.</p>
              </motion.div>
            </div>
          </div>
        </section>

        <Menu />
        <Gallery />
        <BookingForm />
      </main>

      <Footer onOpenLegal={openLegal} />

      <LegalModal
        isOpen={legalModal.isOpen}
        onClose={() => setLegalModal({ ...legalModal, isOpen: false })}
        title={legalModal.type ? LEGAL_CONTENT[legalModal.type].title : ""}
        content={legalModal.type ? LEGAL_CONTENT[legalModal.type].content : ""}
      />

      <CookieBanner />

      {/* Mobile Sticky Reserve Button */}
      <div className="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-40 w-[calc(100%-3rem)] max-w-sm">
        <a
          href="#reservations"
          className="flex items-center justify-center w-full py-4 bg-brand-accent text-brand-bg shadow-2xl text-[11px] uppercase tracking-[2px] font-bold border border-brand-border backdrop-blur-sm"
        >
          Reserve a Table
        </a>
      </div>
    </div>
  );
}
