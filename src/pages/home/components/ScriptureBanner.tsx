export default function ScriptureBanner() {
  return (
    <section className="relative py-24 px-6 overflow-hidden">
      {/* Background */}
      <img
        src="https://readdy.ai/api/search-image?query=abstract%20warm%20golden%20bokeh%20light%20rays%20dark%20warm%20textured%20background%20spiritual%20atmospheric%20ambient%20glowing%20particles%20deep%20rich%20earthy%20tones%20contemplative%20mood%20dramatic%20lighting%20church%20worship&width=1440&height=400&seq=scripture001&orientation=landscape"
        alt=""
        className="absolute inset-0 w-full h-full object-cover object-center"
      />
      <div className="absolute inset-0 bg-stone-900/80" />

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <i className="ri-double-quotes-l text-amber-400 text-5xl opacity-60 mb-4 block" />
        <blockquote
          className="text-white font-semibold leading-relaxed mb-6"
          style={{ fontSize: "clamp(1.4rem, 3vw, 2.2rem)" }}
        >
          Pursue the Lord and his strength; seek his face always!
        </blockquote>
        <cite className="text-amber-300 text-sm font-semibold tracking-widest uppercase not-italic">
          1 Chronicles 16:11
        </cite>
      </div>
    </section>
  );
}
