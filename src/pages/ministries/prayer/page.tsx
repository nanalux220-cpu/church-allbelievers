import { Link } from "react-router-dom";
import Navbar from "../../../components/feature/Navbar";
import Footer from "../../../components/feature/Footer";

const prayerTypes = [
  { icon: "ri-time-line", title: "Saturday Intercession", desc: "Our flagship weekly prayer session every Saturday, 11am–12pm. We stand in the gap for the church, the city of Leeds, and the nations.", schedule: "Saturdays 11am–12pm" },
  { icon: "ri-sun-line", title: "Early Morning Prayer", desc: "Midweek morning prayer calls where dedicated intercessors gather before the day begins to seek God's face and declare His Word.", schedule: "Weekday mornings" },
  { icon: "ri-moon-line", title: "Night Watch", desc: "Late-night prayer sessions held periodically for deeper intercession, breakthroughs, and Spirit-led soaking in God's presence.", schedule: "Monthly" },
  { icon: "ri-team-line", title: "Corporate Prayer Nights", desc: "All-church prayer events where the whole congregation comes together to seek God collectively on special occasions.", schedule: "Quarterly" },
  { icon: "ri-home-heart-line", title: "Home Prayer Cells", desc: "Smaller neighbourhood prayer groups that meet in homes across Leeds, bringing intercession closer to the community.", schedule: "Weekly" },
  { icon: "ri-global-line", title: "Nations Intercession", desc: "Dedicated prayer for world events, missions, and global revival — believing that our prayers move mountains far beyond Leeds.", schedule: "Monthly" },
];

const scriptures = [
  { verse: "\"Do not be anxious about anything, but in every situation, by prayer and petition, with thanksgiving, present your requests to God.\"", ref: "Philippians 4:6" },
  { verse: "\"The prayer of a righteous person is powerful and effective.\"", ref: "James 5:16" },
  { verse: "\"Call to me and I will answer you and tell you great and unsearchable things you do not know.\"", ref: "Jeremiah 33:3" },
];

