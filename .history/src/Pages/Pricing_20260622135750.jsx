import { useNavigate } from "react-router-dom";
import "../styles/.css";

function Plans() {
  const navigate = useNavigate();

  return (
    <div className="plans-page">

      <h1>Choose Your Protection Plan</h1>

      <p className="plans-subtitle">
        Affordable protection designed for India's gig workers
      </p>

      <div className="plans-grid">

        <div
          className="plan-card"
          onClick={() => navigate("/complete")}
        >
          <h2>Free</h2>
          <h3>₹0</h3>

          <p>Digital Worker ID</p>
          <p>WhatsApp Support</p>
          <p>Emergency Contact</p>

          <button className="cta-btn">
            Join Free
          </button>
        </div>

        <div
          className="plan-card"
          onClick={() => navigate("/complete")}
        >
          <h2>Protect</h2>
          <h3>₹39/month</h3>

          <p>₹1L Accident Cover</p>
          <p>WhatsApp Claims</p>
          <p>Nominee Registration</p>

          <button className="cta-btn">
            Get Started
          </button>
        </div>

        <div
          className="plan-card popular-plan"
          onClick={() => navigate("/complete")}
        >
          <div className="popular-tag">
            MOST POPULAR
          </div>

          <h2>Plus</h2>
          <h3>₹69/month</h3>

          <p>₹2L Accident Cover</p>
          <p>Hospital Cash</p>
          <p>Worker Dashboard</p>

          <button className="cta-btn">
            Get Started
          </button>
        </div>

        <div
          className="plan-card"
          onClick={() => navigate("/complete")}
        >
          <h2>Pro</h2>
          <h3>₹99/month</h3>

          <p>₹3L+ Coverage</p>
          <p>Income Protection</p>
          <p>Priority Claims</p>

          <button className="cta-btn">
            Get Started
          </button>
        </div>

      </div>

    </div>
  );
}

export default Plans;