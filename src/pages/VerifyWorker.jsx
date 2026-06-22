import { FaCheckCircle, FaPhoneAlt, FaShieldAlt } from "react-icons/fa";
import "../styles/verifyworker.css";

function VerifyWorker() {
  return (
    <div className="verify-page">

      <div className="verify-card">

        <div className="verified-header">

          <FaCheckCircle className="verify-icon" />

          <h1>Verified GigShield Worker</h1>

          <p>
            This worker is currently registered and protected
            under GigShield.
          </p>

        </div>

        <div className="worker-profile">

          <div className="worker-avatar">
            RK
          </div>

          <h2>Ramesh K</h2>

          <span className="status-badge">
            Active Plan
          </span>

        </div>

        <div className="info-grid">

          <div className="info-box">
            <span>Worker ID</span>
            <h3>GSW125678</h3>
          </div>

          <div className="info-box">
            <span>Blood Group</span>
            <h3>O+</h3>
          </div>

          <div className="info-box">
            <span>Plan</span>
            <h3>Plus Plan</h3>
          </div>

          <div className="info-box">
            <span>Coverage</span>
            <h3>₹2,00,000</h3>
          </div>

        </div>

        <div className="emergency-section">

          <FaPhoneAlt />

          <div>
            <h3>Emergency Contact</h3>
            <p>9876543210</p>
          </div>

        </div>

        <div className="gigshield-support">

          <FaShieldAlt />

          <div>
            <h3>GigShield Helpline</h3>
            <p>1800 889 5353</p>
          </div>

        </div>

      </div>

    </div>
  );
}

export default VerifyWorker;