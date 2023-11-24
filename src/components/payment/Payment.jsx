import { useState } from "react";

import bookingServices from "../../services/bookingServices";

import "./payment.css";

function Payment({ setPaymentDisplay, bookId }) {
  const [selectedPayment, setSelectedPayment] = useState("");

  let paymentForm;

  if (selectedPayment === "gcash") {
    paymentForm = (
      <div className="payment-form-container">
        <img
          className="payment-gcash-qr"
          src="https://img.freepik.com/premium-vector/sample-qr-code-icon_322958-669.jpg?w=826"
          alt=""
        />
        <p>SCAN QR</p>
        <button onClick={() => setBookingTransaction("payment")}>
          Proceed
        </button>
      </div>
    );
  } else if (selectedPayment === "paypal") {
    paymentForm = (
      <div className="payment-form-container">
        <input type="text" placeholder="card number" />
        <div className="payment-form-card-date">
          <div>
            <input className="paypal-date" type="text" placeholder="mm" />
            <input className="paypal-date" type="text" placeholder="yy" />
          </div>

          <input className="cvv" type="text" placeholder="cvv" />
        </div>
        <button onClick={() => setBookingTransaction("payment")}>
          Proceed
        </button>
      </div>
    );
  }

  const setBookingTransaction = async (transaction) => {
    try {
      const response = await bookingServices.setBookingTransaction(
        bookId,
        transaction
      );
      console.log(response);
      if (response.status === 200) {
        window.location.reload();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="payment-container">
      <div className="payment-body-container">
        <div className="payment-selection-container">
          <label>Select payment option</label>
          <select
            value={selectedPayment}
            onChange={(e) => setSelectedPayment(e.target.value)}
          >
            <option value=""></option>
            <option value="gcash">GCash</option>
            <option value="paypal">Credit/Debit Card</option>
          </select>
        </div>
        {paymentForm}
        <button
          className="payment-button-close"
          onClick={() => {
            setPaymentDisplay(null);
          }}
        >
          ✖
        </button>
      </div>
    </div>
  );
}

export default Payment;
