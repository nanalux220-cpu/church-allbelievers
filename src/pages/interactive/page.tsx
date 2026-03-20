import { useState } from "react";
import Navbar from "../../components/feature/Navbar";
import Footer from "../../components/feature/Footer";

const testimonies = [
  {
    name: "Adwoa Mensah",
    text: "All Believers Chapel has completely transformed my walk with God. The prayer team prayed with me and within a week, I received a miracle I had been believing for years!",
    avatar: "https://readdy.ai/api/search-image?query=african%20woman%20portrait%20warm%20smile%20professional%20headshot%20neutral%20background%20happy%20confident&width=100&height=100&seq=test001&orientation=squarish",
    tag: "Healing",
  },
  {
    name: "Emmanuel Ofori",
    text: "I was going through the darkest season of my life. The community here embraced me, prayed for me, and helped me find my footing again. Forever grateful.",
    avatar: "https://readdy.ai/api/search-image?query=african%20man%20portrait%20warm%20smile%20professional%20headshot%20neutral%20background%20happy%20confident%20young&width=100&height=100&seq=test002&orientation=squarish",
    tag: "Restoration",
  },
  {
    name: "Grace Asante",
    text: "The worship experience at ABC is unlike anything I have ever encountered. Every Sunday I leave feeling recharged, full of faith, and ready to face the week!",
    avatar: "https://readdy.ai/api/search-image?query=african%20woman%20portrait%20warm%20joyful%20smile%20professional%20headshot%20neutral%20background%20confident&width=100&height=100&seq=test003&orientation=squarish",
    tag: "Worship",
  },
  {
    name: "Kofi Boateng",
    text: "Submitting my prayer request online was so easy, and within 48 hours I received a personal call from a pastor who prayed with me. I felt truly seen and valued.",
    avatar: "https://readdy.ai/api/search-image?query=african%20man%20portrait%20warm%20smile%20headshot%20neutral%20background%20confident%20mature&width=100&height=100&seq=test004&orientation=squarish",
    tag: "Community",
  },
];

const liveSchedule = [
  { day: "Sunday", time: "1:00pm – 4:00pm", label: "Main Service" },
  { day: "Saturday", time: "11:00am – 12:00pm", label: "Prayer Session" },
];

