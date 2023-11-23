import { useState, useEffect } from "react";

import messagingServices from "../../services/messagingServices";
import objectHelperModule from "../../helpers/objectHelperModule";

import "./messaging.css";

function Messaging({ setMessagingDisplay, recipient }) {
  const [messageData, setMessageData] = useState(null);
  const [textMessage, setTextMessage] = useState("");

  useEffect(() => {
    getMessageHistory();
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
          <h5>
            {objectHelperModule.getCookie("userRole") === "client"
              ? messageData.host_name
              : messageData.messageData.users.client_email}
          </h5>
          <ul className="message-history-container">
            {messageData.messageData
              ? messageData.messageData.messages.map((message, index) => (
                  <li
                    key={index}
                    className={`message-history ${
                      objectHelperModule.getCookie("userRole") === "client"
                        ? "client"
                        : "host"
                    }`}
                  >
                    <p className="message-content">{message.content}</p>
                    <p>{message.entry_date}</p>
                  </li>
                ))
              : null}
          </ul>
          <div className="messaging-control-container">
            <input
              type="text"
              placeholder="message"
              value={textMessage}
              onChange={(e) => setTextMessage(e.target.value)}
            />
            <button onClick={sendMessageHandler}>send</button>
          </div>

          <button
            className="message-button-close"
            onClick={() => {
              setMessagingDisplay(null);
            }}
          >
            X
          </button>
        </div>
      )}
    </div>
  );
}

export default Messaging;
