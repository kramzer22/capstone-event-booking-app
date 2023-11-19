import { useState, useEffect } from "react";

import Header from "../../../components/header/Header";
import VenueView from "./components/VenueView";
import VenueEditor from "./components/VenueEditor";
import Venue from "./components/Venue";
import VenuePackageEditor from "./components/VenuePackageEditor";

import hostServices from "../../../services/hostServices";

import "./eventPlaceManager.css";

function EventPlaceManager({ userCookieState }) {
  const [venues, setVenues] = useState([]);
  const [venueEditor, setVenueEditor] = useState(null);
  const [venueView, setVenueView] = useState(null);
  const [packageEditor, setPackageEditor] = useState(null);

  useEffect(() => {
    const getUserVenues = async () => {
      try {
        const response = await hostServices.getVenues();
        setVenues(response.data);
      } catch (error) {
        setVenues([]);
      }
    };
    getUserVenues();
  }, []);
  const venueEditorDisplayHandler = (transactionType, venue = null) => {
    setVenueEditor(
      <VenueEditor
        selectedVenue={venue}
        transactionType={transactionType}
        setVenueEditor={setVenueEditor}
      />
    );
  };

  const packageEditorDisplayHandler = (transactionType) => {
    setPackageEditor(
      <VenuePackageEditor
        transactionType={transactionType}
        setPackageEditor={setPackageEditor}
      />
    );
  };

  const venuewViewDisplayHandler = (venue) => {
    setVenueView(<VenueView venue={venue} setVenueView={setVenueView} />);
  };

  let venueListDisplay;
  if (venues.length > 0) {
    venueListDisplay = venues.map((venue, index) => {
      return (
        <Venue
          venueEditorDisplayHandler={venueEditorDisplayHandler}
          venuewViewDisplayHandler={venuewViewDisplayHandler}
          packageEditorDisplayHandler={packageEditorDisplayHandler}
          venue={venue}
          key={index}
        />
      );
    });
  }

  return (
    <>
      <Header userCookieState={userCookieState} />

      <div className="venue-manager-contanier">
        <div className="venue-manager-header-container">
          <h1>Venues</h1>
          <button onClick={() => venueEditorDisplayHandler("addnew")}>
            Add New
          </button>
        </div>
        <ul className="venue-manager-venues-container">{venueListDisplay}</ul>
      </div>

      {venueEditor}
      {venueView}
      {packageEditor}
    </>
  );
}

export default EventPlaceManager;
