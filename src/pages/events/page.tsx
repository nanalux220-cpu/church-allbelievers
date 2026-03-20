import { useState } from "react";
import Navbar from "../../components/feature/Navbar";
import Footer from "../../components/feature/Footer";

type Event = {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  category: string;
  description: string;
  img: string;
  featured?: boolean;
};

const events: Event[] = [
  {
    id: "e1",
    title: "Easter Sunday Celebration Service",
    date: "20 April 2025",
    time: "1:00pm – 4:00pm",
    location: "St Andrews Methodist Church, Leeds",
    category: "Special Service",
    description: "Join us for a powerful and joyful Easter Sunday service as we celebrate the resurrection of our Lord Jesus Christ. Expect anointed worship, a life-changing message, and powerful prayer.",
    img: "https://readdy.ai/api/search-image?query=easter%20sunday%20church%20celebration%20service%20joyful%20congregation%20worship%20colorful%20flowers%20bright%20sunlight%20resurrection%20morning%20vibrant%20christian%20community%20gathering%20easter&width=600&height=380&seq=event001&orientation=landscape",
    featured: true,
  },
  {
    id: "e2",
    title: "All Night Prayer & Fasting Vigil",
    date: "5 April 2025",
    time: "10:00pm – 6:00am",
    location: "St Andrews Methodist Church, Leeds",
    category: "Prayer",
    description: "A powerful night of prayer, intercession, and fasting. Come and seek the face of God through the night in a powerful corporate prayer experience.",
    img: "https://readdy.ai/api/search-image?query=night%20prayer%20vigil%20church%20candles%20dark%20atmosphere%20spiritual%20intercession%20faith%20prayer%20hands%20raised%20believers%20kneeling%20peaceful%20holy%20atmosphere&width=600&height=380&seq=event002&orientation=landscape",
    featured: true,
  },
  {
    id: "e3",
    title: "Women of Faith Conference",
    date: "12 April 2025",
    time: "10:00am – 4:00pm",
    location: "St Andrews Methodist Church, Leeds",
    category: "Conference",
    description: "A one-day conference celebrating and empowering women of faith. Featuring inspiring speakers, worship, and breakout sessions on identity, purpose, and spiritual growth.",
    img: "https://readdy.ai/api/search-image?query=women%20faith%20conference%20church%20gathering%20empowered%20african%20christian%20women%20worship%20smiling%20joyful%20community%20ministry%20celebration%20warm%20gathering%20professional&width=600&height=380&seq=event003&orientation=landscape",
  },
  {
    id: "e4",
    title: "Youth Encounter Night",
    date: "26 April 2025",
    time: "6:00pm – 9:00pm",
    location: "St Andrews Methodist Church, Leeds",
    category: "Youth",
    description: "A vibrant evening for young people aged 13–30. Come for electric worship, real talk, and an authentic encounter with God in a safe and energetic space.",
    img: "https://readdy.ai/api/search-image?query=youth%20church%20event%20night%20young%20people%20worship%20hands%20raised%20energetic%20vibrant%20christian%20teens%20gathering%20joyful%20multicultural%20youth%20ministry%20celebration&width=600&height=380&seq=event004&orientation=landscape",
  },
  {
    id: "e5",
    title: "Community Outreach & Food Bank",
    date: "3 May 2025",
    time: "12:00pm – 3:00pm",
    location: "Beeston Community Centre, Leeds",
    category: "Outreach",
    description: "Join us as we serve our local community through food distribution, prayer, and practical acts of love. Bring a friend and make a real difference in Beeston.",
    img: "https://readdy.ai/api/search-image?query=community%20outreach%20food%20bank%20volunteer%20church%20team%20distributing%20food%20helping%20families%20smiling%20serving%20love%20compassion%20multicultural%20team%20community%20service&width=600&height=380&seq=event005&orientation=landscape",
  },
  {
    id: "e6",
    title: "New Members Orientation Sunday",
    date: "11 May 2025",
    time: "2:00pm – 4:00pm",
    location: "St Andrews Methodist Church, Leeds",
    category: "Discipleship",
    description: "New to All Believers Chapel? This orientation session is designed to welcome you, introduce you to our vision, values, and help you find your place in the family.",
    img: "https://readdy.ai/api/search-image?query=church%20welcome%20orientation%20new%20members%20greeting%20handshake%20warm%20welcoming%20atmosphere%20pastoral%20care%20community%20integration%20friendly%20smiling%20congregation&width=600&height=380&seq=event006&orientation=landscape",
  },
];

const categories = ["All", "Special Service", "Prayer", "Conference", "Youth", "Outreach", "Discipleship"];

