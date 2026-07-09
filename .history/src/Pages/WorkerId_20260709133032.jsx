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

import { getWorkerData } from "../utils/workerStorage";


import "../styles/workerid.css";

function WorkerId() {

// ========================================
// GET SAVED WORKER DATA
// ========================================

const workerData = getWorkerData();

const personal = workerData.personal || {};
const work = workerData.work || {};
const membership = workerData.membership || {};

// ========================================
// WORKER ID DATA
// ========================================

const fullName =
personal.fullName || "GigShield Member";

const mobile =
personal.mobile || "Not Available";

const workerType =
work.workerType || "Gig Worker";

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

// ========================================
// UNIQUE QR VERIFICATION VALUE
// ========================================

const qrValue = JSON.stringify({
workerId,
name: fullName,
plan,
status,
});

return (


<div className="workerid-page">

  <div className="id-wrapper">


    {/* ========================================
        FRONT
    ======================================== */}

    <div className="id-front">


      <div className="front-header">

        <div className="logo-section">

          <h1>
            GigShield
          </h1>

          <p>
            Safer Work. Better Tomorrow.
          </p>

        </div>

      </div>



      <div className="front-content">


        <div className="worker-photo">

          <div
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "#eaf2ff",
              fontSize: "42px",
              fontWeight: "700",
              color: "#1a73e8",
            }}
          >
            {fullName
              .split(" ")
              .filter(Boolean)
              .slice(0, 2)
              .map((name) =>
                name.charAt(0).toUpperCase()
              )
              .join("") || "GS"}
          </div>

        </div>



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



          <div className="detail-item">

            <FaUser />

            <span>
              {workerId}
            </span>

          </div>



          <div className="detail-item">

            <FaPhone />

            <span>
              {mobile}
            </span>

          </div>



          <div className="detail-item">

            <FaCar />

            <span>
              {vehicleNumber}
            </span>

          </div>



          <div className="detail-item">

            <FaCalendar />

            <span>
              {memberSince}
            </span>

          </div>


        </div>

      </div>



      <div className="protection-strip">

        You are protected with GigShield {plan}

        <br />

        {coverage} | Hospital Cash | 24x7 Support

      </div>



      <div className="verify-section">


        <div>

          <h4>
            Verify this ID
          </h4>

          <p>
            GigShield Worker Verification
          </p>

        </div>


        <div className="qr-box">

          <QRCode
            value={qrValue}
            size={75}
          />

        </div>


      </div>


    </div>



    {/* ========================================
        BACK
    ======================================== */}

    <div className="id-back">


      <h2>
        GigShield Worker ID
      </h2>



      <div className="benefits">


        <div>

          <FaShieldAlt />

          <p>
            Accident Protection
          </p>

        </div>



        <div>

          <FaHospital />

          <p>
            Hospital Cash Benefit
          </p>

        </div>



        <div>

          <FaHeadset />

          <p>
            24x7 Support
          </p>

        </div>


      </div>



      <div className="helpline-box">

        <h3>
          EMERGENCY HELPLINE
        </h3>

        <h1>
          1800 889 5353
        </h1>

        <p>
          (24x7)
        </p>

      </div>



      <ul className="terms-list">

        <li>
          This ID is issued to a verified worker.
        </li>

        <li>
          This ID is non-transferable.
        </li>

        <li>
          Show this ID during emergencies.
        </li>

        <li>
          This card remains property of GigShield.
        </li>

      </ul>



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



        <div>

          <strong>
            Issue Date
          </strong>

          <br />

          {memberSince}

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
