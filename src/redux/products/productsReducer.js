let initialState = {
  loading: false,
  products: [],
  error: ''
};

let productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'REQUEST':
      return {
        ...state,
        loading: true
      };
    case 'SUCCESS':
      return {
        loading: false,
        products: action.payload
      };
    case 'FAILURE':
      return {
        loading: false,
        error: action.payload
      };
    default:
      return state;
  }
};

export default productsReducer;