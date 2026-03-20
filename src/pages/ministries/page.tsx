import { Link } from "react-router-dom";
import Navbar from "../../components/feature/Navbar";
import Footer from "../../components/feature/Footer";

const ministries = [
  {
    id: "children",
    title: "Children's Ministry",
    icon: "ri-user-heart-line",
    tag: "For Ages 3–12",
    desc: "A vibrant and safe environment where children discover Jesus through engaging Bible lessons, worship, crafts, and games. We believe the seeds of faith planted in childhood shape a lifetime of devotion.",
    schedule: "Sundays during main service",
    link: "/ministries/children",
    img: "https://readdy.ai/api/search-image?query=happy%20african%20children%20sunday%20school%20class%20singing%20clapping%20joyful%20colorful%20classroom%20bible%20stories%20bright%20cheerful%20christian%20setting%20warm%20natural%20lighting%20kids%20learning%20about%20God&width=500&height=380&seq=mnfull001&orientation=landscape",
    color: "bg-orange-50 border-orange-100",
    accent: "text-orange-600",
    iconBg: "bg-orange-100",
    btnColor: "bg-orange-500 hover:bg-orange-600",
  },
  {
    id: "youth",
    title: "Youth Ministry",
    icon: "ri-fire-line",
    tag: "Ages 13–25",
    desc: "An energetic, bold ministry that challenges young people to live out their faith boldly. Through worship nights, Bible studies, outings, and leadership training, we raise the next generation of Kingdom builders.",
    schedule: "Saturdays & Sundays",
    link: "/ministries/youth",
    img: "https://readdy.ai/api/search-image?query=energetic%20diverse%20christian%20youth%20group%20teenagers%20worshipping%20praising%20hands%20raised%20modern%20church%20setting%20vibrant%20atmosphere%20electric%20lighting%20passionate%20youthful%20energy%20community%20gathering&width=500&height=380&seq=mnfull002&orientation=landscape",
    color: "bg-amber-50 border-amber-100",
    accent: "text-amber-700",
    iconBg: "bg-amber-100",
    btnColor: "bg-amber-500 hover:bg-amber-600",
  },
  {
    id: "womens",
    title: "Women's Ministry",
    icon: "ri-women-line",
    tag: "Women of All Ages",
    desc: "A powerful fellowship of women dedicated to prayer, mutual support, and spiritual growth. Through retreats, studies, and outreach, we celebrate and empower the women of All Believers Chapel.",
    schedule: "Bi-weekly meetings",
    link: "/ministries/womens",
    img: "https://readdy.ai/api/search-image?query=group%20of%20african%20women%20church%20prayer%20meeting%20sitting%20together%20bibles%20open%20warm%20fellowship%20community%20elegant%20diverse%20women%20spiritual%20gathering%20soft%20natural%20lighting%20encouraging%20uplifting&width=500&height=380&seq=mnfull003&orientation=landscape",
    color: "bg-rose-50 border-rose-100",
    accent: "text-rose-600",
    iconBg: "bg-rose-100",
    btnColor: "bg-rose-500 hover:bg-rose-600",
  },
  {
    id: "mens",
    title: "Men's Ministry",
    icon: "ri-men-line",
    tag: "Men of All Ages",
    desc: "A brotherhood of men growing together in faith, accountability, and purpose. We meet to study the Word, pray, serve, and support one another in every area of life — work, family, and community.",
    schedule: "Monthly gatherings",
    link: "/ministries/mens",
    img: "https://readdy.ai/api/search-image?query=group%20of%20professional%20african%20men%20church%20fellowship%20bible%20study%20praying%20together%20suited%20formal%20attire%20community%20brotherhood%20warm%20interior%20lighting%20accountability%20spiritual%20growth&width=500&height=380&seq=mnfull004&orientation=landscape",
    color: "bg-stone-50 border-stone-200",
    accent: "text-stone-700",
    iconBg: "bg-stone-200",
    btnColor: "bg-stone-700 hover:bg-stone-800",
  },
  {
    id: "prayer",
    title: "Prayer Ministry",
    icon: "ri-hands-line",
    tag: "All Welcome",
    desc: "The backbone of everything we do. Our intercession teams stand in the gap for the church, the city of Leeds, and the nations. Prayer saturates our culture and fuels every aspect of ministry.",
    schedule: "Saturdays 11am–12pm & weekdays",
    link: "/ministries/prayer",
    img: "https://readdy.ai/api/search-image?query=intimate%20african%20christians%20prayer%20group%20hands%20joined%20kneeling%20together%20soft%20warm%20light%20spiritual%20atmosphere%20reverent%20devotional%20setting%20peaceful%20serene%20church%20interior%20intercession&width=500&height=380&seq=mnfull005&orientation=landscape",
    color: "bg-emerald-50 border-emerald-100",
    accent: "text-emerald-700",
    iconBg: "bg-emerald-100",
    btnColor: "bg-emerald-600 hover:bg-emerald-700",
  },
  {
    id: "outreach",
    title: "Community Outreach",
    icon: "ri-hand-heart-line",
    tag: "Serving Leeds",
    desc: "Extending the love of Christ beyond the walls of the church to the streets of Beeston and Leeds. Through food drives, community events, and pastoral care, we are the hands and feet of Jesus.",
    schedule: "Monthly outreach events",
    link: "/ministries/outreach",
    img: "https://readdy.ai/api/search-image?query=church%20community%20outreach%20program%20african%20volunteers%20serving%20food%20helping%20community%20members%20warm%20welcoming%20charitable%20work%20diverse%20group%20working%20together%20compassionate%20service%20leeds%20uk&width=500&height=380&seq=mnfull006&orientation=landscape",
    color: "bg-sky-50 border-sky-100",
    accent: "text-sky-700",
    iconBg: "bg-sky-100",
    btnColor: "bg-sky-600 hover:bg-sky-700",
  },
];

