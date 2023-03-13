import React from "react";
import "./Footer.css";
import location from "../../assets/icons/location.svg";

function Footer() {
  return (
    <div className="footer">
      <div className="copyright">
        <img src={location} />
        <p>India</p>
        <p>© 2023 Nike, Inc. All Rights Reserved</p>
      </div>
      <div className="termsAndCond">
        <ul>
          <li>
            <a href="#"> Guides </a>
          </li>
          <li>
            <a href="#"> Terms of sale</a>
          </li>
          <li>
            <a href="#"> Terms of use</a>
          </li>
          <li>
            <a href=""> Privacy policy </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
