import "./home.css";

import IndexReview from "./home-components/IndexReview";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

import bookNowImg from "/src/assets/home/1320x680.png";
import forClientImg from "/src/assets/home/client240x240.png";
import forUserImg from "/src/assets/home/user240x240.png";
import chooseUsGif from "/src/assets/home/home-main.gif";
import efforlessImg from "/src/assets/home/wcu-one.png";
import diverseImg from "/src/assets/home/wcu-two.png";
import transparentSupportImg from "/src/assets/home/wcu-three.png";
import dedicatedSupportImg from "/src/assets/home/wcu-four.png";
import innovativeImg from "/src/assets/home/wcu-five.png";

function Home({ userCookieState }) {
  return (
    <>
      <Header userCookieState={userCookieState} />
      <div className="index-container">
        <div className="index-article-container main">
          <div className="index-title">
            <h1>
              <span className="title-design">Hassle-free </span> event &amp;
              booking management for organizers, attendees, &amp; event
              enthusiasts.
            </h1>
          </div>
          <div className="index-btn">
            <button>Get Started</button>
            <button>Book Now</button>
          </div>
          <img className="index-img" src={bookNowImg} alt="book-now 1320x680" />
        </div>

        <div className="index-article-container second">
          <small>WHAT WE DO</small>
          <h2>
            Flexible event and booking management for hosts and clients at every
            stage of your event business.
          </h2>
          <div className="index-card-container">
            <div className="index-card client">
              <div className="index-card-details">
                <h4>
                  <span>Start</span> my business
                </h4>
                <p>
                  Join us today and unlock a world of hassle-free event planning
                  and booking.
                </p>
              </div>
              <div className="pic-btn">
                <picture>
                  <img src={forClientImg} alt="240x240" />
                </picture>
                <div className="card-btn">
                  <button>
                    For Clients <i className="ri-arrow-right-s-line"></i>
                  </button>
                </div>
              </div>
            </div>

            <div className="index-card user">
              <div className="index-card-details">
                <h4>
                  <span>Start</span> expoloring
                </h4>
                <p>Discover and book your dream events. Sign up now!</p>
              </div>
              <div className="pic-btn">
                <picture>
                  <img src={forUserImg} alt="240x240" />
                </picture>
                <div className="card-btn">
                  <button>
                    For Users <i className="ri-arrow-right-s-line"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="index-article-container third">
          <small>WHY CHOOSE US</small>
          <img src={chooseUsGif} alt="" />
          <div className="index-section-ctr">
            <div className="index-section-details one">
              <p>
                <strong>Effortless Booking Experience:</strong> Enjoy a
                user-friendly platform that simplifies the event booking
                process, allowing you to explore and reserve your preferred
                events with ease.
              </p>
              <img src={efforlessImg} alt="" />
            </div>

            <div className="index-section-details two">
              <p>
                <strong>Diverse Event Options:</strong> Discover a wide range of
                events tailored to your preferences. Whether you're a host
                looking to showcase your venue or an attendee seeking exciting
                experiences, our platform caters to all.
              </p>
              <img src={diverseImg} alt="" />
            </div>

            <div className="index-section-details three">
              <p>
                <strong>Transparent and Secure Transactions:</strong> We
                prioritize your security. Benefit from transparent transactions,
                secure payments, and the assurance that your personal
                information is safeguarded throughout the booking process.
              </p>
              <img src={transparentSupportImg} alt="" />
            </div>

            <div className="index-section-details four">
              <p>
                <strong>Dedicated Support:</strong> Our dedicated support team
                is here to assist you at every step. From answering queries to
                addressing concerns, we are committed to ensuring a smooth and
                enjoyable experience for both hosts and users.
              </p>
              <img src={dedicatedSupportImg} alt="" />
            </div>

            <div className="index-section-details five">
              <p>
                <strong>Innovative Features:</strong> Stay ahead with our
                innovative features designed to enhance your event journey. From
                flexible booking options to real-time updates, we continuously
                strive to provide cutting-edge solutions.
              </p>
              <img src={innovativeImg} alt="" />
            </div>
          </div>
          <h4>
            Choose <span>EasyGig</span> for a stress-free and enjoyable event
            experience.
            <br /> <a>Join us</a> in redefining the way events are planned and
            enjoyed.
          </h4>
        </div>

        <IndexReview />
      </div>
      <Footer />
    </>
  );
}

export default Home;
