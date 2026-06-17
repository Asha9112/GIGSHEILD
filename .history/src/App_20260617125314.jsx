import Navbar from "./components/layout/Navbar";
import Hero from "./components/home/Hero";
import ProblemSection from "./components/home/ProblemSection";
import FeaturesSection from "./components/home/FeaturesSection";
import HowItWorks from "./components/home/HowItWorks";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <ProblemSection />
      <FeaturesSection />
      <HowItWorks />
      <Footer />
    </>
  );
}

export default App;