import Navbar from "../../../components/feature/Navbar";
import Footer from "../../../components/feature/Footer";

const milestones = [
  { year: "2018", milestone: "All Believers Chapel founded on 28th October in Leeds" },
  { year: "2019", milestone: "Growing congregation — first dedicated discipleship groups formed" },
  { year: "2020", milestone: "Online ministry launched, reaching believers beyond Leeds" },
  { year: "2021", milestone: "Partnership with local community organisations for outreach" },
  { year: "2022", milestone: "Expansion into multiple discipleship and prayer groups" },
  { year: "2023", milestone: "Youth and children's ministry programmes established" },
  { year: "2024", milestone: "Continued community outreach, evangelism & church growth" },
];

export default function StoryPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero */}
        <section className="relative pt-24 sm:pt-32 pb-14 sm:pb-20 px-4 sm:px-6 overflow-hidden">
          <img
            src="https://readdy.ai/api/search-image?query=historic%20english%20church%20building%20stone%20walls%20warm%20golden%20afternoon%20sunlight%20trees%20surrounding%20peaceful%20serene%20english%20countryside%20community%20church%20architectural%20landmark%20heritage%20building%20exterior%20pathway&width=1440&height=500&seq=story001&orientation=landscape"
            alt="Our Story"
            className="absolute inset-0 w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-stone-900/65" />
          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <span className="text-amber-300 text-xs font-bold uppercase tracking-[4px]">Our Journey</span>
            <h1
              className="text-white font-bold mt-4 leading-tight"
              style={{ fontFamily: "'Inter', sans-serif", fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
            >
              The Story So Far
            </h1>
            <p className="text-white/75 mt-4 text-base max-w-xl mx-auto leading-relaxed">
              From a small gathering of faithful believers to a thriving community — here is how God has been writing our story in Leeds.
            </p>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-14 sm:py-20 px-4 sm:px-6 bg-stone-50">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 items-center">
            <div>
              <span className="text-amber-600 text-xs font-bold uppercase tracking-[3px]">Where It All Began</span>
              <h2
                className="mt-3 mb-6 font-bold text-stone-900 leading-tight"
                style={{ fontFamily: "'Inter', sans-serif", fontSize: "clamp(1.8rem, 3vw, 2.5rem)" }}
              >
                A Vision Born in Faith
              </h2>
              <p className="text-stone-600 text-base leading-relaxed mb-4">
                All Believers Chapel was founded on 28th October 2018 in Leeds with a clear and burning vision — to be an outstanding New Testament model charismatic church that transforms lives and communities through the power of the Holy Spirit.
              </p>
              <p className="text-stone-600 text-base leading-relaxed mb-4">
                What began as a small gathering of faithful believers has grown into a thriving, vibrant community of worshippers drawn from all walks of life. Our multicultural congregation reflects the rich diversity of Leeds and the unity found only in Christ.
              </p>
              <p className="text-stone-600 text-base leading-relaxed mb-4">
                From the very first Sunday, the church has been committed to excellence in Worship, Teachings, Prayer, and Outreach. Every gathering is an opportunity to encounter the living God and be transformed by His presence.
              </p>
              <p className="text-stone-600 text-base leading-relaxed">
                We are called to equip every believer to find, follow, and fulfil God&apos;s destiny for their lives — and that mission continues to drive everything we do today.
              </p>
            </div>

            <div className="relative mt-4 md:mt-0">
              <div className="rounded-2xl overflow-hidden w-full" style={{ aspectRatio: "4/5", maxHeight: "520px" }}>
                <img
                  src="https://readdy.ai/api/search-image?query=diverse%20multicultural%20african%20christian%20church%20congregation%20gathered%20together%20joyful%20community%20worship%20celebration%20singing%20hands%20raised%20warm%20golden%20church%20interior%20authentic%20vibrant%20community%20portrait&width=500&height=620&seq=story002&orientation=portrait"
                  alt="All Believers Chapel congregation"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="absolute -bottom-4 -left-2 md:-bottom-6 md:-left-6 bg-white rounded-2xl p-4 border border-stone-100 hidden sm:block">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 flex items-center justify-center bg-amber-50 rounded-xl">
                    <i className="ri-calendar-event-line text-amber-500 text-lg" />
                  </div>
                  <div>
                    <p className="text-stone-900 font-bold text-sm">Founded Oct 2018</p>
                    <p className="text-stone-500 text-xs">Leeds, United Kingdom</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-14 sm:py-20 px-4 sm:px-6 bg-white">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-14">
              <span className="text-amber-600 text-xs font-bold uppercase tracking-[3px]">Milestones</span>
              <h2
                className="mt-3 font-bold text-stone-900"
                style={{ fontFamily: "'Inter', sans-serif", fontSize: "clamp(1.8rem, 3vw, 2.5rem)" }}
              >
                Year by Year
              </h2>
              <p className="mt-4 text-stone-500 max-w-lg mx-auto text-sm leading-relaxed">
                Every year has been a testament to God&apos;s faithfulness as He builds His Church in Leeds.
              </p>
            </div>
            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-7 top-0 bottom-0 w-0.5 bg-amber-100" />
              <div className="space-y-8">
                {milestones.map((item, idx) => (
                  <div key={item.year} className="relative flex gap-6 items-start">
                    <div
                      className={`w-14 h-14 flex-shrink-0 flex items-center justify-center rounded-full z-10 font-bold text-sm border-2 ${
                        idx === milestones.length - 1
                          ? "bg-amber-500 text-white border-amber-500"
                          : "bg-white text-amber-600 border-amber-300"
                      }`}
                    >
                      {item.year}
                    </div>
                    <div className="flex-1 pt-3.5 pb-2">
                      <p className="text-stone-700 text-sm leading-relaxed">{item.milestone}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-12 sm:py-16 px-4 sm:px-6 bg-amber-50 border-t border-amber-100">
          <div className="max-w-2xl mx-auto text-center">
            <h3
              className="font-bold text-stone-900 mb-4"
              style={{ fontFamily: "'Inter', sans-serif", fontSize: "clamp(1.4rem, 2.5vw, 2rem)" }}
            >
              You Are Part of the Story
            </h3>
            <p className="text-stone-600 text-sm leading-relaxed mb-8">
              God&apos;s story for All Believers Chapel is still being written — and we&apos;d love for you to be part of it. Come and worship with us this Sunday.
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
