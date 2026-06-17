import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Pricing from "./pages/Pricing";
import Claims from "./pages/Claims";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import OtpVerification from "./pages/OtpVerification";
import Onboarding from "./pages/Onboarding";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/claims" element={<Claims />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/otp" element={<OtpVerification />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;