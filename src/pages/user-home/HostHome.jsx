import Header from "../../components/header/Header";

function HostHome({ userCookieState }) {
  return (
    <>
      <Header userCookieState={userCookieState} />
      <div>
        <div>
          <h1>transaction history</h1>
          <ul></ul>
        </div>
        <div>
          <h2>Notfications</h2>
          <ul></ul>
        </div>
        <div>
          <h2>messages</h2>
          <ul></ul>
        </div>
      </div>
    </>
  );
}

export default HostHome;
