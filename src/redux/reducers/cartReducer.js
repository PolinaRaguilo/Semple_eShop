const itemsInCart = [];

const cartReducer = (state = itemsInCart, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return [
        ...state,
        {
          id: action.id,
          imageClock: action.imageClock,
          brandClock: action.brandClock,
          vendorCode: action.vendorCode,
          price: action.price,
        },
      ];
    case 'DELETE_FROM_CART':
      return state.filter(item => item.id !== action.id);
    default:
      return state;
  }
};

export { cartReducer };
