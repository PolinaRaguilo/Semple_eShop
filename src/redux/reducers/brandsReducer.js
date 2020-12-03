const brands = [
  { id: 1, brand: 'Tissot' },
  { id: 2, brand: 'MK' },
  { id: 3, brand: 'CASIO' },
];

const brandsReducer = (state = brands, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export { brandsReducer };
