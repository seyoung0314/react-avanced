import React, { children, useState } from "react";
import CartContext from "./cart-context";
import { IoEllipseSharp } from "react-icons/io5";

const CartProvider = ({ children }) => {
  const [cartIsShown, setCartIsShown] = useState(false);

  const [cartItems, setCartItems] = useState([]);

  const [totalPrice, setTotalPrice] = useState(0);

  const handleAddToCartItem = (newCartItem, amount) => {
    // 원본 배열을 복사
    const existingItems = [...cartItems];
    // 이미 장바구니에 있는 항목인지를 체크
    const existingItem = existingItems.find(
      (cartItem) => cartItem.id === newCartItem.id
    );

    if (existingItem) {
      // 수량과 가격을 갱신
      existingItem.amount += newCartItem.amount;
      existingItem.price += newCartItem.price;
      setCartItems(existingItems); // 원본에 복사배열 갱신
    } else {
      // 배열에 첫 추가
      setCartItems([...cartItems, newCartItem]);
    }

    setTotalPrice(totalPrice + amount);
  };

  const handleRemoveToCartItem = (id) => {
    //원본 배열 복사
    const existingItems = [...cartItems];
    // 장바구니에 있는 항목 체크
    const existingItem = existingItems.find((cartItem) => cartItem.id === id);

    //항목 하나의 가격
    const eachPrice = Math.floor(existingItem.price / existingItem.amount);

    // 수량이 1인경우 배열에서 제거
    if (existingItem.amount === 1) {
      setCartItems(existingItems.filter((item) => item.id !== id));
    } else {
      existingItem.amount--;
      existingItem.price -= eachPrice;

      setCartItems(existingItems);
    }
    setTotalPrice((pre) => pre - eachPrice);
  };

  const initialValue = {
    cartIsShown: cartIsShown, // 모달을 열고 닫는 여부
    openModal: () => setCartIsShown(true), // 모달 열어주는 함수
    closeModal: () => setCartIsShown(false),
    cartItems: cartItems,
    addToCartItem: handleAddToCartItem,
    removeToCartItme: handleRemoveToCartItem,
    totalPrice: totalPrice,
  };

  return (
    <CartContext.Provider value={initialValue}>{children}</CartContext.Provider>
  );
};

export default CartProvider;
