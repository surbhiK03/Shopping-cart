import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";

import Header from "./component/Header";
import FontAwesome from "react-fontawesome";
import Home from "./Home.js";
import { createContext } from "react";
import { Provider } from "react";
import Cart from "./Cart";
import Data from "./component/Data";
import CartContext from "./Context";

const App = () => {
  const [data] = useState(Data);
  const [cartItems, setCartItems] = useState([]);

  // console.log(cartItems);
  const addItem = (item) => {
    if (!cartItems.find((cart) => cart.id === item.id)) {
      setCartItems([...cartItems, item]);
    }
    // console.log("hi",item)
    // var arr = []
    // arr.push(item)
    // setCartItems(arr)
  };

  return (
    <CartContext.Provider value={{ data, addItem, cartItems, setCartItems }}>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </CartContext.Provider>
  );
};

export default App;
