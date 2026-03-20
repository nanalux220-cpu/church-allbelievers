import { Link } from "react-router-dom";
import Navbar from "../../../components/feature/Navbar";
import Footer from "../../../components/feature/Footer";

const activities = [
  { icon: "ri-book-open-line", title: "Bible & Prayer Circles", desc: "Intimate, transparent Bible study sessions where women pray together, share their faith journeys, and hold one another accountable." },
  { icon: "ri-heart-3-line", title: "Sisterhood Fellowship", desc: "Regular fellowship gatherings that build genuine sisterly relationships rooted in love, trust, and mutual encouragement." },
  { icon: "ri-mental-health-line", title: "Wellness & Wholeness", desc: "Workshops and discussions addressing mental, emotional, and spiritual well-being from a biblical perspective." },
  { icon: "ri-award-line", title: "Women's Retreats", desc: "Annual retreats for refreshing, deeper encounter with God, and intentional time away to rest and reconnect with purpose." },
  { icon: "ri-service-line", title: "Community Service", desc: "Women-led outreach projects serving families and women in the Leeds community with care, resources, and practical help." },
  { icon: "ri-empathize-line", title: "Mentorship Programme", desc: "Connecting younger women with seasoned mentors in the church for guidance, wisdom, and spiritual development." },
];

const pillars = [
  { icon: "ri-seedling-line", label: "Grow", desc: "Deeper in faith" },
  { icon: "ri-links-line", label: "Connect", desc: "In sisterhood" },
  { icon: "ri-service-line", label: "Serve", desc: "With purpose" },
  { icon: "ri-sparkling-line", label: "Thrive", desc: "In every season" },
];

