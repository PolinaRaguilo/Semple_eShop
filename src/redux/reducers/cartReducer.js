const itemsInCart = [];

const cartReducer = (state = itemsInCart, action) => {
  const itemIndex = state.findIndex(({ id }) => id === action.id);
  const clockItem = state[itemIndex];
  let newClockCart;
  let updateClock;
  switch (action.type) {
    case 'ADD_TO_CART':
      if (clockItem) {
        newClockCart = {
          ...clockItem,
          count: clockItem.count + 1,
        };
      } else {
        newClockCart = {
          id: action.id,
          imageClock: action.imageClock,
          brandClock: action.brandClock,
          vendorCode: action.vendorCode,
          price: action.price,
          count: 1,
        };
      }
      if (itemIndex < 0) {
        return [...state, newClockCart];
      }
      return [...state.slice(0, itemIndex), newClockCart, ...state.slice(itemIndex + 1)];

    case 'DELETE/ALL_CLOCKS':
      return state.filter(item => item.id !== action.id);
    case 'DECREASE_COUNT':
      updateClock = {
        ...clockItem,
        count: clockItem.count - 1,
      };
      if (clockItem.count === 1) {
        return [...state.slice(0, itemIndex), ...state.slice(itemIndex + 1)];
      }
      return [...state.slice(0, itemIndex), updateClock, ...state.slice(itemIndex + 1)];
    default:
      return state;
  }
};

export { cartReducer };