export default function EventsPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [registering, setRegistering] = useState<string | null>(null);
  const [regForm, setRegForm] = useState({ name: "", email: "", phone: "" });
  const [regSuccess, setRegSuccess] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  const filtered = activeCategory === "All" ? events : events.filter((e) => e.category === activeCategory);
  const featured = events.filter((e) => e.featured);

  const handleRegChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRegForm((p) => ({ ...p, [e.target.name]: e.target.value }));
  };

  const handleRegSubmit = async (e: React.FormEvent<HTMLFormElement>, eventTitle: string) => {
    e.preventDefault();
    setSubmitting(true);
    const params = new URLSearchParams();
    params.append("name", regForm.name);
    params.append("email", regForm.email);
    params.append("phone", regForm.phone);
    params.append("event", eventTitle);
    try {
      await fetch("https://readdy.ai/api/form/d6socij4rjv84lqbqho0", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: params.toString(),
      });
      setRegSuccess(eventTitle);
      setRegistering(null);
      setRegForm({ name: "", email: "", phone: "" });
    } catch {
      setRegSuccess(eventTitle);
      setRegistering(null);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero */}
        <section className="relative pt-24 sm:pt-32 pb-14 sm:pb-20 px-4 sm:px-6 overflow-hidden">
          <img
            src="https://readdy.ai/api/search-image?query=church%20events%20celebration%20gathering%20community%20people%20together%20joyful%20conference%20worship%20multicultural%20congregation%20vibrant%20atmosphere%20evening%20event%20lights%20warm%20church%20ministry%20together&width=1440&height=500&seq=events-hero001&orientation=landscape"
            alt="Church Events"
            className="absolute inset-0 w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-stone-900/65 pointer-events-none" />
          <div className="relative z-10 max-w-4xl mx-auto text-center w-full">
            <span className="text-amber-300 text-xs font-bold uppercase tracking-[4px]">What&apos;s On</span>
            <h1
              className="text-white font-extrabold mt-4 leading-tight"
              style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
            >
              Events
            </h1>
            <p className="text-white/75 mt-4 text-base font-light max-w-xl mx-auto leading-relaxed">
              From Sunday services to conferences, prayer nights, and outreach — there is always something happening at All Believers Chapel.
            </p>
          </div>
        </section>

        {/* Featured Events */}
        <section className="py-14 sm:py-20 px-4 sm:px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-10 sm:mb-12">
              <span className="text-amber-600 text-xs font-bold uppercase tracking-[3px]">Coming Up</span>
              <h2
                className="mt-3 font-extrabold text-stone-900"
                style={{ fontSize: "clamp(1.8rem, 3vw, 2.5rem)" }}
              >
                Featured Events
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              {featured.map((ev) => (
                <div key={ev.id} className="rounded-2xl overflow-hidden border border-stone-100 group">
                  <div className="w-full overflow-hidden" style={{ height: "220px" }}>
                    <img
                      src={ev.img}
                      alt={ev.title}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-7 bg-stone-50">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-xs font-semibold text-amber-700 bg-amber-50 px-3 py-1 rounded-full">{ev.category}</span>
                      <span className="text-xs text-stone-400">{ev.date}</span>
                    </div>
                    <h3
                      className="font-semibold text-stone-900 text-lg mb-2"
                    >
                      {ev.title}
                    </h3>
                    <p className="text-stone-500 text-sm font-light leading-relaxed mb-4">{ev.description}</p>
                    <div className="flex items-center gap-4 text-xs text-stone-500 mb-5">
                      <span className="flex items-center gap-1.5"><i className="ri-time-line text-amber-400" />{ev.time}</span>
                      <span className="flex items-center gap-1.5"><i className="ri-map-pin-2-line text-amber-400" />{ev.location}</span>
                    </div>
                    {regSuccess === ev.title ? (
                      <div className="flex items-center gap-2 text-sm text-amber-700 bg-amber-50 px-4 py-2.5 rounded-lg">
                        <i className="ri-checkbox-circle-line" />
                        You&apos;re registered! See you there.
                      </div>
                    ) : (
                      <button
                        onClick={() => setRegistering(ev.id)}
                        className="px-6 py-2.5 bg-amber-500 hover:bg-amber-600 text-white text-sm font-semibold rounded-lg transition-colors cursor-pointer whitespace-nowrap"
                      >
                        Register Now
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* All Events with filter */}
        <section className="py-14 sm:py-20 px-4 sm:px-6 bg-stone-50">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-5 sm:gap-6 mb-10 sm:mb-12">
              <div>
                <span className="text-amber-600 text-xs font-bold uppercase tracking-[3px]">Full Calendar</span>
                <h2
                  className="mt-1 font-extrabold text-stone-900"
                  style={{ fontSize: "clamp(1.6rem, 3vw, 2rem)" }}
                >
                  All Upcoming Events
                </h2>
              </div>
              <div className="flex flex-wrap gap-2">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-3 sm:px-4 py-1.5 rounded-full text-xs font-semibold transition-colors cursor-pointer whitespace-nowrap ${
                      activeCategory === cat
                        ? "bg-amber-500 text-white"
                        : "bg-white text-stone-600 border border-stone-200 hover:border-amber-300 hover:text-amber-600"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-7">
              {filtered.map((ev) => (
                <div key={ev.id} className="bg-white rounded-2xl overflow-hidden border border-stone-100 group hover:border-amber-200 transition-colors">
                  <div className="w-full overflow-hidden" style={{ height: "180px" }}>
                    <img
                      src={ev.img}
                      alt={ev.title}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-semibold text-amber-700 bg-amber-50 px-2.5 py-0.5 rounded-full">{ev.category}</span>
                      <span className="text-xs text-stone-400 font-medium">{ev.date}</span>
                    </div>
                    <h4
                      className="font-semibold text-stone-900 text-sm leading-snug mb-2"
                    >
                      {ev.title}
                    </h4>
                    <p className="text-stone-500 text-xs font-light leading-relaxed mb-4 line-clamp-2">{ev.description}</p>
                    <div className="space-y-1.5 mb-4 text-xs text-stone-500">
                      <p className="flex items-center gap-1.5"><i className="ri-time-line text-amber-400" />{ev.time}</p>
                      <p className="flex items-center gap-1.5"><i className="ri-map-pin-2-line text-amber-400" />{ev.location}</p>
                    </div>
                    {regSuccess === ev.title ? (
                      <div className="flex items-center gap-2 text-xs text-amber-700 bg-amber-50 px-3 py-2 rounded-lg">
                        <i className="ri-checkbox-circle-line" />
                        Registered!
                      </div>
                    ) : (
                      <button
                        onClick={() => setRegistering(ev.id)}
                        className="w-full py-2 bg-stone-900 hover:bg-amber-500 text-white text-xs font-semibold rounded-lg transition-colors cursor-pointer whitespace-nowrap"
                      >
                        Register
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Registration Modal — scrollable on mobile */}
      {registering && (() => {
        const ev = events.find((e) => e.id === registering);
        if (!ev) return null;
        return (
          <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center px-0 sm:px-4">
            <div
              className="absolute inset-0 bg-stone-900/60 backdrop-blur-sm"
              onClick={() => setRegistering(null)}
            />
            <div className="relative bg-white rounded-t-3xl sm:rounded-2xl w-full sm:max-w-md max-h-[90vh] overflow-y-auto">
              <div className="sticky top-0 bg-white px-6 pt-5 pb-3 border-b border-stone-100 flex items-start justify-between z-10">
                <div>
                  <h3
                    className="font-semibold text-stone-900"
                    style={{ fontSize: "1.1rem" }}
                  >
                    Register for Event
                  </h3>
                  <p className="text-amber-600 text-sm font-medium mt-0.5">{ev.title}</p>
                </div>
                <button
                  onClick={() => setRegistering(null)}
                  className="w-8 h-8 flex items-center justify-center text-stone-400 hover:text-stone-700 hover:bg-stone-100 rounded-lg transition-colors cursor-pointer flex-shrink-0 ml-3"
                >
                  <i className="ri-close-line" />
                </button>
              </div>
              <div className="px-6 pb-8 pt-4">
                <form
                  data-readdy-form
                  onSubmit={(e) => handleRegSubmit(e, ev.title)}
                  className="space-y-4"
                >
                  <div>
                    <label className="block text-xs font-semibold text-stone-600 mb-1.5">Full Name <span className="text-amber-500">*</span></label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={regForm.name}
                      onChange={handleRegChange}
                      placeholder="Your full name"
                      className="w-full px-4 py-2.5 rounded-lg border border-stone-200 text-sm text-stone-800 bg-stone-50 focus:outline-none focus:border-amber-400 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-stone-600 mb-1.5">Email Address <span className="text-amber-500">*</span></label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={regForm.email}
                      onChange={handleRegChange}
                      placeholder="your@email.com"
                      className="w-full px-4 py-2.5 rounded-lg border border-stone-200 text-sm text-stone-800 bg-stone-50 focus:outline-none focus:border-amber-400 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-stone-600 mb-1.5">Phone (optional)</label>
                    <input
                      type="tel"
                      name="phone"
                      value={regForm.phone}
                      onChange={handleRegChange}
                      placeholder="+44..."
                      className="w-full px-4 py-2.5 rounded-lg border border-stone-200 text-sm text-stone-800 bg-stone-50 focus:outline-none focus:border-amber-400 transition-colors"
                    />
                  </div>
                  <div className="flex items-center gap-2 text-xs text-stone-400 bg-stone-50 rounded-lg px-4 py-2.5">
                    <i className="ri-calendar-event-line text-amber-400" />
                    <span>{ev.date} &nbsp;|&nbsp; {ev.time}</span>
                  </div>
                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full py-3 bg-amber-500 hover:bg-amber-600 disabled:opacity-50 text-white text-sm font-semibold rounded-lg transition-colors cursor-pointer whitespace-nowrap"
                  >
                    {submitting ? "Registering..." : "Confirm Registration"}
                  </button>
                </form>
              </div>
            </div>
          </div>
        );
      })()}

      <Footer />
    </div>
  );
}
