import React, { useEffect } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png"; // Adjust the path as necessary

const Navbar = () => {
  const [sticky, setSticky] = React.useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 90 ? setSticky(true) : setSticky(false);
    });
  }, [sticky]);

  return (
    <div>
      <nav className={`container ${sticky ? "dark-nav" : ""}`}>
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
