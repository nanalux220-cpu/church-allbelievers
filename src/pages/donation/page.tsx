import Navbar from "../../components/feature/Navbar";
import Footer from "../../components/feature/Footer";

const givingMethods = [
  {
    icon: "ri-bank-line",
    title: "Bank Transfer",
    description: "Give directly to our church account. Set up a one-off or regular standing order.",
    details: [
      { label: "Account Name", value: "All Believers Chapel" },
      { label: "Sort Code", value: "20-45-53" },
      { label: "Account Number", value: "73846291" },
      { label: "Bank", value: "Barclays Bank UK" },
    ],
  },
  {
    icon: "ri-paypal-line",
    title: "PayPal",
    description: "Quick and secure giving through PayPal — perfect for one-off donations from anywhere.",
    details: [
      { label: "PayPal Email", value: "allbelieverschapel@outlook.com" },
    ],
    cta: { label: "Give via PayPal", href: "https://paypal.me" },
  },
  {
    icon: "ri-hand-coin-line",
    title: "In-Person Offering",
    description: "Drop your offering in the basket during our Sunday or Saturday services at the church.",
    details: [
      { label: "Sunday Service", value: "1:00pm – 4:00pm" },
      { label: "Saturday Prayers", value: "11:00am – 12:00pm" },
    ],
  },
];

const impactAreas = [
  { icon: "ri-megaphone-line", label: "Evangelism & Outreach", desc: "Reaching the lost in Leeds and beyond" },
  { icon: "ri-user-heart-line", label: "Community Support", desc: "Helping families in need across the city" },
  { icon: "ri-music-2-line", label: "Worship & Arts", desc: "Equipping the worship team and media ministry" },
  { icon: "ri-seedling-line", label: "Youth & Children", desc: "Investing in the next generation of believers" },
  { icon: "ri-global-line", label: "Missions", desc: "Supporting missionaries and global gospel work" },
  { icon: "ri-building-2-line", label: "Church Operations", desc: "Maintaining facilities and resources for ministry" },
];

