import { useState } from "react";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import venueServices from "../../services/venueServices";

import { useNavigate } from "react-router-dom";

import "./BookPicker.css";

function BookPicker({ setBookDisplay, venueId, packageId }) {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [displayResult, setDisplayResult] = useState("");
  const navigate = useNavigate();

  const proceedToBookingRequestHandler = async () => {
    try {
      const data = {
        select_date: selectedDate,
        package_id: packageId,
        venue_id: venueId,
      };
      const response = await venueServices.postClientBooking(data);

      if (response.status === 201) {
        setDisplayResult("booking request sent to host");

        setTimeout(() => {
          navigate("/");
          window.location.reload();
        }, 3000);
      }
    } catch (error) {
      console.log(error);
    }
  };

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
          <p>{displayResult}</p>
        </div>
        <button
          className="book-picker-button-proceed"
          onClick={proceedToBookingRequestHandler}
        >
          Proceed
        </button>
        <button
          className="book-picker-button-close"
          onClick={() => {
            setBookDisplay(null);
          }}
        >
          ✖
        </button>
      </div>
    </div>
  );
}

export default BookPicker;
