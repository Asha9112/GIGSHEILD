import Navbar from "./components/layout/Navbar";
import Hero from "./components/home/Hero";
import ProblemSection from "./components/home/ProblemSection";
import FeaturesSection from "./components/home/FeaturesSection";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <ProblemSection />
      <FeaturesSection />
    </>
  );
}

export default App;