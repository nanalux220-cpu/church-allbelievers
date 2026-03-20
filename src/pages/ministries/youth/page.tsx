import { Link } from "react-router-dom";
import Navbar from "../../../components/feature/Navbar";
import Footer from "../../../components/feature/Footer";

const activities = [
  { icon: "ri-music-line", title: "Worship Nights", desc: "High-energy worship gatherings where young people encounter God through contemporary praise, prayer, and the presence of the Holy Spirit." },
  { icon: "ri-book-open-line", title: "Bible Studies", desc: "Deep, relevant Bible study sessions that tackle real-life questions and equip youth with the truth of God's Word for everyday living." },
  { icon: "ri-team-line", title: "Leadership Training", desc: "We identify and develop emerging leaders through mentorship, discipleship tracks, and hands-on serving opportunities within the church." },
  { icon: "ri-trophy-line", title: "Sports & Socials", desc: "Football, basketball, outings, and social events that build friendships, teamwork, and community among young believers." },
  { icon: "ri-global-line", title: "Mission Trips", desc: "Outreach and mission experiences that expand young people's hearts for the nations and for serving their local community." },
  { icon: "ri-mic-line", title: "Youth Conferences", desc: "Annual youth conferences and guest-speaker events designed to ignite passion, break limitations, and deepen faith." },
];

const testimonials = [
  { name: "Jasmine O.", age: "19", quote: "Youth ministry gave me a family. I found purpose, real friendships, and a faith that's truly my own — not just my parents'." },
  { name: "Kofi A.", age: "22", quote: "The leadership training changed my life. I went from a shy teenager to leading a small group. God really moved in this place." },
  { name: "Priscilla M.", age: "17", quote: "Worship nights are my favourite. It's a space where I can be completely honest with God and experience His presence like nowhere else." },
];

