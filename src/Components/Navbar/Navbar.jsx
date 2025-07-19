import React, { useEffect } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png"; // Adjust the path as necessary
import menu_icon from "../../assets/menu-icon.png"; // Adjust the path as necessary

import { Link } from "react-scroll";

const Navbar = () => {
  const [sticky, setSticky] = React.useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 90 ? setSticky(true) : setSticky(false);
    });
  }, [sticky]);

  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    mobileMenuOpen ? setMobileMenuOpen(false) : setMobileMenuOpen(true);
  };

  return (
    <div>
      <nav className={`container ${sticky ? "dark-nav" : ""}`}>
        <img src={logo} alt="logo" className="logo" />
        <ul className={mobileMenuOpen ? "" : "hide-mobile-menu"}>
          <li>
            <Link to="hero" smooth={true} offset={0} duration={500}>
              Home
            </Link>
          </li>
          <li>
            <Link to="programs" smooth={true} offset={-260} duration={500}>
              Programs
            </Link>
          </li>
          <li>
            <Link to="about" smooth={true} offset={-150} duration={500}>
              About Us
            </Link>
          </li>
          <li>
            <Link to="campus" smooth={true} offset={-260} duration={500}>
              Campus
            </Link>
          </li>
          <li>
            <Link to="testimonials" smooth={true} offset={-260} duration={500}>
              Testimonials
            </Link>
          </li>
          <li>
            <Link to="contact" smooth={true} offset={-260} duration={500}>
              <button className="btn">Contact Us</button>
            </Link>
          </li>
        </ul>
        <img
          src={menu_icon}
          className="menu-icon"
          alt=""
          onClick={toggleMenu}
        ></img>
      </nav>
    </div>
  );
};

export default Navbar;
