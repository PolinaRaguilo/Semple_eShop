const initialState = {
  clocksData: [],
  loadingClocks: true,
  errorClocks: false,
  typeError: null,
  forFilter: [],
};

const clocksReducer = (state = initialState, action) => {
  switch (action.type) {
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
        forFilter: action.clocks,
        loadingClocks: false,
      };
    case 'CLOCKS/REQUEST_CLOCKS':
      return {
        ...state,
        loadingClocks: true,
        errorClocks: false,
      };
    case 'CLOCKS/FAIL_LOAD':
      return {
        ...state,
        errorClocks: true,
        loadingClocks: false,
        typeError: action.error,
      };
    case 'CLOCKS/FILTRATION':
      // eslint-disable-next-line no-debugger
      // debugger;
      return {
        ...state,
        clocksData: action.filteredList,
      };
    default:
      return state;
  }
};

export { clocksReducer };
