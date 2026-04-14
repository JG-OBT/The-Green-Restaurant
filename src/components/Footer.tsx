import { motion } from "motion/react";
import { Instagram, Facebook, MapPin, Phone, Mail } from "lucide-react";

interface FooterProps {
  onOpenLegal: (type: "privacy" | "terms" | "cookies") => void;
}

export default function Footer({ onOpenLegal }: FooterProps) {
  return (
    <footer id="contact" className="bg-brand-bg text-brand-text pt-24 pb-12 px-10 border-t border-brand-border">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          {/* Brand Column */}
          <div className="space-y-8">
            <h2 className="text-2xl font-serif tracking-[2px] uppercase">THE GREEN</h2>
            <p className="text-brand-dim font-sans text-[13px] leading-relaxed">
              Seasonal British dining in the heart of Sherborne. Michelin-recognised cuisine crafted from the finest local ingredients.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-brand-border flex items-center justify-center hover:bg-brand-accent hover:text-brand-bg transition-all">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-brand-border flex items-center justify-center hover:bg-brand-accent hover:text-brand-bg transition-all">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-brand-border flex items-center justify-center hover:bg-brand-accent hover:text-brand-bg transition-all">
                <Twitter size={18} />
              </a>
            </div>
          </div>

          {/* Contact Column */}
          <div className="space-y-8">
            <h4 className="text-[11px] uppercase tracking-[2px] font-bold text-brand-accent">Contact</h4>
            <div className="space-y-4">
              <div className="flex gap-4">
                <MapPin className="text-brand-accent shrink-0" size={20} />
                <p className="text-sm font-sans text-brand-dim">3 The Green, Sherborne,<br />Dorset, DT9 3HY</p>
              </div>
              <a href="tel:01935813821" className="flex gap-4 group">
                <Phone className="text-brand-accent shrink-0" size={20} />
                <p className="text-sm font-sans text-brand-dim group-hover:text-brand-text">01935 813 821</p>
              </a>
              <a href="mailto:info@greenrestaurant.co.uk" className="flex gap-4 group">
                <Mail className="text-brand-accent shrink-0" size={20} />
                <p className="text-sm font-sans text-brand-dim group-hover:text-brand-text">info@greenrestaurant.co.uk</p>
              </a>
            </div>
          </div>

          {/* Hours Column */}
          <div className="space-y-8">
            <h4 className="text-[11px] uppercase tracking-[2px] font-bold text-brand-accent">Opening Hours</h4>
            <div className="space-y-4 text-sm font-sans text-brand-dim">
              <div className="flex justify-between border-b border-brand-border pb-2">
                <span>Tue – Sat</span>
                <span>12:00 – 14:00</span>
              </div>
              <div className="flex justify-between border-b border-brand-border pb-2">
                <span>Tue – Sat</span>
                <span>18:00 – 21:00</span>
              </div>
              <div className="flex justify-between opacity-40">
                <span>Sun – Mon</span>
                <span>Closed</span>
              </div>
            </div>
          </div>

          {/* Newsletter Column */}
          <div className="space-y-8">
            <h4 className="text-[11px] uppercase tracking-[2px] font-bold text-brand-accent">Newsletter</h4>
            <p className="text-[13px] font-sans text-brand-dim">Join our mailing list for seasonal menu updates and special events.</p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Email address"
                className="bg-transparent border-b border-brand-border py-2 text-sm focus:outline-none focus:border-brand-accent w-full transition-all text-brand-text"
              />
              <button type="submit" className="text-[11px] uppercase tracking-[2px] font-bold border-b border-brand-border py-2 hover:text-brand-accent hover:border-brand-accent transition-all">
                Join
              </button>
            </form>
          </div>
        </div>

        <div className="pt-12 border-t border-brand-border flex flex-col md:flex-row justify-between items-center gap-6 text-[11px] uppercase tracking-[2px] font-medium text-brand-dim">
          <p>© {new Date().getFullYear()} The Green Restaurant. All rights reserved.</p>
          <div className="flex gap-8">
            <button onClick={() => onOpenLegal("privacy")} className="hover:text-brand-text transition-colors">Privacy Policy</button>
            <button onClick={() => onOpenLegal("terms")} className="hover:text-brand-text transition-colors">Terms of Service</button>
            <button onClick={() => onOpenLegal("cookies")} className="hover:text-brand-text transition-colors">Cookies</button>
          </div>
        </div>
      </div>
    </footer>
  );
}
