import React from 'react';
import { Link } from 'react-router-dom';
// img
import trashImg from '../../assets/icons/trash.svg';
// redux
import { useSelector, useDispatch } from 'react-redux';
import {
  removeItem,
  addItem,
  increase,
  decrease
} from '../../redux/cart/cartAction';

// style
import styles from '../../styles/productCard.module.css';
//functions
import { handleTitle, IsInCart, quantityCount } from '../../helper/Functions';

const ProductCard = ({ data }) => {
  let state = useSelector((state) => state.cartState);
  let dispatch = useDispatch();

  return (
    <div className={styles.container}>
      <figure>
        <img src={data.image} alt="prodactImg" />
      </figure>
      <div className={styles.info}>
        <h3>{handleTitle(data.title)}</h3>
        <p>{data.price} $</p>
        <div className={styles.InfoBtns}>
          <Link to={`/products/${data.id}`}>Details</Link>
          <div>
            {quantityCount(state, data.id) === 1 && (
              <button
                className={styles.smallBtn}
                onClick={() => dispatch(removeItem(data))}
              >
                <img src={trashImg} alt="" />
              </button>
            )}
            {quantityCount(state, data.id) > 1 && (
              <button
                className={styles.smallBtn}
                onClick={() => dispatch(decrease(data))}
              >
                -
              </button>
            )}
            {quantityCount(state, data.id) > 0 && (
              <span className={styles.Counter}>
                {quantityCount(state, data.id)}
              </span>
            )}
            {IsInCart(state, data.id) ? (
              <button
                className={styles.smallBtn}
                onClick={() => dispatch(increase(data))}
              >
                +
              </button>
            ) : (
              <button
                className={styles.AddBtn}
                onClick={() => dispatch(addItem(data))}
              >
                Add to Cart
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
