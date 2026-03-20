import Navbar from "../../components/feature/Navbar";
import Footer from "../../components/feature/Footer";
import HeroSection from "./components/HeroSection";
import WelcomeSection from "./components/WelcomeSection";
import MinistriesPreview from "./components/MinistriesPreview";
import ScriptureBanner from "./components/ScriptureBanner";
import BoardSection from "./components/BoardSection";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <WelcomeSection />
        <ScriptureBanner />
        <MinistriesPreview />
        <BoardSection />
      </main>
      <Footer />
    </div>
  );
}
