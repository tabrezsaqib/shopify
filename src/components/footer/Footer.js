import React from "react";
import "./Footer.css";
import location from "../../assets/icons/location.svg";

function Footer() {
  return (
    <footer className="footer-container | bg-secondary padding-inline padding-block padding-container-bottom">
      <div className="footer-wrapper">
        <div className="footer-logo footer-light">
          <img src={location} />
          <p>Canada</p>
          <p>© 2023 Shopify, Inc.</p>
        </div>
        <div className="socials footer-logo">
          <ul>
            <li>
              <a href="#"> Privacy Policy </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
