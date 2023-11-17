import { useState, useEffect } from "react";
import * as geoAdmin from "ph-geo-admin-divisions";

function VenueEditor({ formRef, showFormHandler }) {
  const [province, setProvince] = useState({ id: "", name: "" });
  const [city, setCity] = useState({ id: "", name: "" });
  const [barangay, setBarangay] = useState({ id: "", name: "" });
  const [provinces, setProvinces] = useState([]);
  const [cities, setCities] = useState([]);
  const [barangays, setBarangays] = useState([]);

  useEffect(() => {
    const result = geoAdmin.searchProvince({ name: "" });
    setProvinces(result);
  }, []);

  const selectProvinceHandler = (value, name) => {
    if (value !== "") {
      setProvince({ id: value, name: name });
      const result = geoAdmin.searchMunicipality({
        provinceId: value,
      });

      setCities(result);
    } else {
      setProvince({ id: "", name: "" });
      setCities([]);
      setCity({ id: "", name: "" });
      setBarangays([]);
      setBarangay({ id: "", name: "" });
    }
  };

  const selectCityHandler = (value, name) => {
    if (value !== "") {
      setCity({ id: value, name: name });
      const result = geoAdmin.searchBaranggay({
        municipalityId: value,
      });

      setBarangays(result);
    } else {
      setCity({ id: "", name: "" });
      setBarangays([]);
      setBarangay({ id: "", name: "" });
    }
  };

  const selectBarangayHandler = (value, name) => {
    if (value !== "") {
      setBarangay({ id: value, name: name });
    } else {
      setBarangay({ id: "", name: "" });
    }
  };
  return (
    <div ref={formRef} className="event-editor-container">
      <form className="event-editor-form">
        <h3>Event Place Editor</h3>
        <div className="registration">
          <label className="registration-label" htmlFor="">
            Name: <span>*</span>
          </label>
        </div>

        <input type="text" />
        <div className="registration">
          <label className="registration-label" htmlFor="">
            Business Address: <span>*</span>
          </label>
          <div className="registration-select baddress">
            <select
              className=""
              id=""
              value={province.id}
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
              value={city.id}
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
            <input type="text" placeholder="address" />
          </div>
        </div>
        <div className="registration">
          <label className="registration-label" htmlFor="">
            Description: <span>*</span>
          </label>
          <textarea name="" id="" cols="30" rows="10"></textarea>
        </div>

        <div>
          <button>save</button>
        </div>
        <div className="event-manager-close-container">
          <button type="button" onClick={showFormHandler}>
            X
          </button>
        </div>
      </form>
    </div>
  );
}

export default VenueEditor;
