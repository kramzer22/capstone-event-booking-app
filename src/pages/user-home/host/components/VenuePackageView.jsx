import { useNavigate } from "react-router-dom";

import hostServices from "../../../../services/hostServices";

import "./venuePackageView.css";

function VenuePackageView({
  venue,
  setPackageView,
  packageEditorDisplayHandler,
}) {
  const navigate = useNavigate();

  const removeVenuePackageHandler = async (packageId) => {
    try {
      const response = await hostServices.removePackage(venue.id, packageId);

      if (response.status === 200) {
        navigate("/host/event-manager");
        window.location.reload();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="venue-package-view-container">
      <div className="venue-package-view">
        <h4>{venue.venue_name}</h4>
        <div className="venue-package-list-container">
          <h5>Total packages: {venue.packages.length}</h5>
          <ul>
            {venue.packages.map((item, index) => (
              <li key={index}>
                <div className="venue-packages-details">
                  <h5>{item.name}</h5>
                  <p>{item.description}</p>
                </div>
                <div className="venue-package-buttons">
                  <h5>
                    Total inclusion: {""}
                    {item.inclusions.length}
                  </h5>

                  <button
                    onClick={() =>
                      packageEditorDisplayHandler(venue.id, "update", item)
                    }
                  >
                    Update
                  </button>

                  <button onClick={() => removeVenuePackageHandler(item.id)}>
                    Remove
                  </button>
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
