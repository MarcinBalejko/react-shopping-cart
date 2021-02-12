import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const CheckoutMessage = ({ setDisableHeaderBtn }) => {
  useEffect(() => {
    setDisableHeaderBtn(true);
  }, []);

  return (
    <div className="message-container">
      <div className="message">
        <div>Your order has been submitted successfully!</div>
        <Link to="/">
          <button
            className="message__go-back-btn btn"
            onClick={() => setDisableHeaderBtn(false)}
          >
            Go Back
          </button>
        </Link>
      </div>
    </div>
  );
};

CheckoutMessage.propTypes = {
  setDisableHeaderBtn: PropTypes.func.isRequired,
};

export default CheckoutMessage;
