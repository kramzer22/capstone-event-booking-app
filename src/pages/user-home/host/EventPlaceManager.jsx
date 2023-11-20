import { useState, useEffect } from "react";

import Header from "../../../components/header/Header";
import VenueView from "./components/VenueView";
import VenueEditor from "./components/VenueEditor";
import Venue from "./components/Venue";
import VenuePackageEditor from "./components/VenuePackageEditor";
import VenuePackageView from "./components/VenuePackageView";

import hostServices from "../../../services/hostServices";

import "./eventPlaceManager.css";

function EventPlaceManager({ userCookieState }) {
  const [venues, setVenues] = useState([]);
  const [venueEditor, setVenueEditor] = useState(null);
  const [venueView, setVenueView] = useState(null);
  const [packageEditor, setPackageEditor] = useState(null);
  const [packageView, setPackageView] = useState(null);

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

  console.log(venues);
  const venueEditorDisplayHandler = (transactionType, venue = null) => {
    setVenueEditor(
      <VenueEditor
        selectedVenue={venue}
        transactionType={transactionType}
        setVenueEditor={setVenueEditor}
      />
    );
  };

  const packageViewDisplayHandler = (venue) => {
    setPackageView(
      <VenuePackageView venue={venue} setPackageView={setPackageView} />
    );
  };

  const packageEditorDisplayHandler = (transactionType, venueId) => {
    setPackageEditor(
      <VenuePackageEditor
        transactionType={transactionType}
        setPackageEditor={setPackageEditor}
        venueId={venueId}
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
          packageViewDisplayHandler={packageViewDisplayHandler}
          venue={venue}
          key={index}
        />
      );
    });
  }

  return (
    <>
      <Header userCookieState={userCookieState} />

      <div className="venue-manager-container">
        <div className="venue-manager-header-container">
          <h3>Venues</h3>
          <button onClick={() => venueEditorDisplayHandler("addnew")}>
            Add New
          </button>
        </div>
        <ul className="venue-manager-venues-container">{venueListDisplay}</ul>
      </div>

      {venueEditor}
      {venueView}
      {packageEditor}
      {packageView}
    </>
  );
}

export default EventPlaceManager;
