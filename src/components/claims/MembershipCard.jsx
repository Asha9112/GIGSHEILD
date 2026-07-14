import {
  FaShieldAlt,
  FaCheckCircle,
} from "react-icons/fa";

import { getWorkerData } from "../../utils/workerStorage";

function MembershipCard() {

  const worker = getWorkerData();

  const membership = worker.membership;

  return (

    <div className="membership-card">

      <div className="membership-header">

        <FaShieldAlt />

        <h3>
          Membership Summary
        </h3>

      </div>


      <div className="membership-grid">

        <div>

          <span>Plan</span>

          <strong>
            {membership.plan || "GigShield Pro"}
          </strong>

        </div>


        <div>

          <span>Status</span>

          <strong className="active-status">

            {membership.status || "Active"}

          </strong>

        </div>


        <div>

          <span>Coverage</span>

          <strong>

            {membership.coverage || "₹3,00,000"}

          </strong>

        </div>


        <div>

          <span>Worker ID</span>

          <strong>

            {membership.workerId || "--"}

          </strong>

        </div>

      </div>

    </div>

  );

}

export default MembershipCard;