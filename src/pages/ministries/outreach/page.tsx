import { Link } from "react-router-dom";
import Navbar from "../../../components/feature/Navbar";
import Footer from "../../../components/feature/Footer";

const initiatives = [
  { icon: "ri-restaurant-line", title: "Food Bank & Feeding", desc: "Monthly food distributions for families in need across Beeston and South Leeds. We partner with local food banks and bring warm meals to those who are struggling." },
  { icon: "ri-home-heart-line", title: "Pastoral Home Visits", desc: "Our outreach team visits elderly, isolated, and vulnerable community members bringing company, prayer, and practical assistance." },
  { icon: "ri-group-line", title: "Community Events", desc: "Free community events, summer holiday programmes for children, and seasonal celebrations that open our doors to the surrounding neighbourhood." },
  { icon: "ri-mental-health-line", title: "Counselling & Support", desc: "Connecting community members to professional counselling, signposting services, and pastoral care from our trained church support team." },
  { icon: "ri-school-line", title: "Education Support", desc: "Free tutoring, homework clubs, and mentoring for young people in the local area — helping students reach their potential." },
  { icon: "ri-heart-add-line", title: "Care Packages", desc: "Seasonal care packages distributed to vulnerable families, elderly residents, and those experiencing hardship in the Beeston community." },
];

const stats = [
  { num: "200+", label: "Families Served" },
  { num: "Monthly", label: "Food Distributions" },
  { num: "Local", label: "Leeds Community Focus" },
  { num: "Year-round", label: "Active Outreach" },
];

