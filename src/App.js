import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import Cart from "./components/Cart";
import products from "./data/products.json";
import cartProd from "./data/cart_products.json";

function App() {
  const [shopProducts, setShopProducts] = useState(products);
  const [cartProducts, setCartProducts] = useState(cartProd);
  const [matchingProducts, setMatchingProducts] = useState([]);

  useEffect(() => {
    updateMatchingProducts();
  }, []);

  console.log(matchingProducts);

  const cartProdsIds = () => cartProducts.map((item) => item.productId);
  console.log(cartProdsIds());

  const findMatchingProducts = () => {
    return shopProducts.filter((prod) => cartProdsIds().includes(prod.id));
  };
  console.log(findMatchingProducts());

  const updateMatchingProducts = () => {
    setMatchingProducts(findMatchingProducts());
  };

  return (
    <>
      <Header />
      {matchingProducts.length !== 0 ? (
        <Cart
          products={matchingProducts}
          setProducts={setShopProducts}
          cartProducts={cartProducts}
          addToCart={setCartProducts}
        />
      ) : (
        "You have not selected any products yet"
      )}
    </>
  );
}

export default App;
