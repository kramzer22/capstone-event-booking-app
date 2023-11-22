import { useState } from "react";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import "./BookPicker.css";

function BookPicker({ setBookDisplay }) {
  const [selectedDate, setSelectedDate] = useState(new Date());

  return (
    <div className="book-picker-container">
      <div className="book-picker-body-container">
        <div className="date-picker-container">
          <label>Select date</label>
          <ReactDatePicker
            selected={selectedDate}
            onChange={(date) => setSelectedDate(date)}
            minDate={new Date()}
            dateFormat="yyyy-MM-dd"
          />
          {selectedDate && (
            <div className="selected-date">
              Selected Date: {selectedDate.toISOString().split("T")[0]}
            </div>
          )}
        </div>
        <button className="book-picker-button-proceed">Proceed</button>
        <button
          className="book-picker-button-close"
          onClick={() => {
            setBookDisplay(null);
          }}
        >
          X
        </button>
      </div>
    </div>
  );
}

export default BookPicker;
