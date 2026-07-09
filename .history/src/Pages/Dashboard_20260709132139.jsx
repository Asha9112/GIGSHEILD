import { useNavigate } from "react-router-dom";

import Button from "../components/Button/Button";

import {
FaShieldAlt,
FaIdCard,
FaFileMedical,
FaUserFriends,
FaPhoneAlt,
FaCheckCircle,
FaArrowRight,
FaHospital,
FaHeadset,
FaBell,
FaWallet,
} from "react-icons/fa";

import { getWorkerData } from "../utils/workerStorage";

import "../styles/dashboard.css";

function Dashboard() {

const navigate = useNavigate();

// ========================================
// GET SAVED WORKER DATA
// ========================================

const workerData = getWorkerData();

const personal = workerData.personal || {};

const work = workerData.work || {};

const membership = workerData.membership || {};

// ========================================
// DASHBOARD DATA
// ========================================

const fullName =
personal.fullName ||
personal.name ||
"GigShield Member";

const firstName =
fullName.split(" ")[0];

const initials =
fullName
.split(" ")
.filter(Boolean)
.slice(0, 2)
.map((name) => name.charAt(0).toUpperCase())
.join("") || "GS";

const workerRole =
work.workerRole ||
work.role ||
work.workerType ||
"Gig Worker";

const plan =
membership.plan || "Plus";

const coverage =
membership.coverage || "₹2L Accident Cover";

const workerId =
membership.workerId || "GSW000001";

const memberSince =
membership.memberSince || "Not Available";

const status =
membership.status || "Active";

return (


<main className="gs-dashboard-page">

  <div className="gs-dashboard-container">


    {/* ========================================
        TOP HEADER
    ======================================== */}

    <header className="gs-dashboard-header">

      <div className="gs-dashboard-welcome">

        <span className="gs-dashboard-label">
          WORKER DASHBOARD
        </span>

        <h1>
          Welcome back, {firstName}
          <span className="gs-wave">👋</span>
        </h1>

        <p>
          Your GigShield protection is active.
          Here's an overview of your membership.
        </p>

      </div>


      <div className="gs-dashboard-profile">

        <button
          className="gs-notification-btn"
          type="button"
        >
          <FaBell />

          <span></span>
        </button>


        <div className="gs-profile-avatar">
          {initials}
        </div>


        <div className="gs-profile-info">

          <strong>
            {fullName}
          </strong>

          <span>
            {workerRole}
          </span>

        </div>

      </div>

    </header>



    {/* ========================================
        PROTECTION HERO
    ======================================== */}

    <section className="gs-protection-hero">


      <div className="gs-protection-main">


        <div className="gs-protection-status">

          <FaCheckCircle />

          PROTECTION {status.toUpperCase()}

        </div>


        <h2>
          You're covered with
          <span> GigShield {plan}</span>
        </h2>


        <p className="gs-protection-message">
          Your protection plan is active and your
          benefits are available whenever you need them.
        </p>


        <div className="gs-hero-details">


          <div>

            <span>
              COVERAGE
            </span>

            <strong>
              {coverage}
            </strong>

          </div>


          <div className="gs-hero-divider"></div>


          <div>

            <span>
              MEMBER ID
            </span>

            <strong>
              {workerId}
            </strong>

          </div>


          <div className="gs-hero-divider"></div>


          <div>

            <span>
              MEMBER SINCE
            </span>

            <strong>
              {memberSince}
            </strong>

          </div>

        </div>


        <div className="gs-hero-buttons">

          <Button
            variant="primary"
            size="medium"
            icon={<FaIdCard />}
            onClick={() => navigate("/worker-id")}
          >
            View Worker ID
          </Button>


          <Button
            variant="outline"
            size="medium"
            icon={<FaFileMedical />}
            onClick={() => navigate("/claims")}
          >
            Raise a Claim
          </Button>

        </div>

      </div>



      {/* RIGHT DECORATIVE SHIELD */}

      <div className="gs-hero-visual">

        <div className="gs-shield-glow"></div>


        <div className="gs-shield-circle">

          <FaShieldAlt />

        </div>


        <div className="gs-secure-text">

          <FaCheckCircle />

          <div>

            <strong>
              Protected
            </strong>

            <span>
              GigShield Verified
            </span>

          </div>

        </div>

      </div>


    </section>



    {/* ========================================
        QUICK ACTIONS
    ======================================== */}

    <section className="gs-dashboard-section">


      <div className="gs-section-heading">

        <div>

          <span>
            QUICK ACCESS
          </span>

          <h2>
            What would you like to do?
          </h2>

        </div>

      </div>



      <div className="gs-quick-actions">


        <button
          className="gs-quick-card"
          onClick={() => navigate("/worker-id")}
        >

          <div className="gs-quick-icon gs-icon-blue">
            <FaIdCard />
          </div>

          <div className="gs-quick-content">

            <h3>
              Worker ID
            </h3>

            <p>
              View your verified digital worker card.
            </p>

          </div>

          <FaArrowRight className="gs-action-arrow" />

        </button>



        <button
          className="gs-quick-card"
          onClick={() => navigate("/claims")}
        >

          <div className="gs-quick-icon gs-icon-orange">
            <FaFileMedical />
          </div>

          <div className="gs-quick-content">

            <h3>
              Claims
            </h3>

            <p>
              Submit a new claim or track status.
            </p>

          </div>

          <FaArrowRight className="gs-action-arrow" />

        </button>



        <button
          className="gs-quick-card"
          onClick={() => navigate("/nominee")}
        >

          <div className="gs-quick-icon gs-icon-green">
            <FaUserFriends />
          </div>

          <div className="gs-quick-content">

            <h3>
              Nominee
            </h3>

            <p>
              View or update your nominee details.
            </p>

          </div>

          <FaArrowRight className="gs-action-arrow" />

        </button>



        <button
          className="gs-quick-card"
          onClick={() => navigate("/contact")}
        >

          <div className="gs-quick-icon gs-icon-purple">
            <FaHeadset />
          </div>

          <div className="gs-quick-content">

            <h3>
              Support
            </h3>

            <p>
              Contact the GigShield support team.
            </p>

          </div>

          <FaArrowRight className="gs-action-arrow" />

        </button>


      </div>

    </section>



    {/* ========================================
        LOWER DASHBOARD GRID
    ======================================== */}

    <section className="gs-dashboard-bottom-grid">


      {/* BENEFITS */}

      <div className="gs-dashboard-panel">


        <div className="gs-panel-header">

          <div>

            <span>
              YOUR PLAN
            </span>

            <h2>
              Protection Benefits
            </h2>

          </div>


          <div className="gs-plan-badge">
            {plan.toUpperCase()} PLAN
          </div>

        </div>



        <div className="gs-benefits-grid">


          <div className="gs-benefit-item">

            <div className="gs-benefit-icon">
              <FaShieldAlt />
            </div>

            <div>

              <strong>
                Accident Protection
              </strong>

              <span>
                {coverage}
              </span>

            </div>

            <FaCheckCircle className="gs-benefit-check" />

          </div>



          <div className="gs-benefit-item">

            <div className="gs-benefit-icon">
              <FaHospital />
            </div>

            <div>

              <strong>
                Hospital Cash
              </strong>

              <span>
                Financial assistance during hospitalisation
              </span>

            </div>

            <FaCheckCircle className="gs-benefit-check" />

          </div>



          <div className="gs-benefit-item">

            <div className="gs-benefit-icon">
              <FaHeadset />
            </div>

            <div>

              <strong>
                24x7 Support
              </strong>

              <span>
                Assistance whenever you need help
              </span>

            </div>

            <FaCheckCircle className="gs-benefit-check" />

          </div>



          <div className="gs-benefit-item">

            <div className="gs-benefit-icon">
              <FaWallet />
            </div>

            <div>

              <strong>
                Claim Assistance
              </strong>

              <span>
                Guided support throughout your claim
              </span>

            </div>

            <FaCheckCircle className="gs-benefit-check" />

          </div>


        </div>

      </div>



      {/* RECENT ACTIVITY */}

      <div className="gs-dashboard-panel gs-activity-panel">


        <div className="gs-panel-header">

          <div>

            <span>
              ACCOUNT
            </span>

            <h2>
              Recent Activity
            </h2>

          </div>

        </div>



        <div className="gs-activity-list">


          <div className="gs-activity-item">

            <div className="gs-activity-marker">

              <FaCheckCircle />

              <span></span>

            </div>


            <div>

              <strong>
                Protection Activated
              </strong>

              <p>
                Your {plan} plan is now active.
              </p>

              <small>
                Today
              </small>

            </div>

          </div>



          <div className="gs-activity-item">

            <div className="gs-activity-marker">

              <FaIdCard />

              <span></span>

            </div>


            <div>

              <strong>
                Worker ID Generated
              </strong>

              <p>
                Your digital Worker ID is ready.
              </p>

              <small>
                Today
              </small>

            </div>

          </div>



          <div className="gs-activity-item">

            <div className="gs-activity-marker">

              <FaUserFriends />

            </div>


            <div>

              <strong>
                Nominee Added
              </strong>

              <p>
                Nominee information was registered.
              </p>

              <small>
                Today
              </small>

            </div>

          </div>


        </div>

      </div>


    </section>



    {/* ========================================
        EMERGENCY SUPPORT
    ======================================== */}

    <section className="gs-emergency-banner">


      <div className="gs-emergency-left">

        <div className="gs-emergency-icon">
          <FaPhoneAlt />
        </div>


        <div>

          <span>
            24x7 EMERGENCY SUPPORT
          </span>

          <h2>
            Need immediate assistance?
          </h2>

          <p>
            Our support team is available whenever
            you need urgent help.
          </p>

        </div>

      </div>



      <div className="gs-emergency-actions">

        <div className="gs-helpline-number">

          <span>
            EMERGENCY HELPLINE
          </span>

          <strong>
            1800 889 5353
          </strong>

        </div>


        <Button
          variant="primary"
          icon={<FaPhoneAlt />}
          onClick={() => navigate("/contact")}
        >
          Get Support
        </Button>

      </div>


    </section>



    {/* SMALL FOOTER SPACE */}

    <div className="gs-dashboard-footer-note">

      <FaShieldAlt />

      <span>
        Protected by GigShield Worker Protection Platform
      </span>

    </div>


  </div>

</main>
```

);

}

export default Dashboard;
