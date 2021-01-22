export const addToCart = (id, imageClock, brandClock, vendorCode, price) => {
  return {
    type: 'ADD_TO_CART',
    id,
    imageClock,
    brandClock,
    vendorCode,
    price,
  };
};

export const deleteItemFromCart = id => {
  return {
    type: 'DELETE/ALL_CLOCKS',
    id,
  };
};

export const minusOneClock = id => {
  return {
    type: 'DECREASE_COUNT',
    id,
  };
};
