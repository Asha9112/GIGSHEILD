import {
  FaUser,
  FaPhone,
  FaCar,
  FaCalendar,
  FaShieldAlt,
  FaHospital,
  FaHeadset,
} from "react-icons/fa";

import QRCode from "react-qr-code";
import "../styles/workerid.css";

function WorkerId() {
  return (
    <div className="workerid-page">

      <div className="id-wrapper">

        {/* FRONT */}

        <div className="id-front">

          <div className="front-header">

            <div className="logo-section">
              <h1>GigShield</h1>
              <p>Safer Work. Better Tomorrow.</p>
            </div>

          </div>

          <div className="front-content">

            <div className="worker-photo">
              <img
                src="https://randomuser.me/api/portraits/men/32.jpg"
                alt="worker"
              />
            </div>

            <div className="worker-details">

              <div className="worker-tag">
                REGISTERED WORKER
              </div>

              <h2>Ramesh K</h2>

              <p className="worker-role">
                Delivery Partner
              </p>

              <div className="detail-item">
                <FaUser />
                <span>GSW125678</span>
              </div>

              <div className="detail-item">
                <FaPhone />
                <span>9876543210</span>
              </div>

              <div className="detail-item">
                <FaCar />
                <span>KA05KC1234</span>
              </div>

              <div className="detail-item">
                <FaCalendar />
                <span>15 May 2024</span>
              </div>

            </div>

          </div>

          <div className="protection-strip">
            You are protected with GigShield
            <br />
            Accident Cover | Hospital Cash | 24x7 Support
          </div>

          <div className="verify-section">

            <div>
              <h4>Verify this ID</h4>
              <p>verify.gigshield.in</p>
            </div>

            <div className="qr-box">
              <QRCode
                value="http://localhost:5173/verify-worker"
                size={75}
              />
            </div>

          </div>

        </div>

        {/* BACK */}

        <div className="id-back">

          <h2>GigShield Worker ID</h2>

          <div className="benefits">

            <div>
              <FaShieldAlt />
              <p>Accident Protection</p>
            </div>

            <div>
              <FaHospital />
              <p>Hospital Cash Benefit</p>
            </div>

            <div>
              <FaHeadset />
              <p>24x7 Support</p>
            </div>

          </div>

          <div className="helpline-box">
            <h3>EMERGENCY HELPLINE</h3>
            <h1>1800 889 5353</h1>
            <p>(24x7)</p>
          </div>

          <ul className="terms-list">
            <li>This ID is issued to a verified worker.</li>
            <li>This ID is non-transferable.</li>
            <li>Show this ID during emergencies.</li>
            <li>This card remains property of GigShield.</li>
          </ul>

          <div className="signature-row">

            <div>
              <strong>Authorised Signatory</strong>
            </div>

            <div>
              <strong>Issue Date</strong>
              <br />
              15 May 2024
            </div>

          </div>

          <div className="footer-strip">
            GigShield Protection Platform
          </div>

        </div>

      </div>

    </div>
  );
}

export default WorkerId;