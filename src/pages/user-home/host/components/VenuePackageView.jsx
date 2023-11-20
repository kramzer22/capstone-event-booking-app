import "./venuePackageView.css";

function VenuePackageView({
  venue,
  setPackageView,
  packageEditorDisplayHandler,
}) {
  return (
    <div className="venue-package-view-container">
      <div className="venue-package-view">
        <h1>{venue.venue_name}</h1>
        <div className="venue-package-list-container">
          <h2>Total packages:{venue.packages.length}</h2>
          <ul>
            {venue.packages.map((item, index) => (
              <li key={index}>
                <div>
                  <h3>{item.name}</h3>
                  <p>{item.description}</p>
                  <p>
                    Total inclusion:
                    {item.inclusions.length}
                  </p>
                </div>
                <div>
                  <button
                    onClick={() =>
                      packageEditorDisplayHandler(venue.id, "update", item)
                    }
                  >
                    Update
                  </button>
                  <button>Remove</button>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="package-view-close-container">
          <button type="button" onClick={() => setPackageView(null)}>
            X
          </button>
        </div>
      </div>
    </div>
  );
}

export default VenuePackageView;
