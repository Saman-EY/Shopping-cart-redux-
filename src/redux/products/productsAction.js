import axios from 'axios';

const fetchProductsRequest = () => {
  return {
    type: 'REQUEST'
  };
};

const fetchProductsSuccess = (data) => {
  return {
    type: 'SUCCESS',
    payload: data
  };
};

const fetchProductsFailure = (error) => {
  return {
    type: 'FAILURE',
    payload: error
  };
};

const fetchProduct = () => {
  return (dispatch) => {
    dispatch(fetchProductsRequest());
    axios
    .get('https://fakestoreapi.com/products')
    .then((res) => {
      let data = res.data;
      dispatch(fetchProductsSuccess(data));
    })
    .catch((err) => {
        let error = err.message;
        dispatch(fetchProductsFailure(error));
      });
  };
};

export default fetchProduct;