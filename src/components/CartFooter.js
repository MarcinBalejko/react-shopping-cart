import React from "react";
import PropTypes from "prop-types";

const CartFooter = ({ updateSubtotal }) => {
  return (
    <>
      <hr></hr>
      <div className="cart-container__cart-footer">
        <button
          className="update-cart-btn btn"
          onClick={() => updateSubtotal()}
        >
          Update Shopping Cart
        </button>
      </div>
    </>
  );
};

CartFooter.propTypes = {
  updateSubtotal: PropTypes.func.isRequired,
};

export default CartFooter;
