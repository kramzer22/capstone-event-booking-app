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
