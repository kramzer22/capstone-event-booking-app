function HostFormThree({ currentFormState, errorState }) {
  const backClickHandler = () => {
    currentFormState.setCurrentForm(2);
  };

  return (
    <form className="registration-form">
      <p>{errorState.errorDisplay}</p>
      <div className="registration bname">
        <label className="registration-label" htmlFor="">
          Business Name: <span>*</span>
        </label>
        <input type="text" placeholder="business name" name="email" />
      </div>
      <div className="registration">
        <label className="registration-label" htmlFor="">
          Business Address: <span>*</span>
        </label>
        <div className="registration-select baddress">
          <select baddress name="" id="">
            <option value="">Province</option>
          </select>
        </div>
        <div className="registration-select baddress">
          <select baddress name="" id="">
            <option value="">City</option>
          </select>
        </div>
        <div className="registration-select baddress">
          <select baddress name="" id="">
            <option value="">Barangay</option>
          </select>
        </div>
        <div className="registration">
          <label className="registration-label" htmlFor="">
            Street Address: <span>*</span>
          </label>
          <input type="text" placeholder="address" />
        </div>
      </div>
      <div className="registration">
        <label className="registration-label" htmlFor="">
          Mobile Number: <span>*</span>
        </label>
        <input
          type="text"
          placeholder="11 - digit mobile number"
          name="mobile"
        />
      </div>
      <div className="registration">
        <label className="registration-label" htmlFor="">
          Landline Number: <span>*</span>
        </label>
        <input type="text" placeholder="landline number" name="mobile" />
      </div>

      <div className="registration-buttons three">
        <button className="back-btn" onClick={backClickHandler}>
          Back
        </button>
        <button className="next three" type="submit">
          Create Account
        </button>
      </div>
    </form>
  );
}

export default HostFormThree;
