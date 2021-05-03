const itemsInCart = [];

const cartReducer = (state = itemsInCart, action) => {
  const allCarts = JSON.parse(localStorage.getItem('cartsUsers'));
  const cartOfCurrent =
    localStorage.getItem('currUser') === null || localStorage.getItem('currUser') === 'admin@admin'
      ? []
      : allCarts[`cart-${localStorage.getItem('currUser')}`];
  const itemIndex = cartOfCurrent.findIndex(({ id }) => id === action.id);
  const clockItem = cartOfCurrent[itemIndex];

  let newClockCart;
  let updateClock;
  let newCart;
  let newAllCart;
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
        newCart = [...cartOfCurrent, newClockCart];
        newAllCart = { ...allCarts, [`cart-${localStorage.getItem('currUser')}`]: newCart };
        localStorage.setItem('cartsUsers', JSON.stringify(newAllCart));

        return [...state, newClockCart];
      }
      newCart = [
        ...cartOfCurrent.slice(0, itemIndex),
        newClockCart,
        ...cartOfCurrent.slice(itemIndex + 1),
      ];
      newAllCart = { ...allCarts, [`cart-${localStorage.getItem('currUser')}`]: newCart };
      localStorage.setItem('cartsUsers', JSON.stringify(newAllCart));
      return [...state.slice(0, itemIndex), newClockCart, ...state.slice(itemIndex + 1)];

    case 'DELETE/ALL_CLOCKS':
      newCart = cartOfCurrent.filter(item => item.id !== action.id);
      newAllCart = { ...allCarts, [`cart-${localStorage.getItem('currUser')}`]: newCart };
      localStorage.setItem('cartsUsers', JSON.stringify(newAllCart));
      return state.filter(item => item.id !== action.id);
    case 'DECREASE_COUNT':
      updateClock = {
        ...clockItem,
        count: clockItem.count - 1,
      };
      if (clockItem.count === 1) {
        newCart = [...cartOfCurrent.slice(0, itemIndex), ...cartOfCurrent.slice(itemIndex + 1)];
        newAllCart = { ...allCarts, [`cart-${localStorage.getItem('currUser')}`]: newCart };
        localStorage.setItem('cartsUsers', JSON.stringify(newAllCart));
        return [...state.slice(0, itemIndex), ...state.slice(itemIndex + 1)];
      }
      newCart = [
        ...cartOfCurrent.slice(0, itemIndex),
        updateClock,
        ...cartOfCurrent.slice(itemIndex + 1),
      ];
      newAllCart = { ...allCarts, [`cart-${localStorage.getItem('currUser')}`]: newCart };
      localStorage.setItem('cartsUsers', JSON.stringify(newAllCart));
      return [...state.slice(0, itemIndex), updateClock, ...state.slice(itemIndex + 1)];
    default:
      return state;
  }
};

export { cartReducer };
