let addItem = (product) => {
  return {
    type: 'ADD_ITEM',
    payload: product
  };
};

let removeItem = (product) => {
  return {
    type: 'REMOVE_ITEMS',
    payload: product
  };
};

let increase = (product) => {
  return {
    type: 'INCREASE',
    payload: product
  };
};

let decrease = (product) => {
  return {
    type: 'DECREASE',
    payload: product
  };
};

let checkout = () => {
  return {
    type: 'CHECKOUT'
  };
};

let clear = () => {
  return {
    type: 'CLEAR'
  };
};

export {addItem, removeItem, increase, decrease, checkout, clear}