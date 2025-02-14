import React,{useContext} from "react";


import Cart from "./Cart";
import Header from "../Layout/Header";
import CartContext from "../../context/cart-context";
import Meals from "../Meals/Meals";

const CartApp = () => {
  const { cartIsShown } = useContext(CartContext);

  return (
    <>
      {cartIsShown && <Cart />}
      <Header />
      <div id="main">
        <Meals />
      </div>
    </>
  );
};

export default CartApp;
