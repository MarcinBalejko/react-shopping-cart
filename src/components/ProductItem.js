import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

const ProductItem = ({
  product,
  cart,
  deleteProduct,
  changeCurrentProdsPrice,
  updateSubtotal,
}) => {
  const [prodQty, setProdQty] = useState("");

  useEffect(() => {
    findProductInCart();
  }, []);

  useEffect(() => {
    if (prodQty > 0) {
      changeCurrentProdsPrice(prodQty * product.price, "plus");
      updateSubtotal();
    }
  }, [prodQty]);

  const findProductInCart = async () => {
    try {
      const cartproduct = await cart.find(
        (item) => item.productId === product.id
      );
      setProdQty(cartproduct.quantity);
    } catch (error) {
      console.log(error);
    }
  };

  const addToCart = () => {
    if (prodQty < 10) {
      setProdQty(prodQty + 1);
      changeCurrentProdsPrice(product.price, "plus");
    } else {
      return;
    }
  };

  const removeFromCart = () => {
    if (prodQty > 0) {
      setProdQty(prodQty - 1);
      changeCurrentProdsPrice(product.price, "minus");
    } else {
      return;
    }
  };

  return (
    <>
      <hr></hr>
      <div className="product-item">
        <div className="product-item__cancel">
          <button
            className="product-item__cancel-btn"
            onClick={() => {
              deleteProduct(product.id);
            }}
          >
            <img src={"../../images/x-img.png"} alt="cancel"></img>
          </button>
        </div>
        <div className="product-item__product-img">
          <img src={`../../images/${product.image}`} alt="productimage"></img>
        </div>
        <div className="product-item__product-name">{product.name}</div>
        <div className="product-item__product-price">${product.price}</div>
        <div className="product-item__product-qty">
          <button className="btn-minus btn" onClick={() => removeFromCart()}>
            -
          </button>
          <span className="product-qty">{prodQty}</span>
          <button className="btn-plus btn" onClick={() => addToCart()}>
            +
          </button>
          <span>
            <img
              className="edit-image"
              src={"../../images/edit-img.png"}
              alt="edit"
            ></img>
          </span>
        </div>
      </div>
    </>
  );
};

ProductItem.propTypes = {
  product: PropTypes.object.isRequired,
  cart: PropTypes.array.isRequired,
  deleteProduct: PropTypes.func.isRequired,
  changeCurrentProdsPrice: PropTypes.func.isRequired,
  updateSubtotal: PropTypes.func.isRequired,
};

export default ProductItem;
