import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import fetchProduct from '../redux/products/productsAction';

// style
import styles from '../styles/ProductDetails.module.css';

const ProductDetails = () => {
  let params = useParams();
  let id = params.id;
  let data = useSelector((state) => state.productsState.products);
  let dispatch = useDispatch();

  useEffect(() => {
    if (data.length === 0) {
      dispatch(fetchProduct());
      console.log('hi');
    }
  }, []);

  let product = data[id - 1];

  return (
    <div className={styles.mainContainer}>
      {product && (
        <div className={styles.container}>
          <figure>
            <img src={product.image} alt="productImg" />
          </figure>
          <div className={styles.description}>
            <h3>{product.title}</h3>
            <p>{product.description}</p>
            <p>
              Category: <span>{product.category}</span>
            </p>
            <div>
              <span>{product.price} $ </span>
              <Link to={'/products'}>Back to shop</Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
