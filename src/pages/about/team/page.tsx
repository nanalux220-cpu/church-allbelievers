import Navbar from "../../../components/feature/Navbar";
import Footer from "../../../components/feature/Footer";

const leaders = [
  {
    name: "Rev. George Abakah",
    role: "Founder & Senior Pastor",
    bio: "Rev. Abakah leads All Believers Chapel with a passionate heart for discipleship and community transformation. He has dedicated decades of ministry to equipping believers in Leeds and beyond.",
    img: "https://readdy.ai/api/search-image?query=professional%20portrait%20african%20male%20senior%20pastor%20reverend%20formal%20suit%20clerical%20collar%20confident%20warm%20authoritative%20smile%20studio%20background%20high%20quality%20photography%20spiritual%20leader%20dignified&width=400&height=400&seq=team001&orientation=squarish",
    tags: ["Leadership", "Discipleship", "Teaching"],
  },
  {
    name: "Evan. Kwadwo Abeagye-Asare",
    role: "Senior Pastor",
    bio: "A visionary leader who founded All Believers Chapel in 2018 with a burning desire to spread the Gospel across the UK and beyond. His evangelistic fervour has shaped the church&apos;s DNA.",
    img: "https://readdy.ai/api/search-image?query=professional%20portrait%20senior%20african%20male%20church%20evangelist%20founder%20formal%20suit%20confident%20warm%20smile%20neutral%20studio%20background%20high%20quality%20photography%20dignified%20visionary%20leader&width=400&height=400&seq=team002&orientation=squarish",
    tags: ["Evangelism", "Vision", "Founding"],
  },
  {
    name: "Isaac Ofori",
    role: "Deacon",
    bio: "Isaac serves the congregation with humility and dedication, overseeing community outreach programs and ensuring the smooth running of the church&apos;s day-to-day operations.",
    img: "https://readdy.ai/api/search-image?query=professional%20portrait%20african%20male%20church%20deacon%20formal%20attire%20confident%20welcoming%20smile%20neutral%20background%20high%20quality%20photography%20trustworthy%20servant%20heart%20community%20leader&width=400&height=400&seq=team003&orientation=squarish",
    tags: ["Outreach", "Operations", "Service"],
  },
  {
    name: "Sis. Grace Mensah",
    role: "Board Member & Women's Ministry Lead",
    bio: "Grace oversees the Women&apos;s Ministry and plays a crucial role on the board, bringing wisdom and compassion to all aspects of church life and women&apos;s empowerment.",
    img: "https://readdy.ai/api/search-image?query=professional%20portrait%20african%20female%20church%20board%20member%20women%20ministry%20leader%20formal%20attire%20confident%20warm%20smile%20neutral%20background%20high%20quality%20photography%20trustworthy%20empowered%20leader&width=400&height=400&seq=team004&orientation=squarish",
    tags: ["Women's Ministry", "Board", "Empowerment"],
  },
  {
    name: "Elder Michael Asante",
    role: "Elder & Prayer Ministry Lead",
    bio: "Elder Asante anchors the church in prayer, leading intercession teams and prayer vigils that have become the spiritual backbone of All Believers Chapel.",
    img: "https://readdy.ai/api/search-image?query=professional%20portrait%20mature%20african%20male%20church%20elder%20prayer%20leader%20dignified%20formal%20suit%20warm%20kind%20smile%20authoritative%20presence%20neutral%20studio%20background%20high%20quality%20photography%20faithful&width=400&height=400&seq=team005&orientation=squarish",
    tags: ["Prayer", "Intercession", "Elders"],
  },
  {
    name: "Sis. Abena Boateng",
    role: "Worship & Music Director",
    bio: "Abena leads the worship team with excellence and a genuine heart for the presence of God, creating an atmosphere of encounter in every service through anointed praise and worship.",
    img: "https://readdy.ai/api/search-image?query=professional%20portrait%20african%20female%20church%20worship%20music%20director%20confident%20graceful%20warm%20smile%20ministry%20leader%20formal%20attire%20neutral%20background%20high%20quality%20photography%20gifted%20musician&width=400&height=400&seq=team006&orientation=squarish",
    tags: ["Worship", "Music", "Arts"],
  },
  {
    name: "Bro. Emmanuel Nkrumah",
    role: "Youth Ministry Coordinator",
    bio: "Emmanuel has a fire for the next generation. He leads the youth ministry with energy and purpose, creating spaces where young people can encounter God and grow in their faith.",
    img: "https://readdy.ai/api/search-image?query=professional%20portrait%20young%20african%20male%20church%20youth%20ministry%20leader%20coordinator%20energetic%20confident%20warm%20smile%20formal%20casual%20attire%20neutral%20background%20high%20quality%20photography%20dynamic&width=400&height=400&seq=team007&orientation=squarish",
    tags: ["Youth", "Next Gen", "Ministry"],
  },
  {
    name: "Sis. Akosua Darko",
    role: "Children's Ministry Lead",
    bio: "Akosua is passionate about raising children in the knowledge of God. She leads the children&apos;s ministry with creativity, care, and an unwavering belief in the faith of the young.",
    img: "https://readdy.ai/api/search-image?query=professional%20portrait%20african%20female%20church%20children%20ministry%20leader%20warm%20caring%20smile%20bright%20personality%20formal%20attire%20neutral%20background%20high%20quality%20photography%20nurturing%20teacher&width=400&height=400&seq=team008&orientation=squarish",
    tags: ["Children", "Education", "Care"],
  },
];

