import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Header = (props) => {
  return (
    <header>
      <div className="header-items">
        <div className="header__brand">Shopping Cart</div>

        <Link to={"/checkout"}>
          <button className="header__button-checkout btn">
            Proceed to checkout
          </button>
        </Link>

        <button className="header__button-update btn">
          Update Shopping Cart
        </button>
      </div>
    </header>
  );
};

Header.propTypes = {};

export default Header;
