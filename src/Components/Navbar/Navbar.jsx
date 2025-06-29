import React from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png"; // Adjust the path as necessary

const Navbar = () => {
  return (
    <div>
      <nav className="container">
        <img src={logo} alt="logo" className="logo" />
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">Program</a>
          </li>
          <li>
            <a href="/aboutUs">About Us</a>
          </li>
          <li>
            <a href="/testimonials">Testimonials</a>
          </li>
          <li>
            <a href="/contact">
              <button className="btn">Contact Us</button>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