export default function YouthMinistryPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero */}
        <section className="relative pt-32 pb-24 px-6 overflow-hidden">
          <img
            src="https://readdy.ai/api/search-image?query=energetic%20diverse%20african%20christian%20teenagers%20youth%20group%20worship%20praise%20hands%20raised%20passionate%20vibrant%20modern%20church%20electric%20lighting%20powerful%20atmosphere%20youthful%20energy%20bold%20faith%20community%20concert-style&width=1440&height=560&seq=ythmin001&orientation=landscape"
            alt="Youth Ministry"
            className="absolute inset-0 w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-stone-900/65 via-stone-900/50 to-stone-900/80" />
          <div className="relative z-10 max-w-4xl mx-auto text-center w-full">
            <Link to="/ministries" className="inline-flex items-center gap-1.5 text-amber-300 text-xs font-semibold uppercase tracking-[3px] mb-5 hover:text-amber-200 transition-colors cursor-pointer">
              <i className="ri-arrow-left-s-line" /> All Ministries
            </Link>
            <div className="flex items-center justify-center gap-3 mb-5">
              <div className="w-14 h-14 flex items-center justify-center bg-amber-500/20 backdrop-blur-sm rounded-2xl border border-amber-400/30">
                <i className="ri-fire-line text-amber-300 text-2xl" />
              </div>
            </div>
            <h1
              className="text-white font-bold leading-tight"
              style={{ fontFamily: "'Inter', sans-serif", fontSize: "clamp(2.2rem, 5vw, 3.8rem)" }}
            >
              Youth Ministry
            </h1>
            <p className="text-white/80 mt-5 text-base max-w-xl mx-auto leading-relaxed">
              Bold, on fire, and set apart. A community for ages 13–25 who refuse to be average and dare to live for God fully.
            </p>
            <div className="mt-8 flex items-center justify-center gap-3 flex-wrap">
              <span className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/90 text-xs font-medium border border-white/15">
                <i className="ri-calendar-line text-amber-300" /> Saturdays &amp; Sundays
              </span>
              <span className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/90 text-xs font-medium border border-white/15">
                <i className="ri-fire-line text-amber-300" /> Ages 13–25
              </span>
              <span className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/90 text-xs font-medium border border-white/15">
                <i className="ri-map-pin-line text-amber-300" /> Leeds, UK
              </span>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-20 px-6 bg-white">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-center">
            <div className="relative rounded-2xl overflow-hidden" style={{ height: "420px" }}>
              <img
                src="https://readdy.ai/api/search-image?query=african%20young%20adults%20christian%20bible%20study%20group%20engaged%20lively%20discussion%20passionate%20faith%20community%20indoor%20warm%20lighting%20confident%20diverse%20teenagers%20reading%20scripture%20praying%20together%20brotherhood%20sisterhood&width=600&height=520&seq=ythmin002&orientation=portrait"
                alt="Youth in fellowship"
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute bottom-5 left-5 right-5">
                <div className="bg-white/90 backdrop-blur-sm rounded-xl px-5 py-3 flex items-center gap-3">
                  <div className="w-10 h-10 flex items-center justify-center bg-amber-100 rounded-lg flex-shrink-0">
                    <i className="ri-fire-line text-amber-500" />
                  </div>
                  <div>
                    <p className="text-stone-800 text-sm font-semibold">Generation on Fire</p>
                    <p className="text-stone-500 text-xs">Raising kingdom builders</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <span className="text-amber-600 text-xs font-bold uppercase tracking-[3px]">Our Vision</span>
              <h2 className="mt-3 font-bold text-stone-900" style={{ fontFamily: "'Inter', sans-serif", fontSize: "clamp(1.7rem, 3vw, 2.4rem)" }}>
                Raising the Next Generation of Kingdom Builders
              </h2>
              <p className="mt-5 text-stone-600 text-sm leading-relaxed">
                ABC Youth is a thriving, Spirit-filled community where young people discover their identity in Christ, develop their gifts, and fulfil their God-given destiny. We don't just entertain — we transform.
              </p>
              <p className="mt-4 text-stone-600 text-sm leading-relaxed">
                Whether you're questioning faith for the first time or already deeply rooted, there's a place here for you. We meet weekly with one goal: to see every young person fall in love with Jesus and walk boldly in their calling.
              </p>
              <div className="mt-8 grid grid-cols-3 gap-4 text-center">
                {[{ num: "50+", label: "Active Youth" }, { num: "3+", label: "Leaders Trained" }, { num: "Weekly", label: "Gatherings" }].map((s) => (
                  <div key={s.label} className="bg-amber-50 rounded-xl p-4 border border-amber-100">
                    <p className="text-amber-700 font-bold text-xl" style={{ fontFamily: "'Inter', sans-serif" }}>{s.num}</p>
                    <p className="text-stone-500 text-xs mt-1">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Activities */}
        <section className="py-20 px-6 bg-amber-50/50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-14">
              <span className="text-amber-600 text-xs font-bold uppercase tracking-[3px]">What We Offer</span>
              <h2 className="mt-3 font-bold text-stone-900" style={{ fontFamily: "'Inter', sans-serif", fontSize: "clamp(1.7rem, 3vw, 2.4rem)" }}>
                More Than Just Sundays
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {activities.map((a) => (
                <div key={a.title} className="bg-white rounded-2xl p-7 border border-amber-100 hover:-translate-y-1 transition-all duration-300">
                  <div className="w-11 h-11 flex items-center justify-center bg-amber-100 rounded-xl mb-4">
                    <i className={`${a.icon} text-amber-500 text-xl`} />
                  </div>
                  <h3 className="font-bold text-stone-900 text-base mb-2">{a.title}</h3>
                  <p className="text-stone-500 text-sm leading-relaxed">{a.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 px-6 bg-white">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-amber-600 text-xs font-bold uppercase tracking-[3px]">Voices</span>
              <h2 className="mt-3 font-bold text-stone-900" style={{ fontFamily: "'Inter', sans-serif", fontSize: "clamp(1.7rem, 3vw, 2.4rem)" }}>
                What Our Youth Say
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {testimonials.map((t) => (
                <div key={t.name} className="bg-amber-50 rounded-2xl p-7 border border-amber-100">
                  <i className="ri-double-quotes-l text-amber-300 text-3xl mb-3 block" />
                  <p className="text-stone-700 text-sm leading-relaxed italic">{t.quote}</p>
                  <div className="mt-5 flex items-center gap-3">
                    <div className="w-9 h-9 flex items-center justify-center bg-amber-200 rounded-full flex-shrink-0">
                      <i className="ri-user-line text-amber-700 text-sm" />
                    </div>
                    <div>
                      <p className="text-stone-800 text-sm font-semibold">{t.name}</p>
                      <p className="text-stone-400 text-xs">Age {t.age}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-6 bg-stone-900">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-amber-400 text-xs font-bold uppercase tracking-[3px]">Don't Wait</span>
            <h2 className="mt-4 text-white font-bold" style={{ fontFamily: "'Inter', sans-serif", fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)" }}>
              Your Seat Is Waiting
            </h2>
            <p className="mt-4 text-stone-300 text-sm leading-relaxed max-w-xl mx-auto">
              Whether you're bringing a group of mates or coming alone for the first time — you'll be welcomed. Come experience a youth community like no other.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="px-7 py-3.5 bg-amber-500 hover:bg-amber-400 text-white font-semibold rounded-lg text-sm transition-all duration-200 cursor-pointer whitespace-nowrap">
                <i className="ri-mail-line mr-2" />Get in Touch
              </Link>
              <Link to="/ministries" className="px-7 py-3.5 border-2 border-stone-600 hover:border-amber-400 text-stone-300 hover:text-amber-400 font-semibold rounded-lg text-sm transition-all duration-200 cursor-pointer whitespace-nowrap">
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
