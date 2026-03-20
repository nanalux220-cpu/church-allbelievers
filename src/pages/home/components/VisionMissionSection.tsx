export default function VisionMissionSection() {
  return (
    <section className="py-14 sm:py-20 px-4 sm:px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10 sm:mb-14">
          <span className="text-amber-600 text-xs font-bold uppercase tracking-[3px]">Our Foundation</span>
          <h2
            className="mt-3 font-extrabold text-stone-900"
            style={{ fontSize: "clamp(1.6rem, 3vw, 2.5rem)" }}
          >
            Vision &amp; Mission
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-8">
          {/* Vision */}
          <div className="relative rounded-2xl overflow-hidden bg-stone-900 p-7 sm:p-10 flex flex-col gap-5">
            <div className="w-12 h-12 flex items-center justify-center bg-amber-500/20 rounded-xl">
              <i className="ri-eye-line text-amber-400 text-2xl" />
            </div>
            <div>
              <h3
                className="text-white text-xl sm:text-2xl font-bold mb-3"
              >
                Our Vision
              </h3>
              <p className="text-stone-300 leading-relaxed text-sm font-light">
                To be a leading New Testament model church that excels in worship, produces disciples and leaders, and offers leadership in all spheres of life — representing the Kingdom of God with excellence and integrity.
              </p>
            </div>
            <div className="absolute top-4 right-4 w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-amber-500/10" />
          </div>

          {/* Mission */}
          <div className="relative rounded-2xl overflow-hidden bg-amber-500 p-7 sm:p-10 flex flex-col gap-5">
            <div className="w-12 h-12 flex items-center justify-center bg-white/20 rounded-xl">
              <i className="ri-rocket-line text-white text-2xl" />
            </div>
            <div>
              <h3
                className="text-white text-xl sm:text-2xl font-bold mb-3"
              >
                Our Mission
              </h3>
              <p className="text-white/90 leading-relaxed text-sm font-light">
                To use every exceptional and creative method to educate the centre on preparing each person to lead, enjoy a happy life here on Earth, contribute to the advancement of society, and be eligible for eternal life.
              </p>
            </div>
            <div className="absolute top-4 right-4 w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white/10" />
          </div>
        </div>

        {/* Weekly Gathering */}
        <div className="mt-6 sm:mt-10 rounded-2xl bg-stone-50 border border-stone-100 p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center gap-5 sm:gap-6">
          <div className="w-14 h-14 flex items-center justify-center bg-amber-50 rounded-xl flex-shrink-0">
            <i className="ri-calendar-event-line text-amber-500 text-3xl" />
          </div>
          <div className="flex-1">
            <h4 className="text-stone-900 font-semibold text-base sm:text-lg mb-2">
              Weekly Gathering
            </h4>
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 text-sm text-stone-600">
              <span><strong className="text-stone-800">Sunday Service:</strong> 1:00pm – 4:00pm</span>
              <span className="hidden sm:block text-stone-300">|</span>
              <span><strong className="text-stone-800">Saturday Prayers:</strong> 11:00am – 12:00pm</span>
            </div>
            <p className="text-stone-500 text-xs mt-2">
              <i className="ri-map-pin-2-line text-amber-500 mr-1" />
              St Andrews Methodist Church, 10 Cardinal Road, Beeston, Leeds LS11 8AL
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