export default function MinistriesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero Banner */}
        <section className="relative pt-32 pb-20 px-6 overflow-hidden">
          <img
            src="https://readdy.ai/api/search-image?query=diverse%20multicultural%20african%20church%20community%20groups%20serving%20worshipping%20volunteering%20together%20collage%20warm%20vibrant%20energetic%20community%20life%20faith%20in%20action%20dynamic%20photography%20inspiring&width=1440&height=500&seq=minHero001&orientation=landscape"
            alt="All Believers Chapel Ministries"
            className="absolute inset-0 w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-stone-900/72" />
          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <span className="text-amber-300 text-xs font-bold uppercase tracking-[4px]">Serving Together</span>
            <h1
              className="text-white font-extrabold mt-4 leading-tight"
              style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
            >
              Our Ministries
            </h1>
            <p className="text-white/75 mt-4 text-base font-light max-w-xl mx-auto leading-relaxed">
              Every member is a minister. Discover where you belong and how you can serve at All Believers Chapel.
            </p>
          </div>
        </section>

        {/* Ministries Grid */}
        <section className="py-20 md:py-28 px-6 bg-stone-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-14">
              <span className="text-amber-600 text-xs font-bold uppercase tracking-[3px]">Where You Belong</span>
              <h2
                className="mt-3 font-extrabold text-stone-900"
                style={{ fontSize: "clamp(1.8rem, 3vw, 2.5rem)" }}
              >
                Find Your Ministry
              </h2>
              <p className="mt-4 text-stone-500 max-w-xl mx-auto text-sm font-light leading-relaxed">
                We have a place for everyone. Whether you&apos;re young or young at heart, new or established — there&apos;s a ministry family waiting for you.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {ministries.map((m) => (
                <div
                  id={m.id}
                  key={m.title}
                  className={`rounded-2xl overflow-hidden border bg-white flex flex-col transition-all duration-300 hover:-translate-y-1 ${m.color}`}
                >
                  {/* Image */}
                  <div className="relative overflow-hidden" style={{ height: "220px" }}>
                    <img
                      src={m.img}
                      alt={m.title}
                      className="w-full h-full object-cover object-top transition-transform duration-500 hover:scale-105"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-white/90 text-stone-700 text-xs font-medium rounded-full">
                        {m.tag}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-7 flex-1 flex flex-col">
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`w-10 h-10 flex items-center justify-center rounded-xl ${m.iconBg}`}>
                        <i className={`${m.icon} ${m.accent} text-lg`} />
                      </div>
                      <h3
                        className="text-stone-900 font-semibold text-lg"
                      >
                        {m.title}
                      </h3>
                    </div>
                    <p className="text-stone-600 text-sm font-light leading-relaxed flex-1">{m.desc}</p>
                    <div className="mt-5 pt-4 border-t border-stone-100 flex items-center justify-between gap-3">
                      <div className="flex items-center gap-2 text-xs text-stone-500">
                        <i className={`ri-time-line ${m.accent}`} />
                        <span>{m.schedule}</span>
                      </div>
                      <Link
                        to={m.link}
                        className={`flex items-center gap-1.5 px-4 py-2 ${m.btnColor} text-white text-xs font-semibold rounded-lg transition-all duration-200 cursor-pointer whitespace-nowrap`}
                      >
                        Explore Ministry
                        <i className="ri-arrow-right-line text-sm" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Get Involved CTA */}
        <section className="py-20 px-6 bg-stone-900">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-amber-400 text-xs font-bold uppercase tracking-[3px]">Take the Next Step</span>
            <h2
              className="mt-4 text-white font-extrabold leading-tight"
              style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)" }}
            >
              Ready to Get Involved?
            </h2>
            <p className="mt-4 text-stone-300 text-sm font-light leading-relaxed max-w-xl mx-auto">
              Every ministry needs willing hands. Whether you want to lead, serve, or simply show up — we&apos;d love to have you. Come as you are.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+447825542566"
                className="px-7 py-3.5 bg-amber-500 hover:bg-amber-400 text-white font-semibold rounded-lg text-sm transition-all duration-200 cursor-pointer whitespace-nowrap"
              >
                <i className="ri-phone-line mr-2" />
                Call Us Today
              </a>
              <a
                href="mailto:allbelieverschapel@outlook.com"
                className="px-7 py-3.5 border-2 border-stone-600 hover:border-amber-500 text-stone-300 hover:text-amber-400 font-semibold rounded-lg text-sm transition-all duration-200 cursor-pointer whitespace-nowrap"
              >
                <i className="ri-mail-line mr-2" />
                Send Us an Email
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
