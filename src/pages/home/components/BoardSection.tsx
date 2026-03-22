const boardMembers = [
  {
    name: "Rev. George Abakah",
    role: "Founder & Senior Pastor",
    img: "https://storage.readdy-site.link/project_files/00d6bb05-2c0a-47a0-8a61-fb9c4ae4c88b/b308b9ee-e8f9-4e41-9e65-b74e514d4804_WhatsApp-Image-2026-03-17-at-4.54.29-PM.jpeg?v=2c568c01b6b4c6dbac907a586cf5f16d",
  },
  {
    name: "Grace Boateng",
    role: "Pastor Wife",
    img: "https://storage.readdy-site.link/project_files/00d6bb05-2c0a-47a0-8a61-fb9c4ae4c88b/38f91e03-422e-4b56-9426-aa7fc5d27548_WhatsApp-Image-2026-03-20-at-5.54.41-PM.jpeg?v=a4dbfee53e247909e9a421e1dfea8a19",
  },
  {
    name: "Evan. Kwadwo Abeagye-Asare",
    role: "Senior Evangelist",
    img: "https://static.readdy.ai/image/4428baccc60709cd2682246ca105b4f4/ce593dd0965a025d704e6c7350f444c6.jpeg",
  },
  {
    name: "Sis. Grace Mensah",
    role: "Evangelist Wife",
    img: "https://readdy.ai/api/search-image?query=professional%20portrait%20african%20female%20church%20board%20member%20formal%20attire%20confident%20warm%20smile%20neutral%20background%20high%20quality%20photography%20trustworthy%20community%20leader&width=300&height=300&seq=board004&orientation=squarish",
  },
];

export default function BoardSection() {
  return (
    <section className="py-16 sm:py-20 md:py-28 px-4 sm:px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10 sm:mb-14">
          <span className="text-amber-600 text-xs font-bold uppercase tracking-[3px]">Leadership</span>
          <h2
            className="mt-3 font-extrabold text-stone-900"
            style={{ fontSize: "clamp(1.6rem, 3vw, 2.5rem)" }}
          >
            Meet Our Church Board
          </h2>
          <p className="mt-4 text-stone-500 max-w-xl mx-auto text-sm font-light leading-relaxed px-4">
            Our dedicated leadership team is committed to serving the congregation and the wider community with wisdom, integrity, and love.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-5 sm:gap-6 md:gap-8">
          {boardMembers.map((m) => (
            <div key={m.name} className="text-center group">
              <div
                className="relative mx-auto rounded-2xl overflow-hidden mb-3 sm:mb-4 transition-transform duration-300 group-hover:-translate-y-1"
                style={{ width: "100%", aspectRatio: "1/1" }}
              >
                <img src={m.img} alt={m.name} className="w-full h-full object-cover object-top" />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <h4 className="text-stone-900 font-semibold text-xs sm:text-sm leading-tight">
                {m.name}
              </h4>
              <p className="text-amber-600 text-xs mt-1">{m.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
