import { Link, useNavigate } from "react-router-dom";

export default function Footer() {
  const navigate = useNavigate();

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate("/");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-stone-900 text-stone-300">
      {/* CTA Strip */}
      <div className="bg-amber-500 py-10 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div>
            <h2
              className="text-white font-extrabold"
              style={{ fontSize: "clamp(1.4rem, 3vw, 2rem)" }}
            >
              Join Us This Sunday
            </h2>
            <p className="text-amber-100 mt-1 text-sm font-light">
              Sunday 1:00pm – 4:00pm &nbsp;|&nbsp; Saturday Prayers 11:00am – 12:00pm
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0 w-full sm:w-auto">
            <a
              href="https://maps.google.com/?q=St+Andrews+Methodist+Church,+10+Cardinal+Road,+Beeston,+Leeds+LS11+8AL"
              target="_blank"
              rel="nofollow noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 bg-white text-amber-700 font-semibold rounded-lg text-sm hover:bg-amber-50 transition-colors cursor-pointer whitespace-nowrap text-center w-full sm:w-auto min-h-[48px]"
            >
              Get Directions
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-6 py-3 border-2 border-white text-white font-semibold rounded-lg text-sm hover:bg-white/10 transition-colors cursor-pointer whitespace-nowrap text-center w-full sm:w-auto min-h-[48px]"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="py-14 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center mb-4">
              <a
                href="/"
                onClick={handleLogoClick}
                className="inline-flex items-center cursor-pointer min-h-[44px]"
                aria-label="Go to top of page"
              >
                <img
                  src="https://static.readdy.ai/image/4428baccc60709cd2682246ca105b4f4/888970baa24942f1fd24ce8dba84e082.png"
                  alt="All Believers Chapel"
                  className="h-14 sm:h-20 w-auto max-w-[180px] object-contain bg-white rounded-xl px-2 py-1"
                />
              </a>
            </div>
            <p className="text-stone-400 text-sm leading-relaxed">
              A thriving New Testament model charismatic church, founded on 28th October 2018 in Leeds.
            </p>
            <div className="flex gap-3 mt-5">
              {[
                { icon: "ri-facebook-fill", href: "#" },
                { icon: "ri-youtube-fill", href: "#" },
                { icon: "ri-instagram-line", href: "#" },
              ].map((s) => (
                <a
                  key={s.icon}
                  href={s.href}
                  className="w-11 h-11 flex items-center justify-center bg-stone-800 hover:bg-amber-500 rounded-lg text-stone-300 hover:text-white transition-all duration-200 cursor-pointer"
                >
                  <i className={s.icon} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-3">Quick Links</h4>
            <ul className="flex flex-col">
              {[
                { label: "Home", path: "/" },
                { label: "About Us", path: "/about" },
                { label: "Ministries", path: "/ministries" },
                { label: "Interactive", path: "/interactive" },
                { label: "Events", path: "/events" },
                { label: "Donation", path: "/donation" },
                { label: "Contact", path: "/contact" },
              ].map((l) => (
                <li key={l.path}>
                  <Link
                    to={l.path}
                    className="flex items-center gap-2 py-2.5 min-h-[44px] text-stone-400 hover:text-amber-400 text-sm transition-colors cursor-pointer"
                  >
                    <i className="ri-arrow-right-s-line text-amber-500 flex-shrink-0" />
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Times */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-5">Service Times</h4>
            <ul className="space-y-4 text-sm text-stone-400">
              <li>
                <span className="text-amber-400 font-medium block mb-0.5">Sunday Service</span>
                1:00pm – 4:00pm
              </li>
              <li>
                <span className="text-amber-400 font-medium block mb-0.5">Saturday Prayers</span>
                11:00am – 12:00pm
              </li>
              <li className="pt-2">
                <Link
                  to="/events"
                  className="inline-flex items-center gap-1.5 text-amber-400 hover:text-amber-300 text-xs font-semibold transition-colors cursor-pointer min-h-[44px] py-2"
                >
                  <i className="ri-calendar-event-line" />
                  View All Events
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-5">Contact Us</h4>
            <ul className="space-y-1 text-sm text-stone-400">
              <li className="flex gap-2.5 py-2">
                <i className="ri-map-pin-2-line text-amber-400 mt-0.5 flex-shrink-0" />
                <span>St Andrews Methodist Church, 10 Cardinal Road, Beeston, Leeds LS11 8AL</span>
              </li>
              <li className="flex gap-2.5 items-center">
                <i className="ri-phone-line text-amber-400 flex-shrink-0" />
                <a
                  href="tel:+447825542566"
                  className="hover:text-amber-400 transition-colors cursor-pointer min-h-[44px] flex items-center py-2"
                >
                  +44 7825 542566
                </a>
              </li>
              <li className="flex gap-2.5 items-center">
                <i className="ri-mail-line text-amber-400 flex-shrink-0" />
                <a
                  href="mailto:allbelieverschapel@outlook.com"
                  className="hover:text-amber-400 transition-colors cursor-pointer break-all min-h-[44px] flex items-center py-2"
                >
                  allbelieverschapel@outlook.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-stone-800 py-5 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-stone-500 text-center">
          <p>&copy; {new Date().getFullYear()} All Believers Chapel. All rights reserved.</p>
          <p>Founded 28th October 2018 &nbsp;&bull;&nbsp; Leeds, United Kingdom</p>
        </div>
      </div>
    </footer>
  );
}
