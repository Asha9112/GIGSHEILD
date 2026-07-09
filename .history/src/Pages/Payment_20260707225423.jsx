import { useLocation, useNavigate } from "react-router-dom";
import {
  FaShieldAlt,
  FaCheckCircle,
  FaLock,
  FaCreditCard,
  FaMobileAlt,
  FaUniversity,
  FaArrowLeft,
} from "react-icons/fa";

import "../styles/payment.css";

function Payment() {
  const navigate = useNavigate();
  const location = useLocation();

  const selectedPlan = location.state || {
    plan: "Plus",
    price: 69,
    coverage: "₹2L Accident Cover",
  };

  const handlePayment = () => {
    // Temporary frontend flow only.
    // Later Razorpay/backend verification will be connected here.

    navigate("/complete", {
      state: {
        plan: selectedPlan.plan,
        price: selectedPlan.price,
      },
    });
  };

  return (
    <main className="gs-payment-page">

      <div className="gs-payment-container">

        {/* BACK BUTTON */}

        <button
          className="gs-payment-back"
          onClick={() => navigate("/pricing")}
        >
          <FaArrowLeft />
          Change Plan
        </button>


        <div className="gs-payment-grid">

          {/* LEFT SIDE */}

          <section className="gs-payment-left">

            <div className="gs-payment-badge">
              <FaShieldAlt />
              SECURE CHECKOUT
            </div>

            <h1>
              Complete Your
              <span> Protection Plan</span>
            </h1>

            <p className="gs-payment-description">
              You're one step away from activating your GigShield
              protection.
            </p>


            {/* SELECTED PLAN */}

            <div className="gs-selected-plan-card">

              <div className="gs-selected-plan-top">

                <div>
                  <span>SELECTED PLAN</span>
                  <h2>GigShield {selectedPlan.plan}</h2>
                </div>

                <FaCheckCircle />
              </div>


              <div className="gs-plan-price">

                {selectedPlan.price === 0 ? (
                  <h3>FREE</h3>
                ) : (
                  <>
                    <h3>₹{selectedPlan.price}</h3>
                    <span>/ month</span>
                  </>
                )}

              </div>


              <div className="gs-plan-feature">

                <FaShieldAlt />

                <div>
                  <span>Protection Benefit</span>
                  <strong>{selectedPlan.coverage}</strong>
                </div>

              </div>


              <button
                type="button"
                className="gs-change-plan-link"
                onClick={() => navigate("/pricing")}
              >
                Change selected plan
              </button>

            </div>


            {/* TRUST POINTS */}

            <div className="gs-payment-trust">

              <div>
                <FaLock />

                <span>
                  Secure payment experience
                </span>
              </div>


              <div>
                <FaShieldAlt />

                <span>
                  Protection details clearly displayed
                </span>
              </div>


              <div>
                <FaCheckCircle />

                <span>
                  Instant confirmation after successful activation
                </span>
              </div>

            </div>

          </section>


          {/* RIGHT SIDE */}

          <section className="gs-payment-card">

            {selectedPlan.price === 0 ? (

              /* FREE PLAN */

              <div className="gs-free-plan-content">

                <div className="gs-free-icon">
                  <FaShieldAlt />
                </div>

                <span className="gs-payment-step">
                  FREE MEMBERSHIP
                </span>

                <h2>Activate Your Free Plan</h2>

                <p>
                  No payment is required. Continue to activate your
                  GigShield Free membership and Worker ID.
                </p>


                <div className="gs-free-summary">

                  <div>
                    <span>Plan</span>
                    <strong>GigShield Free</strong>
                  </div>

                  <div>
                    <span>Amount Due</span>
                    <strong>₹0</strong>
                  </div>

                </div>


                <button
                  className="gs-pay-button"
                  onClick={handlePayment}
                >
                  Activate Free Plan
                </button>

              </div>

            ) : (

              /* PAID PLAN */

              <>
                <div className="gs-payment-card-header">

                  <span className="gs-payment-step">
                    PAYMENT
                  </span>

                  <h2>Choose Payment Method</h2>

                  <p>
                    Select your preferred payment option.
                  </p>

                </div>


                {/* PAYMENT METHODS */}

                <div className="gs-payment-methods">

                  <label className="gs-payment-method gs-method-active">

                    <input
                      type="radio"
                      name="paymentMethod"
                      defaultChecked
                    />

                    <div className="gs-method-icon">
                      <FaMobileAlt />
                    </div>

                    <div>
                      <strong>UPI</strong>
                      <span>
                        Google Pay, PhonePe, Paytm or any UPI app
                      </span>
                    </div>

                  </label>


                  <label className="gs-payment-method">

                    <input
                      type="radio"
                      name="paymentMethod"
                    />

                    <div className="gs-method-icon">
                      <FaCreditCard />
                    </div>

                    <div>
                      <strong>Debit / Credit Card</strong>
                      <span>
                        Visa, Mastercard and RuPay cards
                      </span>
                    </div>

                  </label>


                  <label className="gs-payment-method">

                    <input
                      type="radio"
                      name="paymentMethod"
                    />

                    <div className="gs-method-icon">
                      <FaUniversity />
                    </div>

                    <div>
                      <strong>Net Banking</strong>
                      <span>
                        Pay securely through your bank
                      </span>
                    </div>

                  </label>

                </div>


                {/* PRICE SUMMARY */}

                <div className="gs-payment-summary">

                  <div>
                    <span>
                      GigShield {selectedPlan.plan}
                    </span>

                    <strong>
                      ₹{selectedPlan.price}
                    </strong>
                  </div>


                  <div>
                    <span>Platform Fee</span>

                    <strong className="gs-free-text">
                      FREE
                    </strong>
                  </div>


                  <div className="gs-payment-total">

                    <span>Total Payable</span>

                    <strong>
                      ₹{selectedPlan.price}
                    </strong>

                  </div>

                </div>


                {/* CONSENT */}

                <label className="gs-payment-consent">

                  <input
                    type="checkbox"
                    required
                  />

                  <span>
                    I agree to the applicable plan terms and confirm
                    that the information provided during registration
                    is correct.
                  </span>

                </label>


                {/* PAY BUTTON */}

                <button
                  className="gs-pay-button"
                  onClick={handlePayment}
                >
                  <FaLock />

                  Pay ₹{selectedPlan.price} Securely
                </button>


                <div className="gs-secure-note">

                  <FaLock />

                  <span>
                    Secure payment processing. GigShield does not store
                    your card or UPI credentials.
                  </span>

                </div>

              </>

            )}

          </section>

        </div>

      </div>

    </main>
  );
}

export default Payment;