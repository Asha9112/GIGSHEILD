function Hero() {
  return (
    <section
      style={{
        textAlign: "center",
        padding: "100px 20px",
      }}
    >
      <h1
        style={{
          fontSize: "60px",
          fontWeight: "bold",
          marginBottom: "10px",
        }}
      >
        You Protect Customers Every Day.
      </h1>

      <h2
        style={{
          fontSize: "50px",
          fontWeight: "bold",
          marginBottom: "30px",
          color: "#f59e0b",
        }}
      >
        Who Protects You?
      </h2>

      <p
        style={{
          fontSize: "20px",
          maxWidth: "800px",
          margin: "0 auto 30px",
          color: "#cbd5e1",
        }}
      >
        Affordable protection plans for delivery riders, drivers and gig
        workers across India.
      </p>

      <button
        style={{
          background: "#f59e0b",
          color: "white",
          border: "none",
          padding: "14px 28px",
          borderRadius: "8px",
          fontSize: "18px",
          cursor: "pointer",
        }}
      >
        Get Protected
      </button>
    </section>
  );
}

export default Hero;