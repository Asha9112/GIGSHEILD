import {
  FaUser,
  FaPhone,
  FaCar,
  FaCalendar,
  FaShieldAlt,
  FaHospital,
  FaHeadset,
  FaDownload,
  FaShareAlt,
  FaCheckCircle,
} from "react-icons/fa";

import QRCode from "react-qr-code";

import "../styles/workerid.css";

function WorkerId() {
  return (
    <div className="workerid-page">

      <h1 className="workerid-title">
        My GigShield Worker ID
      </h1>

      <div className="workerid-container">

        {/* FRONT CARD */}

        <div className="id-front">

          <div className="id-header">

            <div>
              <h1>GigShield</h1>
              <p>Safer Work. Better Tomorrow.</p>
            </div>

            <div className="verified-badge">
              <FaCheckCircle />
              Verified
            </div>

          </div>

          <div className="id-body">

            <div className="profile-box">

              <img
                src="https://randomuser.me/api/portraits/men/32.jpg"
                alt="Worker"
              />

            </div>

            <div className="worker-info">

              <div className="worker-badge">
                PLUS PLAN ACTIVE
              </div>

              <h2>Ramesh K</h2>

              <p className="role">
                Delivery Partner
              </p>

              <div className="detail-row">
                <FaUser />
                <div>
                  <strong>Worker ID</strong>
                  <p>GSW125678</p>
                </div>
              </div>

              <div className="detail-row">
                <FaPhone />
                <div>
                  <strong>Mobile</strong>
                  <p>9876543210</p>
                </div>
              </div>

              <div className="detail-row">
                <FaCar />
                <div>
                  <strong>Vehicle No.</strong>
                  <p>KA05KC1234</p>
                </div>
              </div>

              <div className="detail-row">
                <FaCalendar />
                <div>
                  <strong>Member Since</strong>
                  <p>15 May 2024</p>
                </div>
              </div>

            </div>

          </div>

          <div className="protection-strip">
            🛡 Protected by GigShield
            <br />
            Accident Cover • Hospital Cash • 24x7 Support
          </div>

          <div className="qr-section">

            <div>
              <h3>Verify this ID</h3>

              <p>
                Scan QR or visit
                <br />
                verify.gigshield.in
              </p>
            </div>

            <div className="qr-box">

              <QRCode
                value="https://gigshield.in/verify/GSW125678"
                size={90}
              />

            </div>

          </div>

        </div>

        {/* BACK CARD */}

        <div className="id-back">

          <h2>GigShield Worker ID</h2>

          <div className="benefits">

            <div className="benefit-card">
              <FaShieldAlt />
              <p>Accident Protection</p>
            </div>

            <div className="benefit-card">
              <FaHospital />
              <p>Hospital Cash Benefit</p>
            </div>

            <div className="benefit-card">
              <FaHeadset />
              <p>24x7 Support</p>
            </div>

          </div>

          <div className="helpline">

            <h3>Emergency Helpline</h3>

            <h1>1800 889 5353</h1>

            <p>Available 24x7</p>

          </div>

          <ul className="terms">
            <li>This ID is issued to a verified worker.</li>
            <li>This ID is non-transferable.</li>
            <li>Show this card during emergencies.</li>
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

          <div className="id-actions">

            <button className="download-btn">
              <FaDownload />
              Download ID
            </button>

            <button className="share-btn">
              <FaShareAlt />
              Share
            </button>

          </div>

          <div className="back-footer">
            GigShield Protection Platform
          </div>
          <QRCode
            value="http://localhost:5173/verify-worker"
            size={90}
          />

        </div>

      </div>

    </div>
  );
}

export default WorkerId;