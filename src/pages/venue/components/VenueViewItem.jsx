import { useState, useRef, useEffect } from "react";

import BookPicker from "../../../components/book-picker/BookPicker";
import Messaging from "../../../components/messaging/Messaging";

import venueServices from "../../../services/venueServices";

import objectHelperModule from "../../../helpers/objectHelperModule";

import "./venueViewItem.css";

function VenueViewItem({ setViewDisplay, venueId }) {
  const [venue, setVenue] = useState(null);
  const [bookDisplay, setBookDisplay] = useState(null);
  const [messagingDisplay, setMessagingDisplay] = useState(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(-1);
  const mainImageref = useRef(null);
  const getSelectedVenue = async () => {
    try {
      const response = await venueServices.getVenue(venueId);
      console.log(response);
      if (response.status === 200) {
        setVenue(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getSelectedVenue();
  }, []);

  const selectImageHandler = (index) => {
    if (selectedImageIndex !== index) {
      setSelectedImageIndex(index);
      mainImageref.current.src = venue.images[index].link;
    } else {
      setSelectedImageIndex(-1);
    }
  };

  const bookPickerHandler = (packageId) => {
    if (objectHelperModule.getCookie("userRole") === "client") {
      setBookDisplay(
        <BookPicker
          setBookDisplay={setBookDisplay}
          venueId={venue.id}
          packageId={packageId}
        />
      );
    }
  };

  const messagingDisplayHandler = (recipient) => {
    setMessagingDisplay(
      <Messaging
        setMessagingDisplay={setMessagingDisplay}
        recipient={recipient}
      />
    );
  };

  let venueDisplay;
  if (venue) {
    venueDisplay = (
      <div className="venue-view-container">
        <div className="venue-view-body-container">
          <div className="venue-view-body">
            <div className="venue-view-body-details">
              <h4>{venue.venue_name}</h4>
              <p>{venue.complete_address}</p>
            </div>
            <div className="venue-view-content-container">
              {venue.images.length === 0 ? (
                <div className="venue-view-image-container">
                  <img className="venue-view-image" src="" alt="" />
                </div>
              ) : (
                <div className="venue-view-image-container">
                  <img
                    className="venue-view-image"
                    ref={mainImageref}
                    src={venue.images.length > 0 ? venue.images[0].link : ""}
                    alt=""
                  />
                  <ul className="venue-view-image-list">
                    {venue.images.map((image, index) => (
                      <li
                        key={index}
                        onClick={() => {
                          selectImageHandler(index);
                        }}
                        style={{
                          cursor: "pointer",
                          border:
                            index === selectedImageIndex
                              ? "1px solid var(--accent)"
                              : "none",
                        }}
                      >
                        <img src={image.link} alt="" />
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              <div
                className="venue-view-description"
                dangerouslySetInnerHTML={{
                  __html: `<div class="description-container">${venue.description.replace(
                    /\n/g,
                    "<br>"
                  )}</div>`,
                }}
              />
            </div>
            <div className="venue-view-package">

              <div className="venue-view-package-header-main">
                <h5>Packages Offered: {venue.packages.length}</h5>
                <button onClick={() => messagingDisplayHandler(venue.email)}>
                  Message
                  <i class="ri-send-plane-fill"></i>
                </button>
              </div>

              <ul className="venue-view-package-container">
                {venue.packages.map((item, index) => (
                  <li className="venue-view-package-item" key={index}>
                    <div className="venue-view-package-header">
                      <h4>{item.name}</h4>
                      <div className="venue-view-package-header details">
                        <h5>
                          price: ₱
                          {item.price.toLocaleString("en-US", {
                            minimumFractionDigits: 2,
                          })}
                        </h5>
                        <button
                          className="venue-view-package-book-request"
                          onClick={() => bookPickerHandler(item.id)}
                        >
                          Request Book
                        </button>
                      </div>
                    </div>
                    <div className="venue-view-package-body">
                      <p>{item.description}</p>
                      <ul>
                        {item.inclusions.map((inclusion, i) => (
                          <li key={i}>{inclusion}</li>
                        ))}
                      </ul>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="venue-content-close-container">
            <button
              className="venue-view-button-close"
              onClick={() => {
                setViewDisplay(null);
              }}
            >
              ✖
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      {venueDisplay}
      {bookDisplay}
      {messagingDisplay}
    </>
  );
}

export default VenueViewItem;
