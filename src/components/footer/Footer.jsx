import "./footer.css";

function Footer({ selectedPageState }) {
  const selectPage = (pageLink) => {
    selectedPageState.selectedpage_function(pageLink);
  };

  return (
    <div className="footer">
      <div className="footer-container">
        <div className="footer-main-container">
          <a href="">&gt; contact us</a>
          <a href="">&gt; disclaimer</a>

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
