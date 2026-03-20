import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden" style={{ minHeight: "100svh" }}>
      {/* Background Image */}
      <img
        src="https://readdy.ai/api/search-image?query=vibrant%20african%20christian%20church%20congregation%20worship%20hands%20raised%20joyful%20praise%20modern%20church%20interior%20warm%20golden%20ambient%20lighting%20diverse%20community%20gathering%20professional%20photography%20cinematic%20quality%20inspiring%20atmosphere%20spiritual%20uplifting%20scene&width=1440&height=900&seq=hero001&orientation=landscape"
        alt="All Believers Chapel worship service"
        className="absolute inset-0 w-full h-full object-cover object-top"
      />
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/40 to-black/65 pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 w-full text-center px-4 sm:px-6 max-w-4xl mx-auto pt-24 pb-16">
        <span
          className="inline-block text-amber-300 text-xs font-semibold tracking-[4px] uppercase mb-4 sm:mb-5 opacity-90"
        >
          Welcome to
        </span>
        <h1
          className="text-white font-extrabold leading-tight mb-4 sm:mb-6"
          style={{ fontSize: "clamp(2rem, 8vw, 5rem)", lineHeight: 1.1 }}
        >
          All Believers Chapel
        </h1>
        <p className="text-white/80 text-base sm:text-lg md:text-xl font-light mb-8 sm:mb-10 max-w-xl mx-auto leading-relaxed px-2">
          A thriving New Testament model charismatic church — finding, following and fulfilling God&apos;s destiny for your life.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4 sm:px-0">
          <Link
            to="/plan-visit"
            className="w-full sm:w-auto px-8 py-3.5 bg-amber-500 hover:bg-amber-400 text-white font-semibold rounded-lg text-sm transition-all duration-200 cursor-pointer whitespace-nowrap text-center"
          >
            Plan Your Visit
          </Link>
          <Link
            to="/ministries"
            className="w-full sm:w-auto px-8 py-3.5 border-2 border-white/70 hover:border-white text-white font-semibold rounded-lg text-sm transition-all duration-200 cursor-pointer whitespace-nowrap hover:bg-white/10 text-center"
          >
            Our Ministries
          </Link>
          <a
            href="https://wa.me/447826542566?text=Hi!%20I%27d%20like%20to%20know%20more%20about%20All%20Believers%20Chapel."
            target="_blank"
            rel="nofollow noreferrer"
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-3.5 bg-green-500 hover:bg-green-400 text-white font-semibold rounded-lg text-sm transition-all duration-200 cursor-pointer whitespace-nowrap"
          >
            <i className="ri-whatsapp-line text-base" />
            Chat on WhatsApp
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/60 animate-bounce">
        <i className="ri-arrow-down-line text-xl" />
      </div>
    </section>
  );
}
