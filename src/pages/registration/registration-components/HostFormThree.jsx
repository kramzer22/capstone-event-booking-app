import { useEffect, useState } from "react";
import * as geoAdmin from "ph-geo-admin-divisions";

import locationServices from "../../../services/locationServices";

function HostFormThree({ currentFormState, errorState }) {
  const [provinces, setProvinces] = useState([]);
  const [selectedProvince, setSelectedProvince] = useState("");
  const [cities, setCities] = useState([]);
  const [selectedCity, setSelectedCity] = useState("");
  const [barangays, setBarangays] = useState([]);

  useEffect(() => {
    const result = geoAdmin.searchProvince({ name: "" });

    console.log(result);
    setProvinces(result);
  }, []);

  // setProvinces(response.data);

  const selectProvinceHandler = (e) => {
    if (e.target.value !== "") {
      setSelectedProvince(e.target.value);
      const result = geoAdmin.searchMunicipality({
        provinceId: e.target.value,
      });

      setCities(result);
    } else {
      setCities([]);
      setBarangays([]);
    }
  };

  const selectCityHandler = (e) => {
    if (e.target.value !== "") {
      setSelectedCity(e.target.value);
      const result = geoAdmin.searchBaranggay({
        municipalityId: e.target.value,
      });

      setBarangays(result);
    } else {
      setBarangays([]);
    }
  };

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
          <select
            className=""
            id=""
            value={selectedProvince}
            onChange={selectProvinceHandler}
          >
            <option value="" disabled>
              Province
            </option>
            {provinces.map((province, index) => {
              return (
                <option key={index} value={province.provinceId}>
                  {province.name.toLowerCase()}
                </option>
              );
            })}
          </select>
        </div>
        <div className="registration-select baddress">
          <select className="" id="" onChange={selectCityHandler}>
            <option value="" disabled>
              City
            </option>
            {cities.map((city, index) => {
              return (
                <option key={index} value={city.municipalityId}>
                  {city.name.toLowerCase()}
                </option>
              );
            })}
          </select>
        </div>
        <div className="registration-select baddress">
          <select className="" id="" value={selectedCity}>
            <option value="">Barangay</option>
            {barangays.map((barangay, index) => {
              return (
                <option key={index} value={barangay.baranggayId}>
                  {barangay.name.toLowerCase()}
                </option>
              );
            })}
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
