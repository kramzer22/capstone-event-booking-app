import { useRef } from "react";

import "./instantMessaging.css";

function InstantMessaging({}) {
  const messagingChat = useRef(null);
  const messagingButton = useRef(null);

  const showMessagingPopUp = () => {
    if (messagingChat.current) {
      messagingButton.current.style.display = "none";
      messagingChat.current.style.display = "flex";
      setTimeout(() => {
        messagingChat.current.style.width = "440px";
        messagingChat.current.style.height = "600px";
      }, 10);
    }
  };

  const hideMessagingPopUp = () => {
    if (messagingChat.current) {
      messagingChat.current.style.width = "10px";
      messagingChat.current.style.height = "10px";
      setTimeout(() => {
        messagingButton.current.style.display = "flex";
        messagingChat.current.style.display = "none";
      }, 500);
    }
  };

  return (
    <div className="instant-messaging-container">
      <div ref={messagingChat} className="messaging-chat-container">
        <div className="messaging-chat-header">
          <h2>Customer Support</h2>
          <button onClick={hideMessagingPopUp}>X</button>
        </div>

        <form action="">
          <textarea name="" id="" cols="30" rows="13"></textarea>
        </form>

        <div className="message-input-container">
          <input type="text" placeholder="message here" />
          <button>send</button>
        </div>
      </div>
      <div
        ref={messagingButton}
        className="instant-messaging-button"
        onClick={showMessagingPopUp}
      >
        {/* <div className="instant-messaging-box"> */}
        {/* <p>• • •</p> */}
      </div>
      {/* <div className="instant-messaging-tail"></div> */}
      {/* </div> */}
    </div>
  );
}

export default InstantMessaging;
