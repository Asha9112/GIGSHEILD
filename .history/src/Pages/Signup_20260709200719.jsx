import { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  FaShieldAlt,
  FaUser,
  FaEnvelope,
  FaPhoneAlt,
  FaLock,
  FaEye,
  FaEyeSlash,
  FaArrowRight,
  FaCheckCircle,
} from "react-icons/fa";

import { registerUser } from "../utils/authStorage";

import {
  savePersonalDetails,
} from "../utils/workerStorage";

import "../styles/signup.css";


function Signup() {

  const navigate = useNavigate();


  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    mobile: "",
    password: "",
    confirmPassword: "",
  });


  const [showPassword, setShowPassword] =
    useState(false);


  const [showConfirmPassword, setShowConfirmPassword] =
    useState(false);


  const [error, setError] =
    useState("");


  const handleChange = (e) => {

    const { name, value } = e.target;


    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));


    setError("");

  };


  const handleSubmit = (e) => {

    e.preventDefault();


    if (formData.password.length < 6) {

      setError(
        "Password must contain at least 6 characters."
      );

      return;
    }


    if (
      formData.password !==
      formData.confirmPassword
    ) {

      setError(
        "Passwords do not match."
      );

      return;
    }


    const result = registerUser({
      fullName: formData.fullName.trim(),
      email: formData.email.trim(),
      mobile: formData.mobile.trim(),
      password: formData.password,
    });


    if (!result.success) {

      setError(result.message);

      return;
    }


    savePersonalDetails({
      fullName: formData.fullName.trim(),
      email: formData.email.trim(),
      mobile: formData.mobile.trim(),
    });


    navigate("/login", {
      state: {
        accountCreated: true,
      },
    });

  };


  return (

    <main className="gs-signup-page">


      {/* ========================================
          LEFT PANEL
      ======================================== */}

      <section className="gs-signup-visual">


        <div className="gs-signup-brand">

          <div className="gs-signup-logo">
            <FaShieldAlt />
          </div>


          <div>

            <h1>
              Gig<span>Shield</span>
            </h1>

            <p>
              Safer Work. Better Tomorrow.
            </p>

          </div>

        </div>



        <div className="gs-signup-visual-content">


          <span className="gs-signup-badge">
            JOIN GIGSHIELD
          </span>


          <h2>
            Work confidently.
            <span> Stay protected.</span>
          </h2>


          <p>
            Create your GigShield account and access
            worker protection, a verified digital identity,
            nominee support and claim assistance.
          </p>



          <div className="gs-signup-benefits">


            <div>

              <FaCheckCircle />

              <span>
                Quick digital registration
              </span>

            </div>


            <div>

              <FaCheckCircle />

              <span>
                Verified Worker ID
              </span>

            </div>


            <div>

              <FaCheckCircle />

              <span>
                Flexible protection plans
              </span>

            </div>


            <div>

              <FaCheckCircle />

              <span>
                Claim assistance and support
              </span>

            </div>


          </div>


        </div>



        <div className="gs-signup-security-note">

          <FaShieldAlt />

          <span>
            Your information is handled securely
          </span>

        </div>


      </section>



      {/* ========================================
          SIGNUP FORM SECTION
      ======================================== */}

      <section className="gs-signup-form-section">


        <div className="gs-signup-card">


          <div className="gs-signup-mobile-brand">

            <FaShieldAlt />

            <strong>
              GigShield
            </strong>

          </div>



          <div className="gs-signup-header">


            <span>
              CREATE YOUR ACCOUNT
            </span>


            <h1>
              Join GigShield
            </h1>


            <p>
              Create your account to begin your worker
              protection registration.
            </p>


          </div>



          {error && (

            <div className="gs-signup-error">
              {error}
            </div>

          )}



          <form
            className="gs-signup-form"
            onSubmit={handleSubmit}
          >


            {/* FULL NAME */}

            <div className="gs-signup-field">

              <label htmlFor="fullName">
                Full Name
              </label>


              <div className="gs-signup-input">

                <FaUser />


                <input
                  id="fullName"
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  autoComplete="name"
                  required
                />

              </div>

            </div>



            {/* EMAIL */}

            <div className="gs-signup-field">

              <label htmlFor="email">
                Email Address
              </label>


              <div className="gs-signup-input">

                <FaEnvelope />


                <input
                  id="email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email address"
                  autoComplete="email"
                  required
                />

              </div>

            </div>



            {/* MOBILE */}

            <div className="gs-signup-field">

              <label htmlFor="mobile">
                Mobile Number
              </label>


              <div className="gs-signup-input">

                <FaPhoneAlt />


                <input
                  id="mobile"
                  type="tel"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  placeholder="Enter 10-digit mobile number"
                  pattern="[0-9]{10}"
                  maxLength="10"
                  inputMode="numeric"
                  autoComplete="tel"
                  required
                />

              </div>

            </div>



            {/* PASSWORD */}

            <div className="gs-signup-field">

              <label htmlFor="password">
                Create Password
              </label>


              <div className="gs-signup-input">

                <FaLock />


                <input
                  id="password"
                  type={
                    showPassword
                      ? "text"
                      : "password"
                  }
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Minimum 6 characters"
                  autoComplete="new-password"
                  required
                />


                <button
                  type="button"
                  className="gs-signup-password-toggle"
                  onClick={() =>
                    setShowPassword(
                      (previous) => !previous
                    )
                  }
                  aria-label={
                    showPassword
                      ? "Hide password"
                      : "Show password"
                  }
                >

                  {showPassword
                    ? <FaEyeSlash />
                    : <FaEye />
                  }

                </button>


              </div>

            </div>



            {/* CONFIRM PASSWORD */}

            <div className="gs-signup-field">

              <label htmlFor="confirmPassword">
                Confirm Password
              </label>


              <div className="gs-signup-input">

                <FaLock />


                <input
                  id="confirmPassword"
                  type={
                    showConfirmPassword
                      ? "text"
                      : "password"
                  }
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="Re-enter your password"
                  autoComplete="new-password"
                  required
                />


                <button
                  type="button"
                  className="gs-signup-password-toggle"
                  onClick={() =>
                    setShowConfirmPassword(
                      (previous) => !previous
                    )
                  }
                  aria-label={
                    showConfirmPassword
                      ? "Hide password"
                      : "Show password"
                  }
                >

                  {showConfirmPassword
                    ? <FaEyeSlash />
                    : <FaEye />
                  }

                </button>


              </div>

            </div>



            <button
              type="submit"
              className="gs-signup-submit"
            >

              Create Account

              <FaArrowRight />

            </button>


          </form>



          <div className="gs-signup-login-link">

            <span>
              Already have an account?
            </span>


            <button
              type="button"
              onClick={() =>
                navigate("/login")
              }
            >
              Login
            </button>


          </div>



          <p className="gs-signup-terms">

            By creating an account, you agree to
            GigShield's Terms of Service and Privacy Policy.

          </p>


        </div>


      </section>


    </main>

  );

}


export default Signup;