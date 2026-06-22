import {
  FaUser,
  FaPhone,
  FaCar,
  FaCalendar,
  FaShieldAlt,
  FaHospital,
  FaHeadset,
} from "react-icons/fa";

function WorkerId() {
  return (
    <div className="workerid-page">

      <div className="workerid-container">

        {/* Front Card */}
        <div className="id-front">

          <div className="id-header">
            <h1>GigShield</h1>
            <p>Safer Work. Better Tomorrow.</p>
          </div>

          <div className="id-body">
            <div className="profile-box">
              PHOTO
            </div>

            <div className="worker-info">
              <h2>Ramesh K</h2>
              <p>Delivery Partner</p>

              <p><FaUser /> GSW125678</p>
              <p><FaPhone /> 9876543210</p>
              <p><FaCar /> KA05KC1234</p>
              <p><FaCalendar /> 15 May 2024</p>
            </div>
          </div>

        </div>

        {/* Back Card */}
        <div className="id-back">

          <h2>GigShield Worker ID</h2>

          <div className="benefits">
            <div>
              <FaShieldAlt />
              <p>Accident Protection</p>
            </div>

            <div>
              <FaHospital />
              <p>Hospital Cash</p>
            </div>

            <div>
              <FaHeadset />
              <p>24x7 Support</p>
            </div>
          </div>

          <div className="helpline">
            <h3>Emergency Helpline</h3>
            <h1>1800 889 5353</h1>
          </div>

        </div>

      </div>

    </div>
  );
}

export default WorkerId;