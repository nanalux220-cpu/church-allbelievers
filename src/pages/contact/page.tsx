import { useState } from "react";
import Navbar from "../../components/feature/Navbar";
import Footer from "../../components/feature/Footer";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setError("Please fill in all required fields.");
      return;
    }
    if (form.message.length > 500) {
      setError("Message must be 500 characters or fewer.");
      return;
    }
    setSubmitting(true);
    const params = new URLSearchParams();
    Object.entries(form).forEach(([k, v]) => params.append(k, v));
    try {
      await fetch("https://readdy.ai/api/form/d6socij4rjv84lqbqhn0", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: params.toString(),
      });
      setSubmitted(true);
    } catch {
      setError("Something went wrong. Please try again or email us directly.");
    } finally {
      setSubmitting(false);
    }
  };

  const contactDetails = [
    {
      icon: "ri-map-pin-2-line",
      label: "Address",
      value: "St Andrews Methodist Church, 10 Cardinal Road, Beeston, Leeds LS11 8AL",
    },
    { icon: "ri-phone-line", label: "Phone", value: "+44 7825 542566" },
    { icon: "ri-mail-line", label: "Email", value: "allbelieverschapel@outlook.com" },
    { icon: "ri-time-line", label: "Sunday Service", value: "1:00pm – 4:00pm" },
    { icon: "ri-calendar-check-line", label: "Saturday Prayers", value: "11:00am – 12:00pm" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero */}
        <section className="relative pt-24 sm:pt-32 pb-14 sm:pb-20 px-4 sm:px-6 overflow-hidden">
          <img
            src="https://readdy.ai/api/search-image?query=warm%20welcoming%20church%20entrance%20open%20doors%20inviting%20pathway%20sunlight%20people%20walking%20in%20friendly%20greeting%20community%20christian%20church%20exterior%20leeds%20england%20peaceful&width=1440&height=500&seq=contact001&orientation=landscape"
            alt="Contact Us"
            className="absolute inset-0 w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-stone-900/65 pointer-events-none" />
          <div className="relative z-10 max-w-4xl mx-auto text-center w-full">
            <span className="text-amber-300 text-xs font-bold uppercase tracking-[4px]">Get in Touch</span>
            <h1
              className="text-white font-extrabold mt-4 leading-tight"
              style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
            >
              Contact Us
            </h1>
            <p className="text-white/75 mt-4 text-base font-light max-w-xl mx-auto leading-relaxed">
              We&apos;d love to hear from you. Whether you have a question, want to plan a visit, or just want to say hello — reach out anytime.
            </p>
          </div>
        </section>

        {/* Contact Grid */}
        <section className="py-14 sm:py-20 px-4 sm:px-6 bg-stone-50">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14">
            {/* Left – Info */}
            <div>
              <span className="text-amber-600 text-xs font-bold uppercase tracking-[3px]">Our Details</span>
              <h2
                className="mt-3 mb-8 font-extrabold text-stone-900"
                style={{ fontSize: "clamp(1.6rem, 3vw, 2.2rem)" }}
              >
                We&apos;d Love to Connect
              </h2>
              <div className="space-y-5 mb-10">
                {contactDetails.map((item) => (
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
              {/* Social Links */}
              <div className="pt-6 border-t border-stone-200">
                <p className="text-stone-500 text-xs font-semibold uppercase tracking-widest mb-4">Follow Us</p>
                <div className="flex gap-3">
                  {[
                    { icon: "ri-facebook-fill", label: "Facebook", href: "#" },
                    { icon: "ri-youtube-fill", label: "YouTube", href: "#" },
                    { icon: "ri-instagram-line", label: "Instagram", href: "#" },
                  ].map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      aria-label={s.label}
                      className="w-10 h-10 flex items-center justify-center bg-white border border-stone-200 rounded-xl text-stone-600 hover:bg-amber-50 hover:text-amber-600 hover:border-amber-200 transition-colors cursor-pointer"
                    >
                      <i className={`${s.icon} text-base`} />
                    </a>
                  ))}
                </div>
              </div>
              {/* Map */}
              <div className="mt-8 sm:mt-10 rounded-2xl overflow-hidden border border-stone-200" style={{ height: "220px" }}>
                <iframe
                  title="All Believers Chapel location"
                  src="https://maps.google.com/maps?q=St+Andrews+Methodist+Church,+10+Cardinal+Road,+Beeston,+Leeds,+LS11+8AL&output=embed"
                  className="w-full h-full border-0"
                  allowFullScreen
                  loading="lazy"
                />
              </div>
            </div>

            {/* Right – Form */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-stone-100">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 flex items-center justify-center bg-amber-50 rounded-full mx-auto mb-5">
                    <i className="ri-checkbox-circle-line text-amber-500 text-3xl" />
                  </div>
                  <h3
                    className="font-semibold text-stone-900 mb-3 text-xl"
                  >
                    Message Sent!
                  </h3>
                  <p className="text-stone-500 text-sm font-light leading-relaxed max-w-xs mx-auto">
                    Thank you for reaching out. We will get back to you within 48 hours. God bless you!
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); setForm({ name: "", email: "", phone: "", subject: "", message: "" }); }}
                    className="mt-6 text-sm text-amber-600 hover:text-amber-700 font-medium cursor-pointer whitespace-nowrap"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form
                  data-readdy-form
                  onSubmit={handleSubmit}
                  className="space-y-5"
                >
                  <h3
                    className="font-semibold text-stone-900 text-xl mb-6"
                  >
                    Send Us a Message
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-stone-600 mb-1.5">
                        Full Name <span className="text-amber-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        className="w-full px-4 py-2.5 rounded-lg border border-stone-200 text-sm text-stone-800 bg-stone-50 focus:outline-none focus:border-amber-400 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-stone-600 mb-1.5">Phone (optional)</label>
                      <input
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="+44..."
                        className="w-full px-4 py-2.5 rounded-lg border border-stone-200 text-sm text-stone-800 bg-stone-50 focus:outline-none focus:border-amber-400 transition-colors"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-stone-600 mb-1.5">
                      Email Address <span className="text-amber-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      className="w-full px-4 py-2.5 rounded-lg border border-stone-200 text-sm text-stone-800 bg-stone-50 focus:outline-none focus:border-amber-400 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-stone-600 mb-1.5">Subject</label>
                    <select
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 rounded-lg border border-stone-200 text-sm text-stone-800 bg-stone-50 focus:outline-none focus:border-amber-400 transition-colors cursor-pointer"
                    >
                      <option value="">Select a subject</option>
                      <option value="General Enquiry">General Enquiry</option>
                      <option value="Plan A Visit">Plan A Visit</option>
                      <option value="Prayer Request">Prayer Request</option>
                      <option value="Giving & Donations">Giving &amp; Donations</option>
                      <option value="Ministries">Ministries</option>
                      <option value="Events">Events</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-stone-600 mb-1.5">
                      Message <span className="text-amber-500">*</span>
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      placeholder="How can we help you?"
                      rows={5}
                      maxLength={500}
                      className="w-full px-4 py-2.5 rounded-lg border border-stone-200 text-sm text-stone-800 bg-stone-50 focus:outline-none focus:border-amber-400 transition-colors resize-none"
                    />
                    <p className="text-right text-xs text-stone-400 mt-1">{form.message.length}/500</p>
                  </div>
                  {error && (
                    <p className="text-red-500 text-xs bg-red-50 rounded-lg px-4 py-2.5">{error}</p>
                  )}
                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full py-3 bg-amber-500 hover:bg-amber-600 disabled:opacity-50 text-white text-sm font-semibold rounded-lg transition-colors cursor-pointer whitespace-nowrap"
                  >
                    {submitting ? "Sending..." : "Send Message"}
                  </button>
                </form>
              )}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
