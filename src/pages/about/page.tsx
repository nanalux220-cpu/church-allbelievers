import Navbar from "../../components/feature/Navbar";
import Footer from "../../components/feature/Footer";

const leaders = [
  {
    name: "Evan. Kwadwo Aboagye-Asare",
    role: "Senior Evangelist",
    bio: "Evan. Kwadwo Aboagye-Asare leads All Believers Chapel with a passionate heart for discipleship and community transformation. He has dedicated decades of ministry to equipping believers in Leeds and beyond.",
    img: "https://readdy.ai/api/search-image?query=professional%20portrait%20african%20male%20senior%20pastor%20reverend%20formal%20suit%20clerical%20collar%20confident%20warm%20authoritative%20smile%20studio%20background%20high%20quality%20photography%20spiritual%20leader%20dignified&width=400&height=400&seq=leader001&orientation=squarish",
  },
  {
    name: "Rev. George Abakah",
    role: "Founder & Senior Pastor",
    bio: "A visionary leader who founded All Believers Chapel in 2018 with a burning desire to spread the Gospel across the UK and beyond. His evangelistic fervour has shaped the church's DNA.",
    img: "https://readdy.ai/api/search-image?query=professional%20portrait%20senior%20african%20male%20church%20evangelist%20founder%20formal%20suit%20confident%20warm%20smile%20neutral%20studio%20background%20high%20quality%20photography%20dignified%20visionary%20leader&width=400&height=400&seq=leader002&orientation=squarish",
  },
  {
    name: "Isaac Ofori",
    role: "Deacon",
    bio: "Isaac serves the congregation with humility and dedication, overseeing community outreach programs and ensuring the smooth running of the church's operations.",
    img: "https://readdy.ai/api/search-image?query=professional%20portrait%20african%20male%20church%20deacon%20formal%20attire%20confident%20welcoming%20smile%20neutral%20background%20high%20quality%20photography%20trustworthy%20servant%20heart%20community%20leader&width=400&height=400&seq=leader003&orientation=squarish",
  },
  {
    name: "Sis. Grace Mensah",
    role: "Board Member & Women's Ministry Lead",
    bio: "Grace oversees the Women's Ministry and plays a crucial role on the board, bringing wisdom and compassion to all aspects of church life and women's empowerment.",
    img: "https://readdy.ai/api/search-image?query=professional%20portrait%20african%20female%20church%20board%20member%20women%20ministry%20leader%20formal%20attire%20confident%20warm%20smile%20neutral%20background%20high%20quality%20photography%20trustworthy%20empowered%20leader&width=400&height=400&seq=leader004&orientation=squarish",
  },
];

