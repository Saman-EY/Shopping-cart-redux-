let initialState = {
  selectedItems: [],
  total: 0,
  itemsCounter: 0,
  checkout: false
};

let sumItems = (items) => {
  const itemsCounter = items.reduce((total, product) => total + product.qty, 0);
  let total = items
    .reduce((total, product) => total + product.price * product.qty, 0)
    .toFixed(2);
  return { itemsCounter, total };
};

let cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      if (!state.selectedItems.find((item) => item.id === action.payload.id)) {
        state.selectedItems.push({
          ...action.payload,
          qty: 1
        });
      }
      return {
        ...state,
        selectedItems: [...state.selectedItems],
        ...sumItems(state.selectedItems),
        checkout: false
      };

    case 'REMOVE_ITEMS':
      let newSelectedItems = state.selectedItems.filter(
        (item) => item.id !== action.payload.id
      );
      return {
        ...state,
        selectedItems: [...newSelectedItems],
        ...sumItems(newSelectedItems)
      };

    case 'INCREASE':
      let indexI = state.selectedItems.findIndex(
        (i) => i.id === action.payload.id
      );
      state.selectedItems[indexI].qty++;
      return {
        ...state,
        ...sumItems(state.selectedItems)
      };
    case 'DECREASE':
      let indexD = state.selectedItems.findIndex(
        (i) => i.id === action.payload.id
      );
      state.selectedItems[indexD].qty--;
      return {
        ...state,
        ...sumItems(state.selectedItems)
      };
    case 'CHECKOUT':
      return {
        selectedItems: [],
        itemsCounter: 0,
        total: 0,
        checkout: true
      };
    case 'CLEAR':
      return {
        selectedItems: [],
        itemsCounter: 0,
        total: 0,
        checkout: false
      };
    default:
      return state;
  }
};

export default cartReducer;
