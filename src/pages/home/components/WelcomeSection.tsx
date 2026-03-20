import { Link } from "react-router-dom";

export default function WelcomeSection() {
  return (
    <section className="py-16 sm:py-20 md:py-28 px-4 sm:px-6 bg-stone-50">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 items-center">
        {/* Image */}
        <div className="relative flex-shrink-0">
          <div className="relative rounded-2xl overflow-hidden w-full bg-white border border-stone-100" style={{ aspectRatio: "4/5", maxHeight: "520px" }}>
            <img
              src="https://static.readdy.ai/image/4428baccc60709cd2682246ca105b4f4/ce593dd0965a025d704e6c7350f444c6.jpeg"
              alt="Rev. George Abakah – Senior Pastor, All Believers Chapel"
              className="w-full h-full object-cover object-top"
            />
            {/* Name badge at bottom */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-stone-900/80 via-stone-900/40 to-transparent px-5 py-5">
              <p className="text-white font-extrabold text-base sm:text-lg leading-tight">
                Rev. George Abakah
              </p>
              <p className="text-amber-300 text-xs mt-0.5 font-medium tracking-wide">Senior Pastor</p>
            </div>
          </div>
          {/* Est. badge */}
          <div className="absolute -bottom-4 -right-2 md:-bottom-5 md:-right-5 bg-amber-500 rounded-2xl p-4 md:p-5 text-center hidden sm:block">
            <span className="block text-white font-bold text-xl md:text-2xl">Est.</span>
            <span className="block text-white font-extrabold text-2xl md:text-3xl">2018</span>
          </div>
        </div>

        {/* Text */}
        <div className="md:pr-4">
          <span className="text-amber-600 text-xs font-bold uppercase tracking-[3px]">Nice to Meet You</span>
          <h2
            className="mt-3 mb-5 sm:mb-6 font-extrabold text-stone-900 leading-tight"
            style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.8rem)" }}
          >
            You&apos;re Welcome at All Believers Chapel
          </h2>
          <p className="text-stone-600 text-sm sm:text-base font-light leading-relaxed mb-4">
            We are firm believers in God&apos;s unconditional love and grace through Jesus Christ who is the only key to transform people&apos;s lives and places. We are committed to sharing this good news with people all over the world.
          </p>
          <p className="text-stone-600 text-sm sm:text-base font-light leading-relaxed mb-6 sm:mb-8">
            Our goal is to be an exemplary church that reflects God&apos;s glory. We pledge to provide you with the necessary guidance to enable you to achieve your goals and become a candidate for Heaven.
          </p>

          <div className="grid grid-cols-3 gap-3 sm:gap-4 mb-7 sm:mb-8">
            {[
              {
                num: "2018",
                label: "Founded",
                icon: "ri-church-line",
                iconColor: "text-amber-500",
                iconBg: "bg-amber-50",
                iconBorder: "border-amber-200",
                accent: "bg-amber-400",
                glow: "rgba(245,158,11,0.12)",
              },
              {
                num: "11+",
                label: "Years of Ministry",
                icon: "ri-award-fill",
                iconColor: "text-emerald-500",
                iconBg: "bg-emerald-50",
                iconBorder: "border-emerald-200",
                accent: "bg-emerald-400",
                glow: "rgba(16,185,129,0.10)",
              },
              {
                num: "Leeds",
                label: "United Kingdom",
                icon: "ri-map-pin-2-fill",
                iconColor: "text-rose-500",
                iconBg: "bg-rose-50",
                iconBorder: "border-rose-200",
                accent: "bg-rose-400",
                glow: "rgba(244,63,94,0.10)",
              },
            ].map((s) => (
              <div
                key={s.label}
                className="relative flex flex-col items-center text-center p-3 sm:p-5 bg-white rounded-2xl border border-stone-100 overflow-hidden group transition-all duration-300 hover:-translate-y-0.5"
                style={{ boxShadow: `0 4px 20px ${s.glow}` }}
              >
                {/* Top accent bar */}
                <div className={`absolute top-0 left-0 right-0 h-1 ${s.accent} rounded-t-2xl`} />
                {/* Icon circle */}
                <div className={`w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full ${s.iconBg} border ${s.iconBorder} mt-2 mb-2 sm:mb-3 transition-transform duration-300 group-hover:scale-110`}>
                  <i className={`${s.icon} ${s.iconColor} text-lg sm:text-xl`} />
                </div>
                <span
                  className="block text-stone-900 font-extrabold text-sm sm:text-lg leading-tight"
                >
                  {s.num}
                </span>
                <span className="block text-stone-400 text-xs mt-1 leading-tight">{s.label}</span>
              </div>
            ))}
          </div>

          <Link
            to="/about"
            className="inline-flex items-center gap-2 text-amber-600 font-semibold text-sm hover:gap-3 transition-all duration-200 cursor-pointer"
          >
            Learn More About Us
            <i className="ri-arrow-right-line" />
          </Link>
        </div>
      </div>
    </section>
  );
}
