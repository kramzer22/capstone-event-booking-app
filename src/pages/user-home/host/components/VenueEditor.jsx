import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as geoAdmin from "ph-geo-admin-divisions";

import hostServices from "../../../../services/hostServices";
import objectHelperModule from "../../../../helpers/objectHelperModule";

import "./venueEditor.css";

function VenueEditor({ formRef, showFormHandler }) {
  const [venue, setVenue] = useState("");
  const [province, setProvince] = useState({ id: "", name: "" });
  const [city, setCity] = useState({ id: "", name: "" });
  const [barangay, setBarangay] = useState({ id: "", name: "" });
  const [provinces, setProvinces] = useState([]);
  const [cities, setCities] = useState([]);
  const [barangays, setBarangays] = useState([]);
  const [street, setStreet] = useState("");
  const [venueDescription, setVenueDescription] = useState("");

  const navigate = useNavigate();

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

  const formSubmitHandler = async (e) => {
    e.preventDefault();

    const newVenue = {
      venue_name: venue,
      address: {
        province: province,
        city: city,
        barangay: barangay,
        street: street,
      },
      description: venueDescription,
    };
    const userToken = objectHelperModule.getCookie("userToken");
    try {
      const response = await hostServices.registerVenue(userToken, newVenue);
      if (response.status === 201) {
        navigate("/host/event-manager");
        window.location.reload();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div ref={formRef} className="event-editor-container">
      <form className="event-editor-form" onSubmit={formSubmitHandler}>
        <h3>Event Place Editor</h3>
        <div className="registration">
          <label className="registration-label" htmlFor="">
            Venue name: <span>*</span>
          </label>
          <input
            type="text"
            value={venue}
            onChange={(e) => setVenue(e.target.value)}
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
            <input
              type="text"
              placeholder="address"
              value={street}
              onChange={(e) => setStreet(e.target.value)}
            />
          </div>
        </div>
        <div className="registration">
          <label className="registration-label" htmlFor="">
            Description: <span>*</span>
          </label>
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            value={venueDescription}
            onChange={(e) => setVenueDescription(e.target.value)}
          ></textarea>
        </div>

        <div>
          <button type="submit">save</button>
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
