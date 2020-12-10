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

export const addRating = (value, id) => {
  return {
    type: 'ADD_RATING',
    value,
    id,
  };
};

export const deleteItemAdmin = id => {
  return {
    type: 'DELETE_ITEM/ADMIN_PAGE',
    id,
  };
};
