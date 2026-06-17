function FeaturesSection() {
  return (
    <section
      style={{
        padding: "80px 20px",
        textAlign: "center",
      }}
    >
      <h2
        style={{
          fontSize: "40px",
          marginBottom: "40px",
        }}
      >
        What We Protect
      </h2>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          flexWrap: "wrap",
        }}
      >
        <div style={cardStyle}>🛡️ Accident Protection</div>
        <div style={cardStyle}>💰 Income Loss Coverage</div>
        <div style={cardStyle}>📱 Phone Damage Protection</div>
        <div style={cardStyle}>🚑 Emergency Support</div>
      </div>
    </section>
  );
}

const cardStyle = {
  background: "#1e293b",
  padding: "25px",
  borderRadius: "12px",
  width: "250px",
  fontSize: "18px",
};

export default FeaturesSection;