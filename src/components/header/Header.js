import React from "react";
import "./Header.css";
import cart from "../../assets/icons/cart.svg";
import wishlist from "../../assets/icons/wishlist.svg";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <div className="logo">
        {" "}
        <NavLink to="/"> Shopify </NavLink>
      </div>
      <div className="menu">
        <ul>
          <li>
            <a href="#"> Men </a>
          </li>
          <li>
            <a href="#"> Women </a>
          </li>
          <li>
            <a href="#"> Kids</a>
          </li>
          <li>
            <a href="#"> Home & Living </a>
          </li>
          <li>
            <a href="#"> Beauty</a>
          </li>
        </ul>
      </div>
      <div className="headerIcons">
        <input type="search" placeholder="Search" />
        <NavLink to="/wishlist">
          <img src={wishlist} />{" "}
        </NavLink>
        <NavLink to="/cart">
          <img src={cart} />
        </NavLink>
      </div>
    </div>
  );
}

export default Header;
