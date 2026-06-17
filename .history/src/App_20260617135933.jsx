import Navbar from "./components/layout/Navbar";
import Hero from "./components/home/Hero";
import ProblemSection from "./components/home/ProblemSection";
import FeaturesSection from "./components/home/SolutionSection";
import HowItWorks from "./components/home/HowItWorks";
import Footer from "./components/layout/Footer";
import Home from "./Pages/Home";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <ProblemSection />
      <FeaturesSection />
      <HowItWorks />
      <Footer />
      <Home />
    </>
  );
}

export default App;