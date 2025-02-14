import React, { children, useState } from "react";
import CartContext from "./cart-context";

const CartProvider = ({ children }) => {
  const [cartIsShown, setCartIsShown] = useState(false);

  const [cartItems, setCartItems] = useState([]);

  const [totalPrice, setTotalPrice] = useState(0);

  const handleAddToCartItem = (newCartItem, amount) => {

    // 원본 배열을 복사
    const existingItems = [...cartItems]; 
    // 이미 장바구니에 있는 항목인지를 체크
    const existingItem = existingItems.find(cartItem => cartItem.id === newCartItem.id);
    
    if (existingItem) { // 수량과 가격을 갱신
      existingItem.amount += newCartItem.amount;
      existingItem.price += newCartItem.price;
      setCartItems(existingItems); // 원본에 복사배열 갱신
    } else { // 배열에 첫 추가
      setCartItems([...cartItems, newCartItem]);
    }

    setTotalPrice(totalPrice + amount);
  };

  const initialValue = {
    cartIsShown: cartIsShown, // 모달을 열고 닫는 여부
    openModal: () => setCartIsShown(true), // 모달 열어주는 함수
    closeModal: () => setCartIsShown(false),
    cartItems: cartItems,
    addToCartItem: handleAddToCartItem,
    totalPrice: totalPrice,
  };

  return (
    <CartContext.Provider value={initialValue}>{children}</CartContext.Provider>
  );
};

export default CartProvider;
