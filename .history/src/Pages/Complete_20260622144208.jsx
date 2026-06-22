import { useNavigate } from "react-router-dom";
import {
  FaCheckCircle,
  FaShieldAlt,
  FaIdCard,
} from "react-icons/fa";

import "../styles/complete.css";

function Complete() {
  const navigate = useNavigate();

  return (
    <div className="complete-page">

      <div className="complete-card">

        <FaCheckCircle className="success-icon" />

        <h1>Congratulations!</h1>

        <h2>Your Protection Is Active</h2>

        <p className="success-text">
          Welcome to GigShield. Your account has been
          successfully activated and your protection
          plan is now live.
        </p>

        <div className="membership-card">

          <div className="membership-header">
            <FaShieldAlt />
            <span>GigShield Membership</span>
          </div>

          <div className="membership-body">

            <div>
              <label>Worker ID</label>
              <h3>GS-2026-0001</h3>
            </div>

            <div>
              <label>Active Plan</label>
              <h3>Plus Plan</h3>
            </div>

            <div>
              <label>Status</label>
              <h3 className="active-status">
                Active
              </h3>
            </div>

          </div>

        </div>

        <div className="success-benefits">

          <div>
            <FaIdCard />
            <span>Digital Worker ID Ready</span>
          </div>

          <div>
            <FaShieldAlt />
            <span>Protection Activated</span>
          </div>

        </div>

        <button
          className="dashboard-btn"
          onClick={() => navigate("/dashboard")}
        >
          Go To Dashboard →
        </button>

      </div>

    </div>
  );
}

export default Complete;