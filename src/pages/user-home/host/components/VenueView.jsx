import { useState, useRef } from "react";

import inputChekerModule from "../../../../helpers/inputChekerModule";
import hostServices from "../../../../services/hostServices";

import "./venueView.css";

function VenueView({ venue, setVenueView }) {
  const [imageUploader, setImageUploader] = useState(null);
  const [selectedVenue, setSelectedVenue] = useState(venue);
  const [selectedImageIndex, setSelectedImageIndex] = useState(-1);
  const uploadImageRef = useRef(null);
  const mainImageref = useRef(null);

  const activateSelectImageHandle = () => {
    uploadImageRef.current.click();
  };

  const selectedImageHandler = (index, imgLink) => {
    if (setSelectedImageIndex !== index) {
      mainImageref.current.src = imgLink;
      setSelectedImageIndex(index);
    } else {
      setSelectedImageIndex(-1);
    }
  };

  const selectImageHandle = (e) => {
    const file = e.target.files[0];

    if (file && inputChekerModule.isValidImageType(file)) {
      const imgUpload = URL.createObjectURL(file);
      setImageUploader(
        <div className="venue-view-container upload-container">
          <div className="venue-image-upload-container">
            <img src={imgUpload} alt="" />
            <div>
              <button onClick={closeImageUploadHandle}>cancel</button>
              <button onClick={() => uploadImageHandle(file)}>upload</button>
            </div>
          </div>
        </div>
      );
    } else {
      console.log("invalid image file");
      e.target.value = null;
    }
  };
  const uploadImageHandle = async (imgFile) => {
    const formData = new FormData();
    formData.append("image", imgFile);

    try {
      const response = await hostServices.uploadVenueImage(
        selectedVenue.id,
        formData
      );
      if (response.status === 200) {
        setSelectedVenue(response.data);
        setImageUploader(null);
      }
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  const removeImageHandler = async () => {
    const imageId = venue.images[selectedImageIndex].name;
    try {
      const response = await hostServices.removeVenueImage(imageId);
      if (response.status === 200) {
        setSelectedVenue(response.data);
        setSelectedImageIndex(-1);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const closeImageUploadHandle = () => {
    uploadImageRef.current.value = null;
    setImageUploader(null);
  };

  const venueAddress = () => {
    const address = selectedVenue.address;
    return `${address.street} ${address.barangay}, ${address.city}, ${address.province}`;
  };
  return (
    <>
      <div className="venue-view-container">
        <div className="venue-content-container">
          <h2>{selectedVenue.venue_name}</h2>
          <p>{venueAddress()}</p>
          <div
            dangerouslySetInnerHTML={{
              __html: selectedVenue.description.replace(/\n/g, "<br>"),
            }}
          />
          <div className="venue-image-control-container">
            <div className="venue-image-container">
              <img
                className="venue-image-main"
                ref={mainImageref}
                src={
                  selectedVenue.images.length > 0
                    ? selectedVenue.images[0].link
                    : ""
                }
                alt=""
              />
              <ul>
                {selectedVenue.images.map((image, index) => {
                  return (
                    <li
                      key={image.name}
                      onClick={() => selectedImageHandler(index, image.link)}
                      style={{
                        cursor: "pointer",
                        border:
                          index === selectedImageIndex
                            ? "3px solid rgb(0, 0, 250)"
                            : "none",
                      }}
                    >
                      <img src={image.link} alt="" />
                    </li>
                  );
                })}
              </ul>
            </div>
            <div>
              <button onClick={removeImageHandler}>remove</button>
              <button onClick={activateSelectImageHandle}>select image</button>
              <input
                className="uplaod-image-input"
                ref={uploadImageRef}
                type="file"
                onChange={selectImageHandle}
              />
            </div>
            <div></div>
          </div>

          <div className="venue-content-close-container">
            <button type="button" onClick={() => setVenueView(null)}>
              X
            </button>
          </div>
        </div>
      </div>
      {imageUploader}
    </>
  );
}

export default VenueView;
