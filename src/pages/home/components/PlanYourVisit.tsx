import { Link } from "react-router-dom";

const expectItems = [
  {
    icon: "ri-shirt-line",
    title: "Dress Comfortably",
    desc: "Come exactly as you are — no dress code, no formalities. We welcome you in whatever you feel comfortable wearing.",
    color: "text-amber-500",
    bg: "bg-amber-50",
    border: "border-amber-100",
  },
  {
    icon: "ri-time-line",
    title: "Service Duration",
    desc: "Our Sunday services run from 1:00pm to 4:00pm — about 3 hours of worship, teaching, and fellowship together.",
    color: "text-emerald-500",
    bg: "bg-emerald-50",
    border: "border-emerald-100",
  },
  {
    icon: "ri-heart-line",
    title: "Children Welcome",
    desc: "We have a dedicated Children's Ministry during the service so kids are engaged, safe, and having fun while you worship.",
    color: "text-rose-500",
    bg: "bg-rose-50",
    border: "border-rose-100",
  },
  {
    icon: "ri-user-smile-line",
    title: "Arrive Early",
    desc: "We recommend arriving 10–15 minutes early so our team can greet you, answer any questions, and help you get settled.",
    color: "text-sky-500",
    bg: "bg-sky-50",
    border: "border-sky-100",
  },
  {
    icon: "ri-music-2-line",
    title: "Vibrant Worship",
    desc: "Expect Spirit-filled praise and worship, an inspiring message from God's Word, and a warm, joyful atmosphere.",
    color: "text-violet-500",
    bg: "bg-violet-50",
    border: "border-violet-100",
  },
  {
    icon: "ri-team-line",
    title: "Stay for Fellowship",
    desc: "After every service, stick around! We love connecting over refreshments and getting to know our new guests personally.",
    color: "text-orange-500",
    bg: "bg-orange-50",
    border: "border-orange-100",
  },
];

const serviceTimes = [
  {
    day: "Sunday",
    time: "1:00pm – 4:00pm",
    label: "Main Service",
    icon: "ri-sun-line",
    accent: "bg-amber-500",
  },
  {
    day: "Saturday",
    time: "11:00am – 12:00pm",
    label: "Prayer Meeting",
    icon: "ri-hands-heart-line",
    accent: "bg-stone-700",
  },
];

