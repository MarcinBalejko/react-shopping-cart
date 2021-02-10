import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Message from "./Message";
import ProductItem from "./ProductItem";
import CartFooter from "./CartFooter";
import ShippingScreen from "./ShippingScreen";

const Cart = ({
  products,
  setProducts,
  cartProducts,
  addToCart,
  removeProductHandler,
}) => {
  const [shippingPrice, setShippingPrice] = useState(23.8);
  const [subtotal, setSubtotal] = useState(0);
  const [grandtotal, setGrandtotal] = useState(0);
  const [prodsPrice, setProdsPrice] = useState(0);
  const [removedProductPrice, setRemovedProductPrice] = useState(0);

  useEffect(() => {
    console.log(prodsPrice);
    updateSubtotal();
    updateGrandTotal();
    console.log(subtotal);
  }, [subtotal]);

  useEffect(() => {
    setSubtotal(prodsPrice.toFixed(2));
  }, [removedProductPrice]);

  const updateSubtotal = () => {
    setSubtotal(prodsPrice.toFixed(2));
    if (subtotal > 100) {
      setShippingPrice(0);
    } else {
      setShippingPrice(23.8);
    }
  };

  const updateGrandTotal = () => {
    let currentShippingPrice = shippingPrice;
    prodsPrice > 100
      ? (currentShippingPrice = 0)
      : (currentShippingPrice = 23.8);
    setGrandtotal((prodsPrice + currentShippingPrice).toFixed(2));
  };

  const setCurrentProdsPrice = (productprice, operation) => {
    if (operation === "plus") {
      return setProdsPrice(prodsPrice + productprice);
    } else if (operation === "minus") {
      return setProdsPrice(prodsPrice - productprice);
    } else if (operation === "remove") {
      setProdsPrice(prodsPrice - productprice);
      setRemovedProductPrice(prodsPrice - productprice);
    }
  };

  const checkoutHandler = () => {
    "";
  };

  return (
    <div className="cart-container">
      <div className="cart-container__prod-screen">
        <div className="prod-screen__header">
          <div className="header__product-name">Product Name</div>
          <div className="header__unit-price">Unit Price</div>
          <div className="header__qty">Qty</div>
        </div>

        <div className="prod-screen__selected-products-container">
          {products ? (
            products.map((product) => (
              <ProductItem
                key={product.id}
                product={product}
                cart={cartProducts}
                deleteProduct={removeProductHandler}
                products={products}
                changeCurrentProdsPrice={setCurrentProdsPrice}
                updateSubtotal={updateSubtotal}
              />
            ))
          ) : (
            <div className="no-prod-found">No products selected</div>
          )}
        </div>

        {/* FOOTER */}
        <CartFooter updateSubtotal={updateSubtotal} />
      </div>

      {/* SHIPPING SCREEN */}
      <ShippingScreen
        shippingPrice={shippingPrice}
        subtotal={subtotal}
        grandtotal={grandtotal}
      />
    </div>
  );
};

Cart.propTypes = {
  products: PropTypes.array.isRequired,
  cartProducts: PropTypes.array.isRequired,
  addToCart: PropTypes.func.isRequired,
  removeProductHandler: PropTypes.func.isRequired,
};

export default Cart;
