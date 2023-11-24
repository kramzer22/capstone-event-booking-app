import { useState, useEffect } from "react";

import messagingServices from "../../services/messagingServices";
import objectHelperModule from "../../helpers/objectHelperModule";

import "./messaging.css";

function Messaging({ setMessagingDisplay, recipient }) {
  const [messageData, setMessageData] = useState(null);
  const [textMessage, setTextMessage] = useState("");

  useEffect(() => {
    getMessageHistory();

    const intervalId = setInterval(() => {
      getMessageHistory();
    }, 600);

    return () => clearInterval(intervalId);
  }, []);

  const getMessageHistory = async () => {
    try {
      const data = {
        role: objectHelperModule.getCookie("userRole"),
        recipient: recipient,
      };
      const response = await messagingServices.getMessagingHistory(data);
      console.log(response.data);
      if (response.status === 200) {
        setMessageData(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  console.log(messageData);

  const sendMessageHandler = async () => {
    if (textMessage.trim() !== "") {
      try {
        const data = {
          role: objectHelperModule.getCookie("userRole"),
          recipient: recipient,
          message: textMessage,
        };
        const response = await messagingServices.sendMessage(data);

        if (response.status === 200) {
          await getMessageHistory();
          setTextMessage("");
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <div className="messaging-container">
      {!messageData ? null : (
        <div className="messaging-body-container">
          <div className="messaging-title">
            <div className="messaging-icon">
              <i class="ri-user-3-line"></i>
            </div>
            <h5>
              {objectHelperModule.getCookie("userRole") === "client"
                ? messageData.host_name
                : messageData.client_name}
            </h5>
          </div>
          <ul className="message-history-container">
            {messageData.messages
              ? messageData.messages.map((message, index) => (
                  <li
                    key={index}
                    className={`message-history ${
                      message.who_is === "sender" ? "sender" : "recipient"
                    }`}
                  >
                    <p className="message-content">{message.content}</p>
                    <small>{message.elapsed}</small>
                  </li>
                ))
              : null}
          </ul>
          <div className="messaging-control-container">
            <input
              type="text"
              placeholder="Write a message..."
              value={textMessage}
              onChange={(e) => setTextMessage(e.target.value)}
            />
            <button onClick={sendMessageHandler}>send</button>
          </div>

          <div className="messaging-close-container">
            <button
              className="message-button-close"
              onClick={() => {
                setMessagingDisplay(null);
              }}
            >
              ✖
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Messaging;