export default function TeamPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero */}
        <section className="relative pt-24 sm:pt-32 pb-14 sm:pb-20 px-4 sm:px-6 overflow-hidden">
          <img
            src="https://readdy.ai/api/search-image?query=diverse%20multicultural%20team%20group%20of%20people%20standing%20together%20smiling%20church%20community%20leaders%20formal%20professional%20attire%20warm%20joyful%20confident%20unity%20teamwork%20christian%20ministry%20leadership%20portrait%20outdoor&width=1440&height=500&seq=team-hero001&orientation=landscape"
            alt="Meet the Team"
            className="absolute inset-0 w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-stone-900/65" />
          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <span className="text-amber-300 text-xs font-bold uppercase tracking-[4px]">The People</span>
            <h1
              className="text-white font-bold mt-4 leading-tight"
              style={{ fontFamily: "'Inter', sans-serif", fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
            >
              Meet the Team
            </h1>
            <p className="text-white/75 mt-4 text-base max-w-xl mx-auto leading-relaxed">
              Faithful servants who lead with love, wisdom, and unwavering dedication to God&apos;s calling on All Believers Chapel.
            </p>
          </div>
        </section>

        {/* Intro */}
        <section className="py-12 sm:py-16 px-4 sm:px-6 bg-white">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-amber-600 text-xs font-bold uppercase tracking-[3px]">Servant Leadership</span>
            <h2
              className="mt-3 mb-5 font-bold text-stone-900"
              style={{ fontFamily: "'Inter', sans-serif", fontSize: "clamp(1.6rem, 3vw, 2.2rem)" }}
            >
              Led by People Who Truly Care
            </h2>
            <p className="text-stone-600 text-base leading-relaxed">
              Our leadership team serves not for titles, but for the love of God and His people. Each person carries a genuine call and a humble heart, committed to seeing the church grow and every believer flourish.
            </p>
          </div>
        </section>

        {/* Team Grid */}
        <section className="py-10 pb-16 sm:pb-24 px-4 sm:px-6 bg-stone-50">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 sm:gap-7">
              {leaders.map((l) => (
                <div
                  key={l.name}
                  className="bg-white rounded-2xl overflow-hidden border border-stone-100 hover:border-amber-200 transition-colors duration-200 group"
                >
                  <div className="w-full overflow-hidden" style={{ height: "240px" }}>
                    <img
                      src={l.img}
                      alt={l.name}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-5">
                    <h4
                      className="text-stone-900 font-bold text-sm leading-tight"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      {l.name}
                    </h4>
                    <p className="text-amber-600 text-xs mt-1 font-medium">{l.role}</p>
                    <p
                      className="text-stone-500 text-xs mt-3 leading-relaxed"
                      dangerouslySetInnerHTML={{ __html: l.bio }}
                    />
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {l.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs text-amber-700 bg-amber-50 px-2.5 py-0.5 rounded-full font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Join us banner */}
        <section className="relative py-16 sm:py-20 px-4 sm:px-6 overflow-hidden">
          <img
            src="https://readdy.ai/api/search-image?query=hands%20joined%20together%20in%20circle%20team%20unity%20community%20prayer%20gathering%20multicultural%20diverse%20people%20christian%20church%20warm%20golden%20light%20togetherness%20fellowship%20worship%20belonging&width=1440&height=380&seq=team-join001&orientation=landscape"
            alt="Join the community"
            className="absolute inset-0 w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-stone-900/65" />
          <div className="relative z-10 max-w-2xl mx-auto text-center">
            <h3
              className="text-white font-bold mb-4"
              style={{ fontFamily: "'Inter', sans-serif", fontSize: "clamp(1.5rem, 3vw, 2.2rem)" }}
            >
              Want to Serve?
            </h3>
            <p className="text-white/75 text-sm leading-relaxed mb-8">
              We believe every member has a role to play. If God is calling you to serve in any capacity, we would love to hear from you. Come as you are — there is a place for you here.
            </p>
            <a
              href="/about"
              className="inline-block px-8 py-3 bg-amber-500 hover:bg-amber-600 text-white text-sm font-semibold rounded-lg transition-colors cursor-pointer whitespace-nowrap"
            >
              Get in Touch
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
