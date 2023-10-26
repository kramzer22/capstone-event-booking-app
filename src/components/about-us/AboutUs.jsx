import React from "react";
import "./AboutUs.css";
import imgSample from "../../assets/sample-img.png";

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
          <h5>Curious about “CName’s” platform, pricing, and integrations?</h5>
          <button className="ad-btn">Contact Us</button>
        </div>
      </div>

      <div className="history-container">
        <div className="history-img">
          <img src="https://dummyimage.com/1500x700/000/fff" alt="" />
        </div>

        <div className="history-details">
          <div className="history-title">
            <small>OUR HISTORY</small>
          </div>

          <div className="history-description">
            <h2>The Story of Company Name</h2>
          </div>

          <div className="history-paragraph">
            <p>
              Founded in 2023, Event Reservation App has been on a journey to
              simplify and enhance the event planning and booking process. We've
              worked tirelessly to develop a user-friendly platform that
              empowers event organizers and ensures memorable, stress-free event
              experiences for all, while maintaining our commitment to
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
              benefits both event organizers and clients. We aim to simplify the
              process, fostering seamless connections and memorable event
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
            <img className="feature-img" src="" alt="" />
            <div className="feature-details">
              <h5>Event Organizer Registration</h5>
              <p>
                Event place organizers or holders can easily register via
                invitation links. We've simplified the onboarding process to get
                you started quickly.
              </p>
            </div>
          </div>

          <div className="feature-card">
            <img className="feature-img" src="" alt="" />
            <div className="feature-details">
              <h5>Comprehensive Event Management</h5>
              <p>
                Event handlers have full control of their event listings. They
                can manage event photos, descriptions, package inclusions, date
                and time availability, and terms of agreement, including grace
                periods for cancellations and cancellation fees.
              </p>
            </div>
          </div>

          <div className="feature-card">
            <img className="feature-img" src="" alt="" />
            <div className="feature-details">
              <h5>User-Friendly Experience</h5>
              <p>
                Users can register an account or book an appointment without an
                account. Our intuitive interface allows easy navigation through
                event places, viewing of packages, and the option to filter by
                price range and location.
              </p>
            </div>
          </div>

          <div className="feature-card">
            <img className="feature-img" src="" alt="" />
            <div className="feature-details">
              <h5>Effortless Booking</h5>
              <p>
                Users can effortlessly select an event place, choose a package,
                pick a date and time, and proceed to payment in just a few
                clicks.
              </p>
            </div>
          </div>

          <div className="feature-card">
            <img className="feature-img" src="" alt="" />
            <div className="feature-details">
              <h5>Admin Support</h5>
              <p>
                Our dedicated team of administrators acts as the intermediary,
                handling cancellations and ensuring fair play. They monitor
                event management, client behavior, and address any issues that
                may arise, such as damages incurred by clients that violate the
                terms of agreement.
              </p>
            </div>
          </div>

          <div className="feature-card">
            <img className="feature-img" src="" alt="" />
            <div className="feature-details">
              <h5>Security Deposit</h5>
              <p>
                To protect both organizers and clients, payments include an
                additional deposit. This deposit serves as a safeguard against
                damages or policy breaches. If damages occur, the deposit covers
                the cost.
              </p>
            </div>
          </div>
          <div className="feature-card">
            <img className="feature-img" src="" alt="" />
            <div className="feature-details">
              <h5>Seamless Payment</h5>
              <p>
                When the event concludes, payments are sent to the event
                organizers and handlers, ensuring a smooth and prompt payout.
                Meanwhile, the deposit fee is returned to the client, promoting
                trust and accountability.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
