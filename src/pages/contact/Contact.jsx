import "./Contact.css";

function Contact({}) {
  return (
    <div className="contact-container">
      <div className="contact-form-ctr">
        <div className="contact-img-heads">
          <img src="" alt="" />
          <img src="" alt="" />
          <img src="" alt="" />
        </div>

        <div className="contact-details">
          <h2>Contact Us</h2>
          <p>Get in touch with our team to learn more about "company name".</p>
        </div>

        <form action="" className="contact-form">
          <div className="contact-name">
            <label htmlFor="FirstName">
              First Name: <span>*</span>
            </label>
            <input
              type="text"
              name="FirstName"
              placeholder="First Name"
              required
            />
            <label htmlFor="LastName">
              Last Name: <span>*</span>
            </label>
            <input
              type="text"
              name="LastName"
              placeholder="Last Name"
              required
            />
          </div>
          <div className="contact-email">
            <label htmlFor="eMail">
              Email Address: <span>*</span>
            </label>
            <input type="email" />
          </div>
          <div className="contact-notes">
            <label htmlFor="notes">
              Notes: <span>*</span>
            </label>
            <input type="text" />
          </div>
          <div className="contact-countries">
            <label htmlFor="address">
              Address: <span>*</span>
            </label>
            <input type="text" />
          </div>
          <button type="submit">SUBMIT</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
