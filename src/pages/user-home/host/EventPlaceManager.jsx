import { useState, useRef } from "react";

import Header from "../../../components/header/Header";
import VenueEditor from "./components/VenueEditor";

import "./eventPlaceManager.css";

function EventPlaceManager({ userCookieState }) {
  const venueEditorRef = useRef(null);

  const ERROR_DISPLAY_TIME = 4000;

  const setEventPlaceEditorVisibility = () => {
    if (venueEditorRef.current.style.display === "none") {
      venueEditorRef.current.style.display = "flex";
    } else {
      venueEditorRef.current.style.display = "none";
    }
  };
  return (
    <>
      <Header userCookieState={userCookieState} />
      <div>
        <div>
          <div>
            <h1>Event Places</h1>
            <button onClick={setEventPlaceEditorVisibility}>Add New</button>
          </div>
          <ul></ul>
        </div>
      </div>
      <VenueEditor
        formRef={venueEditorRef}
        showFormHandler={setEventPlaceEditorVisibility}
      />
    </>
  );
}

export default EventPlaceManager;
