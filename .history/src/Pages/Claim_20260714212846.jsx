import { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  FaShieldAlt,
  FaArrowRight,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaClock,
  FaPhoneAlt,
  FaFileMedical,
  FaCheckCircle,
  FaExclamationTriangle,
  FaLocationArrow,
} from "react-icons/fa";

import CameraCapture from "../components/claims/CameraCapture";
import DocumentUpload from "../components/claims/DocumentUpload";
import MembershipCard from "../components/claims/MembershipCard";
import ClaimTimeline from "../components/claims/ClaimTimeline";

import { saveClaim } from "../utils/claimStorage";
import { getWorkerData } from "../utils/workerStorage";

import "../styles/claim.css";

function Claim() {

  const navigate = useNavigate();

  const worker = getWorkerData();

  const [claimData, setClaimData] = useState({

    claimType: "",

    incidentDate: "",

    incidentTime: "",

    location: "",

    description: "",

    contactNumber:
      worker.personal.mobile || "",

    photo: null,

    documents: [],

  });

  const [loadingLocation, setLoadingLocation] =
    useState(false);

  const handleChange = (event) => {

    const { name, value } = event.target;

    setClaimData((previous) => ({
      ...previous,
      [name]: value,
    }));

  };

  const handlePhoto = (photo) => {

    setClaimData((previous) => ({
      ...previous,
      photo,
    }));

  };

  const handleDocuments = (documents) => {

    setClaimData((previous) => ({
      ...previous,
      documents,
    }));

  };

  const getCurrentLocation = () => {

    if (!navigator.geolocation) {

      alert("Geolocation is not supported.");

      return;

    }

    setLoadingLocation(true);

    navigator.geolocation.getCurrentPosition(

      (position) => {

        const latitude =
          position.coords.latitude;

        const longitude =
          position.coords.longitude;

        setClaimData((previous) => ({

          ...previous,

          location:
            `${latitude.toFixed(6)}, ${longitude.toFixed(6)}`,

        }));

        setLoadingLocation(false);

      },

      () => {

        alert("Unable to fetch location.");

        setLoadingLocation(false);

      }

    );

  };

  const handleSubmit = (event) => {

    event.preventDefault();

    if (!claimData.claimType) {

      alert("Please select claim type.");

      return;

    }

    if (!claimData.incidentDate) {

      alert("Please select incident date.");

      return;

    }

    if (!claimData.description) {

      alert("Please describe the incident.");

      return;

    }

    const claim = saveClaim({

      workerId:
        worker.membership.workerId,

      workerName:
        worker.personal.fullName,

      platform:
        worker.work.platform,

      ...claimData,

    });

    navigate("/claim-success", {

      state: {

        claim,

      },

    });

  };

  return (

    <main className="claim-page">

      <section className="claim-layout">

        {/* ===========================
            LEFT PANEL
        =========================== */}

        <aside className="claim-left-panel">

          <div className="claim-brand">

            <div className="claim-logo">

              <FaShieldAlt />

            </div>

            <div>

              <h1>GigShield</h1>

              <p>
                Protection & Claim Assistance
              </p>

            </div>

          </div>

          <span className="claim-badge">

            INSURANCE CLAIM SUPPORT

          </span>

          <h2>

            Submit your claim

            <span>

              with confidence.

            </span>

          </h2>

          <p className="claim-description">

            Provide complete claim details,

            upload supporting evidence,

            and our claims team will review

            your request as quickly as possible.

          </p>

          <div className="claim-highlights">

            <div>

              <FaCheckCircle />

              <span>

                Live Incident Verification

              </span>

            </div>

            <div>

              <FaCheckCircle />

              <span>

                Medical Document Support

              </span>

            </div>

            <div>

              <FaCheckCircle />

              <span>

                Faster Claim Processing

              </span>

            </div>

            <div>

              <FaCheckCircle />

              <span>

                24×7 Claim Assistance

              </span>

            </div>

          </div>

          <ClaimTimeline />

          <div className="claim-help-card">

            <FaExclamationTriangle />

            <div>

              <h3>

                Emergency Assistance

              </h3>

              <p>

                Need immediate help?

              </p>

              <strong>

                1800-889-5353

              </strong>

            </div>

          </div>

        </aside>

        {/* ===========================
            RIGHT PANEL
        =========================== */}

        <section className="claim-right-panel">

          <div className="claim-form-card">

            <div className="claim-form-header">

              <FaFileMedical />

              <div>

                <span>

                  CLAIM REGISTRATION

                </span>

                <h2>

                  Submit Insurance Claim

                </h2>

                <p>

                  Fill in the details below

                  and attach all supporting

                  documents.

                </p>

              </div>

            </div>

            <form
              className="claim-form"
              onSubmit={handleSubmit}
            >