export default function InteractivePage() {
  const [prayerName, setPrayerName] = useState("");
  const [prayerEmail, setPrayerEmail] = useState("");
  const [prayerRequest, setPrayerRequest] = useState("");
  const [prayerAnon, setPrayerAnon] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handlePrayerSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!prayerRequest.trim()) return;
    setSubmitting(true);
    const params = new URLSearchParams();
    if (!prayerAnon) {
      params.append("name", prayerName);
      params.append("email", prayerEmail);
    } else {
      params.append("name", "Anonymous");
    }
    params.append("prayer_request", prayerRequest);
    try {
      await fetch("https://readdy.ai/api/form/d6socij4rjv84lqbqhng", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: params.toString(),
      });
      setSubmitted(true);
    } catch {
      setSubmitted(true);
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
            src="https://readdy.ai/api/search-image?query=vibrant%20church%20congregation%20worship%20hands%20raised%20joyful%20celebration%20multicultural%20african%20christian%20community%20golden%20warm%20lighting%20live%20service%20atmosphere%20engaged%20passionate%20believers%20singing&width=1440&height=500&seq=interactive001&orientation=landscape"
            alt="Interactive Community"
            className="absolute inset-0 w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-stone-900/65" />
          <div className="relative z-10 max-w-4xl mx-auto text-center w-full">
            <span className="text-amber-300 text-xs font-bold uppercase tracking-[4px]">Stay Connected</span>
            <h1
              className="text-white font-bold mt-4 leading-tight"
              style={{ fontFamily: "'Inter', sans-serif", fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
            >
              Interactive
            </h1>
            <p className="text-white/75 mt-4 text-base max-w-xl mx-auto leading-relaxed">
              Watch us live, submit a prayer request, read testimonies, and stay connected with the All Believers Chapel community — wherever you are.
            </p>
          </div>
        </section>

        {/* Live Stream */}
        <section className="py-14 sm:py-20 px-4 sm:px-6 bg-stone-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-10 sm:mb-12">
              <span className="text-amber-600 text-xs font-bold uppercase tracking-[3px]">Online Service</span>
              <h2
                className="mt-3 font-bold text-stone-900"
                style={{ fontFamily: "'Inter', sans-serif", fontSize: "clamp(1.8rem, 3vw, 2.5rem)" }}
              >
                Watch Us Live
              </h2>
              <p className="mt-4 text-stone-500 max-w-xl mx-auto text-sm leading-relaxed">
                Can&apos;t make it in person? Join our live services online. We stream every Sunday and Saturday prayer session.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 items-start">
              {/* YouTube embed */}
              <div className="md:col-span-2">
                <div className="rounded-2xl overflow-hidden bg-stone-900 border border-stone-200 w-full" style={{ aspectRatio: "16/9" }}>
                  <iframe
                    src="https://www.youtube.com/embed/5r79NfGsJ8c"
                    title="All Believers Chapel – Watch Us Live"
                    className="w-full h-full border-0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>
              {/* Schedule */}
              <div className="space-y-4">
                <h3
                  className="font-bold text-stone-900 text-lg"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  Live Schedule
                </h3>
                {liveSchedule.map((s) => (
                  <div key={s.day} className="p-5 rounded-xl bg-white border border-stone-100">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-9 h-9 flex items-center justify-center bg-amber-50 rounded-lg">
                        <i className="ri-live-line text-amber-500" />
                      </div>
                      <span className="text-stone-900 font-semibold text-sm">{s.day}</span>
                    </div>
                    <p className="text-amber-600 font-bold text-sm">{s.time}</p>
                    <p className="text-stone-500 text-xs mt-1">{s.label}</p>
                  </div>
                ))}
                <div className="p-5 rounded-xl bg-amber-50 border border-amber-100">
                  <p className="text-stone-700 text-xs leading-relaxed">
                    Subscribe to our YouTube channel to get notified when we go live and access all past sermons.
                  </p>
                  <a
                    href="https://youtu.be/5r79NfGsJ8c"
                    target="_blank"
                    rel="nofollow noreferrer"
                    className="mt-3 inline-flex items-center gap-2 text-xs font-semibold text-amber-700 hover:text-amber-800 transition-colors cursor-pointer"
                  >
                    <i className="ri-youtube-fill text-base" />
                    Watch on YouTube
                    <i className="ri-arrow-right-line" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Prayer Request */}
        <section className="py-14 sm:py-20 px-4 sm:px-6 bg-white">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 items-start">
              <div>
                <span className="text-amber-600 text-xs font-bold uppercase tracking-[3px]">We&apos;re Here for You</span>
                <h2
                  className="mt-3 mb-5 font-bold text-stone-900"
                  style={{ fontFamily: "'Inter', sans-serif", fontSize: "clamp(1.8rem, 3vw, 2.5rem)" }}
                >
                  Submit a Prayer Request
                </h2>
                <p className="text-stone-600 text-sm leading-relaxed mb-6">
                  No matter what you&apos;re going through, you don&apos;t have to face it alone. Our prayer team personally reads every request and lifts them before God in prayer.
                </p>
                <div className="space-y-4">
                  {[
                    { icon: "ri-lock-line", text: "Your requests are kept completely confidential" },
                    { icon: "ri-heart-line", text: "Each request is prayed over by our dedicated prayer team" },
                    { icon: "ri-time-line", text: "We respond personally within 48 hours" },
                  ].map((item) => (
                    <div key={item.text} className="flex items-start gap-3">
                      <div className="w-9 h-9 flex items-center justify-center bg-amber-50 rounded-lg flex-shrink-0">
                        <i className={`${item.icon} text-amber-500 text-sm`} />
                      </div>
                      <p className="text-stone-600 text-sm leading-relaxed pt-2">{item.text}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Form */}
              <div className="bg-stone-50 rounded-2xl p-8 border border-stone-100">
                {submitted ? (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 flex items-center justify-center bg-amber-50 rounded-full mx-auto mb-4">
                      <i className="ri-checkbox-circle-line text-amber-500 text-3xl" />
                    </div>
                    <h3
                      className="font-bold text-stone-900 mb-2"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      Prayer Request Received
                    </h3>
                    <p className="text-stone-500 text-sm leading-relaxed">
                      Thank you for trusting us with your request. Our prayer team will be lifting you up before God.
                    </p>
                    <button
                      onClick={() => { setSubmitted(false); setPrayerRequest(""); setPrayerName(""); setPrayerEmail(""); }}
                      className="mt-6 text-sm text-amber-600 hover:text-amber-700 font-medium cursor-pointer whitespace-nowrap"
                    >
                      Submit Another Request
                    </button>
                  </div>
                ) : (
                  <form
                    data-readdy-form
                    onSubmit={handlePrayerSubmit}
                    className="space-y-4"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <input
                        type="checkbox"
                        id="anon"
                        checked={prayerAnon}
                        onChange={(e) => setPrayerAnon(e.target.checked)}
                        className="accent-amber-500 cursor-pointer"
                      />
                      <label htmlFor="anon" className="text-stone-600 text-sm cursor-pointer">Submit anonymously</label>
                    </div>
                    {!prayerAnon && (
                      <>
                        <div>
                          <label className="block text-xs font-semibold text-stone-600 mb-1.5">Your Name</label>
                          <input
                            type="text"
                            name="name"
                            value={prayerName}
                            onChange={(e) => setPrayerName(e.target.value)}
                            placeholder="Full name"
                            className="w-full px-4 py-2.5 rounded-lg border border-stone-200 text-sm text-stone-800 bg-white focus:outline-none focus:border-amber-400 transition-colors"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-semibold text-stone-600 mb-1.5">Email Address</label>
                          <input
                            type="email"
                            name="email"
                            value={prayerEmail}
                            onChange={(e) => setPrayerEmail(e.target.value)}
                            placeholder="your@email.com"
                            className="w-full px-4 py-2.5 rounded-lg border border-stone-200 text-sm text-stone-800 bg-white focus:outline-none focus:border-amber-400 transition-colors"
                          />
                        </div>
                      </>
                    )}
                    <div>
                      <label className="block text-xs font-semibold text-stone-600 mb-1.5">Your Prayer Request <span className="text-amber-500">*</span></label>
                      <textarea
                        name="prayer_request"
                        value={prayerRequest}
                        onChange={(e) => {
                          if (e.target.value.length <= 500) setPrayerRequest(e.target.value);
                        }}
                        placeholder="Share what&apos;s on your heart..."
                        rows={5}
                        className="w-full px-4 py-2.5 rounded-lg border border-stone-200 text-sm text-stone-800 bg-white focus:outline-none focus:border-amber-400 transition-colors resize-none"
                      />
                      <p className="text-right text-xs text-stone-400 mt-1">{prayerRequest.length}/500</p>
                    </div>
                    <button
                      type="submit"
                      disabled={submitting || !prayerRequest.trim()}
                      className="w-full py-3 bg-amber-500 hover:bg-amber-600 disabled:opacity-50 text-white text-sm font-semibold rounded-lg transition-colors cursor-pointer whitespace-nowrap"
                    >
                      {submitting ? "Sending..." : "Send Prayer Request"}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Testimonies */}
        <section className="py-14 sm:py-20 px-4 sm:px-6 bg-stone-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-10 sm:mb-12">
              <span className="text-amber-600 text-xs font-bold uppercase tracking-[3px]">God is Working</span>
              <h2
                className="mt-3 font-bold text-stone-900"
                style={{ fontFamily: "'Inter', sans-serif", fontSize: "clamp(1.8rem, 3vw, 2.5rem)" }}
              >
                Community Testimonies
              </h2>
              <p className="mt-4 text-stone-500 max-w-xl mx-auto text-sm leading-relaxed">
                Real stories from real people who have encountered God through All Believers Chapel.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 sm:gap-6">
              {testimonies.map((t) => (
                <div key={t.name} className="bg-white rounded-2xl p-6 border border-stone-100">
                  <i className="ri-double-quotes-l text-amber-300 text-2xl" />
                  <p className="text-stone-600 text-sm leading-relaxed mt-3 mb-5">{t.text}</p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                      <img src={t.avatar} alt={t.name} className="w-full h-full object-cover object-top" />
                    </div>
                    <div>
                      <p className="text-stone-900 font-semibold text-xs">{t.name}</p>
                      <span className="text-xs text-amber-600 font-medium bg-amber-50 px-2 py-0.5 rounded-full">{t.tag}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
