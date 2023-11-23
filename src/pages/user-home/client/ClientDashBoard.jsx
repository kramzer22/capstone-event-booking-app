import { useState, useEffect } from "react";

import Payment from "../../../components/payment/Payment";
import Header from "../../../components/header/Header";

import notificationServices from "../../../services/notificationServices";
import bookingServices from "../../../services/bookingServices";

import "../host/hostHome.css";

function ClientDashBoard({ userCookieState }) {
  const [notifications, setNotifications] = useState([]);
  const [bookingHistory, setBookingHistory] = useState([]);
  const [paymentDisplay, setPaymentDisplay] = useState(null);

  const getNotificationList = async () => {
    try {
      const response = await notificationServices.getNotification();

      if (response.status === 200) {
        setNotifications(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  console.log(notifications);

  const getBookingList = async () => {
    try {
      const response = await bookingServices.getBookingTransactions();
      if (response.status === 200) {
        setBookingHistory(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getNotificationList();
    getBookingList();
  }, []);

  const setBookingTransaction = async (bookId, transaction) => {
    try {
      const response = await bookingServices.setBookingTransaction(
        bookId,
        transaction
      );

      if (response.status === 200) {
        window.location.reload();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const showPaymentFormHandler = (bookId) => {
    setPaymentDisplay(
      <Payment setPaymentDisplay={setPaymentDisplay} bookId={bookId} />
    );
  };

  return (
    <>
      <Header userCookieState={userCookieState} />
      <div className="host-user-main">
        <div className="host-home-main">
          <div className="transaction-container">
            <h1>transaction history</h1>
            <ul className="transaction-container-list">
              {bookingHistory.map((booking, index) => (
                <li key={index}>
                  <h5>Host: {booking.host_email}</h5>
                  <p>{`Venue: ${booking.venue_name} ${booking.book_date}`}</p>
                  <p>Address: {booking.complete_address}</p>
                  <p>Package: {booking.package.name}</p>
                  <p>Total inclusions: {booking.package.inclusions.length}</p>
                  <p>
                    Cost: ₱
                    {booking.package.price.toLocaleString("en-US", {
                      minimumFractionDigits: 2,
                    })}
                  </p>
                  {booking.booking_status === "payment" ? (
                    <div className="transaction-booking-controls">
                      <button
                        onClick={() =>
                          setBookingTransaction(booking.id, "accept")
                        }
                      >
                        Cancel
                      </button>
                      <button
                        onClick={() => showPaymentFormHandler(booking.id)}
                      >
                        Proceed to payment
                      </button>
                    </div>
                  ) : null}
                  <p className="transaction-status">
                    Status: {booking.booking_status.split("_").join(" ")}
                  </p>
                </li>
              ))}
            </ul>
          </div>
          <div className="notification-container">
            <h3>Notfications</h3>
            <ul className="notification-container-list">
              {notifications.map((item, index) => (
                <li key={index}>
                  <h5>{item.notification.title}</h5>
                  <p>{item.notification.message}</p>
                  <p>{item.elapse_time}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="message-container">
            <h2>messages</h2>
            <ul></ul>
          </div>
        </div>
      </div>
      {paymentDisplay}
    </>
  );
}

export default ClientDashBoard;
