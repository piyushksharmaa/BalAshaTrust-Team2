import React from "react";
import { Link } from "react-router-dom";
import "../../styles/supportmain.scss";
const Supportmain = () => {
  return (
    <div className="support-body">
      <div className="support-main-content">
        <h1 className="support-main-heading">Support for a Cause!</h1>
        <h3 className="support-main-content">
          Join hands with us to bring hope and happiness to the lives of
          vulnerable children at Bal Asha Trust. Your support can provide them
          with love, care, education, and a chance to build a brighter future.
          Make a difference today by donating and making their dreams come true.
        </h3>
        <button className="support-main-button">
          <Link to="/donate">Donate Now!</Link>
        </button>
        <button className="support-main-button">
          <Link to="/events">Celebrate an Event!</Link>
        </button>
      </div>
    </div>
  );
};

export default Supportmain;
