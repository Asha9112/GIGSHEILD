import {
  FaUser,
  FaPhone,
  FaCar,
  FaCalendar,
  FaShieldAlt,
  FaHospital,
  FaHeadset,
} from "react-icons/fa";

function WorkerId() {
  return (
    <div className="workerid-page">

      <div className="workerid-container">

        {/* Front Card */}
        <div className="id-body">

  <div className="profile-box">
    PHOTO
  </div>

  <div className="worker-info">

    <div className="worker-badge">
      REGISTERED WORKER
    </div>

    <h2>Ramesh K</h2>

    <p className="role">
      Delivery Partner
    </p>

    <div className="detail-row">
      <FaUser />
      <span>
        <strong>Worker ID</strong><br />
        GSW125678
      </span>
    </div>

    <div className="detail-row">
      <FaPhone />
      <span>
        <strong>Mobile</strong><br />
        9876543210
      </span>
    </div>

    <div className="detail-row">
      <FaCar />
      <span>
        <strong>Vehicle No</strong><br />
        KA05KC1234
      </span>
    </div>

    <div className="detail-row">
      <FaCalendar />
      <span>
        <strong>Member Since</strong><br />
        15 May 2024
      </span>
    </div>

  </div>

</div>

<div className="protection-strip">
  🛡 You are protected with GigShield
</div>

<div className="qr-section">
  <div>
    <h3>Verify this ID</h3>
    <p>Scan QR or visit verify.gigshield.in</p>
  </div>

  <div className="qr-box">
    QR
  </div>
</div>

        {/* Back Card */}
        <div className="id-back">

          <h2>GigShield Worker ID</h2>

          <div className="benefits">
            <div>
              <FaShieldAlt />
              <p>Accident Protection</p>
            </div>

            <div>
              <FaHospital />
              <p>Hospital Cash</p>
            </div>

            <div>
              <FaHeadset />
              <p>24x7 Support</p>
            </div>
          </div>

          <div className="helpline">
            <h3>Emergency Helpline</h3>
            <h1>1800 889 5353</h1>
          </div>

        </div>

      </div>

    </div>
  );
}

export default WorkerId;