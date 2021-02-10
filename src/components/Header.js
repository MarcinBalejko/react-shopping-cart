import React from "react";
import PropTypes from "prop-types";

const Header = (props) => {
  return (
    <header>
      <div className="header-items">
        <div className="header__brand">Shopping Cart</div>
        <button className="header__button-checkout btn">
          Proceed to checkout
        </button>
        <button className="header__button-update btn">
          Update Shopping Cart
        </button>
      </div>
    </header>
  );
};

Header.propTypes = {};

export default Header;