export default function WomensMinistryPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero */}
        <section className="relative pt-32 pb-24 px-6 overflow-hidden">
          <img
            src="https://readdy.ai/api/search-image?query=beautiful%20group%20of%20african%20christian%20women%20standing%20together%20church%20setting%20warm%20smiling%20joyful%20sisterhood%20prayer%20community%20elegant%20floral%20dresses%20diverse%20ages%20united%20in%20faith%20soft%20golden%20light&width=1440&height=560&seq=wmnmin001&orientation=landscape"
            alt="Women's Ministry"
            className="absolute inset-0 w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-stone-900/60 via-rose-950/40 to-stone-900/80" />
          <div className="relative z-10 max-w-4xl mx-auto text-center w-full">
            <Link to="/ministries" className="inline-flex items-center gap-1.5 text-rose-200 text-xs font-semibold uppercase tracking-[3px] mb-5 hover:text-rose-100 transition-colors cursor-pointer">
              <i className="ri-arrow-left-s-line" /> All Ministries
            </Link>
            <div className="flex items-center justify-center gap-3 mb-5">
              <div className="w-14 h-14 flex items-center justify-center bg-rose-500/20 backdrop-blur-sm rounded-2xl border border-rose-400/30">
                <i className="ri-women-line text-rose-300 text-2xl" />
              </div>
            </div>
            <h1
              className="text-white font-bold leading-tight"
              style={{ fontFamily: "'Inter', sans-serif", fontSize: "clamp(2.2rem, 5vw, 3.8rem)" }}
            >
              Women's Ministry
            </h1>
            <p className="text-white/80 mt-5 text-base max-w-xl mx-auto leading-relaxed">
              A fellowship of grace, strength, and sisterhood. Empowering every woman to walk in her God-given identity and purpose.
            </p>
            <div className="mt-8 flex items-center justify-center gap-3 flex-wrap">
              <span className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/90 text-xs font-medium border border-white/15">
                <i className="ri-calendar-line text-rose-300" /> Bi-Weekly Meetings
              </span>
              <span className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/90 text-xs font-medium border border-white/15">
                <i className="ri-women-line text-rose-300" /> All Ages Welcome
              </span>
              <span className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/90 text-xs font-medium border border-white/15">
                <i className="ri-map-pin-line text-rose-300" /> Leeds, UK
              </span>
            </div>
          </div>
        </section>

        {/* Pillars */}
        <section className="py-14 px-6 bg-rose-50">
          <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-5">
            {pillars.map((p) => (
              <div key={p.label} className="bg-white rounded-2xl p-6 text-center border border-rose-100 hover:-translate-y-1 transition-all duration-300">
                <div className="w-12 h-12 flex items-center justify-center bg-rose-100 rounded-xl mx-auto mb-3">
                  <i className={`${p.icon} text-rose-500 text-xl`} />
                </div>
                <p className="font-bold text-stone-900 text-base">{p.label}</p>
                <p className="text-stone-400 text-xs mt-1">{p.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* About Section */}
        <section className="py-20 px-6 bg-white">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-center">
            <div>
              <span className="text-rose-500 text-xs font-bold uppercase tracking-[3px]">Who We Are</span>
              <h2 className="mt-3 font-bold text-stone-900" style={{ fontFamily: "'Inter', sans-serif", fontSize: "clamp(1.7rem, 3vw, 2.4rem)" }}>
                Women Rooted in Faith, Flourishing Together
              </h2>
              <p className="mt-5 text-stone-600 text-sm leading-relaxed">
                The Women's Ministry at All Believers Chapel is a vibrant sisterhood that celebrates, supports, and empowers women of every age and background. We believe every woman has a unique calling and we exist to help her walk in it fully.
              </p>
              <p className="mt-4 text-stone-600 text-sm leading-relaxed">
                Through prayer, fellowship, Bible study, retreats, and outreach, we create spaces where women can be real, be heard, and be transformed. Whether you're a new believer or a seasoned saint — you belong here.
              </p>
              <Link to="/contact" className="inline-flex items-center gap-2 mt-7 px-6 py-3 bg-rose-500 hover:bg-rose-600 text-white text-sm font-semibold rounded-lg transition-all duration-200 cursor-pointer whitespace-nowrap">
                Connect With Us <i className="ri-arrow-right-line" />
              </Link>
            </div>
            <div className="relative rounded-2xl overflow-hidden" style={{ height: "400px" }}>
              <img
                src="https://readdy.ai/api/search-image?query=african%20women%20church%20group%20prayer%20circle%20holding%20hands%20together%20bibles%20notebooks%20roses%20warm%20candlelight%20soft%20golden%20photography%20intimate%20faith%20sisters%20fellowship%20encouraging%20spiritual%20devotion&width=600&height=500&seq=wmnmin002&orientation=portrait"
                alt="Women in fellowship"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>
        </section>

        {/* Activities */}
        <section className="py-20 px-6 bg-rose-50/60">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-14">
              <span className="text-rose-500 text-xs font-bold uppercase tracking-[3px]">What We Do</span>
              <h2 className="mt-3 font-bold text-stone-900" style={{ fontFamily: "'Inter', sans-serif", fontSize: "clamp(1.7rem, 3vw, 2.4rem)" }}>
                How We Grow Together
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {activities.map((a) => (
                <div key={a.title} className="bg-white rounded-2xl p-7 border border-rose-100 hover:-translate-y-1 transition-all duration-300">
                  <div className="w-11 h-11 flex items-center justify-center bg-rose-100 rounded-xl mb-4">
                    <i className={`${a.icon} text-rose-500 text-xl`} />
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
            <span className="text-rose-300 text-xs font-bold uppercase tracking-[3px]">You're Welcome Here</span>
            <h2 className="mt-4 text-white font-bold" style={{ fontFamily: "'Inter', sans-serif", fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)" }}>
              Come as You Are
            </h2>
            <p className="mt-4 text-stone-300 text-sm leading-relaxed max-w-xl mx-auto">
              No matter your season of life — single, married, young, or mature — there is a seat at the table for you. Come and be part of something beautiful.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="px-7 py-3.5 bg-rose-500 hover:bg-rose-400 text-white font-semibold rounded-lg text-sm transition-all duration-200 cursor-pointer whitespace-nowrap">
                <i className="ri-mail-line mr-2" />Get in Touch
              </Link>
              <Link to="/ministries" className="px-7 py-3.5 border-2 border-stone-600 hover:border-rose-400 text-stone-300 hover:text-rose-400 font-semibold rounded-lg text-sm transition-all duration-200 cursor-pointer whitespace-nowrap">
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
