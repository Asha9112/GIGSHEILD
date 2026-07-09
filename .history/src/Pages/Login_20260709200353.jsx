import { useState } from "react";

import { useNavigate } from "react-router-dom";

import {
  FaShieldAlt,
  FaEnvelope,
  FaLock,
  FaEye,
  FaEyeSlash,
  FaArrowRight,
  FaCheckCircle,
} from "react-icons/fa";

import { loginUser } from "../utils/authStorage";

import "../styles/login.css";


function Login() {

  const navigate = useNavigate();


  const [formData, setFormData] = useState({
    identifier: "",
    password: "",
  });


  const [showPassword, setShowPassword] =
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


    const result = loginUser(
      formData.identifier.trim(),
      formData.password
    );


    if (!result.success) {

      setError(result.message);

      return;

    }


    navigate("/dashboard");

  };


  return (

    <main className="gs-login-page">


      {/* LEFT PANEL */}

      <section className="gs-login-visual">


        <div className="gs-login-brand">

          <div className="gs-login-logo">
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



        <div className="gs-login-visual-content">

          <span className="gs-login-badge">
            WORKER PROTECTION PLATFORM
          </span>


          <h2>
            Protection that works
            <span> as hard as you do.</span>
          </h2>


          <p>
            Access your worker protection,
            digital ID, nominee details and
            claim assistance from one secure
            dashboard.
          </p>



          <div className="gs-login-benefits">


            <div>
              <FaCheckCircle />

              <span>
                Digital Worker Identity
              </span>
            </div>


            <div>
              <FaCheckCircle />

              <span>
                Protection Plan Access
              </span>
            </div>


            <div>
              <FaCheckCircle />

              <span>
                Claim Assistance & Tracking
              </span>
            </div>


          </div>

        </div>



        <div className="gs-login-security-note">

          <FaShieldAlt />

          <span>
            Secure access to your GigShield membership
          </span>

        </div>


      </section>



      {/* RIGHT LOGIN PANEL */}

      <section className="gs-login-form-section">


        <div className="gs-login-card">


          <div className="gs-login-mobile-brand">

            <FaShieldAlt />

            <strong>
              GigShield
            </strong>

          </div>



          <div className="gs-login-header">

            <span>
              WELCOME BACK
            </span>


            <h1>
              Login to your account
            </h1>


            <p>
              Enter your registered email or mobile
              number to access your dashboard.
            </p>

          </div>



          {error && (

            <div className="gs-login-error">
              {error}
            </div>

          )}



          <form
            className="gs-login-form"
            onSubmit={handleSubmit}
          >


            {/* EMAIL OR MOBILE */}

            <div className="gs-login-field">

              <label htmlFor="identifier">
                Email or Mobile Number
              </label>


              <div className="gs-login-input">

                <FaEnvelope />


                <input
                  id="identifier"
                  type="text"
                  name="identifier"
                  value={formData.identifier}
                  onChange={handleChange}
                  placeholder="Enter email or mobile number"
                  autoComplete="username"
                  required
                />

              </div>

            </div>



            {/* PASSWORD */}

            <div className="gs-login-field">

              <div className="gs-password-label">

                <label htmlFor="password">
                  Password
                </label>


                <button
                  type="button"
                  className="gs-forgot-btn"
                  onClick={() =>
                    navigate("/forgot-password")
                  }
                >
                  Forgot Password?
                </button>

              </div>


              <div className="gs-login-input">

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
                  placeholder="Enter your password"
                  autoComplete="current-password"
                  required
                />


                <button
                  type="button"
                  className="gs-password-toggle"
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



            <button
              type="submit"
              className="gs-login-submit"
            >

              Login

              <FaArrowRight />

            </button>


          </form>



          <div className="gs-login-divider">

            <span>
              NEW TO GIGSHIELD?
            </span>

          </div>



          <button
            type="button"
            className="gs-create-account-btn"
            onClick={() =>
              navigate("/signup")
            }
          >

            Create New Account

          </button>



          <p className="gs-login-terms">

            By continuing, you agree to GigShield's
            Terms of Service and Privacy Policy.

          </p>


        </div>


      </section>


    </main>

  );

}


export default Login;