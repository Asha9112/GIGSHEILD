import Navbar from "../components/layout/Navbar";
import Hero from "../components/home/Hero";
import TrustBar from "../components/home/TrustBar";
import ProblemSection from "../components/home/ProblemSection";
import SolutionSection from "../components/home/SolutionSection";
import HowItWorks from "../components/home/HowItWorks";
import PricingPreview from "../components/home/PricingPreview";
import Footer from "../components/layout/Footer";
import Testimonials from "../components/home/Testimonials";
import FAQ from "../components/home/FAQ";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <TrustBar />
      <ProblemSection />
      <SolutionSection />
      <HowItWorks />
      <PricingPreview />
      <Testimonials />
      
      <Footer />

    </>
  );
}

export default Home;