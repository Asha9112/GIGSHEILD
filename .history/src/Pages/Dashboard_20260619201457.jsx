function Dashboard() {
  return (
    <div className="dashboard-page">

      <h1>Welcome Back 👋</h1>

      <div className="status-card">
        <h2>PROTECTED ✓</h2>
        <p>GigShield Plus Plan</p>
        <p>Coverage: ₹2,00,000</p>
        <p>Valid Until: 31 July 2026</p>
      </div>

      <div className="dashboard-actions">

        <div className="action-card">
          <h3>📄 Claim Now</h3>
          <p>Submit a new claim</p>
        </div>

        <div className="action-card">
          <h3>🪪 My Worker ID</h3>
          <p>View your ID card</p>
        </div>

        <div className="action-card">
          <h3>💳 Renew Plan</h3>
          <p>Extend your protection</p>
        </div>

        <div className="action-card">
          <h3>📞 Support</h3>
          <p>24x7 WhatsApp Help</p>
        </div>

      </div>

    </div>
  );
}

export default Dashboard;