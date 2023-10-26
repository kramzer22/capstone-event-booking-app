import React from "react";
import "./CSS/AboutUs.css";
import imgSample from "../assets/sample-img.png";

function AboutUs() {
  return (
    <div>
      <div className="about-container">
        <div className="about-details">
          <div className="about-title">
            <small>ABOUT US</small>
          </div>

          <div className="about-description">
            <h2>Elevating event experiences for everyone.</h2>
          </div>

          <div className="about-paragraph">
            <p>
              “Company Name”, the ultimate solution for event organizers, event
              holders, and users seeking seamless event booking and management.
              We've reimagined the way events are organized, and experienced and
              we're excited to introduce you to our platform.
            </p>
          </div>

          <div className="about-btns">
            <button className="learn-btn">For Organizers, Click Here</button>
            <button className="book-btn">Book Now</button>
          </div>
        </div>

        <div className="about-img">
          <img src={imgSample} alt="sample-img" />
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
