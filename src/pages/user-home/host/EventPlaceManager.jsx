import { useState, useRef, useEffect } from "react";

import Header from "../../../components/header/Header";
import VenueView from "./components/VenueView";
import VenueEditor from "./components/VenueEditor";
import Venue from "./components/Venue";

import hostServices from "../../../services/hostServices";

import objectHelperModule from "../../../helpers/objectHelperModule";

import "./eventPlaceManager.css";

function EventPlaceManager({ userCookieState }) {
  const [venues, setVenues] = useState([]);
  const [venueView, setVenueView] = useState(null);

  const venueEditorRef = useRef(null);

  useEffect(() => {
    const getUserVenues = async () => {
      try {
        const response = await hostServices.getVenues();
        setVenues(response.data);
      } catch (error) {
        setVenues([]);
      }
    };
    venueEditorRef.current.style.display = "none";
    getUserVenues();
  }, []);
  const setEventPlaceEditorVisibility = () => {
    if (venueEditorRef.current.style.display === "none") {
      venueEditorRef.current.style.display = "flex";
    } else {
      venueEditorRef.current.style.display = "none";
    }
  };

  const venuewViewDisplayHandler = (venue) => {
    setVenueView(<VenueView venue={venue} setVenueView={setVenueView} />);
  };

  let venueListDisplay;
  if (venues.length > 0) {
    venueListDisplay = venues.map((venue, index) => {
      return (
        <Venue
          venuewViewDisplayHandler={venuewViewDisplayHandler}
          venue={venue}
          key={index}
        />
      );
    });
  }

  return (
    <>
      <Header userCookieState={userCookieState} />
      <div>
        <div>
          <div>
            <h1>Event Places</h1>
            <button onClick={setEventPlaceEditorVisibility}>Add New</button>
          </div>
          <ul>{venueListDisplay}</ul>
        </div>
      </div>
      <VenueEditor
        formRef={venueEditorRef}
        showFormHandler={setEventPlaceEditorVisibility}
      />
      {venueView}
    </>
  );
}

export default EventPlaceManager;
