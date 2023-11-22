import { useState, useRef } from "react";

import BookPicker from "../../../components/book-picker/BookPicker";

import objectHelperModule from "../../../helpers/objectHelperModule";

import "./venueViewItem.css";

function VenueViewItem({ setViewDisplay, venue }) {
  const [bookDisplay, setBookDisplay] = useState(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(-1);
  const mainImageref = useRef(null);

  const selectImageHandler = (index) => {
    if (selectedImageIndex !== index) {
      setSelectedImageIndex(index);
      mainImageref.current.src = venue.images[index].link;
    } else {
      setSelectedImageIndex(-1);
    }
  };

  const bookPickerHandler = () => {
    if (objectHelperModule.getCookie("userRole") === "client") {
      setBookDisplay(<BookPicker setBookDisplay={setBookDisplay} />);
    }
  };

  return (
    <>
      <div className="venue-view-container">
        <div className="venue-view-body-container">
          <div className="venue-view-body">
            <div>
              <h2>{venue.venue_name}</h2>
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
              <h3>Packages offer: {venue.packages.length}</h3>
              <ul className="venue-view-package-container">
                {venue.packages.map((item, index) => (
                  <li className="venue-view-package-item" key={index}>
                    <div className="venue-view-package-header">
                      <h4>{item.name}</h4>
                      <h5>
                        price: ₱
                        {item.price.toLocaleString("en-US", {
                          minimumFractionDigits: 2,
                        })}
                      </h5>
                      <button
                        className="venue-view-package-book-request"
                        onClick={() => bookPickerHandler()}
                      >
                        request book
                      </button>
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
          <button
            className="venue-view-button-close"
            onClick={() => {
              setViewDisplay(null);
            }}
          >
            X
          </button>
        </div>
      </div>
      {bookDisplay}
    </>
  );
}

export default VenueViewItem;
