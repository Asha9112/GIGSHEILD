function ProblemSection() {
  return (
    <section className="problem-section">
      <h2>One Accident Can Stop Your Income</h2>

      <p className="problem-subtitle">
        Gig workers have no safety net. We are changing that.
      </p>

      <div className="problem-cards">

        <div className="problem-card">
          <div className="icon">❌</div>
          <h3>Income Stops Immediately</h3>
          <p>
            No work means no pay. Injuries can leave workers
            without income for days or weeks.
          </p>
        </div>

        <div className="problem-card">
          <div className="icon">🏥</div>
          <h3>Hospital Bills Pile Up</h3>
          <p>
            Emergency medical treatment can cost thousands of
            rupees and create financial stress.
          </p>
        </div>

        <div className="problem-card">
          <div className="icon">😔</div>
          <h3>No Support From Platforms</h3>
          <p>
            Most workers receive limited support when accidents
            happen during work.
          </p>
        </div>

      </div>
    </section>
  );
}

export default ProblemSection;