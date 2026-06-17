import { useNavigate } from "react-router-dom";

function OtpVerification() {
  const navigate = useNavigate();

  return (
    <div className="login-page">
      <div className="login-card">

        <h1>GigShield</h1>

        <h2>Enter OTP</h2>

        <p>
          OTP sent to +91 XXXXXX1234
        </p>

        <div className="otp-boxes">
          <input maxLength="1" />
          <input maxLength="1" />
          <input maxLength="1" />
          <input maxLength="1" />
          <input maxLength="1" />
          <input maxLength="1" />
        </div>

        <button
          className="cta-btn login-submit"
          onClick={() => navigate("/onboarding")}
        >
          Verify OTP
        </button>

        <p
          style={{
            marginTop: "20px",
            fontSize: "13px",
            color: "#666",
          }}
        >
          Didn't receive OTP? Resend
        </p>

      </div>
    </div>
  );
}

export default OtpVerification;