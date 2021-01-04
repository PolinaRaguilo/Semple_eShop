import ClocksService from '../../Services/ClocksService';

const newId = `_${1 + Math.floor(Math.random() * 100)}`;
const defaultRating = 0;

const dbClocks = new ClocksService();

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
    await dbClocks.getAllClocks().on('value', snapshot => {
      dispatch(receivedClocks(Object.values(snapshot.val())));
    });
  } catch (error) {
    dispatch(failLoadClocks(error));
  }
};

export const addNewClock = (
  imageClock,
  brandClock,
  collection,
  vendorCode,
  price
) => async dispatch => {
  const data = {
    id: newId,
    imageClock,
    brandClock,
    collection,
    vendorCode,
    price,
    rating: defaultRating,
  };
  await dbClocks
    .addNewClock(data)
    .then(() => {
      dispatch(fetchClocks());
    })
    .catch(e => {
      console.log(e);
    });
};

export const addRating = (value, id) => {
  return {
    type: 'ADD_RATING',
    value,
    id,
  };
};

export const deleteItemAdmin = id => async dispatch => {
  await dbClocks.deleteClock(id).then(() => {
    dispatch(fetchClocks());
  });
};