const beliefs = [
  {
    icon: "ri-book-open-line",
    title: "The Bible",
    text: "We believe the Holy Bible is the inspired, infallible Word of God — the supreme authority for faith and practice.",
  },
  {
    icon: "ri-heart-line",
    title: "Salvation",
    text: "We believe in salvation by grace through faith in Jesus Christ alone, who died for our sins and rose again.",
  },
  {
    icon: "ri-fire-line",
    title: "The Holy Spirit",
    text: "We believe in the baptism of the Holy Spirit, empowering believers for service, witness, and a life of holiness.",
  },
  {
    icon: "ri-community-line",
    title: "The Church",
    text: "We believe the Church is the body of Christ, called to worship, disciple, serve, and proclaim the Gospel globally.",
  },
  {
    icon: "ri-sparkling-line",
    title: "Healing",
    text: "We believe in divine healing as part of Christ's redemptive work — that God heals spiritually, physically, and emotionally.",
  },
  {
    icon: "ri-cloud-line",
    title: "The Second Coming",
    text: "We believe in the personal, visible return of Jesus Christ to receive His Church and establish His eternal Kingdom.",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero Banner */}
        <section className="relative pt-24 sm:pt-32 pb-14 sm:pb-20 px-4 sm:px-6 overflow-hidden">
          <img
            src="https://readdy.ai/api/search-image?query=beautiful%20modern%20church%20building%20exterior%20entrance%20pathway%20leading%20to%20doors%20lush%20green%20surroundings%20warm%20golden%20hour%20lighting%20welcoming%20architectural%20community%20center%20christian%20church%20in%20england%20uk&width=1440&height=500&seq=about001&orientation=landscape"
            alt="All Believers Chapel Church"
            className="absolute inset-0 w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-stone-900/70 pointer-events-none" />
          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <span className="text-amber-300 text-xs font-bold uppercase tracking-[4px]">Who We Are</span>
            <h1
              className="text-white font-extrabold mt-4 leading-tight"
              style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
            >
              About Us
            </h1>
            <p className="text-white/75 mt-4 text-base font-light max-w-xl mx-auto leading-relaxed">
              Discover the story, mission, and people behind All Believers Chapel in Leeds.
            </p>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-14 sm:py-20 px-4 sm:px-6 bg-stone-50">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 items-center">
            <div>
              <span className="text-amber-600 text-xs font-bold uppercase tracking-[3px]">Our Story</span>
              <h2
                className="mt-3 mb-6 font-extrabold text-stone-900 leading-tight"
                style={{ fontSize: "clamp(1.8rem, 3vw, 2.5rem)" }}
              >
                Eleven Years of Faith &amp; Community in Leeds
              </h2>
              <p className="text-stone-600 text-base font-light leading-relaxed mb-4">
                All Believers Chapel was founded on 28th October 2018 in Leeds with a clear vision: to be an outstanding New Testament model charismatic church that transforms lives and communities through the power of the Holy Spirit.
              </p>
              <p className="text-stone-600 text-base font-light leading-relaxed mb-4">
                What began as a small gathering of faithful believers has grown into a thriving, vibrant community of worshippers drawn from all walks of life. Our multicultural congregation reflects the rich diversity of Leeds and the unity found only in Christ.
              </p>
              <p className="text-stone-600 text-base font-light leading-relaxed">
                We are committed to excellence in Worship, Teachings, Prayer, and Outreach — and to equipping every believer to find, follow, and fulfil God&apos;s destiny for their lives.
              </p>
              {/* Timeline milestones */}
              <div className="mt-8 space-y-4">
                {[
                  { year: "2018", milestone: "All Believers Chapel founded in Leeds" },
                  { year: "2020", milestone: "Online ministry launched, reaching beyond Leeds" },
                  { year: "2022", milestone: "Growth into multiple discipleship groups" },
                  { year: "2024", milestone: "Continued community outreach &amp; expansion" },
                ].map((item) => (
                  <div key={item.year} className="flex gap-4 items-start">
                    <div className="w-14 h-7 flex items-center justify-center bg-amber-500 rounded-full flex-shrink-0 mt-0.5">
                      <span className="text-white text-xs font-bold">{item.year}</span>
                    </div>
                    <p
                      className="text-stone-700 text-sm leading-relaxed"
                      dangerouslySetInnerHTML={{ __html: item.milestone }}
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="relative mt-4 md:mt-0">
              <div className="rounded-2xl overflow-hidden w-full" style={{ aspectRatio: "4/5", maxHeight: "520px" }}>
                <img
                  src="https://readdy.ai/api/search-image?query=diverse%20multicultural%20african%20christian%20church%20congregation%20gathered%20together%20joyful%20community%20worship%20celebration%20singing%20hands%20raised%20warm%20golden%20church%20interior%20authentic%20vibrant%20community%20portrait&width=500&height=620&seq=about002&orientation=portrait"
                  alt="All Believers Chapel congregation"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="absolute -bottom-4 -left-2 md:-bottom-6 md:-left-6 bg-white rounded-2xl p-4 md:p-5 border border-stone-100 hidden sm:block">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 flex items-center justify-center bg-amber-50 rounded-xl">
                    <i className="ri-map-pin-2-line text-amber-500 text-lg" />
                  </div>
                  <div>
                    <p className="text-stone-900 font-bold text-sm">Based in Leeds, UK</p>
                    <p className="text-stone-500 text-xs">Since 28th October 2018</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Core Beliefs */}
        <section className="py-14 sm:py-20 px-4 sm:px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-10 sm:mb-14">
              <span className="text-amber-600 text-xs font-bold uppercase tracking-[3px]">What We Believe</span>
              <h2
                className="mt-3 font-extrabold text-stone-900"
                style={{ fontSize: "clamp(1.8rem, 3vw, 2.5rem)" }}
              >
                Our Core Beliefs
              </h2>
              <p className="mt-4 text-stone-500 max-w-xl mx-auto text-sm font-light leading-relaxed">
                Rooted in Scripture, our beliefs define who we are and how we live as the body of Christ.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-6">
              {beliefs.map((b) => (
                <div
                  key={b.title}
                  className="p-7 rounded-2xl bg-stone-50 border border-stone-100 hover:border-amber-200 transition-colors duration-200"
                >
                  <div className="w-11 h-11 flex items-center justify-center bg-amber-50 rounded-xl mb-4">
                    <i className={`${b.icon} text-amber-500 text-xl`} />
                  </div>
                  <h3
                    className="text-stone-900 font-semibold text-base mb-2"
                  >
                    {b.title}
                  </h3>
                  <p className="text-stone-500 text-sm font-light leading-relaxed">{b.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Leadership Team */}
        <section className="py-14 sm:py-20 px-4 sm:px-6 bg-stone-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-10 sm:mb-14">
              <span className="text-amber-600 text-xs font-bold uppercase tracking-[3px]">Our Team</span>
              <h2
                className="mt-3 font-extrabold text-stone-900"
                style={{ fontSize: "clamp(1.8rem, 3vw, 2.5rem)" }}
              >
                Leadership Team
              </h2>
              <p className="mt-4 text-stone-500 max-w-xl mx-auto text-sm font-light leading-relaxed">
                Faithful servants who lead with love, wisdom, and dedication to God&apos;s calling.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
              {leaders.map((l) => (
                <div key={l.name} className="bg-white rounded-2xl overflow-hidden border border-stone-100">
                  <div className="w-full overflow-hidden" style={{ height: "220px" }}>
                    <img src={l.img} alt={l.name} className="w-full h-full object-cover object-top" />
                  </div>
                  <div className="p-5">
                    <h4
                      className="text-stone-900 font-semibold text-sm leading-tight"
                    >
                      {l.name}
                    </h4>
                    <p className="text-amber-600 text-xs mt-1 font-medium">{l.role}</p>
                    <p className="text-stone-500 text-xs mt-3 font-light leading-relaxed">{l.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Location / Visit Section */}
        <section className="py-14 sm:py-20 px-4 sm:px-6 bg-white">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-amber-600 text-xs font-bold uppercase tracking-[3px]">Find Us</span>
              <h2
                className="mt-3 font-extrabold text-stone-900"
                style={{ fontSize: "clamp(1.8rem, 3vw, 2.5rem)" }}
              >
                Visit Us in Leeds
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
              {/* Map */}
              <div className="rounded-2xl overflow-hidden border border-stone-100" style={{ height: "320px" }}>
                <iframe
                  title="All Believers Chapel location"
                  src="https://maps.google.com/maps?q=St+Andrews+Methodist+Church,+10+Cardinal+Road,+Beeston,+Leeds,+LS11+8AL&output=embed"
                  className="w-full h-full border-0"
                  allowFullScreen
                  loading="lazy"
                />
              </div>
              {/* Info */}
              <div className="space-y-5">
                {[
                  {
                    icon: "ri-map-pin-2-line",
                    label: "Address",
                    value: "St Andrews Methodist Church, 10 Cardinal Road, Beeston, Leeds LS11 8AL",
                  },
                  { icon: "ri-calendar-event-line", label: "Sunday Service", value: "1:00pm – 4:00pm" },
                  { icon: "ri-calendar-check-line", label: "Saturday Prayers", value: "11:00am – 12:00pm" },
                  { icon: "ri-phone-line", label: "Phone", value: "+44 7825 542566" },
                  { icon: "ri-mail-line", label: "Email", value: "allbelieverschapel@outlook.com" },
                ].map((item) => (
                  <div key={item.label} className="flex gap-4 items-start">
                    <div className="w-10 h-10 flex items-center justify-center bg-amber-50 rounded-xl flex-shrink-0">
                      <i className={`${item.icon} text-amber-500`} />
                    </div>
                    <div>
                      <p className="text-stone-500 text-xs">{item.label}</p>
                      <p className="text-stone-800 text-sm font-medium mt-0.5">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