export default function PlanYourVisit() {
  return (
    <section id="plan-your-visit" className="py-20 md:py-28 px-4 sm:px-6 bg-white">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-14 md:mb-18">
          <span className="text-amber-600 text-xs font-bold uppercase tracking-[3px]">First Time Here?</span>
          <h2
            className="mt-3 mb-4 font-extrabold text-stone-900 leading-tight"
            style={{ fontSize: "clamp(1.7rem, 4vw, 2.8rem)" }}
          >
            Plan Your Visit
          </h2>
          <p className="text-stone-500 text-sm sm:text-base font-light max-w-xl mx-auto leading-relaxed">
            We&apos;re so glad you&apos;re considering joining us! Here&apos;s everything you need to know to make your first visit smooth and enjoyable.
          </p>
        </div>

        {/* Top Row: Service Times + Location */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">

          {/* Service Times */}
          <div className="rounded-2xl border border-stone-100 bg-stone-50 p-7 md:p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 flex items-center justify-center bg-amber-500 rounded-xl">
                <i className="ri-calendar-check-line text-white text-lg" />
              </div>
              <h3 className="text-stone-900 font-semibold text-lg">
                Service Times
              </h3>
            </div>
            <div className="space-y-4">
              {serviceTimes.map((s) => (
                <div
                  key={s.day}
                  className="flex items-center gap-4 bg-white rounded-xl p-4 border border-stone-100"
                >
                  <div className={`w-10 h-10 flex items-center justify-center rounded-xl flex-shrink-0 ${s.accent}`}>
                    <i className={`${s.icon} text-white text-base`} />
                  </div>
                  <div>
                    <p className="text-stone-900 font-semibold text-sm">
                      {s.day} — <span className="text-amber-600">{s.time}</span>
                    </p>
                    <p className="text-stone-400 text-xs mt-0.5">{s.label}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-5 pt-5 border-t border-stone-200">
              <p className="text-stone-500 text-xs leading-relaxed">
                <i className="ri-information-line text-amber-500 mr-1" />
                Special services and events may vary. Check our{" "}
                <Link to="/events" className="text-amber-600 font-semibold hover:underline cursor-pointer">
                  Events page
                </Link>{" "}
                for the latest schedule.
              </p>
            </div>
          </div>

          {/* Location */}
          <div className="rounded-2xl border border-stone-100 overflow-hidden">
            <div className="relative h-44 w-full bg-stone-100">
              <iframe
                title="All Believers Chapel Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2357.5!2d-1.5513!3d53.7865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48795c8a1234abcd%3A0x1234567890abcdef!2sSt%20Andrews%20Methodist%20Church%2C%2010%20Cardinal%20Rd%2C%20Beeston%2C%20Leeds%20LS11%208AL!5e0!3m2!1sen!2suk!4v1710000000000"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />
            </div>
            <div className="bg-stone-50 p-6 border-t border-stone-100">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 flex items-center justify-center bg-amber-500 rounded-xl flex-shrink-0">
                  <i className="ri-map-pin-2-line text-white text-lg" />
                </div>
                <h3 className="text-stone-900 font-semibold text-lg">
                  Find Us
                </h3>
              </div>
              <p className="text-stone-600 text-sm leading-relaxed mb-4">
                St Andrews Methodist Church<br />
                10 Cardinal Road, Beeston<br />
                Leeds, LS11 8AL — United Kingdom
              </p>
              <a
                href="https://maps.google.com/?q=St+Andrews+Methodist+Church,+10+Cardinal+Road,+Beeston,+Leeds+LS11+8AL"
                target="_blank"
                rel="nofollow noreferrer"
                className="inline-flex items-center gap-2 text-xs font-semibold text-amber-600 hover:text-amber-700 transition-colors cursor-pointer"
              >
                <i className="ri-direction-line" />
                Get Directions on Google Maps
              </a>
            </div>
          </div>
        </div>

        {/* What to Expect Grid */}
        <div className="mb-12">
          <h3
            className="text-stone-900 font-semibold text-xl mb-7 text-center"
          >
            What to Expect
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {expectItems.map((item) => (
              <div
                key={item.title}
                className={`rounded-2xl border ${item.border} ${item.bg} p-6 flex gap-4 items-start hover:-translate-y-0.5 transition-transform duration-200`}
              >
                <div className={`w-10 h-10 flex items-center justify-center rounded-xl bg-white border ${item.border} flex-shrink-0 mt-0.5`}>
                  <i className={`${item.icon} ${item.color} text-lg`} />
                </div>
                <div>
                  <p className="text-stone-900 font-semibold text-sm mb-1.5">
                    {item.title}
                  </p>
                  <p className="text-stone-500 text-xs font-light leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Banner */}
        <div
          className="relative rounded-2xl overflow-hidden text-center py-12 px-6"
          style={{ background: "linear-gradient(135deg, #1c1917 0%, #292524 60%, #3d2c00 100%)" }}
        >
          {/* Decorative circles */}
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-amber-500/10 rounded-full pointer-events-none" />
          <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-amber-500/10 rounded-full pointer-events-none" />

          <div className="relative z-10">
            <i className="ri-hand-heart-line text-amber-400 text-3xl mb-4 block" />
            <h3
              className="text-white font-bold mb-3"
              style={{ fontSize: "clamp(1.2rem, 3vw, 1.8rem)" }}
            >
              Have Questions Before You Visit?
            </h3>
            <p className="text-stone-400 text-sm font-light mb-7 max-w-md mx-auto leading-relaxed">
              Our team would love to hear from you. Reach out anytime and we&apos;ll make sure your first visit is everything you hoped for.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
              <Link
                to="/contact"
                className="px-7 py-3 bg-amber-500 hover:bg-amber-400 text-white font-semibold rounded-lg text-sm transition-all duration-200 cursor-pointer whitespace-nowrap"
              >
                Get in Touch
              </Link>
              <a
                href="https://wa.me/447826542566?text=Hi!%20I%27d%20like%20to%20plan%20my%20first%20visit%20to%20All%20Believers%20Chapel."
                target="_blank"
                rel="nofollow noreferrer"
                className="flex items-center gap-2 px-7 py-3 border border-stone-600 hover:border-stone-400 text-stone-300 hover:text-white font-semibold rounded-lg text-sm transition-all duration-200 cursor-pointer whitespace-nowrap"
              >
                <i className="ri-whatsapp-line text-green-400" />
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