export default function PrayerMinistryPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero */}
        <section className="relative pt-32 pb-24 px-6 overflow-hidden">
          <img
            src="https://readdy.ai/api/search-image?query=intimate%20african%20christians%20prayer%20group%20gathered%20kneeling%20hands%20raised%20worship%20reverent%20holy%20atmosphere%20soft%20warm%20golden%20light%20church%20interior%20spiritual%20intercession%20devoted%20worshippers%20peaceful%20serene%20sacred%20space&width=1440&height=560&seq=prymin001&orientation=landscape"
            alt="Prayer Ministry"
            className="absolute inset-0 w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-stone-900/60 via-emerald-950/40 to-stone-900/82" />
          <div className="relative z-10 max-w-4xl mx-auto text-center w-full">
            <Link to="/ministries" className="inline-flex items-center gap-1.5 text-emerald-300 text-xs font-semibold uppercase tracking-[3px] mb-5 hover:text-emerald-200 transition-colors cursor-pointer">
              <i className="ri-arrow-left-s-line" /> All Ministries
            </Link>
            <div className="flex items-center justify-center gap-3 mb-5">
              <div className="w-14 h-14 flex items-center justify-center bg-emerald-500/20 backdrop-blur-sm rounded-2xl border border-emerald-400/30">
                <i className="ri-hands-line text-emerald-300 text-2xl" />
              </div>
            </div>
            <h1
              className="text-white font-bold leading-tight"
              style={{ fontFamily: "'Inter', sans-serif", fontSize: "clamp(2.2rem, 5vw, 3.8rem)" }}
            >
              Prayer Ministry
            </h1>
            <p className="text-white/80 mt-5 text-base max-w-xl mx-auto leading-relaxed">
              The heartbeat of All Believers Chapel. We believe prayer moves mountains, shapes nations, and transforms lives — one intercession at a time.
            </p>
            <div className="mt-8 flex items-center justify-center gap-3 flex-wrap">
              <span className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/90 text-xs font-medium border border-white/15">
                <i className="ri-calendar-line text-emerald-300" /> Sat 11am–12pm
              </span>
              <span className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/90 text-xs font-medium border border-white/15">
                <i className="ri-user-line text-emerald-300" /> All Welcome
              </span>
              <span className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/90 text-xs font-medium border border-white/15">
                <i className="ri-global-line text-emerald-300" /> Praying for the Nations
              </span>
            </div>
          </div>
        </section>

        {/* Scripture Banner */}
        <section className="py-14 px-6 bg-emerald-700">
          <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-6">
            {scriptures.map((s) => (
              <div key={s.ref} className="text-center px-4">
                <i className="ri-double-quotes-l text-emerald-300 text-2xl mb-3 block" />
                <p className="text-white/90 text-sm leading-relaxed italic">{s.verse}</p>
                <p className="mt-3 text-emerald-200 text-xs font-bold">{s.ref}</p>
              </div>
            ))}
          </div>
        </section>

        {/* About Section */}
        <section className="py-20 px-6 bg-white">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-center">
            <div className="relative rounded-2xl overflow-hidden" style={{ height: "420px" }}>
              <img
                src="https://readdy.ai/api/search-image?query=african%20church%20prayer%20group%20hands%20joined%20circle%20kneeling%20praying%20together%20sincere%20devotion%20warm%20candle%20light%20intimate%20spiritual%20gathering%20intercession%20community%20faith%20believers%20united&width=600&height=520&seq=prymin002&orientation=portrait"
                alt="Prayer gathering"
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div>
              <span className="text-emerald-600 text-xs font-bold uppercase tracking-[3px]">Our Foundation</span>
              <h2 className="mt-3 font-bold text-stone-900" style={{ fontFamily: "'Inter', sans-serif", fontSize: "clamp(1.7rem, 3vw, 2.4rem)" }}>
                Everything We Do Begins in Prayer
              </h2>
              <p className="mt-5 text-stone-600 text-sm leading-relaxed">
                Prayer is not an add-on at ABC — it is the foundation on which everything else is built. Our Prayer Ministry is the spiritual backbone of the church, covering every area of ministry with faithful, consistent intercession.
              </p>
              <p className="mt-4 text-stone-600 text-sm leading-relaxed">
                From Saturday morning intercession to late-night prayer watches, our team believes that what happens in the prayer room determines what happens in the world. Every church event, every sermon, every life touched — is first covered in prayer.
              </p>
              <div className="mt-8 grid grid-cols-3 gap-4 text-center">
                {[{ num: "Every Sat", label: "Prayer Session" }, { num: "24/7", label: "Coverage Goal" }, { num: "Nations", label: "We Intercede For" }].map((s) => (
                  <div key={s.label} className="bg-emerald-50 rounded-xl p-4 border border-emerald-100">
                    <p className="text-emerald-700 font-bold text-base" style={{ fontFamily: "'Inter', sans-serif" }}>{s.num}</p>
                    <p className="text-stone-500 text-xs mt-1">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Prayer Sessions */}
        <section className="py-20 px-6 bg-emerald-50/60">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-14">
              <span className="text-emerald-600 text-xs font-bold uppercase tracking-[3px]">When We Pray</span>
              <h2 className="mt-3 font-bold text-stone-900" style={{ fontFamily: "'Inter', sans-serif", fontSize: "clamp(1.7rem, 3vw, 2.4rem)" }}>
                Our Prayer Gatherings
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {prayerTypes.map((p) => (
                <div key={p.title} className="bg-white rounded-2xl p-7 border border-emerald-100 hover:-translate-y-1 transition-all duration-300">
                  <div className="w-11 h-11 flex items-center justify-center bg-emerald-100 rounded-xl mb-4">
                    <i className={`${p.icon} text-emerald-600 text-xl`} />
                  </div>
                  <h3 className="font-bold text-stone-900 text-base mb-2">{p.title}</h3>
                  <p className="text-stone-500 text-sm leading-relaxed mb-4">{p.desc}</p>
                  <span className="inline-flex items-center gap-1.5 text-xs text-emerald-700 font-semibold bg-emerald-50 px-3 py-1 rounded-full border border-emerald-100">
                    <i className="ri-time-line" />{p.schedule}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-6 bg-stone-900">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-emerald-400 text-xs font-bold uppercase tracking-[3px]">Stand With Us</span>
            <h2 className="mt-4 text-white font-bold" style={{ fontFamily: "'Inter', sans-serif", fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)" }}>
              Join the Prayer Team
            </h2>
            <p className="mt-4 text-stone-300 text-sm leading-relaxed max-w-xl mx-auto">
              Whether you're a seasoned intercessor or just beginning your prayer journey, there's a place for you in our prayer family. Every voice matters. Every prayer counts.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="px-7 py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold rounded-lg text-sm transition-all duration-200 cursor-pointer whitespace-nowrap">
                <i className="ri-mail-line mr-2" />Get in Touch
              </Link>
              <Link to="/ministries" className="px-7 py-3.5 border-2 border-stone-600 hover:border-emerald-500 text-stone-300 hover:text-emerald-400 font-semibold rounded-lg text-sm transition-all duration-200 cursor-pointer whitespace-nowrap">
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
