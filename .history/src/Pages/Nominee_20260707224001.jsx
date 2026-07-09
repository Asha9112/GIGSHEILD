import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaUserShield,
  FaUser,
  FaPhoneAlt,
  FaUsers,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaShieldAlt,
  FaArrowRight,
  FaLock,
  FaCheckCircle,
} from "react-icons/fa";

import "../styles/nominee.css";

function Nominee() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    nomineeName: "",
    relationship: "",
    mobile: "",
    dob: "",
    address: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Temporary storage for frontend flow.
    // Later we will save this through backend API.
    localStorage.setItem(
      "gigshieldNominee",
      JSON.stringify(formData)
    );

    navigate("/");
  };

  return (
    <main className="nominee-page">

      <section className="nominee-layout">

        {/* LEFT INFORMATION PANEL */}

        <div className="nominee-info-panel">

          <div className="nominee-brand-badge">
            <FaShieldAlt />
            GIGSHIELD PROTECTION
          </div>

          <h1>
            Protect the people
            <span> who matter most.</span>
          </h1>

          <p className="nominee-info-description">
            Add a trusted family member as your nominee so the right
            person can receive support when it matters.
          </p>


          <div className="nominee-benefits">

            <div className="nominee-benefit-item">

              <div className="nominee-benefit-icon">
                <FaUserShield />
              </div>

              <div>
                <h3>Trusted Nominee</h3>

                <p>
                  Choose a family member or trusted person for your
                  protection plan.
                </p>
              </div>

            </div>


            <div className="nominee-benefit-item">

              <div className="nominee-benefit-icon">
                <FaCheckCircle />
              </div>

              <div>
                <h3>Simpler Claim Assistance</h3>

                <p>
                  Nominee information helps make the claim assistance
                  process clearer and faster.
                </p>
              </div>

            </div>


            <div className="nominee-benefit-item">

              <div className="nominee-benefit-icon">
                <FaLock />
              </div>

              <div>
                <h3>Secure Information</h3>

                <p>
                  Personal nominee information will be protected and
                  available only through authorised access.
                </p>
              </div>

            </div>

          </div>


          <div className="nominee-note-box">

            <FaShieldAlt />

            <div>
              <strong>Your privacy matters</strong>

              <p>
                Nominee details are not displayed on the public QR
                verification page.
              </p>
            </div>

          </div>

        </div>


        {/* RIGHT FORM CARD */}

        <div className="nominee-form-card">

          <div className="nominee-form-header">

            <div className="nominee-header-icon">
              <FaUserShield />
            </div>

            <div>
              <span>STEP 4 OF REGISTRATION</span>

              <h2>Add Nominee Details</h2>

              <p>
                Enter the details of the person you want to register
                as your nominee.
              </p>
            </div>

          </div>


          <form
            className="nominee-form"
            onSubmit={handleSubmit}
          >

            {/* NAME */}

            <div className="nominee-field">

              <label htmlFor="nomineeName">
                Nominee Full Name
              </label>

              <div className="nominee-input-wrapper">

                <FaUser />

                <input
                  id="nomineeName"
                  type="text"
                  name="nomineeName"
                  value={formData.nomineeName}
                  onChange={handleChange}
                  placeholder="Enter nominee full name"
                  required
                />

              </div>

            </div>


            {/* RELATIONSHIP + MOBILE */}

            <div className="nominee-form-row">

              <div className="nominee-field">

                <label htmlFor="relationship">
                  Relationship
                </label>

                <div className="nominee-input-wrapper">

                  <FaUsers />

                  <select
                    id="relationship"
                    name="relationship"
                    value={formData.relationship}
                    onChange={handleChange}
                    required
                  >
                    <option value="">
                      Select relationship
                    </option>

                    <option value="spouse">
                      Spouse
                    </option>

                    <option value="father">
                      Father
                    </option>

                    <option value="mother">
                      Mother
                    </option>

                    <option value="son">
                      Son
                    </option>

                    <option value="daughter">
                      Daughter
                    </option>

                    <option value="brother">
                      Brother
                    </option>

                    <option value="sister">
                      Sister
                    </option>

                    <option value="other">
                      Other
                    </option>
                  </select>

                </div>

              </div>


              <div className="nominee-field">

                <label htmlFor="mobile">
                  Mobile Number
                </label>

                <div className="nominee-input-wrapper">

                  <FaPhoneAlt />

                  <input
                    id="mobile"
                    type="tel"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleChange}
                    placeholder="10-digit mobile number"
                    pattern="[0-9]{10}"
                    maxLength="10"
                    inputMode="numeric"
                    required
                  />

                </div>

              </div>

            </div>


            {/* DOB */}

            <div className="nominee-field">

              <label htmlFor="dob">
                Date of Birth
              </label>

              <div className="nominee-input-wrapper">

                <FaCalendarAlt />

                <input
                  id="dob"
                  type="date"
                  name="dob"
                  value={formData.dob}
                  onChange={handleChange}
                  required
                />

              </div>

            </div>


            {/* ADDRESS */}

            <div className="nominee-field">

              <label htmlFor="address">
                Address
                <span className="optional-text">
                  Optional
                </span>
              </label>

              <div className="nominee-input-wrapper nominee-textarea-wrapper">

                <FaMapMarkerAlt />

                <textarea
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="Enter nominee address"
                  rows="3"
                />

              </div>

            </div>


            {/* CONSENT */}

            <div className="nominee-consent">

              <FaLock />

              <p>
                By continuing, you confirm that the nominee information
                entered above is correct and you are authorised to provide it.
              </p>

            </div>


            {/* BUTTON */}

            <button
              type="submit"
              className="nominee-continue-btn"
            >
              Continue

              <FaArrowRight />
            </button>

          </form>

        </div>

      </section>

    </main>
  );
}

export default Nominee;