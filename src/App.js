import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
// Components
import Navbar from './components/Navbar';
import Store from './components/Store';
import ProductDetails from './components/ProductDetails';
import ShopCart from './components/ShopCart';
// redux
import { Provider } from 'react-redux';
import store from "./redux/store"
import AnjamMidam from './components/AnjamMidam';

const App = () => {
  return (
    <Provider store={store}>
      <Navbar />
      <Routes>
        <Route exact path={'/products/:id'} element={<ProductDetails />} />
        <Route path={'/products'} element={<Store />} />
        <Route path={'/shopcart'} element={<ShopCart />} />
        <Route path='/anjammidam' element={<AnjamMidam />} />
        {/* <Route path={'*'} element={<Navigate to='/products' />} /> */}
        <Route path={'/*'} element={<Store />} />
      </Routes>
    </Provider>
  );
};

export default App;
