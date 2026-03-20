import Navbar from "../../components/feature/Navbar";
import Footer from "../../components/feature/Footer";
import PlanYourVisit from "../home/components/PlanYourVisit";

export default function PlanVisitPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 pt-20">
        {/* Hero Banner */}
        <div className="relative w-full overflow-hidden" style={{ minHeight: "220px" }}>
          <img
            src="https://readdy.ai/api/search-image?query=warm%20welcoming%20church%20entrance%20foyer%20hallway%20with%20soft%20natural%20light%20wooden%20floors%20elegant%20interior%20modern%20christian%20church%20building%20interior%20photography%20inviting%20atmosphere%20first%20time%20visitor%20perspective%20wide%20angle&width=1440&height=400&seq=planvisit001&orientation=landscape"
            alt="Plan Your Visit to All Believers Chapel"
            className="absolute inset-0 w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-stone-900/60 via-stone-900/50 to-stone-900/60 pointer-events-none" />
          <div className="relative z-10 flex flex-col items-center justify-center h-full py-16 px-4 text-center">
            <span className="text-amber-300 text-xs font-bold uppercase tracking-[4px] mb-3">We&apos;d love to see you</span>
            <h1
              className="text-white font-bold mb-3"
              style={{ fontFamily: "'Inter', sans-serif", fontSize: "clamp(1.8rem, 5vw, 3rem)" }}
            >
              Plan Your Visit
            </h1>
            <p className="text-white/75 text-sm max-w-md mx-auto leading-relaxed">
              Everything you need to know before joining us for the first time — we&apos;re so glad you&apos;re coming!
            </p>
          </div>
        </div>

        {/* Plan Your Visit Content */}
        <PlanYourVisit />
      </main>
      <Footer />
    </div>
  );
}
