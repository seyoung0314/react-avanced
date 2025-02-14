
import { useContext } from 'react';
import styles from './CartItem.module.scss';
import CartContext from '../../context/cart-context';


const CartItem = ({ cart }) => {

  const { id,name, price, amount } = cart;

  const {
    'cart-item': cartItem,
    summary,
    price: priceStyle,
    amount: amountStyle,
    actions,
  } = styles;

  const formatPrice = new Intl.NumberFormat('ko-KR').format(price);


  const { addToCartItem, removeToCartItme } = useContext(CartContext);

  const handleAddClick = (e)=>{
    const preAmount = amount;

    const cartItem = {
      id: id,
      name: name,
      amount: 1,
      price: Math.floor(price/+preAmount),
    };
    addToCartItem(cartItem,Math.floor(price/+preAmount))
  }

  const handleSubClick = e =>{
    removeToCartItme(id)
  }
  
  return (
    <li className={cartItem}>
      <div>
        <h2>{name}</h2>
        <div className={summary}>
          <span className={priceStyle}>{formatPrice}</span>
          <span className={amountStyle}>x {amount}</span>
        </div>
      </div>
      <div className={actions}>
        <button onClick={handleSubClick}>−</button>
        <button onClick={handleAddClick}>+</button>
      </div>
    </li>
  );
};

export default CartItem;
