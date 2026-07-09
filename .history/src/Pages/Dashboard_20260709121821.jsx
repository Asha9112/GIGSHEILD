import { useNavigate } from "react-router-dom";

import Button from "../components/Button/Button";

import {
  FaArrowRight,
  FaShieldAlt,
  FaIdCard,
  FaFileMedical,
  FaUserFriends,
  FaPhoneAlt,
  FaCheckCircle,
} from "react-icons/fa";

import "../styles/dashboard.css";

function Dashboard() {
  const navigate = useNavigate();

  return (
    <div className="dashboard-page">

      {/* =========================================
          TEMPORARY BUTTON COMPONENT TEST
          Check UI, then we can remove this section
      ========================================= */}

      <div
        style={{
          display: "flex",
          gap: "15px",
          padding: "20px 0",
          flexWrap: "wrap",
          alignItems: "center",
        }}
      >
        <Button variant="primary">
          Primary Button
        </Button>

        <Button variant="secondary">
          Secondary Button
        </Button>

        <Button variant="success">
          Success Button
        </Button>

        <Button variant="outline">
          Outline Button
        </Button>

        <Button
          variant="primary"
          icon={<FaArrowRight />}
          iconPosition="right"
        >
          Continue
        </Button>
      </div>


      {/* =========================================
          WELCOME SECTION
      ========================================= */}

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
          <span>Active</span>
        </div>

      </div>


      {/* =========================================
          COVERAGE CARD
      ========================================= */}

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


      {/* =========================================
          QUICK ACTIONS
      ========================================= */}

      <div className="dashboard-actions">

        {/* WORKER ID */}

        <div
          className="action-card"
          onClick={() => navigate("/worker-id")}
        >
          <FaIdCard />

          <h3>Worker ID</h3>

          <p>
            View your digital ID card
          </p>
        </div>


        {/* CLAIMS */}

        <div
          className="action-card"
          onClick={() => navigate("/claims")}
        >
          <FaFileMedical />

          <h3>Claims</h3>

          <p>
            Submit and track claims
          </p>
        </div>


        {/* NOMINEE */}

        <div
          className="action-card"
          onClick={() => navigate("/nominee")}
        >
          <FaUserFriends />

          <h3>Nominee</h3>

          <p>
            Manage nominee details
          </p>
        </div>


        {/* SUPPORT */}

        <div
          className="action-card"
          onClick={() => navigate("/contact")}
        >
          <FaPhoneAlt />

          <h3>Support</h3>

          <p>
            Get help instantly
          </p>
        </div>

      </div>


      {/* =========================================
          PROTECTION BENEFITS
      ========================================= */}

      <div className="protection-summary">

        <h2>
          Your Protection Benefits
        </h2>


        <div className="benefit-list">

          <div>
            <FaShieldAlt />

            <span>
              Accident Protection
            </span>
          </div>


          <div>
            <FaShieldAlt />

            <span>
              Hospital Cash Benefit
            </span>
          </div>


          <div>
            <FaShieldAlt />

            <span>
              24x7 Support
            </span>
          </div>


          <div>
            <FaShieldAlt />

            <span>
              Fast Claim Processing
            </span>
          </div>

        </div>

      </div>

    </div>
  );
}

export default Dashboard;