import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Header = ({ disableHeaderBtn }) => {
  return (
    <header className="header">
      <div className="header__items">
        <div className="header__brand">Shopping Cart</div>

        <Link to={"/checkout"}>
          <button
            className="header__button-checkout btn"
            disabled={disableHeaderBtn ? true : false}
          >
            Proceed to checkout
          </button>
        </Link>

        <button
          className="header__button-update btn "
          disabled={disableHeaderBtn === true ? true : false}
        >
          Update Shopping Cart
        </button>
      </div>
    </header>
  );
};

Header.propTypes = {
  disableHeaderBtn: PropTypes.bool.isRequired,
};

export default Header;
