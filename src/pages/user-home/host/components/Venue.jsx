import "./venue.css";

function Venue({
  venueEditorDisplayHandler,
  venuewViewDisplayHandler,
  packageEditorDisplayHandler,
  venue,
}) {
  const address = `${venue.address.street} ${venue.address.barangay}, ${venue.address.city}, ${venue.address.province}`;

  return (
    <div className="venue-list-container">
      <div>
        <h2>{venue.venue_name}</h2>
        <div className="venue-list-conent">
          <p>Address: {address}</p>
          <p>Description: {venue.description}</p>
        </div>
      </div>
      <div className="venue-list-control-container">
        <button onClick={() => venueEditorDisplayHandler("update", venue)}>
          Update
        </button>
        <button onClick={() => venuewViewDisplayHandler(venue)}>View</button>
        <button>View Packages</button>
        <button onClick={() => packageEditorDisplayHandler("addnew", venue.id)}>
          Add package
        </button>
      </div>
    </div>
  );
}

export default Venue;
