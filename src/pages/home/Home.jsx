import "./home.css";

import IndexReview from "./home-components/IndexReview";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
function Home({ loginUserState }) {
  return (
    <>
      <Header loginUserState={loginUserState} />
      <div className="index-container">
        <div className="index-article-container main">
          <div className="index-title">
            <h1>
              Hassle-free{" "}
              <span className="title-design">
                event &amp; booking management
              </span>{" "}
              for<span className="title-design"> organizers, attendees, </span>
              &amp;<span className="title-design"> event enthusiasts.</span>
            </h1>
          </div>
          <div className="index-btn">
            <button>Get Started</button>
            <button>Book Now</button>
          </div>
          <img
            className="index-img"
            src="https://dummyimage.com/1320x680/000/fff&text=1320x680"
            alt=""
          />
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
                  <img src="https://dummyimage.com/240x240/000/fff" alt="" />
                </picture>
                <div className="card-btn">
                  <button>
                    For Clients <i class="ri-arrow-right-s-line"></i>
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
                  <img src="https://dummyimage.com/240x240/000/fff" alt="" />
                </picture>
                <div className="card-btn">
                  <button>
                    For Users <i class="ri-arrow-right-s-line"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="index-article-container">
          <div className="index-article">
            <h3>Effortless Event Management</h3>
            <p>
              Organizing an event? We've got you covered. Our suite of powerful
              tools simplifies event creation, ticket management, and promotion,
              so you can focus on what you do best.
            </p>
            <p>
              We prioritize your safety and the security of event organizers.
              Our platform offers robust payment protection and verification
              processes, ensuring every transaction is as safe as it is
              convenient.
            </p>
            <div>
              <button>Apply now</button>
            </div>
          </div>
        </div>

        <IndexReview />
      </div>
      <Footer />
    </>
  );
}

export default Home;
