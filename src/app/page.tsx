import Header from "@/components/Header";
import HeroSlider from "@/components/HeroSlider";
import WhoWeAre from "@/components/WhoWeAre";
import ProductsSolutions from "@/components/ProductsSolutions";
import PowerBeyond from "@/components/PowerBeyond";
import CTASection from "@/components/CTASection";
import WhyChooseUs from "@/components/WhyChooseUs";
import GlobalPresence from "@/components/GlobalPresence";
import LatestUpdates from "@/components/LatestUpdates";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSlider />
        <WhoWeAre />
        <ProductsSolutions />
        <PowerBeyond />
        <CTASection />
        <WhyChooseUs />
        <GlobalPresence />
        <LatestUpdates />
      </main>
      <Footer />
    </>
  );
}
