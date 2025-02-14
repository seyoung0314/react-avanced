import React, { useContext } from "react";
import styles from "./MealItem.module.scss";
import MealItemForm from "./MealItemForm";
import CartContext from "../../context/cart-context";

const MealItem = ({ id, price, description, name }) => {
  const { meal, description: desc, price: priceStyle } = styles;

  const formatPrice = new Intl.NumberFormat("ko-KR").format(price);

  const { addToCartItem } = useContext(CartContext);

  // 장바구니 배열에 데이터를 쌓기 위해 배열로 객체 전달
  // 수량정보를 MealItemForm에서 가져와야함

  //MealItemForm에서 입력한 수량을 가져올 함수
  const handleAddToCart = (amount) => {
    //장바구니에 보낼 객체생성
    const cartItem = {
      id: id,
      name: name,
      amount: +amount,
      price: price * +amount,
    };

    addToCartItem(cartItem,cartItem.price);
  };

  return (
    <li className={meal}>
      <div>
        <h3>{name}</h3>
        <div className={desc}>{description}</div>
        <div className={priceStyle}>{formatPrice}원</div>
      </div>
      <div>
        <MealItemForm id={id} onAddToCart={handleAddToCart} />
      </div>
    </li>
  );
};

export default MealItem;
