import Navbar from "../../../components/feature/Navbar";
import Footer from "../../../components/feature/Footer";

const beliefs = [
  {
    icon: "ri-book-open-line",
    title: "The Bible",
    text: "We believe the Holy Bible is the inspired, infallible Word of God — the supreme authority for faith and practice. Every scripture is God-breathed and profitable for doctrine, reproof, correction, and instruction in righteousness.",
    verse: "2 Timothy 3:16-17",
  },
  {
    icon: "ri-heart-line",
    title: "Salvation",
    text: "We believe in salvation by grace through faith in Jesus Christ alone, who died for our sins and rose again on the third day. There is no other name under heaven by which we must be saved.",
    verse: "Ephesians 2:8-9",
  },
  {
    icon: "ri-fire-line",
    title: "The Holy Spirit",
    text: "We believe in the baptism of the Holy Spirit, empowering believers for service, witness, and a life of holiness. The gifts of the Spirit are active and available to believers today.",
    verse: "Acts 1:8",
  },
  {
    icon: "ri-community-line",
    title: "The Church",
    text: "We believe the Church is the body of Christ, called to worship, disciple, serve, and proclaim the Gospel to all nations. We are one body with many members, united in love and purpose.",
    verse: "1 Corinthians 12:27",
  },
  {
    icon: "ri-sparkling-line",
    title: "Divine Healing",
    text: "We believe in divine healing as part of Christ&apos;s redemptive work. God heals spiritually, physically, and emotionally, and we are called to pray for the sick with faith, believing for His miraculous intervention.",
    verse: "James 5:14-15",
  },
  {
    icon: "ri-cloud-line",
    title: "The Second Coming",
    text: "We believe in the personal, visible, and glorious return of Jesus Christ to receive His Church and establish His eternal Kingdom. Every knee will bow and every tongue confess that Jesus Christ is Lord.",
    verse: "Revelation 22:12",
  },
  {
    icon: "ri-user-heart-line",
    title: "The Trinity",
    text: "We believe in one God eternally existing in three persons — Father, Son, and Holy Spirit. Each person of the Trinity is co-equal, co-eternal, and co-existent, working together in perfect unity.",
    verse: "Matthew 28:19",
  },
  {
    icon: "ri-seedling-line",
    title: "Repentance & New Life",
    text: "We believe that true repentance brings transformation. Anyone who comes to Christ becomes a new creation — the old has gone, the new has come — and is called to walk in newness of life.",
    verse: "2 Corinthians 5:17",
  },
  {
    icon: "ri-global-line",
    title: "The Great Commission",
    text: "We believe every believer is called to go and make disciples of all nations. Evangelism and missions are not optional — they are the heartbeat of the Church and the mandate of every follower of Christ.",
    verse: "Matthew 28:18-20",
  },
];

export default function BeliefsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero */}
        <section className="relative pt-24 sm:pt-32 pb-14 sm:pb-20 px-4 sm:px-6 overflow-hidden">
          <img
            src="https://readdy.ai/api/search-image?query=open%20holy%20bible%20pages%20close%20up%20warm%20golden%20light%20rays%20falling%20on%20scripture%20text%20spiritual%20devotional%20reading%20faith%20worship%20atmospheric%20bokeh%20background%20christian%20faith%20belief%20study%20scripture&width=1440&height=500&seq=beliefs001&orientation=landscape"
            alt="What We Believe"
            className="absolute inset-0 w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-stone-900/65" />
          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <span className="text-amber-300 text-xs font-bold uppercase tracking-[4px]">Our Foundation</span>
            <h1
              className="text-white font-bold mt-4 leading-tight"
              style={{ fontFamily: "'Inter', sans-serif", fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
            >
              What We Believe
            </h1>
            <p className="text-white/75 mt-4 text-base max-w-xl mx-auto leading-relaxed">
              Rooted in Scripture and anchored in Christ — these are the truths that define who we are and how we live as the body of Christ.
            </p>
          </div>
        </section>

        {/* Intro */}
        <section className="py-12 sm:py-16 px-4 sm:px-6 bg-white">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-amber-600 text-xs font-bold uppercase tracking-[3px]">Our Doctrinal Statement</span>
            <h2
              className="mt-3 mb-6 font-bold text-stone-900"
              style={{ fontFamily: "'Inter', sans-serif", fontSize: "clamp(1.6rem, 3vw, 2.2rem)" }}
            >
              Built on the Word of God
            </h2>
            <p className="text-stone-600 text-base leading-relaxed">
              At All Believers Chapel, our faith is not based on tradition or opinion — it is grounded entirely in the Holy Scriptures. These core beliefs shape our worship, our community, our mission, and every aspect of how we follow Jesus together.
            </p>
          </div>
        </section>

        {/* Beliefs Grid */}
        <section className="py-12 sm:py-16 pb-16 sm:pb-24 px-4 sm:px-6 bg-stone-50">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-6">
              {beliefs.map((b) => (
                <div
                  key={b.title}
                  className="p-7 rounded-2xl bg-white border border-stone-100 hover:border-amber-200 transition-colors duration-200"
                >
                  <div className="w-12 h-12 flex items-center justify-center bg-amber-50 rounded-xl mb-5">
                    <i className={`${b.icon} text-amber-500 text-2xl`} />
                  </div>
                  <h3
                    className="text-stone-900 font-bold text-base mb-3"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {b.title}
                  </h3>
                  <p
                    className="text-stone-500 text-sm leading-relaxed mb-4"
                    dangerouslySetInnerHTML={{ __html: b.text }}
                  />
                  <span className="inline-block text-xs font-semibold text-amber-600 bg-amber-50 px-3 py-1 rounded-full">
                    {b.verse}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Scripture Banner */}
        <section className="relative py-16 sm:py-20 px-4 sm:px-6 overflow-hidden">
          <img
            src="https://readdy.ai/api/search-image?query=abstract%20warm%20golden%20light%20rays%20through%20stained%20glass%20church%20window%20artistic%20bokeh%20soft%20glow%20spiritual%20atmospheric%20worship%20background%20faith%20hope%20love%20christian%20symbolism&width=1440&height=400&seq=beliefs002&orientation=landscape"
            alt="Scripture background"
            className="absolute inset-0 w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-stone-900/70" />
          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <i className="ri-double-quotes-l text-amber-400 text-4xl" />
            <p
              className="text-white font-medium mt-4 mb-6 leading-relaxed"
              style={{ fontFamily: "'Inter', sans-serif", fontSize: "clamp(1.1rem, 2.5vw, 1.5rem)" }}
            >
              For I am not ashamed of the gospel of Christ: for it is the power of God unto salvation to every one that believeth.
            </p>
            <span className="text-amber-300 text-sm font-semibold tracking-wide">Romans 1:16</span>
          </div>
        </section>

        {/* CTA */}
        <section className="py-12 sm:py-16 px-4 sm:px-6 bg-amber-50 border-t border-amber-100">
          <div className="max-w-2xl mx-auto text-center">
            <h3
              className="font-bold text-stone-900 mb-4"
              style={{ fontFamily: "'Inter', sans-serif", fontSize: "clamp(1.4rem, 2.5vw, 2rem)" }}
            >
              Come and Discover More
            </h3>
            <p className="text-stone-600 text-sm leading-relaxed mb-8">
              We would love to share these truths with you in person. Come and worship with us — all are welcome at All Believers Chapel.
            </p>
            <a
              href="/about"
              className="inline-block px-8 py-3 bg-amber-500 hover:bg-amber-600 text-white text-sm font-semibold rounded-lg transition-colors cursor-pointer whitespace-nowrap"
            >
              Plan A Visit
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
