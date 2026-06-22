import { useNavigate } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";
import "../styles/claimsuccess.css";

function ClaimSuccess() {
  const navigate = useNavigate();

  return (
    <div className="claim-success-page">

      <div className="claim-success-card">

        <FaCheckCircle className="success-icon" />

        <h1>Claim Submitted Successfully</h1>

        <p>
          Your claim request has been received and is
          currently under review by our support team.
        </p>

        <div className="claim-details">

          <div className="detail-box">
            <span>Claim ID</span>
            <h3>CLM-2026-1001</h3>
          </div>

          <div className="detail-box">
            <span>Status</span>
            <h3 className="pending-status">
              Under Review
            </h3>
          </div>

        </div>

        <button
          className="dashboard-btn"
          onClick={() => navigate("/dashboard")}
        >
          Back To Dashboard
        </button>

      </div>

    </div>
  );
}

export default ClaimSuccess;