import { useEffect, useState } from "react";
import * as geoAdmin from "ph-geo-admin-divisions";

import locationServices from "../../../services/locationServices";

function HostFormThree({
  currentFormState,
  businessNameState,
  provinceState,
  cityState,
  barangayState,
  addressState,
  mobileState,
  landLineState,
  errorState,
}) {
  const [provinces, setProvinces] = useState([]);
  const [cities, setCities] = useState([]);
  const [barangays, setBarangays] = useState([]);

  useEffect(() => {
    const result = geoAdmin.searchProvince({ name: "" });
    setProvinces(result);
  }, []);

  const selectProvinceHandler = (value, name) => {
    if (value !== "") {
      provinceState.setProvince({ id: value, name: name });
      const result = geoAdmin.searchMunicipality({
        provinceId: value,
      });

      setCities(result);
    } else {
      provinceState.setProvince({ id: "", name: "" });
      setCities([]);
      cityState.setCity({ id: "", name: "" });
      setBarangays([]);
      barangayState.setBarangay({ id: "", name: "" });
    }
  };

  const selectCityHandler = (value, name) => {
    if (value !== "") {
      cityState.setCity({ id: value, name: name });
      const result = geoAdmin.searchBaranggay({
        municipalityId: value,
      });

      setBarangays(result);
    } else {
      cityState.setCity({ id: "", name: "" });
      setBarangays([]);
      barangayState.setBarangay({ id: "", name: "" });
    }
  };

  const selectBarangayHandler = (value, name) => {
    if (value !== "") {
      cityState.setBarangay({ id: value, name: name });
    } else {
      barangayState.setBarangay({ id: "", name: "" });
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
        <input
          type="text"
          placeholder="business name"
          value={businessNameState.businessName}
          onChange={(e) => businessNameState.setBusinessName(e.target.value)}
        />
      </div>
      <div className="registration">
        <label className="registration-label" htmlFor="">
          Business Address: <span>*</span>
        </label>
        <div className="registration-select baddress">
          <select
            className=""
            id=""
            value={provinceState.province.id}
            onChange={(e) =>
              selectProvinceHandler(
                e.target.value,
                e.target.options[e.target.selectedIndex].textContent
              )
            }
          >
            <option value="">Province</option>
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
          <select
            className=""
            id=""
            value={cityState.city.id}
            onChange={(e) =>
              selectCityHandler(
                e.target.value,
                e.target.options[e.target.selectedIndex].textContent
              )
            }
          >
            <option value="">City</option>
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
          <select
            className=""
            id=""
            onChange={(e) =>
              selectBarangayHandler(
                e.target.value,
                e.target.options[e.target.selectedIndex].textContent
              )
            }
          >
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
          <input
            type="text"
            placeholder="address"
            value={addressState.address}
            onChange={(e) => addressState.setAddress(e.target.value)}
          />
        </div>
      </div>
      <div className="registration">
        <label className="registration-label" htmlFor="">
          Mobile Number: <span>*</span>
        </label>
        <input
          type="text"
          placeholder="11 - digit mobile number"
          value={mobileState.mobile}
          onChange={(e) => mobileState.setMobile(e.target.value)}
        />
      </div>
      <div className="registration">
        <label className="registration-label" htmlFor="">
          Landline Number: <span>*</span>
        </label>
        <input
          type="text"
          placeholder="landline number"
          value={landLineState.landLine}
          onChange={(e) => landLineState.setLandLine(e.target.value)}
        />
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