export default function DonationPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero */}
        <section className="relative pt-24 sm:pt-32 pb-14 sm:pb-20 px-4 sm:px-6 overflow-hidden">
          <img
            src="https://readdy.ai/api/search-image?query=generous%20giving%20hands%20holding%20offering%20church%20community%20cheerful%20donors%20warm%20golden%20light%20hopeful%20joyful%20spiritual%20act%20of%20worship%20faith%20tithing%20giving%20hearts%20together%20ministry%20support&width=1440&height=500&seq=donation001&orientation=landscape"
            alt="Giving & Donations"
            className="absolute inset-0 w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-stone-900/65 pointer-events-none" />
          <div className="relative z-10 max-w-4xl mx-auto text-center w-full">
            <span className="text-amber-300 text-xs font-bold uppercase tracking-[4px]">Give Generously</span>
            <h1
              className="text-white font-extrabold mt-4 leading-tight"
              style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
            >
              Donation &amp; Giving
            </h1>
            <p className="text-white/75 mt-4 text-base font-light max-w-xl mx-auto leading-relaxed">
              Your giving fuels the mission of All Believers Chapel — from community outreach to worship, discipleship, and beyond.
            </p>
          </div>
        </section>

        {/* Scripture */}
        <section className="py-10 sm:py-12 px-4 sm:px-6 bg-amber-50 border-b border-amber-100">
          <div className="max-w-3xl mx-auto text-center">
            <i className="ri-double-quotes-l text-amber-400 text-3xl" />
            <p
              className="text-stone-800 font-medium mt-3 leading-relaxed"
              style={{ fontSize: "clamp(1rem, 2vw, 1.2rem)" }}
            >
              Each of you should give what you have decided in your heart to give, not reluctantly or under compulsion, for God loves a cheerful giver.
            </p>
            <span className="mt-3 inline-block text-amber-600 text-sm font-semibold tracking-wide">2 Corinthians 9:7</span>
          </div>
        </section>

        {/* Giving Methods */}
        <section className="py-14 sm:py-20 px-4 sm:px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-10 sm:mb-14">
              <span className="text-amber-600 text-xs font-bold uppercase tracking-[3px]">Ways to Give</span>
              <h2
                className="mt-3 font-extrabold text-stone-900"
                style={{ fontSize: "clamp(1.8rem, 3vw, 2.5rem)" }}
              >
                Choose How You&apos;d Like to Give
              </h2>
              <p className="mt-4 text-stone-500 max-w-xl mx-auto text-sm font-light leading-relaxed">
                Every gift, no matter the size, makes a real difference in the lives of people in Leeds and around the world.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
              {givingMethods.map((method) => (
                <div
                  key={method.title}
                  className="rounded-2xl border border-stone-100 p-6 sm:p-8 bg-stone-50 hover:border-amber-200 transition-colors"
                >
                  <div className="w-12 h-12 flex items-center justify-center bg-amber-50 rounded-xl mb-5">
                    <i className={`${method.icon} text-amber-500 text-2xl`} />
                  </div>
                  <h3
                    className="text-stone-900 font-semibold text-lg mb-2"
                  >
                    {method.title}
                  </h3>
                  <p className="text-stone-500 text-sm font-light leading-relaxed mb-5">{method.description}</p>
                  <div className="space-y-2.5">
                    {method.details.map((d) => (
                      <div key={d.label} className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-0.5 sm:gap-2 py-2 border-b border-stone-200 last:border-0">
                        <span className="text-stone-500 text-xs flex-shrink-0">{d.label}</span>
                        <span className="text-stone-900 text-xs font-semibold break-all">{d.value}</span>
                      </div>
                    ))}
                  </div>
                  {method.cta && (
                    <a
                      href={method.cta.href}
                      target="_blank"
                      rel="nofollow noreferrer"
                      className="mt-5 inline-flex items-center gap-2 px-5 py-2.5 bg-amber-500 hover:bg-amber-600 text-white text-sm font-semibold rounded-lg transition-colors cursor-pointer whitespace-nowrap"
                    >
                      {method.cta.label}
                      <i className="ri-external-link-line" />
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Impact Areas */}
        <section className="py-14 sm:py-20 px-4 sm:px-6 bg-stone-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-10 sm:mb-14">
              <span className="text-amber-600 text-xs font-bold uppercase tracking-[3px]">Your Impact</span>
              <h2
                className="mt-3 font-extrabold text-stone-900"
                style={{ fontSize: "clamp(1.8rem, 3vw, 2.5rem)" }}
              >
                Where Your Gift Goes
              </h2>
              <p className="mt-4 text-stone-500 max-w-xl mx-auto text-sm font-light leading-relaxed">
                100% of every donation goes directly towards building the Kingdom of God in Leeds and beyond.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5">
              {impactAreas.map((area) => (
                <div key={area.label} className="bg-white rounded-2xl p-6 border border-stone-100 flex items-start gap-4">
                  <div className="w-10 h-10 flex items-center justify-center bg-amber-50 rounded-xl flex-shrink-0">
                    <i className={`${area.icon} text-amber-500`} />
                  </div>
                  <div>
                    <h4 className="text-stone-900 font-semibold text-sm">{area.label}</h4>
                    <p className="text-stone-500 text-xs mt-1 leading-relaxed">{area.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative py-16 sm:py-20 px-4 sm:px-6 overflow-hidden">
          <img
            src="https://readdy.ai/api/search-image?query=warm%20sunlight%20through%20church%20stained%20glass%20window%20golden%20rays%20hope%20faith%20spiritual%20atmosphere%20soft%20glow%20peaceful%20interior%20abstract%20christian%20background&width=1440&height=380&seq=donation002&orientation=landscape"
            alt="Give today"
            className="absolute inset-0 w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-stone-900/65 pointer-events-none" />
          <div className="relative z-10 max-w-2xl mx-auto text-center">
            <h3
              className="text-white font-bold mb-4"
              style={{ fontSize: "clamp(1.5rem, 3vw, 2.2rem)" }}
            >
              Every Gift Makes a Difference
            </h3>
            <p className="text-white/75 text-sm font-light leading-relaxed mb-8">
              Thank you for partnering with us in this great work. Your generosity is sowing seeds of transformation in Leeds and beyond.
            </p>
            <a
              href="mailto:allbelieverschapel@outlook.com"
              className="inline-block px-8 py-3 bg-amber-500 hover:bg-amber-600 text-white text-sm font-semibold rounded-lg transition-colors cursor-pointer whitespace-nowrap"
            >
              Contact Us About Giving
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
