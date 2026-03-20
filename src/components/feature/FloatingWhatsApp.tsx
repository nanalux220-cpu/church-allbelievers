import { useState } from "react";
import { Link } from "react-router-dom";

const WHATSAPP_NUMBER = "447826542566";
const WHATSAPP_MESSAGE = encodeURIComponent("Hi! I'd like to know more about All Believers Chapel.");

const quickLinks = [
  { label: "Donate Online", path: "/donation", icon: "ri-hand-heart-line", color: "text-amber-600 bg-amber-50 hover:bg-amber-100" },
  { label: "Upcoming Events", path: "/events", icon: "ri-calendar-event-line", color: "text-rose-600 bg-rose-50 hover:bg-rose-100" },
  { label: "Watch Us Live", path: "/interactive", icon: "ri-live-line", color: "text-red-600 bg-red-50 hover:bg-red-100" },
  { label: "Contact Us", path: "/contact", icon: "ri-phone-line", color: "text-green-700 bg-green-50 hover:bg-green-100" },
];

export default function FloatingWhatsApp() {
  const [open, setOpen] = useState(false);

  const handleChat = () => {
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`, "_blank");
  };

  return (
    <div className="fixed bottom-6 right-5 z-50 flex flex-col items-end gap-3 pointer-events-none">
      {/* Popup card */}
      <div
        className={`transition-all duration-300 ${
          open ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 translate-y-3 pointer-events-none"
        }`}
      >
        <div
          className="bg-white rounded-2xl p-4 w-72 border border-stone-100"
          style={{ boxShadow: "0 8px 40px rgba(0,0,0,0.12)" }}
        >
          {/* Header */}
          <div className="flex items-center gap-3 pb-3 border-b border-stone-100 mb-3">
            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-green-500 flex-shrink-0">
              <i className="ri-whatsapp-line text-white text-lg" />
            </div>
            <div>
              <p className="text-stone-900 font-semibold text-sm">All Believers Chapel</p>
              <div className="flex items-center gap-1.5 mt-0.5">
                <span className="w-2 h-2 rounded-full bg-green-400 inline-block" />
                <span className="text-stone-400 text-xs">Typically replies quickly</span>
              </div>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="ml-auto w-7 h-7 flex items-center justify-center rounded-full hover:bg-stone-100 text-stone-400 hover:text-stone-600 transition-colors cursor-pointer flex-shrink-0"
            >
              <i className="ri-close-line text-sm" />
            </button>
          </div>

          {/* Message bubble */}
          <div className="bg-green-50 rounded-xl rounded-tl-none px-4 py-3 mb-4 border border-green-100">
            <p className="text-stone-700 text-sm leading-relaxed">
              Hi there! 👋 How can we help you today? Feel free to reach out — we&apos;d love to connect with you!
            </p>
            <span className="text-stone-400 text-xs mt-1 block text-right">All Believers Chapel</span>
          </div>

          {/* Quick Links */}
          <p className="text-xs font-semibold text-stone-400 uppercase tracking-wider mb-2 px-1">Quick Links</p>
          <div className="grid grid-cols-2 gap-2 mb-3">
            {quickLinks.map((ql) => (
              <Link
                key={ql.path}
                to={ql.path}
                onClick={() => setOpen(false)}
                className={`flex items-center gap-2 px-3 py-2.5 rounded-xl text-xs font-semibold transition-colors cursor-pointer ${ql.color}`}
              >
                <i className={`${ql.icon} text-sm flex-shrink-0`} />
                <span className="leading-tight">{ql.label}</span>
              </Link>
            ))}
          </div>

          {/* WhatsApp CTA */}
          <button
            onClick={handleChat}
            className="w-full flex items-center justify-center gap-2 py-3 bg-green-500 hover:bg-green-600 text-white text-sm font-semibold rounded-xl transition-colors duration-200 cursor-pointer whitespace-nowrap"
          >
            <i className="ri-whatsapp-line text-base" />
            Start Chat on WhatsApp
          </button>
        </div>
      </div>

      {/* Floating button */}
      <button
        onClick={() => setOpen((v) => !v)}
        className="relative w-14 h-14 flex items-center justify-center bg-green-500 hover:bg-green-600 text-white rounded-full transition-all duration-200 cursor-pointer hover:scale-105 pointer-events-auto"
        style={{ boxShadow: "0 4px 20px rgba(37,211,102,0.45)" }}
        aria-label="Chat on WhatsApp"
      >
        {!open && (
          <span className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-30" />
        )}
        <i className={`text-2xl transition-transform duration-200 ${open ? "ri-close-line" : "ri-whatsapp-line"}`} />
      </button>
    </div>
  );
}
