import {
  FaUser,
  FaPhone,
  FaCar,
  FaCalendarAlt,
  FaShieldAlt,
  FaHospital,
  FaHeadset,
  FaPhoneAlt,
  FaCheck,
} from "react-icons/fa";

import QRCode from "react-qr-code";

import { getWorkerData } from "../utils/workerStorage";

import "../styles/workerid.css";


function WorkerId() {

  const workerData = getWorkerData();

  const personal = workerData.personal || {};
  const work = workerData.work || {};
  const membership = workerData.membership || {};


  const fullName =
    personal.fullName || "GigShield Member";

  const mobile =
    personal.mobile || "Not Available";

  const workerType =
    work.workerType || "Gig Worker";

  const platform =
    work.platform || "Gig Platform";

  const vehicleNumber =
    work.vehicleNumber || "Not Available";

  const workerId =
    membership.workerId || "GSW000001";

  const memberSince =
    membership.memberSince || "Not Available";

  const plan =
    membership.plan || "Basic";

  const coverage =
    membership.coverage || "Accident Protection";

  const status =
    membership.status || "Inactive";


  const initials =
    fullName
      .split(" ")
      .filter(Boolean)
      .slice(0, 2)
      .map((word) => word.charAt(0).toUpperCase())
      .join("") || "GS";


  const qrValue = JSON.stringify({
    workerId,
    name: fullName,
    workerType,
    platform,
    plan,
    status,
  });


  return (
    <main className="workerid-page">

      <div className="workerid-title-section">

        <span>YOUR DIGITAL IDENTITY</span>

        <h1>
          GigShield Worker ID
        </h1>

        <p>
          Your verified digital worker identity and
          protection membership card.
        </p>

      </div>


      <div className="id-wrapper">


        {/* ==================================================
            FRONT CARD
        ================================================== */}

        <article className="id-card id-front">


          {/* HEADER */}

          <div className="id-front-header">

            <div className="id-brand-row">

              <div className="id-logo-mark">
                <FaShieldAlt />
              </div>

              <div className="id-brand-text">

                <h1>
                  Gig<span>Shield</span>
                </h1>

                <p>
                  Safer Work. Better Tomorrow.
                </p>

              </div>

            </div>

          </div>



          {/* CURVED ACCENT */}

          <div className="id-green-curve"></div>



          {/* MAIN CONTENT */}

          <div className="id-front-body">


            {/* PHOTO */}

            <div className="id-photo-section">

              <div className="worker-photo">

                {personal.photo ? (

                  <img
                    src={personal.photo}
                    alt="Worker"
                  />

                ) : (

                  <div className="worker-initials">
                    {initials}
                  </div>

                )}

              </div>


              <div className="platform-section">

                <span>
                  Partner Platform
                </span>

                <strong>
                  {platform}
                </strong>

              </div>

            </div>



            {/* DETAILS */}

            <div className="worker-details">


              <div className="worker-tag">
                REGISTERED WORKER
              </div>


              <h2>
                {fullName}
              </h2>


              <p className="worker-role">
                {workerType}
              </p>



              <div className="worker-detail-row">

                <div className="detail-icon">
                  <FaUser />
                </div>

                <div>

                  <span>
                    Worker ID
                  </span>

                  <strong className="green-value">
                    {workerId}
                  </strong>

                </div>

              </div>



              <div className="worker-detail-row">

                <div className="detail-icon">
                  <FaPhone />
                </div>

                <div>

                  <span>
                    Mobile
                  </span>

                  <strong>
                    {mobile}
                  </strong>

                </div>

              </div>



              <div className="worker-detail-row">

                <div className="detail-icon">
                  <FaCar />
                </div>

                <div>

                  <span>
                    Vehicle No.
                  </span>

                  <strong>
                    {vehicleNumber}
                  </strong>

                </div>

              </div>



              <div className="worker-detail-row">

                <div className="detail-icon">
                  <FaCalendarAlt />
                </div>

                <div>

                  <span>
                    Member Since
                  </span>

                  <strong>
                    {memberSince}
                  </strong>

                </div>

              </div>


            </div>

          </div>



          {/* PROTECTION STRIP */}

          <div className="protection-strip">

            <div className="protection-shield">
              <FaShieldAlt />
            </div>

            <div>

              <p>
                You are protected with GigShield {plan}
              </p>

              <span>
                {coverage} | Hospital Cash | 24x7 Support
              </span>

            </div>

          </div>



          {/* VERIFY SECTION */}

          <div className="verify-section">

            <div className="verify-text">

              <h4>
                Verify this ID
              </h4>

              <p>
                Scan QR to verify worker membership
              </p>

              <span>
                verify.gigshield.in
              </span>

            </div>


            <div className="qr-box">

              <QRCode
                value={qrValue}
                size={76}
              />

            </div>

          </div>


        </article>



        {/* ==================================================
            BACK CARD
        ================================================== */}

        <article className="id-card id-back">


          {/* BACK HEADER */}

          <div className="back-header">

            <h2>
              <span>GigShield</span> Worker ID
            </h2>

            <div className="back-header-line"></div>

          </div>



          {/* BENEFITS */}

          <div className="benefits">


            <div className="benefit">

              <FaShieldAlt />

              <p>
                Accident
                <br />
                Protection
              </p>

            </div>


            <div className="benefit">

              <FaHospital />

              <p>
                Hospital
                <br />
                Cash Benefit
              </p>

            </div>


            <div className="benefit">

              <FaHeadset />

              <p>
                24x7
                <br />
                Support
              </p>

            </div>


          </div>



          {/* HELPLINE */}

          <div className="helpline-box">

            <div className="helpline-icon">
              <FaPhoneAlt />
            </div>

            <div>

              <span>
                EMERGENCY HELPLINE
              </span>

              <h3>
                1800 889 5353
              </h3>

              <p>
                (24x7)
              </p>

            </div>

          </div>



          {/* TERMS */}

          <div className="terms-list">

            <div>
              <FaCheck />
              <span>
                This ID is issued to a verified Gig worker.
              </span>
            </div>

            <div>
              <FaCheck />
              <span>
                This ID is non-transferable.
              </span>
            </div>

            <div>
              <FaCheck />
              <span>
                In case of emergency, show this ID to get immediate assistance.
              </span>
            </div>

            <div>
              <FaCheck />
              <span>
                This card is the property of GigShield.
              </span>
            </div>

          </div>



          {/* SIGNATURE */}

          <div className="signature-row">


            <div className="authorised-signature">

              <img
                src="/Signature.jpeg"
                alt="Authorised Signature"
              />

              <strong>
                Authorised Signatory
              </strong>

            </div>


            <div className="issue-date">

              <strong>
                Issue Date
              </strong>

              <span>
                {memberSince}
              </span>

            </div>


          </div>



          {/* BACK FOOTER */}

          <div className="id-back-footer">

            <div className="footer-logo">
              <FaShieldAlt />
            </div>

            <div>

              <p>
                GigShield is a protection and assistance
                platform for gig workers.
              </p>

              <span>
                www.gigshield.in
              </span>

            </div>

          </div>


        </article>


      </div>

    </main>
  );
}


export default WorkerId;