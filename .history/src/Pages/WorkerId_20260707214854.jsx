import {
  FaUser,
  FaPhone,
  FaCar,
  FaCalendar,
  FaShieldAlt,
  FaHospital,
  FaHeadset,
  FaCheck,
  FaPhoneAlt,
} from "react-icons/fa";

import QRCode from "react-qr-code";

import logo from "../assets/logo.jpeg";
import workerPhoto from "../assets/worker-photo.jpg";
import swiggyLogo from "../assets/swiggy-logo.png";
import zomatoLogo from "../assets/zomato-logo.png";
import rapidoLogo from "../assets/rapido-logo.png";
import signature from "../assets/signature.png";

import "../styles/workerid.css";

function WorkerId() {
  return (
    <div className="workerid-page">
      <div className="id-wrapper">

        {/* ================= FRONT CARD ================= */}

        <div className="id-front">

          {/* HEADER */}

          <div className="front-header">
            <div className="id-brand">
              <img
                src={logo}
                alt="GigShield Logo"
                className="id-brand-logo"
              />

              <div>
                <h1>
                  Gig<span>Shield</span>
                </h1>

                <p>Safer Work. Better Tomorrow.</p>
              </div>
            </div>
          </div>


          {/* WORKER DETAILS */}

          <div className="front-main">

            <div className="left-profile-column">

              <div className="worker-photo">
                <img
                  src={workerPhoto}
                  alt="GigShield Worker"
                />
              </div>


              {/* PARTNER PLATFORM */}

              <div className="partner-platform">
                <p>Partner Platform</p>

                <div className="partner-logos">
                  <img
                    src={swiggyLogo}
                    alt="Swiggy"
                  />

                  <img
                    src={zomatoLogo}
                    alt="Zomato"
                  />

                  <img
                    src={rapidoLogo}
                    alt="Rapido"
                  />
                </div>
              </div>

            </div>


            {/* RIGHT DETAILS */}

            <div className="worker-details">

              <div className="worker-tag">
                REGISTERED WORKER
              </div>

              <h2>Ramesh K</h2>

              <p className="worker-role">
                Delivery Partner
              </p>


              <div className="detail-item">
                <div className="detail-icon">
                  <FaUser />
                </div>

                <div>
                  <span>Worker ID</span>
                  <strong className="green-detail">
                    GSW125678
                  </strong>
                </div>
              </div>


              <div className="detail-item">
                <div className="detail-icon">
                  <FaPhone />
                </div>

                <div>
                  <span>Mobile</span>
                  <strong>98765 43210</strong>
                </div>
              </div>


              <div className="detail-item">
                <div className="detail-icon">
                  <FaCar />
                </div>

                <div>
                  <span>Vehicle No.</span>
                  <strong>KA05KC1234</strong>
                </div>
              </div>


              <div className="detail-item">
                <div className="detail-icon">
                  <FaCalendar />
                </div>

                <div>
                  <span>Member Since</span>
                  <strong>15 May 2024</strong>
                </div>
              </div>

            </div>

          </div>


          {/* PROTECTION STRIP */}

          <div className="protection-strip">

            <div className="protection-icon">
              <FaShieldAlt />
              <FaCheck className="protection-check" />
            </div>

            <div>
              <strong>
                You are protected with GigShield
              </strong>

              <p>
                Accident Cover | Hospital Cash | 24x7 Support
              </p>
            </div>

          </div>


          {/* BLUE QR SECTION */}

          <div className="verify-section">

            <div className="verify-text">
              <h3>Verify this ID</h3>

              <p>
                Scan QR or visit:
                <span> verify.gigshield.in</span>
              </p>
            </div>


            <div className="qr-box">
              <QRCode
                value="http://localhost:5173/verify-worker"
                size={78}
              />
            </div>

          </div>

        </div>


        {/* ================= BACK CARD ================= */}

        <div className="id-back">

          <div className="back-content">

            <h2 className="back-title">
              <span>GigShield</span> Worker ID
            </h2>

            <div className="back-divider"></div>


            {/* BENEFITS */}

            <div className="benefits">

              <div className="benefit-item">
                <FaShieldAlt />

                <p>
                  Accident
                  <br />
                  Protection
                </p>
              </div>


              <div className="benefit-item">
                <FaHospital />

                <p>
                  Hospital
                  <br />
                  Cash Benefit
                </p>
              </div>


              <div className="benefit-item">
                <FaHeadset />

                <p>
                  24x7
                  <br />
                  Support
                </p>
              </div>

            </div>


            {/* EMERGENCY HELPLINE */}

            <div className="helpline-box">

              <div className="helpline-phone-icon">
                <FaPhoneAlt />
              </div>

              <div className="helpline-content">
                <h3>EMERGENCY HELPLINE</h3>

                <h1>1800 889 5353</h1>

                <p>(24x7)</p>
              </div>

            </div>


            {/* TERMS */}

            <ul className="terms-list">
              <li>
                This ID is issued to a verified Gig worker.
              </li>

              <li>
                This ID is non-transferable.
              </li>

              <li>
                In case of emergency, show this ID to get
                immediate assistance.
              </li>

              <li>
                This card is the property of GigShield.
              </li>
            </ul>


            {/* SIGNATURE */}

            <div className="signature-row">

              <div className="signature-block">

                <img
                  src={signature}
                  alt="Authorised Signature"
                  className="signature-image"
                />

                <div className="signature-line"></div>

                <strong>
                  Authorised Signatory
                </strong>

              </div>


              <div className="issue-date">

                <strong>Issue Date</strong>

                <span>15 May 2024</span>

              </div>

            </div>

          </div>


          {/* BACK BOTTOM BLUE SECTION */}

          <div className="back-footer">

            <img
              src={logo}
              alt="GigShield Logo"
              className="footer-logo"
            />

            <div className="footer-content">

              <p>
                GigShield is a protection and assistance
                platform for gig workers, in partnership
                with trusted protection providers.
              </p>

              <strong>
                www.gigshield.in
              </strong>

            </div>

          </div>

        </div>

      </div>
    </div>
  );
}

export default WorkerId;