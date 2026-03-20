import { Link } from "react-router-dom";
import Navbar from "../../../components/feature/Navbar";
import Footer from "../../../components/feature/Footer";

const activities = [
  { icon: "ri-book-open-line", title: "Bible Storytime", desc: "Engaging, age-appropriate Bible lessons that bring God's Word to life through storytelling, illustrations, and memory verses." },
  { icon: "ri-music-2-line", title: "Kids Worship", desc: "Lively, fun-filled worship sessions where children learn to praise God through songs, movement, and clapping." },
  { icon: "ri-palette-line", title: "Creative Arts & Crafts", desc: "Faith-based crafts and creative activities that reinforce weekly Bible lessons and encourage self-expression." },
  { icon: "ri-gamepad-line", title: "Games & Activities", desc: "Structured games and team activities that teach values like sharing, kindness, and cooperation in a fun environment." },
  { icon: "ri-parent-line", title: "Parent Partnership", desc: "We work closely with parents, providing take-home resources so faith conversations can continue throughout the week." },
  { icon: "ri-shield-check-line", title: "Safe Environment", desc: "All leaders are DBS-checked and trained. Every child is safeguarded with the highest standards of care and supervision." },
];

const ageGroups = [
  { range: "3–5 yrs", label: "Little Lambs", color: "bg-orange-100 text-orange-700" },
  { range: "6–8 yrs", label: "Bible Explorers", color: "bg-amber-100 text-amber-700" },
  { range: "9–12 yrs", label: "Kingdom Kids", color: "bg-rose-100 text-rose-700" },
];

