function Venue({ venuewViewDisplayHandler, venue }) {
  const address = `${venue.address.street} ${venue.address.barangay}, ${venue.address.city}, ${venue.address.province}`;

  return (
    <div>
      <div>
        <h2>{venue.venue_name}</h2>
        <p>Address: {address}</p>
      </div>
      <div>
        <button onClick={() => venuewViewDisplayHandler(venue)}>View</button>
        <button>View Packages</button>
        <button>Add package</button>
      </div>
    </div>
  );
}

export default Venue;
