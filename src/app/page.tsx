import Header from "@/components/Header";
import HeroSlider from "@/components/HeroSlider";
import WhoWeAre from "@/components/WhoWeAre";
import ProductsSolutions from "@/components/ProductsSolutions";
import PowerBeyond from "@/components/PowerBeyond";
import BusinessBenefits from "@/components/BusinessBenefits";
import WhyChooseUs from "@/components/WhyChooseUs";
import ContactForm from "@/components/ContactForm";
import LatestUpdates from "@/components/LatestUpdates";
import EmailSubscription from "@/components/EmailSubscription";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSlider />
        <WhoWeAre />
        <WhyChooseUs />
        <ProductsSolutions />
        <PowerBeyond />
        <BusinessBenefits />
        <ContactForm />
        <LatestUpdates />
      </main>
      <EmailSubscription />
      <Footer />
    </>
  );
}
