import { useState, useEffect } from "react";

import Header from "../../components/header/Header";

import venueServices from "../../services/venueServices";

import "./venues.css";

function Venues({ userCookieState }) {
  const [venues, setVenues] = useState([]);
  const [venueList, setVenueList] = useState([]);
  const [heroVenue, setHeroVenue] = useState(null);
  const [packageList, setPackageList] = useState([]);

  useEffect(() => {
    getVenues();
  }, []);

  const getVenues = async () => {
    try {
      const response = await venueServices.getVenues();
      setVenues(response.data);

      getRandomHeroVenue(response.data);

      getRandomVenues(response.data);

      getRandomPackages(response.data);
    } catch (error) {
      console.log(error);
      return [];
    }
  };

  const getRandomHeroVenue = (itemList) => {
    const randomIndex = Math.floor(Math.random() * itemList.length);
    setHeroVenue(itemList[randomIndex]);
  };

  const getRandomVenues = (itemList) => {
    const totalLimit = itemList.length > 5 ? 5 : itemList.length;
    const result = new Set();

    while (result.size < totalLimit) {
      const randomNumber = Math.floor(Math.random() * totalLimit);
      result.add(randomNumber);
    }

    const selectedItems = Array.from(result).map((num) => itemList[num]);
    setVenueList(selectedItems);
  };

  const getRandomPackages = (itemList) => {
    const filteredVenues = itemList.filter(
      (venue) => venue.packages.length > 0
    );

    const itemPackages = filteredVenues.flatMap((venue) =>
      venue.packages.map((item) => ({
        id: venue.id,
        image: venue.images[0],
        address: `${venue.address.street} ${venue.address.barangay}, ${venue.address.city}, ${venue.address.province}`,
        venue_name: venue.venue_name,
        package: item,
      }))
    );

    console.log(itemPackages);
    setPackageList(itemPackages);
  };

  let heroDisplay;
  if (heroVenue) {
    heroDisplay = (
      <>
        <h1>{heroVenue.venue_name}</h1>
        <p className="venue-hero-description">{heroVenue.description}</p>
        {heroVenue.images.length === 0 ? (
          <div className="venue-hero-image-container">
            <img className="venue-hero-image" src="" alt="" />
          </div>
        ) : (
          <div className="venue-hero-image-container">
            <img
              className="venue-hero-image"
              src={heroVenue.images[0].link}
              alt=""
            />
            <ul className="venue-hero-image-list">
              {heroVenue.images.map((image, index) => (
                <li key={index}>
                  <img src={image.link} alt="" />
                </li>
              ))}
            </ul>
          </div>
        )}
      </>
    );
  }
  return (
    <>
      <Header userCookieState={userCookieState} />
      <div className="venues-container">
        <div className="venues-featured-container">{heroDisplay}</div>
        <div className="venues-body-container">
          <div className="venues-body-list-container">
            <input type="text" placeholder="search" />
            <h3>Venue List</h3>
            <ul className="venues-body-venue-list-container">
              {venueList.map((venue, index) => (
                <li className="venues-body-venue-list" key={index}>
                  <div className="venues-body-venue-container">
                    <h4>{venue.venue_name}</h4>
                    <h5>{`${venue.address.street} ${venue.address.barangay}, ${venue.address.city}, ${venue.address.province}`}</h5>
                  </div>

                  <div>
                    <img
                      src={venue.images[0] ? venue.images[0].link : ""}
                      alt=""
                    />
                    <p>{venue.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="venues-body-list-container">
            <input type="text" placeholder="search" />
            <h3>Package List</h3>
            <ul className="venues-body-venue-list-container">
              {packageList.map((itemPackage, index) => (
                <li className="venues-package-item-container" key={index}>
                  <h4>{itemPackage.package.name}</h4>
                  <div className="venues-package-body-container">
                    <img
                      src={itemPackage.image ? itemPackage.image.link : ""}
                      alt=""
                    />
                    <div>
                      <h5>Inclusions</h5>
                      <ul className="venue-package-inclusion-container">
                        {itemPackage.package.inclusions.map((inclusion, i) => (
                          <li key={i}>{inclusion}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <p className="venue-package-description">
                    {itemPackage.package.description}
                  </p>
                  <h5>cost:₱ {itemPackage.package.price}</h5>
                  <div className="package-item-footer">
                    <h5>{itemPackage.venue_name}</h5>
                    <p>{itemPackage.address}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="venue-search-container">
        <input type="text" placeholder="search" />
      </div>
    </>
  );
}

export default Venues;