export default function CommunityOutreachPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero */}
        <section className="relative pt-32 pb-24 px-6 overflow-hidden">
          <img
            src="https://readdy.ai/api/search-image?query=diverse%20african%20church%20volunteers%20community%20outreach%20programme%20smiling%20serving%20food%20helping%20neighbours%20warm%20welcoming%20street%20scene%20charitable%20work%20leeds%20uk%20community%20team%20jackets%20care%20compassion%20unity%20together&width=1440&height=560&seq=outmin001&orientation=landscape"
            alt="Community Outreach"
            className="absolute inset-0 w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-stone-900/65 via-sky-950/45 to-stone-900/82" />
          <div className="relative z-10 max-w-4xl mx-auto text-center w-full">
            <Link to="/ministries" className="inline-flex items-center gap-1.5 text-sky-300 text-xs font-semibold uppercase tracking-[3px] mb-5 hover:text-sky-200 transition-colors cursor-pointer">
              <i className="ri-arrow-left-s-line" /> All Ministries
            </Link>
            <div className="flex items-center justify-center gap-3 mb-5">
              <div className="w-14 h-14 flex items-center justify-center bg-sky-500/20 backdrop-blur-sm rounded-2xl border border-sky-400/30">
                <i className="ri-hand-heart-line text-sky-300 text-2xl" />
              </div>
            </div>
            <h1
              className="text-white font-bold leading-tight"
              style={{ fontFamily: "'Inter', sans-serif", fontSize: "clamp(2.2rem, 5vw, 3.8rem)" }}
            >
              Community Outreach
            </h1>
            <p className="text-white/80 mt-5 text-base max-w-xl mx-auto leading-relaxed">
              Extending the love of Christ to every street, door, and life in Leeds. We are the hands and feet of Jesus — one act of service at a time.
            </p>
            <div className="mt-8 flex items-center justify-center gap-3 flex-wrap">
              <span className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/90 text-xs font-medium border border-white/15">
                <i className="ri-calendar-line text-sky-300" /> Monthly Events
              </span>
              <span className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/90 text-xs font-medium border border-white/15">
                <i className="ri-map-pin-line text-sky-300" /> Serving Leeds
              </span>
              <span className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/90 text-xs font-medium border border-white/15">
                <i className="ri-team-line text-sky-300" /> Everyone Welcome to Serve
              </span>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-14 px-6 bg-sky-600">
          <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-5">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <p className="text-white font-bold text-2xl" style={{ fontFamily: "'Inter', sans-serif" }}>{s.num}</p>
                <p className="text-sky-100 text-xs mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* About Section */}
        <section className="py-20 px-6 bg-white">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-center">
            <div>
              <span className="text-sky-600 text-xs font-bold uppercase tracking-[3px]">Our Mandate</span>
              <h2 className="mt-3 font-bold text-stone-900" style={{ fontFamily: "'Inter', sans-serif", fontSize: "clamp(1.7rem, 3vw, 2.4rem)" }}>
                Faith That Goes Beyond Four Walls
              </h2>
              <p className="mt-5 text-stone-600 text-sm leading-relaxed">
                At ABC, we believe the church is most alive when it is most present in the community. Our Community Outreach ministry takes the love, compassion, and power of Jesus to the streets, homes, and hearts of Beeston and greater Leeds.
              </p>
              <p className="mt-4 text-stone-600 text-sm leading-relaxed">
                We don't just invite people to church — we go to them. Through food distributions, home visits, care packages, and community events, we are building bridges of trust and demonstrating Christ's love in action.
              </p>
              <div className="mt-6 p-5 bg-sky-50 rounded-xl border border-sky-100">
                <p className="text-stone-700 text-sm italic leading-relaxed">
                  <i className="ri-double-quotes-l text-sky-400 mr-1" />
                  For I was hungry and you gave me food, I was thirsty and you gave me drink, I was a stranger and you welcomed me.
                  <i className="ri-double-quotes-r text-sky-400 ml-1" />
                </p>
                <p className="text-sky-600 text-xs font-bold mt-2">Matthew 25:35</p>
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden" style={{ height: "420px" }}>
              <img
                src="https://readdy.ai/api/search-image?query=african%20church%20volunteers%20distributing%20food%20parcels%20bags%20warm%20smiles%20serving%20community%20outdoor%20street%20scene%20colourful%20team%20shirts%20compassionate%20helping%20neighbours%20outreach%20event%20community%20care&width=600&height=520&seq=outmin002&orientation=portrait"
                alt="Outreach in action"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>
        </section>

        {/* Initiatives */}
        <section className="py-20 px-6 bg-sky-50/60">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-14">
              <span className="text-sky-600 text-xs font-bold uppercase tracking-[3px]">How We Serve</span>
              <h2 className="mt-3 font-bold text-stone-900" style={{ fontFamily: "'Inter', sans-serif", fontSize: "clamp(1.7rem, 3vw, 2.4rem)" }}>
                Our Outreach Initiatives
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {initiatives.map((a) => (
                <div key={a.title} className="bg-white rounded-2xl p-7 border border-sky-100 hover:-translate-y-1 transition-all duration-300">
                  <div className="w-11 h-11 flex items-center justify-center bg-sky-100 rounded-xl mb-4">
                    <i className={`${a.icon} text-sky-600 text-xl`} />
                  </div>
                  <h3 className="font-bold text-stone-900 text-base mb-2">{a.title}</h3>
                  <p className="text-stone-500 text-sm leading-relaxed">{a.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-6 bg-stone-900">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-sky-400 text-xs font-bold uppercase tracking-[3px]">Get Involved</span>
            <h2 className="mt-4 text-white font-bold" style={{ fontFamily: "'Inter', sans-serif", fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)" }}>
              Be the Difference in Your City
            </h2>
            <p className="mt-4 text-stone-300 text-sm leading-relaxed max-w-xl mx-auto">
              Volunteering is open to all. Whether you can spare a few hours on a Saturday or want to lead a project — every act of service makes an eternal difference. Come serve with us.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="px-7 py-3.5 bg-sky-600 hover:bg-sky-500 text-white font-semibold rounded-lg text-sm transition-all duration-200 cursor-pointer whitespace-nowrap">
                <i className="ri-mail-line mr-2" />Volunteer With Us
              </Link>
              <Link to="/ministries" className="px-7 py-3.5 border-2 border-stone-600 hover:border-sky-400 text-stone-300 hover:text-sky-400 font-semibold rounded-lg text-sm transition-all duration-200 cursor-pointer whitespace-nowrap">
                <i className="ri-arrow-left-s-line mr-1" />Back to Ministries
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
