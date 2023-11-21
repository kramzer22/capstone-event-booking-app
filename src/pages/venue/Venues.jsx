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
      venue.packages.map((item) => item)
    );

    console.log(itemPackages);
    setPackageList(itemPackages);
  };

  let heroDisplay;
  if (heroVenue) {
    heroDisplay = (
      <>
        <h1>{heroVenue.venue_name}</h1>
        <p>{heroVenue.description}</p>
      </>
    );
  }
  return (
    <>
      <Header userCookieState={userCookieState} />
      <div className="venues-container">
        <div className="venues-featured-container">{heroDisplay}</div>
        <div className="venues-package-container">
          <div className="venues-list-container">
            <input type="text" placeholder="search" />
            <h3>Venue List</h3>
            <ul>
              {venueList.map((venue, index) => (
                <li className="venues-venue-item-container" key={index}>
                  <h4>{venue.venue_name}</h4>
                  <h5>{`${venue.address.street} ${venue.address.barangay}, ${venue.address.city}, ${venue.address.province}`}</h5>
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
          <div className="packages-list-container">
            <input type="text" placeholder="search" />
            <h3>Package List</h3>
            <ul>
              {packageList.map((itemPackage, index) => (
                <li className="venues-package-item-container" key={index}>
                  <h4>{itemPackage.name}</h4>
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
