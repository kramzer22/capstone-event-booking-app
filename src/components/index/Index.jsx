import "./index.css";

import IndexReview from "../index-review/IndexReview";

function Index({}) {
  return (
    <div className="index-container">
      <div className="index-article-container">
        <div className="index-article">
          <h2>Company Name</h2>
          <h3>Elevating event experience for everyone</h3>
          <p>
            Welcome to our Event Reservation App, the ultimate solution for
            event organizers, event holders, and users seeking seamless event
            booking and management. We've reimagined the way events are
            organized and experienced, and we're excited to introduce you to our
            platform.
          </p>
          <p>
            With our app, you can experience event booking like never before.
          </p>
          <div>
            <button>For organizers click here</button>
            <button>Register now</button>
          </div>
        </div>
        <img alt="" />
      </div>

      <div className="index-article-container left">
        <div className="index-article">
          <h3>Hassle-Free Booking</h3>
          <p>
            Say goodbye to long lines and complicated reservations. Our
            user-friendly interface makes booking events a breeze, giving you
            more time to enjoy the experiences that matter.
          </p>
          <p>
            Users can effortlessly select an event place, choose a package, pick
            a date and time, and proceed to payment in just a few clicks.
          </p>
          <div>
            <button>Book now</button>
            <button>Register now</button>
          </div>
        </div>
        <img alt="" />
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
            We prioritize your safety and the security of event organizers. Our
            platform offers robust payment protection and verification
            processes, ensuring every transaction is as safe as it is
            convenient.
          </p>
          <div>
            <button>Apply now</button>
          </div>
        </div>
        <img alt="" />
      </div>

      <IndexReview />
    </div>
  );
}

export default Index;
