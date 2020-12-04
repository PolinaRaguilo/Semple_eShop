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