export default function ChildrenMinistryPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero */}
        <section className="relative pt-32 pb-24 px-6 overflow-hidden">
          <img
            src="https://readdy.ai/api/search-image?query=joyful%20african%20children%20sunday%20school%20classroom%20colorful%20vibrant%20bible%20lesson%20singing%20clapping%20bright%20cheerful%20faith-filled%20environment%20engaged%20kids%20learning%20about%20God%20warm%20natural%20light%20photography&width=1440&height=560&seq=chmin001&orientation=landscape"
            alt="Children's Ministry"
            className="absolute inset-0 w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-stone-900/70 via-stone-900/55 to-stone-900/80" />
          <div className="relative z-10 max-w-4xl mx-auto text-center w-full">
            <Link to="/ministries" className="inline-flex items-center gap-1.5 text-amber-300 text-xs font-semibold uppercase tracking-[3px] mb-5 hover:text-amber-200 transition-colors cursor-pointer">
              <i className="ri-arrow-left-s-line" /> All Ministries
            </Link>
            <div className="flex items-center justify-center gap-3 mb-5">
              <div className="w-14 h-14 flex items-center justify-center bg-orange-500/20 backdrop-blur-sm rounded-2xl border border-orange-400/30">
                <i className="ri-user-heart-line text-orange-300 text-2xl" />
              </div>
            </div>
            <h1
              className="text-white font-bold leading-tight"
              style={{ fontFamily: "'Inter', sans-serif", fontSize: "clamp(2.2rem, 5vw, 3.8rem)" }}
            >
              Children's Ministry
            </h1>
            <p className="text-white/80 mt-5 text-base max-w-xl mx-auto leading-relaxed">
              Where little hearts encounter a big God. A safe, vibrant space for children ages 3–12 to grow in faith, love, and joy.
            </p>
            <div className="mt-8 flex items-center justify-center gap-3 flex-wrap">
              <span className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/90 text-xs font-medium border border-white/15">
                <i className="ri-calendar-line text-orange-300" /> Sundays During Main Service
              </span>
              <span className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/90 text-xs font-medium border border-white/15">
                <i className="ri-user-heart-line text-orange-300" /> Ages 3–12
              </span>
              <span className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/90 text-xs font-medium border border-white/15">
                <i className="ri-shield-check-line text-orange-300" /> DBS-Checked Leaders
              </span>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-20 px-6 bg-white">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-center">
            <div>
              <span className="text-orange-500 text-xs font-bold uppercase tracking-[3px]">Our Mission</span>
              <h2 className="mt-3 font-bold text-stone-900" style={{ fontFamily: "'Inter', sans-serif", fontSize: "clamp(1.7rem, 3vw, 2.4rem)" }}>
                Planting Seeds of Faith in Young Hearts
              </h2>
              <p className="mt-5 text-stone-600 text-sm leading-relaxed">
                At All Believers Chapel, we believe that faith formed in childhood lasts a lifetime. Our Children's Ministry creates a joyful, secure, and nurturing environment where every child is known by name and loved unconditionally.
              </p>
              <p className="mt-4 text-stone-600 text-sm leading-relaxed">
                Every Sunday, while parents and adults engage in the main service, our children are engaged in their own age-appropriate, Spirit-filled programme — designed to spark curiosity about Jesus and anchor them in biblical truth.
              </p>
              <div className="mt-8 grid grid-cols-3 gap-4">
                {ageGroups.map((ag) => (
                  <div key={ag.label} className="rounded-xl p-4 bg-orange-50 border border-orange-100 text-center">
                    <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${ag.color}`}>{ag.range}</span>
                    <p className="mt-2 text-stone-700 text-sm font-semibold">{ag.label}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden" style={{ height: "400px" }}>
              <img
                src="https://readdy.ai/api/search-image?query=african%20children%20group%20prayer%20holding%20hands%20sunday%20school%20classroom%20bright%20warm%20light%20bibles%20open%20smiling%20happy%20faith%20community%20together%20kids%20worshipping%20God%20joyful%20atmosphere&width=600&height=500&seq=chmin002&orientation=portrait"
                alt="Children learning about faith"
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute bottom-5 left-5 right-5">
                <div className="bg-white/90 backdrop-blur-sm rounded-xl px-5 py-3 flex items-center gap-3">
                  <div className="w-10 h-10 flex items-center justify-center bg-orange-100 rounded-lg flex-shrink-0">
                    <i className="ri-heart-line text-orange-500" />
                  </div>
                  <div>
                    <p className="text-stone-800 text-sm font-semibold">Every Child Matters</p>
                    <p className="text-stone-500 text-xs">Known, loved, and belonging</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Activities Grid */}
        <section className="py-20 px-6 bg-orange-50/60">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-14">
              <span className="text-orange-500 text-xs font-bold uppercase tracking-[3px]">What We Do</span>
              <h2 className="mt-3 font-bold text-stone-900" style={{ fontFamily: "'Inter', sans-serif", fontSize: "clamp(1.7rem, 3vw, 2.4rem)" }}>
                A Full Programme for Every Child
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {activities.map((a) => (
                <div key={a.title} className="bg-white rounded-2xl p-7 border border-orange-100 hover:-translate-y-1 transition-all duration-300">
                  <div className="w-11 h-11 flex items-center justify-center bg-orange-100 rounded-xl mb-4">
                    <i className={`${a.icon} text-orange-500 text-xl`} />
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
            <span className="text-orange-400 text-xs font-bold uppercase tracking-[3px]">Join Us</span>
            <h2 className="mt-4 text-white font-bold" style={{ fontFamily: "'Inter', sans-serif", fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)" }}>
              Bring Your Children Along
            </h2>
            <p className="mt-4 text-stone-300 text-sm leading-relaxed max-w-xl mx-auto">
              We'd love to meet your family! Children's Ministry runs every Sunday during the main service. Come and see what God is doing among the young ones at ABC.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="px-7 py-3.5 bg-orange-500 hover:bg-orange-400 text-white font-semibold rounded-lg text-sm transition-all duration-200 cursor-pointer whitespace-nowrap">
                <i className="ri-mail-line mr-2" />Get in Touch
              </Link>
              <Link to="/ministries" className="px-7 py-3.5 border-2 border-stone-600 hover:border-orange-400 text-stone-300 hover:text-orange-400 font-semibold rounded-lg text-sm transition-all duration-200 cursor-pointer whitespace-nowrap">
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
