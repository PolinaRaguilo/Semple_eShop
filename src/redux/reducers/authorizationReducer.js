const initialState = {
  logged: false,
};

const authorizationReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'USER/LOG_IN':
      return {
        ...state,
        logged: true,
      };
    case 'USER/LOG_OUT':
      return {
        ...state,
        logged: false,
      };
    default:
      return state;
  }
};

export { authorizationReducer };
