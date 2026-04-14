import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Phone } from "lucide-react";
import { cn } from "../lib/utils";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Menu", href: "#menu" },
  { name: "About", href: "#about" },
  { name: "Reservations", href: "#reservations" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-10 py-6",
        isScrolled ? "bg-brand-bg/95 backdrop-blur-md border-b border-brand-border py-4" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-12">
          <a href="#home" className="group">
            <h1 className={cn(
              "text-2xl font-serif tracking-[2px] uppercase transition-colors duration-300",
              "text-brand-text"
            )}>
              THE GREEN
            </h1>
          </a>
          
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={cn(
                  "text-[13px] uppercase tracking-[1px] font-medium transition-all duration-300 hover:text-brand-accent",
                  "text-brand-text opacity-80 hover:opacity-100"
                )}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-6">
          <a
            href="tel:01935813821"
            className={cn(
              "hidden sm:flex items-center gap-2 text-[12px] uppercase tracking-[1px] font-semibold transition-colors duration-300",
              "text-brand-text opacity-80"
            )}
          >
            <Phone size={14} />
            01935 813 821
          </a>
          
          <a
            href="#reservations"
            className={cn(
              "px-6 py-3 text-[12px] uppercase tracking-[1px] font-bold transition-all duration-300",
              "bg-brand-accent text-brand-bg hover:opacity-90"
            )}
          >
            Reserve a Table
          </a>

          <button
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className={isScrolled ? "text-brand-dark" : "text-white"} /> : <Menu className={isScrolled ? "text-brand-dark" : "text-white"} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-brand-cream border-t border-brand-dark/10 p-6 md:hidden shadow-xl"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-brand-dark text-lg font-serif tracking-tight hover:pl-2 transition-all duration-300"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4 border-t border-brand-dark/10">
                <a
                  href="tel:01935813821"
                  className="flex items-center gap-2 text-brand-dark font-medium"
                >
                  <Phone size={18} />
                  01935 813 821
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
