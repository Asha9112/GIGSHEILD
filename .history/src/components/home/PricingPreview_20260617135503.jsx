function PricingPreview() {
  return (
    <section className="pricing-section">
      <h2>Simple Plans. Real Protection.</h2>

      <p className="pricing-subtitle">
        Choose the plan that fits your work and your family.
      </p>

      <div className="pricing-cards">

        <div className="pricing-card">
          <h3>GigShield Basic</h3>
          <div className="price">₹0</div>
          <p>Digital Worker ID</p>
          <p>WhatsApp Support</p>
          <p>Emergency Contact</p>

          <button className="secondary-btn">
            Join Free
          </button>
        </div>

        <div className="pricing-card">
          <h3>GigShield Protect</h3>
          <div className="price">₹39/mo</div>
          <p>₹1L Accident Cover</p>
          <p>WhatsApp Claims</p>
          <p>Nominee Registration</p>

          <button className="cta-btn">
            Get Started
          </button>
        </div>

        <div className="pricing-card popular-card">
          <span className="popular-badge">
            MOST POPULAR
          </span>

          <h3>GigShield Plus</h3>
          <div className="price">₹69/mo</div>

          <p>₹2L Accident Cover</p>
          <p>Hospital Cash</p>
          <p>Worker Dashboard</p>

          <button className="cta-btn">
            Get Started
          </button>
        </div>

        <div className="pricing-card">
          <h3>GigShield Pro</h3>
          <div className="price">₹99/mo</div>

          <p>₹3L+ Coverage</p>
          <p>Income Protection</p>
          <p>Priority Claims</p>

          <button className="cta-btn">
            Get Started
          </button>
        </div>

      </div>
    </section>
  );
}

export default PricingPreview;