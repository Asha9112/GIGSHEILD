import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Pricing from "./pages/Pricing";
// import Claims from "./pages/Claims";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import OtpVerification from "./pages/OtpVerification";
import Onboarding from "./pages/Onboarding";
import WorkerType from "./pages/WorkerType";
import Plans from "./pages/Pricing";
import Complete from "./pages/Complete";
import Dashboard from "./pages/Dashboard";
import Claim from "./pages/Claim";
import WorkerId from "./pages/WorkerId";
import ClaimSuccess from "./pages/ClaimSuccess";
import VerifyWorker from "./pages/VerifyWorker";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pricing" element={<Pricing />} />
        {/* <Route path="/claims" element={<Claims />} /> */}
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/otp" element={<OtpVerification />} />
        <Route path="/onboarding" element={<Onboarding />} />
        <Route path="/worker-type" element={<WorkerType />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/complete" element={<Complete />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/claims" element={<Claim />} />
        <Route path="/worker-id" element={<WorkerId />} />
        <Route path="/claim-success" element={<ClaimSuccess />} />
        <Route
  path="/verify-worker"
  element={<VerifyWorker />}
/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;