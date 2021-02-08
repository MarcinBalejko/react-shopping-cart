import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import Cart from "./components/Cart";
import products from "./data/products.json";
import cartProd from "./data/cart_products.json";

function App() {
  const [shopProducts, setShopProducts] = useState(products);
  const [cartProducts, setCartProducts] = useState(cartProd);

  // toggle
  // console.log(cartProducts[0]);

  return (
    <>
      <Header />
      <Cart
        products={shopProducts}
        setProducts={setShopProducts}
        cartProducts={cartProducts}
        addToCart={setCartProducts}
      />
    </>
  );
}

export default App;
