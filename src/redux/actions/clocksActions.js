let maxId = 3;

export const addNewClock = (imageClock, brandClock, collection, vendorCode, price) => {
  return {
    type: 'ADD_CLOCK_ADMINPAGE',
    id: ++maxId,
    imageClock,
    brandClock,
    collection,
    vendorCode,
    price,
  };
};
