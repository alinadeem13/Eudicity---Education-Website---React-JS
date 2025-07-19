import React from "react";
import "./About.css"; // Adjust the path as necessary

import about_img from "../../assets/about.png"; // Adjust the path as necessary
import play_icon from "../../assets/play-icon.png"; // Adjust the path as necessary

const About = ({ setPlayState }) => {
  return (
    <div className="about">
      <div className="about-left">
        <img className="about-img" src={about_img} alt="About" />
        <img
          className="play-icon"
          src={play_icon}
          alt="Play"
          onClick={() => {
            setPlayState(true);
          }}
        />
      </div>
      <div className="about-right">
        <h3>About University</h3>
        <h2>Nurturing Tomorrow's Leaders Today</h2>
        <p>
          Welcome to our university, where we are dedicated to providing an
          exceptional educational experience that empowers students to become
          leaders in their fields. Our commitment to academic excellence,
          innovative research, and community engagement sets us apart as a
          premier institution.
        </p>
        <p>
          Our diverse and inclusive environment fosters creativity and
          collaboration, allowing students to thrive both academically and
          personally. With a wide range of programs, expert faculty, and
          state-of-the-art facilities, we prepare our students for success in an
          ever-changing world.
        </p>
        <p>
          At our university, we believe in the power of education to transform
          lives and communities. Join us on this journey of discovery, growth,
          and impact as we shape the leaders of tomorrow.
        </p>
      </div>
    </div>
  );
};

export default About;
