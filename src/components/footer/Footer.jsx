import { Link } from "react-router-dom";

import "./footer.css";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="footer">
      <div className="footer-cta">
        <div className="footer-cta-details">
          <h2>Get in Touch with Our Sales Team</h2>
          <button className="footer-cta-btn">Book Now</button>
        </div>

        <div className="footer-cta-img">
          <img
            src="https://scontent.fdvo5-1.fna.fbcdn.net/v/t1.6435-9/157021501_3792285737545318_3568598696731868493_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=be3454&_nc_eui2=AeGs22zSdJbLebJSDLgBUTd_nRktRD19M8GdGS1EPX0zwRUc3OxXFQ0LwGRMQazCVZskQvPqrMfHp2Gbc7ccA3Wz&_nc_ohc=Iddl_R9RcPoAX-PX6lP&_nc_ht=scontent.fdvo5-1.fna&oh=00_AfCfhof26lkdoIl6_D1X2tc0PJjEasdApwp61KV7GW9kQg&oe=656C3A2E"
            alt=""
          />
          <img src="/src/assets/footer/cta-img.svg" alt="" />
        </div>
      </div>

      <div className="footer-gap">
        {/* waves here */}
        <div className="footer-waves">
          <div className="wave" id="wave1"></div>
          <div className="wave" id="wave2"></div>
          <div className="wave" id="wave3"></div>
          <div className="wave" id="wave4"></div>
        </div>
        <div className="footer-container">
          <div className="footer-about-container">
            <div className="footer-logo">
              <img src="/src/assets/registration/iconlogo.svg" alt="" />
            </div>
            <p>
              Hassle-free, worry-free, stress-free &ndash; it&apos;s that
              simple.
            </p>
            <div className="social-links">
              <a>
                <i className="ri-facebook-fill"></i>
              </a>

              <a>
                <i className="ri-twitter-x-line"></i>
              </a>
              <a href="#">
                <i className="ri-messenger-line"></i>
              </a>
              <a href="#">
                <i className="ri-google-fill"></i>
              </a>
            </div>
          </div>

          <div className="footer-page-links">
            <h6>
              LEARN MORE
              <div className="underline">
                <span></span>
              </div>
            </h6>
            <a href="#">Sign in</a>
            <Link to="/contact" onClick={scrollToTop}>
              <a>Contact Us</a>
            </Link>

            <Link to="/about" onClick={scrollToTop}>
              <a>About Us</a>
            </Link>
          </div>

          <div className="footer-page-links">
            <h6>
              USEFUL LINK
              <div className="underline">
                <span></span>
              </div>
            </h6>
            <a href="#">Promos</a>
            <a href="#">Venues</a>
            <a href="#">Book Now</a>
          </div>

          <div className="footer-page-links">
            <h6>
              LEGAL
              <div className="underline">
                <span></span>
              </div>
            </h6>
            <Link to="/disclaimer">
              <a>Privacy Policy</a>
            </Link>
          </div>

          <div className="footer-page-links">
            <h6>
              News Letter
              <div className="underline">
                <span></span>
              </div>
            </h6>
            <p>
              Want to know what we're up to?
              <br />
              Sign up for the newsletter and join our fam!
            </p>
            <div className="newsletter-input">
              <input type="email" name="" id="" />
              <button type="submit">SUBSCRIBE</button>
            </div>
          </div>

          {/* <p>&gt; privacy & cookie statement</p>
          <p>&gt; general terms and agreement</p> */}
        </div>
        <div className="footer-copyright">
          <p>Copyright &copy;2023 EasyGig&trade;</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
