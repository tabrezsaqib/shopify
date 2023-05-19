import React from 'react';
import "./SideBarNav.css";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import { NavLink } from 'react-router-dom';

const SideBarNav = ({ navOpen, toggleNavOpen }) => {
  
    const list = (
      <Box
        sx={{ width: 250, minHeight: "100vh" }}
        role="presentation"
        style={{ backgroundColor: "#f0fcf9" }}
        className="padding-container-top"
      >
        <ul className="socials-container">
          <li>
          {" "}
            <NavLink to="/" className="fs-primary-body fw-bold"> Shopify </NavLink>
          </li>
          <button
            className="closeBtn text-primary"
            style={{ backgroundColor: "#f0fcf9" }}
            onClick={toggleNavOpen(false)}
          >
            &times;
          </button>
        </ul>
        <ul className="link-container | fs-primary-body fw-semi-bold">
          <li>
            <NavLink to="/men">Men</NavLink>
          </li>
          <li>
            <NavLink to="/women">Women</NavLink>
          </li>
          <li>
            <NavLink to="/kids">Kids</NavLink>
          </li>
          <li>
            <NavLink to="/home&living">Home & Living</NavLink>
          </li>
          <li>
            <NavLink to="/beauty">Beauty</NavLink>
          </li>
        </ul>
      </Box>
    );
    return (
      <Drawer anchor="right" open={navOpen} onClose={toggleNavOpen(false)}>
        {list}
      </Drawer>
    );
  };

export default SideBarNav;