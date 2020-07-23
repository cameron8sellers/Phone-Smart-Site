import React from "react";
import { Toast, ToastBody, ToastHeader } from "reactstrap";
import "./mobilePlans.css";
const mobilePlansPage = () => {
  return (
    <div className="mobile-plans-container">
      <Toast className="mobile-plans-toast">
        <ToastHeader>
          <img
            alt=""
            src="https://res.cloudinary.com/drcgo7zqn/image/upload/v1595528728/Phone%20Smart/totalwireless_a2gsfl.png"
          ></img>
        </ToastHeader>
        <ToastBody>
          <ul>
            <li className="plans-li">
              $50/mo 1 line & Unlimited Talk, Text & Data
            </li>
            <li className="plans-li">
              $60/mo 2 lines & Unlimited Talk, Text & Data
            </li>
            <li className="plans-li">
              $85/mo 3 lines & Unlimited Talk, Text & Data
            </li>
            <li className="plans-li">
              $100/mo 4 lines & Unlimited Talk, Text & Data
            </li>
          </ul>
        </ToastBody>
      </Toast>
      <Toast className="mobile-plans-toast">
        <ToastHeader>
          <img
            className="pageplus-logo"
            alt=""
            src="https://res.cloudinary.com/drcgo7zqn/image/upload/v1595529488/Phone%20Smart/gray_PP_logo_h80kt8.png"
          ></img>
        </ToastHeader>
        <ToastBody>
          <ul>
            <li className="plans-li">$29.95 3GB data Unlimited Talk & Text</li>
            <li className="plans-li">$39.95 8GB data Unlimited Talk & Text</li>
            <li className="plans-li">
              $55 Fully Unlimited Talk, Text & 4G LTE Data
            </li>
          </ul>
        </ToastBody>
      </Toast>
    </div>
  );
};

export default mobilePlansPage;
