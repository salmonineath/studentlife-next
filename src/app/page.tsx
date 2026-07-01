import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import TrustBar from "./components/TrustBar";
import FeatureSection from "./components/FeatureSection";
import AIToolsSection from "./components/AIToolsSection";
import BannerSection from "./components/BannerSection";
import CTASection from "./components/CTASection";
import Footer from "./components/Footer";
import NetworkToast from "./components/NetworkToast";

export default function Home() {
  return (
    <div className="min-h-screen overflow-hidden">
      <Header />
      <main className="pt-[68px] lg:pt-[80px]">
        <HeroSection />
        <TrustBar />
        <FeatureSection />
        <AIToolsSection />
        <BannerSection />
        <CTASection />
        <Footer />
      </main>
      <NetworkToast />
    </div>
  );
}
