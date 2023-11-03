import "./footer.css";

function Footer({ selectedPageViewState }) {
  const selectPage = (pageLink) => {
    selectedPageViewState.setSelectedPageView(pageLink);

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
        </div>
      </div>

      <div className="footer-container">
        <div className="footer-main-container">
          <a onClick={() => selectPage("/contact")}>&gt; contact us</a>
          <a onClick={() => selectPage("/disclaimer")}>&gt; disclaimer</a>

          <a onClick={() => selectPage("/about")}>&gt; about us</a>
          <p>&gt; privacy & cookie statement</p>
          <p>&gt; general terms and agreement</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
