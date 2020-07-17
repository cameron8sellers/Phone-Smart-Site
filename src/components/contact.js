import React from "react";
import { Toast, ToastBody, ToastHeader } from "reactstrap";
import "../components/contact.css";
const contactPage = () => {
  return (
    <div className="contact-toast-container">
      <Toast className="contact-toast">
        <ToastHeader className="contact-tast-head">Cookeville, TN</ToastHeader>
        <ToastBody className="contact-tast-body">
          <ul className="contact-list-contaner">
            <li className="contact-page-li">Phone: (931) 559-2355</li>
            <li className="contact-page-li">Email: phonesmartt@gmail.com</li>
            <a
              className="contact-link"
              href="https://www.facebook.com/phonesmartcookeville"
            >
              <li className="facebook-link contact-page-li">Facebook</li>
            </a>
          </ul>
        </ToastBody>
      </Toast>
      <Toast className="contact-toast jamestown">
        <ToastHeader className="contact-tast-head">Jamestown, TN</ToastHeader>
        <ToastBody className="contact-tast-body">
          <ul className="contact-list-contaner">
            <li className="contact-page-li">Phone: (931) 879-2355</li>
            <li className="contact-page-li">Email: phonesmartt@gmail.com</li>
            <a
              className="contact-link "
              href="https://www.facebook.com/phonesmartjamestown"
            >
              <li className="facebook-link contact-page-li">Facebook</li>
            </a>
          </ul>
        </ToastBody>
      </Toast>
    </div>
  );
};

export default contactPage;
