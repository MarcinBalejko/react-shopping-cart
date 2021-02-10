import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Message from "./Message";
import ProductItem from "./ProductItem";
import CartFooter from "./CartFooter";
import ShippingScreen from "./ShippingScreen";

const Cart = ({ products, setProducts, cartProducts, addToCart }) => {
  const [shippingPrice, setShippingPrice] = useState(23.8);
  const [subtotal, setSubtotal] = useState(0);
  const [grandTotal, setGrandTotal] = useState(0);
  const [prodsPrice, setProdsPrice] = useState(0);

  useEffect(() => {
    console.log(prodsPrice);
    updateSubtotal();
    console.log(subtotal);
  }, [prodsPrice, subtotal]);

  const updateSubtotal = () => {
    setSubtotal(prodsPrice.toFixed(2));
  };

  const setCurrentProdsPrice = (productprice, operation) => {
    if (operation === "plus") {
      return setProdsPrice(prodsPrice + productprice);
    } else if (operation === "minus") {
      return setProdsPrice(prodsPrice - productprice);
    }
  };

  const removeProductHandler = async (id) => {
    const selectedProduct = await products.find((item) => item.id === id);
    const remainingProducts = await products.filter(
      (prod) => prod !== selectedProduct
    );
    setProducts(remainingProducts);
    console.log(remainingProducts);
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
      <ShippingScreen shippingPrice={shippingPrice} subtotal={subtotal} />
    </div>
  );
};

Cart.propTypes = {
  products: PropTypes.array.isRequired,
  cartProducts: PropTypes.array.isRequired,
  addToCart: PropTypes.func.isRequired,
};

export default Cart;
