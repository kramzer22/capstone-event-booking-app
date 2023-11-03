import "./Contact.css";

function Contact({}) {
  return (
    <div className="contact-container">
      <div className="contact-form-ctr">
        <div className="contact-img-heads">
          <img
            src="https://scontent.fdvo5-1.fna.fbcdn.net/v/t39.30808-6/396843789_742788224344348_526221888827160091_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeE0mNnZcYpY6hL5_V5NXD5P_tUnHxuhVFn-1ScfG6FUWb0V_wZn99g36iIvGfW4f8B0il6Utx3puYAROWx3x4T3&_nc_ohc=5Yso1WhdusUAX_Om7bg&_nc_ht=scontent.fdvo5-1.fna&oh=00_AfCczT9PHKTkumRrHX6X0q4w9LcKwK0otp34Oh3aIMwp7Q&oe=6549E73F"
            alt=""
          />
          <img
            src="https://scontent.fdvo5-1.fna.fbcdn.net/v/t1.6435-9/157021501_3792285737545318_3568598696731868493_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=be3454&_nc_eui2=AeGs22zSdJbLebJSDLgBUTd_nRktRD19M8GdGS1EPX0zwRUc3OxXFQ0LwGRMQazCVZskQvPqrMfHp2Gbc7ccA3Wz&_nc_ohc=Iddl_R9RcPoAX-PX6lP&_nc_ht=scontent.fdvo5-1.fna&oh=00_AfCfhof26lkdoIl6_D1X2tc0PJjEasdApwp61KV7GW9kQg&oe=656C3A2E"
            alt=""
          />
          <img
            src="https://scontent.fdvo5-1.fna.fbcdn.net/v/t39.30808-6/319357814_6588972931130659_6433058501188106892_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeEvpIG0_81haXnObHSIA725VAHqSzgrwgdUAepLOCvCBypFa2mWtnYHQvf4--P7fp8k1B-Un1ilAcc1rztaijXV&_nc_ohc=MYJ6DGOsB4cAX8kh21m&_nc_ht=scontent.fdvo5-1.fna&oh=00_AfDzjzVhfO43Zau5qh3TKRz7RdJTJy9-R8xwlxPIx7-sww&oe=654A3780"
            alt=""
          />
        </div>

        <div className="contact-details">
          <h2>Contact Us</h2>
          <p>Get in touch with our team to learn more about "company name".</p>
        </div>

        <form action="" className="contact-form">
          <div className="contact-name">
            <div className="contact fname">
              <label className="contact-label" htmlFor="FirstName">
                First Name: <span>*</span>
              </label>
              <input
                type="text"
                name="FirstName"
                placeholder="First Name"
                required
              />
            </div>
            <div className="contact lname">
              <label className="contact-label" htmlFor="LastName">
                Last Name: <span>*</span>
              </label>
              <input
                type="text"
                name="LastName"
                placeholder="Last Name"
                required
              />
            </div>
          </div>
          <div className="contact email">
            <label className="contact-label" htmlFor="eMail">
              Email Address: <span>*</span>
            </label>
            <input type="email" />
          </div>
          <div className="contact notes">
            <label className="contact-label" htmlFor="notes">
              Notes: <span>*</span>
            </label>
            <input type="text" />
          </div>
          <div className="contact address">
            <label className="contact-label" htmlFor="address">
              Address: <span>*</span>
            </label>
            <input type="text" />
          </div>
          <button className="contact-submit-btn" type="submit">
            SUBMIT
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
