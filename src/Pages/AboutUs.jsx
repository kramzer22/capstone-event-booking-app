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
          <img src="https://dummyimage.com/600x400/000/fff" alt="sample-img" />
        </div>
      </div>

      <div className="about-container">
        <div className="about-description">
          <h2>Hello</h2>
        </div>
        <div className="about-paragraph">
          <p>
            We are dedicated to making event planning and attendance
            hassle-free.{" "}
          </p>
          <p>
            Our platform serves as the bridge between event organizers and
            users, streamlining the process and ensuring a memorable and
            stress-free experience for all. 1 / 1 Page 1 of 1.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
