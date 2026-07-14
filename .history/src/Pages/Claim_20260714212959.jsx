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
                            {/* ===========================
                  CLAIM TYPE
              =========================== */}

              <div className="claim-field">

                <label>
                  Claim Type
                </label>

                <select
                  name="claimType"
                  value={claimData.claimType}
                  onChange={handleChange}
                  required
                >

                  <option value="">
                    Select Claim Type
                  </option>

                  <option value="Accidental Injury">
                    Accidental Injury
                  </option>

                  <option value="Hospital Admission">
                    Hospital Admission
                  </option>

                  <option value="Vehicle Damage">
                    Vehicle Damage
                  </option>

                  <option value="Accidental Death">
                    Accidental Death
                  </option>

                  <option value="Other">
                    Other
                  </option>

                </select>

              </div>


              {/* ===========================
                  DATE & TIME
              =========================== */}

              <div className="claim-row">

                <div className="claim-field">

                  <label>

                    <FaCalendarAlt />

                    Incident Date

                  </label>

                  <input
                    type="date"
                    name="incidentDate"
                    value={claimData.incidentDate}
                    onChange={handleChange}
                    required
                  />

                </div>

                <div className="claim-field">

                  <label>

                    <FaClock />

                    Incident Time

                  </label>

                  <input
                    type="time"
                    name="incidentTime"
                    value={claimData.incidentTime}
                    onChange={handleChange}
                  />

                </div>

              </div>


              {/* ===========================
                  LOCATION
              =========================== */}

              <div className="claim-field">

                <label>

                  <FaMapMarkerAlt />

                  Incident Location

                </label>

                <div className="location-wrapper">

                  <input
                    type="text"
                    name="location"
                    value={claimData.location}
                    onChange={handleChange}
                    placeholder="Capture current location or enter manually"
                  />

                  <button
                    type="button"
                    className="location-btn"
                    onClick={getCurrentLocation}
                  >

                    <FaLocationArrow />

                    {

                      loadingLocation
                        ? "Getting..."
                        : "Use Current Location"

                    }

                  </button>

                </div>

              </div>


              {/* ===========================
                  CONTACT NUMBER
              =========================== */}

              <div className="claim-field">

                <label>

                  <FaPhoneAlt />

                  Contact Number

                </label>

                <input
                  type="text"
                  name="contactNumber"
                  value={claimData.contactNumber}
                  onChange={handleChange}
                  placeholder="Mobile Number"
                />

              </div>


              {/* ===========================
                  DESCRIPTION
              =========================== */}

              <div className="claim-field">

                <label>

                  Describe the Incident

                </label>

                <textarea
                  rows="6"
                  name="description"
                  value={claimData.description}
                  onChange={handleChange}
                  placeholder="Explain what happened. Include the reason, place, people involved and any important information."
                />

              </div>


              {/* ===========================
                  LIVE PHOTO
              =========================== */}

              <CameraCapture
                onImageCapture={handlePhoto}
              />


              {/* ===========================
                  DOCUMENT UPLOAD
              =========================== */}

              <DocumentUpload
                onFilesChange={handleDocuments}
              />
              