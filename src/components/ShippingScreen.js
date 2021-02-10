import React from "react";
import PropTypes from "prop-types";

const ShippingScreen = ({ shippingPrice, subtotal, grandtotal }) => {
  return (
    <div className="cart-container__ship-screen">
      <div className="cart-container__ship-content">
        <div className="shipping-container">
          <div>SHIPPING</div>
          <div className="shipping-price">${shippingPrice.toFixed(2)}</div>
        </div>
        <div className="cart-totals">
          <div>
            <p>CART TOTALS</p>
          </div>
          <div className="totals-wrapper">
            <div className="subtotal-display">
              <span>Subtotal</span>
              <span className="subtotal-price">${subtotal}</span>
            </div>
            <div className="grand-total-display">
              <span>Grand Total</span>
              <span className="grand-total-price">${grandtotal}</span>
            </div>
            <div className="ship-checkout">
              <button className="ship-checkout-btn btn">
                Proceed to checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

ShippingScreen.propTypes = {
  shippingPrice: PropTypes.number.isRequired,
  subtotal: PropTypes.number.isRequired,
  grandtotal: PropTypes.number.isRequired,
};

export default ShippingScreen;
