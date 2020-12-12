import Axios from 'axios';

let maxId = 3;

const receivedClocks = clocks => {
  return {
    type: 'CLOCKS/RECEIEVE_CLOCKS',
    clocks,
  };
};

const requestClocks = () => {
  return {
    type: 'CLOCKS/REQUEST_CLOCKS',
  };
};

const failLoadClocks = error => {
  return {
    type: 'CLOCKS/FAIL_LOAD',
    error,
  };
};

export const fetchClocks = () => async dispatch => {
  dispatch(requestClocks());
  try {
    const response = await Axios.get('/clocks.json');
    dispatch(receivedClocks(response.data));
  } catch (error) {
    dispatch(failLoadClocks(error));
  }
};

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
