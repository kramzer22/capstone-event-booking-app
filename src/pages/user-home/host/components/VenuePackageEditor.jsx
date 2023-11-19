function VenuePackageEditor({ transactionType, setPackageEditor }) {
  return (
    <div>
      <form className="event-editor-form">
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
        <div className="registration">
          <div>
            <label className="registration-label" htmlFor="">
              Inclusions: <span>*</span>
            </label>
            <ul>
              <li>wawawee</li>
            </ul>
          </div>

          <div>
            <button>Add</button>
            <button>remove</button>
          </div>
        </div>
        <div>
          <button type="submit">save</button>
        </div>
        <div>
          <button type="button" onClick={() => setPackageEditor(null)}>
            X
          </button>
        </div>
      </form>
    </div>
  );
}

export default VenuePackageEditor;
