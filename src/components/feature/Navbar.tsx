import { useState, useEffect, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const aboutDropdown = [
  { label: "The Story So Far", path: "/about/story", icon: "ri-history-line" },
  { label: "What We Believe", path: "/about/beliefs", icon: "ri-book-open-line" },
  { label: "Meet the Team", path: "/about/team", icon: "ri-team-line" },
];

const ministriesDropdown = [
  { label: "Children's Ministry", path: "/ministries/children", icon: "ri-user-heart-line" },
  { label: "Youth Ministry", path: "/ministries/youth", icon: "ri-fire-line" },
  { label: "Women's Ministry", path: "/ministries/womens", icon: "ri-women-line" },
  { label: "Men's Ministry", path: "/ministries/mens", icon: "ri-men-line" },
  { label: "Prayer Ministry", path: "/ministries/prayer", icon: "ri-hands-line" },
  { label: "Community Outreach", path: "/ministries/outreach", icon: "ri-hand-heart-line" },
];

const eventsDropdown = [
  { label: "Event Calendar", path: "/events?view=calendar", icon: "ri-calendar-event-line" },
  { label: "Event List", path: "/events?view=list", icon: "ri-list-check-2" },
];

const navLinks = [
  { label: "Home", path: "/" },
  { label: "Interactive", path: "/interactive" },
  { label: "Donation", path: "/donation" },
  { label: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [ministriesOpen, setMinistriesOpen] = useState(false);
  const [eventsOpen, setEventsOpen] = useState(false);
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);
  const [mobileMinistriesOpen, setMobileMinistriesOpen] = useState(false);
  const [mobileEventsOpen, setMobileEventsOpen] = useState(false);
  const aboutRef = useRef<HTMLDivElement>(null);
  const ministriesRef = useRef<HTMLDivElement>(null);
  const eventsRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setMenuOpen(false);
    navigate("/");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    setAboutOpen(false);
    setMinistriesOpen(false);
    setEventsOpen(false);
    setMobileAboutOpen(false);
    setMobileMinistriesOpen(false);
    setMobileEventsOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (aboutRef.current && !aboutRef.current.contains(e.target as Node)) setAboutOpen(false);
      if (ministriesRef.current && !ministriesRef.current.contains(e.target as Node)) setMinistriesOpen(false);
      if (eventsRef.current && !eventsRef.current.contains(e.target as Node)) setEventsOpen(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const isHome = location.pathname === "/";
  const isAboutActive = location.pathname === "/about" || location.pathname.startsWith("/about/");
  const isMinistriesActive = location.pathname === "/ministries" || location.pathname.startsWith("/ministries/");
  const isEventsActive = location.pathname === "/events" || location.pathname.startsWith("/events/");

  const linkBase = (active: boolean) =>
    `relative flex items-center gap-1 px-3 py-2 text-xs font-semibold tracking-wide transition-colors duration-200 cursor-pointer group whitespace-nowrap ${
      active
        ? scrolled || !isHome ? "text-amber-600" : "text-amber-300"
        : scrolled || !isHome ? "text-stone-700 hover:text-amber-600" : "text-white/90 hover:text-white"
    }`;

  const underline = (active: boolean) =>
    `absolute bottom-0 left-3 right-3 h-0.5 bg-amber-500 rounded-full transition-transform duration-200 origin-left ${active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}`;

  const dropdownPanel = (open: boolean, wide?: boolean) =>
    `absolute top-full left-1/2 -translate-x-1/2 mt-1 ${wide ? "w-72" : "w-52"} bg-white rounded-xl border border-stone-100 overflow-hidden transition-all duration-200 ${
      open ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-2 pointer-events-none"
    }`;

  return (
    <>
      {/* Top Info Bar */}
      <div className={`hidden lg:block w-full bg-stone-900 text-stone-300 text-xs transition-all duration-300 ${scrolled ? "opacity-0 h-0 overflow-hidden" : "opacity-100 h-9"}`}>
        <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
          <span className="flex items-center gap-1.5">
            <i className="ri-map-pin-2-line text-amber-400" />
            St Andrews Methodist Church, Beeston, Leeds LS11 8AL
          </span>
          <div className="flex items-center gap-5">
            <span className="flex items-center gap-1.5">
              <i className="ri-time-line text-amber-400" />
              Sun 1:00pm – 4:00pm &nbsp;|&nbsp; Sat Prayers 11:00am – 12:00pm
            </span>
            <div className="flex items-center gap-3 ml-2">
              {[
                { icon: "ri-facebook-fill", href: "#" },
                { icon: "ri-youtube-fill", href: "#" },
                { icon: "ri-instagram-line", href: "#" },
              ].map((s) => (
                <a key={s.icon} href={s.href} className="hover:text-amber-400 transition-colors cursor-pointer">
                  <i className={`${s.icon} text-sm`} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <header
        className={`fixed left-0 right-0 z-50 transition-all duration-300 ${
          scrolled || !isHome ? "bg-white/95 backdrop-blur-md shadow-sm top-0" : "bg-transparent lg:top-9 top-0"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between" style={{ height: "68px" }}>
          {/* Logo */}
          <a
            href="/"
            onClick={handleLogoClick}
            className="flex items-center cursor-pointer flex-shrink-0 min-h-[44px] min-w-[44px]"
            aria-label="Go to top of page"
          >
            <div className={`flex items-center justify-center rounded-xl px-1 py-0.5 transition-all duration-300 ${scrolled || !isHome ? "bg-transparent" : "bg-white/90 backdrop-blur-sm"}`}>
              <img
                src="https://static.readdy.ai/image/4428baccc60709cd2682246ca105b4f4/888970baa24942f1fd24ce8dba84e082.png"
                alt="All Believers Chapel"
                className="h-9 sm:h-12 w-auto max-w-[140px] sm:max-w-[180px] object-contain"
              />
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-0.5">
            {/* Home */}
            <Link
              to="/"
              className={linkBase(location.pathname === "/")}
            >
              Home
              <span className={underline(location.pathname === "/")} />
            </Link>

            {/* About Us Dropdown */}
            <div ref={aboutRef} className="relative" onMouseEnter={() => setAboutOpen(true)} onMouseLeave={() => setAboutOpen(false)}>
              <Link to="/about" className={linkBase(isAboutActive)}>
                About Us
                <i className={`ri-arrow-down-s-line text-sm transition-transform duration-200 ${aboutOpen ? "rotate-180" : ""}`} />
                <span className={underline(isAboutActive)} />
              </Link>
              <div className={dropdownPanel(aboutOpen)} style={{ boxShadow: "0 8px 30px rgba(0,0,0,0.08)" }}>
                <div className="p-1.5">
                  {aboutDropdown.map((item) => (
                    <Link key={item.path} to={item.path} className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-amber-50 transition-colors group cursor-pointer">
                      <div className="w-7 h-7 flex items-center justify-center bg-amber-50 rounded-lg group-hover:bg-amber-100 transition-colors flex-shrink-0">
                        <i className={`${item.icon} text-amber-500 text-sm`} />
                      </div>
                      <span className="text-stone-700 text-sm font-medium group-hover:text-amber-600 transition-colors">{item.label}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Ministries Dropdown */}
            <div ref={ministriesRef} className="relative" onMouseEnter={() => setMinistriesOpen(true)} onMouseLeave={() => setMinistriesOpen(false)}>
              <Link to="/ministries" className={linkBase(isMinistriesActive)}>
                Ministries
                <i className={`ri-arrow-down-s-line text-sm transition-transform duration-200 ${ministriesOpen ? "rotate-180" : ""}`} />
                <span className={underline(isMinistriesActive)} />
              </Link>
              <div className={dropdownPanel(ministriesOpen, true)} style={{ boxShadow: "0 8px 30px rgba(0,0,0,0.08)" }}>
                <div className="p-1.5">
                  {ministriesDropdown.map((item) => (
                    <Link key={item.path} to={item.path} className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-amber-50 transition-colors group cursor-pointer">
                      <div className="w-7 h-7 flex items-center justify-center bg-amber-50 rounded-lg group-hover:bg-amber-100 transition-colors flex-shrink-0">
                        <i className={`${item.icon} text-amber-500 text-sm`} />
                      </div>
                      <span className="text-stone-700 text-sm font-medium group-hover:text-amber-600 transition-colors">{item.label}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Interactive */}
            <Link to="/interactive" className={linkBase(location.pathname === "/interactive")}>
              Interactive
              <span className={underline(location.pathname === "/interactive")} />
            </Link>

            {/* Events Dropdown */}
            <div ref={eventsRef} className="relative" onMouseEnter={() => setEventsOpen(true)} onMouseLeave={() => setEventsOpen(false)}>
              <Link to="/events" className={linkBase(isEventsActive)}>
                Events
                <i className={`ri-arrow-down-s-line text-sm transition-transform duration-200 ${eventsOpen ? "rotate-180" : ""}`} />
                <span className={underline(isEventsActive)} />
              </Link>
              <div className={dropdownPanel(eventsOpen)} style={{ boxShadow: "0 8px 30px rgba(0,0,0,0.08)" }}>
                <div className="p-1.5">
                  {eventsDropdown.map((item) => (
                    <Link key={item.path} to={item.path} className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-amber-50 transition-colors group cursor-pointer">
                      <div className="w-7 h-7 flex items-center justify-center bg-amber-50 rounded-lg group-hover:bg-amber-100 transition-colors flex-shrink-0">
                        <i className={`${item.icon} text-amber-500 text-sm`} />
                      </div>
                      <span className="text-stone-700 text-sm font-medium group-hover:text-amber-600 transition-colors">{item.label}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Donation & Contact */}
            {navLinks.slice(2).map((link) => {
              const active = location.pathname === link.path;
              return (
                <Link key={link.path} to={link.path} className={linkBase(active)}>
                  {link.label}
                  <span className={underline(active)} />
                </Link>
              );
            })}

            <Link to="/plan-visit" className="ml-2 px-4 py-2 bg-amber-500 hover:bg-amber-600 text-white text-xs font-bold rounded-lg transition-all duration-200 cursor-pointer whitespace-nowrap">
              Plan A Visit
            </Link>
          </nav>

          {/* Hamburger */}
          <button
            className={`lg:hidden min-w-[44px] min-h-[44px] w-11 h-11 flex items-center justify-center rounded-xl transition-colors duration-200 cursor-pointer ${scrolled || !isHome ? "text-stone-800 hover:bg-stone-100" : "text-white hover:bg-white/10"}`}
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            <i className={`text-2xl ${menuOpen ? "ri-close-line" : "ri-menu-3-line"}`} />
          </button>
        </div>
      </header>

      {/* Mobile / Tablet Menu — OUTSIDE header to avoid backdrop-blur containing block issue */}
      <div
        className={`lg:hidden fixed inset-0 z-40 transition-all duration-300 ${menuOpen ? "pointer-events-auto" : "pointer-events-none"}`}
        style={{ top: "68px" }}
      >
        <div
          className={`absolute inset-0 bg-stone-900/50 transition-opacity duration-300 ${menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
          onClick={() => setMenuOpen(false)}
        />
        <div className={`absolute top-0 right-0 h-full w-80 max-w-[90vw] bg-white overflow-y-auto transition-transform duration-300 ${menuOpen ? "translate-x-0" : "translate-x-full"}`}>
          <div className="px-5 py-5 flex flex-col gap-1">
            {/* Address */}
            <div className="px-3 py-3 mb-2 bg-stone-50 rounded-xl text-xs text-stone-500 space-y-1.5">
              <p className="flex items-center gap-2"><i className="ri-map-pin-2-line text-amber-500" />St Andrews Methodist Church, Beeston, Leeds</p>
              <p className="flex items-center gap-2"><i className="ri-time-line text-amber-500" />Sun 1:00pm – 4:00pm</p>
            </div>

            <Link to="/" onClick={() => setMenuOpen(false)} className={`py-3.5 px-4 rounded-xl text-sm font-medium transition-colors cursor-pointer min-h-[48px] flex items-center ${location.pathname === "/" ? "bg-amber-50 text-amber-700" : "text-stone-700 hover:bg-stone-50"}`}>Home</Link>

            {/* About accordion */}
            <div>
              <button onClick={() => setMobileAboutOpen((v) => !v)} className={`w-full flex items-center justify-between py-3.5 px-4 rounded-xl text-sm font-medium transition-colors cursor-pointer min-h-[48px] ${isAboutActive ? "bg-amber-50 text-amber-700" : "text-stone-700 hover:bg-stone-50"}`}>
                <span>About Us</span>
                <i className={`ri-arrow-down-s-line text-lg transition-transform duration-200 ${mobileAboutOpen ? "rotate-180" : ""}`} />
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${mobileAboutOpen ? "max-h-72" : "max-h-0"}`}>
                <div className="pl-3 mt-1 flex flex-col gap-0.5">
                  {aboutDropdown.map((item) => (
                    <Link key={item.path} to={item.path} onClick={() => setMenuOpen(false)} className="flex items-center gap-2.5 py-3 px-4 rounded-xl text-sm text-stone-600 hover:bg-amber-50 hover:text-amber-700 transition-colors cursor-pointer min-h-[48px]">
                      <i className={`${item.icon} text-amber-400`} />{item.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Ministries accordion */}
            <div>
              <button onClick={() => setMobileMinistriesOpen((v) => !v)} className={`w-full flex items-center justify-between py-3.5 px-4 rounded-xl text-sm font-medium transition-colors cursor-pointer min-h-[48px] ${isMinistriesActive ? "bg-amber-50 text-amber-700" : "text-stone-700 hover:bg-stone-50"}`}>
                <span>Ministries</span>
                <i className={`ri-arrow-down-s-line text-lg transition-transform duration-200 ${mobileMinistriesOpen ? "rotate-180" : ""}`} />
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${mobileMinistriesOpen ? "max-h-[460px]" : "max-h-0"}`}>
                <div className="pl-3 mt-1 flex flex-col gap-0.5">
                  {ministriesDropdown.map((item) => (
                    <Link key={item.path} to={item.path} onClick={() => setMenuOpen(false)} className="flex items-center gap-2.5 py-3 px-4 rounded-xl text-sm text-stone-600 hover:bg-amber-50 hover:text-amber-700 transition-colors cursor-pointer min-h-[48px]">
                      <i className={`${item.icon} text-amber-400`} />{item.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link to="/interactive" onClick={() => setMenuOpen(false)} className={`py-3.5 px-4 rounded-xl text-sm font-medium transition-colors cursor-pointer min-h-[48px] flex items-center ${location.pathname === "/interactive" ? "bg-amber-50 text-amber-700" : "text-stone-700 hover:bg-stone-50"}`}>Interactive</Link>

            {/* Events accordion */}
            <div>
              <button onClick={() => setMobileEventsOpen((v) => !v)} className={`w-full flex items-center justify-between py-3.5 px-4 rounded-xl text-sm font-medium transition-colors cursor-pointer min-h-[48px] ${isEventsActive ? "bg-amber-50 text-amber-700" : "text-stone-700 hover:bg-stone-50"}`}>
                <span>Events</span>
                <i className={`ri-arrow-down-s-line text-lg transition-transform duration-200 ${mobileEventsOpen ? "rotate-180" : ""}`} />
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${mobileEventsOpen ? "max-h-40" : "max-h-0"}`}>
                <div className="pl-3 mt-1 flex flex-col gap-0.5">
                  {eventsDropdown.map((item) => (
                    <Link key={item.path} to={item.path} onClick={() => setMenuOpen(false)} className="flex items-center gap-2.5 py-3 px-4 rounded-xl text-sm text-stone-600 hover:bg-amber-50 hover:text-amber-700 transition-colors cursor-pointer min-h-[48px]">
                      <i className={`${item.icon} text-amber-400`} />{item.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link to="/donation" onClick={() => setMenuOpen(false)} className={`py-3.5 px-4 rounded-xl text-sm font-medium transition-colors cursor-pointer min-h-[48px] flex items-center ${location.pathname === "/donation" ? "bg-amber-50 text-amber-700" : "text-stone-700 hover:bg-stone-50"}`}>Donation</Link>
            <Link to="/contact" onClick={() => setMenuOpen(false)} className={`py-3.5 px-4 rounded-xl text-sm font-medium transition-colors cursor-pointer min-h-[48px] flex items-center ${location.pathname === "/contact" ? "bg-amber-50 text-amber-700" : "text-stone-700 hover:bg-stone-50"}`}>Contact</Link>

            <Link to="/plan-visit" onClick={() => setMenuOpen(false)} className="mt-3 py-3.5 px-4 bg-amber-500 hover:bg-amber-600 text-white text-sm font-bold rounded-xl text-center transition-colors cursor-pointer whitespace-nowrap min-h-[48px] flex items-center justify-center">
              Plan A Visit
            </Link>

            {/* Social */}
            <div className="mt-4 pt-4 border-t border-stone-100 flex items-center gap-3 px-2">
              {[{ icon: "ri-facebook-fill", href: "#" }, { icon: "ri-youtube-fill", href: "#" }, { icon: "ri-instagram-line", href: "#" }].map((s) => (
                <a key={s.icon} href={s.href} className="w-11 h-11 flex items-center justify-center bg-stone-100 hover:bg-amber-50 rounded-xl text-stone-500 hover:text-amber-600 transition-colors cursor-pointer">
                  <i className={`${s.icon} text-lg`} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
