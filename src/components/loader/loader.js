import "./loader.css";

// Simple Loader
const Loader = () => (
  <div className="loader-container position-absolute w-100">
    <div className="loader-inner-div border rounded p-1">
      <svg id="loader" viewBox="00 00 50 50">
        <circle id="loader-circle" fill="none" cx="25" cy="25" r="20"></circle>
      </svg>
    </div>
  </div>
);

export default Loader;
