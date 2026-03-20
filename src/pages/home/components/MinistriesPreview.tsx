import { Link } from "react-router-dom";

const ministries = [
  {
    title: "Children's Ministry",
    desc: "Nurturing young hearts in faith, fun, and the love of Christ.",
    icon: "ri-user-heart-line",
    img: "https://readdy.ai/api/search-image?query=happy%20african%20children%20sunday%20school%20class%20singing%20clapping%20joyful%20colorful%20classroom%20bible%20stories%20bright%20cheerful%20christian%20setting%20warm%20natural%20lighting%20kids%20learning%20about%20God&width=400&height=280&seq=min001&orientation=landscape",
    link: "/ministries/children",
    external: false,
  },
  {
    title: "Youth Ministry",
    desc: "Empowering the next generation through worship, discipleship, and community.",
    icon: "ri-fire-line",
    img: "https://readdy.ai/api/search-image?query=energetic%20diverse%20christian%20youth%20group%20teenagers%20worshipping%20praising%20hands%20raised%20modern%20church%20setting%20vibrant%20atmosphere%20electric%20lighting%20passionate%20youthful%20energy&width=400&height=280&seq=min002&orientation=landscape",
    link: "/ministries/youth",
    external: false,
  },
  {
    title: "Prayer Ministry",
    desc: "Interceding for the church, the community, and the nations through fervent prayer.",
    icon: "ri-hands-line",
    img: "https://readdy.ai/api/search-image?query=intimate%20african%20christians%20prayer%20group%20hands%20joined%20kneeling%20together%20soft%20warm%20light%20spiritual%20atmosphere%20reverent%20devotional%20setting%20peaceful%20serene%20church%20interior&width=400&height=280&seq=min006&orientation=landscape",
    link: "/ministries/prayer",
    external: false,
  },
];

const cardClass = "group bg-white rounded-2xl overflow-hidden border border-stone-100 hover:-translate-y-1 transition-all duration-300 cursor-pointer block";

function MinistryCardInner({ m }: { m: typeof ministries[0] }) {
  return (
    <>
      <div className="relative overflow-hidden" style={{ height: "200px" }}>
        <img
          src={m.img}
          alt={m.title}
          className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-900/50 to-transparent" />
        <div className="absolute bottom-4 left-4 w-9 h-9 flex items-center justify-center bg-amber-500 rounded-lg">
          <i className={`${m.icon} text-white text-base`} />
        </div>
      </div>
      <div className="p-5 sm:p-6">
        <h3 className="text-stone-900 font-semibold text-base sm:text-lg mb-2">{m.title}</h3>
        <p className="text-stone-500 text-sm font-light leading-relaxed">{m.desc}</p>
        <span className="mt-4 inline-flex items-center gap-1 text-amber-600 text-sm font-medium group-hover:gap-2 transition-all duration-200">
          Learn More <i className="ri-arrow-right-line text-xs" />
        </span>
      </div>
    </>
  );
}

export default function MinistriesPreview() {
  return (
    <section className="py-16 sm:py-20 md:py-28 px-4 sm:px-6 bg-stone-50">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 sm:gap-6 mb-10 sm:mb-14">
          <div>
            <span className="text-amber-600 text-xs font-bold uppercase tracking-[3px]">Serving the Community</span>
            <h2
              className="mt-3 font-extrabold text-stone-900 leading-tight"
              style={{ fontSize: "clamp(1.6rem, 3vw, 2.8rem)" }}
            >
              Our Ministries
            </h2>
          </div>
          <Link
            to="/ministries"
            className="inline-flex items-center gap-2 text-amber-600 font-semibold text-sm hover:gap-3 transition-all duration-200 cursor-pointer whitespace-nowrap self-start sm:self-auto"
          >
            View All Ministries <i className="ri-arrow-right-line" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          {ministries.map((m) =>
            m.external ? (
              <a
                href={m.link}
                key={m.title}
                target="_blank"
                rel="nofollow noopener noreferrer"
                className={cardClass}
              >
                <MinistryCardInner m={m} />
              </a>
            ) : (
              <Link
                to={m.link}
                key={m.title}
                className={cardClass}
              >
                <MinistryCardInner m={m} />
              </Link>
            )
          )}
        </div>
      </div>
    </section>
  );
}
