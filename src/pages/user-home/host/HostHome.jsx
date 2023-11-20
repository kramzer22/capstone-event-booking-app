import Header from "../../../components/header/Header";
import "./HostHome.css";

function HostHome({ userCookieState }) {
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
            <ul></ul>
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
