import { useNavigate } from "react-router-dom";
import "../styles/workerType.css";

function WorkerType() {
  const navigate = useNavigate();

  return (
    <div className="login-page">
      <div className="worker-card">

        <h1>Step 2 of 5</h1>

        <h2>Select Your Worker Type</h2>

        <div className="worker-grid">

          <div
            className="worker-box"
            onClick={() => navigate("/pricing")}
          >
            <span>🛵</span>
            <p>Delivery Rider</p>
          </div>

          <div
            className="worker-box"
            onClick={() => navigate("/pricing")}
          >
            <span>🚗</span>
            <p>Cab / Auto Driver</p>
          </div>

          <div
            className="worker-box"
            onClick={() => navigate("/pricing")}
          >
            <span>🚚</span>
            <p>Logistics Worker</p>
          </div>

          <div
            className="worker-box"
            onClick={() => navigate("/plans")}
          >
            <span>📦</span>
            <p>Warehouse Worker</p>
          </div>

          <div
            className="worker-box"
            onClick={() => navigate("/pricing")}
          >
            <span>👤</span>
            <p>Other Gig Worker</p>
          </div>

        </div>

      </div>
    </div>
  );
}

export default WorkerType;