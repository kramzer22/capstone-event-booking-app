import React from "react";
import "./AboutUs.css";

import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

import aboutMainImg from "/src/assets/about/600x400.png";
import historySVG from "/src/assets/about/1500x700.svg";

function AboutUs({ userCookieState }) {
  return (
    <>
      <Header userCookieState={userCookieState} />
      <div>
        <div className="about-container">
          <div className="about-details">
            <div className="about-title">
              <small>ABOUT US</small>
            </div>

            <div className="about-description">
              <h2>
                <span>Elevating event experiences</span> for everyone.
              </h2>
            </div>

            <div className="about-paragraph">
              <p>
                “Company Name”, the ultimate solution for event organizers,
                event holders, and users seeking seamless event booking and
                management. We've reimagined the way events are organized, and
                experienced and we're excited to introduce you to our platform.
              </p>
            </div>

            <div className="about-btns">
              <button className="learn-btn">For Organizers, Click Here</button>
              <button className="book-btn" >Book Now</button>
            </div>
          </div>

          <div className="about-img">
            <img src={aboutMainImg} alt="600x400" />
          </div>
        </div>

        <div className="section-container">
          <div className="section-details">
            <div className="section-description">
              <h2>Stress-free experience for all.</h2>
            </div>

            <div className="section-paragraph">
              <p>
                We are dedicated to making event planning and attendance
                hassle-free.
              </p>
              <p>
                Our platform serves as the bridge between event organizers and
                users, streamlining the process and ensuring a memorable and
                stress-free experience for all.
              </p>
            </div>
          </div>
        </div>

        <div className="ad-ctr">
          <div className="ad-details">
            <h5>
              Curious about EasyGig&apos;s platform, pricing, and integrations?
            </h5>
            <button className="ad-btn">Contact Us</button>
          </div>
        </div>

        <div className="history-container">
          <div className="history-img">
            <img src={historySVG} alt="" />
          </div>

          <div className="history-details">
            <div className="history-title">
              <small>OUR HISTORY</small>
            </div>

            <div className="history-description">
              <h2>
                The Story of <span>EasyGig</span>
              </h2>
            </div>

            <div className="history-paragraph">
              <p>
                Founded in 2023, <strong>EasyGig</strong> has been on a journey
                to simplify and enhance the event planning and booking process.
                We've worked tirelessly to develop a user-friendly platform that
                empowers event organizers and ensures memorable, stress-free
                event experiences for all, while maintaining our commitment to
                transparency and accountability. With each passing day, our
                dedication to excellence remains strong, and we look forward to
                shaping the future of event management.
              </p>
            </div>
          </div>
        </div>

        <div className="mission-goal-container">
          <div className="mission-card">
            <div className="mission-description">
              <p>
                <span className="mission-title">OUR MISSION </span>
                is to transform the event planning and booking experience by
                providing a user-friendly, secure, and transparent platform that
                benefits both event organizers and clients. We aim to simplify
                the process, fostering seamless connections and memorable event
                experiences.
              </p>
            </div>
          </div>

          <div className="goal-card">
            <div className="goal-description">
              <p>
                <span className="goal-title">OUR GOAL </span>
                is to redefine event management, making it easier for event
                organizers to showcase their offerings and for users to discover
                and enjoy events effortlessly. We are committed to maintaining a
                positive and trustworthy environment, where fairness and
                accountability prevail. Event Reservation App is your trusted
                partner for all your event needs.
              </p>
            </div>
          </div>
        </div>

        <div className="feature-container">
          <h2 className="feature-title">Our Features</h2>

          <div className="feature-card-ctr">
            <div className="feature-card">
              <svg
                className="feature-img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M9 1V3H15V1H17V3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3H7V1H9ZM20 11H4V19H20V11ZM11 13V17H6V13H11ZM7 5H4V9H20V5H17V7H15V5H9V7H7V5Z"></path>
              </svg>
              <div className="feature-details">
                <h5>Event Organizer Registration</h5>
                <p>
                  Event place organizers or holders can easily register via
                  invitation links. We've simplified the onboarding process to
                  get you started quickly.
                </p>
              </div>
            </div>

            <div className="feature-card">
              <svg
                className="feature-img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M8 4C8 5.10457 7.10457 6 6 6 4.89543 6 4 5.10457 4 4 4 2.89543 4.89543 2 6 2 7.10457 2 8 2.89543 8 4ZM5 16V22H3V10C3 8.34315 4.34315 7 6 7 6.82059 7 7.56423 7.32946 8.10585 7.86333L10.4803 10.1057 12.7931 7.79289 14.2073 9.20711 10.5201 12.8943 9 11.4587V22H7V16H5ZM6 9C5.44772 9 5 9.44772 5 10V14H7V10C7 9.44772 6.55228 9 6 9ZM19 5H10V3H20C20.5523 3 21 3.44772 21 4V15C21 15.5523 20.5523 16 20 16H16.5758L19.3993 22H17.1889L14.3654 16H10V14H19V5Z"></path>
              </svg>
              <div className="feature-details">
                <h5>Comprehensive Event Management</h5>
                <p>
                  Event handlers have full control of their event listings. They
                  can manage event photos, descriptions, package inclusions,
                  date and time availability, and terms of agreement, including
                  grace periods for cancellations and cancellation fees.
                </p>
              </div>
            </div>

            <div className="feature-card">
              <svg
                className="feature-img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M17.841 15.659L18.017 15.836L18.1945 15.659C19.0732 14.7803 20.4978 14.7803 21.3765 15.659C22.2552 16.5377 22.2552 17.9623 21.3765 18.841L18.0178 22.1997L14.659 18.841C13.7803 17.9623 13.7803 16.5377 14.659 15.659C15.5377 14.7803 16.9623 14.7803 17.841 15.659ZM12 14V16C8.68629 16 6 18.6863 6 22H4C4 17.6651 7.44784 14.1355 11.7508 14.0038L12 14ZM12 1C15.315 1 18 3.685 18 7C18 10.2397 15.4357 12.8776 12.225 12.9959L12 13C8.685 13 6 10.315 6 7C6 3.76034 8.56434 1.12237 11.775 1.00414L12 1ZM12 3C9.78957 3 8 4.78957 8 7C8 9.21043 9.78957 11 12 11C14.2104 11 16 9.21043 16 7C16 4.78957 14.2104 3 12 3Z"></path>
              </svg>
              <div className="feature-details">
                <h5>User-Friendly Experience</h5>
                <p>
                  Users can register an account or book an appointment without
                  an account. Our intuitive interface allows easy navigation
                  through event places, viewing of packages, and the option to
                  filter by price range and location.
                </p>
              </div>
            </div>

            <div className="feature-card">
              <svg
                className="feature-img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M21 18H6C5.44772 18 5 18.4477 5 19C5 19.5523 5.44772 20 6 20H21V22H6C4.34315 22 3 20.6569 3 19V4C3 2.89543 3.89543 2 5 2H21V18ZM5 16.05C5.16156 16.0172 5.32877 16 5.5 16H19V4H5V16.05ZM16 9H8V7H16V9Z"></path>
              </svg>
              <div className="feature-details">
                <h5>Effortless Booking</h5>
                <p>
                  Users can effortlessly select an event place, choose a
                  package, pick a date and time, and proceed to payment in just
                  a few clicks.
                </p>
              </div>
            </div>

            <div className="feature-card">
              <svg
                className="feature-img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M12 14V16C8.68629 16 6 18.6863 6 22H4C4 17.5817 7.58172 14 12 14ZM12 13C8.685 13 6 10.315 6 7C6 3.685 8.685 1 12 1C15.315 1 18 3.685 18 7C18 10.315 15.315 13 12 13ZM12 11C14.21 11 16 9.21 16 7C16 4.79 14.21 3 12 3C9.79 3 8 4.79 8 7C8 9.21 9.79 11 12 11ZM21 17H22V22H14V17H15V16C15 14.3431 16.3431 13 18 13C19.6569 13 21 14.3431 21 16V17ZM19 17V16C19 15.4477 18.5523 15 18 15C17.4477 15 17 15.4477 17 16V17H19Z"></path>
              </svg>
              <div className="feature-details">
                <h5>Admin Support</h5>
                <p>
                  Our dedicated team of administrators acts as the intermediary,
                  handling cancellations and ensuring fair play. They monitor
                  event management, client behavior, and address any issues that
                  may arise, such as damages incurred by clients that violate
                  the terms of agreement.
                </p>
              </div>
            </div>

            <div className="feature-card">
              <svg
                className="feature-img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M2 20H22V22H2V20ZM4 12H6V19H4V12ZM9 12H11V19H9V12ZM13 12H15V19H13V12ZM18 12H20V19H18V12ZM2 7L12 2L22 7V11H2V7ZM4 8.23607V9H20V8.23607L12 4.23607L4 8.23607ZM12 8C11.4477 8 11 7.55228 11 7C11 6.44772 11.4477 6 12 6C12.5523 6 13 6.44772 13 7C13 7.55228 12.5523 8 12 8Z"></path>
              </svg>
              <div className="feature-details">
                <h5>Security Deposit</h5>
                <p>
                  To protect both organizers and clients, payments include an
                  additional deposit. This deposit serves as a safeguard against
                  damages or policy breaches. If damages occur, the deposit
                  covers the cost.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default AboutUs;
