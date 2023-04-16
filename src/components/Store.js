import React, { useEffect } from 'react';
// Component
import ProductCard from './shared/productCard';
import Loader from './shared/Loader';

// redux
import { useSelector, useDispatch } from 'react-redux';
import fetchProduct from '../redux/products/productsAction';

// style
import styles from '../styles/Store.module.css';

const Store = () => {
  let productState = useSelector((state) => state.productsState);
  let dispatch = useDispatch();

  useEffect(() => {
    if (productState.products.length === 0) {
      dispatch(fetchProduct());
    }
  }, []);

  let { products } = productState;

  return (
    <div className={styles.container}>
      <div>
        {products.length !== 0 ? (
          products.map((item) => <ProductCard key={item.id} data={item} />)
        ) : (
          <Loader />
        )}
      </div>
    </div>
  );
};

export default Store;
