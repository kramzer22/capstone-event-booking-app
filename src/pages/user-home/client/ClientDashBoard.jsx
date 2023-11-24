import { useState, useEffect } from "react";

import Payment from "../../../components/payment/Payment";
import Header from "../../../components/header/Header";
import Messaging from "../../../components/messaging/Messaging";

import notificationServices from "../../../services/notificationServices";
import bookingServices from "../../../services/bookingServices";
import messagingServices from "../../../services/messagingServices";

import "../host/hostHome.css";
import objectHelperModule from "../../../helpers/objectHelperModule";

function ClientDashBoard({ userCookieState }) {
  const [notifications, setNotifications] = useState([]);
  const [bookingHistory, setBookingHistory] = useState([]);
  const [messageList, setMessageList] = useState([]);
  const [messagingDisplay, setMessagingDisplay] = useState(null);
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

  const getAllMessage = async () => {
    try {
      const response = await messagingServices.getAllMessage();
      setMessageList(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getNotificationList();
    getBookingList();
    getAllMessage();
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

  const messagingDisplayHandler = (recipient) => {
    console.log("wawawee");
    setMessagingDisplay(
      <Messaging
        setMessagingDisplay={setMessagingDisplay}
        recipient={recipient}
      />
    );
  };

  console.log(messageList);

  return (
    <>
      <Header userCookieState={userCookieState} />
      <div className="host-user-main">
        <div className="host-home-main">
          <div className="transaction-container">
            <h4>Transaction History</h4>
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
                  <small className="transaction-status">
                    Status: {booking.booking_status.split("_").join(" ")}
                  </small>
                </li>
              ))}
            </ul>
          </div>
          <div className="notification-container">
            <h5>Notifications</h5>
            <ul className="notification-container-list">
              {notifications.map((item, index) => (
                <li key={index}>
                  <h5>{item.notification.title}</h5>
                  <p>{item.notification.message}</p>
                  <small>{item.elapse_time}</small>
                </li>
              ))}
            </ul>
          </div>
          <div className="message-container">
            <h5>Messages <i class="ri-message-2-line"></i></h5>
            <ul>
              {messageList.map((data, index) => (
                <li
                  key={index}
                  onClick={() => messagingDisplayHandler(data.users.host_email)}
                >
                  <h4>
                    {objectHelperModule.getCookie("userRole") === "client"
                      ? data.host_name
                      : data.users.client_email}
                  </h4>
                  <p>{`${
                    data.message.who_is === "sender" ? "You" : "Recipient"
                  }: ${data.message.content}`}</p>
                  <small>{data.message.elapsed}</small>
                </li>
              ))}
            </ul>
          </div>
        </div>
        {messagingDisplay}
        {paymentDisplay}
      </div>
    </>
  );
}

export default ClientDashBoard;
