import React from "react";
import "./Hero.css"; // Adjust the path as necessary
import { FaArrowRight } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="hero container">
      <div className="hero-text">
        <h1>We unsure a better education for a better world. </h1>
        <p>
          Our cutting-edge curriculum and expert instructors empower students to
          excel in their academic journey.
        </p>
        <button className="btn">
          Explore More <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default Hero;
