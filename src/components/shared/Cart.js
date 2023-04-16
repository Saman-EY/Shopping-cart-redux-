import React, { useContext } from 'react';
// icon
import trash from '../../assets/icons/trash.svg';
// functions
import { handleTitle } from '../../helper/Functions';
// redux
import { useDispatch } from 'react-redux';
// style
import styles from '../../styles/Cart.module.css';
// actions
import { removeItem, decrease, increase } from '../../redux/cart/cartAction';

const Cart = (props) => {
  let { image, title, price, qty } = props.data;

  let dispatch = useDispatch();

  return (
    <div className={styles.container}>
      <figure>
        <img src={image} alt="product-img" />
      </figure>
      <div>
        <h3>{handleTitle(title)}</h3>
        <p>{price} $</p>
      </div>
      <span>{qty}</span>
      <div className={styles.BtnSection}>
        {qty === 1 ? (
          <button onClick={() => dispatch(removeItem(props.data))}>
            <img src={trash} alt="svg" />
          </button>
        ) : (
          <button onClick={() => dispatch(decrease(props.data))}>-</button>
        )}
        <button onClick={() => dispatch(increase(props.data))}>+</button>
      </div>
    </div>
  );
};

export default Cart;
