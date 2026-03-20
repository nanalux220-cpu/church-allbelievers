import { Link } from "react-router-dom";
import Navbar from "../../../components/feature/Navbar";
import Footer from "../../../components/feature/Footer";

const activities = [
  { icon: "ri-book-open-line", title: "Word & Discipleship", desc: "Monthly Bible study sessions anchored in Scripture, equipping men to lead their families, workplaces, and communities with godly wisdom." },
  { icon: "ri-shield-line", title: "Accountability Groups", desc: "Small, trusted groups where men can be vulnerable, pray for one another, and walk in integrity with real brotherhood support." },
  { icon: "ri-building-2-line", title: "Family Leadership", desc: "Practical teachings on being a godly husband, father, and head of household — grounded in biblical principles and real-life application." },
  { icon: "ri-briefcase-4-line", title: "Faith at Work", desc: "Conversations and coaching on integrating Christian values into professional life, business, and career decisions." },
  { icon: "ri-service-line", title: "Community Service", desc: "Men-led outreach initiatives serving the Leeds community with practical help, presence, and the love of Christ in action." },
  { icon: "ri-trophy-line", title: "Sports & Brotherhood", desc: "Football, fitness, and recreational activities that strengthen bonds among men in a relaxed and fun environment." },
];

const values = [
  { icon: "ri-sword-line", label: "Courage", desc: "Standing firm in faith" },
  { icon: "ri-heart-line", label: "Integrity", desc: "Walking in truth daily" },
  { icon: "ri-team-line", label: "Brotherhood", desc: "No man walks alone" },
  { icon: "ri-focus-3-line", label: "Purpose", desc: "Called for more" },
];

