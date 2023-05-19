import React, {useState, useEffect} from "react";
import "./Header.css";
import cart from "../../assets/icons/cart.svg";
import wishlist from "../../assets/icons/wishlist.svg";
import { NavLink } from "react-router-dom";
import { useStateValue } from "../../redux/StateProvider";
import SideBarNav from "../SideBarNav/SideBarNav";

function Header() {
  const [searchText, setSearchText] = useState("");

  const [{ searchContext }, dispatch] = useStateValue();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [navOpen, setNavOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setNavOpen(open);
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const mobileMenu = (
    <svg
      width="30px"
      height="30px"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      id="bars"
      className="mobile-menu logo inverted"
      onClick={toggleDrawer(true)}
    >
      <path d="M3,8H21a1,1,0,0,0,0-2H3A1,1,0,0,0,3,8Zm18,8H3a1,1,0,0,0,0,2H21a1,1,0,0,0,0-2Zm0-5H3a1,1,0,0,0,0,2H21a1,1,0,0,0,0-2Z" />
    </svg>
  );

  function handleChange(e){
    dispatch({
      type: "SEARCH_CONTENT",
      value: e,
    });
  }
  return (
    <>
    <div className="header-padding-top | bg-secondary"></div>
    <header className={`header-container | padding-inline bg-secondary`}>
    <div className="header-wrapper">
      <div className="logo-container">
        {" "}
        <NavLink to="/" className="fs-primary-body fw-bold"> Shopify </NavLink>
      </div>
      {windowWidth > 960 && (
      <nav className="nav-container | fs-secondary-body fw-semi-bold">
        <ul>
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
      </nav>
      )}
      <div className="social-container">
        {windowWidth > 640 && (
          <ul className="socials">
            <li>
            <input type="search" placeholder="Search"
            onChange={(e) => {handleChange(e.target.value);
            }}
            />
            </li>
            <li>
            <NavLink to="/wishlist">
              <img src={wishlist} />{" "}
            </NavLink>
            </li>
            <li>
            <NavLink to="/cart">
              <img src={cart} />
            </NavLink>
            </li>
          </ul>
          )}
          {/* {themeSwitch} */}
          {windowWidth < 960 && mobileMenu}
          {<SideBarNav navOpen={navOpen} toggleNavOpen={toggleDrawer} />}
        </div>
    </div>
    </header>
    </>
  );
}

export default Header;
