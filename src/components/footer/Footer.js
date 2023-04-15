import React from "react";
import "./Footer.css";
import location from "../../assets/icons/location.svg";

function Footer() {
  return (
    <div className="footer">
      <div className="copyright">
        <img src={location} />
        <p>Canada</p>
        <p>© 2023 Shopify, Inc. All Rights Reserved</p>
      </div>
      <div className="termsAndCond">
        <ul>
          <li>
            <a href="#"> Guides </a>
          </li>
          <li>
            <a href="#"> Terms of Sale</a>
          </li>
          <li>
            <a href="#"> Terms of Use</a>
          </li>
          <li>
            <a href="#"> Privacy Policy </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
