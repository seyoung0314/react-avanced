import { useState } from "react";
import Header from "./components/Layout/Header";

import "./App.css";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartContext from "./context/cart-context";

function App() {
  // 장바구니 모달을 열고 닫는 상태변수
  const [cartIsShown, setCartIsShwon] = useState(false);

  //모달을 열어주는 함수
  const handleShowCart = () => setCartIsShwon(true);

    //모달을 닫아주는 함수
    const handleHideCart = () => setCartIsShwon(false);

  return (
    // 실제로 공유할 데이터는 value로 전달
    <CartContext.Provider value={{
      cartName : "장바구니",
      amout : 10,
      isOpen : false
    }}>
      {cartIsShown && <Cart onClose={handleHideCart}/>}
      <Header onShowCart = {handleShowCart}
      />
      <div id="main">
        <Meals />
      </div>
    </CartContext.Provider>
  );
}

export default App;
