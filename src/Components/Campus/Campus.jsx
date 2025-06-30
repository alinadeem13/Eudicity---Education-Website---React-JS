import React from "react";
import "./Campus.css"; // Adjust the path as necessary
import gallery_1 from "../../assets/gallery-1.png"; // Adjust the path as necessary
import gallery_2 from "../../assets/gallery-2.png"; // Adjust the path as necessary
import gallery_3 from "../../assets/gallery-3.png"; // Adjust the path as necessary
import gallery_4 from "../../assets/gallery-4.png"; // Adjust the path as necessary
import { FaArrowRight } from "react-icons/fa";

const Campus = () => {
  return (
    <div className="campus">
      <div className="gallery">
        <img src={gallery_1} alt="Gallery 1"></img>
        <img src={gallery_2} alt="Gallery 2"></img>
        <img src={gallery_3} alt="Gallery 3"></img>
        <img src={gallery_4} alt="Gallery 4"></img>
      </div>

      <button className="btn dark-btn">
        See more <FaArrowRight />
      </button>
    </div>
  );
};

export default Campus;
