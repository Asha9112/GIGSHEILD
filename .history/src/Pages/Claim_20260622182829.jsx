import { useNavigate } from "react-router-dom";

import {
  FaFileMedical,
  FaUpload,
  FaShieldAlt,
} from "react-icons/fa";

import "../styles/claim.css";

function Claim() {
  const navigate = useNavigate();
  return (
    <div className="claim-page">

      <div className="claim-header">

        <FaShieldAlt className="claim-header-icon" />

        <h1>Submit a Claim</h1>

        <p>
          Tell us what happened and upload
          supporting documents.
        </p>

      </div>

      <div className="claim-form">

        <div className="claim-section">

          <label>Claim Type</label>

          <select className="form-input">
            <option>Select Claim Type</option>
            <option>Accidental Injury</option>
            <option>Hospital Admission</option>
            <option>Accidental Death</option>
            <option>Other</option>
          </select>

        </div>

        <div className="claim-section">

          <label>Incident Date</label>

          <input
            type="date"
            className="form-input"
          />

        </div>

        <div className="claim-section">

          <label>Description</label>

          <textarea
            rows="5"
            className="form-input"
            placeholder="Describe what happened..."
          />

        </div>

        <div className="upload-box">

          <FaUpload />

          <h3>Upload Documents</h3>

          <p>
            Medical reports, bills or proof
            of incident
          </p>

          <input type="file" />

        </div>

        <button
  className="claim-btn"
  onClick={() => navigate("/claim-success")}
>
  Submit Claim
</button>

      </div>

    </div>
  );
}

export default Claim;