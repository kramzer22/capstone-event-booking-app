import { useState } from "react";

import "./venuePackageEditor.css";

function VenuePackageEditor({ transactionType, setPackageEditor }) {
  const [inclusions, setInclusions] = useState([]);
  const [selectedInclusionIndex, setSelectedInclusionIndex] = useState(-1);
  const [inclusionInput, setInclusionInput] = useState("");

  const addInclusionHandle = () => {
    if (inclusionInput.trim() !== "") {
      setInclusions([...inclusions, inclusionInput]);
      setInclusionInput("");
      setSelectedInclusionIndex(-1);
    }
  };

  const selectInclusionHandle = (index) => {
    if (selectedInclusionIndex !== index) {
      setSelectedInclusionIndex(index);
    } else {
      setSelectedInclusionIndex(-1);
    }
  };

  const removeInclusionHandle = () => {
    const updatedInclusions = [...inclusions];
    updatedInclusions.splice(selectedInclusionIndex, 1);
    setInclusions(updatedInclusions);
    setSelectedInclusionIndex(-1);
  };

  return (
    <div className="venue-package-editor-container">
      <form className="venue-package-editor-form">
        <h3>Package Editor</h3>
        <div className="registration">
          <label className="registration-label" htmlFor="">
            Package name: <span>*</span>
          </label>
          <input
            type="text"
            // value={venue}
            // onChange={(e) => setVenue(e.target.value)}
          />
        </div>
        <div className="registration">
          <label className="registration-label" htmlFor="">
            Description: <span>*</span>
          </label>
          <input
            type="text"
            // value={venue}
            // onChange={(e) => setVenue(e.target.value)}
          />
        </div>
        <div className="registration">
          <label className="registration-label" htmlFor="">
            Price: <span>*</span>
          </label>
          <input
            type="number"
            // value={venue}
            // onChange={(e) => setVenue(e.target.value)}
          />
        </div>
        <div className="venue-package-inlcusion-container">
          <div>
            <label className="registration-label" htmlFor="">
              Inclusions: <span>*</span>
            </label>
            <ul>
              {inclusions.map((inclusion, index) => (
                <li
                  key={index}
                  onClick={() => selectInclusionHandle(index)}
                  style={{
                    cursor: "pointer",
                    backgroundColor:
                      index === selectedInclusionIndex
                        ? "rgba(63, 57, 57, 0.5)"
                        : "",
                    fontWeight:
                      index === selectedInclusionIndex ? "bold" : "normal",
                  }}
                >
                  {inclusion}
                </li>
              ))}
            </ul>
          </div>

          <div className="venue-package-inclusion-controls">
            <div className="venue-package-inclusion-input">
              <label className="registration-label" htmlFor="">
                Entry field:
              </label>
              <input
                type="text"
                value={inclusionInput}
                onChange={(e) => setInclusionInput(e.target.value)}
              />
            </div>

            <button type="button" onClick={addInclusionHandle}>
              Add
            </button>
            <button type="button" onClick={removeInclusionHandle}>
              remove
            </button>
          </div>
        </div>
        <div className="venue-package-submit-container">
          <button type="submit">save</button>
        </div>
        <div className="venue-package-close-container">
          <button type="button" onClick={() => setPackageEditor(null)}>
            X
          </button>
        </div>
      </form>
    </div>
  );
}

export default VenuePackageEditor;
