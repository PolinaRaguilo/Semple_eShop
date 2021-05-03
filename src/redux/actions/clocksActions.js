/* eslint-disable no-debugger */
import { nanoid } from 'nanoid';
import ClocksService from '../../Services/ClocksService';

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
  price,
  gender
) => async dispatch => {
  const data = {
    id: nanoid(5),
    imageClock,
    brandClock,
    collection,
    vendorCode,
    price,
    gender,
    rating: defaultRating,
    editClock: false,
  };
  await dbClocks.addNewClock(data).then(() => {
    dispatch(fetchClocks());
  });
};

export const addRating = (value, id) => async dispatch => {
  await dbClocks.updateClock({ rating: value }, id);
  dispatch({
    type: 'ADD_RATING',
    value,
    id,
  });
};

export const onEditClock = (id, value) => async dispatch => {
  await dbClocks.updateClock({ editClock: value }, id).then(() => {
    dispatch(fetchClocks());
  });
};

export const onSaveUpdateClock = (
  id,
  newImageClock,
  newBrand,
  newCollection,
  newCode,
  newPrice,
  newGender
) => async dispatch => {
  await dbClocks
    .updateClock(
      {
        imageClock: newImageClock,
        brandClock: newBrand,
        collection: newCollection,
        vendorCode: newCode,
        price: newPrice,
        gender: newGender,
      },
      id
    )
    .then(() => {
      dispatch(fetchClocks());
    });
};

export const deleteItemAdmin = id => async dispatch => {
  await dbClocks.deleteClock(id).then(() => {
    dispatch(fetchClocks());
  });
};

export const filterClocks = (genderFilter, brandFilter, data, minPrice, maxPrice) => {
  let filteredList;
  if (brandFilter.toLowerCase() === 'all' && genderFilter.toLowerCase() === 'all') {
    filteredList = data.filter(item => item.price >= minPrice && item.price <= maxPrice);
  } else if (brandFilter.toLowerCase() === 'all' && genderFilter.toLowerCase() !== 'all') {
    filteredList = data
      .filter(item => item.gender.toLowerCase() === genderFilter)
      .filter(item => item.price >= minPrice && item.price <= maxPrice);
  } else if (brandFilter.toLowerCase() !== 'all' && genderFilter.toLowerCase() === 'all') {
    filteredList = data
      .filter(item => item.brandClock.toLowerCase() === brandFilter)
      .filter(item => item.price >= minPrice && item.price <= maxPrice);
  } else {
    filteredList = data
      .filter(item => item.brandClock.toLowerCase() === brandFilter)
      .filter(item => item.gender.toLowerCase() === genderFilter)
      .filter(item => item.price >= minPrice && item.price <= maxPrice);
  }

  return {
    type: 'CLOCKS/FILTRATION',
    filteredList,
  };
};
