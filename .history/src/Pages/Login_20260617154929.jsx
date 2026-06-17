function Login() {
  return (
    <div className="login-page">
      <div className="login-card">

        <h1>GigShield</h1>

        <h2>Enter Your Mobile Number</h2>

        <p>
          We will send you a one-time password
        </p>

        <div className="phone-input">
          <span>+91</span>
          <input
            type="text"
            placeholder="Enter Mobile Number"
          />
        </div>

        <button className="cta-btn login-submit">
          Send OTP
        </button>

      </div>
    </div>
  );
}

export default Login;
