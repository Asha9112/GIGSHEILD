import {
  FaShieldAlt,
  FaIdCard,
  FaFileMedical,
  FaUserFriends,
  FaPhoneAlt,
  FaCheckCircle,
} from "react-icons/fa";

import "../styles/dashboard.css";

function Dashboard() {
  return (
    <div className="dashboard-page">

      <div className="welcome-card">

        <div>
          <h1>Welcome Back, Ramesh 👋</h1>

          <p>
            Your GigShield protection is active and your
            coverage is ready whenever you need it.
          </p>
        </div>

        <div className="status-badge">
          <FaCheckCircle />
          Active
        </div>

      </div>

      <div className="coverage-card">

        <div>
          <h2>Plus Plan</h2>

          <p>Coverage Amount</p>

          <h1>₹2,00,000</h1>
        </div>

        <div>
          <p>Membership ID</p>
          <h3>GS-2026-0001</h3>
        </div>

      </div>

      <div className="dashboard-actions">

        <div className="action-card">
          <FaIdCard />
          <h3>Worker ID</h3>
          <p>View your digital ID card</p>
        </div>

        <div className="action-card">
          <FaFileMedical />
          <h3>Claims</h3>
          <p>Submit and track claims</p>
        </div>

        <div className="action-card">
          <FaUserFriends />
          <h3>Nominee</h3>
          <p>Manage nominee details</p>
        </div>

        <div className="action-card">
          <FaPhoneAlt />
          <h3>Support</h3>
          <p>Get help instantly</p>
        </div>

      </div>

      <div className="protection-summary">

        <h2>Your Protection Benefits</h2>

        <div className="benefit-list">

          <div>
            <FaShieldAlt />
            Accident Protection
          </div>

          <div>
            <FaShieldAlt />
            Hospital Cash Benefit
          </div>

          <div>
            <FaShieldAlt />
            24x7 Support
          </div>

          <div>
            <FaShieldAlt />
            Fast Claim Processing
          </div>

        </div>

      </div>

    </div>
  );
}

export default Dashboard;