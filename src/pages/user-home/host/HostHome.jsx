import { useState, useEffect } from "react";

import Header from "../../../components/header/Header";
import Messaging from "../../../components/messaging/Messaging";

import messagingServices from "../../../services/messagingServices";
import notificationServices from "../../../services/notificationServices";
import bookingServices from "../../../services/bookingServices";

import objectHelperModule from "../../../helpers/objectHelperModule";

import "./hostHome.css";

function HostHome({ userCookieState }) {
  const [notifications, setNotifications] = useState([]);
  const [bookingHistory, setBookingHistory] = useState([]);
  const [messageList, setMessageList] = useState([]);
  const [messagingDisplay, setMessagingDisplay] = useState(null);

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

  const fetchData = () => {
    getNotificationList();
    getBookingList();
    getAllMessage();
  };

  useEffect(() => {
    fetchData();

    const intervalId = setInterval(() => {
      fetchData();
    }, 600);

    return () => clearInterval(intervalId);
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

  const messagingDisplayHandler = (recipient) => {
    console.log("wawawee");
    setMessagingDisplay(
      <Messaging
        setMessagingDisplay={setMessagingDisplay}
        recipient={recipient}
      />
    );
  };

  console.log(bookingHistory);

  return (
    <>
      <Header userCookieState={userCookieState} />
      <div className="host-user-main">
        <div className="host-home-main">
          <div className="transaction-container">
            <h4>
              <i class="ri-dashboard-line"></i> Transaction History
            </h4>
            <ul className="transaction-container-list">
              {bookingHistory.map((booking, index) => (
                <li key={index}>
                  <h5>Client: {booking.client_email}</h5>
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
                  {booking.booking_status === "approval_pending" ? (
                    <div className="transaction-booking-controls">
                      <button
                        onClick={() =>
                          setBookingTransaction(booking.id, "decline")
                        }
                      >
                        Decline
                      </button>
                      <button
                        onClick={() =>
                          setBookingTransaction(booking.id, "accept")
                        }
                      >
                        Accept
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
            <h5>
              Notifications <i class="ri-notification-2-line"></i>
            </h5>
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
            <h5>
              Messages <i class="ri-message-2-line"></i>
            </h5>
            <ul>
              {messageList.map((data, index) => (
                <li
                  key={index}
                  onClick={() =>
                    messagingDisplayHandler(data.users.client_email)
                  }
                >
                  <h4>
                    {objectHelperModule.getCookie("userRole") === "client"
                      ? data.host_name
                      : data.client_name}
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
      </div>
    </>
  );
}

export default HostHome;
