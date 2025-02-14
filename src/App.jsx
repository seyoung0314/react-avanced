import { useContext, useState } from "react";
import Header from "./components/Layout/Header";

import "./App.css";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";

import CartProvider from "./context/CartProvider";
import CartContext from "./context/cart-context";
import CartApp from "./components/Cart/CartApp";

function App() {


  return (
    <CartProvider>
      {/* 제공자랑 소비자는 같으면 안됨 */}
      <CartApp/>
      {/* {cartIsShown && <Cart />}
      <Header />
      <div id="main">
        <Meals />
      </div> */}
    </CartProvider>
  );
}

export default App;
