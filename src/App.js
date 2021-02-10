import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Cart from "./components/Cart";
import EmptyMessage from "./components/Messages/EmptyMessage";
import CheckoutMessage from "./components/Messages/CheckoutMessage";
import products from "./data/products.json";
import cartProd from "./data/cart_products.json";

function App() {
  const [shopProducts, setShopProducts] = useState(products);
  const [cartProducts, setCartProducts] = useState(cartProd);
  const [matchingProducts, setMatchingProducts] = useState([]);

  useEffect(() => {
    updateMatchingProducts();
  }, []);

  const showCheckoutMessage = () => {};

  const cartProdsIds = () => cartProducts.map((item) => item.productId);

  const findMatchingProducts = () => {
    return shopProducts.filter((prod) => cartProdsIds().includes(prod.id));
  };

  const updateMatchingProducts = () => {
    setMatchingProducts(findMatchingProducts());
  };

  const removeMatchingProductFromCart = async (id) => {
    const selectedProduct = await matchingProducts.find(
      (item) => item.id === id
    );
    const remainingProducts = await matchingProducts.filter(
      (prod) => prod !== selectedProduct
    );

    setMatchingProducts(remainingProducts);
  };

  return (
    <Router>
      <Header />
      <Switch>
        {matchingProducts.length !== 0 ? (
          <Route
            path="/"
            render={(props) => (
              <Cart
                {...props}
                products={matchingProducts}
                setProducts={setShopProducts}
                cartProducts={cartProducts}
                addToCart={setCartProducts}
                removeProductHandler={removeMatchingProductFromCart}
              />
            )}
            exact
          />
        ) : (
          <Route path="/" component={EmptyMessage} />
        )}
        <Route path="/checkout" component={CheckoutMessage} />
      </Switch>
    </Router>
  );
}

export default App;
