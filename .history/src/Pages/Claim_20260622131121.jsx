import "../styles/claim.css";

function Claim() {
  return (
    <div className="claim-page">

      <h1>Submit a Claim</h1>

      <p className="claim-subtitle">
        Tell us what happened and upload supporting documents.
      </p>

      <div className="claim-form">

        <select className="form-input">
          <option>Select Claim Type</option>
          <option>Accidental Injury</option>
          <option>Hospital Admission</option>
          <option>Accidental Death</option>
          <option>Other</option>
        </select>

        <input
          type="date"
          className="form-input"
        />

        <textarea
          className="form-input"
          rows="4"
          placeholder="Describe the incident..."
        />

        <input
          type="file"
          className="form-input"
        />

        <button className="cta-btn login-submit">
          Submit Claim
        </button>

      </div>

    </div>
  );
}

export default Claim;