import "./error.css";

function Error({ pageViewState }) {
  return (
    <div className="error-container">
      <div>
        <h1>404</h1>
        <h2>Page not found.</h2>
        <p>The page you are looking for doesn't exist or has been removed.</p>
        <button
          onClick={() => {
            pageViewState.pageViewFunction("/");
          }}
        >
          Return to home page{" "}
        </button>
      </div>
    </div>
  );
}

export default Error;
