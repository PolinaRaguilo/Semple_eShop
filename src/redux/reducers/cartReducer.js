const initialState = {
  total: 0,
  cartItems: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return {
        ...state,
        cartItems: [
          ...state.cartItems,
          {
            id: action.id,
            imageClock: action.imageClock,
            brandClock: action.brandClock,
            vendorCode: action.vendorCode,
            price: action.price,
          },
        ],
      };
    default:
      return state;
  }
};

export { cartReducer };
