import React from "react";
import "./contact.css";
import msg_icon from "../../assets/msg-icon.png"; // Assuming you have an icon for the message

import mail_icon from "../../assets/mail-icon.png"; // Assuming you have an icon for the message
import phone_icon from "../../assets/phone-icon.png"; // Assuming you have an icon for the message
import location_icon from "../../assets/location-icon.png"; // Assuming you have an icon for the message
import white_arrow from "../../assets/white-arrow.png"; // Assuming you have an icon for the message

const Contact = () => {
  return (
    <div className="contact">
      <div className="contact-col">
        <h3>
          Send Us a Message <img src={msg_icon} alt=""></img>
        </h3>
        <p>
          If you have any questions or need further information, please fill out
          the form below. We will get back to you as soon as possible.
        </p>
        <ul>
          <li>
            <img src={mail_icon} alt="" />
            contact@audicity.com
          </li>
          <li>
            {" "}
            <img src={phone_icon} alt=""></img> +1 (123) 456-7890
          </li>
          <li>
            {" "}
            <img src={location_icon} alt=""></img>
            <a href="https://www.google.com/maps/place/123+Audicity+St,+City,+Country">
              123 Audicity St, City, Country
            </a>
          </li>
        </ul>
      </div>
      <div className="contact-col">
        <form>
          <label>
            <input
              type="text"
              name="name"
              placeholder="Enter Your Name"
              required
            />
          </label>
          <label>
            <input
              type="tel"
              name="phone"
              placeholder="Enter Your Number"
              required
            />
          </label>
          <label>
            <textarea
              name="message"
              placeholder="Type Your Message"
              rows="6"
              required
            ></textarea>
          </label>
          <button className="btn dark-btn" type="submit">
            Send Message <img src={white_arrow} alt=""></img>
          </button>
        </form>
        <span></span>
      </div>
    </div>
  );
};

export default Contact;
