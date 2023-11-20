import "./venue.css";

function Venue({
  venueEditorDisplayHandler,
  venuewViewDisplayHandler,
  packageEditorDisplayHandler,
  packageViewDisplayHandler,
  venue,
}) {
  const address = `${venue.address.street} ${venue.address.barangay}, ${venue.address.city}, ${venue.address.province}`;

  return (
    <div className="venue-list-container">
      <div>
        <h4>{venue.venue_name}</h4>
        <div className="venue-list-content">
          <div className="venue-list-details address">
            <strong>Address:</strong>
            <p>{address}</p>
          </div>

          <div className="venue-list-details description">
            <strong>Description:</strong>
            <p>{venue.description}</p>
          </div>
        </div>
      </div>
      <div className="venue-list-control-container">
        <button onClick={() => venueEditorDisplayHandler("update", venue)}>
          Update
        </button>
        <button onClick={() => venuewViewDisplayHandler(venue)}>View</button>
        <button onClick={() => packageViewDisplayHandler(venue)}>
          View Packages
        </button>
        <button onClick={() => packageEditorDisplayHandler(venue.id, "addnew")}>
          Add package
        </button>
      </div>
    </div>
  );
}

export default Venue;
