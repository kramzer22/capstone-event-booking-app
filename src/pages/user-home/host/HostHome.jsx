import { useState, useEffect } from "react";

import Header from "../../../components/header/Header";

import notificationServices from "../../../services/notificationServices";
import "./HostHome.css";

function HostHome({ userCookieState }) {
  const [notifications, setNotifications] = useState([]);

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
  useEffect(() => {
    getNotificationList();
  }, []);

  console.log(notifications);

  return (
    <>
      <Header userCookieState={userCookieState} />
      <div className="host-user-main">
        <div className="host-home-main">
          <div className="transaction-container">
            <h1>transaction history</h1>
            <ul></ul>
          </div>
          <div className="notification-container">
            <h2>Notfications</h2>
            <ul>
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
    </>
  );
}

export default HostHome;
