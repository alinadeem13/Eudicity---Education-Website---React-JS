import React from "react";
import "./Testimonials.css";
import next_icon from "../../assets/next-icon.png";
import back_icon from "../../assets/back-icon.png";

import user_1 from "../../assets/user-1.png";
import user_2 from "../../assets/user-2.png";
import user_3 from "../../assets/user-3.png";
import user_4 from "../../assets/user-4.png";

const Testimonials = () => {
  return (
    <div className="testimonials">
      <img src={next_icon} alt="" className="next-btn"></img>
      <img src={back_icon} alt="" className="back-btn"></img>
      <div className="slider">
        <ul>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_1} alt="User 1" />
                <div>
                  <h3>William Jackson</h3>
                  <span>Edusity, USA</span>
                </div>
              </div>
              <p>
                "Edusity has transformed my learning experience. The interactive
                platform and supportive community have made studying enjoyable
                and effective. I highly recommend it to anyone looking to
                enhance their skills!"
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_2} alt="User 2" />
                <div>
                  <h3>Alex Johnson</h3>
                  <span>Edusity, UK</span>
                </div>
              </div>
              <p>
                "The courses on Edusity are top-notch! The instructors are
                knowledgeable and the content is always up-to-date. I've gained
                so much from this platform."
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_3} alt="User 3" />
                <div>
                  <h3>Michael Smith</h3>
                  <span>Edusity, Canada</span>
                </div>
              </div>
              <p>
                "Edusity has been a game-changer for my career. The skills I've
                learned here have opened up new opportunities for me. I can't
                thank the team enough!"
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_4} alt="User 4" />
                <div>
                  <h3>Richard Davis</h3>
                  <span>Edusity, Australia</span>
                </div>
              </div>
              <p>
                "I love the flexibility that Edusity offers. I can learn at my
                own pace and revisit the material whenever I need. It's perfect
                for my busy schedule!"
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Testimonials;
