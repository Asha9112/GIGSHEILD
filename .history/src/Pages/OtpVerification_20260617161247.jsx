function OtpVerification() {
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

        <button className="cta-btn login-submit">
          Verify OTP
        </button>

      </div>
    </div>
  );
}

export default OtpVerification;