import { useNavigate } from "react-router-dom";
import {
  FaUserShield,
  FaShieldAlt,
  FaStar,
  FaCrown,
} from "react-icons/fa";

import "../styles/pricing.css";

function Plans() {
  const navigate = useNavigate();

  return (
    <div className="plans-page">

      <div className="pricing-label">
        GIGSHIELD PLANS
      </div>

      <h1>Choose Your Protection Plan</h1>

      <p className="plans-subtitle">
        Affordable protection designed for India's gig workers
      </p>

      <div className="plans-grid">

        {/* FREE */}

        <div
          className="plan-card free"
          onClick={() => navigate("/complete")}
        >
          <div className="plan-icon">
            <FaUserShield />
          </div>

          <h3>Free</h3>

          <div className="price">
            ₹0
          </div>

          <p className="billing">
            Lifetime Access
          </p>

          <div className="plan-divider"></div>

          <ul className="plan-features">
            <li>Digital Worker ID</li>
            <li>WhatsApp Support</li>
            <li>Emergency Contact</li>
            <li>Basic Verification</li>
            <li>Community Access</li>
          </ul>

          <button className="plan-btn">
            Join Free
          </button>
        </div>

        {/* PROTECT */}

        <div
          className="plan-card protect"
          onClick={() => navigate("/payment")}
        >
          <div className="plan-icon">
            <FaShieldAlt />
          </div>

          <h3>Protect</h3>

          <div className="price">
            ₹39
            <span>/month</span>
          </div>

          <p className="billing">
            Billed Monthly
          </p>

          <div className="plan-divider"></div>

          <ul className="plan-features">
            <li>₹1L Accident Cover</li>
            <li>WhatsApp Claims</li>
            <li>Nominee Registration</li>
            <li>Digital Claim Tracking</li>
            <li>Priority Assistance</li>
          </ul>

          <button className="plan-btn">
            Get Started
          </button>
        </div>

        {/* PLUS */}

        <div
          className="plan-card popular-plan plus"
          onClick={() => navigate("/payment")}
        >
          <div className="popular-ribbon">
            MOST POPULAR
          </div>

          <div className="plan-icon">
            <FaStar />
          </div>

          <h3>Plus</h3>

          <div className="price">
            ₹69
            <span>/month</span>
          </div>

          <p className="billing">
            Best Value Plan
          </p>

          <div className="plan-divider"></div>

          <ul className="plan-features">
            <li>₹2L Accident Cover</li>
            <li>Hospital Cash Benefit</li>
            <li>Worker Dashboard</li>
            <li>Fast Claim Processing</li>
            <li>Nominee Protection</li>
            <li>24x7 Support</li>
          </ul>

          <button className="plan-btn">
            Choose Plus
          </button>
        </div>

        {/* PRO */}

        <div
          className="plan-card pro"
          onClick={() => navigate("/")}
        >
          <div className="plan-icon">
            <FaCrown />
          </div>

          <h3>Pro</h3>

          <div className="price">
            ₹99
            <span>/month</span>
          </div>

          <p className="billing">
            Maximum Protection
          </p>

          <div className="plan-divider"></div>

          <ul className="plan-features">
            <li>₹3L+ Coverage</li>
            <li>Income Protection</li>
            <li>Priority Claims</li>
            <li>Family Benefits</li>
            <li>Dedicated Support</li>
            <li>Premium Dashboard</li>
          </ul>

          <button className="plan-btn">
            Go Pro
          </button>
        </div>

      </div>

    </div>
  );
}

export default Plans;