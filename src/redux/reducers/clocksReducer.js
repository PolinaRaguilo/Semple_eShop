const initialState = {
  clocksData: [],
  loadingClocks: true,
  errorClocks: false,
  typeError: null,
};

const clocksReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_CLOCK_ADMINPAGE':
      return {
        ...state,
        clocksData: [
          ...state.clocksData,
          {
            id: action.id,
            imageClock: action.imageClock,
            brandClock: action.brandClock,
            collection: action.collection,
            vendorCode: action.vendorCode,
            price: action.price,
            rating: 0,
          },
        ],
      };
    case 'ADD_RATING':
      return {
        ...state,
        ...state.clocksData.map(item => {
          if (item.id === action.id) {
            return {
              ...item,
              rating: action.value,
            };
          }
          return item;
        }),
      };
    case 'CLOCKS/RECEIEVE_CLOCKS':
      return {
        ...state,
        clocksData: action.clocks,
        loadingClocks: false,
      };
    case 'CLOCKS/REQUEST_CLOCKS':
      return {
        ...state,
        loadingClocks: true,
      };
    case 'CLOCKS/FAIL_LOAD':
      return {
        ...state,
        errorClocks: true,
        typeError: action.error,
      };
    case 'DELETE_ITEM/ADMIN_PAGE':
      return {
        ...state,
        clocksData: state.clocksData.filter(user => user.id !== action.id),
      };

    default:
      return state;
  }
};

export { clocksReducer };
