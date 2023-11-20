
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import "./venuePackageEditor.css";
import hostServices from "../../../../services/hostServices";

function VenuePackageEditor({
  transactionType,
  setPackageEditor,
  venueId,
  selectedPackage,
}) {
  const [inclusions, setInclusions] = useState([]);
  const [selectedInclusionIndex, setSelectedInclusionIndex] = useState(-1);
  const [inclusionInput, setInclusionInput] = useState("");
  const [packageName, setPackageName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);

  const navigate = useNavigate();

  useEffect(() => {
    setPackageName(selectedPackage.name);
    setDescription(selectedPackage.description);
    setPrice(selectedPackage.price);
    setInclusions(selectedPackage.inclusions);
  }, []);

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

  const submitPackageDateHandle = async (e) => {
    e.preventDefault();

    try {
      if (transactionType === "addnew") {
        const pacakageData = {
          name: packageName,
          description: description,
          price: price,
          inclusions: inclusions,
        };

        const response = await hostServices.registerPackage(
          venueId,
          pacakageData
        );

        if (response.status == 201) {
          navigate("/host/event-manager");
          window.location.reload();
        }
      } else if (transactionType === "update") {
        const pacakageData = {
          name: packageName,
          description: description,
          price: price,
          inclusions: inclusions,
        };

        const response = await hostServices.updatePackage(
          venueId,
          pacakageData
        );
      }

      if (response.status == 201) {
        navigate("/host/event-manager");
        window.location.reload();
      }

      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="venue-package-editor-container">
      <form
        className="venue-package-editor-form"
        onSubmit={submitPackageDateHandle}
      >
        <h5>Package Editor</h5>
        <div className="registration">
          <label className="registration-label" htmlFor="">
            Package name: <span>*</span>
          </label>
          <input
            type="text"
            value={packageName}
            onChange={(e) => setPackageName(e.target.value)}
          />
        </div>
        <div className="registration">
          <label className="registration-label" htmlFor="">
            Description: <span>*</span>
          </label>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="registration">
          <label className="registration-label" htmlFor="">
            Price: <span>*</span>
          </label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <div className="venue-package-inclusion-container">
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

            <div className="venue-package-inclusion-buttons">
              <button type="button" onClick={addInclusionHandle}>
                Add
              </button>
              <button type="button" onClick={removeInclusionHandle}>
                remove
              </button>
            </div>
          </div>
        </div>
        <div className="venue-package-submit-container">
          <button type="submit">save</button>
        </div>
        <div className="venue-package-close-container">
          <button type="button" onClick={() => setPackageEditor(null)}>
            ✖
          </button>
        </div>
      </form>
    </div>
  );
}

export default VenuePackageEditor;
