import { useState, type FormEvent } from "react";
import { motion } from "motion/react";
import { Phone, Mail, Users, Calendar, Clock } from "lucide-react";

export default function BookingForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    time: "",
    guests: "2",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (data.success) {
        setStatus("success");
        setMessage(data.message);
        setFormData({ name: "", email: "", date: "", time: "", guests: "2" });
      } else {
        setStatus("error");
        setMessage("Something went wrong. Please try again or call us.");
      }
    } catch (error) {
      setStatus("error");
      setMessage("Failed to send request. Please check your connection or call us.");
    }
  };

  return (
    <section id="reservations" className="py-24 px-10 bg-brand-bg border-t border-brand-border">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24">
          {/* Left Column: Info */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-brand-accent uppercase tracking-[2px] text-[11px] font-bold mb-6 block">
                Reservations
              </span>
              <h2 className="text-4xl md:text-5xl font-serif text-brand-text mb-8 font-normal">
                Join Us at <span className="italic">The Green</span>
              </h2>
              <p className="text-brand-dim mb-10 font-sans text-[15px] leading-relaxed">
                We recommend booking in advance, especially for weekend dining. For parties larger than 6, please contact us directly by phone or email.
              </p>

              <div className="space-y-6 mb-12">
                <a href="tel:01935813821" className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-full bg-brand-surface border border-brand-border flex items-center justify-center group-hover:bg-brand-accent group-hover:text-brand-bg transition-all duration-300">
                    <Phone size={20} className="text-brand-accent group-hover:text-brand-bg" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-[2px] font-bold text-brand-dim">Call Us</p>
                    <p className="text-lg font-serif text-brand-text">01935 813 821</p>
                  </div>
                </a>
                <a href="mailto:info@greenrestaurant.co.uk" className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-full bg-brand-surface border border-brand-border flex items-center justify-center group-hover:bg-brand-accent group-hover:text-brand-bg transition-all duration-300">
                    <Mail size={20} className="text-brand-accent group-hover:text-brand-bg" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-[2px] font-bold text-brand-dim">Email Us</p>
                    <p className="text-lg font-serif text-brand-text">info@greenrestaurant.co.uk</p>
                  </div>
                </a>
              </div>

              <div className="p-8 bg-brand-surface border border-brand-border">
                <h4 className="font-serif text-xl mb-2 text-brand-text">Private Dining & Events</h4>
                <p className="text-[13px] text-brand-dim mb-6 font-sans">
                  Our private room accommodates up to 20 guests for intimate celebrations and corporate events.
                </p>
                <a
                  href="#contact"
                  className="inline-block px-6 py-3 bg-brand-accent text-brand-bg text-[10px] uppercase tracking-[2px] font-bold hover:opacity-90 transition-all"
                >
                  Enquire Now
                </a>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Form */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-brand-surface p-12 border border-brand-border"
            >
              <h3 className="text-2xl font-serif mb-8 text-brand-text">Request a Table</h3>
              
              {status === "success" ? (
                <div className="py-12 text-center">
                  <div className="w-16 h-16 bg-brand-accent/10 text-brand-accent rounded-full flex items-center justify-center mx-auto mb-6">
                    <Calendar size={32} />
                  </div>
                  <h4 className="text-xl font-serif mb-2 text-brand-text">Thank You</h4>
                  <p className="text-brand-dim">{message}</p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="mt-8 text-[11px] uppercase tracking-[2px] font-bold border-b border-brand-accent text-brand-accent"
                  >
                    Make another request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[10px] uppercase tracking-[2px] font-bold text-brand-dim ml-1">Full Name</label>
                      <input
                        required
                        type="text"
                        placeholder="John Doe"
                        className="w-full px-4 py-3 bg-brand-bg border border-brand-border text-brand-text focus:outline-none focus:border-brand-accent transition-all"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] uppercase tracking-[2px] font-bold text-brand-dim ml-1">Email Address</label>
                      <input
                        required
                        type="email"
                        placeholder="john@example.com"
                        className="w-full px-4 py-3 bg-brand-bg border border-brand-border text-brand-text focus:outline-none focus:border-brand-accent transition-all"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="space-y-2">
                      <label className="text-[10px] uppercase tracking-[2px] font-bold text-brand-dim ml-1">Date</label>
                      <div className="relative">
                        <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-accent" size={16} />
                        <input
                          required
                          type="date"
                          className="w-full pl-12 pr-4 py-3 bg-brand-bg border border-brand-border text-brand-text focus:outline-none focus:border-brand-accent transition-all"
                          value={formData.date}
                          onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] uppercase tracking-[2px] font-bold text-brand-dim ml-1">Time</label>
                      <div className="relative">
                        <Clock className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-accent" size={16} />
                        <select
                          required
                          className="w-full pl-12 pr-4 py-3 bg-brand-bg border border-brand-border text-brand-text focus:outline-none focus:border-brand-accent transition-all appearance-none"
                          value={formData.time}
                          onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                        >
                          <option value="">Select Time</option>
                          <option value="12:00">12:00</option>
                          <option value="13:00">13:00</option>
                          <option value="18:00">18:00</option>
                          <option value="19:00">19:00</option>
                          <option value="20:00">20:00</option>
                        </select>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] uppercase tracking-[2px] font-bold text-brand-dim ml-1">Guests</label>
                      <div className="relative">
                        <Users className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-accent" size={16} />
                        <select
                          required
                          className="w-full pl-12 pr-4 py-3 bg-brand-bg border border-brand-border text-brand-text focus:outline-none focus:border-brand-accent transition-all appearance-none"
                          value={formData.guests}
                          onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                        >
                          {[1, 2, 3, 4, 5, 6].map((n) => (
                            <option key={n} value={n}>{n} Guests</option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="w-full py-4 bg-brand-accent text-brand-bg text-[12px] uppercase tracking-[2px] font-bold hover:opacity-90 transition-all disabled:opacity-50"
                  >
                    {status === "loading" ? "Sending Request..." : "Request Reservation"}
                  </button>
                  
                  {status === "error" && (
                    <p className="text-red-400 text-xs text-center font-medium">{message}</p>
                  )}
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
