import { useState } from "react";
import {
  FaWhatsapp,
  FaEnvelope,
  FaPhoneAlt,
  FaHeadset,
  FaClock,
  FaShieldAlt,
  FaPaperPlane,
} from "react-icons/fa";

import "../styles/contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Backend API will be connected later
    console.log("Contact Form Data:", formData);

    setSubmitted(true);

    setFormData({
      name: "",
      mobile: "",
      email: "",
      subject: "",
      message: "",
    });

    setTimeout(() => {
      setSubmitted(false);
    }, 4000);
  };

  return (
    <main className="contact-page">

      {/* HERO SECTION */}

      <section className="contact-hero">
        <div className="contact-hero-content">

          <span className="contact-eyebrow">
            GIGSHIELD SUPPORT
          </span>

          <h1>We're Here When You Need Us</h1>

          <p>
            Questions about your protection plan, worker ID or claims?
            Our support team is ready to help you.
          </p>

          <div className="contact-hero-badges">

            <span>
              <FaShieldAlt />
              Trusted Support
            </span>

            <span>
              <FaClock />
              24x7 Emergency Help
            </span>

          </div>

        </div>
      </section>


      {/* SUPPORT OPTIONS */}

      <section className="support-section">

        <div className="contact-section-heading">
          <span>QUICK SUPPORT</span>
          <h2>Choose How You Want to Reach Us</h2>
          <p>
            Get help through the channel that works best for you.
          </p>
        </div>


        <div className="support-cards">

          <div className="support-card whatsapp-card">

            <div className="support-icon">
              <FaWhatsapp />
            </div>

            <h3>WhatsApp Support</h3>

            <p>
              Get quick help with plans, account support and claim guidance.
            </p>

            <button
              type="button"
              onClick={() =>
                window.open(
                  "https://wa.me/918000000000",
                  "_blank",
                  "noopener,noreferrer"
                )
              }
            >
              Chat on WhatsApp
            </button>

          </div>


          <div className="support-card">

            <div className="support-icon">
              <FaPhoneAlt />
            </div>

            <h3>Emergency Helpline</h3>

            <p>
              For urgent assistance related to an accident or active protection.
            </p>

            <a href="tel:18008895353">
              1800 889 5353
            </a>

            <span className="availability">
              Available 24x7
            </span>

          </div>


          <div className="support-card">

            <div className="support-icon">
              <FaEnvelope />
            </div>

            <h3>Email Support</h3>

            <p>
              Send us your detailed questions and our support team will respond.
            </p>

            <a href="mailto:support@gigshield.in">
              support@gigshield.in
            </a>

            <span className="availability">
              Response within 24 hours
            </span>

          </div>

        </div>

      </section>


      {/* CONTACT FORM */}

      <section className="contact-main-section">

        <div className="contact-main-grid">

          {/* LEFT SIDE */}

          <div className="contact-info-panel">

            <span className="contact-small-title">
              CONTACT GIGSHIELD
            </span>

            <h2>How Can We Help You?</h2>

            <p className="contact-description">
              Tell us what you need help with. Our support team will review
              your request and get back to you as soon as possible.
            </p>


            <div className="info-point">

              <div className="info-point-icon">
                <FaHeadset />
              </div>

              <div>
                <h4>Worker Support</h4>
                <p>
                  Help with registration, plans, payments and your Worker ID.
                </p>
              </div>

            </div>


            <div className="info-point">

              <div className="info-point-icon">
                <FaShieldAlt />
              </div>

              <div>
                <h4>Claims Assistance</h4>
                <p>
                  Guidance for claim submission, documents and claim tracking.
                </p>
              </div>

            </div>


            <div className="response-box">

              <FaClock />

              <div>
                <strong>Typical Response Time</strong>
                <p>
                  Most support requests are answered within 24 hours.
                </p>
              </div>

            </div>

          </div>


          {/* RIGHT SIDE FORM */}

          <div className="contact-form-card">

            <div className="form-heading">
              <h2>Send Us a Message</h2>
              <p>
                Fill in the form and our team will contact you.
              </p>
            </div>


            {submitted && (
              <div className="contact-success-message">
                ✓ Your message has been received. Our support team will contact
                you soon.
              </div>
            )}


            <form onSubmit={handleSubmit}>

              <div className="contact-form-row">

                <div className="contact-form-group">
                  <label>Full Name</label>

                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    required
                  />
                </div>


                <div className="contact-form-group">
                  <label>Mobile Number</label>

                  <input
                    type="tel"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleChange}
                    placeholder="Enter mobile number"
                    pattern="[0-9]{10}"
                    maxLength="10"
                    required
                  />
                </div>

              </div>


              <div className="contact-form-group">
                <label>Email Address</label>

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email address"
                  required
                />
              </div>


              <div className="contact-form-group">
                <label>What do you need help with?</label>

                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select a topic</option>
                  <option value="account">Account Support</option>
                  <option value="plans">Protection Plans</option>
                  <option value="payment">Payment Issue</option>
                  <option value="claim">Claim Support</option>
                  <option value="worker-id">Worker ID</option>
                  <option value="partnership">Partnership</option>
                  <option value="other">Other</option>
                </select>
              </div>


              <div className="contact-form-group">
                <label>Message</label>

                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us how we can help you..."
                  rows="5"
                  required
                />
              </div>


              <button
                type="submit"
                className="contact-submit-btn"
              >
                <FaPaperPlane />
                Send Message
              </button>

            </form>

          </div>

        </div>

      </section>


      {/* EMERGENCY SECTION */}

      <section className="contact-emergency-section">

        <div className="emergency-content">

          <div className="emergency-icon-box">
            <FaPhoneAlt />
          </div>

          <div className="emergency-text">
            <span>NEED URGENT HELP?</span>
            <h2>Emergency Assistance Is Available 24x7</h2>

            <p>
              If you or a protected worker needs urgent assistance after an
              accident, contact our emergency support team immediately.
            </p>
          </div>


          <div className="emergency-action">

            <a href="tel:18008895353">
              <FaPhoneAlt />
              1800 889 5353
            </a>

            <span>Available 24 hours, 7 days a week</span>

          </div>

        </div>

      </section>

    </main>
  );
}

export default Contact;