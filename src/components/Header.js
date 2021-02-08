import React from "react";

const Header = () => {
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

export default Header;
