import "./footer.css";

import Contact from "../../pages/contact/Contact";
import Disclaimer from "../../pages/disclaimer/Disclaimer";

function Footer({ selectedPageState }) {
  const selectPage = (pageLink) => {
    selectedPageState.selectedpage_function(pageLink);
  };

  return (
    <div className="footer">
      <div className="footer-container">
        <div className="footer-main-container">
          <a href="" onClick={() => selectPage("/contact")}>
            &gt; contact us
          </a>
          <a href="" onClick={() => selectPage("/disclaimer")}>
            &gt; disclaimer
          </a>

          <a href="" onClick={() => selectPage("/about")}>
            &gt; about us
          </a>
          <p>&gt; privacy & cookie statement</p>
          <p>&gt; general terms and agreement</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
