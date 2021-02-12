import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const EmptyMessage = ({ setDisableHeaderBtn }) => {
  useEffect(() => {
    setDisableHeaderBtn(true);
  }, []);

  return (
    <div className="message-container">
      <div>No products in the cart</div>
      <Link to="/">
        <button className="message__go-back-btn btn">Back to shop</button>
      </Link>
    </div>
  );
};

EmptyMessage.propTypes = {
  setDisableHeaderBtn: PropTypes.func.isRequired,
};

export default EmptyMessage;
