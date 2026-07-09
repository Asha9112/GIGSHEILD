import { useNavigate } from "react-router-dom";

import {
  FaCheckCircle,
  FaShieldAlt,
  FaIdCard,
} from "react-icons/fa";

import { getWorkerData } from "../utils/workerStorage";

import "../styles/complete.css";


function Complete() {
  const navigate = useNavigate();


  // =========================================
  // GET SAVED WORKER DATA
  // =========================================

  const workerData = getWorkerData();

  const membership = workerData.membership;


  // =========================================
  // FALLBACK VALUES
  // =========================================

  const plan = membership.plan || "Plus";

  const price = membership.price ?? 69;

  const coverage =
    membership.coverage || "₹2L Accident Cover";

  const workerId =
    membership.workerId || "GSW000001";

  const status =
    membership.status || "Active";

  const memberSince =
    membership.memberSince || "Not Available";


  return (
    <div className="complete-page">

      <div className="complete-card">


        {/* SUCCESS ICON */}

        <FaCheckCircle className="success-icon" />


        {/* SUCCESS MESSAGE */}

        <h1>
          Congratulations!
        </h1>


        <h2>
          Your Protection Is Active
        </h2>


        <p className="success-text">
          Welcome to GigShield. Your account has been
          successfully activated and your protection
          plan is now live.
        </p>



        {/* =====================================
            MEMBERSHIP CARD
        ===================================== */}

        <div className="membership-card">


          <div className="membership-header">

            <FaShieldAlt />

            <span>
              GigShield Membership
            </span>

          </div>



          <div className="membership-body">


            {/* WORKER ID */}

            <div>

              <label>
                Worker ID
              </label>

              <h3>
                {workerId}
              </h3>

            </div>



            {/* ACTIVE PLAN */}

            <div>

              <label>
                Active Plan
              </label>

              <h3>
                {plan} Plan
              </h3>

            </div>



            {/* STATUS */}

            <div>

              <label>
                Status
              </label>

              <h3 className="active-status">
                {status}
              </h3>

            </div>


          </div>


          {/* OPTIONAL EXTRA DETAILS */}

          <div className="membership-extra-details">

            <div>

              <span>
                Protection Benefit
              </span>

              <strong>
                {coverage}
              </strong>

            </div>


            <div>

              <span>
                Monthly Amount
              </span>

              <strong>
                {price === 0
                  ? "FREE"
                  : `₹${price} / month`}
              </strong>

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



        {/* =====================================
            SUCCESS BENEFITS
        ===================================== */}

        <div className="success-benefits">


          <div>

            <FaIdCard />

            <span>
              Digital Worker ID Ready
            </span>

          </div>


          <div>

            <FaShieldAlt />

            <span>
              Protection Activated
            </span>

          </div>


        </div>



        {/* =====================================
            DASHBOARD BUTTON
        ===================================== */}

        <button
          type="button"
          className="dashboard-btn"
          onClick={() => navigate("/dashboard")}
        >
          Go To Dashboard →
        </button>


      </div>

    </div>
  );
}


export default Complete;