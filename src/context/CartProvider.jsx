import React, { children, useState } from "react";
import CartContext from "./cart-context";

const CartProvider = ({ children }) => {
  const [cartIsShown, setCartIsShown] = useState(false);

  const [cartItmes, setCartItems] = useState([]);

  const [totalPrice, setTotalPrice] = useState(0);

  const handleAddToCartItem = (newCartItem, amount) => {
    setCartItems([...cartItmes, newCartItem]);
    setTotalPrice(totalPrice + amount);
  };

  const initialValue = {
    cartIsShown: cartIsShown, // 모달을 열고 닫는 여부
    openModal: () => setCartIsShown(true), // 모달 열어주는 함수
    closeModal: () => setCartIsShown(false),
    cartItems: cartItmes,
    addToCartItem: handleAddToCartItem,
    totalPrice: totalPrice,
  };

  return (
    <CartContext.Provider value={initialValue}>{children}</CartContext.Provider>
  );
};

export default CartProvider;
