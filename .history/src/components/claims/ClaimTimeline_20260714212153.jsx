import {
  FaFileMedical,
  FaCamera,
  FaSearch,
  FaClipboardCheck,
  FaMoneyCheckAlt,
} from "react-icons/fa";

function ClaimTimeline() {
  const steps = [
    {
      icon: <FaFileMedical />,
      title: "Report Incident",
      text: "Submit your claim details.",
    },
    {
      icon: <FaCamera />,
      title: "Upload Evidence",
      text: "Add live photos & documents.",
    },
    {
      icon: <FaSearch />,
      title: "Verification",
      text: "GigShield verifies your claim.",
    },
    {
      icon: <FaClipboardCheck />,
      title: "Review",
      text: "Our claims team reviews everything.",
    },
    {
      icon: <FaMoneyCheckAlt />,
      title: "Settlement",
      text: "Claim decision & settlement.",
    },
  ];

  return (
    <div className="claim-timeline">

      <h2>Claim Process</h2>

      {steps.map((step, index) => (

        <div
          className="timeline-item"
          key={index}
        >

          <div className="timeline-icon">
            {step.icon}
          </div>

          <div className="timeline-content">

            <h4>{step.title}</h4>

            <p>{step.text}</p>

          </div>

        </div>

      ))}

    </div>
  );
}

export default ClaimTimeline;