export default function MensMinistryPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero */}
        <section className="relative pt-32 pb-24 px-6 overflow-hidden">
          <img
            src="https://readdy.ai/api/search-image?query=professional%20african%20christian%20men%20group%20church%20fellowship%20strong%20brotherhood%20standing%20confident%20suited%20formal%20attire%20praying%20together%20unity%20powerful%20community%20spiritual%20gathering%20warm%20interior%20photography%20men%20of%20God&width=1440&height=560&seq=menmin001&orientation=landscape"
            alt="Men's Ministry"
            className="absolute inset-0 w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-stone-900/70 via-stone-800/55 to-stone-900/85" />
          <div className="relative z-10 max-w-4xl mx-auto text-center w-full">
            <Link to="/ministries" className="inline-flex items-center gap-1.5 text-amber-300 text-xs font-semibold uppercase tracking-[3px] mb-5 hover:text-amber-200 transition-colors cursor-pointer">
              <i className="ri-arrow-left-s-line" /> All Ministries
            </Link>
            <div className="flex items-center justify-center gap-3 mb-5">
              <div className="w-14 h-14 flex items-center justify-center bg-stone-500/30 backdrop-blur-sm rounded-2xl border border-stone-400/30">
                <i className="ri-men-line text-stone-300 text-2xl" />
              </div>
            </div>
            <h1
              className="text-white font-bold leading-tight"
              style={{ fontFamily: "'Inter', sans-serif", fontSize: "clamp(2.2rem, 5vw, 3.8rem)" }}
            >
              Men's Ministry
            </h1>
            <p className="text-white/80 mt-5 text-base max-w-xl mx-auto leading-relaxed">
              A brotherhood built on faith, integrity, and purpose. Where men are sharpened, strengthened, and sent.
            </p>
            <div className="mt-8 flex items-center justify-center gap-3 flex-wrap">
              <span className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/90 text-xs font-medium border border-white/15">
                <i className="ri-calendar-line text-amber-300" /> Monthly Gatherings
              </span>
              <span className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/90 text-xs font-medium border border-white/15">
                <i className="ri-men-line text-amber-300" /> Men of All Ages
              </span>
              <span className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/90 text-xs font-medium border border-white/15">
                <i className="ri-map-pin-line text-amber-300" /> Leeds, UK
              </span>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-14 px-6 bg-stone-100">
          <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-5">
            {values.map((v) => (
              <div key={v.label} className="bg-white rounded-2xl p-6 text-center border border-stone-200 hover:-translate-y-1 transition-all duration-300">
                <div className="w-12 h-12 flex items-center justify-center bg-stone-100 rounded-xl mx-auto mb-3">
                  <i className={`${v.icon} text-stone-700 text-xl`} />
                </div>
                <p className="font-bold text-stone-900 text-base">{v.label}</p>
                <p className="text-stone-400 text-xs mt-1">{v.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* About Section */}
        <section className="py-20 px-6 bg-white">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-center">
            <div>
              <span className="text-stone-600 text-xs font-bold uppercase tracking-[3px]">Who We Are</span>
              <h2 className="mt-3 font-bold text-stone-900" style={{ fontFamily: "'Inter', sans-serif", fontSize: "clamp(1.7rem, 3vw, 2.4rem)" }}>
                Men of God. Men of Honour.
              </h2>
              <p className="mt-5 text-stone-600 text-sm leading-relaxed">
                The Men's Ministry at ABC is a community of men committed to growing in faith, leading with integrity, and serving with humility. We believe that when men are rooted in God, families are strengthened and communities are transformed.
              </p>
              <p className="mt-4 text-stone-600 text-sm leading-relaxed">
                We gather monthly for fellowship, the Word, and prayer — and we carry those values into every area of our lives. Single men, married men, fathers, sons — all are welcome. Iron sharpens iron here.
              </p>
              <Link to="/contact" className="inline-flex items-center gap-2 mt-7 px-6 py-3 bg-stone-800 hover:bg-stone-700 text-white text-sm font-semibold rounded-lg transition-all duration-200 cursor-pointer whitespace-nowrap">
                Join the Brotherhood <i className="ri-arrow-right-line" />
              </Link>
            </div>
            <div className="relative rounded-2xl overflow-hidden" style={{ height: "400px" }}>
              <img
                src="https://readdy.ai/api/search-image?query=african%20men%20church%20small%20group%20accountability%20bible%20study%20warm%20interior%20laughing%20encouraging%20each%20other%20diverse%20ages%20mentorship%20spiritual%20growth%20authentic%20brotherhood%20community%20real%20men%20of%20faith&width=600&height=500&seq=menmin002&orientation=portrait"
                alt="Men in fellowship"
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute bottom-5 left-5 right-5">
                <div className="bg-white/90 backdrop-blur-sm rounded-xl px-5 py-3 flex items-center gap-3">
                  <div className="w-10 h-10 flex items-center justify-center bg-stone-100 rounded-lg flex-shrink-0">
                    <i className="ri-team-line text-stone-700" />
                  </div>
                  <div>
                    <p className="text-stone-800 text-sm font-semibold">Iron Sharpens Iron</p>
                    <p className="text-stone-500 text-xs">Proverbs 27:17</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Activities */}
        <section className="py-20 px-6 bg-stone-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-14">
              <span className="text-stone-600 text-xs font-bold uppercase tracking-[3px]">What We Offer</span>
              <h2 className="mt-3 font-bold text-stone-900" style={{ fontFamily: "'Inter', sans-serif", fontSize: "clamp(1.7rem, 3vw, 2.4rem)" }}>
                Building Men Who Matter
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {activities.map((a) => (
                <div key={a.title} className="bg-white rounded-2xl p-7 border border-stone-200 hover:-translate-y-1 transition-all duration-300">
                  <div className="w-11 h-11 flex items-center justify-center bg-stone-100 rounded-xl mb-4">
                    <i className={`${a.icon} text-stone-700 text-xl`} />
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
            <span className="text-amber-400 text-xs font-bold uppercase tracking-[3px]">Join the Brotherhood</span>
            <h2 className="mt-4 text-white font-bold" style={{ fontFamily: "'Inter', sans-serif", fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)" }}>
              You Were Made for More
            </h2>
            <p className="mt-4 text-stone-300 text-sm leading-relaxed max-w-xl mx-auto">
              If you're looking for real brotherhood — men who pray together, grow together, and fight for each other — look no further. Come and belong.
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
