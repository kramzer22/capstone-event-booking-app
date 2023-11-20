import { useState, useRef } from "react";

import inputChekerModule from "../../../../helpers/inputChekerModule";
import hostServices from "../../../../services/hostServices";

import "./venueView.css";

function VenueView({ venue, setVenueView }) {
  const [imageUploader, setImageUploader] = useState(null);
  const [selectedVenue, setSelectedVenue] = useState(venue);
  const uploadImageRef = useRef(null);

  const venueImages = selectedVenue.images
    ? selectedVenue.images.map((images) => images)
    : [];

  const displayImage =
    venueImages.length > 0 ? venueImages[0].image.link : null;

  const activateSelectImageHandle = () => {
    uploadImageRef.current.click();
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
    console.log(selectedVenue);
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

  const closeImageUploadHandle = () => {
    uploadImageRef.current.value = null;
    setImageUploader(null);
  };

  console.log(selectedVenue);
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
              <img className="venue-image-main" src={displayImage} alt="" />
              <ul>
                {venueImages.map((item) => {
                  return (
                    <li key={item.image.name}>
                      <img src={item.image.link} alt="" />
                    </li>
                  );
                })}
              </ul>
            </div>
            <div>
              <button>remove</button>
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
