import { useNavigate } from "react-router-dom";
import "../styles/login.css";

function Onboarding() {
  const navigate = useNavigate();

  return (
    <div className="login-page">
      <div className="login-card">

        <h1>Step 1 of 5</h1>

        <h2>Basic Details</h2>

        <p>
          Complete your profile to continue
        </p>

        <input
          type="text"
          placeholder="Full Name"
          className="form-input"
        />

        <input
          type="text"
          placeholder="City"
          className="form-input"
        />

        <select className="form-input">
          <option>Select Language</option>
          <option>English</option>
          <option>Telugu</option>
          <option>Hindi</option>
          <option>Tamil</option>
          <option>Kannada</option>
        </select>

        <button
          className="cta-btn login-submit"
          onClick={() => navigate("/worker-type")}
        >
          Continue
        </button>

      </div>
    </div>
  );
}

export default Onboarding;