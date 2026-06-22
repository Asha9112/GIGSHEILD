import { useNavigate } from "react-router-dom";

function Complete() {
  const navigate = useNavigate();

  return (
    <div className="login-page">
      <div className="login-card">

        <h1>🎉 Congratulations!</h1>

        <h2>You Are Now Protected</h2>

        <p>
          Your GigShield account has been created successfully.
        </p>

        <div className="worker-id-card">

          <h3>GigShield Worker ID</h3>

          <p>GS-2026-0001</p>

          <p>Plus Plan Active</p>

        </div>

        <button
          className="cta-btn login-submit"
          onClick={() => navigate("/dashboard")}
        >
          Go To Dashboard
        </button>

      </div>
    </div>
  );
}

export default Complete;