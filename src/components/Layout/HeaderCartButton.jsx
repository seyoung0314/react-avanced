import React, { useContext, useEffect, useState } from "react";
import CartIcon from "./CartIcon";
import styles from "./HeaderCartButton.module.scss";
import CartContext from "../../context/cart-context";

const HeaderCartButton = ({}) => {
  const { button, icon, badge, bump } = styles;

  //useContext 훅은 컨텍스트가 관리하는 데이터를 한번에 가져오는 함수
  const { openModal, cartItems } = useContext(CartContext);
  const [ isBump, setIsBump ] = useState(false);

  const count = cartItems.reduce((acc, curr) => acc + curr.amount, 0);

  useEffect(() => {
    if(cartItems.length === 0) return;
    setIsBump(true);
    
    // 애니메이션이 끝나면 클래스 제거 
    const timer = setTimeout(()=>{
      setIsBump(false);
    },300);

    return () =>{
      clearTimeout(timer);
    }
  }, [cartItems]);

  return (
    <button className={`${button} ${isBump ? bump : ""}`} onClick={openModal}>
      <span className={icon}>
        <CartIcon />
      </span>
      <span>My Cart</span>
      <span className={badge}>{count}</span>
    </button>
  );
};

export default HeaderCartButton;
