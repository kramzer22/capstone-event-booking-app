function HostFormThree({ currentFormState, errorState }) {
  const backClickHandler = () => {
    currentFormState.setCurrentForm(2);
  };

  return (
    <form>
      <h2>Registration Form</h2>
      <p>{errorState.errorDisplay}</p>
      <div>
        <p>Business name</p>
        <input type="text" placeholder="business name" name="email" />
      </div>
      <div>
        <p>Business address</p>
        <div>
          <p>Province</p>
          <select name="" id="">
            <option value="">Province</option>
          </select>
        </div>
        <div>
          <p>City</p>
          <select name="" id="">
            <option value="">City</option>
          </select>
        </div>
        <div>
          <p>Barangay</p>
          <select name="" id="">
            <option value="">Barangay</option>
          </select>
        </div>
        <div>
          <p>Street address</p>
          <input type="text" placeholder="address" />
        </div>
      </div>
      <div>
        <p>Mobile</p>
        <input type="text" placeholder="contact" name="password" />
      </div>
      <div>
        <p>Landline</p>
        <input type="text" />
      </div>
      <div>
        <button onClick={backClickHandler}>Back</button>
        <button type="submit">Next</button>
      </div>
    </form>
  );
}

export default HostFormThree;
